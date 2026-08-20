import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "AI Visibility & GEO Services – Rank on ChatGPT, Gemini, Perplexity & More | Reveal Rank",
  description:
    "Generative Engine Optimization (GEO) services that get your brand cited and recommended on ChatGPT, Claude, Gemini, Perplexity, Grok, Google AI Overviews, and every major AI platform. The future of search is here.",
  keywords: [
    "AI visibility",
    "generative engine optimization",
    "GEO",
    "rank on ChatGPT",
    "rank on Gemini",
    "rank on Perplexity",
    "AI search optimization",
    "LLM SEO",
    "AI overview optimization",
    "brand citations AI",
  ],
  alternates: { canonical: "https://www.revealrank.com/ai-visibility/" },
  openGraph: {
    title: "AI Visibility & GEO Services | Reveal Rank",
    description:
      "Get your brand cited and recommended on ChatGPT, Claude, Gemini, Perplexity, Grok, and Google AI Overviews. GEO is the new SEO.",
    url: "https://www.revealrank.com/ai-visibility/",
    siteName: "Reveal Rank",
    type: "website",
  },
};

const platforms = [
  {
    name: "ChatGPT",
    company: "OpenAI",
    icon: "🤖",
    color: "#10a37f",
    users: "200M+ weekly users",
    description:
      "The world's most-used AI assistant. ChatGPT pulls brand recommendations from its training data and live web browsing (GPT-4o). Being cited in high-authority content that OpenAI indexes is the primary lever for visibility here.",
    signals: ["High-authority editorial mentions", "Structured brand data (schema.org)", "Consistent NAP across the web", "Wikipedia and knowledge graph presence"],
    url: "https://openai.com/chatgpt",
  },
  {
    name: "Gemini",
    company: "Google",
    icon: "✨",
    color: "#4285f4",
    users: "1B+ Google ecosystem users",
    description:
      "Google's flagship AI model powers Gemini chat, Google AI Overviews, and Workspace. Gemini draws heavily from Google's index — meaning traditional SEO signals (E-E-A-T, backlinks, structured data) directly influence your Gemini visibility.",
    signals: ["Strong Google E-E-A-T signals", "Rich schema markup", "Google Business Profile optimization", "High-authority backlinks"],
    url: "https://gemini.google.com",
  },
  {
    name: "Google AI Overviews",
    company: "Google Search",
    icon: "🔍",
    color: "#ea4335",
    users: "8.5B+ daily searches",
    description:
      "AI Overviews appear at the top of Google search results and directly answer user queries — pushing traditional blue links further down. Getting cited in AI Overviews requires ranking in the top 10 AND having content structured for AI extraction.",
    signals: ["Featured snippet optimization", "Clear question-and-answer content structure", "Authoritative topical coverage", "Fast Core Web Vitals"],
    url: "https://blog.google/products/search/generative-ai-search/",
  },
  {
    name: "Perplexity",
    company: "Perplexity AI",
    icon: "🔎",
    color: "#6366f1",
    users: "15M+ monthly users",
    description:
      "Perplexity is the fastest-growing AI search engine — it cites sources directly and shows users exactly where its answers came from. Every citation is a brand impression. Perplexity indexes the live web, so real-time SEO authority matters here.",
    signals: ["Real-time indexable content", "Authoritative domain metrics", "Structured, citable factual content", "Regular content publishing cadence"],
    url: "https://www.perplexity.ai",
  },
  {
    name: "Claude",
    company: "Anthropic",
    icon: "🧠",
    color: "#cc785c",
    users: "10M+ users",
    description:
      "Anthropic's Claude excels at research, analysis, and nuanced recommendations. Claude 3.5+ includes web search capability. Brands that dominate authoritative reference content — whitepapers, research, detailed guides — gain disproportionate citation rates in Claude responses.",
    signals: ["Long-form authoritative content", "Research citations and data", "Expert authorship signals", "Editorial mentions in reputable publications"],
    url: "https://www.anthropic.com/claude",
  },
  {
    name: "Grok",
    company: "xAI / X (Twitter)",
    icon: "⚡",
    color: "#1d9bf0",
    users: "50M+ X Premium users",
    description:
      "Grok by Elon Musk's xAI has direct access to real-time X (Twitter) posts and trending conversations. It is uniquely sensitive to social proof and brand mention velocity on X. Active social presence and trending brand mentions directly feed Grok's awareness of your brand.",
    signals: ["Active X (Twitter) presence", "Viral brand mentions and threads", "Real-time news and press coverage", "X Community Notes accuracy"],
    url: "https://grok.com",
  },
  {
    name: "Microsoft Copilot",
    company: "Microsoft / Bing",
    icon: "💠",
    color: "#0078d4",
    users: "1B+ Windows ecosystem",
    description:
      "Microsoft Copilot is powered by GPT-4 and Bing's index. It is deeply integrated into Windows 11, Microsoft 365, Edge, and Teams. Bing SEO — often overlooked — is critical for Copilot visibility, as is being cited in Microsoft-ecosystem publications.",
    signals: ["Bing Webmaster Tools verification", "Microsoft-affiliated publication mentions", "Strong domain authority on Bing", "Structured data for rich results"],
    url: "https://copilot.microsoft.com",
  },
  {
    name: "Meta AI",
    company: "Meta",
    icon: "🌐",
    color: "#0866ff",
    users: "3.2B+ Meta app users",
    description:
      "Meta AI runs inside Facebook, Instagram, WhatsApp, and Messenger — making it the AI with the widest social reach on Earth. It is powered by Llama 3 and references Meta's social graph. Brand presence on Meta platforms and mentions in social content directly improve your visibility.",
    signals: ["Active Facebook and Instagram presence", "Social media review ratings", "Meta Business Suite optimization", "User-generated content mentioning your brand"],
    url: "https://ai.meta.com",
  },
];

