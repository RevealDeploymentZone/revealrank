import type { Metadata } from "next";
import Link from "next/link";
import AIDetectorClient from "./AIDetectorClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Free AI Content Detector — Check If Text Is AI or Human Written | Reveal Rank",
  description:
    "Free AI content detector. Paste any text and see an AI probability score with a full signal breakdown — sentence rhythm, filler vocabulary, AI phrase patterns, and more.",
  keywords: [
    "ai content detector",
    "ai text detector",
    "is this ai written",
    "chatgpt detector",
    "ai or human written checker",
    "detect ai generated content",
    "free ai detector",
    "ai writing checker",
  ],
  alternates: { canonical: "https://www.revealrank.com/tools/ai-detector/" },
  openGraph: {
    title: "Free AI Content Detector | Reveal Rank",
    description: "Check if text is AI-written or human. Full signal breakdown: rhythm analysis, filler vocabulary, AI phrase patterns. Free, no sign-up.",
    url: "https://www.revealrank.com/tools/ai-detector/",
    siteName: "Reveal Rank",
    type: "website",
  },
};

const HOW_IT_WORKS = [
  {
    icon: "📐",
    title: "Sentence rhythm analysis",
    body: "Human writers vary sentence lengths sharply — short punchy sentences mixed with longer ones. AI models default to near-uniform lengths of 15–20 words. Low variance is the most reliable single signal.",
  },
  {
    icon: "🔤",
    title: "Filler vocabulary scan",
    body: "Words like \"leverage\", \"robust\", \"seamless\", \"delve\", \"tapestry\" appear in AI output at rates far above human writing. The detector counts their density across the full text.",
  },
  {
    icon: "🧩",
    title: "AI phrase signatures",
    body: "Specific constructions — \"It's not just X, it's Y\", \"In today's fast-paced world\", \"Let's dive in\" — are fingerprints of AI output. Their presence is a strong positive signal.",
  },
  {
    icon: "🔗",
    title: "Transition word overuse",
    body: "\"Moreover\", \"Furthermore\", \"Additionally\", \"Consequently\" — AI chains paragraphs with these in a way human writers do not. The detector checks both presence and density.",
  },
];

const faqs = [
  {
    q: "How accurate is this detector?",
    a: "No AI detector is 100% accurate — this one included. It analyses writing patterns that correlate strongly with AI output, but a well-edited AI draft or a formulaic human writer can both produce misleading results. Use the score as a signal, not a verdict. The signal breakdown is more useful than the score alone.",
  },
  {
    q: "Does Google penalise AI-written content?",
    a: "No. Google's guidance explicitly states that AI-assisted content is acceptable when it is helpful. The policy that matters is Scaled Content Abuse — generating many pages without adding value. A detector score has no known effect on search rankings.",
  },
  {
    q: "What does the score mean?",
    a: "0–34: the writing patterns are more consistent with human authorship. 35–64: mixed signals — some AI patterns present but not conclusive. 65–100: strong AI writing pattern signals across multiple categories. The breakdown tabs show exactly which signals drove the score.",
  },
  {
    q: "Can I use this to check student work?",
    a: "This tool is designed for marketing and content professionals checking their own drafts. It is not suitable for academic integrity decisions — no detector is. False positives (human text flagged as AI) are a documented problem with all AI detection tools.",
  },
  {
    q: "What is the word limit?",
    a: "2,000 words per submission. For longer pieces, check by section — the detector works best on individual sections anyway, since patterns can shift across a long document.",
  },
  {
    q: "Does this work on non-English text?",
    a: "The signals are calibrated for English. Results on other languages will be unreliable.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AI Content Detector",
  applicationCategory: "WritingApplication",
  operatingSystem: "Web",
  url: "https://www.revealrank.com/tools/ai-detector/",
  description: "Free AI content detector that analyses sentence rhythm, filler vocabulary, and AI phrase signatures to estimate the probability of AI authorship.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Reveal Rank" },
};

export default function AIDetectorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Tools", href: "/tools" },
          { name: "AI Content Detector", href: "/tools/ai-detector" },
        ]}
      />

      {/* ── Hero + Tool ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gray-950 pt-16 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#4361ee15_0%,_transparent_55%)] pointer-events-none" />
        <div className="max-w-[960px] mx-auto px-4 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 bg-[#4361ee]/10 border border-[#4361ee]/30 text-[#7b93ff] text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
            <span>🔍</span> Free Tool — AI Content Detector
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
            AI or human? Check any text.
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-3 max-w-2xl">
            Paste any text and get an AI probability score with a full breakdown — sentence rhythm, filler vocabulary, AI phrase signatures, and flagged sentences.
          </p>
          <p className="text-gray-500 text-sm mb-10">
            Free · No sign-up · No API key needed · Results in under a second
          </p>
          <AIDetectorClient />
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Methodology</p>
            <h2 className="text-3xl font-black text-gray-900 mb-4">How the detector works</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              No black-box model. Four transparent signals, each with its own score.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {HOW_IT_WORKS.map(item => (
              <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-gray-900 font-black text-base mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Limitations ──────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[860px] mx-auto px-4 lg:px-8">
          <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Honest limitations</p>
          <h2 className="text-2xl font-black text-gray-900 mb-5">What this detector cannot do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "Guarantee accuracy",
                body: "A polished AI draft and a formulaic human writer can produce similar pattern scores. The detector signals correlation, not causation.",
              },
              {
                title: "Work on edited AI text",
                body: "If an AI draft has been properly edited — rhythm varied, filler removed — the patterns that trigger detection are gone. The score will be lower.",
              },
              {
                title: "Prove academic dishonesty",
                body: "Detectors have a documented false positive problem. They flag human-written text as AI regularly. Do not use any detector as evidence in an academic context.",
              },
            ].map(item => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5">
                <p className="text-gray-900 font-bold text-sm mb-2">✗ {item.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl font-black text-gray-900">Common questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map(faq => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="text-gray-900 font-bold text-base mb-3">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related ───────────────────────────────────────────────────────────── */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">Related Tools</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "AI Draft Editor",        href: "/tools/ai-draft-editor/" },
              { label: "AI Crawler Checker",     href: "/tools/ai-crawler-checker/" },
              { label: "Domain Rating Checker",  href: "/tools/domain-rating-checker/" },
              { label: "AI Visibility Hub",      href: "/ai-visibility/" },
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="bg-white border border-gray-200 text-gray-600 hover:text-[#4361ee] hover:border-[#4361ee]/30 text-sm font-medium px-4 py-2 rounded-xl transition-all">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
