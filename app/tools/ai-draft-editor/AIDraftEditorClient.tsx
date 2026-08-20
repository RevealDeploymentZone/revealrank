"use client";
import { useState } from "react";
import Link from "next/link";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Change {
  type: string;
  before: string;
  after: string;
  why: string;
}

interface TextMetrics {
  wordCount: number;
  sentences: number;
  variance: number;
  avgLength: number;
  fillerWords: number;
  passive: number;
  paragraphs: number;
  flags: number;
}

interface EditorResult {
  edited: string;
  changes: Change[];
  flags: string[];
  metrics: { original: TextMetrics; edited: TextMetrics };
}

// ── Constants ─────────────────────────────────────────────────────────────────

const MAX_WORDS = 1500;

const CHANGE_STYLES: Record<string, { bg: string; text: string; label: string }> = {
  filler:    { bg: "bg-orange-100",  text: "text-orange-700",  label: "Filler word" },
  rhythm:    { bg: "bg-blue-100",    text: "text-blue-700",    label: "Rhythm"       },
  structure: { bg: "bg-purple-100",  text: "text-purple-700",  label: "Structure"    },
  hedge:     { bg: "bg-yellow-100",  text: "text-yellow-700",  label: "Hedging"      },
  voice:     { bg: "bg-green-100",   text: "text-green-700",   label: "Voice"        },
  flag:      { bg: "bg-red-100",     text: "text-red-700",     label: "Flag"         },
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function countWords(s: string) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderTextAsHtml(text: string): string {
  const escaped = escapeHtml(text);
  const highlighted = escaped.replace(
    /\[SPECIFIC NEEDED:[^\]]*\]/g,
    (m) => `<mark class="bg-yellow-200 text-yellow-900 px-1 rounded font-semibold not-italic">${m}</mark>`
  );
  return highlighted
    .split(/\n/)
    .map(line =>
      line.trim() === ""
        ? "<div class='h-3'></div>"
        : `<p class="mb-3 leading-relaxed">${line}</p>`
    )
    .join("");
}

// ── Metric row ────────────────────────────────────────────────────────────────