const process = [
  {
    step: "01",
    title: "GEO Audit",
    description:
      "We test your brand visibility across all major AI platforms — prompting each one with 50+ queries relevant to your industry and tracking whether your brand appears, where, and how it is described. This establishes your baseline.",
  },
  {
    step: "02",
    title: "Gap & Signal Analysis",
    description:
      "We identify the specific signals each platform is using to generate answers in your category. We map what your top competitors do differently and build a prioritized list of citation, content, and authority gaps.",
  },
  {
    step: "03",
    title: "Content & Authority Build",
    description:
      "We create the authoritative, citable content — structured guides, data-backed articles, expert pages — that AI models pull from. We build the backlink and editorial citation profile that makes your brand the trusted answer.",
  },
  {
    step: "04",
    title: "Technical Optimization",
    description:
      "We implement structured data (schema.org), optimize your llms.txt, clean up entity disambiguation, and ensure your Knowledge Graph presence is accurate and complete across all major platforms.",
  },
  {
    step: "05",
    title: "Monitor & Compound",
    description:
      "We run monthly AI visibility reports — tracking citation rates, sentiment, and share-of-voice across platforms. We iterate and compound gains as AI models update their indexes and training windows.",
  },
];

const faqs = [
  {
    q: "What is Generative Engine Optimization (GEO)?",
    a: "GEO is the practice of optimizing your brand's digital presence so that AI platforms — ChatGPT, Gemini, Perplexity, Grok, Claude, and others — cite, recommend, and positively describe your business when users ask relevant questions. It is the evolution of SEO for the AI search era. Traditional SEO gets you ranked on Google's blue links. GEO gets you mentioned in the AI answer that now appears above those links.",
  },
  {
    q: "How is GEO different from traditional SEO?",
    a: "Traditional SEO optimizes for ranking algorithms — crawlability, backlinks, keyword relevance, page speed. GEO optimizes for language model inference — citation authority, entity clarity, content structure, and cross-platform brand consistency. GEO builds on a strong SEO foundation but adds a layer of AI-specific signals: structured data, entity disambiguation, llms.txt, and editorial citation patterns that LLMs weight heavily.",
  },
  {
    q: "How long does it take to see results on AI platforms?",
    a: "It depends on the platform. Google AI Overviews can respond to content changes within weeks because they pull from Google's live index. ChatGPT and Claude have training cutoffs, meaning changes to your content affect their next training update — typically 3–6 months. Perplexity and Grok, which use live web search, can respond to content and authority improvements within 4–8 weeks. We track all of this and set realistic expectations per platform.",
  },
  {
    q: "Do I need GEO if I already invest in SEO?",
    a: "Yes — and your existing SEO investment creates the foundation. Strong SEO authority directly improves your GEO visibility on Google AI Overviews, Perplexity, and Copilot (Bing). But there are additional GEO-specific signals that SEO alone does not address: entity disambiguation, Knowledge Graph completeness, llms.txt configuration, and citation patterns in AI training data. GEO is SEO's next layer, not its replacement.",
  },
  {
    q: "Which industries benefit most from AI visibility optimization?",
    a: "Any industry where buyers use AI to research before purchasing. This includes B2B software, professional services (legal, accounting, marketing), healthcare, financial services, real estate, e-commerce, and local services. If your prospective customers are asking ChatGPT 'who is the best [your service] in [your city]?' and your brand does not appear — that is qualified demand going to a competitor.",
  },
];

