import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/data/locations";
import CTASection from "@/components/CTASection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "SEO & Digital Marketing Services Across the USA – All Locations | Reveal Rank",
  description:
    "Reveal Rank provides SEO, PPC, and digital marketing services in New York, Los Angeles, Chicago, Houston, Phoenix, Dallas, Atlanta, Seattle, Miami and 20+ more US cities.",
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

      <section className="py-20 bg-white text-center border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Digital Marketing Services{" "}
            <span style={{ background: "linear-gradient(135deg,#4361ee,#ff531a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Across the USA
            </span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-8">
            We help businesses in every major US city dominate local and national search results. Find your city below to learn how we can help your business grow.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          {Object.entries(stateGroups).map(([state, cities]) => (
            <div key={state} className="mb-12">
              <h2 className="text-sm font-bold text-[#4361ee] mb-6 uppercase tracking-widest">{state}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cities.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="group bg-white border border-gray-200 hover:border-[#4361ee] rounded-xl p-5 transition-all hover:shadow-md"
                  >
                    <h3 className="text-gray-900 font-bold mb-1 group-hover:text-[#4361ee] transition-colors">{loc.city}</h3>
                    <p className="text-gray-400 text-xs">{loc.population} population</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {loc.industries.slice(0, 2).map((ind) => (
                        <span key={ind} className="text-xs bg-gray-50 text-gray-400 px-2 py-1 rounded-full border border-gray-200">
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
        subtitle="We work with businesses across all of the United States. Get in touch and we'll create a tailored digital marketing strategy for your location."
        primaryCTA="Get a Free Strategy Call"
      />
    </>
  );
}
