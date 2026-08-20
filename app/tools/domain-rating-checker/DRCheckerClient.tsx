"use client";
import { useState } from "react";
import Link from "next/link";

// ── Types ─────────────────────────────────────────────────────────────────────

interface AIAccess {
  score: number;
  blocked: Array<{ token: string; vendor: string; surface: string }>;
  googlebotBlocked: boolean;
  llmsTxtFound: boolean;
}

interface DRResult {
  domain: string;
  dr: number | null;
  band: string;
  bandColor: string;
  licenseUrl: string;
  timestamp: string;
  aiAccess: AIAccess;
  verdict: "high_dr_accessible" | "high_dr_blocked" | "low_dr_accessible" | "low_dr_blocked";
  verdictTitle: string;
  verdictBody: string;
  error?: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const BAND_STYLES: Record<string, { ring: string; text: string; bg: string; bar: string }> = {
  gray:   { ring: "border-gray-600",   text: "text-gray-300",  bg: "bg-gray-900/40",   bar: "bg-gray-500"   },
  orange: { ring: "border-orange-600", text: "text-orange-400",bg: "bg-orange-950/40", bar: "bg-orange-500" },
  yellow: { ring: "border-yellow-500", text: "text-yellow-400",bg: "bg-yellow-950/30", bar: "bg-yellow-400" },
  blue:   { ring: "border-blue-500",   text: "text-blue-400",  bg: "bg-blue-950/40",   bar: "bg-blue-500"   },
  purple: { ring: "border-purple-500", text: "text-purple-400",bg: "bg-purple-950/40", bar: "bg-purple-500" },
};

const VERDICT_STYLES: Record<string, string> = {
  high_dr_accessible: "border-green-800 bg-green-950/30",
  high_dr_blocked:    "border-red-700 bg-red-950/40",
  low_dr_accessible:  "border-yellow-800 bg-yellow-950/30",
  low_dr_blocked:     "border-orange-800 bg-orange-950/30",
};

const VERDICT_ICON: Record<string, string> = {
  high_dr_accessible: "✅",
  high_dr_blocked:    "🔴",
  low_dr_accessible:  "⚠️",
  low_dr_blocked:     "🔴",
};

function downloadCSV(results: DRResult[]) {
  const rows = [
    ["Domain", "DR", "Band", "AI Access Score", "Blocked Bots", "Verdict"],
    ...results.map((r) => [
      r.domain,
      r.dr ?? "N/A",
      r.band,
      r.aiAccess.score,
      r.aiAccess.blocked.map((b) => b.token).join("; ") || "None",
      r.verdict,
    ]),
  ];
  const csv = rows.map((r) => r.map(String).map((v) => `"${v.replace(/"/g, '""')}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "domain-ratings.csv";
  a.click();
}

// ── Score bar (0-100) ─────────────────────────────────────────────────────────

function DRBar({ dr, color }: { dr: number; color: string }) {
  const style = BAND_STYLES[color] ?? BAND_STYLES.gray;
  return (
    <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
      <div
        className={`h-2 rounded-full transition-all duration-700 ${style.bar}`}
        style={{ width: `${dr}%` }}
      />
    </div>
  );
}

// ── Single result card ────────────────────────────────────────────────────────

function ResultCard({ r }: { r: DRResult }) {
  const style = BAND_STYLES[r.bandColor] ?? BAND_STYLES.gray;

  return (
    <div className="space-y-5">
      {/* DR Score — hidden if unavailable */}
      {r.dr !== null ? (
        <div className={`border-2 rounded-2xl p-7 ${style.ring} ${style.bg}`}>
          <div className="flex items-end gap-4 mb-3">
            <div className={`text-7xl font-black leading-none ${style.text}`}>{r.dr}</div>
            <div className="pb-2">
              <div className={`text-xl font-black ${style.text}`}>{r.band}</div>
              <div className="text-gray-500 text-xs">Domain Rating · 0–100</div>
            </div>
          </div>
          <DRBar dr={r.dr} color={r.bandColor} />
          <a
            href={r.licenseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 text-gray-500 text-xs hover:text-gray-300 transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Domain Rating by{" "}
            <span className="underline">Ahrefs</span>
          </a>
        </div>
      ) : (
        <div className="bg-gray-900/50 border border-gray-700 rounded-2xl px-5 py-4 flex items-center gap-3">
          <span className="text-gray-500 text-lg">📊</span>
          <p className="text-gray-400 text-sm">
            DR score unavailable —{" "}
            <a href="https://ahrefs.com/" target="_blank" rel="noopener noreferrer" className="text-[#7b93ff] hover:underline">
              add a free Ahrefs API key
            </a>{" "}
            to enable it.
          </p>
        </div>
      )}

      {/* AI access summary */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <p className="text-white font-bold text-sm">AI Crawler Access</p>
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
            r.aiAccess.score >= 75
              ? "bg-green-950 text-green-400 border border-green-800"
              : r.aiAccess.score >= 50
              ? "bg-yellow-950 text-yellow-400 border border-yellow-800"
              : "bg-red-950 text-red-400 border border-red-800"
          }`}>
            {r.aiAccess.score}% accessible
          </span>
        </div>

        {r.aiAccess.googlebotBlocked && (
          <p className="text-red-300 text-xs mb-3 font-semibold">
            🚨 Googlebot is blocked — removes site from Google Search entirely.
          </p>
        )}

        {r.aiAccess.blocked.length === 0 ? (
          <p className="text-green-400 text-xs">
            ✓ All key AI retrieval bots can reach your site.
          </p>
        ) : (
          <div className="space-y-1.5 mb-3">
            {r.aiAccess.blocked.map((b) => (
              <div key={b.token} className="flex items-center gap-2">
                <span className="text-red-500 text-xs flex-shrink-0">✗</span>
                <span className="text-red-300 text-xs">
                  <code className="font-mono">{b.token}</code> — {b.vendor} {b.surface} blocked
                </span>
              </div>
            ))}
          </div>
        )}

        {r.aiAccess.llmsTxtFound && (
          <p className="text-[#7b93ff] text-xs mt-2">✓ llms.txt found</p>
        )}

        <Link
          href={`/tools/ai-crawler-checker/?domain=${r.domain}`}
          className="inline-block mt-3 text-[#7b93ff] text-xs font-semibold hover:underline"
        >
          Full crawler report for {r.domain} →
        </Link>
      </div>

      {/* Combined verdict */}
      {r.verdictTitle && (
        <div className={`border rounded-2xl p-6 ${VERDICT_STYLES[r.verdict]}`}>
          <p className="text-white font-black text-base mb-2">
            {VERDICT_ICON[r.verdict]} {r.verdictTitle}
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">{r.verdictBody}</p>
          {r.verdict === "high_dr_blocked" ? (
            <Link
              href="/tools/ai-crawler-checker/"
              className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-gray-100 transition-all"
            >
              Fix crawler access now →
            </Link>
          ) : r.verdict === "high_dr_accessible" ? (
            <Link
              href="/ai-citation-programme/"
              className="inline-flex items-center gap-2 bg-[#4361ee] text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-[#3451de] transition-all"
            >
              See the AI Citation Programme →
            </Link>
          ) : r.verdict === "low_dr_accessible" ? (
            <Link
              href="/services/link-building/"
              className="inline-flex items-center gap-2 bg-[#4361ee] text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-[#3451de] transition-all"
            >
              Build domain authority →
            </Link>
          ) : (
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/tools/ai-crawler-checker/"
                className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-gray-100 transition-all"
              >
                Fix crawlers first →
              </Link>
              <Link
                href="/services/link-building/"
                className="inline-flex items-center gap-2 border border-gray-600 text-gray-300 font-semibold px-5 py-2.5 rounded-xl text-sm hover:border-gray-400 transition-all"
              >
                Then build authority →
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function DRCheckerClient() {
  const [domain, setDomain] = useState("");
  const [bulkMode, setBulkMode] = useState(false);
  const [bulkText, setBulkText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DRResult | null>(null);
  const [bulkResults, setBulkResults] = useState<DRResult[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSingle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch(`/api/domain-rating?domain=${encodeURIComponent(domain.trim())}`);
      const data = await res.json();
      if (!res.ok) setError(data.error ?? "Something went wrong.");
      else setResult(data);
    } catch { setError("Network error — please try again."); }
    finally { setLoading(false); }
  };

  const handleBulk = async (e: React.FormEvent) => {
    e.preventDefault();
    const domains = bulkText.split(/[\n,]+/).map((d) => d.trim()).filter(Boolean).slice(0, 10);
    if (!domains.length) return;
    setLoading(true);
    setError(null);
    setBulkResults(null);
    try {
      const res = await fetch("/api/domain-rating", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domains }),
      });
      const data = await res.json();
      if (!res.ok) setError(data.error ?? "Something went wrong.");
      else setBulkResults(data.results);
    } catch { setError("Network error — please try again."); }
    finally { setLoading(false); }
  };

  return (
    <div>
      {/* Mode toggle */}
      <div className="flex items-center gap-3 mb-5">
        <button
          onClick={() => { setBulkMode(false); setResult(null); setBulkResults(null); setError(null); }}
          className={`text-sm font-semibold px-4 py-2 rounded-lg transition-all ${!bulkMode ? "bg-[#4361ee] text-white" : "text-gray-400 hover:text-gray-200"}`}
        >
          Single domain
        </button>
        <button
          onClick={() => { setBulkMode(true); setResult(null); setBulkResults(null); setError(null); }}
          className={`text-sm font-semibold px-4 py-2 rounded-lg transition-all ${bulkMode ? "bg-[#4361ee] text-white" : "text-gray-400 hover:text-gray-200"}`}
        >
          Bulk (up to 10)
        </button>
      </div>

      {/* Single form */}
      {!bulkMode && (
        <form onSubmit={handleSingle} className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm select-none">https://</span>
            <input
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              placeholder="example.com"
              className="w-full bg-gray-800 border border-gray-700 focus:border-[#4361ee] text-white rounded-xl pl-16 pr-4 py-4 text-lg outline-none transition-colors placeholder-gray-600"
              disabled={loading}
              autoComplete="off"
              spellCheck={false}
            />
          </div>
          <button
            type="submit"
            disabled={loading || !domain.trim()}
            className="bg-[#4361ee] hover:bg-[#3451de] disabled:opacity-50 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all flex-shrink-0 flex items-center gap-2 justify-center"
          >
            {loading ? (
              <><svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Checking…</>
            ) : "Check DR →"}
          </button>
        </form>
      )}

      {/* Bulk form */}
      {bulkMode && (
        <form onSubmit={handleBulk} className="space-y-3">
          <textarea
            value={bulkText}
            onChange={(e) => setBulkText(e.target.value)}
            placeholder={"example.com\nanothersite.com\ncompetitor.io"}
            rows={5}
            className="w-full bg-gray-800 border border-gray-700 focus:border-[#4361ee] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder-gray-600 font-mono resize-none"
            disabled={loading}
          />
          <div className="flex items-center justify-between">
            <span className="text-gray-500 text-xs">
              {bulkText.split(/[\n,]+/).filter((d) => d.trim()).length} / 10 domains
            </span>
            <button
              type="submit"
              disabled={loading || !bulkText.trim()}
              className="bg-[#4361ee] hover:bg-[#3451de] disabled:opacity-50 text-white font-bold px-6 py-3 rounded-xl transition-all flex items-center gap-2"
            >
              {loading ? (
                <><svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Checking…</>
              ) : "Check All →"}
            </button>
          </div>
        </form>
      )}

      {error && (
        <div className="mt-4 bg-red-950/40 border border-red-800 rounded-xl px-5 py-3 text-red-300 text-sm">{error}</div>
      )}

      {/* Single result */}
      {result && (
        <div className="mt-8">
          <ResultCard r={result} />
        </div>
      )}

      {/* Bulk results */}
      {bulkResults && (
        <div className="mt-8 space-y-5">
          {/* Attribution above table (mandatory) */}
          <div className="flex items-center justify-between">
            <a href="https://ahrefs.com/" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 text-xs hover:text-gray-200 underline">
              Domain Rating by Ahrefs
            </a>
            <button
              onClick={() => downloadCSV(bulkResults)}
              className="text-[#7b93ff] text-xs font-semibold hover:underline flex items-center gap-1"
            >
              ↓ Export CSV
            </button>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-800">
            <table className="w-full text-sm min-w-[600px]">
              <thead className="bg-gray-900 border-b border-gray-800">
                <tr>
                  {["Domain", "DR", "Band", "AI Access", "Verdict"].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-gray-400 font-semibold text-xs uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/50">
                {bulkResults.map((r) => (
                  <tr key={r.domain} className={r.verdict === "high_dr_blocked" ? "bg-red-950/10" : ""}>
                    <td className="px-4 py-3 text-white font-medium text-sm">{r.domain}</td>
                    <td className="px-4 py-3">
                      <span className={`font-black text-lg ${BAND_STYLES[r.bandColor]?.text ?? "text-gray-300"}`}>
                        {r.dr ?? "—"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-400 text-sm">{r.band}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                        r.aiAccess.score >= 75
                          ? "bg-green-950 text-green-400 border border-green-800"
                          : r.aiAccess.score >= 50
                          ? "bg-yellow-950 text-yellow-400 border border-yellow-800"
                          : "bg-red-950 text-red-400 border border-red-800"
                      }`}>
                        {r.aiAccess.score}%
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-400 text-xs max-w-xs">
                      {VERDICT_ICON[r.verdict]} {r.verdictTitle.slice(0, 60)}{r.verdictTitle.length > 60 ? "…" : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
