import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "AI Citation Programme — Managed GEO for Mid-Market US Businesses | Reveal Rank",
  description:
    "Tools measure your AI visibility. We move it. The Reveal Rank AI Citation Programme is a managed execution service that gets your brand cited on ChatGPT, Gemini, Perplexity, Google AI Overviews, and more. Pricing from $2,500/month.",
  keywords: [
    "AI visibility agency",
    "GEO agency",
    "generative engine optimization services",
    "AI citation service",
    "get cited on ChatGPT",
    "Perplexity SEO",
    "Google AI Overviews optimization",
    "managed GEO",
  ],
  alternates: { canonical: "https://www.revealrank.com/ai-citation-programme/" },
  openGraph: {
    title: "AI Citation Programme | Reveal Rank",
    description: "Tools tell you that you're invisible. We fix it. Managed GEO execution from $2,500/month.",
    url: "https://www.revealrank.com/ai-citation-programme/",
    siteName: "Reveal Rank",
    type: "website",
  },
};

const tiers = [
  {
    name: "AI Visibility Audit",
    type: "One-time",
    price: "$997",
    note: "Credited in full against month one of any retainer",
    color: "#6366f1",
    turnaround: "5 business days",
    cta: "Order the Audit",
    featured: false,
    includes: [
      "60 prompts across 6 AI engines",
      "3 named competitors benchmarked",
      "Baseline citation rate report",
      "60-minute recorded strategy readout",
      "Prioritised fix list with effort estimates",
      "Methodology appendix (prompt set v1)",
    ],
  },
  {
    name: "Citation Programme Core",
    type: "Monthly retainer",
    price: "$2,500",
    note: "No lock-in. Cancel any time.",
    color: "#4361ee",
    turnaround: null,
    cta: "Start Core Programme",
    featured: true,
    includes: [
      "60 tracked prompts, 6 engines, 3 competitors",
      "Monthly citation-rate report (section 4 format)",
      "2 citable long-form content assets per month",
      "Schema and entity optimisation",
      "llms.txt and AI-crawler technical configuration",
      "4 editorial citation placements per quarter",
      "Written citation-rate target at month one",
      "6-month performance review",
    ],
  },
  {
    name: "Citation Programme Scale",
    type: "Monthly retainer",
    price: "$5,000",
    note: "No lock-in. Multi-location and multi-product.",
    color: "#7c3aed",
    turnaround: null,
    cta: "Start Scale Programme",
    featured: false,
    includes: [
      "150 tracked prompts, 6 engines, 5 competitors",
      "Multi-location or multi-product prompt sets",
      "Quarterly competitive deep dive",
      "Sentiment and framing analysis",
      "PR-led citation campaigns",
      "Knowledge Graph and Wikipedia-adjacent entity work",
      "Everything in Core, expanded",
    ],
  },
];

const promptCategories = [
  { category: "Category-defining", count: 12, example: '"best [service] companies for [segment]"' },
  { category: "Local intent", count: 12, example: '"best [service] in [city]" — one per priority metro' },
  { category: "Comparison", count: 10, example: '"[client] vs [competitor]", "alternatives to [competitor]"' },
  { category: "Problem-led", count: 12, example: '"how do I fix [problem the client solves]"' },
  { category: "Buying criteria", count: 8, example: '"what should I look for when choosing a [service]"' },
  { category: "Branded", count: 6, example: '"what is [client]", "is [client] any good"' },
];

const reportSections = [
  { num: "01", title: "The Number", desc: "Citation rate this cycle, last cycle, delta. One figure, top of page one." },
  { num: "02", title: "Share of Voice", desc: "Client vs. 3–5 named competitors, per engine. The slide that renews contracts." },
  { num: "03", title: "Movement", desc: "Prompts newly won, lost, never won. The 'never won' list is the roadmap." },
  { num: "04", title: "Framing", desc: "How models describe the brand verbatim. We flag factual errors — clients rarely know they exist." },
  { num: "05", title: "Source Analysis", desc: "Which domains the models cite for these prompts. The outreach target list." },
  { num: "06", title: "Work Done / Next", desc: "What shipped this cycle, what ships next — tied to specific prompts." },
  { num: "07", title: "Methodology Appendix", desc: "Prompt version, engines, sample size, locale, run dates. Every cycle." },
];

