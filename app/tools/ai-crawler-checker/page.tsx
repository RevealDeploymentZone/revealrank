import type { Metadata } from "next";
import Link from "next/link";
import CheckerClient from "./CheckerClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import crawlersData from "@/data/ai-crawlers.json";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Crawler Checker — Is Your Site Blocking ChatGPT, Perplexity & Gemini? | Reveal Rank",
  description:
    "Free tool: enter any domain and instantly see which AI crawlers can reach it and what blocking each one costs you. Checks ChatGPT, Perplexity, Claude, Gemini, Copilot and 14 more.",
  keywords: [
    "AI crawler checker",
    "is my site blocking ChatGPT",
    "GPTBot robots.txt",
    "OAI-SearchBot vs GPTBot",
    "allow AI crawlers robots.txt",
    "robots.txt AI bots",
    "PerplexityBot blocked",
    "AI search visibility checker",
  ],
  alternates: {
    canonical: "https://www.revealrank.com/tools/ai-crawler-checker/",
  },
  openGraph: {
    title: "AI Crawler Checker | Reveal Rank",
    description:
      "Free: check your robots.txt against every known AI crawler. See which AI systems can reach your site — and what blocking them costs you.",
    url: "https://www.revealrank.com/tools/ai-crawler-checker/",
    siteName: "Reveal Rank",
    type: "website",
  },
};

// ── Structured data ───────────────────────────────────────────────────────────

