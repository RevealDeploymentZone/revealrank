import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, getLocation } from "@/data/locations";
import { services } from "@/data/services";
import CTASection from "@/components/CTASection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/locations/[city]">): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) return {};
  return {
    title: `SEO & Digital Marketing Agency in ${loc.city} – Reveal Rank`,
    description: `Reveal Rank provides expert SEO, PPC, social media marketing, and web development in ${loc.city}, ${loc.state}. Drive more traffic, leads, and revenue for your ${loc.city} business. Get a free audit.`,
    keywords: [
      `SEO agency ${loc.city}`,
      `digital marketing agency ${loc.city}`,
      `SEO services ${loc.city}`,
      `PPC management ${loc.city}`,
      `web design ${loc.city}`,
      `local SEO ${loc.city}`,
    ],
    alternates: { canonical: `https://www.revealrank.com/locations/${loc.slug}` },
    openGraph: {
      title: `SEO & Digital Marketing in ${loc.city} | Reveal Rank`,
      description: `Grow your ${loc.city} business with data-driven SEO, PPC, and digital marketing from Reveal Rank.`,
      url: `https://www.revealrank.com/locations/${loc.slug}`,
    },
  };
}

export default async function LocationPage({ params }: PageProps<"/locations/[city]">) {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) notFound();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Reveal Rank – SEO Agency ${loc.city}`,
    url: `https://www.revealrank.com/locations/${loc.slug}`,
    description: `Professional SEO and digital marketing services in ${loc.city}, ${loc.state}. Reveal Rank helps businesses in ${loc.city} grow through data-driven SEO, PPC, and content strategies.`,
    areaServed: {
      "@type": "City",
      name: loc.city,
      containedInPlace: { "@type": "State", name: loc.state },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: loc.city,
      addressRegion: loc.state,
      addressCountry: "IN",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How can SEO help my business in ${loc.city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `SEO helps your ${loc.city} business rank higher on Google for searches made by local customers. This drives more organic traffic, qualified leads, and revenue—without ongoing ad spend. Reveal Rank's local SEO expertise helps ${loc.city} businesses dominate both local and national search results.`,
        },
      },
      {
        "@type": "Question",
        name: `What digital marketing services does Reveal Rank offer in ${loc.city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Reveal Rank offers a full suite of digital marketing services in ${loc.city} including SEO, Local SEO, Technical SEO, PPC (Google Ads), Social Media Marketing, Content Marketing, Web Design & Development, Link Building, and Conversion Rate Optimisation.`,
        },
      },
      {
        "@type": "Question",
        name: `How long does SEO take to show results in ${loc.city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Most ${loc.city} businesses begin seeing measurable improvements in rankings and traffic within 3–6 months of starting SEO. Highly competitive markets may take longer, but results compound significantly after the 6-month mark.`,
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: loc.city, href: `/locations/${loc.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="py-20 bg-[#101010]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#4361ee]/10 border border-[#4361ee]/20 text-[#4361ee] px-4 py-2 rounded-full text-sm font-medium mb-6">
              📍 {loc.city}, {loc.state}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              SEO & Digital Marketing Agency in{" "}
              <span style={{ background: "linear-gradient(135deg,#4361ee,#ff531a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {loc.city}
              </span>
            </h1>
            <p className="text-[#aaa] text-xl leading-relaxed mb-10">
              Reveal Rank helps {loc.city} businesses dominate search rankings, attract high-quality leads, and grow revenue through data-driven digital marketing strategies tailored to the {loc.city} market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#4361ee] hover:bg-[#3451de] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all"
              >
                Get Free {loc.city} SEO Audit
              </Link>
              <a
                href="tel:+91XXXXXXXXXX"
                className="inline-flex items-center justify-center border border-[#2a2a2a] hover:border-[#4361ee] text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all"
              >
                Talk to a {loc.city} Specialist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The {loc.city} Digital Market
              </h2>
              <p className="text-[#aaa] leading-relaxed mb-6">{loc.description}</p>
              <p className="text-[#aaa] leading-relaxed mb-6">{loc.marketInsight}</p>
              <p className="text-[#aaa] leading-relaxed">
                {loc.city} businesses that invest in SEO and digital marketing now are building a competitive moat that will be difficult for late movers to overcome. The time to invest in your {loc.city} digital presence is today—before your competitors lock up the rankings.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-[#181A1B] border border-[#2a2a2a] rounded-xl p-6">
                <h3 className="text-white font-bold mb-3">Key Industries in {loc.city}</h3>
                <div className="flex flex-wrap gap-2">
                  {loc.industries.map((ind) => (
                    <span key={ind} className="bg-[#4361ee]/10 border border-[#4361ee]/20 text-[#4361ee] px-3 py-1 rounded-full text-sm">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-[#181A1B] border border-[#2a2a2a] rounded-xl p-6">
                <h3 className="text-white font-bold mb-3">Key Business Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {loc.landmarks.map((lm) => (
                    <span key={lm} className="bg-[#1F2122] text-[#888] px-3 py-1 rounded-full text-sm border border-[#2a2a2a]">
                      {lm}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#181A1B] border border-[#2a2a2a] rounded-xl p-5 text-center">
                  <div className="text-2xl font-black text-[#4361ee] mb-1">{loc.population}</div>
                  <div className="text-[#888] text-xs">Population</div>
                </div>
                <div className="bg-[#181A1B] border border-[#2a2a2a] rounded-xl p-5 text-center">
                  <div className="text-2xl font-black text-[#ff531a] mb-1">Top 5</div>
                  <div className="text-[#888] text-xs">Avg. Ranking Result</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in this city */}
      <section className="py-20 bg-[#101010]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Digital Marketing Services in {loc.city}
            </h2>
            <p className="text-[#888] text-lg max-w-2xl mx-auto">
              We deliver every aspect of your digital marketing strategy in {loc.city}—from technical SEO and content creation to paid ads and web development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-[#181A1B] border border-[#2a2a2a] hover:border-[#4361ee] rounded-2xl p-7 transition-all"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#4361ee] transition-colors">
                  {service.shortTitle} in {loc.city}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed">{service.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why RevealRank in this city */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Why {loc.city} Businesses Choose Reveal Rank
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: `Deep Understanding of the ${loc.city} Market`,
                  body: `We understand the competitive dynamics, consumer behaviour, and industry landscape specific to ${loc.city}. Our strategies are tailored to how ${loc.city} customers search and buy—not generic national playbooks.`,
                },
                {
                  title: "Data-Driven Results, Not Promises",
                  body: `Every ${loc.city} campaign we run is backed by thorough keyword research, competitor analysis, and performance data. You get monthly reports showing exactly what's working, what rankings have improved, and what traffic and leads have been generated.`,
                },
                {
                  title: `Serving ${loc.city}'s Key Industries`,
                  body: `Our team has experience with the industries that matter most in ${loc.city}: ${loc.industries.join(", ")}. We understand the competitive dynamics, seasonal patterns, and buyer intent specific to these sectors.`,
                },
                {
                  title: "Full Transparency and Communication",
                  body: `You get a dedicated account manager, monthly strategy calls, and 24-hour response times. No black boxes. No unexplained tactics. Just clear, measurable digital marketing for your ${loc.city} business.`,
                },
              ].map((item) => (
                <div key={item.title} className="bg-[#181A1B] border border-[#2a2a2a] rounded-xl p-6">
                  <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-[#888] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#101010]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              FAQs – Digital Marketing in {loc.city}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: `How can SEO help my business in ${loc.city}?`,
                a: `SEO helps your ${loc.city} business rank higher on Google for searches made by local customers—such as "${loc.industries[0].toLowerCase()} in ${loc.city}" or "best services near ${loc.landmarks[0]}". Higher rankings mean more website traffic, more qualified leads, and more revenue—without ongoing ad spend. Reveal Rank's local SEO strategies put your ${loc.city} business in front of customers at the exact moment they're searching for what you offer.`,
              },
              {
                q: `What is the cost of SEO services in ${loc.city}?`,
                a: `SEO investment in ${loc.city} varies based on your industry's competitiveness, target keywords, and growth goals. Reveal Rank offers transparent, results-focused packages starting from affordable monthly retainers for small businesses to comprehensive enterprise SEO programmes. Contact us for a customised quote based on your specific ${loc.city} market needs.`,
              },
              {
                q: `How long does it take for SEO to work in ${loc.city}?`,
                a: `Most ${loc.city} businesses see measurable improvement in rankings and organic traffic within 3–6 months. Highly competitive niches like real estate or healthcare in ${loc.city} may take 6–12 months to achieve dominant rankings. We provide monthly progress reports so you can track improvement from day one.`,
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-[#181A1B] border border-[#2a2a2a] rounded-2xl p-6">
                <h3 className="text-white font-bold mb-3">{faq.q}</h3>
                <p className="text-[#888] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby cities */}
      <section className="py-16 bg-[#0d0d0d]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Also Serving Nearby Cities</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {locations
              .filter((l) => l.slug !== loc.slug)
              .slice(0, 10)
              .map((l) => (
                <Link
                  key={l.slug}
                  href={`/locations/${l.slug}`}
                  className="bg-[#181A1B] border border-[#2a2a2a] hover:border-[#4361ee] text-[#888] hover:text-white px-4 py-2 rounded-xl text-sm transition-all"
                >
                  {l.city}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to Grow Your ${loc.city} Business?`}
        subtitle={`Get a free SEO audit and digital marketing strategy tailored to the ${loc.city} market. No commitment—just clear, actionable insights.`}
        primaryCTA={`Get Free ${loc.city} SEO Audit`}
      />
    </>
  );
}
