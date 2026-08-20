import { NextRequest, NextResponse } from "next/server";

// ── Rules config (edit to tune editor behaviour) ──────────────────────────────

const FILLER_WORDS = [
  "delve", "tapestry", "crucial", "comprehensive", "robust", "seamless",
  "leverage", "synergy", "transformative", "paramount", "reimagine", "empower",
  "supercharge", "game-changing", "revolutionise", "revolutionize", "unlock",
  "navigate", "realm", "testament", "landscape", "pivotal", "underscore",
  "foster", "myriad", "plethora", "elevate", "harness", "bespoke",
];

const HEDGE_PHRASES = [
  "it's important to note that",
  "it is important to note that",
  "it's worth mentioning",
  "it is worth mentioning",
  "generally speaking",
  "in many cases",
  "arguably",
  "essentially",
  "basically",
];

const STRUCTURAL_RULES = [
  `Remove "It's not just X, it's Y" constructions — the single most recognisable AI pattern`,
  `Remove "In today's fast-paced world" and all variants`,
  `Remove throat-clearing openers: "In conclusion", "Let's dive in", "Buckle up"`,
  `Break up rule-of-three stacking — vary how claims are listed`,
  `Break "Moreover / Furthermore / Additionally" chains — restructure or cut`,
  `Vary paragraph length — identical-length paragraphs are a structural tell`,
  `Cap em-dashes at one per 150 words`,
  `Break up perfectly parallel bullet lists where every item has identical grammatical shape`,
];

// ── Limits ────────────────────────────────────────────────────────────────────

const MAX_WORDS = 1500;
const EMAIL_DAILY_LIMIT = 3;
const IP_DAILY_LIMIT = 10;

// ── Rate limiting (in-memory — resets on cold start; swap to Vercel KV for prod) ─

type RateEntry = { count: number; date: string };
const emailUsage = new Map<string, RateEntry>();
const ipUsage    = new Map<string, RateEntry>();

function today(): string { return new Date().toISOString().slice(0, 10); }

function rateCheck(map: Map<string, RateEntry>, key: string, limit: number): boolean {
  const d = today();
  const e = map.get(key);
  if (!e || e.date !== d) { map.set(key, { count: 1, date: d }); return true; }
  if (e.count >= limit) return false;
  e.count++;
  return true;
}

// ── Detection patterns ────────────────────────────────────────────────────────

const ACADEMIC_PATTERNS = [
  /\bstudent\s+id\b/i,
  /\bword\s+count\s*:/i,
  /\breferences?\s*\(apa\)/i,
  /submitted\s+in\s+partial\s+fulfil/i,
  /\bturnit(?:in)?\b/i,
  /\bcourse\s+code\s*:/i,
  /\bdissertation\b/i,
  /\bword\s+limit\b/i,
];

