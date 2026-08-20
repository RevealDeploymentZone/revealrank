import { NextRequest, NextResponse } from "next/server";

// ── Signal config ──────────────────────────────────────────────────────────────

const FILLER_WORDS = [
  // Classic AI overused words
  "delve", "tapestry", "crucial", "comprehensive", "robust", "seamless",
  "leverage", "synergy", "transformative", "paramount", "reimagine", "empower",
  "supercharge", "game-changing", "revolutionise", "revolutionize", "unlock",
  "navigate", "realm", "testament", "landscape", "pivotal", "underscore",
  "foster", "myriad", "plethora", "elevate", "harness", "bespoke",
  "innovative", "cutting-edge", "state-of-the-art", "holistic", "dynamic",
  "proactive", "streamline", "utilize", "utilise", "facilitate",
  // Extended AI vocabulary
  "multifaceted", "nuanced", "intricate", "sophisticated", "tailored",
  "encompass", "spearhead", "bolster", "augment", "scalable",
  "actionable", "impactful", "stakeholder", "deliverable", "bandwidth",
  "insightful", "data-driven", "mission-critical", "value-driven",
  "overarching", "meticulous", "commendable", "noteworthy", "groundbreaking",
  "unparalleled", "unrivalled", "unrivaled", "invaluable", "indispensable",
  "strategically", "optimise", "optimize", "iterative", "agile",
  "ecosystem", "paradigm", "framework", "methodology", "synergise", "synergize",
  "ensure", "remain", "navigate", "embark", "endeavour", "endeavor",
];

const TRANSITION_WORDS = [
  "moreover", "furthermore", "additionally", "consequently", "therefore",
  "nevertheless", "nonetheless", "subsequently", "accordingly", "thus",
  "hence", "henceforth", "in conclusion", "to summarize", "to summarise",
  "in summary", "overall", "ultimately", "in essence", "it is worth noting",
  "it is important to note", "it should be noted", "first and foremost",
  "last but not least", "in other words", "that being said", "with that said",
  "on the other hand", "in light of", "as a result", "due to this",
  "to this end", "with this in mind", "building on this",
];

const AI_PHRASES = [
  /it['']s not just .{1,40}, it['']s/i,
  /in today['']s (fast-paced|rapidly evolving|ever-changing|digital|competitive)/i,
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
  // Additional AI patterns
  /\bin this (article|post|guide|blog|piece)\b/i,
  /\bwithout further ado\b/i,
  /\bit goes without saying\b/i,
  /\bneedless to say\b/i,
  /\bthe (key|secret|answer) (lies|is) in\b/i,
  /\bpicture this\b/i,
  /\bthe bottom line (is|here)\b/i,
  /\bthink about it\b/i,
  /\b(here['']s|here is) (the thing|what)\b/i,
  /\byou (might|may) be wondering\b/i,
  /\bin a world where\b/i,
  /\bthe good news is\b/i,
  /\bthe (bad|great|best) news\b/i,
  /\bstay tuned\b/i,
  /\bspoiler alert\b/i,
  /\blong story short\b/i,
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
  /\bit (can be|is often|is sometimes) (said|argued|suggested)\b/i,
  /\bplays? a (key|crucial|vital|important|significant) role\b/i,
  /\ba wide (range|variety|array) of\b/i,
  /\bvarious (aspects|factors|elements|components)\b/i,
  /\bin (many|some|various|numerous) (ways|aspects|situations)\b/i,
  /\bmore often than not\b/i,
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
  score: number;
  verdict: string;
  verdictColor: string;
  signals: Signal[];
  highlightedSentences: HighlightedSentence[];
  stats: TextStats;
}

export interface Signal {
  name: string;
  score: number;
  description: string;
  found: string[];
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
  const cv          = avgLen > 0 ? sd / avgLen : 0;
  // Low CV = uniform = AI. Human writing CV typically > 0.45
  const varianceScore = Math.max(0, Math.min(100, Math.round((0.50 - cv) / 0.50 * 100)));

  // Sentences with suspiciously similar length to neighbours
  const uniformRuns: string[] = [];
  for (let i = 1; i < sentences.length - 1; i++) {
    const prev = sentLengths[i - 1], curr = sentLengths[i], next = sentLengths[i + 1];
    if (Math.abs(curr - prev) <= 3 && Math.abs(curr - next) <= 3) {
      uniformRuns.push(sentences[i].slice(0, 80) + (sentences[i].length > 80 ? "…" : ""));
    }
  }

  // ── Average sentence length (AI peaks at 14–22 words) ────────────────────
  // Human writing is often shorter (<12) or very long. AI clusters 14–22.
  const distFrom18 = Math.abs(avgLen - 18);
  const avgLenScore = sentences.length >= 3
    ? Math.max(0, Math.min(100, Math.round((1 - distFrom18 / 18) * 75)))
    : 0;

  // ── Filler words ──────────────────────────────────────────────────────────
  const fillerFound: string[] = [];
  FILLER_WORDS.forEach(w => {
    const re = new RegExp(`\\b${w.replace(/-/g, "[-]?")}s?\\b`, "gi");
    const matches = text.match(re);
    if (matches) fillerFound.push(...matches.map(m => m.toLowerCase()));
  });
  const fillerDensity  = words > 0 ? fillerFound.length / words : 0;
  const fillerScore    = Math.min(100, Math.round(fillerDensity * 1500));
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
  const aiPhraseScore = Math.min(100, aiPhraseFound.length * 22);

  // ── Hedging / vagueness ───────────────────────────────────────────────────
  const hedgeFound: string[] = [];
  HEDGE_PHRASES.forEach(re => {
    const m = text.match(re);
    if (m) hedgeFound.push(m[0].slice(0, 60));
  });
  const hedgeScore = Math.min(100, hedgeFound.length * 16);

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
    varianceScore  * 0.12 +
    avgLenScore    * 0.13 +
    fillerScore    * 0.28 +
    aiPhraseScore  * 0.22 +
    transScore     * 0.12 +
    hedgeScore     * 0.08 +
    passiveScore   * 0.03 +
    paraScore      * 0.02
  );

  // ── Verdict ───────────────────────────────────────────────────────────────
  let verdict: string, verdictColor: string;
  if (score >= 58)      { verdict = "Likely AI-Written";  verdictColor = "red";    }
  else if (score >= 30) { verdict = "Mixed Signals";      verdictColor = "yellow"; }
  else                  { verdict = "Likely Human";       verdictColor = "green";  }

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
    const sentFiller = FILLER_WORDS.filter(w => new RegExp(`\\b${w.replace(/-/g, "[-]?")}s?\\b`, "i").test(s));
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
      name: "Sentence length uniformity",
      score: varianceScore,
      description: `Coefficient of variation: ${cv.toFixed(2)}. Human writing typically varies more (CV > 0.45). AI output tends to cluster around a similar length.`,
      found: uniformRuns.slice(0, 3),
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
      description: 'Phrases like "generally speaking", "plays a key role", "a wide range of" — AI fills gaps with unfalsifiable claims.',
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
