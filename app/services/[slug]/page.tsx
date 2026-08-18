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
    title: `${service.title} in the USA – Reveal Rank`,
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
    provider: { "@type": "Organization", name: "Reveal Rank", url: "https://www.revealrank.com" },
    description: service.description,
    areaServed: { "@type": "Country", name: "United States" },
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
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border"
              style={{ backgroundColor: service.color + "15", borderColor: service.color + "30", color: service.color }}
            >
              <span className="text-xl">{service.icon}</span>
              {service.shortTitle}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">{service.tagline}</h1>
            <p className="text-gray-600 text-xl leading-relaxed mb-6">{service.description}</p>
            <p className="text-gray-500 leading-relaxed mb-10">
              At Reveal Rank, our {service.title.toLowerCase()} experts take a holistic, long-term view of your digital growth. We don't chase quick wins that disappear in the next algorithm update—we build genuine authority that compounds over time, delivering increasing returns on every dollar you invest in {service.shortTitle.toLowerCase()}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#4361ee] hover:bg-[#3451de] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-md shadow-blue-100"
              >
                Get Free {service.shortTitle} Audit
              </Link>
              <a
                href="mailto:outreach@revealrank.com"
                className="inline-flex items-center justify-center border border-gray-200 hover:border-[#4361ee] text-gray-700 font-semibold px-8 py-4 rounded-xl text-lg transition-all"
              >
                Talk to an Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Result Stats */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <p className="text-gray-400 text-sm text-center uppercase tracking-widest mb-8">Average Client Results</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {service.resultStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-black mb-2" style={{ color: service.color }}>{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">What's Included</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Everything in Our {service.shortTitle} Service
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our {service.title.toLowerCase()} service is a comprehensive, end-to-end solution. Every engagement begins with a deep audit, followed by a customised strategy, expert execution, and continuous optimisation to compound results over time.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Unlike one-size-fits-all packages, every element of our {service.shortTitle.toLowerCase()} service is configured to your specific industry, market competition, and growth objectives. Nothing is templated—everything is built for your business.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 border border-gray-100">
                    <div className="w-6 h-6 rounded-full bg-[#4361ee]/10 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M10 3L4.5 8.5 2 6" stroke="#4361ee" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Key Benefits</p>
              {service.benefits.map((benefit) => (
                <div key={benefit.title} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#4361ee]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M12 4L5.5 10.5 2 7" stroke="#4361ee" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-bold mb-2">{benefit.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our {service.shortTitle} Process</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              A proven, transparent process that delivers consistent results across industries and business sizes. No surprises. No black boxes. Just clear, accountable execution every step of the way.
            </p>
          </div>
          <div className="space-y-6 max-w-3xl mx-auto">
            {service.process.map((step, i) => (
              <div key={step.step} className="flex gap-6 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center font-black text-lg flex-shrink-0"
                  style={{ backgroundColor: service.color + "20", color: service.color }}
                >
                  {step.step}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-gray-900 font-bold text-lg">{step.title}</h3>
                    {i === 0 && <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">Free</span>}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why invest section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Why It Matters</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why {service.shortTitle} Is Critical for Your Business</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                In today's digital-first world, {service.title.toLowerCase()} is no longer optional—it's the foundation of sustainable business growth. Companies that invest in {service.shortTitle.toLowerCase()} consistently outperform competitors in visibility, lead volume, and long-term revenue. The businesses that delay are the ones left catching up while rivals capture market share.
              </p>
              <p>
                What makes Reveal Rank's approach to {service.title.toLowerCase()} different is our relentless focus on outcomes. We don't report on activities—we report on results. Every month, you'll receive a clear breakdown of rankings gained, traffic increases, leads generated, and the tangible ROI being delivered against your investment.
              </p>
              <p>
                Our {service.shortTitle.toLowerCase()} strategies are designed to evolve with your business. As your goals grow and your market shifts, we continuously refine targeting, expand reach, and identify new opportunities—ensuring you're always ahead, not just keeping pace.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { stat: "3–6 months", label: "Average time to measurable results" },
                { stat: "98%", label: "Client satisfaction rate" },
                { stat: "2+ years", label: "Average client retention" },
              ].map((item) => (
                <div key={item.label} className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-center">
                  <div className="text-2xl font-black text-[#4361ee] mb-1">{item.stat}</div>
                  <div className="text-gray-500 text-xs">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{service.shortTitle} FAQs</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Common questions about our {service.title.toLowerCase()} services—answered directly and honestly.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {service.faqs.map((faq) => (
              <div key={faq.question} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-gray-900 font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">Explore Related Services</h2>
          <p className="text-gray-500 text-center mb-8 text-sm">Many of our clients combine {service.shortTitle} with these services for maximum impact.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 5)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-gray-50 border border-gray-200 hover:border-[#4361ee] rounded-xl p-4 text-center transition-all hover:shadow-md"
                >
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <div className="text-gray-700 text-xs font-semibold group-hover:text-[#4361ee] transition-colors">{s.shortTitle}</div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to Grow with ${service.shortTitle}?`}
        subtitle={`Get a free ${service.shortTitle.toLowerCase()} audit and customised strategy from Reveal Rank's certified experts. No obligation, no fluff—just clear, actionable recommendations delivered within 48 hours.`}
        primaryCTA={`Get Free ${service.shortTitle} Audit`}
      />
    </>
  );
}
