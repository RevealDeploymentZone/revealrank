import { NextRequest, NextResponse } from "next/server";

// ── Types ─────────────────────────────────────────────────────────────────────

export interface DRResult {
  domain: string;
  dr: number | null;
  band: string;
  bandColor: string;
  licenseUrl: string;
  timestamp: string;
  aiAccess: {
    score: number;
    blocked: Array<{ token: string; vendor: string; surface: string }>;
    googlebotBlocked: boolean;
    llmsTxtFound: boolean;
  };
  verdict: "high_dr_accessible" | "high_dr_blocked" | "low_dr_accessible" | "low_dr_blocked";
  verdictTitle: string;
  verdictBody: string;
  error?: string;
}

// ── SSRF + validation (same rules as crawler checker) ─────────────────────────

const PRIVATE_PATTERNS = [
  /^localhost$/i, /^127\./, /^10\./, /^172\.(1[6-9]|2[0-9]|3[01])\./, /^192\.168\./,
  /^0\./, /^169\.254\./, /^::1$/, /^fc[0-9a-f]{2}:/i,
  /\.local$/i, /\.internal$/i, /\.localhost$/i,
];
const DOMAIN_RE = /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;

function normalizeDomain(input: string): string | null {
  let d = input.trim().toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/\/.*$/, "")
    .replace(/:.*$/, "");
  if (!DOMAIN_RE.test(d)) return null;
  if (PRIVATE_PATTERNS.some((p) => p.test(d))) return null;
  return d;
}

// ── Fetch helpers ─────────────────────────────────────────────────────────────

async function fetchWithTimeout(url: string, headers: Record<string, string>, ms = 10000): Promise<Response> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(url, {
      signal: ctrl.signal,
      headers: { "User-Agent": "RevealRankBot/1.0 (+https://www.revealrank.com/tools/domain-rating-checker/)", ...headers },
      redirect: "follow",
    });
  } finally {
    clearTimeout(t);
  }
}

// ── Ahrefs DR ─────────────────────────────────────────────────────────────────

async function fetchDR(domain: string): Promise<{ dr: number | null; licenseUrl: string; error?: string }> {
  const key = process.env.AHREFS_API_KEY;
  if (!key) return { dr: null, licenseUrl: "https://ahrefs.com/legal/domain-rating-license", error: "api_key_missing" };

  try {
    const res = await fetchWithTimeout(
      `https://api.ahrefs.com/v3/public/domain-rating-free?target=${encodeURIComponent(domain)}&output=json`,
      { Authorization: `Bearer ${key}`, Accept: "application/json" }
    );
    if (!res.ok) return { dr: null, licenseUrl: "https://ahrefs.com/legal/domain-rating-license", error: `ahrefs_${res.status}` };
    const data = await res.json();
    const dr = data?.domain?.domain_rating ?? null;
    const licenseUrl = data?.meta?.license_url ?? "https://ahrefs.com/legal/domain-rating-license";
    return { dr: typeof dr === "number" ? Math.round(dr) : null, licenseUrl };
  } catch {
    return { dr: null, licenseUrl: "https://ahrefs.com/legal/domain-rating-license", error: "ahrefs_timeout" };
  }
}

// ── Quick robots.txt check (key retrieval bots only) ─────────────────────────
// Shares logic with /api/ai-crawler-check — checks only the bots that matter most

const KEY_BOTS = [
  { token: "OAI-SearchBot", vendor: "OpenAI",     surface: "ChatGPT Search" },
  { token: "PerplexityBot", vendor: "Perplexity", surface: "Perplexity"     },
  { token: "Claude-SearchBot", vendor: "Anthropic", surface: "Claude Search" },
  { token: "Google-Extended", vendor: "Google", surface: "Gemini / Vertex AI" },
];

interface ParsedGroup { agents: string[]; rules: { type: "allow" | "disallow"; pattern: string }[] }

