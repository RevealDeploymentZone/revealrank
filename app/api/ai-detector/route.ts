import { NextRequest, NextResponse } from "next/server";

// ── Signal config ─────────────────────────────────────────────────────────────

const FILLER_WORDS = [
  "delve", "tapestry", "crucial", "comprehensive", "robust", "seamless",
  "leverage", "synergy", "transformative", "paramount", "reimagine", "empower",
  "supercharge", "game-changing", "revolutionise", "revolutionize", "unlock",
  "navigate", "realm", "testament", "landscape", "pivotal", "underscore",
  "foster", "myriad", "plethora", "elevate", "harness", "bespoke",
  "innovative", "cutting-edge", "state-of-the-art", "holistic", "dynamic",
  "proactive", "streamline", "utilize", "utilise", "facilitate", "leverage",
];

const TRANSITION_WORDS = [
  "moreover", "furthermore", "additionally", "consequently", "therefore",
  "nevertheless", "nonetheless", "subsequently", "accordingly", "thus",
  "hence", "henceforth", "in conclusion", "to summarize", "to summarise",
  "in summary", "overall", "ultimately", "in essence", "it is worth noting",
  "it is important to note", "it should be noted",
];

const AI_PHRASES = [
  /it['']s not just .{1,40}, it['']s/i,
  /in today['']s (fast-paced|rapidly evolving|ever-changing|digital)/i,
  /let['']s (dive|delve) in/i,
  /buckle up/i,
  /in conclusion,/i,
  /as (an? )?(ai|language model|llm)/i,
  /in the (realm|landscape|tapestry) of/i,
  /it['']s (crucial|essential|important|paramount) to/i,
  /when it comes to/i,
  /\bwhether you['']re\b/i,
  /by (leveraging|harnessing|utilizing|utilising)/i,
  /\btake your .{1,20} to the next level\b/i,
  /\bin today['']s world\b/i,
  /\bthe (world|landscape|industry) of .{1,30} is (rapidly|constantly|ever)\b/i,
];

