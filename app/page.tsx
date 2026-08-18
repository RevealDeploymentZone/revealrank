import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Reveal Rank – Performance SEO & Digital Marketing Agency India",
  description:
    "Reveal Rank is India's leading performance-driven SEO and digital marketing agency. We help businesses across Delhi, Mumbai, Bangalore and 20+ cities dominate Google rankings, generate qualified leads, and grow revenue through data-backed strategies.",
  alternates: { canonical: "https://www.revealrank.com" },
  openGraph: {
    title: "Reveal Rank – Performance SEO & Digital Marketing Agency India",
    description:
      "Data-driven SEO, PPC, content marketing & web development. 300%+ average traffic growth. Serving 20+ cities across India.",
    url: "https://www.revealrank.com",
  },
};

const stats = [
  { value: "300%", label: "Average Organic Traffic Growth" },
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Industries Served" },
  { value: "98%", label: "Client Retention Rate" },
];

const whyUs = [
  {
    icon: "🎯",
    title: "Data-First Strategy",
    description:
      "Every decision we make is backed by data—keyword research, competitor analysis, and performance metrics drive our strategies, not guesswork.",
  },
  {
    icon: "🏆",
    title: "Certified Expert Team",
    description:
      "Our team holds Google, Meta, and HubSpot certifications. Combined with years of hands-on experience, we bring deep expertise to every campaign.",
  },
  {
    icon: "⚡",
    title: "Transparent Reporting",
    description:
      "You get detailed monthly reports with rankings, traffic, leads, and ROI metrics. No vanity metrics—just the numbers that matter to your business.",
  },
  {
    icon: "🤝",
    title: "Long-Term Partnership",
    description:
      "We don't disappear after launch. We're a true extension of your team—continuously optimising, testing, and scaling results month after month.",
  },
  {
    icon: "🌍",
    title: "Local + National Reach",
    description:
      "From hyperlocal campaigns targeting customers in your city to national SEO strategies that put you on the map across India—we do it all.",
  },
  {
    icon: "💡",
    title: "Full-Funnel Approach",
    description:
      "We cover awareness to conversion—SEO for organic reach, content for nurturing, PPC for immediate leads, and CRO to maximise what you already have.",
  },
];

const process = [
  {
    step: "01",
    title: "Free Discovery Call",
    description:
      "We start with a 30-minute strategy session to understand your business goals, current digital presence, challenges, and growth targets.",
  },
  {
    step: "02",
    title: "Deep-Dive Audit",
    description:
      "Our experts analyse your website's technical health, keyword rankings, backlink profile, content gaps, and competitive landscape—no cost, no obligation.",
  },
  {
    step: "03",
    title: "Custom Growth Strategy",
    description:
      "We deliver a detailed, prioritised digital marketing roadmap tailored to your industry, goals, and budget—covering SEO, content, PPC, and more.",
  },
  {
    step: "04",
    title: "Execute & Optimise",
    description:
      "Our team implements the strategy, reports progress monthly, and continuously optimises based on real data to accelerate your growth trajectory.",
  },
];