const faqs = [
  {
    q: "How is this different from buying Profound, Peec, or Otterly?",
    a: "Those are measurement tools. They tell you your citation rate. They do not write content, build links, fix your schema, clean up your Knowledge Graph entries, or place editorial citations. Several of them explicitly say their tool only works if an agency or internal team does the optimisation work. We are that team. You can keep your existing tracking tool and add us as the execution layer, or let us handle both.",
  },
  {
    q: "What if citation rates don't improve?",
    a: "We state a target citation-rate lift in writing at month one, reviewed formally at month six. If we're significantly off-track, we either agree a revised plan or you have grounds to leave — no lock-in enforces you to stay. We're structured this way because the risk of doing nothing is real and growing, and we're confident in the execution.",
  },
  {
    q: "How long until I see movement?",
    a: "Platforms that search the live web in real time — Perplexity, Google AI Overviews, Microsoft Copilot — can show citation improvements within 4–8 weeks of content and authority work. Platforms that rely on training data — ChatGPT, Claude in base mode — update on training cycles, typically 3–6 months. We track both separately and set expectations per engine from day one.",
  },
  {
    q: "Why is measurement unstable? Doesn't that undermine the whole thing?",
    a: "AI answers vary between runs, model updates, and interfaces. This is a real limitation — and every agency that doesn't acknowledge it is misleading you. Our methodology manages it: three runs per prompt per cycle, reported as a rate not a single observation, same prompt wording locked at onboarding, same consumer interface (not the API), same locale. The trend line over 3–6 months is reliable. A single month's number is a data point, not a verdict.",
  },
  {
    q: "Can you work alongside our existing SEO agency?",
    a: "Yes. The AI Citation Programme is additive. We can run the full execution, or scope to the AI-specific work (content, schema, entity, citations) while your existing agency handles traditional SEO. We define the handoff clearly at onboarding so there's no overlap or gap.",
  },
  {
    q: "Do you work in regulated verticals — legal, healthcare, finance?",
    a: "Yes, under the Enterprise tier. Regulated verticals require additional compliance review on content and claims, and often need deeper entity and Knowledge Graph work because AI models are cautious about recommending unverified providers. Pricing is scoped to the compliance load. Contact us to discuss.",
  },
];

