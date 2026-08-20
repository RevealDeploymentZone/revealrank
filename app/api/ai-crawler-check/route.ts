import { NextRequest, NextResponse } from "next/server";
import crawlersData from "@/data/ai-crawlers.json";

// ── Types ─────────────────────────────────────────────────────────────────────

interface CrawlerEntry {
  token: string;
  vendor: string;
  surface: string;
  category: "retrieval" | "training" | "user_fetch" | "dataset";
  severity: string;
  consequence: string;
  note?: string;
  docs?: string;
}

export interface BotResult extends CrawlerEntry {
  status: "allowed" | "blocked" | "not_specified";
  hasSpecificGroup: boolean;
  hasCrawlDelay: boolean;
}

export interface Mismatch {
  type: string;
  message: string;
  severity: "critical" | "warning" | "info";
}

export interface CheckResult {
  domain: string;
  resolvedUrl: string;
  timestamp: string;
  robotsStatus: number | null;
  robotsSize: number;
  robotsError?: string;
  allBlocked: boolean;
  fileTooBig: boolean;
  llmsTxtFound: boolean;
  hasCrawlDelay: boolean;
  sitemaps: string[];
  score: number;
  band: string;
  bots: BotResult[];
  legacyTokens: Array<{ token: string; note: string; found: boolean }>;
  googlebotBlocked: boolean;
  mismatches: Mismatch[];
  correctedSnippet: string;
}

interface ParsedGroup {
  agents: string[];
  rules: { type: "allow" | "disallow"; pattern: string }[];
  hasCrawlDelay: boolean;
}

// ── SSRF Protection ───────────────────────────────────────────────────────────

const PRIVATE_PATTERNS = [
  /^localhost$/i,
  /^127\./,
  /^10\./,
  /^172\.(1[6-9]|2[0-9]|3[01])\./,
  /^192\.168\./,
  /^0\./,
  /^169\.254\./,
  /^::1$/,
  /^fc[0-9a-f]{2}:/i,
  /\.local$/i,
  /\.internal$/i,
  /\.localhost$/i,
];

const DOMAIN_RE =
  /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;

function normalizeDomain(input: string): string | null {
  let d = input.trim().toLowerCase();
  d = d.replace(/^https?:\/\//, "");
  d = d.replace(/\/.*$/, "");
  d = d.replace(/:.*$/, ""); // strip port
  if (!DOMAIN_RE.test(d)) return null;
  if (PRIVATE_PATTERNS.some((p) => p.test(d))) return null;
  return d;
}

// ── Fetching ──────────────────────────────────────────────────────────────────

async function fetchWithTimeout(url: string, ms = 10000): Promise<Response> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(url, {
      signal: ctrl.signal,
      headers: {
        "User-Agent":
          "RevealRankBot/1.0 (+https://www.revealrank.com/tools/ai-crawler-checker/)",
      },
      redirect: "follow",
    });
  } finally {
    clearTimeout(t);
  }
}

async function fetchRobots(domain: string): Promise<{
  content: string | null;
  status: number | null;
  resolvedUrl: string;
  error?: string;
}> {
  const variants = domain.startsWith("www.")
    ? [
        `https://${domain}/robots.txt`,
        `http://${domain}/robots.txt`,
      ]
    : [
        `https://${domain}/robots.txt`,
        `https://www.${domain}/robots.txt`,
        `http://${domain}/robots.txt`,
      ];

  for (const url of variants) {
    try {
      const res = await fetchWithTimeout(url);
      if (res.ok) {
        const text = await res.text();
        return {
          content: text.slice(0, 512_000),
          status: res.status,
          resolvedUrl: url,
        };
      }
      if (res.status >= 400 && res.status < 500) {
        return { content: null, status: res.status, resolvedUrl: url };
      }
      if (res.status >= 500) {
        return { content: null, status: res.status, resolvedUrl: url };
      }
    } catch (e: unknown) {
      const err = e as Error;
      if (err.name === "AbortError") {
        return {
          content: null,
          status: null,
          resolvedUrl: url,
          error: "timeout",
        };
      }
      // Try next variant
    }
  }
  return {
    content: null,
    status: null,
    resolvedUrl: `https://${domain}/robots.txt`,
    error: "unreachable",
  };
}