const INJECTION_PATTERNS = [
  /ignore\s+(all\s+)?previous\s+instructions/i,
  /\bsystem\s+prompt\b/i,
  /\bjailbreak\b/i,
  /\bpretend\s+you\s+are\b/i,
  /\byou\s+are\s+now\b/i,
  /\bact\s+as\s+(?:a\s+)?(?:different|new|another)\b/i,
  /\bdisregard\s+(all\s+)?instructions/i,
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function wordCount(s: string): number {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

// ── Prompt builder ────────────────────────────────────────────────────────────

function buildSystemPrompt(): string {
  return `You are a professional editor improving a marketing draft for publication. You do not write new content. You do not add facts, statistics, examples, or claims that are not already present in the draft.

Apply ALL of the following rules:

RHYTHM
- Vary sentence lengths sharply: mix very short sentences (3–6 words) against longer ones (25–35 words)
- Never allow more than three consecutive sentences within ±3 words of each other
- Break at least one paragraph with a single short sentence used as a beat

FILLER WORDS — remove on sight: ${FILLER_WORDS.join(", ")}
Replace with plain, direct words or restructure the sentence. Do not keep any of these words.

STRUCTURAL PATTERNS — fix each one:
${STRUCTURAL_RULES.map((r, i) => `${i + 1}. ${r}`).join("\n")}

HEDGING — delete these phrases entirely, state the point directly: ${HEDGE_PHRASES.join("; ")}

SPECIFICITY — non-negotiable rule:
- Never invent a statistic, example, figure, timeframe, or claim
- Where a claim is vague, insert this exact marker: [SPECIFIC NEEDED: what figure, timeframe or example?]
- Do not attempt to supply a specific — only flag the gap

VOICE
- Active voice unless the actor is genuinely unknown
- Second person where the source uses abstract third person
- Contractions where the register allows
- Preserve all technical terms, brand names, product names, numbers, and quoted material exactly

HARD CONSTRAINTS
- Preserve every factual claim, number, name, and quotation exactly as written
- Preserve the author's argument and structure
- Preserve heading hierarchy and links
- Match the register of the input
- This is for marketing copy, not academic work

Return ONLY valid JSON — no preamble, no explanation, no markdown code fences:
{
  "edited": "the full edited text",
  "changes": [
    {"type": "filler|rhythm|structure|hedge|voice|flag", "before": "original phrase (max 80 chars)", "after": "replacement or [SPECIFIC NEEDED: ...]", "why": "one-line reason"}
  ],
  "flags": ["plain-language description of each SPECIFIC NEEDED marker inserted"]
}`;
}

// ── Text analysis ─────────────────────────────────────────────────────────────

function analyzeText(text: string) {
  const sentences = text.match(/[^.!?]+[.!?]+/g) ?? [];
  const lengths   = sentences.map(s => s.trim().split(/\s+/).length);
  const avg       = lengths.length ? lengths.reduce((a, b) => a + b, 0) / lengths.length : 0;
  const variance  = lengths.length
    ? Math.round(lengths.reduce((a, b) => a + Math.pow(b - avg, 2), 0) / lengths.length)
    : 0;

  const fillerCount = FILLER_WORDS.reduce((n, w) => {
    return n + (text.match(new RegExp(`\\b${w}s?\\b`, "gi"))?.length ?? 0);
  }, 0);

  const passive = (text.match(/\b(?:is|are|was|were|be|been|being)\s+\w+ed\b/gi) ?? []).length;

  return {
    wordCount:   wordCount(text),
    sentences:   sentences.length,
    variance,
    avgLength:   Math.round(avg),
    fillerWords: fillerCount,
    passive,
    paragraphs:  text.split(/\n\n+/).filter(Boolean).length,
    flags:       (text.match(/\[SPECIFIC NEEDED/g) ?? []).length,
  };
}

// ── Handler ───────────────────────────────────────────────────────────────────

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Service not configured. Contact site admin." }, { status: 503 });
  }

  let body: { draft?: string; email?: string };
  try   { body = await req.json(); }
  catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }

  const draft = (body.draft ?? "").trim();
  const email = (body.email ?? "").trim().toLowerCase();

  // Validate email
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Valid email required." }, { status: 400 });
  }

  // Validate draft
  if (draft.length < 50) {
    return NextResponse.json({ error: "Draft too short (minimum 50 characters)." }, { status: 400 });
  }

  const wc = wordCount(draft);
  if (wc > MAX_WORDS) {
    return NextResponse.json(
      { error: `Draft is ${wc} words. Maximum is ${MAX_WORDS}. Please shorten it and resubmit.` },
      { status: 400 }
    );
  }

  // Academic pattern check
  if (ACADEMIC_PATTERNS.some(p => p.test(draft))) {
    return NextResponse.json(
      { error: "This tool is designed for marketing copy — blog posts, landing pages, emails. It is not suitable for academic submissions." },
      { status: 400 }
    );
  }

  // Prompt injection check
  if (INJECTION_PATTERNS.some(p => p.test(draft))) {
    return NextResponse.json({ error: "Invalid input." }, { status: 400 });
  }

  // Rate limiting
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (!rateCheck(emailUsage, email, EMAIL_DAILY_LIMIT)) {
    return NextResponse.json(
      { error: "You have used your 3 free edits today. Come back tomorrow." },
      { status: 429 }
    );
  }
  if (!rateCheck(ipUsage, ip, IP_DAILY_LIMIT)) {
    return NextResponse.json({ error: "Too many requests. Try again later." }, { status: 429 });
  }

  // Call Anthropic
  let raw = "";
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key":         apiKey,
        "anthropic-version": "2023-06-01",
        "content-type":      "application/json",
      },
      body: JSON.stringify({
        model:      "claude-sonnet-4-5",
        max_tokens: 4096,
        system:     buildSystemPrompt(),
        messages:   [{ role: "user", content: draft }],
      }),
    });

    if (!res.ok) {
      const err = await res.text().catch(() => "");
      console.error("Anthropic error:", res.status, err);
      return NextResponse.json({ error: "Editor service unavailable. Please try again." }, { status: 503 });
    }

    const data = await res.json();
    raw = data.content?.[0]?.text ?? "";
  } catch {
    return NextResponse.json({ error: "Editor service unavailable. Please try again." }, { status: 503 });
  }

  // Parse JSON response defensively
  type Change = { type: string; before: string; after: string; why: string };
  let parsed: { edited: string; changes: Change[]; flags: string[] };

  try {
    const m = raw.match(/\{[\s\S]*\}/);
    const candidate = JSON.parse(m?.[0] ?? raw);
    if (!candidate.edited || typeof candidate.edited !== "string") throw new Error("bad shape");
    parsed = {
      edited:  candidate.edited,
      changes: Array.isArray(candidate.changes) ? candidate.changes : [],
      flags:   Array.isArray(candidate.flags)   ? candidate.flags   : [],
    };
  } catch {
    // Fallback: return raw text with no structured data
    parsed = { edited: raw, changes: [], flags: [] };
  }

  return NextResponse.json({
    ...parsed,
    metrics: {
      original: analyzeText(draft),
      edited:   analyzeText(parsed.edited),
    },
  });
}