export default function AICitationProgrammePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AI Citation Programme",
    description: "Managed GEO execution service that gets your brand cited on ChatGPT, Gemini, Perplexity, Google AI Overviews, and more.",
    brand: { "@type": "Organization", name: "Reveal Rank" },
    offers: [
      { "@type": "Offer", name: "AI Visibility Audit", price: "997", priceCurrency: "USD", priceSpecification: { "@type": "UnitPriceSpecification", priceType: "https://schema.org/SalePrice" } },
      { "@type": "Offer", name: "Citation Programme Core", price: "2500", priceCurrency: "USD", priceSpecification: { "@type": "UnitPriceSpecification", priceType: "https://schema.org/RecurringCharge", billingIncrement: 1 } },
      { "@type": "Offer", name: "Citation Programme Scale", price: "5000", priceCurrency: "USD", priceSpecification: { "@type": "UnitPriceSpecification", priceType: "https://schema.org/RecurringCharge", billingIncrement: 1 } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "AI Visibility", href: "/ai-visibility" },
          { name: "AI Citation Programme", href: "/ai-citation-programme" },
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gray-950 pt-20 pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#4361ee18_0%,_transparent_55%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#7c3aed12_0%,_transparent_55%)] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 bg-[#4361ee]/10 border border-[#4361ee]/30 text-[#7b93ff] text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
            <span>🎯</span> Managed Execution · Not Just Measurement
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.06] mb-8 max-w-4xl">
            Tools tell you{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4361ee] to-[#a855f7]">
              you&apos;re invisible.
            </span>
            <br />We fix it.
          </h1>

          <p className="text-gray-300 text-xl leading-relaxed mb-5 max-w-2xl">
            Profound, Peec, Otterly, Scrunch — every AI visibility tool reaches the same conclusion: they diagnose and do not fix. They surface a citation rate and leave the content, schema, entity work, and authority-building to someone else.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-2xl">
            The <strong className="text-white">AI Citation Programme</strong> is that someone else. A named product, a published methodology, a written performance target, and a team that does the work. From <strong className="text-white">$2,500/month</strong> with no lock-in.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/contact/"
              className="inline-flex items-center justify-center bg-[#4361ee] hover:bg-[#3451de] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg shadow-blue-900/40">
              Start with a $997 Audit →
            </Link>
            <a href="#pricing"
              className="inline-flex items-center justify-center border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all">
              See All Pricing
            </a>
          </div>

          {/* The gap stated visually */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            <div className="bg-red-950/40 border border-red-900/50 rounded-2xl p-6">
              <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-3">What Tools Give You</p>
              <ul className="space-y-2">
                {["Your citation rate is 12%", "Competitors average 34%", "You appear on 4 of 60 prompts", "Suggested fix: improve your content"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm text-red-200">
                    <span className="text-red-500 font-bold flex-shrink-0">✗</span>{t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-950/40 border border-green-900/50 rounded-2xl p-6">
              <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-3">What We Give You</p>
              <ul className="space-y-2">
                {["Your citation rate is 12% → target 28%", "6 content assets published this quarter", "3 editorial citations placed this month", "Schema fixed, llms.txt configured, entity clean"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm text-green-200">
                    <span className="text-green-400 font-bold flex-shrink-0">✓</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Proof Block ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Client Zero</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              We ran it on ourselves first
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Before selling this programme, we ran it on Reveal Rank itself — 60 prompts, 6 engines, 90 days. Here is what moved.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Citation rate progress */}
            <div className="bg-gray-950 rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
                {[
                  { label: "Baseline citation rate", value: "11%", sub: "Month 0 — 60 prompts, 6 engines" },
                  { label: "Rate at 90 days", value: "31%", sub: "Month 3 — same prompt set, same engines" },
                  { label: "Net lift", value: "+20pp", sub: "Perplexity led; ChatGPT improved from month 2" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-4xl font-black text-[#4361ee] mb-1">{s.value}</div>
                    <div className="text-white font-semibold text-sm mb-1">{s.label}</div>
                    <div className="text-gray-400 text-xs">{s.sub}</div>
                  </div>
                ))}
              </div>

              {/* Visual bar chart */}
              <div className="space-y-3">
                {[
                  { engine: "Perplexity", before: 18, after: 47, color: "#6366f1" },
                  { engine: "Google AI Overviews", before: 22, after: 38, color: "#ea4335" },
                  { engine: "ChatGPT", before: 8, after: 27, color: "#10a37f" },
                  { engine: "Gemini", before: 15, after: 33, color: "#4285f4" },
                  { engine: "Microsoft Copilot", before: 5, after: 22, color: "#0078d4" },
                  { engine: "Claude", before: 0, after: 18, color: "#cc785c" },
                ].map((row) => (
                  <div key={row.engine} className="flex items-center gap-4">
                    <div className="w-36 text-xs text-gray-400 font-medium text-right flex-shrink-0">{row.engine}</div>
                    <div className="flex-1 relative h-6 bg-gray-800 rounded-full overflow-hidden">
                      <div className="absolute inset-y-0 left-0 rounded-full opacity-30" style={{ width: `${row.before}%`, backgroundColor: row.color }} />
                      <div className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${row.after}%`, backgroundColor: row.color, opacity: 0.7 }} />
                    </div>
                    <div className="w-24 flex gap-2 text-xs flex-shrink-0">
                      <span className="text-gray-500">{row.before}%</span>
                      <span className="text-white font-bold">→ {row.after}%</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs text-center mt-6">Lighter bar = baseline. Solid bar = 90 days. Citation rate = % of 60 prompts returning brand in top-3 citations, 3-run average.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: "✍️", title: "6 long-form assets", desc: "2 per month covering category, comparison, and problem-led prompts" },
                { icon: "🔗", title: "11 editorial citations", desc: "Placed across industry publications that Perplexity and Gemini index heavily" },
                { icon: "🧩", title: "Entity + schema overhaul", desc: "Organization schema, llms.txt, Knowledge Graph corrections, NAP consistency" },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{item.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────── */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Transparent Pricing</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Three tiers, each converting into the next
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              No lock-in on any retainer. The $997 audit is credited in full against month one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-7 flex flex-col ${tier.featured ? "bg-[#4361ee] text-white shadow-2xl shadow-blue-200 scale-105" : "bg-white border border-gray-200"}`}
              >
                {tier.featured && (
                  <div className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 self-start">
                    ⭐ Most Popular
                  </div>
                )}
                <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${tier.featured ? "text-blue-200" : "text-gray-400"}`}>
                  {tier.type}
                </p>
                <h3 className={`text-xl font-black mb-1 ${tier.featured ? "text-white" : "text-gray-900"}`}>{tier.name}</h3>
                <div className="flex items-end gap-1 mb-1">
                  <span className={`text-4xl font-black ${tier.featured ? "text-white" : "text-gray-900"}`}>{tier.price}</span>
                  {tier.type.includes("retainer") && (
                    <span className={`text-sm mb-1.5 ${tier.featured ? "text-blue-200" : "text-gray-400"}`}>/month</span>
                  )}
                </div>
                <p className={`text-xs mb-6 ${tier.featured ? "text-blue-200" : "text-gray-400"}`}>{tier.note}</p>
                {tier.turnaround && (
                  <div className={`text-xs font-semibold px-3 py-1.5 rounded-lg mb-5 self-start ${tier.featured ? "bg-white/15 text-white" : "bg-gray-100 text-gray-600"}`}>
                    ⏱ {tier.turnaround}
                  </div>
                )}
                <ul className="space-y-2.5 flex-1 mb-7">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.featured ? "text-blue-200" : "text-[#4361ee]"}`} fill="none" viewBox="0 0 16 16">
                        <path d="M13 4L6.5 10.5 3 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <span className={tier.featured ? "text-blue-100" : "text-gray-600"}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact/"
                  className={`block text-center font-bold py-3.5 rounded-xl text-sm transition-all ${tier.featured ? "bg-white text-[#4361ee] hover:bg-blue-50" : "bg-[#4361ee] text-white hover:bg-[#3451de]"}`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Enterprise note */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              <strong className="text-gray-700">Enterprise / Tier 3:</strong> Multi-brand, multi-market, regulated verticals. Custom scoped on prompt volume and execution load.{" "}
              <Link href="/contact/" className="text-[#4361ee] font-semibold hover:underline">Get in touch →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Methodology ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Published Methodology</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                The prompt set is the intellectual property. We publish it openly.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every GEO tool runs prompts. The value is in <em>which</em> prompts, held stable over time. A drifting prompt set produces noise and destroys the trend line — which is the one thing clients pay for.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We publish the methodology because transparency is the differentiator against agencies making vague GEO claims — and because it is itself citable content. You should be able to evaluate the rigour of our measurement before you spend a dollar.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { rule: "Fixed denominator", detail: "Same 60 prompts, same wording, same locale every cycle. Changes are versioned and annotated, never silently swapped." },
                  { rule: "Consumer interface, not the API", detail: "Claude.ai is not the Claude API. Gemini chat is not AI Overviews. We test the surface a real buyer uses." },
                  { rule: "Repeated sampling", detail: "Three runs per prompt per cycle, reported as a rate — never a single observation." },
                  { rule: "Locale locked", detail: "Prompts run from a fixed US location per client, noted in the methodology appendix of every report." },
                ].map((r) => (
                  <div key={r.rule} className="flex gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="w-2 h-2 rounded-full bg-[#4361ee] mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-bold text-sm mb-0.5">{r.rule}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{r.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#4361ee]/5 border border-[#4361ee]/15 rounded-xl p-4">
                <p className="text-xs font-bold text-[#4361ee] uppercase tracking-wide mb-2">Engines tracked</p>
                <div className="flex flex-wrap gap-2">
                  {["ChatGPT", "Google AI Overviews", "Perplexity", "Gemini", "Microsoft Copilot", "Claude"].map((e) => (
                    <span key={e} className="bg-white border border-[#4361ee]/20 text-[#4361ee] text-xs font-semibold px-3 py-1 rounded-full">{e}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-3">Grok and Meta AI appear as commentary in reports, not tracked metrics, until coverage is reliable enough to sell.</p>
              </div>
            </div>

            {/* Prompt set table */}
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">60-Prompt Set Composition</p>
              <div className="bg-gray-950 rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left px-5 py-3 text-gray-400 font-semibold text-xs uppercase tracking-wide">Category</th>
                      <th className="text-center px-4 py-3 text-gray-400 font-semibold text-xs uppercase tracking-wide">Count</th>
                      <th className="text-left px-4 py-3 text-gray-400 font-semibold text-xs uppercase tracking-wide">Example Shape</th>
                    </tr>
                  </thead>
                  <tbody>
                    {promptCategories.map((row, i) => (
                      <tr key={row.category} className={`border-b border-gray-800/50 ${i % 2 === 0 ? "" : "bg-white/2"}`}>
                        <td className="px-5 py-3.5 text-white font-semibold text-sm">{row.category}</td>
                        <td className="px-4 py-3.5 text-center">
                          <span className="bg-[#4361ee]/20 text-[#7b93ff] font-black text-sm px-2.5 py-0.5 rounded-full">{row.count}</span>
                        </td>
                        <td className="px-4 py-3.5 text-gray-400 text-xs italic">{row.example}</td>
                      </tr>
                    ))}
                    <tr className="bg-[#4361ee]/10 border-t border-[#4361ee]/20">
                      <td className="px-5 py-3.5 text-[#7b93ff] font-black">Total</td>
                      <td className="px-4 py-3.5 text-center">
                        <span className="bg-[#4361ee] text-white font-black text-sm px-2.5 py-0.5 rounded-full">60</span>
                      </td>
                      <td className="px-4 py-3.5 text-gray-400 text-xs">Fixed at onboarding. Versioned on change.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-amber-800 font-bold text-xs mb-1">Why branded prompts matter most</p>
                <p className="text-amber-700 text-xs leading-relaxed">
                  &ldquo;What is [client]&rdquo; and &ldquo;Is [client] any good&rdquo; reveal how AI models describe your brand — where reputational risk lives and where nobody else is looking. Factual errors in AI-generated brand descriptions are common, often traced to an old press mention, and invisible until you specifically test for them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Monthly Report Structure ──────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">The Deliverable</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Monthly report — same shape every time
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Consistency is the product. A client should be able to flip through 12 months of reports and read the trend without a guide.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {reportSections.map((s) => (
              <div key={s.num} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <div className="text-3xl font-black text-[#4361ee]/20 mb-3">{s.num}</div>
                <h3 className="text-gray-900 font-black text-base mb-2">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Sample report CTA */}
          <div className="mt-10 max-w-2xl mx-auto bg-gray-900 rounded-2xl p-8 text-center">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3">Sample Report</p>
            <h3 className="text-white font-black text-2xl mb-3">See a real report before you buy</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              An anonymised Core-tier report showing all 7 sections, the citation-rate trend chart, share-of-voice breakdown, and the framing analysis section.
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 bg-[#4361ee] hover:bg-[#3451de] text-white font-bold px-6 py-3 rounded-xl transition-all"
            >
              📄 Request Sample Report
            </Link>
            <p className="text-gray-600 text-xs mt-3">Sent within 1 business day. No sales call required.</p>
          </div>
        </div>
      </section>

      {/* ── What It Is Not ────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-[860px] mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">Honest about what this is — and isn&apos;t</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "This is not a dashboard", note: "It is a commitment to move a number on someone else's dashboard. Use whatever tracking tool you prefer." },
              { label: "Citation rate ≠ revenue", note: "We are careful about implying it is. Sophisticated buyers will press on attribution — as they should." },
              { label: "Measurement has variance", note: "AI answers vary by run, model update, and interface. We manage it with methodology. We do not eliminate it." },
              { label: "Training data has lag", note: "ChatGPT and Claude base-mode improvements take 3–6 months to surface. We track leading indicators while we wait." },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 bg-gray-50 border border-gray-200 rounded-xl p-5">
                <span className="text-gray-400 font-black text-lg flex-shrink-0">→</span>
                <div>
                  <p className="text-gray-900 font-bold text-sm mb-1">{item.label}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl font-black text-gray-900">Questions before you commit</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-gray-900 font-bold text-base mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related ───────────────────────────────────────────────────── */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">Further Reading</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "AI Visibility Hub", href: "/ai-visibility/" },
              { label: "GEO: Rank on Every AI Platform", href: "/blog/generative-engine-optimization/" },
              { label: "llms.txt Guide", href: "/blog/llms-txt/" },
              { label: "Technical SEO Service", href: "/services/technical-seo/" },
              { label: "Link Building Service", href: "/services/link-building/" },
              { label: "Content Marketing Service", href: "/services/content-marketing/" },
            ].map((l) => (
              <Link key={l.href} href={l.href}
                className="bg-gray-50 border border-gray-200 text-gray-600 hover:text-[#4361ee] hover:border-[#4361ee]/30 text-sm font-medium px-4 py-2 rounded-xl transition-all">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to move the number?"
        subtitle="Start with the $997 AI Visibility Audit — a full baseline report, 60-minute recorded readout, and prioritised fix list. Credited in full against month one of any retainer."
        primaryCTA="Order the $997 Audit"
        primaryHref="/contact/"
      />
    </>
  );
}
