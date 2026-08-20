"use client";
import { useState, useRef } from "react";
import Link from "next/link";

// ── Types ─────────────────────────────────────────────────────────────────────

type BotStatus = "allowed" | "blocked" | "not_specified";
type Category = "retrieval" | "training" | "user_fetch" | "dataset";

interface BotResult {
  token: string;
  vendor: string;
  surface: string;
  category: Category;
  severity: string;
  consequence: string;
  note?: string;
  docs?: string;
  status: BotStatus;
  hasSpecificGroup: boolean;
  hasCrawlDelay: boolean;
}

interface Mismatch {
  type: string;
  message: string;
  severity: "critical" | "warning" | "info";
}

interface CheckResult {
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

// ── Sub-components ────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: BotStatus }) {
  const cfg = {
    allowed: "bg-green-100 text-green-700 border border-green-200",
    blocked: "bg-red-100 text-red-700 border border-red-200",
    not_specified: "bg-gray-100 text-gray-500 border border-gray-200",
  }[status];
  const label = {
    allowed: "Allowed",
    blocked: "Blocked",
    not_specified: "Not specified",
  }[status];
  return (
    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${cfg}`}>
      {label}
    </span>
  );
}

function CategoryBadge({ cat }: { cat: Category }) {
  const cfg: Record<Category, string> = {
    retrieval: "text-purple-700 bg-purple-50",
    training: "text-blue-700 bg-blue-50",
    user_fetch: "text-orange-700 bg-orange-50",
    dataset: "text-gray-600 bg-gray-100",
  };
  const label: Record<Category, string> = {
    retrieval: "Retrieval",
    training: "Training",
    user_fetch: "User fetch",
    dataset: "Dataset",
  };
  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${cfg[cat]}`}>
      {label[cat]}
    </span>
  );
}

