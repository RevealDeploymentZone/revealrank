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
    title: `${industry.name} Digital Marketing Agency USA – Reveal Rank`,
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
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 bg-[#4361ee]/10 border border-[#4361ee]/20 text-[#4361ee] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="text-2xl">{industry.icon}</span>
              {industry.name} Industry
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">{industry.tagline}</h1>
            <p className="text-gray-600 text-xl leading-relaxed mb-5">{industry.description}</p>
            <p className="text-gray-500 leading-relaxed mb-10">
              At Reveal Rank, we've built a dedicated {industry.name.toLowerCase()} practice with specialists who understand your compliance requirements, buyer journey, competitive dynamics, and what it truly takes to win in this sector. We don't adapt generic marketing to {industry.name.toLowerCase()}—we build from the ground up with deep industry knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#4361ee] hover:bg-[#3451de] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-md shadow-blue-100"
              >
                Get Free {industry.name} Strategy
              </Link>
              <a
                href="mailto:outreach@revealrank.com"
                className="inline-flex items-center justify-center border border-gray-200 hover:border-[#4361ee] text-gray-700 font-semibold px-8 py-4 rounded-xl text-lg transition-all"
              >
                Talk to an {industry.name} Specialist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-gray-900">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <p className="text-gray-400 text-sm text-center uppercase tracking-widest mb-8">{industry.name} Sector Benchmarks</p>
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {industry.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-[#8DC21F] mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why specialist marketing matters */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Why Industry Expertise Matters</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Generic Marketing Doesn&apos;t Work in {industry.name}
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The {industry.name.toLowerCase()} sector has unique search behaviour, compliance requirements, audience motivations, and competitive dynamics that most digital marketing agencies don't fully understand. When you work with a generalist agency, you pay for the learning curve—and often end up with campaigns that technically run but miss the nuance that drives real results in your space.
              </p>
              <p>
                Reveal Rank's {industry.name.toLowerCase()} specialists have hands-on experience building strategies for companies in this sector. We know which keywords drive conversions versus those that attract the wrong audience. We know the compliance boundaries that shape what you can and can't say. We know the trust signals that matter most to {industry.name.toLowerCase()} customers, and how to build them through content and authority.
              </p>
              <p>
                The result is digital marketing that works harder and faster for {industry.name.toLowerCase()} businesses—because it's built on genuine sector knowledge, not adapted from a playbook designed for a different industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Challenges & Solutions</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">We Know Your Challenges. We Have the Solutions.</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Every {industry.name.toLowerCase()} business faces the same core digital marketing obstacles. Here&apos;s how we solve them.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-red-50 border border-red-200 rounded-lg flex items-center justify-center text-red-500 text-sm font-black">!</span>
                Common Challenges
              </h3>
              <div className="space-y-4">
                {industry.challenges.map((challenge, i) => (
                  <div key={i} className="flex gap-4 bg-red-50 border border-red-100 rounded-xl p-5">
                    <div className="w-8 h-8 rounded-full bg-red-100 border border-red-200 flex items-center justify-center text-red-500 font-bold flex-shrink-0 text-sm">
                      {i + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-50 border border-green-200 rounded-lg flex items-center justify-center text-green-600 text-sm font-black">✓</span>
                Our Solutions
              </h3>
              <div className="space-y-4">
                {industry.solutions.map((solution) => (
                  <div key={solution.title} className="bg-green-50 border border-green-100 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M10 3L4.5 8.5 2 6" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-bold mb-2">{solution.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{solution.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Digital Marketing Services for {industry.name}
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              A tailored combination of services designed specifically for the unique challenges and opportunities in the {industry.name.toLowerCase()} sector. We select and weight each service based on what delivers the best ROI for your specific business and market.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {industry.services.map((service) => {
              const slugMap: Record<string, string> = {
                "SEO Services": "seo-services",
                "Local SEO": "local-seo",
                "Technical SEO": "technical-seo",
                "Ecommerce SEO": "ecommerce-seo",
                "E-Commerce SEO": "ecommerce-seo",
                "Link Building": "link-building",
                "PPC Advertising": "ppc-advertising",
                "Social Media Marketing": "social-media-marketing",
                "Social Media": "social-media-marketing",
                "Content Marketing": "content-marketing",
                "Web Design & Development": "web-design-development",
                "Conversion Rate Optimization": "conversion-rate-optimization",
              };
              const slug = slugMap[service];
              return slug ? (
                <Link
                  key={service}
                  href={`/services/${slug}`}
                  className="bg-white border border-gray-200 rounded-xl px-6 py-4 text-gray-900 font-medium hover:border-[#4361ee] hover:text-[#4361ee] transition-all shadow-sm"
                >
                  {service}
                </Link>
              ) : (
                <div
                  key={service}
                  className="bg-white border border-gray-200 rounded-xl px-6 py-4 text-gray-900 font-medium hover:border-[#4361ee] hover:text-[#4361ee] transition-all shadow-sm"
                >
                  {service}
                </div>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="text-[#4361ee] hover:underline font-semibold text-sm">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">FAQs</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{industry.name} Digital Marketing FAQs</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Answers to common questions from {industry.name.toLowerCase()} businesses about digital marketing.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {industry.faqs.map((faq) => (
              <div key={faq.question} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <h3 className="text-gray-900 font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other industries */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Other Industries We Serve</h2>
          <p className="text-gray-500 text-sm text-center mb-6">Deep expertise across 8 major sectors.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries
              .filter((i) => i.slug !== industry.slug)
              .map((i) => (
                <Link
                  key={i.slug}
                  href={`/industries/${i.slug}`}
                  className="flex items-center gap-2 bg-white border border-gray-200 hover:border-[#4361ee] text-gray-700 hover:text-[#4361ee] px-4 py-2 rounded-xl text-sm transition-all"
                >
                  <span>{i.icon}</span>
                  {i.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to Grow Your ${industry.name} Business?`}
        subtitle={`Partner with Reveal Rank's ${industry.name.toLowerCase()} marketing specialists. Get a free strategy consultation that shows exactly how we'd approach your specific challenges and goals.`}
        primaryCTA={`Get Free ${industry.name} Strategy`}
      />
    </>
  );
}