function parseRobotsTxt(content: string): ParsedGroup[] {
  const groups: ParsedGroup[] = [];
  let agents: string[] = [], rules: { type: "allow" | "disallow"; pattern: string }[] = [], seenRules = false;
  const flush = () => { if (agents.length) groups.push({ agents: [...agents], rules: [...rules] }); agents = []; rules = []; seenRules = false; };
  for (const raw of content.split(/\r?\n/)) {
    const line = raw.split("#")[0].trim();
    if (!line) { if (seenRules) flush(); continue; }
    const c = line.indexOf(":");
    if (c < 1) continue;
    const field = line.slice(0, c).trim().toLowerCase();
    const value = line.slice(c + 1).trim();
    if (field === "user-agent") { if (seenRules) flush(); agents.push(value); }
    else if ((field === "allow" || field === "disallow") && agents.length) { rules.push({ type: field, pattern: value }); seenRules = true; }
  }
  flush();
  return groups;
}

function matchPattern(pattern: string, path: string): boolean {
  if (!pattern) return false;
  let p = pattern, decoded = path;
  try { p = decodeURIComponent(pattern); } catch {}
  try { decoded = decodeURIComponent(path); } catch {}
  let re = "^";
  for (let i = 0; i < p.length; i++) {
    const c = p[i];
    if (c === "*") re += ".*";
    else if (c === "$" && i === p.length - 1) re += "$";
    else re += c.replace(/[.+?^{}()|[\]\\]/g, "\\$&");
  }
  try { return new RegExp(re).test(decoded); } catch { return decoded.startsWith(p.replace(/[*$]/g, "")); }
}

function botVerdict(groups: ParsedGroup[], token: string): "allowed" | "blocked" | "not_specified" {
  const tl = token.toLowerCase();
  let group = groups.find(g => g.agents.some(a => a.toLowerCase() === tl)) ?? null;
  if (!group) group = groups.find(g => g.agents.includes("*")) ?? null;
  if (!group) return "not_specified";
  let best: { type: "allow" | "disallow"; len: number } | null = null;
  for (const rule of group.rules) {
    if (!rule.pattern) continue;
    if (matchPattern(rule.pattern, "/")) {
      const len = rule.pattern.length;
      if (!best || len > best.len || (len === best.len && rule.type === "allow")) best = { type: rule.type, len };
    }
  }
  if (!best) return "not_specified";
  return best.type === "allow" ? "allowed" : "blocked";
}

async function quickCrawlerCheck(domain: string): Promise<{
  score: number;
  blocked: Array<{ token: string; vendor: string; surface: string }>;
  googlebotBlocked: boolean;
  llmsTxtFound: boolean;
}> {
  const variants = domain.startsWith("www.")
    ? [`https://${domain}/robots.txt`]
    : [`https://${domain}/robots.txt`, `https://www.${domain}/robots.txt`];

  let groups: ParsedGroup[] = [];

  for (const url of variants) {
    try {
      const res = await fetchWithTimeout(url, {}, 8000);
      if (res.ok) { groups = parseRobotsTxt((await res.text()).slice(0, 512_000)); break; }
      if (res.status >= 400 && res.status < 500) break; // 4xx = no restrictions
    } catch { continue; }
  }

  const blocked = KEY_BOTS.filter(b => botVerdict(groups, b.token) === "blocked");
  const googlebotBlocked = botVerdict(groups, "Googlebot") === "blocked";
  const score = Math.round(((KEY_BOTS.length - blocked.length) / KEY_BOTS.length) * 100);

  // llms.txt
  let llmsTxtFound = false;
  for (const base of [`https://${domain}`, `https://www.${domain}`]) {
    try {
      const r = await fetchWithTimeout(`${base}/llms.txt`, {}, 4000);
      if (r.ok) { llmsTxtFound = true; break; }
    } catch { continue; }
  }

  return { score, blocked, googlebotBlocked, llmsTxtFound };
}

// ── DR band ───────────────────────────────────────────────────────────────────

function drBand(dr: number): { band: string; color: string } {
  if (dr <= 10) return { band: "New",      color: "gray"   };
  if (dr <= 30) return { band: "Low",      color: "orange" };
  if (dr <= 50) return { band: "Moderate", color: "yellow" };
  if (dr <= 70) return { band: "Strong",   color: "blue"   };
  return              { band: "Elite",    color: "purple" };
}

// ── Combined verdict ──────────────────────────────────────────────────────────

