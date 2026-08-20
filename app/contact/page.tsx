import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Reveal Rank – AI Visibility Audit & SEO Strategy",
  description:
    "Get in touch with Reveal Rank. Start with a $997 AI Visibility Audit or enquire about our SEO, GEO, and AI Citation Programme services for US businesses.",
  alternates: { canonical: "https://www.revealrank.com/contact" },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Reveal Rank",
  url: "https://www.revealrank.com/contact",
  description: "Contact Reveal Rank to start an AI Visibility Audit or discuss SEO and GEO strategy.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "outreach@revealrank.com",
    availableLanguage: ["English"],
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />

      <section className="py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Let&apos;s Talk About Your Growth
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Whether you&apos;re starting with an AI Visibility Audit or ready to discuss a full SEO or GEO retainer — fill in the form and we&apos;ll respond within 24 business hours.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  {
                    icon: "🎯",
                    title: "AI Visibility Audit — $997",
                    body: "60 prompts across 6 AI engines, 3 competitors benchmarked, a full citation-rate baseline, and a prioritised fix list. Credited against month one of any retainer.",
                  },
                  {
                    icon: "📊",
                    title: "Competitor & Gap Analysis",
                    body: "See exactly how your brand stacks up on ChatGPT, Gemini, Perplexity, and Google — and where your competitors are winning citations you should own.",
                  },
                  {
                    icon: "🗺️",
                    title: "Custom GEO & SEO Roadmap",
                    body: "A prioritised action plan covering content, schema, entity, link building, and AI-specific signals — tailored to your industry and budget.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#4361ee]/10 border border-[#4361ee]/20 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-gray-900 font-bold mb-4">Contact Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[#4361ee]">📧</span>
                    <a href="mailto:outreach@revealrank.com" className="text-gray-600 hover:text-[#4361ee] transition-colors">
                      outreach@revealrank.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#4361ee]">🌐</span>
                    <span className="text-gray-600">www.revealrank.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#4361ee]">🕐</span>
                    <span className="text-gray-500 text-sm">Response within 24 business hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