async function checkLlmsTxt(domain: string): Promise<boolean> {
  const urls = [`https://${domain}/llms.txt`, `https://www.${domain}/llms.txt`];
  for (const url of urls) {
    try {
      const res = await fetchWithTimeout(url, 5000);
      if (res.ok) return true;
    } catch {
      // try next
    }
  }
  return false;
}

// ── RFC 9309 Parser ───────────────────────────────────────────────────────────

function parseRobots(content: string): {
  groups: ParsedGroup[];
  sitemaps: string[];
} {
  const sitemaps: string[] = [];
  const groups: ParsedGroup[] = [];
  let agents: string[] = [];
  let rules: { type: "allow" | "disallow"; pattern: string }[] = [];
  let hasCrawlDelay = false;
  let seenRules = false;

  const flush = () => {
    if (agents.length > 0) {
      groups.push({ agents: [...agents], rules: [...rules], hasCrawlDelay });
    }
    agents = [];
    rules = [];
    hasCrawlDelay = false;
    seenRules = false;
  };

  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.split("#")[0].trim();

    if (!line) {
      // Blank line ends a group if it had rules
      if (seenRules || (agents.length > 0 && rules.length > 0)) flush();
      continue;
    }

    const colon = line.indexOf(":");
    if (colon < 1) continue;

    const field = line.slice(0, colon).trim().toLowerCase();
    const value = line.slice(colon + 1).trim();

    if (field === "user-agent") {
      // New user-agent after rules = new group
      if (seenRules) flush();
      agents.push(value);
    } else if (field === "allow" || field === "disallow") {
      if (agents.length > 0) {
        rules.push({ type: field, pattern: value });
        seenRules = true;
      }
    } else if (field === "crawl-delay") {
      if (agents.length > 0) {
        hasCrawlDelay = true;
        seenRules = true;
      }
    } else if (field === "sitemap") {
      sitemaps.push(value);
    }
  }

  flush(); // Handle file ending without blank line
  return { groups, sitemaps };
}

function matchesPattern(pattern: string, path: string): boolean {
  if (!pattern) return false;

  let p = pattern;
  let decoded = path;
  try {
    p = decodeURIComponent(pattern);
  } catch {}
  try {
    decoded = decodeURIComponent(path);
  } catch {}

  // Build regex: * → .*, $ at end → end anchor, everything else escaped
  let regex = "^";
  for (let i = 0; i < p.length; i++) {
    const c = p[i];
    if (c === "*") {
      regex += ".*";
    } else if (c === "$" && i === p.length - 1) {
      regex += "$";
    } else {
      regex += c.replace(/[.+?^{}()|[\]\\]/g, "\\$&");
    }
  }

  try {
    return new RegExp(regex).test(decoded);
  } catch {
    // Fallback: simple prefix match
    return decoded.startsWith(p.replace(/[*$]/g, ""));
  }
}

function getVerdict(
  parsed: { groups: ParsedGroup[] },
  token: string,
  path = "/"
): {
  status: "allowed" | "blocked" | "not_specified";
  hasSpecificGroup: boolean;
  hasCrawlDelay: boolean;
} {
  const tokenLower = token.toLowerCase();

  // Critical RFC 9309 rule: find the most-specific group (exact token match)
  // Do NOT merge with the * group if a specific group exists
  let group =
    parsed.groups.find((g) =>
      g.agents.some((a) => a.toLowerCase() === tokenLower)
    ) ?? null;
  const hasSpecificGroup = group !== null;

  // Fall back to wildcard group only when no specific group exists
  if (!group) {
    group = parsed.groups.find((g) => g.agents.includes("*")) ?? null;
  }

  if (!group)
    return { status: "not_specified", hasSpecificGroup: false, hasCrawlDelay: false };

  // Find best matching rule: longest match wins; Allow beats Disallow on equal length
  let best: { type: "allow" | "disallow"; length: number } | null = null;

  for (const rule of group.rules) {
    if (!rule.pattern) continue; // empty pattern = no match (Disallow: '' means allow all)
    if (matchesPattern(rule.pattern, path)) {
      const len = rule.pattern.length;
      if (
        !best ||
        len > best.length ||
        (len === best.length && rule.type === "allow")
      ) {
        best = { type: rule.type, length: len };
      }
    }
  }

  if (!best) {
    return {
      status: hasSpecificGroup ? "allowed" : "not_specified",
      hasSpecificGroup,
      hasCrawlDelay: group.hasCrawlDelay,
    };
  }

  return {
    status: best.type === "allow" ? "allowed" : "blocked",
    hasSpecificGroup,
    hasCrawlDelay: group.hasCrawlDelay,
  };
}

