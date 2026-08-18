import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import CTASection from "@/components/CTASection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Digital Marketing Services – SEO, PPC, Content & Web Development",
  description:
    "Explore Reveal Rank's full suite of digital marketing services: SEO, Local SEO, Technical SEO, PPC, Social Media, Content Marketing, Web Development, Link Building, and CRO. Trusted by businesses across India.",
  alternates: { canonical: "https://www.revealrank.com/services" },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]} />

      {/* Hero */}
      <section className="py-20 bg-[#101010] text-center">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Digital Marketing{" "}
            <span style={{ background: "linear-gradient(135deg,#4361ee,#ff531a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Services
            </span>
          </h1>
          <p className="text-[#aaa] text-xl max-w-3xl mx-auto mb-8">
            End-to-end digital marketing solutions—from search rankings to paid media to conversion-optimised websites. Every service is data-driven, fully transparent, and built for measurable ROI.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-[#101010]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-[#181A1B] border border-[#2a2a2a] hover:border-[#4361ee] rounded-2xl p-8 transition-all"
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                    style={{ backgroundColor: service.color + "20" }}
                  >
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#4361ee] transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-[#888] text-sm leading-relaxed mb-4">{service.description.slice(0, 150)}...</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 4).map((f) => (
                        <span key={f} className="text-xs bg-[#101010] text-[#888] px-3 py-1 rounded-full border border-[#2a2a2a]">
                          {f}
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
