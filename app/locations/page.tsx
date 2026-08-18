import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/data/locations";
import CTASection from "@/components/CTASection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "SEO & Digital Marketing Services Across India – All Locations",
  description:
    "Reveal Rank provides SEO, PPC, and digital marketing services in Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, Jaipur, Surat and 20+ more cities across India.",
  alternates: { canonical: "https://www.revealrank.com/locations" },
};

export default function LocationsPage() {
  const stateGroups = locations.reduce(
    (acc, loc) => {
      if (!acc[loc.state]) acc[loc.state] = [];
      acc[loc.state].push(loc);
      return acc;
    },
    {} as Record<string, typeof locations>
  );

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Locations", href: "/locations" }]} />

      <section className="py-20 bg-[#101010] text-center">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Digital Marketing Services{" "}
            <span style={{ background: "linear-gradient(135deg,#4361ee,#ff531a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Across India
            </span>
          </h1>
          <p className="text-[#aaa] text-xl max-w-3xl mx-auto mb-8">
            We help businesses in every major Indian city dominate local and national search results. Find your city below to learn how we can help your business grow.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#101010]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          {Object.entries(stateGroups).map(([state, cities]) => (
            <div key={state} className="mb-12">
              <h2 className="text-xl font-bold text-[#4361ee] mb-6 uppercase tracking-widest text-sm">{state}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cities.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="group bg-[#181A1B] border border-[#2a2a2a] hover:border-[#4361ee] rounded-xl p-5 transition-all"
                  >
                    <h3 className="text-white font-bold mb-1 group-hover:text-[#4361ee] transition-colors">{loc.city}</h3>
                    <p className="text-[#666] text-xs">{loc.population} population</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {loc.industries.slice(0, 2).map((ind) => (
                        <span key={ind} className="text-xs bg-[#101010] text-[#555] px-2 py-1 rounded-full border border-[#2a2a2a]">
                          {ind}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Not Seeing Your City?"
        subtitle="We work with businesses across all of India. Get in touch and we'll create a tailored digital marketing strategy for your location."
        primaryCTA="Get a Free Strategy Call"
      />
    </>
  );
}