function MetricRow({
  label, orig, edit, lowerIsBetter, unit,
}: { label: string; orig: number; edit: number; lowerIsBetter?: boolean; unit?: string }) {
  const same     = orig === edit;
  const improved = !same && (lowerIsBetter ? edit < orig : edit > orig);
  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-gray-800 last:border-0">
      <span className="text-sm text-gray-400 flex-1">{label}</span>
      <span className="text-sm font-mono text-gray-500 w-12 text-right">{orig}{unit}</span>
      <span className="text-gray-700 text-xs">→</span>
      <span className={`text-sm font-mono font-bold w-12 text-right ${same ? "text-gray-500" : improved ? "text-green-400" : "text-orange-400"}`}>
        {edit}{unit}
        {!same && <span className="text-xs ml-0.5">{improved ? " ▲" : " ▼"}</span>}
      </span>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function AIDraftEditorClient() {
  const [email, setEmail]     = useState("");
  const [draft, setDraft]     = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult]   = useState<EditorResult | null>(null);
  const [error, setError]     = useState<string | null>(null);
  const [activePanel, setActivePanel] = useState<"original" | "edited">("edited");
  const [activeTab, setActiveTab]     = useState<"diff" | "changes" | "metrics" | "flags">("diff");

  const wc        = countWords(draft);
  const overLimit = wc > MAX_WORDS;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!draft.trim() || overLimit) return;
    if (!EMAIL_RE.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/ai-draft-editor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ draft, email: email.trim() }),
      });
      const data = await res.json();
      if (!res.ok) setError(data.error ?? "Something went wrong.");
      else { setResult(data); setActiveTab("diff"); }
    } catch {
      setError("Network error — please try again.");
    }
    setLoading(false);
  };

  // ── Results view ──────────────────────────────────────────────────────────

  if (result) {
    const { changes, flags, metrics } = result;
    const { original: orig, edited: edit } = metrics;

    const tabs = [
      { id: "diff",    label: "Side by Side" },
      { id: "changes", label: `Changes (${changes.length})` },
      { id: "metrics", label: "Metrics" },
      { id: "flags",   label: `Flags (${flags.length})` },
    ] as const;

    return (
      <div className="space-y-5">
        {/* Summary bar */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="flex items-center gap-2 bg-gray-800 rounded-xl px-3.5 py-2">
            <span className="text-green-400 text-sm font-bold">{changes.length}</span>
            <span className="text-gray-400 text-xs">edits made</span>
          </div>
          {orig.fillerWords > 0 && (
            <div className="flex items-center gap-2 bg-gray-800 rounded-xl px-3.5 py-2">
              <span className="text-orange-400 text-sm font-bold">
                {orig.fillerWords - edit.fillerWords > 0 ? `−${orig.fillerWords - edit.fillerWords}` : "0"}
              </span>
              <span className="text-gray-400 text-xs">filler words removed</span>
            </div>
          )}
          {flags.length > 0 && (
            <div className="flex items-center gap-2 bg-yellow-950/60 border border-yellow-800 rounded-xl px-3.5 py-2">
              <span className="text-yellow-400 text-sm font-bold">{flags.length}</span>
              <span className="text-yellow-400 text-xs">claims need your input</span>
            </div>
          )}
          <button
            onClick={() => { setResult(null); setDraft(""); setActiveTab("diff"); }}
            className="ml-auto text-gray-500 hover:text-gray-300 text-sm transition-colors"
          >
            ← Edit another draft
          </button>
        </div>

        {/* Tab bar */}
        <div className="border-b border-gray-800 overflow-x-auto">
          <div className="flex gap-1 min-w-max">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 text-sm font-semibold transition-all whitespace-nowrap ${
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

        {/* Diff panel */}
        {activeTab === "diff" && (
          <div>
            <div className="flex gap-2 mb-4 md:hidden">
              {(["original", "edited"] as const).map(p => (
                <button
                  key={p}
                  onClick={() => setActivePanel(p)}
                  className={`flex-1 py-2 rounded-lg text-sm font-semibold capitalize transition-all ${
                    activePanel === p ? "bg-[#4361ee] text-white" : "bg-gray-800 text-gray-400"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={activePanel !== "original" ? "hidden md:block" : ""}>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-3">Original</p>
                <div
                  className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-gray-400 text-sm max-h-[480px] overflow-y-auto"
                  dangerouslySetInnerHTML={{ __html: renderTextAsHtml(draft) }}
                />
              </div>
              <div className={activePanel !== "edited" ? "hidden md:block" : ""}>
                <p className="text-[#7b93ff] text-xs font-bold uppercase tracking-wider mb-3">Edited</p>
                <div
                  className="bg-gray-900 border border-[#4361ee]/30 rounded-xl p-5 text-gray-100 text-sm max-h-[480px] overflow-y-auto"
                  dangerouslySetInnerHTML={{ __html: renderTextAsHtml(result.edited) }}
                />
              </div>
            </div>
            <div className="mt-3 flex justify-end">
              <button
                onClick={() => navigator.clipboard?.writeText(result.edited)}
                className="text-[#7b93ff] text-xs font-semibold hover:underline"
              >
                Copy edited text
              </button>
            </div>
          </div>
        )}

        {/* Change log */}
        {activeTab === "changes" && (
          <div className="space-y-2">
            {changes.length === 0 ? (
              <p className="text-gray-500 text-sm py-4">No individual changes logged.</p>
            ) : (
              changes.map((c, i) => {
                const style = CHANGE_STYLES[c.type] ?? CHANGE_STYLES.filler;
                return (
                  <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5 ${style.bg} ${style.text}`}>
                        {style.label}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-start gap-x-2 gap-y-1 mb-1.5">
                          <span className="text-red-400 text-sm opacity-75 line-through">{c.before}</span>
                          <span className="text-gray-600 text-sm hidden sm:block">→</span>
                          <span className="text-green-400 text-sm">{c.after}</span>
                        </div>
                        <p className="text-gray-500 text-xs">{c.why}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}

        {/* Metrics */}
        {activeTab === "metrics" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4">Rhythm</p>
              <MetricRow label="Sentence length variance" orig={orig.variance} edit={edit.variance} />
              <MetricRow label="Avg sentence length" orig={orig.avgLength} edit={edit.avgLength} unit=" words" />
              <MetricRow label="Sentence count" orig={orig.sentences} edit={edit.sentences} />
              <MetricRow label="Paragraph count" orig={orig.paragraphs} edit={edit.paragraphs} />
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4">Quality signals</p>
              <MetricRow label="Filler words" orig={orig.fillerWords} edit={edit.fillerWords} lowerIsBetter />
              <MetricRow label="Passive voice" orig={orig.passive} edit={edit.passive} lowerIsBetter />
              <MetricRow label="Word count" orig={orig.wordCount} edit={edit.wordCount} />
              <MetricRow label="Unsupported claim flags" orig={orig.flags} edit={edit.flags} />
            </div>
          </div>
        )}

        {/* Flags */}
        {activeTab === "flags" && (
          <div className="space-y-4">
            {flags.length === 0 ? (
              <div className="bg-green-950/30 border border-green-800 rounded-xl p-5">
                <p className="text-green-400 font-bold text-sm mb-1">No vague claims detected</p>
                <p className="text-gray-400 text-sm">All claims appear specific enough. No [SPECIFIC NEEDED] markers were inserted.</p>
              </div>
            ) : (
              <>
                <div className="bg-yellow-950/30 border border-yellow-800 rounded-xl p-5">
                  <p className="text-yellow-300 font-black text-base mb-1">
                    {flags.length} claim{flags.length !== 1 ? "s" : ""} need{flags.length === 1 ? "s" : ""} supporting data
                  </p>
                  <p className="text-gray-400 text-sm">
                    These are places where a specific figure, timeframe, or example would make the copy credible. The editor cannot invent them.
                  </p>
                </div>
                <div className="space-y-2">
                  {flags.map((flag, i) => (
                    <div key={i} className="flex items-start gap-3 bg-gray-900 border border-gray-800 rounded-xl p-4">
                      <span className="text-yellow-500 flex-shrink-0 mt-0.5">⚠</span>
                      <p className="text-gray-300 text-sm">{flag}</p>
                    </div>
                  ))}
                </div>
                {flags.length >= 3 && (
                  <div className="bg-[#4361ee]/10 border border-[#4361ee]/30 rounded-xl p-5">
                    <p className="text-white font-black text-sm mb-2">This draft needs original data, not better wording.</p>
                    <p className="text-gray-300 text-sm mb-4">
                      {flags.length} unsupported claims were flagged. Better rhythm and fewer filler words help — but weak claims stay weak. That is what our content service addresses.
                    </p>
                    <Link href="/services/content-marketing/" className="inline-flex items-center gap-2 bg-[#4361ee] text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-[#3451de] transition-all">
                      See our content service →
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    );
  }

  // ── Input form (textarea + email in one step) ─────────────────────────────

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Textarea */}
      <div className="relative">
        <textarea
          value={draft}
          onChange={e => setDraft(e.target.value)}
          placeholder={"Paste your AI-drafted blog post, landing page, or email here.\n\nThe editor will fix rhythm, strip filler vocabulary, flag vague claims, and return a full change log."}
          rows={12}
          className={`w-full bg-gray-800 border ${overLimit ? "border-red-600" : "border-gray-700"} focus:border-[#4361ee] text-white rounded-xl px-5 py-4 text-sm leading-relaxed outline-none transition-colors placeholder-gray-600 resize-none`}
          disabled={loading}
          spellCheck={false}
        />
        <span className={`absolute bottom-3.5 right-4 text-xs tabular-nums ${overLimit ? "text-red-400 font-semibold" : "text-gray-600"}`}>
          {wc} / {MAX_WORDS}
        </span>
      </div>

      {overLimit && (
        <p className="text-red-400 text-xs">
          Draft is {wc - MAX_WORDS} words over the limit. Split it into sections and run each separately.
        </p>
      )}

      {/* Email + submit row */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com  (3 free edits/day)"
          className="flex-1 bg-gray-800 border border-gray-700 focus:border-[#4361ee] text-white rounded-xl px-4 py-3.5 text-sm outline-none transition-colors placeholder-gray-600"
          autoComplete="email"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !draft.trim() || overLimit}
          className="bg-[#4361ee] hover:bg-[#3451de] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all flex items-center gap-2 justify-center flex-shrink-0"
        >
          {loading ? (
            <>
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              Editing…
            </>
          ) : "Edit Draft →"}
        </button>
      </div>

      {error && (
        <div className="bg-red-950/40 border border-red-800 rounded-xl px-4 py-3 text-red-300 text-sm">{error}</div>
      )}
    </form>
  );
}
