import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Contact Reveal Rank – Get a Free SEO Audit & Strategy",
  description:
    "Get in touch with Reveal Rank for a free SEO audit and digital marketing strategy. We help businesses across India grow through data-driven SEO, PPC, and content marketing.",
  alternates: { canonical: "https://www.revealrank.com/contact" },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Reveal Rank",
  url: "https://www.revealrank.com/contact",
  description: "Contact Reveal Rank for a free SEO audit and digital marketing strategy consultation.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@revealrank.com",
    availableLanguage: ["English", "Hindi"],
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />

      <section className="py-20 bg-[#101010]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Let&apos;s Grow Your Business
              </h1>
              <p className="text-[#aaa] text-lg leading-relaxed mb-8">
                Ready to dominate search rankings and grow your business? Tell us about your goals and we&apos;ll deliver a free, no-obligation digital marketing strategy within 24 hours.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  {
                    icon: "✅",
                    title: "Free SEO Audit",
                    body: "A comprehensive analysis of your website's technical health, keyword rankings, and growth opportunities.",
                  },
                  {
                    icon: "📊",
                    title: "Competitor Analysis",
                    body: "See exactly how you stack up against your top competitors and where the biggest opportunities lie.",
                  },
                  {
                    icon: "🗺️",
                    title: "Custom Growth Roadmap",
                    body: "A prioritised action plan with specific recommendations tailored to your industry, goals, and budget.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#4361ee]/10 border border-[#4361ee]/20 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">{item.title}</h3>
                      <p className="text-[#888] text-sm">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#181A1B] border border-[#2a2a2a] rounded-xl p-6">
                <h3 className="text-white font-bold mb-4">Contact Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[#4361ee]">📧</span>
                    <a href="mailto:hello@revealrank.com" className="text-[#aaa] hover:text-white transition-colors">
                      hello@revealrank.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#4361ee]">🌐</span>
                    <span className="text-[#aaa]">www.revealrank.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#4361ee]">🕐</span>
                    <span className="text-[#aaa] text-sm">Response within 24 business hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-[#181A1B] border border-[#2a2a2a] rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Get Your Free Proposal</h2>
                <form className="space-y-5" action="mailto:hello@revealrank.com" method="POST" encType="text/plain">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#888] text-sm font-medium mb-2">First Name *</label>
                      <input
                        type="text"
                        name="first_name"
                        required
                        className="w-full bg-[#101010] border border-[#2a2a2a] focus:border-[#4361ee] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                        placeholder="Rahul"
                      />
                    </div>
                    <div>
                      <label className="block text-[#888] text-sm font-medium mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="last_name"
                        required
                        className="w-full bg-[#101010] border border-[#2a2a2a] focus:border-[#4361ee] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                        placeholder="Sharma"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#888] text-sm font-medium mb-2">Business Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-[#101010] border border-[#2a2a2a] focus:border-[#4361ee] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                      placeholder="rahul@yourbusiness.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[#888] text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full bg-[#101010] border border-[#2a2a2a] focus:border-[#4361ee] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-[#888] text-sm font-medium mb-2">Website URL</label>
                    <input
                      type="url"
                      name="website"
                      className="w-full bg-[#101010] border border-[#2a2a2a] focus:border-[#4361ee] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                      placeholder="https://yourbusiness.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[#888] text-sm font-medium mb-2">Primary Service Interest</label>
                    <select
                      name="service"
                      className="w-full bg-[#101010] border border-[#2a2a2a] focus:border-[#4361ee] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option value="seo">SEO Services</option>
                      <option value="local-seo">Local SEO</option>
                      <option value="ppc">PPC / Google Ads</option>
                      <option value="social">Social Media Marketing</option>
                      <option value="content">Content Marketing</option>
                      <option value="web">Web Design & Development</option>
                      <option value="cro">Conversion Rate Optimisation</option>
                      <option value="other">Other / Full Package</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#888] text-sm font-medium mb-2">Monthly Budget (INR)</label>
                    <select
                      name="budget"
                      className="w-full bg-[#101010] border border-[#2a2a2a] focus:border-[#4361ee] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    >
                      <option value="">Select budget range...</option>
                      <option value="10k-25k">₹10,000 – ₹25,000</option>
                      <option value="25k-50k">₹25,000 – ₹50,000</option>
                      <option value="50k-100k">₹50,000 – ₹1,00,000</option>
                      <option value="100k+">₹1,00,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#888] text-sm font-medium mb-2">Tell us about your goals</label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full bg-[#101010] border border-[#2a2a2a] focus:border-[#4361ee] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
                      placeholder="Describe your business, current challenges, and what you want to achieve..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#4361ee] hover:bg-[#3451de] text-white font-bold py-4 rounded-xl text-lg transition-all hover:scale-[1.02]"
                  >
                    Get My Free Proposal →
                  </button>
                  <p className="text-[#555] text-xs text-center">
                    No spam. No commitment. Response within 24 business hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
