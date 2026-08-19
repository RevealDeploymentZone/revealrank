import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { industries } from "@/data/industries";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Reveal Rank – Performance SEO & Digital Marketing Agency USA",
  description:
    "Reveal Rank is a performance-driven SEO and digital marketing agency serving businesses across the United States. We help brands dominate Google rankings, generate qualified leads, and grow revenue through data-backed strategies.",
  alternates: { canonical: "https://www.revealrank.com" },
  openGraph: {
    title: "Reveal Rank – Performance SEO & Digital Marketing Agency USA",
    description:
      "Data-driven SEO, PPC, content marketing & web development. 300%+ average traffic growth. Serving 28+ major US cities.",
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
      "Every decision we make is backed by data—keyword research, competitor analysis, and performance metrics drive our strategies, not guesswork. We use industry-leading tools like Ahrefs, SEMrush, and Google Search Console to build campaigns grounded in evidence.",
  },
  {
    icon: "🏆",
    title: "Certified Expert Team",
    description:
      "Our team holds Google, Meta, and HubSpot certifications. Combined with years of hands-on experience across dozens of industries, we bring deep expertise to every campaign. Every specialist is vetted, trained, and continuously upskilled.",
  },
  {
    icon: "⚡",
    title: "Transparent Reporting",
    description:
      "You get detailed monthly reports with rankings, traffic, leads, and ROI metrics. No vanity metrics—just the numbers that matter to your business. Our custom dashboards give you real-time visibility into every campaign, any time.",
  },
  {
    icon: "🤝",
    title: "Long-Term Partnership",
    description:
      "We don't disappear after launch. We're a true extension of your team—continuously optimising, testing, and scaling results month after month. Your dedicated account manager is available 5 days a week with a guaranteed 24-hour response time.",
  },
  {
    icon: "🌍",
    title: "Local + National Reach",
    description:
      "From hyperlocal campaigns targeting customers in your city to national SEO strategies that put you on the map across the US—we do it all. We've helped businesses rank for local terms in 28+ cities while simultaneously building national authority.",
  },
  {
    icon: "💡",
    title: "Full-Funnel Approach",
    description:
      "We cover awareness to conversion—SEO for organic reach, content for nurturing, PPC for immediate leads, and CRO to maximise what you already have. Each channel is coordinated to work together, amplifying results across your entire marketing funnel.",
  },
];

const process = [
  {
    step: "01",
    title: "Free Discovery Call",
    description:
      "We start with a 30-minute strategy session to understand your business goals, current digital presence, target audience, challenges, and growth targets. This call sets the foundation for everything that follows.",
  },
  {
    step: "02",
    title: "Deep-Dive Audit",
    description:
      "Our experts analyse your website's technical health, keyword rankings, backlink profile, content gaps, and competitive landscape—no cost, no obligation. We review 150+ technical and content factors to uncover every opportunity.",
  },
  {
    step: "03",
    title: "Custom Growth Strategy",
    description:
      "We deliver a detailed, prioritised digital marketing roadmap tailored to your industry, goals, and budget—covering SEO, content, PPC, and more. Every recommendation is tied to a clear business outcome with projected timelines.",
  },
  {
    step: "04",
    title: "Execute & Optimise",
    description:
      "Our team implements the strategy, reports progress monthly, and continuously optimises based on real data to accelerate your growth trajectory. We run regular A/B tests, refine targeting, and adapt to algorithm changes proactively.",
  },
];

