import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/data/industries";
import CTASection from "@/components/CTASection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Industry-Specific Digital Marketing – E-Commerce, Healthcare, Real Estate & More",
  description:
    "Reveal Rank delivers specialised digital marketing strategies for E-Commerce, Healthcare, Real Estate, Education, Hospitality, Legal, Finance, and Technology businesses across India.",
  alternates: { canonical: "https://www.revealrank.com/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Industries", href: "/industries" }]} />

      <section className="py-20 bg-[#101010] text-center">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Industry-Specific{" "}
            <span style={{ background: "linear-gradient(135deg,#4361ee,#ff531a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Digital Marketing
            </span>
          </h1>
          <p className="text-[#aaa] text-xl max-w-3xl mx-auto">
            Generic marketing doesn&apos;t work in specialised industries. We bring deep domain expertise to every sector we serve—understanding your compliance requirements, audience behaviour, and competitive dynamics.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#101010]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group bg-[#181A1B] border border-[#2a2a2a] hover:border-[#4361ee] rounded-2xl p-8 transition-all"
              >
                <div className="flex items-start gap-5">
                  <div className="text-4xl">{industry.icon}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-[#4361ee] transition-colors">
                      {industry.name}
                    </h2>
                    <p className="text-[#4361ee] font-medium mb-3">{industry.tagline}</p>
                    <p className="text-[#888] text-sm leading-relaxed mb-4">{industry.description.slice(0, 160)}...</p>
                    <div className="flex flex-wrap gap-2">
                      {industry.services.slice(0, 3).map((s) => (
                        <span key={s} className="text-xs bg-[#101010] text-[#888] px-3 py-1 rounded-full border border-[#2a2a2a]">
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

      <CTASection />
    </>
  );
}
