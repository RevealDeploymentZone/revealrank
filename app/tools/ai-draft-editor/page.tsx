import type { Metadata } from "next";
import Link from "next/link";
import AIDraftEditorClient from "./AIDraftEditorClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "AI Draft Editor — Fix Rhythm, Remove Filler, Flag Vague Claims | Reveal Rank",
  description:
    "Free AI draft editor for marketers. Paste your AI-written copy and get a side-by-side edit: rhythm fixed, filler stripped, unsupported claims flagged. Full change log included.",
  keywords: [
    "ai content editor",
    "why does my ai content sound robotic",
    "how to edit ai written content",
    "ai writing tells",
    "ai content editing checklist",
    "does google penalize ai content",
    "fix ai generated content",
    "ai draft filler words",
  ],
  alternates: { canonical: "https://www.revealrank.com/tools/ai-draft-editor/" },
  openGraph: {
    title: "AI Draft Editor | Reveal Rank",
    description: "Fix rhythm, strip filler vocabulary, and flag unsupported claims in AI-drafted copy. Free, with full change log.",
    url: "https://www.revealrank.com/tools/ai-draft-editor/",
    siteName: "Reveal Rank",
    type: "website",
  },
};

const faqs = [
  {
    q: "Does this make AI content 'undetectable'?",
    a: "No, and it does not claim to. This tool fixes genuine editorial problems — flat rhythm, filler vocabulary, vague claims — because those things make copy worse for readers, not because they affect a detector score. AI detectors are unreliable in both directions and their scores have no known effect on Google rankings. If a tool promises an 'undetectable' score, it is making a claim it cannot verify.",
  },
  {
    q: "Will Google penalise content edited with this tool?",
    a: "Google's guidance is explicit: AI-assisted content is acceptable. The policy that matters is the Scaled Content Abuse policy, which targets generating many pages without adding value — not AI use per se. This tool exists to add value to a draft, not to obscure its origin. Helpfulness is what Google rewards.",
  },
  {
    q: "What is the word limit?",
    a: "1,500 words per submission. For longer pieces, split by section and run each through separately. The editor works best on individual sections rather than full articles anyway — the changes are easier to review.",
  },
  {
    q: "Why does the editor insert [SPECIFIC NEEDED] markers?",
    a: "Because inventing a statistic or example is more damaging than leaving a gap. A fabricated figure on a marketing page is a liability. The marker tells you exactly where your draft makes a claim that would be stronger with real data — and that is information you actually need.",
  },
  {
    q: "Can I use this for academic work?",
    a: "No. This tool is designed for marketing copy: blog posts, landing pages, email campaigns. It is not appropriate for essays, coursework, or any academic submission.",
  },
  {
    q: "How many free edits do I get?",
    a: "Three per email address per day. This keeps the tool free while preventing automated misuse.",
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
  name: "AI Draft Editor",
  applicationCategory: "WritingApplication",
  operatingSystem: "Web",
  url: "https://www.revealrank.com/tools/ai-draft-editor/",
  description: "Fixes rhythm, strips filler vocabulary, and flags unsupported claims in AI-drafted marketing copy.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "Reveal Rank" },
};

const AI_TELLS = [
  {
    name: "Uniform sentence length",
    detail: "AI defaults to sentences of 15–20 words. Human writers vary sharply — a three-word sentence after a long one creates emphasis that AI rarely produces organically.",
    example: { bad: "This approach delivers significant value to your business and helps you achieve your objectives effectively and efficiently.", good: "This gets results. Not because it is clever — because it removes the decision your reader was about to avoid." },
  },
  {
    name: "Filler vocabulary",
    detail: '"Leverage", "robust", "seamless", "delve into", "tapestry of possibilities" — these words appear in AI output far more than in edited human writing. They signal effort without adding meaning.',
    example: { bad: "Leverage our robust, seamless solution to empower your team.", good: "Our tool cuts manual work by half and ships in a day." },
  },
  {
    name: "The It's-not-just-X-it's-Y construction",
    detail: "This is the single most recognisable AI sentence pattern. It sounds like a reveal. It delivers nothing. Readers have started skimming past it.",
    example: { bad: "It's not just a tool — it's a complete solution for your workflow.", good: "It replaces three tools you are already paying for." },
  },
  {
    name: "Vague claims with no evidence",
    detail: 'AI fills gaps with phrases like "significantly improves results" or "drives meaningful growth." These are unfalsifiable. Readers discount them automatically.',
    example: { bad: "Our clients see significant improvements in their key metrics.", good: "Our clients average a 34% drop in bounce rate within 60 days." },
  },
];

const CHECKLIST = [
  { item: "Read it out loud.", detail: "You will hear every place the rhythm stalls. If you run out of breath, the sentence is too long." },
  { item: "Cut the first paragraph.", detail: "AI drafts almost always throat-clear for 50–100 words before making their first real point. Delete the warmup." },
  { item: "Replace every passive with the actor.", detail: 'Who did what? "Results were achieved" tells you nothing. "The team cut load time by 2 seconds" does.' },
  { item: "Add one specific per section.", detail: "A number, a name, a date, a before/after comparison. One per section is the minimum for credibility." },
  { item: "Check every bullet for identical shape.", detail: "If every bullet starts with a verb or every bullet is 8–10 words, vary some of them." },
  { item: "Remove the last sentence of each section.", detail: "AI conclusions restate what was just said. Delete them." },
];

export default function AIDraftEditorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Tools", href: "/tools" },
          { name: "AI Draft Editor", href: "/tools/ai-draft-editor" },
        ]}
      />

      {/* ── Hero + Tool ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gray-950 pt-16 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#4361ee15_0%,_transparent_55%)] pointer-events-none" />
        <div className="max-w-[960px] mx-auto px-4 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 bg-[#4361ee]/10 border border-[#4361ee]/30 text-[#7b93ff] text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
            <span>✍️</span> Free Tool — AI Draft Editor
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
            AI drafts that read like AI drafts — fixed.
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-3 max-w-2xl">
            Paste your AI-written copy. Get it back with rhythm varied, filler stripped, and every vague claim flagged — with a full change log explaining each edit.
          </p>
          <p className="text-gray-500 text-sm mb-10">
            For marketers, not students. This does not promise detector scores. It promises better copy.
          </p>
          <AIDraftEditorClient />
        </div>
      </section>

      {/* ── What makes AI drafts obvious ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">The problem</p>
            <h2 className="text-3xl font-black text-gray-900 mb-4">Why AI drafts read like AI drafts</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              It is not that the grammar is wrong. It is four specific patterns that human editors remove instinctively.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AI_TELLS.map(tell => (
              <div key={tell.name} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="text-gray-900 font-black text-base mb-2">{tell.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{tell.detail}</p>
                <div className="space-y-2">
                  <div className="bg-red-50 border border-red-100 rounded-lg px-4 py-2.5">
                    <p className="text-red-600 text-xs font-bold uppercase tracking-wide mb-1">Before</p>
                    <p className="text-gray-700 text-sm italic">{tell.example.bad}</p>
                  </div>
                  <div className="bg-green-50 border border-green-100 rounded-lg px-4 py-2.5">
                    <p className="text-green-600 text-xs font-bold uppercase tracking-wide mb-1">After</p>
                    <p className="text-gray-700 text-sm">{tell.example.good}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Google actually says ────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[860px] mx-auto px-4 lg:px-8">
          <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Google's actual position</p>
          <h2 className="text-3xl font-black text-gray-900 mb-5">AI content is fine. Scaled content without value is not.</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Google's guidance is direct: AI-assisted content is acceptable when it is helpful. The policy that matters is the <strong>Scaled Content Abuse</strong> policy, introduced in the March 2024 core update. It targets generating many pages without adding value — not the use of AI per se.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The question is not "was this written by AI?" The question is "does this help the person reading it?" Those are different questions, and only the second one affects rankings.
          </p>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-4">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wide mb-3">The distinction that matters</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-red-600 text-xs font-bold uppercase mb-2">Scaled Content Abuse</p>
                <ul className="space-y-1.5">
                  {["Hundreds of AI pages targeting keyword variants", "No original research, data, or editorial judgment", "Content exists to rank, not to inform"].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-red-400 flex-shrink-0 mt-0.5">✗</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-green-600 text-xs font-bold uppercase mb-2">Acceptable AI use</p>
                <ul className="space-y-1.5">
                  {["AI drafts with editorial review and original insight", "Facts, examples and data added by a human", "Content that genuinely answers the reader's question"].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            This tool exists to improve drafts for readers. The flags it inserts — [SPECIFIC NEEDED] — are markers for the editorial work that a human must still do. That is the line between acceptable AI-assisted content and the kind that violates the policy.
          </p>
        </div>
      </section>

      {/* ── Why detectors are unreliable ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[860px] mx-auto px-4 lg:px-8">
          <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Detector reality</p>
          <h2 className="text-3xl font-black text-gray-900 mb-5">Why AI detector scores do not matter for SEO</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {[
              { stat: "False positive", body: "Detectors routinely flag human-written text as AI — including published literature and legal documents. Scores are not reliable signals of origin." },
              { stat: "Not a ranking factor", body: "Google has confirmed it does not use AI detection scores as a ranking input. No credible evidence links detector scores to search performance." },
              { stat: "Target moves", body: "Detectors are trained on existing AI output and lose accuracy as models update. Any 'undetectable' guarantee is valid for weeks at most." },
            ].map(item => (
              <div key={item.stat} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <p className="text-[#4361ee] font-black text-sm mb-2">{item.stat}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Tools that sell detection-evasion are solving a problem that does not exist in SEO — while targeting an audience (students) that has nothing to do with commercial content marketing. The real problem is that AI drafts are often <em>boring and vague</em>. That is what this tool addresses.
          </p>
        </div>
      </section>

      {/* ── Human editing checklist ─────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">After the editor runs</p>
            <h2 className="text-2xl font-black text-gray-900">The checklist a human still needs to run</h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
              No editor — AI or otherwise — replaces the things only you can add.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {CHECKLIST.map((item, i) => (
              <div key={item.item} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-[#4361ee] font-black text-sm flex-shrink-0 mt-0.5">{i + 1}.</span>
                  <div>
                    <p className="text-gray-900 font-bold text-sm mb-1">{item.item}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
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

      {/* ── Related links ────────────────────────────────────────────────────── */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">Related Tools & Resources</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "AI Crawler Checker",      href: "/tools/ai-crawler-checker/" },
              { label: "Domain Rating Checker",   href: "/tools/domain-rating-checker/" },
              { label: "AI Visibility Hub",       href: "/ai-visibility/" },
              { label: "AI Citation Programme",   href: "/ai-citation-programme/" },
              { label: "Content Marketing",       href: "/services/content-marketing/" },
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
