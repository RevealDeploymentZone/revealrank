import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Portfolio – Client SEO & Web Development Results | Reveal Rank",
  description:
    "See real results Reveal Rank has delivered for clients across home services, healthcare, and technology. Case studies in SEO and web development.",
  alternates: { canonical: "https://www.revealrank.com/portfolio" },
};

const caseStudies = [
  {
    name: "Orlando Air Duct Cleaning",
    url: "https://www.orlandoairductcleaning.in",
    industry: "Home Services · HVAC",
    location: "Orlando, FL",
    services: ["SEO Services", "Web Development", "Local SEO", "Content Marketing"],
    image: "/portfolio/al-home-services.jpg",
    useLogoCard: true,
    logo: "/portfolio/orlando-logo.png",
    color: "#1a73e8",
    bg: "#f4f8ff",
    tagline: "Ranked #1 in Orlando for Air Duct Cleaning",
    description:
      "Orlando Air Duct Cleaning needed a high-converting website and a dominant local SEO presence to stand out in a competitive Orlando market. We rebuilt their site from scratch, implemented NADCA-aligned content strategy, and executed a full local SEO campaign targeting Orlando and surrounding areas.",
    results: [
      { value: "#1", label: "Google ranking for target keywords" },
      { value: "5,000+", label: "Homes cleaned (milestone reached)" },
      { value: "4.9★", label: "Google rating maintained" },
      { value: "312+", label: "Verified customer reviews" },
    ],
  },
  {
    name: "AL Home Services",
    url: "https://alhomeservices.us",
    industry: "Home Services · Multi-Trade",
    location: "Nationwide, USA",
    services: ["SEO Services", "Web Development", "Local SEO", "PPC Advertising"],
    image: "/portfolio/al-home-services.jpg",
    useLogoCard: false,
    logo: null,
    color: "#046bd2",
    bg: "#f0f6ff",
    tagline: "From Local to 70+ US Cities",
    description:
      "AL Home Services came to us as a regional home services company and needed to scale nationally. We architected a city-landing-page SEO strategy, redesigned their site for speed and conversion, and ran geo-targeted PPC campaigns that expanded their reach across the United States.",
    results: [
      { value: "70+", label: "US cities now ranking" },
      { value: "4.9/5", label: "Aggregate customer rating" },
      { value: "7", label: "Service verticals ranked" },
      { value: "2019", label: "Client since" },
    ],
  },
  {
    name: "Infogenx",
    url: "https://infogenx.com.au",
    industry: "Technology · IT Consulting",
    location: "Brisbane, Australia",
    services: ["SEO Services", "Web Development", "Content Marketing", "Technical SEO"],
    image: "/portfolio/infogenx.png",
    useLogoCard: false,
    logo: null,
    color: "#7c3aed",
    bg: "#f5f3ff",
    tagline: "Top-Ranked IT Consulting Firm in Brisbane",
    description:
      "Infogenx is a Brisbane-based IT consulting firm specialising in apps, automation, AI, and data. We redesigned their website for lead generation and executed a technical SEO and content strategy that put them in front of Australian businesses actively searching for IT and automation partners.",
    results: [
      { value: "Top 3", label: "Rankings for Brisbane IT keywords" },
      { value: "4x", label: "Increase in organic enquiries" },
      { value: "Apps · AI", label: "Core service pages ranked" },
      { value: "AU + IN", label: "Markets now covered" },
    ],
  },
  {
    name: "Crenosoft",
    url: "https://crenosoft.in",
    industry: "Technology · AI & Software",
    location: "Lucknow, India",
    services: ["Web Development", "Technical SEO", "Content Marketing"],
    image: null,
    useLogoCard: true,
    logo: "/portfolio/crenosoft-logo.png",
    color: "#f59e0b",
    bg: "#ffffff",
    tagline: "150+ Projects Delivered for Indian Startups & Enterprises",
    description:
      "Crenosoft is an AI software development and automation company based in Lucknow, India. We built their full website from the ground up — optimised for speed, conversion, and technical SEO — and implemented a content strategy that targets high-intent keywords across AI development, web apps, mobile apps, and cloud services in the Indian market.",
    results: [
      { value: "150+", label: "Projects delivered" },
      { value: "50+", label: "Clients across India & abroad" },
      { value: "98%", label: "Client retention rate" },
      { value: "6", label: "Service verticals ranked" },
    ],
  },
  {
    name: "Promediic",
    url: "https://promediic.com",
    industry: "Healthcare · Medical Supplies",
    location: "Nationwide, USA",
    services: ["SEO Services", "Web Development", "Content Marketing", "Technical SEO"],
    image: "/portfolio/promediic.png",
    useLogoCard: false,
    logo: null,
    color: "#059669",
    bg: "#ecfdf5",
    tagline: "50,000+ Patients Served Across All 50 States",
    description:
      "Promediic is a nationwide medical supplies and prescription medication platform. We built their e-commerce website with HIPAA-compliant best practices, executed a medical content strategy that passed Google's YMYL quality standards, and drove organic traffic for high-value pharmacy and medical device keywords across all 50 states.",
    results: [
      { value: "50,000+", label: "Patients served nationwide" },
      { value: "150+", label: "Products ranking organically" },
      { value: "50 states", label: "National search coverage" },
      { value: "YMYL", label: "Google E-E-A-T standards met" },
    ],
  },
];

