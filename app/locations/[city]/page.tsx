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
    title: `SEO & Digital Marketing Agency in ${loc.city}, ${loc.state} – Reveal Rank`,
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
    description: `Professional SEO and digital marketing services in ${loc.city}, ${loc.state}.`,
    areaServed: {
      "@type": "City",
      name: loc.city,
      containedInPlace: { "@type": "State", name: loc.state },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: loc.city,
      addressRegion: loc.state,
      addressCountry: "US",
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
          text: `SEO helps your ${loc.city} business rank higher on Google for local searches, driving more organic traffic, qualified leads, and revenue without ongoing ad spend.`,
        },
      },
      {
        "@type": "Question",
        name: `What digital marketing services does Reveal Rank offer in ${loc.city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Reveal Rank offers SEO, Local SEO, Technical SEO, PPC, Social Media Marketing, Content Marketing, Web Design & Development, Link Building, and Conversion Rate Optimisation in ${loc.city}.`,
        },
      },
      {
        "@type": "Question",
        name: `How long does SEO take to show results in ${loc.city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Most ${loc.city} businesses begin seeing measurable improvements within 3–6 months. Competitive markets may take 6–12 months, but results compound significantly over time.`,
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
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#4361ee]/10 border border-[#4361ee]/20 text-[#4361ee] px-4 py-2 rounded-full text-sm font-medium mb-6">
              📍 {loc.city}, {loc.state}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              SEO & Digital Marketing Agency in{" "}
              <span style={{ background: "linear-gradient(135deg,#4361ee,#ff531a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {loc.city}
              </span>
            </h1>
            <p className="text-gray-600 text-xl leading-relaxed mb-5">
              Reveal Rank helps {loc.city} businesses dominate search rankings, attract high-quality leads, and grow revenue through data-driven digital marketing strategies tailored to the {loc.city} market.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              With a population of {loc.population} and a thriving business ecosystem, {loc.city} is one of the most competitive digital markets in the United States. Our team knows this market—we've helped businesses here grow from obscurity to market leaders using proven SEO, PPC, and content strategies built specifically for {loc.city}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#4361ee] hover:bg-[#3451de] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-md shadow-blue-100"
              >
                Get Free {loc.city} SEO Audit
              </Link>
              <a
                href="mailto:outreach@revealrank.com"
                className="inline-flex items-center justify-center border border-gray-200 hover:border-[#4361ee] text-gray-700 font-semibold px-8 py-4 rounded-xl text-lg transition-all"
              >
                Talk to a {loc.city} Specialist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-10 bg-gray-900">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: loc.population, label: `${loc.city} Population` },
              { value: "300%+", label: "Avg. Traffic Growth" },
              { value: "3–6 mo", label: "Time to See Results" },
              { value: "98%", label: "Client Retention Rate" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-black text-[#8DC21F] mb-1">{s.value}</div>
                <div className="text-gray-400 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Market Overview</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The {loc.city} Digital Landscape</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{loc.description}</p>
                <p>{loc.marketInsight}</p>
                <p>
                  Businesses in {loc.city} that invest in SEO and digital marketing now are building a competitive moat that latecomers will struggle to close. The local search landscape rewards early movers—once you own the top rankings for key {loc.city} search terms, it becomes increasingly difficult for competitors to displace you.
                </p>
                <p>
                  Reveal Rank's local SEO strategies for {loc.city} businesses are built on three pillars: technical authority (ensuring Google can crawl, index, and understand your site), content relevance (creating the most helpful, thorough content for {loc.city}-specific searches), and off-page trust (earning the links and citations that signal local authority to search engines).
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-gray-900 font-bold mb-4">Key Industries in {loc.city}</h3>
                <div className="flex flex-wrap gap-2">
                  {loc.industries.map((ind) => (
                    <span key={ind} className="bg-[#4361ee]/10 border border-[#4361ee]/20 text-[#4361ee] px-3 py-1 rounded-full text-sm font-medium">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-gray-900 font-bold mb-4">Key Business Areas & Districts</h3>
                <div className="flex flex-wrap gap-2">
                  {loc.landmarks.map((lm) => (
                    <span key={lm} className="bg-gray-50 text-gray-600 px-3 py-1 rounded-full text-sm border border-gray-200">
                      {lm}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-[#4361ee] rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Ready to dominate {loc.city} search?</h3>
                <p className="text-blue-100 text-sm mb-4">Get a free local SEO audit tailored specifically to the {loc.city} market. We'll identify your top opportunities and exactly what it will take to rank.</p>
                <Link href="/contact" className="inline-flex items-center bg-white text-[#4361ee] font-bold px-5 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  Get Free Audit →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in this city */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Full-Service Digital Marketing in {loc.city}
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We deliver every aspect of your digital marketing strategy in {loc.city}—from technical SEO foundations and local content creation to paid advertising and website conversion optimisation. Every service works together as a coordinated growth system.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-gray-50 border border-gray-200 hover:border-[#4361ee] rounded-2xl p-7 transition-all hover:shadow-md"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-gray-900 font-bold text-lg mb-2 group-hover:text-[#4361ee] transition-colors">
                  {service.shortTitle} in {loc.city}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{service.tagline}</p>
                <span className="text-[#4361ee] text-xs font-semibold group-hover:underline">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why RevealRank in this city */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why {loc.city} Businesses Choose Reveal Rank
            </h2>
            <div className="space-y-5">
              {[
                {
                  icon: "🎯",
                  title: `Deep Understanding of the ${loc.city} Market`,
                  body: `We understand the competitive dynamics, consumer behaviour, and industry landscape specific to ${loc.city}. Our strategies are tailored to how ${loc.city} customers search and buy—not generic national playbooks copy-pasted from other markets. We study your specific local SERP, analyse your top ${loc.city} competitors, and build a strategy that targets the exact search queries driving business in your market.`,
                },
                {
                  icon: "📊",
                  title: "Data-Driven Results, Not Promises",
                  body: `Every ${loc.city} campaign we run is backed by thorough keyword research, competitor analysis, and performance data. You get detailed monthly reports showing exactly what rankings have improved, how traffic and leads have grown, and what ROI is being delivered. We tie every metric back to a business outcome—not just impressions or clicks.`,
                },
                {
                  icon: "🏢",
                  title: `Serving ${loc.city}'s Key Industries`,
                  body: `Our team has proven experience with the industries that drive ${loc.city}'s economy: ${loc.industries.join(", ")}. We understand the competitive dynamics, seasonal patterns, compliance requirements, and buyer intent specific to each of these sectors. You get specialists who know your market, not generalists guessing at it.`,
                },
                {
                  icon: "🤝",
                  title: "Full Transparency and Dedicated Support",
                  body: `You get a dedicated account manager who knows your business and your market. Monthly strategy calls, 24-hour email response times, and a real-time performance dashboard give you complete visibility into everything we're doing. No black boxes. No unexplained tactics. Just clear, measurable digital marketing for your ${loc.city} business.`,
                },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex gap-5">
                  <div className="text-2xl flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-lg mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">FAQs</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">FAQs – Digital Marketing in {loc.city}</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Common questions from {loc.city} business owners about SEO and digital marketing.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: `How can SEO help my business in ${loc.city}?`,
                a: `SEO helps your ${loc.city} business rank higher on Google for searches made by local customers—such as "${loc.industries[0].toLowerCase()} in ${loc.city}" or "best services near ${loc.landmarks[0]}". Higher rankings mean more website traffic, more qualified leads, and more revenue—without ongoing ad spend. Reveal Rank's local SEO strategies put your ${loc.city} business in front of customers at the exact moment they're searching for what you offer.`,
              },
              {
                q: `What is the cost of SEO services in ${loc.city}?`,
                a: `SEO investment in ${loc.city} varies based on your industry's competitiveness, target keywords, and growth goals. Reveal Rank offers transparent, results-focused packages starting from affordable monthly retainers for small businesses to comprehensive enterprise SEO programmes for larger organisations. Contact us for a customised quote based on your specific ${loc.city} market and growth objectives.`,
              },
              {
                q: `How long does it take for SEO to work in ${loc.city}?`,
                a: `Most ${loc.city} businesses see measurable improvement in rankings and organic traffic within 3–6 months. Highly competitive niches like real estate or healthcare in ${loc.city} may take 6–12 months to achieve dominant rankings. We provide monthly progress reports so you can track improvement from day one—and most clients see a positive ROI well within the first year.`,
              },
              {
                q: `Does Reveal Rank have experience with ${loc.city}-area businesses?`,
                a: `Yes. We've worked with businesses across ${loc.city} in industries including ${loc.industries.slice(0, 3).join(", ")} and more. Our team analyses the local ${loc.city} search landscape, competitor positioning, and market-specific search behaviour to build strategies that work for your specific location—not templated campaigns designed for other markets.`,
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <h3 className="text-gray-900 font-bold mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby cities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Also Serving Nearby Cities</h2>
          <p className="text-gray-500 text-sm text-center mb-6">We serve businesses in all major US cities with market-specific strategies.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {locations
              .filter((l) => l.slug !== loc.slug)
              .slice(0, 12)
              .map((l) => (
                <Link
                  key={l.slug}
                  href={`/locations/${l.slug}`}
                  className="bg-white border border-gray-200 hover:border-[#4361ee] text-gray-600 hover:text-[#4361ee] px-4 py-2 rounded-xl text-sm transition-all"
                >
                  {l.city}, {l.state}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to Grow Your ${loc.city} Business?`}
        subtitle={`Get a free SEO audit and digital marketing strategy tailored to the ${loc.city} market. No commitment, no obligation—just clear, actionable insights delivered within 48 hours.`}
        primaryCTA={`Get Free ${loc.city} SEO Audit`}
      />
    </>
  );
}