function ScoreRing({ score, band }: { score: number; band: string }) {
  const color =
    score >= 90
      ? { text: "text-green-400", border: "border-green-700", bg: "bg-green-950/20" }
      : score >= 70
      ? { text: "text-yellow-400", border: "border-yellow-700", bg: "bg-yellow-950/20" }
      : score >= 40
      ? { text: "text-orange-400", border: "border-orange-700", bg: "bg-orange-950/20" }
      : { text: "text-red-400", border: "border-red-700", bg: "bg-red-950/20" };

  return (
    <div
      className={`border-2 rounded-2xl px-8 py-6 text-center flex-shrink-0 w-36 ${color.border} ${color.bg}`}
    >
      <div className={`text-5xl font-black ${color.text}`}>{score}</div>
      <div className={`text-xs font-bold mt-1 ${color.text}`}>{band}</div>
      <div className="text-gray-500 text-xs mt-1">/ 100</div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function CheckerClient() {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CheckResult | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain.trim()) return;
    setLoading(true);
    setApiError(null);
    setResult(null);

    try {
      const res = await fetch(
        `/api/ai-crawler-check?domain=${encodeURIComponent(domain.trim())}`
      );
      const data = await res.json();
      if (!res.ok) {
        setApiError(data.error ?? "Something went wrong. Please try again.");
      } else {
        setResult(data);
        setTimeout(
          () => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
          100
        );
      }
    } catch {
      setApiError("Network error — please try again.");
    } finally {
      setLoading(false);
    }
  };

  const verdictText = (r: CheckResult): string => {
    if (r.robotsError === "timeout")
      return "robots.txt request timed out — result is inconclusive.";
    if (r.robotsError === "unreachable")
      return "Could not reach the domain — check the URL and try again.";
    if (r.allBlocked)
      return "robots.txt is returning a server error. Most crawlers treat a persistently failing robots.txt as a full disallow.";
    const blockedRetrieval = r.bots.filter(
      (b) => b.status === "blocked" && b.category === "retrieval"
    );
    const totalBlocked = r.bots.filter((b) => b.status === "blocked");
    if (blockedRetrieval.length === 0 && totalBlocked.length === 0)
      return "All checked AI systems can reach your site.";
    if (blockedRetrieval.length > 0) {
      const names = blockedRetrieval
        .slice(0, 2)
        .map((b) => b.surface)
        .join(" and ");
      const more =
        blockedRetrieval.length > 2
          ? ` and ${blockedRetrieval.length - 2} more`
          : "";
      return `${blockedRetrieval.length} AI retrieval ${
        blockedRetrieval.length === 1 ? "system" : "systems"
      } cannot cite your site — including ${names}${more}.`;
    }
    return `${totalBlocked.length} AI ${
      totalBlocked.length === 1 ? "system" : "systems"
    } blocked — none are retrieval crawlers.`;
  };

  const copySnippet = async () => {
    if (!result?.correctedSnippet) return;
    await navigator.clipboard.writeText(result.correctedSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const reset = () => {
    setResult(null);
    setApiError(null);
    setDomain("");
  };

  return (
    <div>
      {/* Input form */}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm select-none">
            https://
          </span>
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
            <>
              <svg
                className="animate-spin w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Checking…
            </>
          ) : (
            "Check →"
          )}
        </button>
      </form>

      {apiError && (
        <div className="mt-4 bg-red-950/40 border border-red-800 rounded-xl px-5 py-3 text-red-300 text-sm">
          {apiError}
        </div>
      )}

      {/* ── Results ── */}
      {result && (
        <div ref={resultsRef} className="mt-8 space-y-5">
          {/* Score + verdict header */}
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <ScoreRing score={result.score} band={result.band} />
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <span className="text-white font-bold text-lg">
                  {result.domain}
                </span>
                {result.llmsTxtFound && (
                  <span className="bg-[#4361ee]/20 border border-[#4361ee]/30 text-[#7b93ff] text-xs font-bold px-2.5 py-0.5 rounded-full">
                    llms.txt ✓
                  </span>
                )}
                <span className="text-gray-600 text-xs">
                  {new Date(result.timestamp).toLocaleString()}
                </span>
              </div>
              <p className="text-gray-200 text-base leading-relaxed">
                {verdictText(result)}
              </p>
              {result.fileTooBig && (
                <p className="text-amber-400 text-xs mt-2">
                  ⚠ robots.txt exceeds 100 KB — some crawlers may truncate it.
                </p>
              )}
              {result.hasCrawlDelay && (
                <p className="text-amber-400 text-xs mt-1">
                  ⚠ Crawl-delay found on one or more AI bot groups.
                </p>
              )}
              {result.sitemaps.length > 0 && (
                <p className="text-green-400 text-xs mt-1">
                  ✓ {result.sitemaps.length} Sitemap{result.sitemaps.length > 1 ? "s" : ""} declared
                </p>
              )}
              <div className="mt-3 flex gap-3 flex-wrap">
                <button
                  onClick={() => handleSubmit({ preventDefault: () => {} } as React.FormEvent)}
                  className="text-[#7b93ff] text-xs font-semibold hover:underline"
                >
                  ↺ Recheck
                </button>
                <button
                  onClick={reset}
                  className="text-gray-500 text-xs hover:text-gray-300"
                >
                  ← Check another domain
                </button>
              </div>
            </div>
          </div>

          {/* Googlebot alert — separate, highest priority */}
          {result.googlebotBlocked && (
            <div className="bg-red-950/60 border-2 border-red-700 rounded-2xl p-5">
              <p className="text-red-300 font-black text-sm mb-1">
                🚨 Critical: Googlebot is blocked
              </p>
              <p className="text-red-200 text-sm leading-relaxed">
                This removes your site from Google Search entirely — including
                Google AI Overviews, which has no separate user-agent. Googlebot
                is not an AI training bot. Fix this immediately before addressing
                anything else.
              </p>
            </div>
          )}

          {/* Mismatch callouts */}
          {result.mismatches
            .filter((m) => m.type !== "googlebot_blocked")
            .map((m) => (
              <div
                key={m.type}
                className={`border rounded-2xl p-5 ${
                  m.severity === "critical"
                    ? "bg-red-950/40 border-red-800"
                    : m.severity === "warning"
                    ? "bg-amber-950/40 border-amber-800"
                    : "bg-blue-950/40 border-blue-800"
                }`}
              >
                <p
                  className={`font-bold text-xs uppercase tracking-wide mb-2 ${
                    m.severity === "critical"
                      ? "text-red-400"
                      : m.severity === "warning"
                      ? "text-amber-400"
                      : "text-blue-400"
                  }`}
                >
                  {m.severity === "critical"
                    ? "🔴 Configuration mismatch"
                    : m.severity === "info"
                    ? "✅ Correct configuration"
                    : "⚠ Note"}
                </p>
                <p
                  className={`text-sm leading-relaxed ${
                    m.severity === "critical"
                      ? "text-red-200"
                      : m.severity === "warning"
                      ? "text-amber-200"
                      : "text-blue-200"
                  }`}
                >
                  {m.message}
                </p>
              </div>
            ))}

          {/* Results table */}
          <div className="overflow-x-auto rounded-2xl border border-gray-800">
            <table className="w-full text-sm min-w-[600px]">
              <thead className="bg-gray-900 border-b border-gray-800">
                <tr>
                  <th className="text-left px-4 py-3 text-gray-400 font-semibold text-xs uppercase tracking-wide">
                    AI System
                  </th>
                  <th className="text-left px-4 py-3 text-gray-400 font-semibold text-xs uppercase tracking-wide hidden md:table-cell">
                    User-agent
                  </th>
                  <th className="text-left px-4 py-3 text-gray-400 font-semibold text-xs uppercase tracking-wide hidden sm:table-cell">
                    Purpose
                  </th>
                  <th className="text-left px-4 py-3 text-gray-400 font-semibold text-xs uppercase tracking-wide">
                    Status
                  </th>
                  <th className="text-left px-4 py-3 text-gray-400 font-semibold text-xs uppercase tracking-wide hidden lg:table-cell">
                    What this means
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/50">
                {result.bots.map((bot) => (
                  <tr
                    key={bot.token}
                    className={`${
                      bot.status === "blocked" && bot.category === "retrieval"
                        ? "bg-red-950/15"
                        : bot.status === "blocked"
                        ? "bg-orange-950/10"
                        : ""
                    }`}
                  >
                    <td className="px-4 py-3">
                      <div className="font-semibold text-white text-sm">
                        {bot.vendor}
                      </div>
                      <div className="text-gray-400 text-xs">{bot.surface}</div>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <code className="text-[#7b93ff] text-xs bg-[#4361ee]/10 px-2 py-0.5 rounded font-mono">
                        {bot.token}
                      </code>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <CategoryBadge cat={bot.category} />
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge status={bot.status} />
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell max-w-xs">
                      {bot.status === "blocked" ? (
                        <p className="text-red-300 text-xs leading-relaxed">
                          {bot.consequence}
                        </p>
                      ) : bot.note ? (
                        <p className="text-gray-500 text-xs leading-relaxed italic">
                          {bot.note}
                        </p>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legacy tokens */}
          {result.legacyTokens.some((l) => l.found) && (
            <div className="bg-gray-900/60 border border-gray-700 rounded-2xl p-5">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wide mb-3">
                Legacy / Deprecated Tokens Found
              </p>
              <div className="space-y-2">
                {result.legacyTokens
                  .filter((l) => l.found)
                  .map((l) => (
                    <div key={l.token} className="flex items-start gap-3">
                      <code className="text-amber-400 text-xs font-mono bg-amber-950/30 px-2 py-0.5 rounded flex-shrink-0">
                        {l.token}
                      </code>
                      <p className="text-gray-500 text-xs">{l.note}</p>
                    </div>
                  ))}
              </div>
              <p className="text-gray-600 text-xs mt-3">
                These tokens still work but can be replaced with their modern equivalents — tidies up your robots.txt.
              </p>
            </div>
          )}

          {/* llms.txt cross-sell */}
          {!result.llmsTxtFound && (
            <div className="bg-[#4361ee]/10 border border-[#4361ee]/25 rounded-2xl p-5 flex gap-4 items-start">
              <span className="text-2xl flex-shrink-0">📄</span>
              <div>
                <p className="text-white font-bold text-sm mb-1">
                  No llms.txt found
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-2">
                  llms.txt tells AI crawlers which pages to prioritise and how to
                  describe your brand. It is the AI equivalent of robots.txt —
                  opt-in rather than opt-out.
                </p>
                <Link
                  href="/blog/llms-txt/"
                  className="text-[#7b93ff] text-sm font-semibold hover:underline"
                >
                  Read our llms.txt guide →
                </Link>
              </div>
            </div>
          )}

          {/* Corrected robots.txt snippet */}
          {result.correctedSnippet && (
            <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
              <div className="flex items-center justify-between px-5 py-3 border-b border-gray-800">
                <div>
                  <p className="text-white font-bold text-sm">
                    Corrected robots.txt snippet
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    Add these blocks to allow AI retrieval bots
                  </p>
                </div>
                <button
                  onClick={copySnippet}
                  className="text-[#7b93ff] text-sm font-semibold hover:underline flex-shrink-0"
                >
                  {copied ? "✓ Copied" : "Copy"}
                </button>
              </div>
              <pre className="px-5 py-4 text-green-300 text-xs overflow-x-auto leading-relaxed font-mono whitespace-pre">
                {result.correctedSnippet}
              </pre>
            </div>
          )}

          {/* CTA — conditional on score */}
          {result.score < 70 ? (
            <div className="bg-gradient-to-br from-[#1a237e] to-[#4a1080] border border-[#4361ee]/40 rounded-2xl p-7">
              <p className="text-[#7b93ff] text-xs font-bold uppercase tracking-widest mb-2">
                Next step
              </p>
              <h3 className="text-white font-black text-xl mb-3">
                Fixing robots.txt makes you accessible. Getting cited is the next problem.
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed mb-5">
                Once AI crawlers can reach your site, visibility requires
                content, entity clarity, and editorial authority — work that
                robots.txt changes alone cannot do. The AI Citation Programme
                handles the full execution.
              </p>
              <Link
                href="/ai-citation-programme/"
                className="inline-flex items-center gap-2 bg-white text-[#4361ee] font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm"
              >
                See the AI Citation Programme →
              </Link>
            </div>
          ) : (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-white font-bold text-base mb-2">
                You&apos;re accessible — but are you actually being cited?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                robots.txt access is a necessary condition, not a sufficient one.
                We audit your actual citation rate across 6 AI engines — 60
                prompts, 3 competitors benchmarked, written performance targets.
              </p>
              <Link
                href="/ai-citation-programme/"
                className="text-[#7b93ff] text-sm font-semibold hover:underline"
              >
                Learn about the $997 AI Visibility Audit →
              </Link>
            </div>
          )}

          {/* Caveats */}
          <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-5">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wide mb-3">
              Important Caveats
            </p>
            <ul className="space-y-1.5 text-xs text-gray-500 leading-relaxed">
              {[
                "robots.txt is a voluntary standard. Some crawlers — notably Bytespider — have a documented history of ignoring it.",
                "A green score does not guarantee access. CDN, WAF, and bot-management rules (Cloudflare Bot Management in particular) can block AI crawlers at the network layer regardless of robots.txt. This tool cannot see that layer.",
                "User-initiated fetchers (ChatGPT-User, Claude-User, Perplexity-User) may bypass robots.txt by design when a user supplies a specific URL.",
                "Google-Extended and Applebot-Extended are policy tokens, not crawlers. They never appear in server logs.",
                "Results reflect the file at the time of check.",
              ].map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="flex-shrink-0 mt-0.5">→</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