function combinedVerdict(dr: number, aiScore: number): {
  verdict: DRResult["verdict"];
  title: string;
  body: string;
} {
  const highDR = dr >= 40;
  const aiOk   = aiScore >= 75; // all or most key bots allowed

  if (highDR && aiOk) return {
    verdict: "high_dr_accessible",
    title:   "Strong authority — AI can reach you. Are you actually being cited?",
    body:    "You have the backlink profile that earns AI citations, and the crawlers can access your site. The remaining question is whether AI models are recommending your brand in relevant answers — that requires content, entity, and authority signals beyond just access.",
  };
  if (highDR && !aiOk) return {
    verdict: "high_dr_blocked",
    title:   "You have the authority to be cited. You are blocking the crawlers.",
    body:    "This is the most avoidable problem in AI visibility. Your domain has the trust signals AI models need to cite you — and your robots.txt is sending retrieval bots away. Fixing robots.txt costs nothing and unlocks the citation potential you have already built.",
  };
  if (!highDR && aiOk) return {
    verdict: "low_dr_accessible",
    title:   "AI systems can reach you. Authority is the constraint.",
    body:    "Retrieval bots can access your site, which is the necessary condition. But AI citations follow authority — models prefer to cite well-linked, well-referenced sources. Building your backlink profile is the lever that moves your citation rate from here.",
  };
  return {
    verdict: "low_dr_blocked",
    title:   "Two problems at once: blocked crawlers and thin authority.",
    body:    "Retrieval bots cannot reach your site, and your backlink profile is at an early stage. Unblock the crawlers first — it costs nothing and removes a hard barrier. Then build authority through link acquisition and editorial placements.",
  };
}

// ── Single domain check ───────────────────────────────────────────────────────

async function checkDomain(domain: string): Promise<DRResult> {
  const [drResult, aiResult] = await Promise.all([fetchDR(domain), quickCrawlerCheck(domain)]);

  if (drResult.error || drResult.dr === null) {
    const aiOk = aiResult.score >= 75;
    return {
      domain,
      dr: null,
      band: "—",
      bandColor: "gray",
      licenseUrl: drResult.licenseUrl,
      timestamp: new Date().toISOString(),
      aiAccess: aiResult,
      verdict: aiOk ? "low_dr_accessible" : "low_dr_blocked",
      verdictTitle: aiOk
        ? "AI crawlers can reach your site."
        : "AI crawlers are blocked from your site.",
      verdictBody: aiOk
        ? "Your site is accessible to AI retrieval bots — that is the necessary condition for AI citations. Domain Rating data is unavailable without an Ahrefs API key."
        : "AI retrieval bots cannot reach your site. Fix your robots.txt to unblock them — this is the highest-priority step before worrying about domain authority.",
      error: drResult.error,
    };
  }

  const { band, color } = drBand(drResult.dr);
  const v = combinedVerdict(drResult.dr, aiResult.score);

  return {
    domain,
    dr: drResult.dr,
    band,
    bandColor: color,
    licenseUrl: drResult.licenseUrl,
    timestamp: new Date().toISOString(),
    aiAccess: aiResult,
    verdict: v.verdict,
    verdictTitle: v.title,
    verdictBody: v.body,
  };
}

// ── Handlers ──────────────────────────────────────────────────────────────────

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const raw = new URL(request.url).searchParams.get("domain") ?? "";
  const domain = normalizeDomain(raw);
  if (!domain) return NextResponse.json({ error: "Invalid domain." }, { status: 400 });

  const result = await checkDomain(domain);
  return NextResponse.json(result, {
    headers: { "Cache-Control": "public, s-maxage=86400" }, // 24h cache
  });
}

export async function POST(request: NextRequest) {
  let body: { domains?: string[] };
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Invalid JSON." }, { status: 400 }); }

  const raw = (body.domains ?? []).slice(0, 10); // cap at 10
  const domains = raw.map(normalizeDomain).filter(Boolean) as string[];
  if (!domains.length) return NextResponse.json({ error: "No valid domains." }, { status: 400 });

  const results = await Promise.all(domains.map(checkDomain));
  return NextResponse.json({ results }, { headers: { "Cache-Control": "no-store" } });
}
