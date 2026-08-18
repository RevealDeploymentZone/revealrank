import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getService } from "@/data/services";
import CTASection from "@/components/CTASection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} in India – Reveal Rank`,
    description: `${service.description.slice(0, 155)}`,
    keywords: [service.primaryKeyword, ...service.secondaryKeywords],
    alternates: { canonical: `https://www.revealrank.com/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | Reveal Rank`,
      description: service.tagline,
      url: `https://www.revealrank.com/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "Organization",
      name: "Reveal Rank",
      url: "https://www.revealrank.com",
    },
    description: service.description,
    areaServed: { "@type": "Country", name: "India" },
    url: `https://www.revealrank.com/services/${service.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.title, href: `/services/${service.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="py-20 bg-[#101010]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border"
              style={{ backgroundColor: service.color + "15", borderColor: service.color + "30", color: service.color }}
            >
              <span className="text-xl">{service.icon}</span>
              {service.shortTitle}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              {service.tagline}
            </h1>
            <p className="text-[#aaa] text-xl leading-relaxed mb-10">{service.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#4361ee] hover:bg-[#3451de] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all"
              >
                Get Free {service.shortTitle} Audit
              </Link>
              <a
                href="tel:+91XXXXXXXXXX"
                className="inline-flex items-center justify-center border border-[#2a2a2a] hover:border-[#4361ee] text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all"
              >
                Talk to an Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Result Stats */}
      <section className="py-16 bg-[#0d0d0d]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {service.resultStats.map((stat) => (
              <div key={stat.label} className="bg-[#181A1B] border border-[#2a2a2a] rounded-xl p-6 text-center">
                <div className="text-3xl font-black mb-2" style={{ color: service.color }}>{stat.value}</div>
                <div className="text-[#888] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20 bg-[#101010]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What&apos;s Included in Our {service.shortTitle} Service
              </h2>
              <p className="text-[#aaa] leading-relaxed mb-8">
                Our {service.title.toLowerCase()} service is a comprehensive, end-to-end solution. Every engagement begins with a deep audit, followed by a customised strategy, expert execution, and continuous optimisation to compound results over time.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#4361ee]/20 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="#4361ee">
                        <path d="M10 3L4.5 8.5 2 6" stroke="#4361ee" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className="text-[#ccc] text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-6">Key Benefits</h2>
              {service.benefits.map((benefit) => (
                <div key={benefit.title} className="bg-[#181A1B] border border-[#2a2a2a] rounded-xl p-6">
                  <h3 className="text-white font-bold mb-2">{benefit.title}</h3>
                  <p className="text-[#888] text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our {service.shortTitle} Process</h2>
            <p className="text-[#888] text-lg max-w-2xl mx-auto">
              A proven, transparent process that delivers consistent results across industries and business sizes.
            </p>
          </div>
          <div className="space-y-6 max-w-3xl mx-auto">
            {service.process.map((step, i) => (
              <div key={step.step} className="flex gap-6 bg-[#181A1B] border border-[#2a2a2a] rounded-xl p-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center font-black text-lg flex-shrink-0"
                  style={{ backgroundColor: service.color + "20", color: service.color }}
                >
                  {step.step}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-[#888] text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#101010]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {service.shortTitle} FAQs
            </h2>
            <p className="text-[#888] text-lg max-w-2xl mx-auto">
              Common questions about our {service.title.toLowerCase()} services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {service.faqs.map((faq) => (
              <div key={faq.question} className="bg-[#181A1B] border border-[#2a2a2a] rounded-2xl p-6">
                <h3 className="text-white font-bold mb-3">{faq.question}</h3>
                <p className="text-[#888] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-[#0d0d0d]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Explore Related Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 5)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-[#181A1B] border border-[#2a2a2a] hover:border-[#4361ee] rounded-xl p-4 text-center transition-all"
                >
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <div className="text-[#aaa] text-xs font-medium group-hover:text-white transition-colors">{s.shortTitle}</div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to Grow with ${service.shortTitle}?`}
        subtitle={`Get a free ${service.shortTitle.toLowerCase()} audit and customised strategy from Reveal Rank's certified experts. No obligation, no fluff—just clear, actionable recommendations.`}
        primaryCTA={`Get Free ${service.shortTitle} Audit`}
      />
    </>
  );
}
