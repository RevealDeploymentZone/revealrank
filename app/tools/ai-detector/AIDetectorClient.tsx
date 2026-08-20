"use client";
import { useState } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Signal {
  name: string;
  score: number;
  description: string;
  found: string[];
}

interface HighlightedSentence {
  text: string;
  reason: string;
  severity: "high" | "medium" | "low";
}

interface TextStats {
  wordCount: number;
  sentenceCount: number;
  avgSentenceLength: number;
  sentenceLengthVariance: number;
  paragraphCount: number;
  fillerWordCount: number;
  transitionWordCount: number;
  passiveVoiceCount: number;
}

interface DetectionResult {
  score: number;
  verdict: string;
  verdictColor: string;
  signals: Signal[];
  highlightedSentences: HighlightedSentence[];
  stats: TextStats;
}

// ── Score ring ────────────────────────────────────────────────────────────────

function ScoreGauge({ score, color }: { score: number; color: string }) {
  const colorMap = {
    red:    { ring: "border-red-500",    text: "text-red-400",    bg: "bg-red-950/30"    },
    yellow: { ring: "border-yellow-500", text: "text-yellow-400", bg: "bg-yellow-950/20" },
    green:  { ring: "border-green-500",  text: "text-green-400",  bg: "bg-green-950/20"  },
  };
  const s = colorMap[color as keyof typeof colorMap] ?? colorMap.yellow;
  return (
    <div className={`border-4 ${s.ring} ${s.bg} rounded-full w-32 h-32 flex flex-col items-center justify-center flex-shrink-0`}>
      <span className={`text-4xl font-black leading-none ${s.text}`}>{score}</span>
      <span className="text-gray-500 text-xs mt-1">/ 100</span>
    </div>
  );
}

// ── Signal bar ────────────────────────────────────────────────────────────────

