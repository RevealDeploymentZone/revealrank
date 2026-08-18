import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import CTASection from "@/components/CTASection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Digital Marketing Services – SEO, PPC, Content & Web Development | Reveal Rank",
  description:
    "Explore Reveal Rank's full suite of digital marketing services: SEO, Local SEO, Technical SEO, PPC, Social Media, Content Marketing, Web Development, Link Building, and CRO. Trusted by 200+ businesses across the USA.",
  alternates: { canonical: "https://www.revealrank.com/services" },
};

const overview = [
  { icon: "🔍", label: "SEO Strategies Built", value: "500+" },
  { icon: "📈", label: "Average Traffic Growth", value: "300%" },
  { icon: "💰", label: "Revenue Generated for Clients", value: "$50M+" },
  { icon: "⭐", label: "Client Satisfaction Rate", value: "98%" },
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]} />

      {/* Hero */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-4">What We Do</p>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Digital Marketing{" "}
            <span style={{ background: "linear-gradient(135deg,#4361ee,#ff531a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Services
            </span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-8">
            End-to-end digital marketing solutions—from search rankings to paid media to conversion-optimised websites. Every service is data-driven, fully transparent, and built for measurable ROI.
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10">
            Whether you need a single service to fill a gap or a fully integrated digital marketing programme, Reveal Rank delivers strategies that compound in value over time—building traffic, authority, and revenue for the long term.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {overview.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl font-black text-[#4361ee] mb-1">{item.value}</div>
                <div className="text-gray-500 text-xs">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white border border-gray-200 hover:border-[#4361ee] rounded-2xl p-8 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                    style={{ backgroundColor: service.color + "20" }}
                  >
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#4361ee] transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description.slice(0, 160)}...</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.slice(0, 4).map((f) => (
                        <span key={f} className="text-xs bg-gray-50 text-gray-500 px-3 py-1 rounded-full border border-gray-200">
                          {f}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4">
                        {service.resultStats.slice(0, 2).map((stat) => (
                          <div key={stat.label}>
                            <div className="font-black text-sm" style={{ color: service.color }}>{stat.value}</div>
                            <div className="text-gray-400 text-xs">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                      <span className="text-[#4361ee] text-sm font-semibold group-hover:underline">Learn More →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why full service */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Integrated Approach</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Full-Service Marketing Wins</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Individual marketing channels work. But when SEO, content, PPC, and social media work together as a coordinated system, the results compound dramatically. Your organic content fuels your paid campaigns. Your PPC data informs your SEO targeting. Your social presence amplifies your content reach. Each channel makes every other channel more effective.
                </p>
                <p>
                  Reveal Rank manages all your digital channels from one team, ensuring every dollar spent is coordinated toward the same growth objectives. No siloed agencies. No duplicated effort. No gaps in your strategy.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Coordinated Strategy", body: "All channels planned together means no overlap, no gaps, and every tactic reinforcing the others." },
                { title: "Unified Reporting", body: "One dashboard. One team. Complete visibility across every channel and campaign you're running." },
                { title: "Faster Results", body: "Channels that work together compound results faster than isolated campaigns running independently." },
                { title: "Better ROI", body: "Shared data and coordinated execution means less waste and higher returns on every marketing dollar." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-gray-50 border border-gray-100 rounded-xl p-5">
                  <div className="w-6 h-6 rounded-full bg-[#4361ee]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M10 3L4.5 8.5 2 6" stroke="#4361ee" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
