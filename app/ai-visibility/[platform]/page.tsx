import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { aiPlatforms, getAIPlatform } from "@/data/ai-platforms";
import CTASection from "@/components/CTASection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

interface Props {
  params: Promise<{ platform: string }>;
}

export function generateStaticParams() {
  return aiPlatforms.map((p) => ({ platform: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { platform } = await params;
  const p = getAIPlatform(platform);
  if (!p) return {};
  return {
    title: `${p.tagline} | Reveal Rank`,
    description: p.description,
    keywords: [`rank on ${p.name}`, `${p.name} SEO`, "GEO", "generative engine optimization", `${p.name} visibility`, "AI search optimization"],
    alternates: { canonical: `https://www.revealrank.com/ai-visibility/${p.slug}/` },
    openGraph: {
      title: `${p.tagline} | Reveal Rank`,
      description: p.description,
      url: `https://www.revealrank.com/ai-visibility/${p.slug}/`,
      siteName: "Reveal Rank",
      type: "website",
    },
  };
}

export default async function AIPlatformPage({ params }: Props) {
  const { platform } = await params;
  const p = getAIPlatform(platform);
  if (!p) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: p.tagline,
    provider: { "@type": "Organization", name: "Reveal Rank", url: "https://www.revealrank.com" },
    description: p.description,
    areaServed: { "@type": "Country", name: "United States" },
    url: `https://www.revealrank.com/ai-visibility/${p.slug}/`,
  };

  const otherPlatforms = aiPlatforms.filter((x) => x.slug !== p.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "AI Visibility", href: "/ai-visibility" },
          { name: p.name, href: `/ai-visibility/${p.slug}` },
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gray-950 pt-20 pb-24">
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at top left, ${p.color}18 0%, transparent 60%)` }} />
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 relative">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/ai-visibility/" className="text-gray-400 hover:text-white text-sm transition-colors">
              AI Visibility
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-gray-300 text-sm font-semibold">{p.name}</span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
              style={{ backgroundColor: p.color + "20" }}>
              {p.icon}
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: p.color }}>
                {p.company} · {p.users}
              </p>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">
                GEO Optimization
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6 max-w-3xl">
            {p.tagline}
          </h1>
          <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">{p.description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact/"
              className="inline-flex items-center justify-center text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg"
              style={{ backgroundColor: p.color }}>
              Get Free {p.name} Visibility Audit
            </Link>
            <Link href="/ai-visibility/"
              className="inline-flex items-center justify-center border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all">
              ← All AI Platforms
            </Link>
          </div>
        </div>
      </section>

      {/* ── Ranking Signals ──────────────────────────────────────────── */}
      <section className="py-16 border-b border-gray-100 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: p.color }}>
            How {p.name} Ranks Brands
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {p.ranking_signals.map((signal) => (
              <div key={signal} className="flex items-start gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: p.color + "20" }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M9 2.5L4 7.5 1.5 5" stroke={p.color} strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm font-medium">{signal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Long-Form Content ─────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-[860px] mx-auto px-4 lg:px-8">
          <style>{`
            .platform-body h2 { font-size:1.5rem;font-weight:800;color:#111827;margin:2.5rem 0 1rem;padding-top:0.5rem;border-top:2px solid #f3f4f6;line-height:1.3; }
            .platform-body h3 { font-size:1.2rem;font-weight:700;color:#1f2937;margin:2rem 0 0.75rem; }
            .platform-body p { font-size:1.0625rem;line-height:1.8;color:#374151;margin-bottom:1.25rem; }
            .platform-body ul,.platform-body ol { padding-left:1.5rem;margin-bottom:1.25rem; }
            .platform-body li { font-size:1rem;line-height:1.75;color:#374151;margin-bottom:0.4rem; }
            .platform-body ul li { list-style-type:disc; }
            .platform-body ol li { list-style-type:decimal; }
            .platform-body a { color:#4361ee;text-decoration:none;font-weight:500;border-bottom:1px solid #4361ee40; }
            .platform-body a:hover { color:#3451de; }
            .platform-body strong { font-weight:700;color:#111827; }
            .platform-body em { font-style:italic; }
            .platform-body table { width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:0.9rem; }
            .platform-body th { background:#4361ee;color:white;padding:0.75rem 1rem;text-align:left;font-weight:700; }
            .platform-body td { padding:0.65rem 1rem;border-bottom:1px solid #f3f4f6;color:#374151; }
            .platform-body tr:hover td { background:#f8faff; }
          `}</style>
          <div className="platform-body" dangerouslySetInnerHTML={{ __html: p.content }} />
        </div>
      </section>

      {/* ── Tactics ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: p.color }}>What We Do</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Our {p.name} Optimization Tactics
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Every tactic is tested, measurable, and designed to compound — not a one-time fix.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {p.tactics.map((tactic, i) => (
              <div key={tactic.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-sm mb-4"
                  style={{ backgroundColor: p.color }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-3">{tactic.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tactic.body}</p>
              </div>
            ))}
          </div>

          {/* Timeline callout */}
          <div className="mt-10 flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-6 max-w-2xl mx-auto shadow-sm">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
              style={{ backgroundColor: p.color + "15" }}>
              ⏱️
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 mb-1">Expected Timeline</p>
              <p className="text-gray-600 text-sm leading-relaxed">{p.timeline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: p.color }}>FAQ</p>
            <h2 className="text-3xl font-black text-gray-900">Questions About {p.name} Visibility</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {p.faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="text-gray-900 font-bold text-lg mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Platforms ───────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <p className="text-center text-gray-500 text-sm font-semibold uppercase tracking-widest mb-8">
            Also Optimize For
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {otherPlatforms.map((op) => (
              <Link key={op.slug} href={`/ai-visibility/${op.slug}/`}
                className="flex flex-col items-center gap-2 bg-white rounded-2xl border border-gray-100 p-4 hover:border-[#4361ee]/40 hover:shadow-sm transition-all group text-center">
                <span className="text-2xl">{op.icon}</span>
                <span className="text-xs font-bold text-gray-700 group-hover:text-[#4361ee] transition-colors leading-tight">
                  {op.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/ai-visibility/" className="text-sm font-semibold text-[#4361ee] hover:underline">
              View Full AI Visibility Hub →
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to Rank on ${p.name}?`}
        subtitle={`We'll audit your brand's current ${p.name} visibility and show you exactly what it takes to become the recommended answer.`}
        primaryCTA={`Get Free ${p.name} Audit`}
        primaryHref="/contact/"
      />
    </>
  );
}