const serviceColors: Record<string, string> = {
  "SEO Services": "#4361ee",
  "Web Development": "#ff531a",
  "Local SEO": "#8DC21F",
  "Content Marketing": "#f59e0b",
  "PPC Advertising": "#ec4899",
  "Technical SEO": "#06b6d4",
};

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: "Home", href: "/" }, { name: "Portfolio", href: "/portfolio" }]}
      />

      {/* Hero */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-4">Real Results</p>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Client{" "}
            <span style={{ background: "linear-gradient(135deg,#4361ee,#ff531a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Portfolio
            </span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-10">
            We don't just promise results — we deliver them. Here are a few of the businesses we've helped dominate search rankings and grow revenue through SEO and web development.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { value: "200+", label: "Clients Served" },
              { value: "300%", label: "Avg Traffic Growth" },
              { value: "$50M+", label: "Revenue Generated" },
              { value: "98%", label: "Satisfaction Rate" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-black text-[#4361ee] mb-1">{s.value}</div>
                <div className="text-gray-500 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 space-y-20">
          {caseStudies.map((client, i) => (
            <div
              key={client.name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image side */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                {client.useLogoCard ? (
                  <div
                    className="rounded-2xl overflow-hidden shadow-xl flex items-center justify-center p-10"
                    style={{ backgroundColor: client.bg, minHeight: 320, border: `1px solid ${client.color}30` }}
                  >
                    <Image
                      src={client.logo!}
                      alt={client.name}
                      width={400}
                      height={120}
                      className="object-contain max-w-full"
                    />
                  </div>
                ) : client.image ? (
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                    <Image
                      src={client.image}
                      alt={`${client.name} website`}
                      width={700}
                      height={390}
                      className="w-full object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 flex flex-col items-center justify-center p-12"
                    style={{
                      background: `linear-gradient(135deg, ${client.color}18, ${client.color}35)`,
                      minHeight: 320,
                      borderColor: client.color + "30",
                    }}
                  >
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-4 shadow-lg"
                      style={{ backgroundColor: client.color }}
                    >
                      {client.industry.includes("Health") ? "🏥" : client.industry.includes("Tech") ? "💻" : "🏠"}
                    </div>
                    <p className="text-2xl font-black text-center" style={{ color: client.color }}>
                      {client.name}
                    </p>
                    <p className="text-gray-500 text-sm mt-2">{client.location}</p>
                    <a
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-sm font-semibold underline"
                      style={{ color: client.color }}
                    >
                      {client.url.replace("https://", "")} ↗
                    </a>
                  </div>
                )}
              </div>

              {/* Content side */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full border"
                    style={{ backgroundColor: client.color + "15", borderColor: client.color + "30", color: client.color }}
                  >
                    {client.industry}
                  </span>
                  <span className="text-gray-400 text-xs">{client.location}</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">{client.name}</h2>
                <p className="text-lg font-semibold mb-4" style={{ color: client.color }}>{client.tagline}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{client.description}</p>

                {/* Services */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {client.services.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: serviceColors[s] || "#4361ee" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {client.results.map((r) => (
                    <div
                      key={r.label}
                      className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
                    >
                      <div className="text-xl font-black mb-1" style={{ color: client.color }}>{r.value}</div>
                      <div className="text-gray-500 text-xs">{r.label}</div>
                    </div>
                  ))}
                </div>

                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold border-2 rounded-xl px-5 py-2.5 transition-all bg-white hover:bg-[#4361ee] hover:border-[#4361ee] hover:text-white text-[#4361ee] border-[#4361ee]"
                >
                  Visit Website ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials strip */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-8">What Our Clients Say</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Reveal Rank took us from invisible to page one in Orlando. Our call volume doubled within 4 months. Best investment we've made.",
                author: "Owner, Orlando Air Duct Cleaning",
              },
              {
                quote: "We needed to scale nationally fast. Reveal Rank built us a city SEO machine that now drives leads in 70+ markets without paid ads.",
                author: "Marketing Director, AL Home Services",
              },
              {
                quote: "Our organic traffic grew over 4x after Reveal Rank rebuilt our site and content strategy. The ROI has been exceptional.",
                author: "CEO, Infogenx",
              },
            ].map((t) => (
              <div key={t.author} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-left">
                <div className="text-yellow-400 text-lg mb-4">★★★★★</div>
                <p className="text-gray-700 leading-relaxed mb-4 italic">"{t.quote}"</p>
                <p className="text-gray-500 text-sm font-semibold">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries we work with */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Beyond These Case Studies</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">We Work Across Every Industry</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            These four case studies represent a small slice of our work. We've delivered SEO and web development results for 200+ businesses across{" "}
            <Link href="/industries" className="text-[#4361ee] hover:underline font-medium">8 major industry verticals</Link>{" "}
            and 28+ US cities.{" "}
            <Link href="/services" className="text-[#4361ee] hover:underline font-medium">View all our services →</Link>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "E-Commerce", href: "/industries/ecommerce" },
              { label: "Healthcare", href: "/industries/healthcare" },
              { label: "Real Estate", href: "/industries/real-estate" },
              { label: "Technology", href: "/industries/technology" },
              { label: "Finance", href: "/industries/finance" },
              { label: "Education", href: "/industries/education" },
              { label: "Hospitality", href: "/industries/hospitality" },
              { label: "Legal", href: "/industries" },
            ].map((ind) => (
              <Link
                key={ind.label}
                href={ind.href}
                className="bg-white border border-gray-200 hover:border-[#4361ee] text-gray-700 hover:text-[#4361ee] px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm"
              >
                {ind.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want Results Like These?"
        subtitle="Get a free SEO audit and strategy session. We'll show you exactly how we'd approach your business — no obligation, delivered within 48 hours."
        primaryCTA="Get Your Free Audit"
      />
    </>
  );
}
