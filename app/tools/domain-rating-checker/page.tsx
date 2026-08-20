import type { Metadata } from "next";
import Link from "next/link";
import DRCheckerClient from "./DRCheckerClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Domain Rating Checker — Free DR Lookup + AI Visibility | Reveal Rank",
  description:
    "Free DR checker powered by Ahrefs. Enter any domain and instantly see its Domain Rating, AI crawler access, and a combined authority + AI visibility verdict.",
  keywords: [
    "domain rating checker",
    "DR checker free",
    "ahrefs domain rating",
    "domain authority checker",
    "website authority checker",
    "DR vs DA",
    "check domain rating",
    "free backlink authority tool",
  ],
  alternates: { canonical: "https://www.revealrank.com/tools/domain-rating-checker/" },
  openGraph: {
    title: "Free Domain Rating Checker | Reveal Rank",
    description: "Instant DR lookup powered by Ahrefs + AI crawler access check. See your authority and whether AI systems can reach your site — free, no sign-up.",
    url: "https://www.revealrank.com/tools/domain-rating-checker/",
    siteName: "Reveal Rank",
    type: "website",
  },
};

const faqs = [
  {
    q: "What is Domain Rating (DR)?",
    a: "Domain Rating is a metric created by Ahrefs that measures the strength of a website's backlink profile on a logarithmic scale from 0 to 100. A higher DR indicates that more high-quality websites link to the domain. It is a proxy for link authority, not a measure of content quality, organic traffic, or Google rankings.",
  },
  {
    q: "What is the difference between DR, DA, and Authority Score?",
    a: "DR (Domain Rating) is Ahrefs' proprietary metric. DA (Domain Authority) is Moz's equivalent. Authority Score is Semrush's version. All three measure roughly the same thing — backlink profile strength — but they use different algorithms and data sources, so scores across tools are not directly comparable. DR is generally considered the most transparent, since Ahrefs publishes their methodology.",
  },
  {
    q: "What counts as a good DR?",
    a: "It depends heavily on your niche and site age. A brand-new site will have DR 0–10. After 1–2 years of active link building, DR 20–40 is achievable. Sites with strong editorial coverage or media mentions often reach DR 50–70 within 3–5 years. DR 70+ is typically reserved for major publishers, established brands, and high-authority portals. Compare your DR to direct competitors rather than absolute benchmarks.",
  },
  {
    q: "Can I have a high DR and still rank poorly?",
    a: "Yes. DR measures backlink profile strength only. A site can accumulate links through press coverage, directory listings, or even link schemes and show a high DR while having thin content, poor technical SEO, or low topical authority for specific queries. DR is a useful signal but should never be used as a standalone ranking predictor.",
  },
  {
    q: "Why is DR different from my DA?",
    a: "Ahrefs and Moz crawl different portions of the web, refresh their indexes on different schedules, and weight links differently. A difference of 10–20 points between your DR and DA is normal and expected. Neither is 'correct' — they are both estimates of the same underlying concept using different methodologies.",
  },
  {
    q: "Does DR affect AI citations?",
    a: "Indirectly. High-DR domains tend to be more widely cited across the web, which means the training data AI models learn from contains more mentions of those brands. AI retrieval systems like Perplexity and ChatGPT Search also prefer authoritative sources when deciding which pages to cite in answers. So while DR is not a direct input to any AI ranking algorithm, the factors that build DR — high-quality editorial links — also tend to improve AI citation rates.",
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
  name: "Domain Rating Checker",
  applicationCategory: "SEOApplication",
  operatingSystem: "Web",
  url: "https://www.revealrank.com/tools/domain-rating-checker/",
  description: "Free DR checker powered by Ahrefs, with AI crawler access scoring and combined authority verdict.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Reveal Rank" },
};