const faqs = [
  {
    question: "What digital marketing services does Reveal Rank offer?",
    answer:
      "Reveal Rank offers a full suite of digital marketing services including SEO (technical, local, on-page, and off-page), PPC advertising (Google Ads), social media marketing, content marketing, web design and development, link building, and conversion rate optimisation.",
  },
  {
    question: "Which cities in India does Reveal Rank serve?",
    answer:
      "We serve businesses across India including Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, Jaipur, Surat, Chandigarh, Kochi, Indore, Nagpur, Gurgaon, Noida, Coimbatore, Vadodara, and many more cities.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "Most clients see measurable improvements in organic rankings and traffic within 3–6 months. Competitive niches may take longer. We provide monthly reporting so you can track progress from day one.",
  },
  {
    question: "Do you work with small businesses and startups?",
    answer:
      "Absolutely. We work with businesses of all sizes—from solo entrepreneurs and startups to established SMEs and enterprise companies. Our packages are designed to deliver strong ROI at every budget level.",
  },
  {
    question: "What industries do you specialise in?",
    answer:
      "We have deep experience in e-commerce, healthcare, real estate, education, hospitality, legal services, finance, and technology. Our industry specialists understand the unique challenges and compliance requirements of each sector.",
  },
  {
    question: "How do I get started with Reveal Rank?",
    answer:
      "Simply fill out our contact form or call us to schedule a free 30-minute strategy session. We'll review your current digital presence, discuss your goals, and propose a tailored growth strategy—no commitment required.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-36 bg-[#101010]">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, #4361ee 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#4361ee]/10 border border-[#4361ee]/20 text-[#4361ee] px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[#4361ee] animate-pulse" />
            India&apos;s Performance-Driven Digital Marketing Agency
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8 max-w-5xl mx-auto">
            Marketing That{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4361ee, #ff531a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Scales Businesses
            </span>
          </h1>
          <p className="text-[#aaa] text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            From data-driven SEO to high-converting PPC and compelling content—we craft digital strategies that build
            lasting growth for ambitious brands across India.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/contact"
              className="bg-[#4361ee] hover:bg-[#3451de] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105"
            >
              Get Free SEO Audit
            </Link>
            <Link
              href="/services"
              className="border border-[#2a2a2a] hover:border-[#4361ee] text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all"
            >
              Explore Services
            </Link>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-[#888] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#101010]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Our Expertise. Your Growth.
            </h2>
            <p className="text-[#888] text-lg max-w-2xl mx-auto">
              We deliver end-to-end digital marketing services designed to maximise your online visibility, attract qualified
              leads, and convert them into loyal customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-[#181A1B] border border-[#2a2a2a] hover:border-[#4361ee] rounded-2xl p-8 transition-all duration-300 hover:bg-[#1F2122]"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                  style={{ backgroundColor: service.color + "20" }}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#4361ee] transition-colors">
                  {service.shortTitle}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed mb-4">{service.tagline}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((f) => (
                    <span key={f} className="text-xs bg-[#101010] text-[#888] px-3 py-1 rounded-full border border-[#2a2a2a]">
                      {f}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#4361ee] hover:text-white font-semibold transition-colors"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Choose Reveal Rank?</h2>
            <p className="text-[#888] text-lg max-w-2xl mx-auto">
              Driven by innovation and a client-first approach, we deliver exceptional digital services that fuel growth,
              engagement, and lasting success for your brand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#4361ee]/10 border border-[#4361ee]/20 flex items-center justify-center text-2xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-[#888] text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#101010]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How We Work</h2>
            <p className="text-[#888] text-lg max-w-2xl mx-auto">
              A clear, transparent process from first conversation to measurable results—so you always know what&apos;s
              happening and what to expect.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <div key={step.step} className="relative">
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#4361ee]/40 to-transparent" />
                )}
                <div className="w-16 h-16 rounded-2xl bg-[#4361ee] flex items-center justify-center text-white font-black text-xl mb-6">
                  {step.step}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-[#888] text-lg max-w-2xl mx-auto">
              Deep domain expertise across India&apos;s most competitive industries. We understand your market, your customers,
              and what it takes to win.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group bg-[#181A1B] border border-[#2a2a2a] hover:border-[#4361ee] rounded-xl p-6 text-center transition-all hover:bg-[#1F2122]"
              >
                <div className="text-3xl mb-3">{industry.icon}</div>
                <div className="text-white font-semibold text-sm group-hover:text-[#4361ee] transition-colors">
                  {industry.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-[#101010]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Serving Businesses Across India</h2>
            <p className="text-[#888] text-lg max-w-2xl mx-auto">
              Local expertise. National reach. We help businesses in every major Indian city dominate their local and
              regional search results.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group bg-[#181A1B] border border-[#2a2a2a] hover:border-[#4361ee] rounded-xl px-4 py-3 text-center transition-all"
              >
                <div className="text-white text-sm font-medium group-hover:text-[#4361ee] transition-colors">
                  {loc.city}
                </div>
                <div className="text-[#555] text-xs mt-1">{loc.state}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-[#888] text-lg max-w-2xl mx-auto">
              Everything you need to know about working with Reveal Rank.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-[#181A1B] border border-[#2a2a2a] rounded-2xl p-6">
                <h3 className="text-white font-bold mb-3 text-lg">{faq.question}</h3>
                <p className="text-[#888] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Trust */}
      <section className="py-20 bg-[#101010]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The Reveal Rank Difference
              </h2>
              <p className="text-[#aaa] leading-relaxed mb-6">
                We are a passionate team of digital marketing experts committed to one thing: your growth. Unlike
                agencies that over-promise and under-deliver, we build strategies grounded in data, executed with
                precision, and measured by results that matter—traffic, leads, and revenue.
              </p>
              <p className="text-[#aaa] leading-relaxed mb-8">
                Our clients span e-commerce brands, healthcare providers, real estate developers, educational
                institutions, and technology companies across India. What unites them is a commitment to digital
                excellence—and a trust in Reveal Rank to deliver it.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-[#181A1B] border border-[#2a2a2a] rounded-xl p-5">
                    <div className="text-3xl font-black text-[#4361ee] mb-1">{stat.value}</div>
                    <div className="text-[#888] text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Crafted with Passion. Delivered with Purpose.",
                  body: "Every project reflects our creativity, precision, and results-driven mindset—designed to exceed client expectations, every time.",
                },
                {
                  title: "Your Vision. Our Roadmap.",
                  body: "We transform your business goals into a comprehensive digital roadmap for sustained growth and market leadership.",
                },
                {
                  title: "We Focus on What Moves the Needle.",
                  body: "We focus on measurable outcomes—increased traffic, higher conversions, and improved brand engagement—to ensure real ROI.",
                },
                {
                  title: "Local Expertise. Global Perspective.",
                  body: "Working with clients across India and internationally, we deliver local market expertise with the strategic thinking of a global agency.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-[#181A1B] border border-[#2a2a2a] rounded-xl p-6">
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-[#888] text-sm leading-relaxed">{item.body}</p>
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
