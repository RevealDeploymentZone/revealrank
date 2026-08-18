import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import CTASection from "@/components/CTASection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Industry-Specific Digital Marketing – E-Commerce, Healthcare, Real Estate & More | Reveal Rank",
  description:
    "Reveal Rank delivers specialised digital marketing strategies for E-Commerce, Healthcare, Real Estate, Education, Hospitality, Legal, Finance, and Technology businesses across the USA.",
  alternates: { canonical: "https://www.revealrank.com/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Industries", href: "/industries" }]} />

      <section className="py-20 bg-white text-center border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-4">Sector Specialists</p>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Industry-Specific{" "}
            <span style={{ background: "linear-gradient(135deg,#4361ee,#ff531a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Digital Marketing
            </span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-6">
            Generic marketing doesn&apos;t work in specialised industries. We bring deep domain expertise to every sector we serve—understanding your compliance requirements, audience behaviour, and competitive dynamics.
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto">
            From{" "}
            <Link href="/industries/ecommerce" className="text-[#4361ee] hover:underline font-medium">e-commerce</Link>{" "}
            and{" "}
            <Link href="/industries/healthcare" className="text-[#4361ee] hover:underline font-medium">healthcare</Link>{" "}
            to{" "}
            <Link href="/industries/legal" className="text-[#4361ee] hover:underline font-medium">legal services</Link>{" "}
            and{" "}
            <Link href="/industries/technology" className="text-[#4361ee] hover:underline font-medium">technology</Link>—our strategies are built for your market, not adapted from someone else&apos;s.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group bg-white border border-gray-200 hover:border-[#4361ee] rounded-2xl p-8 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-5">
                  <div className="text-4xl">{industry.icon}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#4361ee] transition-colors">
                      {industry.name}
                    </h2>
                    <p className="text-[#4361ee] font-medium mb-3">{industry.tagline}</p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{industry.description.slice(0, 160)}...</p>
                    <div className="flex flex-wrap gap-2">
                      {industry.services.slice(0, 3).map((s) => (
                        <span key={s} className="text-xs bg-gray-50 text-gray-500 px-3 py-1 rounded-full border border-gray-200">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why industry expertise matters */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Why It Matters</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sector Knowledge Changes Everything</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  When you work with a generalist agency, you pay for their learning curve. They adapt campaigns that worked in another industry, use keywords that attract the wrong audience, and miss the compliance nuances that define your space. The result is marketing that technically runs but underperforms—and often requires correction.
                </p>
                <p>
                  Reveal Rank's industry specialists have hands-on experience building strategies for companies in your sector. They know which search terms drive real conversions. They understand the trust signals that matter most to your audience—and how to build them through{" "}
                  <Link href="/services/content-marketing" className="text-[#4361ee] hover:underline font-medium">authoritative content</Link>{" "}
                  and{" "}
                  <Link href="/services/link-building" className="text-[#4361ee] hover:underline font-medium">earned authority</Link>.
                </p>
                <p>
                  The result is digital marketing that works harder and faster—because every strategy element is grounded in genuine sector knowledge. Combined with our{" "}
                  <Link href="/services/technical-seo" className="text-[#4361ee] hover:underline font-medium">technical SEO</Link>{" "}
                  foundations and{" "}
                  <Link href="/services/ppc-advertising" className="text-[#4361ee] hover:underline font-medium">performance advertising</Link>{" "}
                  expertise, we deliver an integrated growth engine tuned specifically for your market.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/services" className="inline-flex items-center gap-2 text-[#4361ee] hover:underline font-semibold">
                  View All Our Services →
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {services.slice(0, 6).map((s) => (
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
        </div>
      </section>

      <CTASection />
    </>
  );
}
