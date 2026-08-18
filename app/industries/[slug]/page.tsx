import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { industries, getIndustry } from "@/data/industries";
import CTASection from "@/components/CTASection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: `${industry.name} Digital Marketing Agency India – Reveal Rank`,
    description: `${industry.description.slice(0, 155)}`,
    alternates: { canonical: `https://www.revealrank.com/industries/${industry.slug}` },
    openGraph: {
      title: `${industry.name} Digital Marketing | Reveal Rank`,
      description: industry.tagline,
      url: `https://www.revealrank.com/industries/${industry.slug}`,
    },
  };
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industry.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: industry.name, href: `/industries/${industry.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="py-20 bg-[#101010]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="inline-flex items-center gap-3 bg-[#4361ee]/10 border border-[#4361ee]/20 text-[#4361ee] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="text-2xl">{industry.icon}</span>
            {industry.name} Industry
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            {industry.tagline}
          </h1>
          <p className="text-[#aaa] text-xl leading-relaxed mb-10">{industry.description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#4361ee] hover:bg-[#3451de] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all"
            >
              Get Free {industry.name} Strategy
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#0d0d0d]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {industry.stats.map((stat) => (
              <div key={stat.label} className="bg-[#181A1B] border border-[#2a2a2a] rounded-xl p-5 text-center">
                <div className="text-2xl font-black text-[#4361ee] mb-1">{stat.value}</div>
                <div className="text-[#888] text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 bg-[#101010]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Common {industry.name} Digital Marketing Challenges
              </h2>
              <div className="space-y-4">
                {industry.challenges.map((challenge, i) => (
                  <div key={i} className="flex gap-4 bg-[#181A1B] border border-[#2a2a2a] rounded-xl p-5">
                    <div className="w-8 h-8 rounded-full bg-[#ff531a]/20 border border-[#ff531a]/30 flex items-center justify-center text-[#ff531a] font-bold flex-shrink-0 text-sm">
                      {i + 1}
                    </div>
                    <p className="text-[#aaa] leading-relaxed text-sm">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Our {industry.name} Solutions</h2>
              <div className="space-y-4">
                {industry.solutions.map((solution) => (
                  <div key={solution.title} className="bg-[#181A1B] border border-[#2a2a2a] rounded-xl p-6">
                    <h3 className="text-white font-bold mb-2">{solution.title}</h3>
                    <p className="text-[#888] text-sm leading-relaxed">{solution.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Digital Marketing Services for {industry.name}
            </h2>
            <p className="text-[#888] text-lg max-w-2xl mx-auto">
              A tailored combination of services designed to address the unique challenges and opportunities in the {industry.name.toLowerCase()} sector.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industry.services.map((service) => (
              <div
                key={service}
                className="bg-[#181A1B] border border-[#2a2a2a] rounded-xl px-6 py-4 text-white font-medium hover:border-[#4361ee] transition-all cursor-default"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#101010]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {industry.name} Digital Marketing FAQs
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {industry.faqs.map((faq) => (
              <div key={faq.question} className="bg-[#181A1B] border border-[#2a2a2a] rounded-2xl p-6">
                <h3 className="text-white font-bold mb-3">{faq.question}</h3>
                <p className="text-[#888] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to Grow Your ${industry.name} Business?`}
        subtitle={`Partner with Reveal Rank's ${industry.name.toLowerCase()} marketing specialists. Get a free strategy consultation tailored to your sector's unique challenges.`}
        primaryCTA={`Get Free ${industry.name} Strategy`}
      />
    </>
  );
}