const HEDGE_PHRASES = [
  /\bgenerally speaking\b/i,
  /\bin many cases\b/i,
  /\bit['']s (arguably|essentially|basically)\b/i,
  /\bsome might (say|argue|suggest)\b/i,
  /\bcan often\b/i,
  /\btend to\b/i,
  /\bsignificantly (improve|enhance|boost|increase|reduce)\b/i,
  /\b(greatly|vastly|tremendously) (improve|enhance|benefit)\b/i,
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function getSentences(text: string): string[] {
  return text.match(/[^.!?]+[.!?]+/g)?.map(s => s.trim()).filter(Boolean) ?? [];
}

function getParagraphs(text: string): string[] {
  return text.split(/\n\n+/).map(p => p.trim()).filter(Boolean);
}

function wordCount(s: string): number {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

function mean(arr: number[]): number {
  return arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
}

function stdDev(arr: number[]): number {
  if (arr.length < 2) return 0;
  const m = mean(arr);
  return Math.sqrt(arr.reduce((a, b) => a + Math.pow(b - m, 2), 0) / arr.length);
}

// ── Analysis ──────────────────────────────────────────────────────────────────

export interface AnalysisResult {
  score: number;           // 0–100, higher = more likely AI
  verdict: string;         // "Likely AI" | "Mixed" | "Likely Human"
  verdictColor: string;    // "red" | "yellow" | "green"
  signals: Signal[];
  highlightedSentences: HighlightedSentence[];
  stats: TextStats;
}

export interface Signal {
  name: string;
  score: number;          // 0–100 contribution to AI likelihood
  description: string;
  found: string[];        // specific examples found
}

export interface HighlightedSentence {
  text: string;
  reason: string;
  severity: "high" | "medium" | "low";
}

export interface TextStats {
  wordCount: number;
  sentenceCount: number;
  avgSentenceLength: number;
  sentenceLengthVariance: number;
  paragraphCount: number;
  fillerWordCount: number;
  transitionWordCount: number;
  passiveVoiceCount: number;
}

function analyzeText(text: string): AnalysisResult {
  const sentences  = getSentences(text);
  const paragraphs = getParagraphs(text);
  const words      = wordCount(text);
  const textLower  = text.toLowerCase();

  // ── Sentence length variance ──────────────────────────────────────────────
  const sentLengths = sentences.map(s => wordCount(s));
  const avgLen      = mean(sentLengths);
  const sd          = stdDev(sentLengths);
  const cv          = avgLen > 0 ? sd / avgLen : 0; // coefficient of variation
  // Low CV = uniform = AI. Human writing CV typically > 0.45
  const varianceScore = Math.max(0, Math.min(100, Math.round((0.55 - cv) / 0.55 * 100)));

  // Sentences with suspiciously similar length to neighbours
  const uniformRuns: string[] = [];
  for (let i = 1; i < sentences.length - 1; i++) {
    const prev = sentLengths[i - 1], curr = sentLengths[i], next = sentLengths[i + 1];
    if (Math.abs(curr - prev) <= 3 && Math.abs(curr - next) <= 3) {
      uniformRuns.push(sentences[i].slice(0, 80) + (sentences[i].length > 80 ? "…" : ""));
    }
  }

  // ── Filler words ──────────────────────────────────────────────────────────
  const fillerFound: string[] = [];
  FILLER_WORDS.forEach(w => {
    const re = new RegExp(`\\b${w}s?\\b`, "gi");
    const matches = text.match(re);
    if (matches) fillerFound.push(...matches.map(m => m.toLowerCase()));
  });
  const fillerDensity  = words > 0 ? fillerFound.length / words : 0;
  const fillerScore    = Math.min(100, Math.round(fillerDensity * 1200));
  const fillerUnique   = [...new Set(fillerFound)].slice(0, 8);

  // ── Transition word overuse ───────────────────────────────────────────────
  const transFound: string[] = [];
  TRANSITION_WORDS.forEach(w => {
    const re = new RegExp(`\\b${w}\\b`, "gi");
    if (re.test(text)) transFound.push(w);
  });
  const transDensity = words > 0 ? transFound.length / words : 0;
  const transScore   = Math.min(100, Math.round(transDensity * 2500));

  // ── AI phrases ────────────────────────────────────────────────────────────
  const aiPhraseFound: string[] = [];
  AI_PHRASES.forEach(re => {
    const m = text.match(re);
    if (m) aiPhraseFound.push(m[0].slice(0, 60));
  });
  const aiPhraseScore = Math.min(100, aiPhraseFound.length * 25);

  // ── Hedging / vagueness ───────────────────────────────────────────────────
  const hedgeFound: string[] = [];
  HEDGE_PHRASES.forEach(re => {
    const m = text.match(re);
    if (m) hedgeFound.push(m[0].slice(0, 60));
  });
  const hedgeScore = Math.min(100, hedgeFound.length * 18);

  // ── Passive voice ─────────────────────────────────────────────────────────
  const passiveMatches = text.match(/\b(?:is|are|was|were|be|been|being)\s+\w+ed\b/gi) ?? [];
  const passiveDensity = words > 0 ? passiveMatches.length / words : 0;
  const passiveScore   = Math.min(100, Math.round(passiveDensity * 800));

  // ── Paragraph uniformity ──────────────────────────────────────────────────
  const paraLengths = paragraphs.map(p => wordCount(p));
  const paraSd      = stdDev(paraLengths);
  const paraAvg     = mean(paraLengths);
  const paraCV      = paraAvg > 0 ? paraSd / paraAvg : 0;
  const paraScore   = paragraphs.length >= 3
    ? Math.max(0, Math.min(100, Math.round((0.4 - paraCV) / 0.4 * 100)))
    : 0;

  // ── Weighted overall score ────────────────────────────────────────────────
  const score = Math.round(
    varianceScore  * 0.28 +
    fillerScore    * 0.20 +
    aiPhraseScore  * 0.22 +
    transScore     * 0.12 +
    hedgeScore     * 0.10 +
    passiveScore   * 0.04 +
    paraScore      * 0.04
  );

  // ── Verdict ───────────────────────────────────────────────────────────────
  let verdict: string, verdictColor: string;
  if (score >= 65) { verdict = "Likely AI-Written";   verdictColor = "red";    }
  else if (score >= 35) { verdict = "Mixed Signals";  verdictColor = "yellow"; }
  else                  { verdict = "Likely Human";   verdictColor = "green";  }

  // ── Highlighted sentences ─────────────────────────────────────────────────
  const highlightedSentences: HighlightedSentence[] = [];

  sentences.forEach(s => {
    const sl = s.toLowerCase();

    // AI phrases
    for (const re of AI_PHRASES) {
      if (re.test(s)) {
        highlightedSentences.push({ text: s, reason: "Contains a recognisable AI phrase pattern", severity: "high" });
        return;
      }
    }

    // Multiple filler words in one sentence
    const sentFiller = FILLER_WORDS.filter(w => new RegExp(`\\b${w}s?\\b`, "i").test(s));
    if (sentFiller.length >= 2) {
      highlightedSentences.push({ text: s, reason: `Contains filler words: ${sentFiller.slice(0, 3).join(", ")}`, severity: "high" });
      return;
    }

    // Transition word opener
    if (TRANSITION_WORDS.some(w => sl.startsWith(w))) {
      highlightedSentences.push({ text: s, reason: "Starts with a transition word common in AI output", severity: "medium" });
      return;
    }

    // Single filler word
    if (sentFiller.length === 1) {
      highlightedSentences.push({ text: s, reason: `Contains filler word: "${sentFiller[0]}"`, severity: "low" });
    }
  });

  // ── Signals array ─────────────────────────────────────────────────────────
  const signals: Signal[] = [
    {
      name: "Sentence length uniformity",
      score: varianceScore,
      description: `Coefficient of variation: ${cv.toFixed(2)}. Human writing typically varies more (CV > 0.45). AI output tends to cluster around a similar length.`,
      found: uniformRuns.slice(0, 3),
    },
    {
      name: "AI filler vocabulary",
      score: fillerScore,
      description: `Found ${fillerFound.length} filler word instance${fillerFound.length !== 1 ? "s" : ""} across ${words} words. These words appear disproportionately in AI output.`,
      found: fillerUnique,
    },
    {
      name: "Recognisable AI phrases",
      score: aiPhraseScore,
      description: "Specific constructions that appear far more often in AI output than in edited human writing.",
      found: aiPhraseFound.slice(0, 5),
    },
    {
      name: "Transition word overuse",
      score: transScore,
      description: "AI models frequently use moreover, furthermore, additionally, consequently — chaining paragraphs in a way human writers avoid.",
      found: transFound.slice(0, 5),
    },
    {
      name: "Vague hedging language",
      score: hedgeScore,
      description: 'Phrases like "generally speaking", "in many cases", "significantly improve" — AI fills gaps with unfalsifiable claims.',
      found: hedgeFound.slice(0, 4),
    },
  ];

  // ── Stats ─────────────────────────────────────────────────────────────────
  const stats: TextStats = {
    wordCount:              words,
    sentenceCount:          sentences.length,
    avgSentenceLength:      Math.round(avgLen),
    sentenceLengthVariance: Math.round(sd * 10) / 10,
    paragraphCount:         paragraphs.length,
    fillerWordCount:        fillerFound.length,
    transitionWordCount:    transFound.length,
    passiveVoiceCount:      passiveMatches.length,
  };

  return { score, verdict, verdictColor, signals, highlightedSentences, stats };
}

// ── Handler ───────────────────────────────────────────────────────────────────

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  let body: { text?: string };
  try   { body = await req.json(); }
  catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }

  const text = (body.text ?? "").trim();

  if (text.length < 50) {
    return NextResponse.json({ error: "Text too short — paste at least a paragraph." }, { status: 400 });
  }
  if (wordCount(text) > 2000) {
    return NextResponse.json({ error: "Maximum 2,000 words. Paste a section at a time." }, { status: 400 });
  }

  const result = analyzeText(text);
  return NextResponse.json(result);
}