const faqs = [
  {
    question: "What digital marketing services does Reveal Rank offer?",
    answer:
      "Reveal Rank offers a full suite of digital marketing services including SEO (technical, local, on-page, and off-page), PPC advertising (Google Ads), social media marketing, content marketing, web design and development, link building, and conversion rate optimisation. Each service is available standalone or as part of a fully integrated growth package.",
  },
  {
    question: "Which US cities does Reveal Rank serve?",
    answer:
      "We serve businesses across the United States including New York City, Los Angeles, Chicago, Houston, Phoenix, Philadelphia, San Antonio, San Diego, Dallas, Austin, Seattle, Denver, Miami, Atlanta, Charlotte, Nashville, Tampa, Orlando, Portland, Minneapolis, and many more major cities. Our remote-first model means we can serve any US business regardless of location.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "Most clients see measurable improvements in organic rankings and traffic within 3–6 months. Competitive niches may take 6–12 months to dominate. We provide monthly reporting so you can track progress from day one, and most clients see a positive ROI within the first 6 months of working with us.",
  },
  {
    question: "Do you work with small businesses and startups?",
    answer:
      "Absolutely. We work with businesses of all sizes—from solo entrepreneurs and startups to established SMEs and enterprise companies. Our packages are designed to deliver strong ROI at every budget level. We've helped bootstrapped startups grow from zero to 50,000+ monthly visitors and supported enterprise brands protecting millions in organic revenue.",
  },
  {
    question: "What industries do you specialise in?",
    answer:
      "We have deep experience in e-commerce, healthcare, real estate, education, hospitality, legal services, finance, and technology. Our industry specialists understand the unique challenges, compliance requirements, and buyer journeys specific to each sector—meaning you get strategies built for your market, not adapted from another.",
  },
  {
    question: "How do I get started with Reveal Rank?",
    answer:
      "Simply fill out our contact form or email us at outreach@revealrank.com to schedule a free 30-minute strategy session. We'll review your current digital presence, discuss your goals, and propose a tailored growth strategy—no commitment required. Most clients receive their proposal within 48 hours.",
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

const trustedBy = [
  { industry: "E-Commerce", result: "480% traffic growth in 8 months" },
  { industry: "Healthcare", result: "3x qualified leads in 6 months" },
  { industry: "Real Estate", result: "#1 rankings for 40+ local keywords" },
  { industry: "SaaS / Tech", result: "210% increase in organic signups" },
  { industry: "Legal Services", result: "65% reduction in cost-per-lead" },
  { industry: "Education", result: "5x increase in enrollment inquiries" },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-36 bg-white">
        <div className="absolute inset-0 opacity-[0.04]" style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, #4361ee 0%, transparent 70%)" }} />
        <div className="relative max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#4361ee]/10 border border-[#4361ee]/20 text-[#4361ee] px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[#4361ee] animate-pulse" />
            Performance-Driven Digital Marketing Agency — USA
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-8 max-w-5xl mx-auto">
            Marketing That{" "}
            <span style={{ background: "linear-gradient(135deg, #4361ee, #ff531a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Scales Businesses
            </span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl mb-4 max-w-2xl mx-auto leading-relaxed">
            From data-driven SEO to high-converting PPC and compelling content—we craft digital strategies that build lasting growth for ambitious brands across the United States.
          </p>
          <p className="text-gray-400 text-base mb-10 max-w-xl mx-auto">
            Trusted by 200+ businesses. Average 300% organic traffic growth. No long-term contracts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/contact" className="bg-[#4361ee] hover:bg-[#3451de] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-blue-100">
              Get Free SEO Audit
            </Link>
            <Link href="/services" className="border border-gray-200 hover:border-[#4361ee] text-gray-700 font-semibold px-8 py-4 rounded-xl text-lg transition-all">
              Explore Services
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by results strip */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <p className="text-gray-400 text-base text-center uppercase tracking-widest mb-10">Real Results for Real Businesses</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trustedBy.map((item) => (
              <div key={item.industry} className="text-center">
                <div className="text-white font-bold text-base mb-2">{item.industry}</div>
                <div className="text-[#8DC21F] text-sm leading-snug">{item.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Expertise. Your Growth.</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We deliver end-to-end digital marketing services designed to maximise your online visibility, attract qualified leads, and convert them into loyal customers. Every service is measurable, transparent, and tailored to your specific goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white border border-gray-200 hover:border-[#4361ee] rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5" style={{ backgroundColor: service.color + "20" }}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#4361ee] transition-colors">{service.shortTitle}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.tagline}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.slice(0, 3).map((f) => (
                    <span key={f} className="text-xs bg-gray-50 text-gray-500 px-3 py-1 rounded-full border border-gray-200">{f}</span>
                  ))}
                </div>
                <span className="text-[#4361ee] text-sm font-semibold group-hover:underline">Learn More →</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-[#4361ee] text-gray-700 hover:text-[#4361ee] font-semibold px-6 py-3 rounded-xl transition-all">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Why Reveal Rank</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">The Agency Difference</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Most agencies overpromise and underdeliver. We built Reveal Rank to be different—a transparent, data-driven partner that measures itself by the same metrics you care about: traffic, leads, and revenue.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="flex gap-5 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#4361ee]/10 border border-[#4361ee]/20 flex items-center justify-center text-2xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work - Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">From First Call to Real Results</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              A clear, transparent 4-step process from first conversation to measurable results—so you always know exactly what's happening and what to expect at every stage of the engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <div key={step.step} className="relative bg-white rounded-2xl border border-gray-200 p-7 shadow-sm">
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-8 h-px bg-gradient-to-r from-[#4361ee]/40 to-transparent z-10" />
                )}
                <div className="w-16 h-16 rounded-2xl bg-[#4361ee] flex items-center justify-center text-white font-black text-xl mb-6">
                  {step.step}
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Industries</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">We Know Your Market</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Generic digital marketing doesn't work in specialised industries. We've built deep expertise across 8 major sectors—understanding your compliance requirements, audience behaviour, seasonal trends, and what it really takes to rank and convert in your space.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group bg-gray-50 border border-gray-200 hover:border-[#4361ee] rounded-xl p-6 text-center transition-all hover:shadow-md"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <div className="text-gray-900 font-bold text-sm group-hover:text-[#4361ee] transition-colors mb-1">{industry.name}</div>
                <div className="text-gray-400 text-xs">{industry.tagline.split(".")[0]}</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/industries" className="text-[#4361ee] hover:underline font-semibold text-sm">See All Industries →</Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Locations</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Serving Businesses Across the USA</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Local expertise. National reach. We help businesses in every major US city dominate their local and regional search results. Our market-specific strategies are built on local keyword data, competitor intel, and an understanding of how customers search in your city.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group bg-white border border-gray-200 hover:border-[#4361ee] rounded-xl px-3 py-3 text-center transition-all hover:shadow-sm"
              >
                <div className="text-gray-900 text-sm font-medium group-hover:text-[#4361ee] transition-colors">{loc.city}</div>
                <div className="text-gray-400 text-xs mt-0.5">{loc.state}</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/locations" className="text-[#4361ee] hover:underline font-semibold text-sm">View All Cities →</Link>
          </div>
        </div>
      </section>

      {/* Social Proof / What clients say section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Results We Deliver</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Numbers That Speak for Themselves</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We measure success the way our clients do—by real business outcomes, not vanity metrics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                stat: "480%",
                label: "Organic Traffic Growth",
                detail: "Achieved in 8 months for a national e-commerce brand through technical SEO, content strategy, and link building.",
                icon: "📈",
              },
              {
                stat: "3x",
                label: "Qualified Leads Generated",
                detail: "Healthcare provider tripled inbound patient inquiries within 6 months through local SEO and Google Ads.",
                icon: "🏥",
              },
              {
                stat: "65%",
                label: "Reduction in Cost-Per-Lead",
                detail: "Legal services firm cut PPC spend per lead by 65% while maintaining volume—through smarter targeting and landing page CRO.",
                icon: "⚖️",
              },
            ].map((item) => (
              <div key={item.label} className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-4xl font-black text-[#4361ee] mb-2">{item.stat}</div>
                <div className="text-gray-900 font-bold text-lg mb-3">{item.label}</div>
                <p className="text-gray-500 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── From the Blog ─────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">From the Blog</p>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Trending SEO Guides</h2>
            </div>
            <Link
              href="/blog/"
              className="text-[#4361ee] font-semibold hover:underline text-sm whitespace-nowrap"
            >
              View all {blogPosts.length} articles →
            </Link>
          </div>

          {(() => {
            const sorted = [...blogPosts].sort(
              (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
            );
            const featured = sorted[0];
            const rest = sorted.slice(1, 7);
            return (
              <>
                {/* Featured latest post */}
                <Link
                  href={`/blog/${featured.slug}/`}
                  className="group flex flex-col md:flex-row gap-0 bg-white rounded-2xl border border-gray-200 hover:border-[#4361ee]/40 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 overflow-hidden mb-8"
                >
                  {/* Color stripe */}
                  <div className="w-full md:w-2 bg-[#4361ee] flex-shrink-0" />
                  <div className="flex flex-col md:flex-row flex-1 p-7 md:p-8 gap-6 items-start md:items-center">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="bg-[#4361ee]/10 text-[#4361ee] text-xs font-bold px-3 py-1 rounded-full capitalize">
                          {featured.parentTopic}
                        </span>
                        <span className="text-xs font-semibold text-[#ff531a] bg-[#ff531a]/10 px-3 py-1 rounded-full">
                          🔥 Latest
                        </span>
                        <span className="text-xs text-gray-400">{featured.readTime} min read</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-gray-900 group-hover:text-[#4361ee] transition-colors leading-snug mb-3">
                        {featured.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{featured.excerpt}</p>
                    </div>
                    <div className="flex-shrink-0 flex items-center gap-3">
                      <span className="text-xs text-gray-400">
                        {new Date(featured.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="hidden md:inline-flex items-center gap-1 text-sm font-bold text-white bg-[#4361ee] px-5 py-2.5 rounded-xl group-hover:bg-[#3451de] transition-colors">
                        Read now →
                      </span>
                    </div>
                  </div>
                </Link>

                {/* 6-post grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {rest.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}/`}
                      className="group bg-white rounded-2xl border border-gray-200 hover:border-[#4361ee]/30 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 p-6 flex flex-col"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-[#4361ee] bg-[#4361ee]/8 px-2.5 py-1 rounded-full capitalize">
                          {post.parentTopic}
                        </span>
                        <span className="text-xs text-gray-400">{post.readTime} min</span>
                      </div>
                      <h3 className="text-[15px] font-bold text-gray-900 group-hover:text-[#4361ee] transition-colors leading-snug mb-3 flex-1 line-clamp-3">
                        {post.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-auto pt-4 border-t border-gray-50">
                        {new Date(post.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </p>
                    </Link>
                  ))}
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">FAQs</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Everything you need to know about working with Reveal Rank.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-gray-900 font-bold mb-3 text-lg">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Trust */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Reveal Rank Difference</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                We are a passionate team of digital marketing experts committed to one thing: your growth. Unlike agencies that over-promise and under-deliver, we build strategies grounded in data, executed with precision, and measured by results that matter—traffic, leads, and revenue.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Our clients span e-commerce brands, healthcare providers, real estate developers, educational institutions, and technology companies across the US. What unites them is a commitment to digital excellence—and a trust in Reveal Rank to deliver it consistently, month after month.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We don't take shortcuts. We don't game algorithms. We build lasting digital authority through technical excellence, genuine content, and earned backlinks—work that compounds in value over time and withstands every Google update.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                    <div className="text-3xl font-black text-[#4361ee] mb-1">{stat.value}</div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Crafted with Passion. Delivered with Purpose.",
                  body: "Every project reflects our creativity, precision, and results-driven mindset. We obsess over the details—from meta descriptions to page speed to backlink quality—because those details compound into rankings, traffic, and revenue.",
                },
                {
                  title: "Your Vision. Our Roadmap.",
                  body: "We transform your business goals into a comprehensive digital roadmap for sustained growth and market leadership. Every strategy is tied directly to your business objectives, not just standard SEO best practices.",
                },
                {
                  title: "We Focus on What Moves the Needle.",
                  body: "We focus on measurable outcomes—increased organic traffic, higher quality leads, improved conversion rates, and stronger brand authority. Every tactic we recommend is selected because it delivers clear, trackable ROI.",
                },
                {
                  title: "Local Expertise. National Perspective.",
                  body: "Working with clients across 28+ US cities, we bring deep local market expertise combined with the strategic thinking of a national-scale agency. We understand how markets like New York, Los Angeles, and Chicago differ—and build strategies that reflect those differences.",
                },
                {
                  title: "No Lock-In Contracts. No Excuses.",
                  body: "We earn our clients' business every month. No annual lock-in contracts, no cancellation penalties. Our client retention rate exceeds 98% not because clients are trapped, but because our work consistently delivers—and they choose to stay.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h3 className="text-gray-900 font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
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