const faqs = [
  {
    q: "What is the difference between GPTBot and OAI-SearchBot?",
    a: "GPTBot collects content for OpenAI model training. OAI-SearchBot fetches pages to answer live queries in ChatGPT Search. Blocking GPTBot opts your content out of training. Blocking OAI-SearchBot removes you from ChatGPT Search citations entirely. These are separate decisions and should be configured separately in your robots.txt.",
  },
  {
    q: "Does blocking AI crawlers affect my Google Search rankings?",
    a: "No — as long as Googlebot is allowed. Google AI Overviews do not have a separate user-agent; eligibility comes through normal Googlebot indexing. Google-Extended is a separate policy token that controls Gemini training data only, and blocking it has no effect on Google Search rankings.",
  },
  {
    q: "Why does my robots.txt block AI bots when I never added those rules?",
    a: "Several SEO plugins added blanket AI bot blocks in 2023 without clear disclosure — Yoast, Rank Math, and others included. Cloudflare's Bot Management can also block AI crawlers at the network layer. Some CDN and hosting templates inherited early anti-scraping rules that predate the AI crawler era.",
  },
  {
    q: "What does 'Not specified' mean in the results?",
    a: "The bot has no specific group in your robots.txt and no wildcard (*) group applies. Per RFC 9309, an absence of rules means the bot is allowed. 'Not specified' is effectively the same as 'Allowed', but we distinguish it so you can see which bots you have explicitly addressed versus which ones you have simply never mentioned.",
  },
  {
    q: "Can I allow retrieval bots but block training bots?",
    a: "Yes, and this is the recommended configuration for most sites. Create separate User-agent groups: allow retrieval bots (OAI-SearchBot, PerplexityBot, Claude-SearchBot) and disallow training bots (GPTBot, ClaudeBot) if you choose to opt out. The RFC 9309 rule is that specific groups are never merged with the wildcard group, so you can configure each independently.",
  },
  {
    q: "Why does a green score not guarantee I am being cited?",
    a: "robots.txt access is a necessary condition for AI citation, not a sufficient one. Even with all bots allowed, AI models cite brands based on authority, entity clarity, content structure, and editorial mentions — not just accessibility. A site can be fully crawlable and still invisible in AI answers because of weak authority or unclear brand signals.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AI Crawler Checker",
  applicationCategory: "SEOApplication",
  operatingSystem: "Web",
  url: "https://www.revealrank.com/tools/ai-crawler-checker/",
  description:
    "Free tool to check which AI crawlers can access your site via robots.txt, with consequence mapping per bot.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Reveal Rank" },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AICrawlerCheckerPage() {
  const bots = crawlersData.bots;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Tools", href: "/tools" },
          { name: "AI Crawler Checker", href: "/tools/ai-crawler-checker" },
        ]}
      />

      {/* ── Hero + Tool ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gray-950 pt-16 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#4361ee18_0%,_transparent_55%)] pointer-events-none" />
        <div className="max-w-[900px] mx-auto px-4 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 bg-[#4361ee]/10 border border-[#4361ee]/30 text-[#7b93ff] text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
            <span>🔍</span> Free Tool — No Sign-up Required
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
            Is your site blocking AI crawlers?
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-3 max-w-2xl">
            Enter a domain. We fetch and parse its{" "}
            <code className="text-[#7b93ff] bg-[#4361ee]/10 px-1.5 py-0.5 rounded text-sm">
              robots.txt
            </code>{" "}
            and tell you which AI systems can reach it — and what blocking each
            one costs you in citations and visibility.
          </p>
          <p className="text-gray-500 text-sm mb-10">
            Full results are free. No email required. Checks{" "}
            {bots.length} AI crawlers including ChatGPT, Perplexity, Claude,
            Gemini, Copilot, and more.
          </p>

          <CheckerClient />
        </div>
      </section>

      {/* ── Bot Registry Reference Table ─────────────────────────────────── */}
      <section className="py-20 bg-white" id="bot-registry">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">
              Reference
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Every AI crawler — and what blocking each one does
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              The registry this tool checks against. Versioned and updated as
              new crawlers are announced.{" "}
              <span className="text-gray-400 text-sm">
                v{crawlersData.version} · Last reviewed{" "}
                {crawlersData.last_reviewed}
              </span>
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[700px]">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-5 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide">
                    User-agent
                  </th>
                  <th className="text-left px-5 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide">
                    Vendor / Surface
                  </th>
                  <th className="text-left px-5 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide hidden sm:table-cell">
                    Category
                  </th>
                  <th className="text-left px-5 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide">
                    Consequence of blocking
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {bots.map((bot) => (
                  <tr key={bot.token} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5">
                      <code className="text-[#4361ee] text-xs font-mono font-bold">
                        {bot.token}
                      </code>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="font-semibold text-gray-900 text-sm">
                        {bot.vendor}
                      </div>
                      <div className="text-gray-400 text-xs">{bot.surface}</div>
                    </td>
                    <td className="px-5 py-3.5 hidden sm:table-cell">
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded ${
                          bot.category === "retrieval"
                            ? "text-purple-700 bg-purple-50"
                            : bot.category === "training"
                            ? "text-blue-700 bg-blue-50"
                            : bot.category === "user_fetch"
                            ? "text-orange-700 bg-orange-50"
                            : "text-gray-600 bg-gray-100"
                        }`}
                      >
                        {bot.category === "user_fetch"
                          ? "User fetch"
                          : bot.category.charAt(0).toUpperCase() +
                            bot.category.slice(1)}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-gray-600 text-xs leading-relaxed max-w-xs">
                      {bot.consequence}
                      {bot.note && (
                        <p className="text-gray-400 italic mt-1">{bot.note}</p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Training vs Retrieval ─────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">
              The Most Important Distinction
            </p>
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              Training bots vs retrieval bots — a completely different decision
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Most sites that block AI crawlers do so with a blanket rule added
              by a plugin in 2023. That rule treats all AI bots as equivalent.
              They are not. There are two fundamentally different types, and
              blocking each has a completely different business consequence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              <div className="bg-white rounded-2xl border border-purple-200 p-6">
                <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  Retrieval bots
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-2">
                  Blocking = invisible in AI answers
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Retrieval bots fetch pages to answer live user queries.
                  When a user asks ChatGPT Search, Perplexity, or Claude a
                  question, the retrieval bot is what finds and cites your
                  content. Blocking it removes your brand from those answers
                  entirely.
                </p>
                <div className="space-y-1.5">
                  {bots
                    .filter((b) => b.category === "retrieval")
                    .map((b) => (
                      <div key={b.token} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                        <code className="text-purple-700 text-xs font-mono">
                          {b.token}
                        </code>
                        <span className="text-gray-400 text-xs">
                          — {b.vendor}
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-blue-200 p-6">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  Training bots
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-2">
                  Blocking = out of model training only
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Training bots collect content for future model training
                  datasets. Blocking them opts your content out of being used
                  to train AI models — it does not remove you from live AI
                  search citations. This is a legitimate choice; blocking it
                  does not break your AI visibility.
                </p>
                <div className="space-y-1.5">
                  {bots
                    .filter((b) => b.category === "training")
                    .map((b) => (
                      <div key={b.token} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                        <code className="text-blue-700 text-xs font-mono">
                          {b.token}
                        </code>
                        <span className="text-gray-400 text-xs">
                          — {b.vendor}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* The three-way mismatch logic */}
            <div className="bg-gray-900 rounded-2xl p-7">
              <p className="text-[#7b93ff] text-xs font-bold uppercase tracking-widest mb-4">
                The Three Configurations — OpenAI Example
              </p>
              <div className="space-y-4">
                {[
                  {
                    config: "GPTBot blocked + OAI-SearchBot blocked",
                    outcome: "Invisible in ChatGPT Search. Usually unintentional.",
                    color: "text-red-400",
                    bg: "bg-red-950/40 border-red-800",
                  },
                  {
                    config: "GPTBot blocked + OAI-SearchBot allowed",
                    outcome:
                      "Correct: opted out of training, still citable in ChatGPT Search.",
                    color: "text-green-400",
                    bg: "bg-green-950/40 border-green-800",
                  },
                  {
                    config: "GPTBot allowed + OAI-SearchBot blocked",
                    outcome:
                      "Backwards: content trains OpenAI models but cannot be cited in Search. Worst of both.",
                    color: "text-red-400",
                    bg: "bg-red-950/40 border-red-800",
                  },
                ].map((row) => (
                  <div
                    key={row.config}
                    className={`border rounded-xl p-4 ${row.bg}`}
                  >
                    <code className="text-gray-300 text-xs font-mono">
                      {row.config}
                    </code>
                    <p className={`text-sm font-semibold mt-1 ${row.color}`}>
                      {row.outcome}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-4">
                The same three-way logic applies to Anthropic (ClaudeBot /{" "}
                Claude-SearchBot).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How to Fix by Platform ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">
              Platform Guides
            </p>
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              How to fix your robots.txt, by platform
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                platform: "WordPress (Yoast / Rank Math)",
                icon: "🔷",
                steps: [
                  "Go to SEO plugin settings → Tools → File Editor",
                  'Find the User-agent: GPTBot / Disallow: / block added by the plugin',
                  "Split into separate groups: one for training bots (Disallow: /), one for retrieval bots (Allow: /)",
                  "Save and verify with this checker",
                ],
              },
              {
                platform: "Shopify",
                icon: "🛒",
                steps: [
                  "Shopify auto-generates robots.txt — you cannot edit it directly",
                  "Use the Liquid robots.txt template override: create robots.txt.liquid in your theme",
                  "Add specific User-agent groups after the default template content",
                  "Deploy and test",
                ],
              },
              {
                platform: "Webflow",
                icon: "🌊",
                steps: [
                  "Go to Project Settings → SEO → robots.txt",
                  "Edit the raw robots.txt field directly",
                  "Add separate groups for retrieval vs training bots",
                  "Publish and verify",
                ],
              },
              {
                platform: "Next.js",
                icon: "▲",
                steps: [
                  "Edit public/robots.txt or use next-sitemap to generate it",
                  "Add User-agent groups directly to the file",
                  "Or use the Next.js metadata robots config in app/layout.tsx",
                  "Deploy and run this checker to confirm",
                ],
              },
              {
                platform: "Cloudflare (WAF rules)",
                icon: "🟠",
                steps: [
                  "robots.txt changes alone may not be enough if WAF rules block bot UAs",
                  "Go to Security → WAF → Managed rules",
                  "Check if 'AI Scrapers and Crawlers' managed ruleset is active",
                  "Create an exception for specific retrieval bot user-agents if needed",
                ],
              },
              {
                platform: "Apache / Nginx (static sites)",
                icon: "🖥️",
                steps: [
                  "Edit the robots.txt file in your site root directly",
                  "Separate retrieval bot groups from training bot groups",
                  "Do not use a blanket User-agent: * Disallow: / — that blocks everything",
                  "Test with this checker after deployment",
                ],
              },
            ].map((item) => (
              <div
                key={item.platform}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="font-black text-gray-900 text-sm">
                    {item.platform}
                  </h3>
                </div>
                <ol className="space-y-2">
                  {item.steps.map((step, i) => (
                    <li key={i} className="flex gap-2 text-xs text-gray-600">
                      <span className="text-[#4361ee] font-bold flex-shrink-0">
                        {i + 1}.
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Sites Block Accidentally ─────────────────────────────────── */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[860px] mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">
            Why sites block AI crawlers without meaning to
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "SEO plugin defaults (2023)",
                body: "Several major SEO plugins added blanket AI bot blocking rules in mid-2023 in response to the GPTBot release, often without clear disclosure. Sites that updated those plugins may have inherited blocks they never intentionally set.",
              },
              {
                title: "Cloudflare Bot Management",
                body: "Cloudflare's managed bot rules include an 'AI Scrapers and Crawlers' category. Enabling this blocks AI bots at the network layer, regardless of what robots.txt says. This tool cannot detect WAF-layer blocks.",
              },
              {
                title: "Wildcard disallow inheritance",
                body: "A site with User-agent: * / Disallow: / (common during maintenance mode or migration) blocks everything — including retrieval bots. The wildcard applies to all bots that have no specific group of their own.",
              },
              {
                title: "Template and hosting defaults",
                body: "Some managed WordPress hosts and headless CMS templates shipped with restrictive robots.txt defaults that predate the AI crawler era. Sites launched or migrated in 2022–2023 may have inherited these rules.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-xl p-5"
              >
                <h3 className="font-bold text-gray-900 text-sm mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">
              FAQ
            </p>
            <h2 className="text-3xl font-black text-gray-900">
              Common questions about AI crawlers and robots.txt
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6"
              >
                <h3 className="text-gray-900 font-bold text-base mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────────────────────── */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">
            Related Resources
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "llms.txt Guide", href: "/blog/llms-txt/" },
              { label: "AI Visibility Hub", href: "/ai-visibility/" },
              { label: "AI Citation Programme", href: "/ai-citation-programme/" },
              { label: "Technical SEO Service", href: "/services/technical-seo/" },
              {
                label: "GEO: Rank on Every AI Platform",
                href: "/blog/generative-engine-optimization/",
              },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="bg-white border border-gray-200 text-gray-600 hover:text-[#4361ee] hover:border-[#4361ee]/30 text-sm font-medium px-4 py-2 rounded-xl transition-all"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