// ── Scoring ───────────────────────────────────────────────────────────────────

const WEIGHTS: Record<string, number> = {
  retrieval: 5,
  user_fetch: 3,
  training: 1,
  dataset: 1,
};

function computeScore(
  bots: BotResult[],
  googlebotBlocked: boolean,
  serverError: boolean
): number {
  if (serverError) return 0;
  const total = bots.reduce((s, b) => s + (WEIGHTS[b.category] ?? 1), 0);
  const allowed = bots
    .filter((b) => b.status !== "blocked")
    .reduce((s, b) => s + (WEIGHTS[b.category] ?? 1), 0);
  let score = total > 0 ? Math.round((allowed / total) * 100) : 100;
  if (googlebotBlocked) score = Math.min(score, 20);
  return score;
}

function scoreBand(score: number): string {
  if (score >= 90) return "Open";
  if (score >= 70) return "Mostly Open";
  if (score >= 40) return "Partially Blocked";
  return "Blocked";
}

// ── Mismatch Detection ────────────────────────────────────────────────────────

function detectMismatches(bots: BotResult[]): Mismatch[] {
  const mismatches: Mismatch[] = [];
  const get = (token: string) => bots.find((b) => b.token === token);

  // OpenAI: OAI-SearchBot vs GPTBot
  const oai = get("OAI-SearchBot");
  const gpt = get("GPTBot");
  if (oai && gpt) {
    if (oai.status === "blocked" && gpt.status === "blocked") {
      mismatches.push({
        type: "oai_both_blocked",
        message:
          "You are invisible in ChatGPT Search. Blocking both GPTBot (training) and OAI-SearchBot (Search citations) is usually unintentional — these are separate decisions with different consequences. Review your robots.txt to confirm.",
        severity: "critical",
      });
    } else if (gpt.status === "blocked" && oai.status !== "blocked") {
      mismatches.push({
        type: "oai_training_only",
        message:
          "Correctly configured for OpenAI: opted out of model training (GPTBot blocked) while remaining citable in ChatGPT Search (OAI-SearchBot allowed).",
        severity: "info",
      });
    } else if (gpt.status !== "blocked" && oai.status === "blocked") {
      mismatches.push({
        type: "oai_backwards",
        message:
          "Backwards OpenAI configuration: your content trains OpenAI models (GPTBot allowed) but cannot be cited in ChatGPT Search (OAI-SearchBot blocked). You give OpenAI your content but get no Search visibility in return — the worst of both outcomes.",
        severity: "critical",
      });
    }
  }

  // Anthropic: ClaudeBot vs Claude-SearchBot
  const claude = get("ClaudeBot");
  const claudeSearch = get("Claude-SearchBot");
  if (claude && claudeSearch) {
    if (claude.status === "blocked" && claudeSearch.status === "blocked") {
      mismatches.push({
        type: "claude_both_blocked",
        message:
          "You are invisible in Claude Search. Blocking both ClaudeBot (training) and Claude-SearchBot (retrieval) is usually unintentional.",
        severity: "critical",
      });
    } else if (
      claude.status !== "blocked" &&
      claudeSearch.status === "blocked"
    ) {
      mismatches.push({
        type: "claude_backwards",
        message:
          "Backwards Anthropic configuration: training is allowed (ClaudeBot) but search citations are blocked (Claude-SearchBot). Your content feeds Anthropic's models but cannot be cited in Claude answers.",
        severity: "critical",
      });
    }
  }

  return mismatches;
}

// ── robots.txt Snippet Generator ──────────────────────────────────────────────

function generateSnippet(bots: BotResult[]): string {
  const blockedRetrieval = bots.filter(
    (b) => b.category === "retrieval" && b.status === "blocked"
  );
  if (blockedRetrieval.length === 0) return "";

  let out =
    "# ── Fix: Allow AI Retrieval Bots ──────────────────────────────────────\n";
  out +=
    "# These bots cite your content in AI search answers. Add to robots.txt.\n\n";
  for (const bot of blockedRetrieval) {
    out += `# ${bot.vendor} — ${bot.surface}\n`;
    out += `User-agent: ${bot.token}\nAllow: /\n\n`;
  }
  return out.trimEnd();
}

