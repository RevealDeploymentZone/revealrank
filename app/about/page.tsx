import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About Reveal Rank – India's Performance Digital Marketing Agency",
  description:
    "Learn about Reveal Rank—our story, team, values, and the data-driven approach that has helped 200+ businesses across India achieve measurable digital marketing results.",
  alternates: { canonical: "https://www.revealrank.com/about" },
};

const values = [
  {
    icon: "📊",
    title: "Data Over Opinions",
    description:
      "Every strategy we build and every decision we make is grounded in data—keyword research, competitor analysis, performance metrics, and conversion data. We don't guess; we measure.",
  },
  {
    icon: "🔍",
    title: "Radical Transparency",
    description:
      "Our clients always know exactly what we're doing, why we're doing it, and how it's performing. No jargon, no hidden tactics, no misleading metrics—just honest communication and clear results.",
  },
  {
    icon: "🎯",
    title: "Results That Matter",
    description:
      "We focus on outcomes that affect your bottom line: organic traffic, qualified leads, and revenue growth. Vanity metrics like impressions or social likes are secondary to real business impact.",
  },
  {
    icon: "🤝",
    title: "Partnership Mentality",
    description:
      "We treat every client's business as if it were our own. Your growth is our growth. We're invested in your long-term success—not just delivering a service and moving on.",
  },
  {
    icon: "⚡",
    title: "Continuous Improvement",
    description:
      "Digital marketing evolves fast. We invest heavily in staying ahead—tracking algorithm updates, testing new tactics, and continuously upskilling our team to keep you competitive.",
  },
  {
    icon: "🌟",
    title: "Excellence in Execution",
    description:
      "A great strategy poorly executed delivers nothing. We take pride in the quality of our work—from the precision of our keyword research to the quality of our content to the accuracy of our reporting.",
  },
];

const teamHighlights = [
  { role: "SEO Specialists", count: "5+", note: "Google certified, 5+ years experience" },
  { role: "Content Writers", count: "8+", note: "Industry-specialist writers" },
  { role: "PPC Managers", count: "4+", note: "Google Ads & Meta certified" },
  { role: "Web Developers", count: "6+", note: "React, WordPress, Shopify experts" },
  { role: "UI/UX Designers", count: "3+", note: "Figma specialists" },
  { role: "Account Managers", count: "4+", note: "Dedicated client success" },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />

      {/* Hero */}
      <section className="py-20 bg-[#101010]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              We Are{" "}
              <span style={{ background: "linear-gradient(135deg,#4361ee,#ff531a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Reveal Rank
              </span>
            </h1>
            <p className="text-[#aaa] text-xl leading-relaxed mb-6">
              Reveal Rank is a performance-driven digital marketing agency built on a single conviction: every rupee you invest in marketing should return measurable, trackable results.
            </p>
            <p className="text-[#aaa] text-xl leading-relaxed">
              Founded by digital marketing practitioners—not just strategists—we combine deep technical expertise with creative excellence and an obsession with data to deliver results that genuinely transform businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-[#aaa] leading-relaxed">
                <p>
                  Reveal Rank was born from frustration. Our founders had seen too many businesses pour money into digital marketing that delivered impressive-sounding reports but little real growth. Rankings that didn't translate to leads. Traffic that didn't convert. Agencies that prioritised contract renewals over client results.
                </p>
                <p>
                  We set out to build something different: an agency that holds itself accountable to the same metrics its clients care about—revenue, leads, and genuine business growth.
                </p>
                <p>
                  Since our founding, we've helped businesses across India—from early-stage startups to established enterprises—achieve measurable digital marketing results. Our approach is simple: understand your business deeply, build a strategy grounded in data, execute with precision, and continuously optimise until the numbers move.
                </p>
                <p>
                  Today, Reveal Rank serves clients across 20+ Indian cities and multiple industries, with a team of 30+ certified specialists who are genuinely passionate about digital marketing and the results it can deliver.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "200+", label: "Clients Served" },
                  { value: "300%", label: "Avg. Traffic Growth" },
                  { value: "20+", label: "Cities Covered" },
                  { value: "50+", label: "Industries Served" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#181A1B] border border-[#2a2a2a] rounded-xl p-6 text-center">
                    <div className="text-3xl font-black text-[#4361ee] mb-2">{stat.value}</div>
                    <div className="text-[#888] text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-[#181A1B] border border-[#2a2a2a] rounded-xl p-6">
                <h3 className="text-white font-bold mb-3">Our Mission</h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  To be India&apos;s most trusted performance marketing agency—one that consistently delivers measurable results, operates with complete transparency, and genuinely invests in every client&apos;s long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#101010]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Stand For</h2>
            <p className="text-[#888] text-lg max-w-2xl mx-auto">
              Our values aren&apos;t aspirational—they&apos;re operational. They guide every strategy we build, every campaign we run, and every client relationship we maintain.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-[#181A1B] border border-[#2a2a2a] rounded-2xl p-8">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-white font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-[#888] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Team Behind Your Growth</h2>
            <p className="text-[#888] text-lg max-w-2xl mx-auto">
              Our team of 30+ specialists brings together certified expertise across every dimension of digital marketing—from technical SEO and performance advertising to content creation and web development.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {teamHighlights.map((team) => (
              <div key={team.role} className="bg-[#181A1B] border border-[#2a2a2a] rounded-xl p-6 text-center">
                <div className="text-3xl font-black text-[#4361ee] mb-2">{team.count}</div>
                <div className="text-white font-bold mb-1">{team.role}</div>
                <div className="text-[#666] text-xs">{team.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="py-20 bg-[#101010]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">The Reveal Rank Difference</h2>
          <div className="space-y-6 text-[#aaa] leading-relaxed">
            <p>
              In a market full of agencies promising page-one rankings and overnight results, Reveal Rank takes a different approach. We start every engagement with honest expectations: SEO takes time, quality content takes effort, and real results require sustained investment.
            </p>
            <p>
              What we offer in return is a commitment to genuine, measurable results. We build strategies on what actually works—technical excellence, content authority, and earned backlinks—not shortcuts that erode in the next Google update.
            </p>
            <p>
              Our clients stay with us because they see results. Our average client retention exceeds two years, not because of long-term contracts, but because our work consistently delivers. We measure our success by your growth—nothing else.
            </p>
            <p>
              If you&apos;re looking for an agency that will tell you what you want to hear and produce impressive-looking reports while delivering little actual growth, we&apos;re not the right partner. If you want an agency that operates with complete transparency, builds strategies on data, and holds itself accountable to real business outcomes—we&apos;d love to talk.
            </p>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#4361ee] hover:bg-[#3451de] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