export default function AIVisibilityPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Visibility & Generative Engine Optimization",
    provider: { "@type": "Organization", name: "Reveal Rank", url: "https://www.revealrank.com" },
    description:
      "GEO services that get your brand cited and recommended on ChatGPT, Claude, Gemini, Perplexity, Grok, and Google AI Overviews.",
    areaServed: { "@type": "Country", name: "United States" },
    url: "https://www.revealrank.com/ai-visibility/",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "AI Visibility & GEO", href: "/ai-visibility" },
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gray-950 pt-20 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#4361ee22_0%,_transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#a855f720_0%,_transparent_60%)] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 bg-[#4361ee]/10 border border-[#4361ee]/30 text-[#7b93ff] text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
            <span>🚀</span> New Service — The Future of Search
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] mb-6 max-w-4xl">
            Get Your Brand Found on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4361ee] to-[#a855f7]">
              Every AI Platform
            </span>
          </h1>
          <p className="text-gray-300 text-xl leading-relaxed mb-4 max-w-2xl">
            ChatGPT, Gemini, Perplexity, Claude, Grok, Google AI Overviews — billions of users now get answers from AI, not search results. We optimize your brand to be the answer they get.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-2xl">
            Generative Engine Optimization (GEO) is the fastest-growing discipline in digital marketing. Brands that build AI visibility now will dominate their categories for the next decade. Brands that wait will find themselves invisible to the next generation of buyers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center bg-[#4361ee] hover:bg-[#3451de] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg shadow-blue-900/40"
            >
              Get Free AI Visibility Audit
            </Link>
            <Link
              href="/services/seo-services/"
              className="inline-flex items-center justify-center border border-gray-600 hover:border-[#4361ee] text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all"
            >
              View SEO Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────────────── */}
      <section className="bg-[#4361ee] py-10">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "8", label: "AI Platforms Optimized" },
              { value: "60%", label: "of Searches Now Use AI Answers" },
              { value: "3×", label: "More Qualified Leads via AI Citations" },
              { value: "2026", label: "The Year GEO Became Non-Optional" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-blue-100 text-sm leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What is GEO ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">The New Reality</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                What is Generative Engine Optimization?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When someone asks ChatGPT <em>"What's the best SEO agency in Denver?"</em> or Perplexity <em>"Which digital marketing agency gets results?"</em> — the answer they receive is not a list of blue links. It is a direct recommendation, often with a single brand name or a short list. That recommendation is driven by AI signals, not traditional search rankings.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                GEO is the discipline of optimizing those signals — building the authority, citations, entity clarity, and content structure that causes AI models to cite your brand as the trusted answer. It combines the best of{" "}
                <Link href="/services/seo-services/" className="text-[#4361ee] font-semibold hover:underline">
                  SEO
                </Link>
                ,{" "}
                <Link href="/services/content-marketing/" className="text-[#4361ee] font-semibold hover:underline">
                  content marketing
                </Link>
                , and digital PR — optimized for language model inference rather than keyword matching.
              </p>
              <p className="text-gray-500 leading-relaxed">
                The brands that invest in GEO today are building a competitive moat that will compound for years. Those that ignore it are already losing share-of-voice in the channel that is replacing Google for millions of buyers.
              </p>
            </div>
            <div className="bg-gray-950 rounded-2xl p-8 text-white">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Traditional Search vs. AI Search</p>
              <div className="space-y-4">
                {[
                  { label: "User sees", old: "10 blue links", ai: "1–3 cited answers" },
                  { label: "Ranking signal", old: "Keywords + backlinks", ai: "Authority + entity clarity" },
                  { label: "Click through", old: "~2–5% CTR", ai: "Direct brand citation" },
                  { label: "Optimization lever", old: "On-page SEO", ai: "GEO signals + content structure" },
                  { label: "Update cycle", old: "Weeks to months", ai: "Training windows + live index" },
                ].map((row) => (
                  <div key={row.label} className="grid grid-cols-3 gap-2 text-sm border-b border-gray-800 pb-3">
                    <span className="text-gray-400 font-medium">{row.label}</span>
                    <span className="text-gray-300 text-center">{row.old}</span>
                    <span className="text-[#7b93ff] text-center font-semibold">{row.ai}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Platform Grid ────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Platform Coverage</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Every Major AI Platform. One Strategy.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Each AI platform has different data sources, training signals, and ranking mechanics. We optimize for all of them — so your brand appears wherever your customers are asking.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ backgroundColor: platform.color + "15" }}
                  >
                    {platform.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-black text-gray-900">{platform.name}</h3>
                      <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                        {platform.company}
                      </span>
                    </div>
                    <p className="text-xs font-semibold mt-0.5" style={{ color: platform.color }}>
                      {platform.users}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{platform.description}</p>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Key Ranking Signals</p>
                  <ul className="space-y-1.5">
                    {platform.signals.map((signal) => (
                      <li key={signal} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: platform.color }} />
                        {signal}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Now Section ──────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Why It Matters</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              The Shift That Changes Everything
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              AI search is not a future trend. It is the present reality for hundreds of millions of buyers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "📉",
                title: "Traditional Search CTR Is Falling",
                body: "Google's own AI Overviews answer questions before users scroll to any organic result. Studies show zero-click searches now account for over 60% of all Google queries. If your content is not in the AI answer, you are losing traffic you used to get automatically.",
              },
              {
                icon: "🛍️",
                title: "Buyers Are Asking AI Before Buying",
                body: "\"What's the best CRM for a 10-person team?\" \"Which SEO agency should I hire in 2026?\" — these queries are increasingly going to ChatGPT and Perplexity, not Google. The brand cited in those AI answers gets the call. The brand not cited gets nothing.",
              },
              {
                icon: "⏰",
                title: "First-Mover Advantage is Real",
                body: "AI models develop brand associations from their training data and citation patterns. Brands that build consistent, authoritative presence now get embedded in model weights. Catching up later — after a competitor becomes the default citation — is significantly harder and more expensive.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#f0f4ff] rounded-2xl p-6 border border-[#4361ee]/10">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-black text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-gray-900 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-black mb-3">GEO Builds on Your Existing SEO Investment</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You don't need to choose between SEO and GEO. Strong{" "}
                  <Link href="/services/technical-seo/" className="text-[#7b93ff] hover:underline font-semibold">
                    technical SEO
                  </Link>{" "}
                  and{" "}
                  <Link href="/services/link-building/" className="text-[#7b93ff] hover:underline font-semibold">
                    link building
                  </Link>{" "}
                  directly improve your visibility on Perplexity, Google AI Overviews, and Microsoft Copilot — all of which pull from live web indexes. GEO adds the AI-specific layer on top of that foundation.
                </p>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Our blog post on{" "}
                  <Link href="/blog/llms-txt/" className="text-[#7b93ff] hover:underline">
                    llms.txt — what it is and whether you need one
                  </Link>{" "}
                  explains one of the key technical signals that AI crawlers use to understand your site.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { platform: "Google AI Overviews", seo: "High", geo: "Medium" },
                  { platform: "Perplexity", seo: "High", geo: "Medium" },
                  { platform: "Microsoft Copilot", seo: "Medium", geo: "High" },
                  { platform: "ChatGPT (browsing)", seo: "Medium", geo: "High" },
                  { platform: "Grok", seo: "Low", geo: "High" },
                  { platform: "Claude", seo: "Low", geo: "High" },
                ].map((row) => (
                  <div key={row.platform} className="flex items-center justify-between bg-gray-800 rounded-xl px-4 py-3 text-sm">
                    <span className="text-gray-200 font-medium">{row.platform}</span>
                    <div className="flex gap-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${row.seo === "High" ? "bg-green-900 text-green-300" : row.seo === "Medium" ? "bg-yellow-900 text-yellow-300" : "bg-gray-700 text-gray-400"}`}>
                        SEO: {row.seo}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${row.geo === "High" ? "bg-blue-900 text-blue-300" : "bg-yellow-900 text-yellow-300"}`}>
                        GEO: {row.geo}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Our GEO Process</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              A five-step process built to systematically improve your brand's citation rate across every major AI platform.
            </p>
          </div>
          <div className="space-y-5 max-w-3xl mx-auto">
            {process.map((step, i) => (
              <div key={step.step} className="flex gap-6 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-[#4361ee]/10 flex items-center justify-center font-black text-[#4361ee] text-lg flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-gray-900 font-bold text-lg">{step.title}</h3>
                    {i === 0 && (
                      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">Free</span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Everything You Need to Know About GEO</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="text-gray-900 font-bold text-lg mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Services ─────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <p className="text-center text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-8">GEO Works Best With</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "SEO Services", href: "/services/seo-services/", icon: "🔍" },
              { label: "Technical SEO", href: "/services/technical-seo/", icon: "⚙️" },
              { label: "Content Marketing", href: "/services/content-marketing/", icon: "✍️" },
              { label: "Link Building", href: "/services/link-building/", icon: "🔗" },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-4 py-4 hover:border-[#4361ee]/40 hover:shadow-sm transition-all group"
              >
                <span className="text-xl">{s.icon}</span>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-[#4361ee] transition-colors">
                  {s.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Be the Answer AI Gives Your Customers?"
        subtitle="We'll audit your brand's current AI visibility across all major platforms and show you exactly where you're missing citations — and how to fix it."
        primaryCTA="Get Free AI Visibility Audit"
        primaryHref="/contact/"
      />
    </>
  );
}