// ── Main Handler ──────────────────────────────────────────────────────────────

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const raw = searchParams.get("domain") ?? "";

  const domain = normalizeDomain(raw);
  if (!domain) {
    return NextResponse.json({ error: "Invalid or disallowed domain." }, { status: 400 });
  }

  // Fetch robots.txt and llms.txt in parallel
  const [robotsResult, llmsTxtFound] = await Promise.all([
    fetchRobots(domain),
    checkLlmsTxt(domain),
  ]);

  const { content, status: robotsStatus, resolvedUrl, error } = robotsResult;
  const fileTooBig = content !== null && content.length > 100_000;

  let parsed = { groups: [] as ParsedGroup[], sitemaps: [] as string[] };
  let allBlocked = false;

  if (error) {
    // Inconclusive — do not guess
  } else if (robotsStatus !== null && robotsStatus >= 400 && robotsStatus < 500) {
    // 4xx = no restrictions; leave parsed empty (all bots will be not_specified → allowed)
  } else if (robotsStatus !== null && robotsStatus >= 500) {
    // 5xx = treat as full disallow
    allBlocked = true;
  } else if (content) {
    parsed = parseRobots(content);
  }

  // Evaluate each registered bot
  const bots: BotResult[] = (crawlersData.bots as CrawlerEntry[]).map((bot) => {
    if (allBlocked) {
      return { ...bot, status: "blocked", hasSpecificGroup: false, hasCrawlDelay: false };
    }
    if (error) {
      return { ...bot, status: "not_specified", hasSpecificGroup: false, hasCrawlDelay: false };
    }
    const v = getVerdict(parsed, bot.token);
    return { ...bot, ...v };
  });

  // Googlebot check (separate — not in the AI registry)
  const googlebotVerdict = allBlocked
    ? "blocked"
    : error
    ? "not_specified"
    : getVerdict(parsed, "Googlebot").status;
  const googlebotBlocked = googlebotVerdict === "blocked";

  // Legacy token detection
  const legacyTokens = (
    crawlersData.legacy as { token: string; note: string }[]
  ).map((l) => {
    if (allBlocked || error) return { ...l, found: false };
    const v = getVerdict(parsed, l.token);
    return { ...l, found: v.hasSpecificGroup };
  });

  // Crawl delay on any AI bot group
  const hasCrawlDelay = bots.some((b) => b.hasCrawlDelay);

  // Score
  const isServerError =
    allBlocked || (robotsStatus !== null && robotsStatus >= 500);
  const score = computeScore(bots, googlebotBlocked, isServerError);
  const band = scoreBand(score);

  // Mismatch detection
  const mismatches = detectMismatches(bots);
  if (googlebotBlocked) {
    mismatches.unshift({
      type: "googlebot_blocked",
      message:
        "Googlebot is disallowed. This removes your site from Google Search entirely and makes you ineligible for Google AI Overviews. Googlebot is not an AI training crawler — this is almost certainly unintentional.",
      severity: "critical",
    });
  }

  // Sort: blocked retrieval first, then blocked user_fetch, then blocked training, then others
  const sortPriority = (b: BotResult) => {
    if (b.status !== "blocked") return 3;
    if (b.category === "retrieval") return 0;
    if (b.category === "user_fetch") return 1;
    return 2;
  };
  const sortedBots = [...bots].sort((a, b) => sortPriority(a) - sortPriority(b));

  // robots.txt corrective snippet
  const correctedSnippet = generateSnippet(bots);

  return NextResponse.json(
    {
      domain,
      resolvedUrl,
      timestamp: new Date().toISOString(),
      robotsStatus,
      robotsSize: content?.length ?? 0,
      robotsError: error,
      allBlocked,
      fileTooBig,
      llmsTxtFound,
      hasCrawlDelay,
      sitemaps: parsed.sitemaps,
      score,
      band,
      bots: sortedBots,
      legacyTokens,
      googlebotBlocked,
      mismatches,
      correctedSnippet,
    } satisfies CheckResult,
    {
      headers: { "Cache-Control": "public, s-maxage=21600" }, // Cache 6 hours
    }
  );
}
