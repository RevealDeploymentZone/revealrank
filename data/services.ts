export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  features: string[];
  benefits: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  resultStats: { value: string; label: string }[];
}

export const services: Service[] = [
  {
    slug: "seo-services",
    title: "SEO Services",
    shortTitle: "SEO",
    tagline: "Dominate Search Rankings with Data-Driven SEO",
    description:
      "Reveal Rank delivers enterprise-grade SEO strategies that move your website to page one and keep it there. We combine deep technical expertise with content excellence to build sustainable organic growth for your brand.",
    icon: "🔍",
    color: "#4361ee",
    primaryKeyword: "SEO services India",
    secondaryKeywords: [
      "best SEO agency India",
      "search engine optimization company",
      "SEO experts",
      "organic traffic growth",
      "Google ranking services",
    ],
    features: [
      "Comprehensive SEO Audit",
      "Keyword Research & Strategy",
      "On-Page Optimization",
      "Off-Page Link Building",
      "Technical SEO",
      "Content Optimization",
      "Rank Tracking & Reporting",
      "Competitor Analysis",
    ],
    benefits: [
      {
        title: "Sustainable Organic Growth",
        description:
          "Unlike paid ads, SEO builds lasting visibility. Our strategies compound over time, driving increasing traffic without increasing ad spend.",
      },
      {
        title: "High-Intent Traffic",
        description:
          "We target keywords your ideal customers are actively searching, bringing you visitors who are ready to buy.",
      },
      {
        title: "Outrank Your Competitors",
        description:
          "Our competitive analysis pinpoints gaps and opportunities so your site captures market share from underperforming rivals.",
      },
      {
        title: "Measurable ROI",
        description:
          "Every rupee spent on SEO is tracked. We provide clear reporting on rankings, traffic, leads, and revenue impact.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Deep-Dive Audit",
        description:
          "We perform a thorough analysis of your website's current SEO health—technical issues, content gaps, backlink profile, and competitor landscape.",
      },
      {
        step: "02",
        title: "Strategy Development",
        description:
          "Based on audit findings, we build a custom roadmap with target keywords, content plans, and link-building priorities tailored to your goals.",
      },
      {
        step: "03",
        title: "On-Page & Technical Fixes",
        description:
          "We implement meta optimizations, page speed improvements, schema markup, internal linking, and fix crawl errors to make your site fully search-friendly.",
      },
      {
        step: "04",
        title: "Content & Link Building",
        description:
          "We create authoritative content and earn high-quality backlinks from relevant websites to build your domain's trust and authority.",
      },
      {
        step: "05",
        title: "Monitor & Scale",
        description:
          "We track rankings weekly, analyse traffic patterns, and continuously refine tactics to accelerate growth month over month.",
      },
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "Most clients see measurable improvements in rankings and traffic within 3–6 months. Competitive niches may take longer, but results compound strongly after the 6-month mark. We set realistic timelines and provide monthly progress reports.",
      },
      {
        question: "What makes Reveal Rank different from other SEO agencies?",
        answer:
          "We focus exclusively on data-driven, white-hat SEO. No shortcuts, no keyword stuffing. We combine deep technical audits, high-quality content creation, and earned backlinks—a holistic approach that delivers rankings that last.",
      },
      {
        question: "Do you offer local SEO as part of your SEO package?",
        answer:
          "Yes. Every SEO package includes local SEO fundamentals like Google Business Profile optimisation, local citations, and location-specific keyword targeting. We also offer a dedicated Local SEO service for businesses that need deeper local dominance.",
      },
      {
        question: "Will I get regular reports on my SEO progress?",
        answer:
          "Absolutely. You receive detailed monthly reports covering keyword rankings, organic traffic, conversions, backlinks earned, and an action summary of work completed and planned.",
      },
      {
        question: "Can you fix a Google penalty on my website?",
        answer:
          "Yes. We have experience diagnosing and recovering from both manual and algorithmic Google penalties. Our penalty recovery service includes a thorough link audit, disavow file creation, content clean-up, and a reconsideration request where applicable.",
      },
    ],
    resultStats: [
      { value: "300%", label: "Average Traffic Growth" },
      { value: "85%", label: "Clients on Page 1" },
      { value: "6 Months", label: "Average Time to Results" },
      { value: "50+", label: "Industries Served" },
    ],
  },
  {
    slug: "local-seo",
    title: "Local SEO Services",
    shortTitle: "Local SEO",
    tagline: "Be Found by Customers in Your City",
    description:
      "Reveal Rank's local SEO services put your business at the top of Google Maps and local search results, driving foot traffic and local leads that convert to real revenue.",
    icon: "📍",
    color: "#16BC4E",
    primaryKeyword: "local SEO services India",
    secondaryKeywords: [
      "Google Maps SEO",
      "local search optimization",
      "Google Business Profile optimization",
      "near me SEO",
      "local pack ranking",
    ],
    features: [
      "Google Business Profile Optimization",
      "Local Citation Building",
      "NAP Consistency Audits",
      "Review Management",
      "Local Keyword Targeting",
      "Hyperlocal Content Creation",
      "Local Link Building",
      "Map Pack Ranking",
    ],
    benefits: [
      {
        title: "Appear in the Local Pack",
        description:
          "We optimise your Google Business Profile and local signals so you appear in the coveted 3-pack shown at the top of local search results.",
      },
      {
        title: "Attract Ready-to-Buy Customers",
        description:
          "People searching 'near me' have high purchase intent. Local SEO connects you with customers who are ready to visit or call right now.",
      },
      {
        title: "Build Local Reputation",
        description:
          "Our review management strategies help you accumulate positive reviews that build trust and push you above competitors.",
      },
      {
        title: "Consistent Business Information",
        description:
          "We ensure your Name, Address, and Phone number are consistent across 50+ directories, a key ranking factor for local SEO.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Local Audit & Competitor Research",
        description:
          "We audit your current local presence, identify citation gaps, analyse top-ranking competitors in your city and pinpoint quick wins.",
      },
      {
        step: "02",
        title: "GBP Optimisation",
        description:
          "We fully optimise your Google Business Profile—categories, attributes, photos, posts, Q&A, and service listings.",
      },
      {
        step: "03",
        title: "Citation Building & Cleanup",
        description:
          "We build accurate citations on authoritative local directories and fix inconsistencies that hurt your local rankings.",
      },
      {
        step: "04",
        title: "Local Content & Links",
        description:
          "We create location-specific landing pages and acquire links from local news sites, chambers of commerce, and community portals.",
      },
      {
        step: "05",
        title: "Reviews & Reputation",
        description:
          "We implement review request campaigns and monitor your online reputation, responding to reviews and boosting your star rating.",
      },
    ],
    faqs: [
      {
        question: "What is Local SEO and why does my business need it?",
        answer:
          "Local SEO optimises your online presence to appear in searches relevant to your city or region—especially 'near me' searches. It's essential for any business that serves customers in a specific geographic area, from restaurants to law firms to service businesses.",
      },
      {
        question: "How do I rank in Google Maps?",
        answer:
          "Google Maps rankings depend on three factors: relevance (how well your profile matches the search), distance (proximity to the searcher), and prominence (how well-known and reviewed your business is). We optimise all three through GBP setup, citation building, reviews, and local content.",
      },
      {
        question: "How many cities can you target with local SEO?",
        answer:
          "There's no limit. We can build dedicated location pages and local campaigns for each city you serve. Multi-location businesses benefit greatly from our scalable local SEO frameworks.",
      },
      {
        question: "Do I need a physical address to rank locally?",
        answer:
          "A verified physical address is required for the Google Maps 3-pack. Service-area businesses (SABs) can hide their address and still rank for local searches within their service areas.",
      },
    ],
    resultStats: [
      { value: "2x", label: "More Map Pack Appearances" },
      { value: "65%", label: "Increase in Calls & Direction Requests" },
      { value: "40+", label: "Local Directories Covered" },
      { value: "4.7★", label: "Average Client Review Score Achieved" },
    ],
  },
  {
    slug: "technical-seo",
    title: "Technical SEO Services",
    shortTitle: "Technical SEO",
    tagline: "Build the Strongest Technical Foundation for Search",
    description:
      "Your content can't rank if search engines can't crawl and index your site properly. Reveal Rank's technical SEO services fix the hidden issues that silently kill your rankings and unlock your full organic potential.",
    icon: "⚙️",
    color: "#933ceb",
    primaryKeyword: "technical SEO services India",
    secondaryKeywords: [
      "website technical audit",
      "Core Web Vitals optimization",
      "crawl error fixes",
      "page speed optimization",
      "schema markup implementation",
    ],
    features: [
      "Full Technical SEO Audit",
      "Core Web Vitals Optimization",
      "Site Speed Improvements",
      "Crawl & Index Optimization",
      "Schema Markup Implementation",
      "XML Sitemap & Robots.txt",
      "HTTPS & Security Fixes",
      "Mobile-First Optimization",
    ],
    benefits: [
      {
        title: "Faster Website Performance",
        description:
          "We optimize your Core Web Vitals—LCP, FID, and CLS—to meet Google's performance benchmarks and improve both rankings and user experience.",
      },
      {
        title: "Full Crawlability",
        description:
          "We ensure every page you want ranked is discoverable and indexable, eliminating orphan pages, crawl traps, and blocked resources.",
      },
      {
        title: "Structured Data for Rich Results",
        description:
          "We implement schema markup that qualifies your site for rich snippets—FAQs, reviews, products, breadcrumbs—which increase click-through rates.",
      },
      {
        title: "Future-Proof Architecture",
        description:
          "Our technical fixes don't just address today's issues—they build a scalable, clean architecture that supports long-term growth.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Comprehensive Technical Audit",
        description:
          "We crawl your entire site using enterprise tools to identify every technical issue: broken links, duplicate content, slow pages, indexation errors, and more.",
      },
      {
        step: "02",
        title: "Prioritised Fix Plan",
        description:
          "Not all issues are equal. We rank every finding by SEO impact and create a prioritised roadmap with detailed implementation instructions.",
      },
      {
        step: "03",
        title: "Implementation & Collaboration",
        description:
          "We work directly with your development team or implement fixes ourselves, ensuring every change is tracked and tested.",
      },
      {
        step: "04",
        title: "Core Web Vitals Sprint",
        description:
          "We run a focused sprint on page speed, image optimization, render-blocking resources, and server response times to hit green scores.",
      },
      {
        step: "05",
        title: "Ongoing Monitoring",
        description:
          "Technical SEO is not a one-time fix. We set up continuous monitoring to catch new issues before they impact rankings.",
      },
    ],
    faqs: [
      {
        question: "What is Technical SEO?",
        answer:
          "Technical SEO refers to optimizing the infrastructure of your website so search engines can efficiently crawl, render, and index your pages. It covers page speed, mobile usability, site architecture, structured data, security, and more.",
      },
      {
        question: "How do I know if my site has technical SEO problems?",
        answer:
          "Common signs include slow page load times, pages missing from Google's index, crawl errors in Google Search Console, poor Core Web Vitals scores, and duplicate content warnings. Contact us for a free technical audit to identify your specific issues.",
      },
      {
        question: "What are Core Web Vitals?",
        answer:
          "Core Web Vitals are Google's user experience metrics: Largest Contentful Paint (LCP) measures loading speed, Interaction to Next Paint (INP) measures responsiveness, and Cumulative Layout Shift (CLS) measures visual stability. Sites with good scores receive a ranking boost.",
      },
    ],
    resultStats: [
      { value: "60%", label: "Average Page Speed Improvement" },
      { value: "100%", label: "Crawl Error Resolution Rate" },
      { value: "35%", label: "Average CTR Increase via Rich Snippets" },
      { value: "48hrs", label: "Typical Audit Delivery Time" },
    ],
  },
  {
    slug: "ecommerce-seo",
    title: "E-Commerce SEO Services",
    shortTitle: "Ecommerce SEO",
    tagline: "Turn Organic Traffic into E-Commerce Revenue",
    description:
      "Reveal Rank specialises in e-commerce SEO that drives category rankings, product page visibility, and revenue growth for online stores built on Shopify, WooCommerce, Magento, and custom platforms.",
    icon: "🛒",
    color: "#ff9f1c",
    primaryKeyword: "ecommerce SEO services India",
    secondaryKeywords: [
      "Shopify SEO agency",
      "WooCommerce SEO",
      "product page optimization",
      "category page SEO",
      "online store SEO",
    ],
    features: [
      "Product Page Optimization",
      "Category Page SEO",
      "Faceted Navigation Fixes",
      "Product Schema Markup",
      "Competitor Price & SEO Analysis",
      "Seasonal Campaign SEO",
      "Shopify & WooCommerce SEO",
      "Shopping Feed Optimization",
    ],
    benefits: [
      {
        title: "More Product Visibility",
        description:
          "We optimize individual product pages to rank for high-commercial-intent keywords, putting your products in front of buyers at the moment of decision.",
      },
      {
        title: "Dominate Category Rankings",
        description:
          "Category pages drive the most traffic in e-commerce. We build them into authoritative, well-structured pages that own their keyword clusters.",
      },
      {
        title: "Product Rich Snippets",
        description:
          "Schema markup brings price, rating, availability, and review stars directly into search results, dramatically increasing click-through rates.",
      },
      {
        title: "Scalable for Large Catalogues",
        description:
          "Our automated and templated approaches scale to thousands of products, maintaining quality while keeping costs manageable.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Store Audit & Opportunity Mapping",
        description:
          "We audit your store's technical health, keyword rankings, top-performing pages, and identify the biggest revenue opportunities.",
      },
      {
        step: "02",
        title: "Keyword Architecture",
        description:
          "We map keywords to every category, subcategory, and product page—building a logical hierarchy that captures the full buying funnel.",
      },
      {
        step: "03",
        title: "On-Page Optimization",
        description:
          "We rewrite titles, meta descriptions, headings, and product descriptions to be both keyword-rich and conversion-focused.",
      },
      {
        step: "04",
        title: "Schema & Structured Data",
        description:
          "We add Product, Review, BreadcrumbList, and Organisation schema to qualify for rich results and improve SERP appearance.",
      },
      {
        step: "05",
        title: "Authority & Links",
        description:
          "We build editorial backlinks to category and brand pages, increasing domain authority and accelerating ranking across the entire store.",
      },
    ],
    faqs: [
      {
        question: "Which e-commerce platforms do you work with?",
        answer:
          "We work with all major platforms including Shopify, WooCommerce, Magento, OpenCart, BigCommerce, and custom-built stores. Our team is certified on Shopify and WooCommerce.",
      },
      {
        question: "How do you handle SEO for stores with thousands of products?",
        answer:
          "We use templated SEO frameworks, programmatic optimization, and automated meta tag generation to efficiently manage large catalogues—combined with focused manual optimization for high-priority pages.",
      },
      {
        question: "Can you help with Google Shopping?",
        answer:
          "Yes. We optimize your product feed for Google Merchant Centre, including product titles, descriptions, GTIN, pricing, and image quality to maximise Shopping ad and free listing performance.",
      },
    ],
    resultStats: [
      { value: "250%", label: "Average Organic Revenue Growth" },
      { value: "40%", label: "Increase in Product Page Rankings" },
      { value: "3x", label: "More Organic Transactions" },
      { value: "180 Days", label: "Average to Significant ROI" },
    ],
  },
  {
    slug: "link-building",
    title: "Link Building Services",
    shortTitle: "Link Building",
    tagline: "Earn High-Authority Backlinks That Move Rankings",
    description:
      "Reveal Rank's white-hat link building services earn editorial backlinks from authoritative, relevant websites—the single most powerful signal to boost your domain authority and search rankings.",
    icon: "🔗",
    color: "#BF249A",
    primaryKeyword: "link building services India",
    secondaryKeywords: [
      "backlink building agency",
      "white hat link building",
      "domain authority improvement",
      "guest posting services",
      "digital PR links",
    ],
    features: [
      "Digital PR Campaigns",
      "Guest Post Outreach",
      "Broken Link Building",
      "Resource Page Link Building",
      "HARO & Expert Quotes",
      "Competitor Backlink Analysis",
      "Toxic Link Disavow",
      "Link Velocity Management",
    ],
    benefits: [
      {
        title: "Genuine Editorial Links",
        description:
          "Every link we earn is placed editorially in relevant content on real websites with real audiences—never paid placements disguised as earned.",
      },
      {
        title: "Domain Authority Growth",
        description:
          "High-quality backlinks are the fastest way to build domain authority, which raises the ranking ceiling for every page on your site.",
      },
      {
        title: "Industry Relevance",
        description:
          "We target websites in your industry vertical, so links pass maximum relevance signals alongside authority.",
      },
      {
        title: "Fully Transparent Reporting",
        description:
          "You receive a monthly report detailing every new link: source URL, DR, traffic, anchor text, and placement context.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Backlink Profile Analysis",
        description:
          "We audit your existing backlinks to understand your current authority, identify toxic links to disavow, and benchmark against top competitors.",
      },
      {
        step: "02",
        title: "Strategy Selection",
        description:
          "We select the right mix of link building tactics for your industry: digital PR, guest posts, resource pages, broken link building, or niche edits.",
      },
      {
        step: "03",
        title: "Prospect Research",
        description:
          "We research and vet hundreds of link prospects, qualifying them by domain authority, traffic, topical relevance, and editorial standards.",
      },
      {
        step: "04",
        title: "Outreach & Negotiation",
        description:
          "Our outreach specialists pitch editors, journalists, and site owners with compelling, personalised emails that achieve industry-leading response rates.",
      },
      {
        step: "05",
        title: "Delivery & Reporting",
        description:
          "We deliver a guaranteed number of placements each month and provide full transparency on every link earned.",
      },
    ],
    faqs: [
      {
        question: "What is white-hat link building?",
        answer:
          "White-hat link building means earning backlinks through legitimate, editorial means—creating valuable content, building relationships, and earning citations naturally. It contrasts with black-hat methods like link farms, PBNs, and paid placements that violate Google's guidelines.",
      },
      {
        question: "How many links do I need to rank?",
        answer:
          "The number of links needed depends on your niche's competitiveness and the current authority gap between your site and top-ranking competitors. We run a gap analysis to give you a realistic estimate and monthly link targets.",
      },
      {
        question: "What is a good domain authority for a backlink?",
        answer:
          "We primarily target sites with a Domain Rating (DR) of 40+, though highly relevant sites with lower DR can also be valuable. We always prioritise relevance and traffic alongside raw authority metrics.",
      },
    ],
    resultStats: [
      { value: "DR 40+", label: "Average Link Placed" },
      { value: "100%", label: "White-Hat Methods Only" },
      { value: "Monthly", label: "Guaranteed Link Delivery" },
      { value: "30 Days", label: "Average First Link Delivered" },
    ],
  },
  {
    slug: "ppc-advertising",
    title: "PPC Advertising (Google Ads)",
    shortTitle: "PPC / Google Ads",
    tagline: "Maximise Every Rupee of Your Ad Budget",
    description:
      "Reveal Rank's PPC management services deliver high-ROI Google Ads campaigns that bring qualified clicks, lower your cost-per-lead, and scale revenue predictably—without wasted spend.",
    icon: "📈",
    color: "#ff531a",
    primaryKeyword: "PPC advertising agency India",
    secondaryKeywords: [
      "Google Ads management",
      "pay per click services India",
      "Google Ads agency",
      "paid search marketing",
      "SEM agency India",
    ],
    features: [
      "Google Search Ads",
      "Google Shopping Campaigns",
      "Display & Remarketing",
      "YouTube Ads",
      "Performance Max Campaigns",
      "Conversion Tracking Setup",
      "Landing Page Optimization",
      "Budget & Bid Management",
    ],
    benefits: [
      {
        title: "Immediate Visibility",
        description:
          "Unlike SEO, PPC delivers traffic from day one. We set up and launch campaigns that get your brand in front of buyers the moment your budget goes live.",
      },
      {
        title: "Precise Audience Targeting",
        description:
          "We target by keyword, location, device, time of day, demographics, and remarketing lists to show your ads exclusively to high-value audiences.",
      },
      {
        title: "Lower Cost Per Acquisition",
        description:
          "Our continuous optimisation—negative keywords, bid adjustments, ad copy testing—systematically reduces your CPA while increasing conversion volume.",
      },
      {
        title: "Full Funnel Coverage",
        description:
          "From awareness display campaigns to high-intent search ads to cart-abandonment remarketing, we cover every stage of the buyer journey.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit & Account Setup",
        description:
          "We audit existing campaigns (or start fresh), set up accurate conversion tracking, and identify keyword opportunities aligned with your revenue goals.",
      },
      {
        step: "02",
        title: "Campaign Architecture",
        description:
          "We build tightly themed ad groups, write compelling ad copy, create relevant landing pages, and implement audience lists for maximum Quality Score.",
      },
      {
        step: "03",
        title: "Launch & Initial Optimisation",
        description:
          "We launch campaigns, monitor performance daily in the first weeks, and make rapid adjustments to keywords, bids, and placements.",
      },
      {
        step: "04",
        title: "Testing & Scaling",
        description:
          "We run systematic A/B tests on ad copy, landing pages, and audiences—then scale budget into winning combinations.",
      },
      {
        step: "05",
        title: "Reporting & Strategy",
        description:
          "Monthly reports cover impressions, clicks, conversions, cost, and ROAS—with strategic recommendations for the coming month.",
      },
    ],
    faqs: [
      {
        question: "How much should I spend on Google Ads?",
        answer:
          "Minimum effective budgets vary by industry, competition, and goals. For most SMBs in India, a starting budget of ₹30,000–₹1,00,000/month allows meaningful data collection and optimisation. We'll recommend a specific budget after reviewing your goals and market.",
      },
      {
        question: "Do you charge a percentage of ad spend or a flat fee?",
        answer:
          "We charge a transparent monthly management fee, not a percentage of ad spend. This aligns our incentives with yours—we optimise for your ROI, not to inflate your budget.",
      },
      {
        question: "Can you manage campaigns on platforms other than Google?",
        answer:
          "Yes. We also manage Meta (Facebook/Instagram) Ads, LinkedIn Ads, and Microsoft Bing Ads. Ask about our multi-platform paid media packages.",
      },
    ],
    resultStats: [
      { value: "4.2x", label: "Average ROAS Achieved" },
      { value: "35%", label: "Average CPA Reduction" },
      { value: "Day 1", label: "Traffic from Launch" },
      { value: "Weekly", label: "Optimisation Cadence" },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    shortTitle: "Social Media",
    tagline: "Build a Brand People Follow, Trust, and Buy From",
    description:
      "Reveal Rank creates and manages social media strategies that grow your audience, drive engagement, and convert followers into customers across Instagram, Facebook, LinkedIn, and more.",
    icon: "📱",
    color: "#BF249A",
    primaryKeyword: "social media marketing agency India",
    secondaryKeywords: [
      "Instagram marketing services",
      "Facebook marketing agency",
      "LinkedIn marketing India",
      "social media management",
      "brand social media strategy",
    ],
    features: [
      "Social Media Strategy",
      "Content Creation & Scheduling",
      "Community Management",
      "Influencer Partnerships",
      "Paid Social Advertising",
      "Performance Analytics",
      "Brand Voice Development",
      "Reels & Short Video Production",
    ],
    benefits: [
      {
        title: "Consistent Brand Presence",
        description:
          "We maintain a regular posting cadence with on-brand content so your audience always has a reason to follow and engage.",
      },
      {
        title: "Audience Growth",
        description:
          "Through organic tactics and targeted paid promotion, we grow your follower base with real users who match your customer profile.",
      },
      {
        title: "Community & Trust Building",
        description:
          "We respond to comments, manage DMs, and foster genuine conversations that turn followers into loyal brand advocates.",
      },
      {
        title: "Social Commerce Integration",
        description:
          "We set up and optimise Instagram Shopping, Facebook Shop, and product tagging to drive direct purchases from social platforms.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Brand & Audience Audit",
        description:
          "We analyse your current social presence, audience demographics, competitor strategies, and content performance to find gaps and opportunities.",
      },
      {
        step: "02",
        title: "Content Strategy",
        description:
          "We define your content pillars, visual identity, brand voice, and posting schedule—tailored to each platform's algorithm.",
      },
      {
        step: "03",
        title: "Content Production",
        description:
          "Our creative team produces graphics, captions, Reels scripts, and carousel posts—each designed to maximise reach and engagement.",
      },
      {
        step: "04",
        title: "Publishing & Community Management",
        description:
          "We schedule posts at optimal times and actively manage your community—responding to comments and messages within hours.",
      },
      {
        step: "05",
        title: "Analytics & Optimisation",
        description:
          "Monthly analytics reports track follower growth, reach, engagement rate, and conversions, informing continuous content improvements.",
      },
    ],
    faqs: [
      {
        question: "Which social media platforms should my business be on?",
        answer:
          "It depends on your audience and industry. B2C brands typically benefit most from Instagram and Facebook. B2B companies see the best ROI on LinkedIn. We recommend starting with 2–3 platforms where your target customers are most active.",
      },
      {
        question: "How often will you post on my accounts?",
        answer:
          "Typical packages include 3–5 posts per week per platform. We customise frequency based on your industry, goals, and budget. Quality always takes precedence over volume.",
      },
      {
        question: "Do you run paid social ads as part of social media management?",
        answer:
          "Paid social advertising is available as an add-on or as a standalone service. We recommend a minimum ad budget and manage campaigns within our comprehensive social packages.",
      },
    ],
    resultStats: [
      { value: "5x", label: "Average Follower Growth in 6 Months" },
      { value: "8%", label: "Average Engagement Rate" },
      { value: "30+", label: "Posts per Month" },
      { value: "24hr", label: "Community Response Time" },
    ],
  },
  {
    slug: "content-marketing",
    title: "Content Marketing Services",
    shortTitle: "Content Marketing",
    tagline: "Content That Ranks, Attracts, and Converts",
    description:
      "Reveal Rank's content marketing services build your brand authority through strategic, high-quality content that attracts organic traffic, nurtures leads, and drives measurable business growth.",
    icon: "✍️",
    color: "#ff9f1c",
    primaryKeyword: "content marketing agency India",
    secondaryKeywords: [
      "SEO content writing services",
      "blog writing agency",
      "content strategy India",
      "B2B content marketing",
      "website copywriting services",
    ],
    features: [
      "Content Strategy & Planning",
      "SEO Blog Writing",
      "Website Copywriting",
      "Long-Form Guides & Whitepapers",
      "Email Newsletter Content",
      "Product & Category Descriptions",
      "Infographic & Visual Content",
      "Content Distribution",
    ],
    benefits: [
      {
        title: "Rank for Hundreds of Keywords",
        description:
          "A strategic content programme targets informational, navigational, and transactional keywords across the buyer journey—compounding organic traffic month over month.",
      },
      {
        title: "Establish Thought Leadership",
        description:
          "Consistent, expert-level content positions your brand as the go-to authority in your niche, building trust that converts readers to customers.",
      },
      {
        title: "Fuel All Other Marketing Channels",
        description:
          "Great content powers your SEO, social media, email campaigns, and paid ads—multiplying the ROI of your entire marketing investment.",
      },
      {
        title: "Generate and Nurture Leads",
        description:
          "Strategic content placed at each funnel stage captures leads and moves prospects from awareness to decision, reducing your sales cycle.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Content Audit & Gap Analysis",
        description:
          "We audit existing content, identify ranking opportunities, and map content gaps against competitor coverage and keyword demand.",
      },
      {
        step: "02",
        title: "Editorial Calendar",
        description:
          "We build a monthly content calendar with topics, target keywords, formats, and distribution channels—aligned to your business goals.",
      },
      {
        step: "03",
        title: "Expert Content Production",
        description:
          "Our niche-trained writers craft long-form, expert content—minimum 1,500 words per piece—with SEO best practices and a strong human voice.",
      },
      {
        step: "04",
        title: "SEO Optimisation",
        description:
          "Every piece is optimised for its target keyword cluster: title, meta, headings, internal links, schema, and semantic enrichment.",
      },
      {
        step: "05",
        title: "Publish, Promote & Measure",
        description:
          "We publish, promote through outreach and social, and track rankings, traffic, and engagement—using data to refine the next month's plan.",
      },
    ],
    faqs: [
      {
        question: "How many articles will you write per month?",
        answer:
          "Content packages typically start at 4–8 articles per month. Larger content programmes scale to 15–20+ pieces. Volume is balanced with quality—every piece undergoes thorough research, SEO optimisation, and editorial review.",
      },
      {
        question: "What industries do you write content for?",
        answer:
          "Our team has specialist writers in e-commerce, SaaS, healthcare, finance, real estate, legal, education, and hospitality. We onboard new niches with an intensive research phase.",
      },
      {
        question: "Will the content be original and plagiarism-free?",
        answer:
          "Absolutely. Every piece is 100% original, checked with Copyscape, and written by human experts—not AI content spinners. We provide the plagiarism report with every delivery.",
      },
    ],
    resultStats: [
      { value: "400%", label: "Average Organic Traffic Growth" },
      { value: "1500+", label: "Average Words Per Article" },
      { value: "100%", label: "Plagiarism-Free Guarantee" },
      { value: "8 Days", label: "Average Content Delivery Time" },
    ],
  },
  {
    slug: "web-design-development",
    title: "Web Design & Development",
    shortTitle: "Web Development",
    tagline: "Websites Built to Rank, Convert, and Impress",
    description:
      "Reveal Rank builds fast, beautiful, conversion-optimised websites tailored to your brand and business goals—on WordPress, Shopify, or fully custom builds—with SEO baked in from day one.",
    icon: "💻",
    color: "#4361ee",
    primaryKeyword: "web design and development agency India",
    secondaryKeywords: [
      "website development company India",
      "WordPress development agency",
      "Shopify development India",
      "custom website design",
      "responsive web design services",
    ],
    features: [
      "Custom Website Design",
      "WordPress Development",
      "Shopify Store Development",
      "Landing Page Development",
      "Mobile-Responsive Design",
      "Performance Optimization",
      "SEO-Ready Architecture",
      "Website Maintenance & Support",
    ],
    benefits: [
      {
        title: "SEO-First Architecture",
        description:
          "Every site we build starts with SEO in mind: clean code, fast loading, logical URL structure, schema markup, and optimised Core Web Vitals.",
      },
      {
        title: "Conversion-Focused Design",
        description:
          "Beautiful design means nothing if it doesn't convert. We design every element—CTAs, forms, layouts—to guide visitors towards your goals.",
      },
      {
        title: "Speed-Optimised Performance",
        description:
          "We build lightweight, fast-loading websites with scores of 90+ on Google PageSpeed Insights for both mobile and desktop.",
      },
      {
        title: "Scalable & Maintainable",
        description:
          "Our code is clean, documented, and built on proven frameworks so your team can manage updates without needing a developer for every change.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Planning",
        description:
          "We deep-dive into your brand, goals, target audience, and competitive landscape to define the site architecture, design direction, and technology stack.",
      },
      {
        step: "02",
        title: "UI/UX Design",
        description:
          "Our designers create wireframes and high-fidelity mockups in Figma—reviewed and approved by you before a single line of code is written.",
      },
      {
        step: "03",
        title: "Development",
        description:
          "We build your site on the approved platform with clean, semantic HTML, optimised CSS, and a fully responsive layout across all devices.",
      },
      {
        step: "04",
        title: "SEO & Performance Setup",
        description:
          "We configure meta tags, schema markup, sitemap, robots.txt, redirects, and analytics before launch—so your site is found from day one.",
      },
      {
        step: "05",
        title: "Launch & Handover",
        description:
          "We test across browsers and devices, launch to your hosting, train your team on the CMS, and provide post-launch support.",
      },
    ],
    faqs: [
      {
        question: "How long does it take to build a website?",
        answer:
          "A typical 5–10 page business website takes 3–5 weeks. Larger sites with e-commerce or custom features take 6–12 weeks. We provide a detailed timeline during project scoping.",
      },
      {
        question: "Do you work with existing websites or only new builds?",
        answer:
          "Both. We redesign and redevelop existing sites as well as build from scratch. For existing sites, we preserve your SEO equity through proper redirects and URL structure management.",
      },
      {
        question: "Do you provide ongoing website maintenance?",
        answer:
          "Yes. We offer monthly maintenance packages covering software updates, security monitoring, performance checks, content updates, and priority support.",
      },
    ],
    resultStats: [
      { value: "90+", label: "PageSpeed Score (Mobile & Desktop)" },
      { value: "3 Weeks", label: "Average Delivery for SMB Sites" },
      { value: "100%", label: "Mobile-Responsive Guarantee" },
      { value: "2 Years", label: "Average Client Retention" },
    ],
  },
  {
    slug: "conversion-rate-optimization",
    title: "Conversion Rate Optimization (CRO)",
    shortTitle: "CRO",
    tagline: "Get More from the Traffic You Already Have",
    description:
      "Reveal Rank's CRO services systematically increase the percentage of website visitors who take your desired action—sign up, buy, or call—turning your existing traffic into significantly more revenue.",
    icon: "🎯",
    color: "#16BC4E",
    primaryKeyword: "conversion rate optimization services India",
    secondaryKeywords: [
      "CRO agency India",
      "A/B testing services",
      "website conversion optimization",
      "landing page optimization",
      "UX optimization services",
    ],
    features: [
      "Conversion Audit & Analysis",
      "Heatmap & Session Recording",
      "A/B & Multivariate Testing",
      "Landing Page Redesign",
      "Form & Checkout Optimization",
      "User Journey Mapping",
      "Copy & CTA Optimization",
      "Analytics & Funnel Analysis",
    ],
    benefits: [
      {
        title: "More Revenue Without More Spend",
        description:
          "Even a 1% improvement in conversion rate can double your revenue. CRO is the highest-leverage growth lever for businesses with existing traffic.",
      },
      {
        title: "Data-Driven Decisions",
        description:
          "Every change we make is backed by qualitative research (heatmaps, session recordings, user tests) and validated with statistical A/B tests.",
      },
      {
        title: "Identify Revenue Leaks",
        description:
          "We pinpoint exactly where visitors drop off your funnel and what objections prevent them from converting—then fix it systematically.",
      },
      {
        title: "Permanent, Compounding Improvements",
        description:
          "Every test winner is a permanent improvement to your baseline. CRO gains accumulate over time, delivering exponential growth.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Research & Data Collection",
        description:
          "We deploy heatmaps, session recordings, funnel analytics, and user surveys to build a picture of how visitors interact with your site.",
      },
      {
        step: "02",
        title: "Hypothesis Development",
        description:
          "Based on research data, we develop prioritised hypotheses for conversion improvements—ranked by potential impact and implementation effort.",
      },
      {
        step: "03",
        title: "Test Design & Development",
        description:
          "We design A/B test variants (new headlines, CTAs, page layouts, form fields) and implement them using testing tools.",
      },
      {
        step: "04",
        title: "Testing & Statistical Validation",
        description:
          "Tests run until they reach statistical significance (95%+), ensuring results are genuine and reliable before implementing winners.",
      },
      {
        step: "05",
        title: "Implement & Iterate",
        description:
          "Winning variants are implemented permanently, and we begin the next round of testing—continuously iterating towards higher conversion.",
      },
    ],
    faqs: [
      {
        question: "How much traffic do I need for CRO to work?",
        answer:
          "Effective A/B testing typically requires at least 1,000 monthly visitors per page being tested to reach statistical significance in a reasonable time. For lower-traffic sites, we focus on qualitative research, UX improvements, and iterative changes.",
      },
      {
        question: "How long does a typical CRO test take?",
        answer:
          "Most tests run for 2–4 weeks to gather sufficient data. We do not call a test early—statistical rigour prevents false positives that could hurt your conversion rate.",
      },
      {
        question: "What is a good conversion rate for my industry?",
        answer:
          "Average e-commerce conversion rates in India range from 1–3%. B2B lead generation pages typically convert at 3–8%. Our goal is always to beat your industry benchmark—and then keep improving from there.",
      },
    ],
    resultStats: [
      { value: "35%", label: "Average Conversion Rate Improvement" },
      { value: "2x", label: "Revenue from Existing Traffic" },
      { value: "95%", label: "Statistical Confidence Before Deploying" },
      { value: "Monthly", label: "New Tests Launched" },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