function SignalBar({ signal }: { signal: Signal }) {
  const pct = signal.score;
  const barColor =
    pct >= 65 ? "bg-red-500"
    : pct >= 35 ? "bg-yellow-400"
    : "bg-green-500";

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-white text-sm font-semibold">{signal.name}</span>
        <span className={`text-xs font-bold ${pct >= 65 ? "text-red-400" : pct >= 35 ? "text-yellow-400" : "text-green-400"}`}>
          {pct}
        </span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-1.5 mb-3">
        <div className={`h-1.5 rounded-full transition-all duration-700 ${barColor}`} style={{ width: `${pct}%` }} />
      </div>
      <p className="text-gray-500 text-xs leading-relaxed mb-2">{signal.description}</p>
      {signal.found.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {signal.found.map((f, i) => (
            <span key={i} className="bg-gray-800 text-gray-300 text-xs px-2 py-0.5 rounded font-mono">
              {f}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Severity colour ───────────────────────────────────────────────────────────

const SEVERITY_STYLES = {
  high:   "border-l-red-500 bg-red-950/10",
  medium: "border-l-yellow-500 bg-yellow-950/10",
  low:    "border-l-gray-600 bg-gray-900/50",
};

// ── Main component ────────────────────────────────────────────────────────────

export default function AIDetectorClient() {
  const [text, setText]     = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult]   = useState<DetectionResult | null>(null);
  const [error, setError]     = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"signals" | "sentences" | "stats">("signals");

  const wc = text.trim().split(/\s+/).filter(Boolean).length;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/ai-detector", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      if (!res.ok) setError(data.error ?? "Something went wrong.");
      else setResult(data);
    } catch {
      setError("Network error — please try again.");
    }
    setLoading(false);
  };

  if (result) {
    const { score, verdict, verdictColor, signals, highlightedSentences, stats } = result;
    const flagged = highlightedSentences.filter(s => s.severity === "high").length;

    return (
      <div className="space-y-6">
        {/* Verdict header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <ScoreGauge score={score} color={verdictColor} />
          <div>
            <p className={`text-2xl font-black mb-1 ${
              verdictColor === "red" ? "text-red-400" : verdictColor === "yellow" ? "text-yellow-300" : "text-green-400"
            }`}>
              {verdict}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Based on {signals.length} writing pattern signals.{" "}
              {flagged > 0 && `${flagged} sentence${flagged !== 1 ? "s" : ""} flagged as high-confidence AI patterns.`}
            </p>
            <p className="text-gray-600 text-xs mt-2">
              ⚠ Detectors are not 100% accurate. Use as a guide, not a verdict.
            </p>
          </div>
        </div>

        {/* Tab bar */}
        <div className="border-b border-gray-800">
          <div className="flex gap-1">
            {([
              { id: "signals",   label: "Signal breakdown" },
              { id: "sentences", label: `Flagged sentences (${highlightedSentences.length})` },
              { id: "stats",     label: "Text stats" },
            ] as const).map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "text-white border-b-2 border-[#4361ee]"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Signals */}
        {activeTab === "signals" && (
          <div className="space-y-3">
            {signals.map(sig => <SignalBar key={sig.name} signal={sig} />)}
          </div>
        )}

        {/* Flagged sentences */}
        {activeTab === "sentences" && (
          <div className="space-y-2">
            {highlightedSentences.length === 0 ? (
              <div className="bg-green-950/30 border border-green-800 rounded-xl p-5">
                <p className="text-green-400 font-semibold text-sm">No sentences flagged</p>
                <p className="text-gray-400 text-sm mt-1">No individual sentences matched high-confidence AI patterns.</p>
              </div>
            ) : (
              highlightedSentences.slice(0, 20).map((s, i) => (
                <div key={i} className={`border-l-4 rounded-r-xl px-4 py-3 ${SEVERITY_STYLES[s.severity]}`}>
                  <p className="text-gray-200 text-sm leading-relaxed mb-1.5 italic">"{s.text}"</p>
                  <p className="text-gray-500 text-xs">{s.reason}</p>
                </div>
              ))
            )}
          </div>
        )}

        {/* Stats */}
        {activeTab === "stats" && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Words",         value: stats.wordCount },
              { label: "Sentences",     value: stats.sentenceCount },
              { label: "Avg sent. len", value: `${stats.avgSentenceLength}w` },
              { label: "Sent. variance",value: stats.sentenceLengthVariance },
              { label: "Paragraphs",    value: stats.paragraphCount },
              { label: "Filler words",  value: stats.fillerWordCount },
              { label: "Transitions",   value: stats.transitionWordCount },
              { label: "Passive voice", value: stats.passiveVoiceCount },
            ].map(item => (
              <div key={item.label} className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
                <p className="text-white text-2xl font-black">{item.value}</p>
                <p className="text-gray-500 text-xs mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Check another */}
        <button
          onClick={() => { setResult(null); setText(""); }}
          className="text-[#7b93ff] text-sm font-semibold hover:underline"
        >
          ← Check another text
        </button>
      </div>
    );
  }

  // ── Input form ────────────────────────────────────────────────────────────

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder={"Paste your text here — blog post, article, email, product description...\n\nThe detector analyses sentence rhythm, vocabulary patterns, AI phrase signatures, and transition word usage to estimate the likelihood of AI authorship."}
          rows={12}
          className="w-full bg-gray-800 border border-gray-700 focus:border-[#4361ee] text-white rounded-xl px-5 py-4 text-sm leading-relaxed outline-none transition-colors placeholder-gray-600 resize-none"
          disabled={loading}
          spellCheck={false}
        />
        <span className={`absolute bottom-3.5 right-4 text-xs tabular-nums ${wc > 2000 ? "text-red-400 font-semibold" : "text-gray-600"}`}>
          {wc} / 2000 words
        </span>
      </div>

      {error && (
        <div className="bg-red-950/40 border border-red-800 rounded-xl px-4 py-3 text-red-300 text-sm">{error}</div>
      )}

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <p className="text-gray-600 text-xs">
          Free · No sign-up · Works on blog posts, emails, product copy
        </p>
        <button
          type="submit"
          disabled={loading || !text.trim() || wc > 2000}
          className="bg-[#4361ee] hover:bg-[#3451de] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all flex items-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              Analysing…
            </>
          ) : "Detect →"}
        </button>
      </div>
    </form>
  );
}