export default function DomainRatingCheckerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Tools", href: "/tools" },
          { name: "Domain Rating Checker", href: "/tools/domain-rating-checker" },
        ]}
      />

      {/* ── Hero + Tool ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gray-950 pt-16 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#4361ee15_0%,_transparent_55%)] pointer-events-none" />
        <div className="max-w-[900px] mx-auto px-4 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 bg-[#4361ee]/10 border border-[#4361ee]/30 text-[#7b93ff] text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
            <span>📊</span> Free Tool — Powered by Ahrefs
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
            Domain Rating Checker
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-2 max-w-2xl">
            Enter a domain. Get its DR score from Ahrefs, its AI crawler access status, and a combined verdict — the insight no other DR checker gives you.
          </p>
          <p className="text-gray-500 text-sm mb-10">
            Free, no sign-up. Bulk mode for up to 10 domains.{" "}
            <a href="https://ahrefs.com/legal/domain-rating-license" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-400 underline">
              DR data by Ahrefs
            </a>
          </p>
          <DRCheckerClient />
        </div>
      </section>

      {/* ── What DR actually measures ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">What the number means</p>
              <h2 className="text-3xl font-black text-gray-900 mb-5 leading-tight">
                What Domain Rating measures — and what it does not
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                DR is a measure of <strong>backlink profile strength</strong>. It reflects how many websites link to a domain, and how authoritative those linking sites are. A DR of 60 means the domain has attracted a strong portfolio of inbound links from credible sources.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                DR does <strong>not</strong> measure:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Organic traffic or Google rankings",
                  "Content quality or topical authority",
                  "Technical SEO health",
                  "Conversion rate or commercial performance",
                  "AI citation rate or AI visibility",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-red-400 font-bold flex-shrink-0">✗</span> {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-sm leading-relaxed">
                A site can have DR 70 and rank for nothing. A site can have DR 20 and dominate a niche. Use DR as one signal among several, not as a proxy for overall site quality.
              </p>
            </div>

            {/* DR band table */}
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">DR Bands</p>
              <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left px-5 py-3 text-gray-500 font-semibold text-xs uppercase">Range</th>
                      <th className="text-left px-5 py-3 text-gray-500 font-semibold text-xs uppercase">Band</th>
                      <th className="text-left px-5 py-3 text-gray-500 font-semibold text-xs uppercase">Typical profile</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { range: "0–10",  band: "New",      color: "text-gray-500",   bg: "bg-gray-100", desc: "Brand new domain, few or no links" },
                      { range: "11–30", band: "Low",      color: "text-orange-600", bg: "bg-orange-50", desc: "Early-stage site, some directory and partner links" },
                      { range: "31–50", band: "Moderate", color: "text-yellow-600", bg: "bg-yellow-50", desc: "Established SME, some editorial coverage" },
                      { range: "51–70", band: "Strong",   color: "text-blue-600",   bg: "bg-blue-50",   desc: "Well-linked brand, press mentions, industry authority" },
                      { range: "71–100",band: "Elite",    color: "text-purple-600", bg: "bg-purple-50", desc: "Major publishers, national brands, high-authority portals" },
                    ].map((row) => (
                      <tr key={row.range}>
                        <td className="px-5 py-3 font-mono text-gray-900 font-bold text-sm">{row.range}</td>
                        <td className="px-5 py-3">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded ${row.color} ${row.bg}`}>{row.band}</span>
                        </td>
                        <td className="px-5 py-3 text-gray-500 text-xs">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DR vs DA vs Authority Score ───────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Metric Comparison</p>
            <h2 className="text-3xl font-black text-gray-900 mb-4">DR vs DA vs Authority Score</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Three different companies, three different scores, the same underlying concept.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm max-w-4xl mx-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead className="bg-gray-900 border-b border-gray-800">
                <tr>
                  {["", "DR — Ahrefs", "DA — Moz", "Authority Score — Semrush"].map((h) => (
                    <th key={h} className={`text-left px-5 py-3 text-xs font-bold uppercase tracking-wide ${h === "" ? "text-gray-500" : "text-gray-200"}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 bg-gray-950">
                {[
                  { label: "Scale",       dr: "0–100 logarithmic", da: "0–100 logarithmic", as: "0–100" },
                  { label: "Data source", dr: "Ahrefs crawl (~8B pages/day)", da: "Moz crawl", as: "Semrush crawl" },
                  { label: "Free check",  dr: "Yes — free public endpoint since June 2026", da: "Limited via Moz bar", as: "Limited via bar" },
                  { label: "Best use",    dr: "Link prospecting, authority comparison", da: "Legacy SEO audits", as: "Semrush-native workflows" },
                  { label: "Limitation",  dr: "Does not reflect rankings or traffic", da: "Does not reflect rankings", as: "Does not reflect rankings" },
                ].map((row) => (
                  <tr key={row.label}>
                    <td className="px-5 py-3 text-gray-400 font-semibold text-xs uppercase tracking-wide">{row.label}</td>
                    <td className="px-5 py-3 text-gray-200 text-xs leading-relaxed">{row.dr}</td>
                    <td className="px-5 py-3 text-gray-400 text-xs leading-relaxed">{row.da}</td>
                    <td className="px-5 py-3 text-gray-400 text-xs leading-relaxed">{row.as}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-400 text-xs mt-5 max-w-2xl mx-auto">
            Scores across tools are <strong>not directly comparable</strong>. A DR of 50 ≠ a DA of 50. Compare sites within the same tool only.
          </p>
        </div>
      </section>

      {/* ── Why DR + AI visibility ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[860px] mx-auto px-4 lg:px-8">
          <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">The 2026 Angle</p>
          <h2 className="text-3xl font-black text-gray-900 mb-5">
            Why DR alone is a poor AI visibility filter
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Many agencies use DR as a shortcut for "will AI models cite this brand?" The correlation is real but weak. A high-DR site that blocks AI retrieval crawlers in its robots.txt will never appear in ChatGPT Search or Perplexity answers, regardless of how authoritative its backlink profile is.
          </p>
          <p className="text-gray-600 leading-relaxed mb-5">
            Conversely, a mid-DR site with clean robots.txt, well-structured content, strong entity signals, and editorial placements in AI-cited publications can achieve citation rates that outperform its DR peers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              {
                scenario: "High DR + blocked crawlers",
                outcome: "All that authority is invisible to AI search. The most avoidable problem.",
                color: "border-red-200 bg-red-50",
                tag: "bg-red-100 text-red-700",
              },
              {
                scenario: "Low DR + clean access",
                outcome: "AI can reach you. Build authority and citations will follow.",
                color: "border-yellow-200 bg-yellow-50",
                tag: "bg-yellow-100 text-yellow-700",
              },
              {
                scenario: "High DR + clean access",
                outcome: "The foundation is there. Now optimise for actual citation rates.",
                color: "border-green-200 bg-green-50",
                tag: "bg-green-100 text-green-700",
              },
              {
                scenario: "Low DR + blocked crawlers",
                outcome: "Two problems. Unblock first — it's free. Then build authority.",
                color: "border-orange-200 bg-orange-50",
                tag: "bg-orange-100 text-orange-700",
              },
            ].map((s) => (
              <div key={s.scenario} className={`border rounded-xl p-5 ${s.color}`}>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${s.tag}`}>{s.scenario}</span>
                <p className="text-gray-700 text-sm mt-3 leading-relaxed">{s.outcome}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            This is why this tool pairs DR with an AI crawler check. The combined verdict tells you which problem — if any — you are actually facing. Check your full crawler status with the{" "}
            <Link href="/tools/ai-crawler-checker/" className="text-[#4361ee] font-semibold hover:underline">AI Crawler Checker</Link>, or learn how to move your citation rate with the{" "}
            <Link href="/ai-visibility/" className="text-[#4361ee] font-semibold hover:underline">AI Visibility guide</Link>.
          </p>
        </div>
      </section>

      {/* ── How to increase DR ───────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-gray-900">How to increase Domain Rating — honestly</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              {
                icon: "✍️",
                title: "Earn editorial links",
                body: "Links from genuinely useful content — original research, reference guides, tools — earn links naturally over time. These carry the most DR weight because they come from pages with real traffic and trust.",
              },
              {
                icon: "📰",
                title: "Digital PR and media coverage",
                body: "A single placement in a DA/DR 70+ publication can move your score meaningfully. Pitch data-led stories, expert commentary, and product announcements to journalists in your vertical.",
              },
              {
                icon: "⚠️",
                title: "Why buying links inflates DR without results",
                body: "Purchased links from link farms boost DR because Ahrefs counts the quantity. But Google devalues these signals and AI models weight editorial authority, not raw link counts. DR inflation without organic trust is a vanity metric.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-black text-gray-900 text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services/link-building/"
              className="inline-flex items-center gap-2 bg-[#4361ee] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#3451de] transition-all text-sm"
            >
              See our Link Building service →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl font-black text-gray-900">Common questions about Domain Rating</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="text-gray-900 font-bold text-base mb-3">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related links ─────────────────────────────────────────────────── */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">Related Tools & Resources</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "AI Crawler Checker", href: "/tools/ai-crawler-checker/" },
              { label: "AI Visibility Hub",  href: "/ai-visibility/" },
              { label: "Link Building Service", href: "/services/link-building/" },
              { label: "AI Citation Programme", href: "/ai-citation-programme/" },
              { label: "Technical SEO Service", href: "/services/technical-seo/" },
            ].map((l) => (
              <Link key={l.href} href={l.href}
                className="bg-white border border-gray-200 text-gray-600 hover:text-[#4361ee] hover:border-[#4361ee]/30 text-sm font-medium px-4 py-2 rounded-xl transition-all">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
