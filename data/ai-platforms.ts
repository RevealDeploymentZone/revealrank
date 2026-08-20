export interface AIPlatform {
  slug: string;
  name: string;
  company: string;
  icon: string;
  color: string;
  users: string;
  tagline: string;
  description: string;
  ranking_signals: string[];
  tactics: { title: string; body: string }[];
  timeline: string;
  faqs: { q: string; a: string }[];
  external_url: string;
  content: string;
}

export const aiPlatforms: AIPlatform[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    company: "OpenAI",
    icon: "🤖",
    color: "#10a37f",
    users: "200M+ weekly users",
    tagline: "Get Your Brand Recommended on ChatGPT",
    description:
      "ChatGPT is the world's most-used AI assistant. When it recommends a brand, that recommendation reaches hundreds of millions of buyers. We optimize the signals that make ChatGPT cite your business as the trusted answer.",
    ranking_signals: [
      "High-authority editorial mentions in major publications",
      "Wikipedia and Wikidata entity presence",
      "Consistent brand information across the web",
      "Organization schema markup on your website",
      "Training data citations in industry-relevant content",
      "Live web authority for GPT-4o browsing mode",
    ],
    tactics: [
      {
        title: "Build Editorial Citations",
        body: "ChatGPT's training data weights content from high-authority publications — think Forbes, industry trade journals, and authoritative directories. Every editorial mention of your brand in a publication that OpenAI has indexed increases the probability that ChatGPT will cite you. We run digital PR campaigns specifically designed to generate citations in the publications that feed ChatGPT's knowledge base.",
      },
      {
        title: "Establish Knowledge Graph Presence",
        body: "OpenAI uses knowledge graphs — including Google's Knowledge Graph and Wikidata — as factual reference databases when generating responses. A brand that appears in these graphs is treated as a verified entity, dramatically increasing citation confidence. We build and maintain your presence across these knowledge bases with accurate, consistent entity data.",
      },
      {
        title: "Optimize for Browsing Mode (GPT-4o)",
        body: "GPT-4o can browse the live web in real time. When users ask ChatGPT to research current businesses and recommendations, it pulls from live URLs. This means your site's authority, freshness, and content structure directly affect what ChatGPT says about you in browsing mode — making technical SEO and link building core inputs to ChatGPT visibility.",
      },
    ],
    timeline: "3–6 months for training data impact; 4–8 weeks for browsing mode improvements",
    faqs: [
      {
        q: "Does ChatGPT use my website directly?",
        a: "In standard (non-browsing) mode, ChatGPT uses its training data, which has a cutoff date. It does not visit your site in real time. In GPT-4o browsing mode, it can access live URLs. Optimizing for both modes requires different strategies — training data authority for standard mode, SEO authority for browsing mode.",
      },
      {
        q: "Can I submit my brand to OpenAI's training data?",
        a: "Not directly. ChatGPT's training data comes from its web crawl (via the Common Crawl dataset and OpenAI's own crawler) and licensed content. The best way to appear is to be cited in the high-quality, publicly accessible content that OpenAI indexes.",
      },
      {
        q: "How does ChatGPT decide which agency to recommend?",
        a: "ChatGPT synthesizes from the pattern of citations in its training data. If multiple high-authority sources mention your agency positively, it builds model confidence. If your competitors appear more frequently in authoritative content, they get recommended instead. Citation frequency and source authority are the primary levers.",
      },
    ],
    external_url: "https://openai.com/chatgpt",
    content: `<h2>Why ChatGPT Visibility Is the Highest-Stakes AI Opportunity</h2>
<p>ChatGPT has fundamentally changed how people research products, services, and companies. With over 200 million weekly users, it processes more commercial queries every day than most search engines handle in a month. When someone asks ChatGPT <em>"What's the best digital marketing agency in [city]?"</em> or <em>"Who should I hire for technical SEO?"</em> — the answer they receive shapes their shortlist. Your brand either appears in that answer, or it doesn't exist for that user.</p>
<p>The stakes are highest in professional services, B2B, healthcare, financial services, and any category where buyers research extensively before purchasing. These are exactly the verticals where ChatGPT has the most influence.</p>

<h2>How ChatGPT Decides What to Recommend</h2>
<p>ChatGPT does not rank brands the way Google does. It does not score you against a rubric or check your backlink count directly. Instead, it synthesizes from patterns in its training data — the enormous corpus of text it was trained on, which includes web pages, publications, books, and licensed content.</p>
<p>When ChatGPT has seen your brand mentioned positively and authoritatively across many high-quality sources, it builds what researchers call a "brand entity association" — a confident, positive representation of what your business does and why it is trusted. Brands with strong entity associations get recommended. Brands that are absent or ambiguously represented in the training data get ignored, even if they are objectively better than the brands that do appear.</p>
<p>There are two modes to optimize for:</p>
<ul>
  <li><strong>Standard mode (knowledge cutoff):</strong> ChatGPT uses its training data. Optimizing here means getting your brand cited in high-authority content before the next training cutoff. This is a longer-term, compounding strategy.</li>
  <li><strong>Browsing mode (GPT-4o):</strong> ChatGPT searches the live web and visits URLs in real time. Live SEO authority — domain strength, content quality, site speed — directly determines what ChatGPT finds and says about you in this mode.</li>
</ul>

<h2>The Specific Signals ChatGPT Uses</h2>
<p>Based on OpenAI's published research on language model training and analysis of ChatGPT citation patterns, several signals consistently predict brand citation rates:</p>
<ul>
  <li><strong>Editorial coverage quality:</strong> Mentions in publications like Forbes, Inc., industry trade journals, and authoritative directories carry more weight than mentions in low-quality blogs or paid placements.</li>
  <li><strong>Citation consistency:</strong> If your brand is described consistently across many sources — same name, same category, same core value proposition — ChatGPT builds a confident entity representation.</li>
  <li><strong>Wikipedia and Wikidata presence:</strong> <a href="https://www.wikidata.org" target="_blank" rel="noopener noreferrer">Wikidata</a> is one of the most heavily weighted knowledge bases in LLM training. A Wikidata entry for your brand, linked to your Wikipedia article if you have one, significantly improves training data confidence.</li>
  <li><strong>Review platform presence:</strong> ChatGPT cites review aggregators like <a href="https://www.g2.com" target="_blank" rel="noopener noreferrer">G2</a>, Clutch, and Google Reviews when recommending service providers. A strong, well-reviewed presence on these platforms is a direct citation source.</li>
</ul>

<h2>What We Do to Improve Your ChatGPT Visibility</h2>
<p>Our ChatGPT optimization program combines <a href="/services/content-marketing/">content marketing</a>, digital PR, and technical brand optimization:</p>
<ul>
  <li>Audit your current ChatGPT citation rate across 50+ relevant queries in your industry</li>
  <li>Identify which competitors appear in responses you don't and reverse-engineer their citation sources</li>
  <li>Run targeted outreach campaigns to earn editorial mentions in ChatGPT-indexed publications</li>
  <li>Build and maintain your Wikidata and Knowledge Graph entity presence</li>
  <li>Optimize your review platform profiles on G2, Clutch, Trustpilot, and Google</li>
  <li>Implement complete Organization schema markup to give ChatGPT machine-readable brand data</li>
  <li>Monitor your citation rate monthly and report on share-of-voice vs. competitors</li>
</ul>
<p>We also integrate this with your broader <a href="/services/seo-services/">SEO strategy</a> so that browsing mode queries are covered by your live domain authority.</p>

<h2>Expected Results Timeline</h2>
<p>Training data improvements take 3–6 months to fully materialize, as they depend on OpenAI's next training update incorporating newly published content. Browsing mode improvements follow standard SEO timelines — 4–8 weeks for strong technical gains, 3–6 months for authority compounding. We track both simultaneously and report on leading indicators (new editorial citations, Knowledge Graph updates) while the full model impact builds.</p>`,
  },
  {
    slug: "gemini",
    name: "Gemini",
    company: "Google",
    icon: "✨",
    color: "#4285f4",
    users: "1B+ Google ecosystem users",
    tagline: "Rank on Google Gemini & AI Overviews",
    description:
      "Google Gemini powers Google's AI chat, AI Overviews in search, and Workspace AI. Because it draws from Google's index, your SEO foundation directly affects your Gemini visibility — but there are additional AI-specific signals we layer on top.",
    ranking_signals: [
      "Google E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)",
      "Featured snippet optimization",
      "Google Business Profile completeness",
      "Structured data and schema markup",
      "High-authority backlink profile",
      "Core Web Vitals and technical SEO",
    ],
    tactics: [
      {
        title: "Win Featured Snippets",
        body: "Google AI Overviews and Gemini answers are strongly correlated with featured snippet ownership. Pages that hold featured snippets for target queries are significantly more likely to be cited in AI Overviews. We optimize your content structure — headers, answer boxes, tables, and lists — specifically to capture featured snippets on your most valuable queries.",
      },
      {
        title: "Build E-E-A-T Signals",
        body: "Google's systems weight Experience, Expertise, Authoritativeness, and Trustworthiness signals heavily when selecting content for AI answers. This means real author credentials, original research, expert citations, and strong domain authority. We audit your E-E-A-T gaps and build a structured program to close them.",
      },
      {
        title: "Optimize Google Business Profile",
        body: "For local and service-area queries, Google Gemini pulls from Google Business Profile data. An incomplete, inconsistent, or unclaimed GBP means you are invisible in Gemini's local AI answers regardless of how strong your website is. We audit and optimize your GBP for AI citation completeness.",
      },
    ],
    timeline: "4–8 weeks for AI Overview improvements; 3–6 months for authority compounding",
    faqs: [
      {
        q: "Is Gemini the same as Google AI Overviews?",
        a: "They are related but distinct. Gemini is Google's AI model, which powers both the Gemini chat product and the AI Overview feature in Google Search. Optimizing for one generally helps the other, but they have slightly different UIs and use cases. AI Overviews appear directly in search results; Gemini chat is a standalone AI assistant.",
      },
      {
        q: "Does my Google Search ranking affect my Gemini visibility?",
        a: "Yes, significantly. Gemini and AI Overviews pull from Google's index, so pages that rank in the top 10 for a query are dramatically more likely to be cited in the AI Overview for that query. Strong SEO is a prerequisite for strong Gemini visibility.",
      },
      {
        q: "What type of content does Gemini prefer to cite?",
        a: "Gemini heavily weights structured, clear, authoritative content. Pages with explicit Q&A formatting, proper heading hierarchy, original data, and strong E-E-A-T signals are cited disproportionately. Thin, keyword-stuffed, or low-E-E-A-T content is filtered out even if it ranks well on some queries.",
      },
    ],
    external_url: "https://gemini.google.com",
    content: `<h2>Why Google Gemini Is the Most Urgent AI Visibility Priority</h2>
<p>Google Gemini is unique among AI platforms because it sits inside the world's most-used search engine. AI Overviews — Gemini-powered answer boxes — now appear above organic results for hundreds of millions of queries daily. This is not a separate product competing with Google Search. This is Google Search, evolved. Your visibility on Gemini is directly tied to your organic search visibility — but optimized differently.</p>
<p>The brands that appear in AI Overviews earn direct visibility to the 8.5 billion daily Google searches without requiring a click. The brands that don't appear lose ground even when they rank on page one, because the AI answer absorbs the attention that used to flow to the top organic results.</p>

<h2>How Gemini and AI Overviews Select Content</h2>
<p>Google's AI Overview system uses a multi-stage process: it first retrieves candidate documents using the standard Google ranking algorithm, then applies a secondary AI ranking to select which content is most suitable for the AI answer. This means:</p>
<ul>
  <li>You must rank in the top 10 to be a candidate for AI Overview citation</li>
  <li>Among top-10 candidates, those with stronger E-E-A-T, better answer structure, and more authoritative citation profiles win the AI citation</li>
  <li>Schema markup, featured snippet optimization, and clear content formatting are the tiebreakers</li>
</ul>
<p>Understanding this two-stage process is critical. Many brands invest in SEO and reach page one, then wonder why they are not cited in AI Overviews. The answer is usually content structure and E-E-A-T — the secondary layer that Gemini applies on top of standard ranking signals.</p>

<h2>The E-E-A-T Framework for Gemini Visibility</h2>
<p>Google's <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer">E-E-A-T guidelines</a> (Experience, Expertise, Authoritativeness, Trustworthiness) are the most direct predictor of AI Overview citation for informational and commercial queries. Each dimension has specific optimization levers:</p>
<ul>
  <li><strong>Experience:</strong> First-hand accounts, case studies, original research — content that demonstrates direct experience with the subject</li>
  <li><strong>Expertise:</strong> Real author credentials, professional certifications, industry recognition</li>
  <li><strong>Authoritativeness:</strong> Backlinks from authoritative sources, mentions in reputable publications, industry rankings</li>
  <li><strong>Trustworthiness:</strong> Accurate NAP data, verified reviews, transparent business information, SSL, privacy policy</li>
</ul>
<p>Our <a href="/services/content-marketing/">content marketing service</a> builds E-E-A-T signals systematically — author bios, original research, expert bylines, and citation-worthy data that earns links and elevates topical authority.</p>

<h2>Local Gemini Visibility: Google Business Profile</h2>
<p>For service area businesses, local retailers, and professionals, Google Gemini's local answers pull directly from Google Business Profile data. When someone asks Gemini <em>"who is the best plumber in Austin?"</em> — the answer comes from GBP data, reviews, and local SEO signals. A well-optimized <a href="/services/local-seo/">local SEO presence</a> is essential for capturing these queries.</p>
<p>We optimize GBP completeness, review strategy, local citation consistency, and the on-page local signals that feed Gemini's local knowledge graph.</p>`,
  },
  {
    slug: "perplexity",
    name: "Perplexity",
    company: "Perplexity AI",
    icon: "🔎",
    color: "#6366f1",
    users: "15M+ monthly users",
    tagline: "Get Cited on Perplexity — the AI Search Engine That Shows Its Sources",
    description:
      "Perplexity is the fastest-growing AI search engine. It cites every source it uses — creating direct brand impressions with every citation. We optimize your domain authority and content structure to become Perplexity's go-to source in your industry.",
    ranking_signals: [
      "Real-time domain authority and backlink strength",
      "Content freshness and publishing frequency",
      "Structured, citable factual content",
      "Page load speed and crawlability",
      "Topical authority depth in your category",
      "Clear, claim-backed writing with data sources",
    ],
    tactics: [
      {
        title: "Build Real-Time Domain Authority",
        body: "Perplexity searches the live web for every query — it does not rely on a training data cutoff. This means your current domain authority, backlink profile, and content freshness directly determine whether you get cited. We build domain authority through editorial link acquisition and content that earns natural citations from authoritative sources.",
      },
      {
        title: "Publish Citable, Factual Content",
        body: "Perplexity weights content that makes clear, sourced, factual claims. Content written in a citation-friendly style — specific statistics, named sources, expert quotes, clear organizational hierarchy — gets cited at dramatically higher rates than generic narrative content. We reformat and create content specifically optimized for Perplexity's extraction patterns.",
      },
      {
        title: "Maximize Crawl Accessibility",
        body: "Perplexity's crawler needs clean access to your content. We audit and fix technical barriers — blocked crawlers in robots.txt, JavaScript rendering issues, slow load times, and paywalled content — that prevent Perplexity from accessing and citing your pages.",
      },
    ],
    timeline: "4–8 weeks for significant citation improvements once authority and content are in place",
    faqs: [
      {
        q: "Does Perplexity use real-time web data?",
        a: "Yes — Perplexity performs a live web search for every query. There is no training data cutoff. This means your current SEO authority and content freshness directly affect your Perplexity visibility, and improvements can be seen within weeks rather than months.",
      },
      {
        q: "How does Perplexity decide which sources to cite?",
        a: "Perplexity's algorithm prioritizes pages that rank well in real-time search results (it uses multiple search indexes), have strong domain authority, load quickly, and contain content that directly answers the query with clear, structured information. Being in the top 5 for a query is the strongest predictor of Perplexity citation.",
      },
      {
        q: "Can Perplexity citations drive direct traffic?",
        a: "Yes — Perplexity shows source links alongside every answer, and users who want to go deeper click through to cited sources. Citation on Perplexity generates direct referral traffic in addition to brand visibility. We track both citation rates and referral traffic from Perplexity in our reporting.",
      },
    ],
    external_url: "https://www.perplexity.ai",
    content: `<h2>Why Perplexity Is the Most Measurable AI Visibility Channel</h2>
<p>Perplexity is unique among AI platforms: it shows its work. Every answer includes the sources it cited, with direct links. This means your Perplexity citation is not just a brand impression — it is a trackable referral link with measurable traffic. Perplexity is the AI platform where visibility is most directly attributable to revenue, making it one of the highest-ROI channels in a GEO strategy.</p>
<p>With 15 million monthly active users growing rapidly, Perplexity is the preferred research tool for a disproportionately high-value audience: educated professionals, researchers, and high-income buyers who use it specifically because they want cited, verifiable answers rather than generic AI responses.</p>

<h2>How Perplexity's Ranking Algorithm Works</h2>
<p>Perplexity performs a live web search for every query using multiple search indexes (including Bing and its own crawler). It then uses its language model to synthesize an answer from the top results. The selection process follows a clear hierarchy:</p>
<ol>
  <li><strong>Query relevance:</strong> Pages that directly address the query topic</li>
  <li><strong>Domain authority:</strong> Higher-authority domains get preferential treatment</li>
  <li><strong>Content structure:</strong> Pages with clear, extractable facts, statistics, and claims get cited more than narrative-only content</li>
  <li><strong>Freshness:</strong> For time-sensitive queries, recently updated pages are preferred</li>
  <li><strong>Accessibility:</strong> Pages that load fast and are fully crawlable</li>
</ol>
<p>The key insight is that Perplexity is essentially an accelerated version of SEO — the same signals matter, but the time horizon is weeks rather than months. A strong <a href="/services/link-building/">link building</a> and <a href="/services/technical-seo/">technical SEO</a> foundation directly translates to Perplexity citations.</p>

<h2>Content Optimization for Perplexity Citations</h2>
<p>Perplexity's extraction model favors content written in a specific style. We optimize your content to match this style without sacrificing readability:</p>
<ul>
  <li><strong>Specific statistics with sources:</strong> Instead of "most businesses use SEO," write "68% of online experiences begin with a search engine (BrightEdge, 2024)."</li>
  <li><strong>Clear question-answer structure:</strong> Headers phrased as questions that the following paragraph directly answers</li>
  <li><strong>Short, declarative sentences for key claims:</strong> Perplexity pulls punchy, citable sentences rather than complex prose</li>
  <li><strong>Named experts and original data:</strong> First-party data and expert quotes are highly citable because they are unique to your content</li>
</ul>
<p>We apply this content style across your key pages through our <a href="/services/content-marketing/">content marketing service</a>, creating a library of Perplexity-optimized reference content that earns citations consistently.</p>`,
  },
  {
    slug: "claude",
    name: "Claude",
    company: "Anthropic",
    icon: "🧠",
    color: "#cc785c",
    users: "10M+ users",
    tagline: "Build Brand Authority That Claude Cites and Recommends",
    description:
      "Claude by Anthropic is trusted for deep research, nuanced analysis, and professional recommendations. Brands cited in authoritative long-form content, original research, and expert publications earn disproportionate Claude visibility.",
    ranking_signals: [
      "Long-form, thoroughly researched content",
      "Original research, data, and statistics",
      "Expert authorship with real credentials",
      "Third-party citations in reputable sources",
      "Consistent factual accuracy across web presence",
      "Professional publication mentions",
    ],
    tactics: [
      {
        title: "Create Original Research",
        body: "Claude is trained on content that cites original data. Publishing original research — surveys, industry reports, unique datasets — makes your brand a primary source that Claude references when synthesizing answers. Original data that gets cited by third parties becomes embedded in the training corpus with your brand name attached.",
      },
      {
        title: "Build Expert Authorship Signals",
        body: "Claude weights expertise signals heavily for professional service recommendations. Real author bios with verifiable credentials, professional certifications, and industry recognition directly improve the confidence with which Claude associates your brand with expertise in your category.",
      },
      {
        title: "Earn Professional Publication Coverage",
        body: "Claude's training data is weighted toward high-quality professional content. Coverage in industry publications, academic citations, and professional association mentions creates the citation pattern that builds Claude's entity association with your brand. We run targeted PR campaigns to earn this coverage.",
      },
    ],
    timeline: "3–6 months for training data visibility; faster for Claude's web-browsing enabled versions",
    faqs: [
      {
        q: "What type of businesses does Claude recommend most readily?",
        a: "Claude tends to recommend businesses and brands that have strong professional credibility signals — verifiable expertise, published thought leadership, industry recognition, and citations by authoritative third parties. It is particularly responsive to brands in professional services, technology, research, and healthcare.",
      },
      {
        q: "Does Claude browse the web?",
        a: "Claude 3.5 Sonnet and newer versions have web search capability when enabled. In standard mode, Claude uses its training data. In search-enabled mode, it references live web content. Both modes benefit from strong brand authority, but they have slightly different optimization requirements.",
      },
      {
        q: "How long does it take Claude to learn about my brand?",
        a: "For training data updates, Claude's knowledge cutoff means new content takes 3–6 months to be reflected. However, if Claude's web search is enabled, improvements to your live web presence can affect responses within weeks. We track both timelines and optimize for both simultaneously.",
      },
    ],
    external_url: "https://www.anthropic.com/claude",
    content: `<h2>Why Claude Is a High-Value AI Visibility Target for B2B and Professional Services</h2>
<p>Claude has developed a reputation as the AI assistant preferred by professionals who need accurate, nuanced, well-researched answers. Its user base skews toward researchers, consultants, executives, and knowledge workers — exactly the buyers that professional services businesses, B2B SaaS companies, and high-value service providers want to reach.</p>
<p>When a C-suite executive asks Claude to recommend an SEO agency, a consulting firm, or a software vendor, the answer they receive is treated as expert-vetted advice. Claude's reputation for accuracy means its recommendations carry significant weight in the buyer's decision process.</p>

<h2>How Claude Builds Brand Associations</h2>
<p>Claude's citation behavior differs from ChatGPT and Perplexity in one important way: it weights expertise and credibility signals more heavily than simple citation frequency. A brand mentioned once in a highly authoritative source — a peer-reviewed paper, a major industry report, a respected professional publication — can carry more weight than dozens of mentions in low-authority content.</p>
<p>This makes Claude an excellent platform for brands that have genuine expertise and can demonstrate it through professional content — even if they are not the highest-volume brand in their space. Niche expertise beats broad but shallow recognition in Claude's citation model.</p>

<h2>The Content Strategy That Builds Claude Visibility</h2>
<p>Effective Claude optimization is fundamentally a content authority strategy:</p>
<ul>
  <li><strong>Publish original research:</strong> Surveys, case studies, and original data make your brand a primary source. When Claude synthesizes answers, it cites the origin of data — making you the named source in AI responses across your industry.</li>
  <li><strong>Build an expert content library:</strong> Comprehensive guides, technical deep-dives, and thought leadership content that demonstrates real expertise. Claude learns brand authority from the depth and accuracy of content, not just the frequency of mentions.</li>
  <li><strong>Earn professional citations:</strong> Get your research cited by industry associations, academic papers, and professional publications. Each professional citation strengthens your expert entity association in Claude's training data.</li>
  <li><strong>Maintain factual accuracy:</strong> Claude's training process penalizes brands associated with inaccurate or misleading information. Consistent accuracy across all your online content — website, press releases, social profiles — builds the trust signals that Claude uses to vet recommendations.</li>
</ul>
<p>Our <a href="/services/content-marketing/">content marketing team</a> specializes in this type of high-authority content production — combining SEO optimization with the depth and accuracy that earns professional citations and builds Claude visibility.</p>`,
  },
  {
    slug: "grok",
    name: "Grok",
    company: "xAI",
    icon: "⚡",
    color: "#1d9bf0",
    users: "50M+ X Premium users",
    tagline: "Build Real-Time Brand Presence on Grok and X",
    description:
      "Grok by Elon Musk's xAI has direct access to real-time X (Twitter) posts. Social mention velocity, trending brand discussions, and X presence directly feed Grok's brand awareness — creating an entirely different optimization channel.",
    ranking_signals: [
      "Active, authoritative X (Twitter) presence",
      "Brand mention velocity on X platform",
      "Real-time news and press coverage",
      "Trending discussions mentioning your brand",
      "Live web authority (Grok also searches the web)",
      "X Community Notes accuracy record",
    ],
    tactics: [
      {
        title: "Build an Authoritative X Presence",
        body: "Grok's unique advantage — and its unique optimization requirement — is its real-time X integration. Brands with active, engaging, authoritative X accounts generate constant fresh data points that Grok uses to understand and recommend them. We develop and execute X content strategies that build genuine follower authority and brand mentions.",
      },
      {
        title: "Generate PR with Social Amplification",
        body: "Grok is uniquely responsive to stories that trend on X. PR coverage that generates X discussion — thought leadership pieces, industry reports, newsworthy announcements — creates the social signal pattern that makes Grok aware of and positive about your brand in real time.",
      },
      {
        title: "Optimize for Web Search",
        body: "In addition to X data, Grok searches the live web. Standard SEO authority — domain strength, content quality, backlinks — applies here. We integrate Grok optimization with your broader SEO and GEO strategy so web-based queries are covered in parallel with social signals.",
      },
    ],
    timeline: "2–4 weeks for X-signal improvements; 4–8 weeks for web authority gains",
    faqs: [
      {
        q: "Does Grok only use X data?",
        a: "No — Grok uses both real-time X data and live web search. Its unique differentiator is the X data layer, but web-based brand authority also affects its responses. Brands that optimize for both channels get the strongest Grok visibility.",
      },
      {
        q: "Do I need an X account to rank on Grok?",
        a: "You do not strictly need one, but having an active, authoritative X presence significantly amplifies your Grok visibility. Brands that are discussed by others on X — even without their own account — gain some visibility, but a managed brand account creates far more consistent and controllable signal.",
      },
      {
        q: "Is Grok only available to X Premium subscribers?",
        a: "Grok is currently integrated into X Premium, but xAI has indicated plans for broader distribution. Its user base is growing rapidly as xAI expands Grok beyond the X platform. Early optimization now captures first-mover advantage as the platform scales.",
      },
    ],
    external_url: "https://grok.com",
    content: `<h2>Why Grok Is the Most Social AI Platform — and What That Means for Visibility</h2>
<p>Every other AI platform optimizes primarily against web content. Grok has a unique input that none of them share: real-time access to every post on X (formerly Twitter). This gives Grok a live, dynamic view of brand conversations, trending topics, and social proof signals that are invisible to ChatGPT, Gemini, and Claude.</p>
<p>For brands that operate in industries where social conversation moves fast — technology, finance, marketing, media, consumer products — this creates a powerful optimization channel. Being part of the X conversation in your industry is not just a social media strategy; it directly feeds the data that determines what Grok says about your brand.</p>

<h2>The X Signal Layer: How Social Presence Affects Grok Recommendations</h2>
<p>Grok processes X data in real time. When it receives a query about a brand or category, it can access:</p>
<ul>
  <li>Your brand's own X posts and engagement metrics</li>
  <li>Mentions of your brand by other X users</li>
  <li>X threads discussing your category where your brand is referenced</li>
  <li>X Community Notes attached to posts about your brand</li>
  <li>Trending conversations where your brand appears</li>
</ul>
<p>The implication is significant: Grok's brand associations update in near-real-time. A competitor who gets negative X press this week will face Grok headwinds immediately. A brand that generates positive discussions — through thought leadership, customer success stories, or PR coverage that gets amplified on X — benefits from Grok visibility improvements within days.</p>

<h2>Building a Grok-Optimized X Strategy</h2>
<p>An X strategy designed for Grok visibility is distinct from a general social media strategy. The goal is not just follower count or impressions — it is building the specific signal pattern that Grok uses to assess brand authority:</p>
<ul>
  <li><strong>Consistent thought leadership posting:</strong> Regular, substantive posts on your industry topics that generate genuine engagement (replies, quotes, bookmarks) — not just passive likes</li>
  <li><strong>Industry conversation participation:</strong> Engaging with trending topics in your industry where your perspective adds genuine value and gets quoted or referenced</li>
  <li><strong>X Spaces and live audio:</strong> Hosting or participating in X Spaces on industry topics creates high-engagement signals that Grok weights positively</li>
  <li><strong>Influencer and industry partner mentions:</strong> Being mentioned by authoritative voices in your space on X is the X equivalent of a high-authority backlink</li>
</ul>
<p>We integrate X strategy with our broader <a href="/services/content-marketing/">content marketing</a> and PR programs so that the same content that earns web citations also generates X discussions — compounding both GEO channels simultaneously.</p>`,
  },
  {
    slug: "google-ai-overviews",
    name: "Google AI Overviews",
    company: "Google Search",
    icon: "🔍",
    color: "#ea4335",
    users: "8.5B+ daily searches",
    tagline: "Appear in Google AI Overviews — Above Every Organic Result",
    description:
      "Google AI Overviews appear at the very top of search results and directly answer user queries — before users ever see an organic result. Getting cited here is the highest-visibility position in search. We optimize your content to win it.",
    ranking_signals: [
      "Top-10 organic ranking for target queries",
      "Featured snippet ownership",
      "Clear question-and-answer content structure",
      "Strong E-E-A-T signals",
      "Fast Core Web Vitals",
      "Complete structured data markup",
    ],
    tactics: [
      {
        title: "Featured Snippet Optimization",
        body: "Pages that hold featured snippets for a query are cited in AI Overviews for that same query at dramatically higher rates. Featured snippet optimization is the single highest-leverage investment for AI Overview visibility. We audit your keyword landscape, identify snippet opportunities, and restructure content to capture them.",
      },
      {
        title: "Structured Content Architecture",
        body: "Google's AI Overview system extracts answers from well-structured content. This means clear heading hierarchy (H2/H3 for main sections, questions as headers), direct answers immediately following question headers, bullet and numbered lists for multi-part answers, and tables for comparative information. We restructure your existing content and template new content to match this pattern.",
      },
      {
        title: "Core Web Vitals and Technical SEO",
        body: "Google's AI Overview selection applies to top-10 ranked pages. If you are not in the top 10 due to technical barriers — slow load times, mobile usability issues, crawl errors — you are not even a candidate for AI Overview citation. Technical SEO excellence is the prerequisite for all other AI Overview optimization.",
      },
    ],
    timeline: "4–8 weeks for content structure improvements; 2–4 weeks for featured snippet gains on target queries",
    faqs: [
      {
        q: "How is an AI Overview different from a featured snippet?",
        a: "A featured snippet is a static extraction from a single page, shown in a box above organic results. An AI Overview is a synthesized answer generated by Gemini that may draw from multiple sources and appears even more prominently. AI Overviews are more conversational, can cite multiple sources, and use AI to generate a response rather than directly extracting text.",
      },
      {
        q: "Do AI Overviews hurt organic click-through rates?",
        a: "For informational queries, yes — AI Overviews answer questions before users scroll, reducing clicks on organic results. However, being the cited source in an AI Overview creates a brand impression even without a click. For navigational and commercial queries, AI Overviews often drive clicks to cited sources. The strategy depends on the query intent mix for your business.",
      },
      {
        q: "Can I appear in AI Overviews if I'm not ranking in the top 3?",
        a: "Yes — AI Overviews sometimes cite pages ranking 4–10 for a query, especially if those pages have stronger content structure or E-E-A-T signals than higher-ranked pages. However, being in the top 3 dramatically increases your citation probability. Both ranking improvement and content structure optimization are necessary.",
      },
    ],
    external_url: "https://blog.google/products/search/generative-ai-search/",
    content: `<h2>Why Google AI Overviews Are the Most Important SERP Feature of 2026</h2>
<p>No AI platform reaches as many people as Google. With 8.5 billion daily searches, Google's AI Overview feature — which places a Gemini-generated answer at the very top of search results — is the highest-traffic AI visibility opportunity by orders of magnitude. A brand cited in AI Overviews for competitive queries earns visibility at a scale no other AI platform currently matches.</p>
<p>The urgency is heightened by what AI Overviews do to organic traffic. Studies from <a href="https://www.semrush.com" target="_blank" rel="noopener noreferrer">Semrush</a> and other analytics platforms show that organic click-through rates drop significantly on queries where AI Overviews appear. The content that used to drive clicks to your site is now answered before anyone scrolls. The only way to recover that visibility is to be the source cited in the AI Overview itself.</p>

<h2>The Two-Stage Selection Process</h2>
<p>Google uses a two-stage process to select AI Overview content:</p>
<ol>
  <li><strong>Retrieval stage:</strong> Standard Google ranking. Only pages in the top 10 (approximately) are candidates. This means SEO is a prerequisite, not an alternative.</li>
  <li><strong>AI selection stage:</strong> Among top-10 candidates, Gemini selects pages with the best combination of E-E-A-T, content structure, and answer completeness. This is where AI-specific optimization separates winners from also-rans.</li>
</ol>
<p>Most agencies optimize only for stage one (SEO rankings). We optimize for both stages simultaneously — ensuring you rank in the candidate pool AND that your content wins the AI selection within that pool.</p>

<h2>Content Structure for AI Overview Citations</h2>
<p>Google's AI Overview extraction algorithm heavily favors specific content patterns. We audit and reformat your content to match them:</p>
<ul>
  <li><strong>Question headers followed by direct answers:</strong> "What is X? [H2]" → direct 2–3 sentence answer in the following paragraph</li>
  <li><strong>Bulleted lists for multi-part answers:</strong> "5 ways to..." or "Key factors include..." formatted as clean bullet lists</li>
  <li><strong>Tables for comparative data:</strong> Comparing options, pricing tiers, or feature sets in HTML tables</li>
  <li><strong>Short introductory paragraphs:</strong> The first paragraph after each H2 should be a standalone, extractable answer to the section's question</li>
  <li><strong>Clear step-by-step numbered lists:</strong> For process queries, numbered steps are heavily favored over narrative prose</li>
</ul>
<p>These structural patterns are not just AI Overview optimizations — they also improve user experience, increase dwell time, and frequently earn featured snippets, creating a compounding effect across all SEO metrics. Our <a href="/services/technical-seo/">technical SEO team</a> and <a href="/services/content-marketing/">content team</a> implement these changes across your key pages systematically.</p>`,
  },
  {
    slug: "microsoft-copilot",
    name: "Microsoft Copilot",
    company: "Microsoft",
    icon: "💠",
    color: "#0078d4",
    users: "1B+ Windows ecosystem",
    tagline: "Get Recommended by Microsoft Copilot Across Windows and Office 365",
    description:
      "Microsoft Copilot is embedded in Windows 11, Microsoft 365, Edge, and Teams — giving it reach into over a billion devices. Bing SEO and Microsoft-ecosystem signals are the primary levers for Copilot visibility.",
    ranking_signals: [
      "Bing Webmaster Tools verification and optimization",
      "Strong domain authority on Bing's index",
      "Microsoft-affiliated publication mentions",
      "Complete structured data markup",
      "Bing Places for Business accuracy",
      "Edge browser performance metrics",
    ],
    tactics: [
      {
        title: "Bing SEO Optimization",
        body: "Copilot is powered by Bing's index. Bing SEO is structurally similar to Google SEO but has different weighting factors — Bing weights exact-match anchor text, social signals, and domain age more heavily than Google. Many businesses rank significantly worse on Bing than Google due to underinvestment. We run a dedicated Bing SEO audit and optimization to close this gap.",
      },
      {
        title: "Bing Webmaster Tools Setup",
        body: "Bing Webmaster Tools is the direct channel for submitting your site to Bing's index, flagging technical issues, and understanding how Bing crawls your content. Many businesses that optimize aggressively for Google never set up Bing Webmaster Tools at all. We configure it, submit your sitemap, and monitor crawl errors specific to Bing.",
      },
      {
        title: "Microsoft Ecosystem Coverage",
        body: "Copilot responses are influenced by coverage in Microsoft-affiliated content — publications that appear prominently in Bing's index, LinkedIn (a Microsoft company) presence, and Microsoft 365 connected services. For B2B brands targeting enterprise buyers who use Microsoft 365, this is a direct pipeline to decision-makers.",
      },
    ],
    timeline: "4–8 weeks for Bing optimization improvements; faster for Webmaster Tools technical fixes",
    faqs: [
      {
        q: "Is Bing SEO really different from Google SEO?",
        a: "Yes, in meaningful ways. Bing weights social signals (particularly LinkedIn, which Microsoft owns), exact-match anchor text, and older, established domains more heavily. It is also more sensitive to on-page keyword placement and less sophisticated in understanding semantic content than Google. Many businesses rank significantly worse on Bing due to Google-first optimization — which directly hurts their Copilot visibility.",
      },
      {
        q: "Does Microsoft Copilot use GPT-4?",
        a: "Yes — Microsoft Copilot is powered by OpenAI's GPT-4 models under a Microsoft licensing deal, combined with Bing's live search index. This means optimizing for Copilot requires both Bing SEO (for the live search layer) and training data authority (for the GPT-4 layer) — similar to the dual optimization required for ChatGPT.",
      },
      {
        q: "Why should I care about Copilot if I'm a small business?",
        a: "Copilot's reach through Windows 11 and Edge means it is the AI assistant for a huge population of users who have never actively downloaded any AI app — it is just there, built into their devices. For local businesses, service providers, and B2B companies targeting users in enterprise environments, Copilot is the AI platform most likely to be used by default.",
      },
    ],
    external_url: "https://copilot.microsoft.com",
    content: `<h2>The Billion-Device AI Platform That Most Brands Ignore</h2>
<p>Microsoft Copilot does not have the cultural buzz of ChatGPT or the growth narrative of Perplexity. But it has something more valuable for many businesses: passive distribution. It is built into Windows 11, pre-installed in Edge, integrated into Microsoft 365, and accessible in Teams. It reaches over a billion devices without users ever actively downloading an AI app.</p>
<p>For businesses targeting enterprise customers, mid-market companies, or any segment where Microsoft 365 dominates the productivity stack — which is the majority of the corporate world — Copilot is the AI platform closest to their buyers. And most brands are doing nothing to optimize for it.</p>

<h2>How Copilot Uses Both Bing and GPT-4</h2>
<p>Microsoft Copilot has a dual architecture that requires dual optimization:</p>
<ul>
  <li><strong>Bing search layer:</strong> For current events, local business queries, and research tasks, Copilot performs a live Bing search. This means Bing SEO authority directly determines whether you are retrieved as a candidate source.</li>
  <li><strong>GPT-4 knowledge layer:</strong> For factual queries and general knowledge, Copilot draws from OpenAI's GPT-4 training data. The same training data optimization strategies that apply to ChatGPT apply here.</li>
</ul>
<p>The implication: a brand that ranks well on Google but has neglected Bing will be invisible to Copilot's search layer. A brand that has strong training data citations but poor Bing rankings will only be visible for non-search queries. Full Copilot optimization requires both tracks simultaneously.</p>

<h2>Bing SEO: The Underinvested Channel</h2>
<p>Bing holds approximately 10% of global search market share — significant in absolute terms, and disproportionately important in the Microsoft enterprise ecosystem. Yet the vast majority of businesses allocate zero specific resources to Bing optimization, assuming Google SEO automatically transfers. It largely does, but Bing's unique ranking factors create meaningful gaps:</p>
<ul>
  <li><strong>LinkedIn signals:</strong> Bing weights LinkedIn engagement, company page completeness, and professional mentions heavily — because Microsoft owns LinkedIn. A strong LinkedIn presence is a direct Bing ranking signal that has no Google equivalent.</li>
  <li><strong>Exact-match anchor text:</strong> Bing responds more strongly to exact-match anchor text than Google, which has largely moved beyond this signal. Internal linking with exact-match anchors, done carefully, provides Bing-specific ranking gains.</li>
  <li><strong>Domain age and establishment signals:</strong> Bing is more conservative about newer domains. Brands with older, established domains have an easier time ranking on Bing than on Google for competitive terms.</li>
</ul>
<p>We run a full Bing-specific <a href="/blog/seo-audit-checklist/">SEO audit</a> and optimization program in parallel with Google optimization, ensuring your <a href="/services/technical-seo/">technical SEO</a> and content strategy covers both indexes.</p>`,
  },
  {
    slug: "meta-ai",
    name: "Meta AI",
    company: "Meta",
    icon: "🌐",
    color: "#0866ff",
    users: "3.2B+ Meta app users",
    tagline: "Get Recommended by Meta AI Across Facebook, Instagram and WhatsApp",
    description:
      "Meta AI is built into Facebook, Instagram, WhatsApp, and Messenger — the four most-used social apps on Earth. Social presence, review ratings, and Meta Business Suite optimization directly feed Meta AI's brand recommendations.",
    ranking_signals: [
      "Facebook and Instagram business profile completeness",
      "Meta Business Suite optimization",
      "Customer reviews and star ratings on Facebook",
      "User-generated content mentioning your brand",
      "Social engagement rate and community activity",
      "WhatsApp Business profile for service businesses",
    ],
    tactics: [
      {
        title: "Optimize Meta Business Profiles",
        body: "Meta AI draws from Meta's own data ecosystem first — your Facebook page, Instagram business profile, and WhatsApp Business account. An incomplete, inactive, or outdated Meta presence means Meta AI has poor data to work with when recommending your business. We audit and optimize every Meta property for completeness, accuracy, and engagement signals.",
      },
      {
        title: "Build Review Velocity on Facebook",
        body: "For local and service businesses, Meta AI heavily weights Facebook review ratings and review count when generating local recommendations. A business with 500 five-star Facebook reviews is dramatically more likely to be recommended than an equivalent business with 20 reviews. We build systematic review generation processes that comply with Meta's policies.",
      },
      {
        title: "Generate Brand-Positive UGC",
        body: "User-generated content — posts, stories, and tags that mention your brand positively — creates the social graph signal that Meta AI uses to assess community sentiment. We develop UGC campaigns, customer advocacy programs, and community engagement strategies that generate authentic positive mentions at scale.",
      },
    ],
    timeline: "4–8 weeks for Meta profile optimization; 2–4 months for review and UGC program results",
    faqs: [
      {
        q: "What is Meta AI and where does it appear?",
        a: "Meta AI is powered by Meta's Llama 3 model and is integrated directly into Facebook, Instagram, WhatsApp, and Messenger. Users can ask it questions in the search bar or in chat. It appears as a persistent AI assistant across all four platforms, accessible to Meta's 3.2 billion+ active users.",
      },
      {
        q: "Is Meta AI only for consumer businesses?",
        a: "No — B2B brands and professional service providers are increasingly relevant on Meta platforms, particularly through Facebook and LinkedIn (though LinkedIn is Microsoft-owned). Meta AI can be used for professional research as well as consumer recommendations. Any business with a meaningful consumer or SMB audience benefits from Meta AI optimization.",
      },
      {
        q: "Does Meta AI use data from my ads?",
        a: "Meta AI draws from Meta's organic data ecosystem — your page content, reviews, and user mentions — rather than ad data. However, running ads on Meta platforms increases your overall brand visibility on the platform, which can indirectly improve organic brand recognition and UGC generation.",
      },
    ],
    external_url: "https://ai.meta.com",
    content: `<h2>The Largest AI Platform by Reach — and the Most Social</h2>
<p>In raw reach, no AI platform comes close to Meta AI. With 3.2 billion monthly active users across Facebook, Instagram, WhatsApp, and Messenger, Meta AI has passive distribution at a scale that makes ChatGPT's 200 million weekly users look modest. The difference is that Meta AI's users often do not realize they are using AI — it is simply integrated into their existing apps.</p>
<p>This passive distribution is both an opportunity and a challenge. Users who ask Meta AI for a restaurant recommendation, a service provider, or a product suggestion receive an AI-generated answer without consciously opting into AI research. The brand that appears in that answer gets a recommendation inside the most trusted app in its user's daily life.</p>

<h2>Meta AI's Unique Data Advantage — and What It Means for Optimization</h2>
<p>Meta AI has access to data that no other AI platform can touch: Meta's social graph. This includes not just public content but the network structure of who follows whom, what topics communities engage with, and the sentiment of social interactions around brand mentions. When Meta AI assesses a brand, it has a richer social signal set than any other AI platform:</p>
<ul>
  <li>How many people follow your Facebook page vs. your competitors</li>
  <li>What users say about your brand in comments and posts</li>
  <li>Your review rating and review velocity on Facebook</li>
  <li>Whether influencers or community leaders in your space mention you</li>
  <li>Your Instagram engagement rate relative to industry peers</li>
</ul>
<p>Optimizing for Meta AI is fundamentally a social media authority and community building exercise — combined with the completeness and accuracy of your official Meta business profiles.</p>

<h2>The Local Business Opportunity on Meta AI</h2>
<p>For local service businesses — restaurants, salons, contractors, medical practices, retail stores — Meta AI is arguably the highest-priority GEO channel. Local queries like "best pizza near me" or "recommend a dentist in [city]" are extremely common on Facebook, where Meta AI has been most actively deployed for local recommendations.</p>
<p>Meta AI for local recommendations weights three signals most heavily:</p>
<ol>
  <li><strong>Facebook review count and rating:</strong> The most direct local ranking signal on Meta. A business with 200+ 4.5-star reviews gets recommended; a business with 15 reviews gets ignored.</li>
  <li><strong>Business profile completeness:</strong> Hours, address, phone, website, categories, photos — every field completed and accurate improves your visibility in Meta AI local answers.</li>
  <li><strong>Check-ins and user tagging:</strong> Users who check in or tag your business in posts create social proof signals that Meta AI uses to assess popularity and satisfaction.</li>
</ol>
<p>Our <a href="/services/local-seo/">local SEO service</a> includes Meta Business optimization as a core component, ensuring your social proof and profile completeness are maximized for both traditional local search and Meta AI recommendations.</p>`,
  },
];

export function getAIPlatform(slug: string): AIPlatform | undefined {
  return aiPlatforms.find((p) => p.slug === slug);
}
