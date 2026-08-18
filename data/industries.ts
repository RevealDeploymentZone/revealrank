export interface Industry {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  challenges: string[];
  solutions: { title: string; description: string }[];
  services: string[];
  faqs: { question: string; answer: string }[];
  stats: { value: string; label: string }[];
}

export const industries: Industry[] = [
  {
    slug: "ecommerce",
    name: "E-Commerce",
    icon: "🛒",
    tagline: "Drive More Sales from Every Channel",
    description:
      "Reveal Rank powers e-commerce growth through full-funnel digital strategies—covering SEO, paid ads, CRO, and social commerce—built specifically for online retail brands competing in India's fast-growing e-commerce market.",
    challenges: [
      "Intense competition from Amazon, Flipkart, and direct-to-consumer brands",
      "Rising customer acquisition costs across paid channels",
      "High cart abandonment rates and poor conversion optimisation",
      "Thin margins making ad spend efficiency critical",
      "Managing SEO for large product catalogues",
    ],
    solutions: [
      {
        title: "Category & Product SEO",
        description:
          "We build and optimise category pages and product listings to rank for high-intent commercial keywords, driving organic revenue at zero marginal cost.",
      },
      {
        title: "Google Shopping Optimisation",
        description:
          "We optimise your product feed, bidding strategy, and ROAS targets to make Google Shopping your highest-performing paid channel.",
      },
      {
        title: "Conversion Rate Optimisation",
        description:
          "We use heatmaps, A/B testing, and UX analysis to systematically improve your add-to-cart, checkout, and purchase rates.",
      },
      {
        title: "Retention & Email Marketing",
        description:
          "We implement post-purchase flows, abandoned cart sequences, and loyalty campaigns that maximise customer lifetime value.",
      },
    ],
    services: [
      "Ecommerce SEO",
      "Google Shopping Ads",
      "Conversion Rate Optimization",
      "Social Commerce",
      "Email Marketing",
      "Technical SEO",
    ],
    faqs: [
      {
        question: "Can you help with Shopify SEO?",
        answer:
          "Yes. Shopify is our most-worked platform. We handle everything from theme optimisation and URL structure to product schema, app audits, and speed improvements specific to Shopify's architecture.",
      },
      {
        question: "How do you handle SEO for seasonal products?",
        answer:
          "We build evergreen category pages that maintain authority year-round, then amplify them with targeted content and paid ads during peak seasons—ensuring you capture demand the moment it spikes.",
      },
    ],
    stats: [
      { value: "250%", label: "Average Organic Revenue Growth" },
      { value: "3x", label: "More Organic Transactions" },
      { value: "4.2x", label: "Average ROAS on Google Shopping" },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "🏥",
    tagline: "Connect Patients with Your Practice Online",
    description:
      "Reveal Rank's healthcare digital marketing strategies help hospitals, clinics, doctors, and health-tech companies build online authority, rank for medical queries, and acquire new patients ethically and effectively.",
    challenges: [
      "Strict Google YMYL (Your Money, Your Life) standards for medical content",
      "High competition for patient-facing keywords from large hospital networks",
      "Building E-E-A-T (Experience, Expertise, Authority, Trust) for medical content",
      "Managing online reputation and patient reviews",
      "Patient privacy compliance (HIPAA, IT Act) in digital campaigns",
    ],
    solutions: [
      {
        title: "YMYL-Compliant Medical Content",
        description:
          "We create medically accurate, expertly reviewed content that satisfies Google's highest standards for health-related topics—building rankings and patient trust simultaneously.",
      },
      {
        title: "Local Medical SEO",
        description:
          "We optimise Google Business Profiles, local citations, and 'doctor near me' keyword targeting to connect patients searching locally to your practice.",
      },
      {
        title: "Reputation Management",
        description:
          "We implement systems to proactively gather positive patient reviews and manage your online reputation across Google, Practo, and Justdial.",
      },
      {
        title: "Healthcare PPC",
        description:
          "We run compliant, targeted Google Ads campaigns for appointment bookings—targeting specific conditions, procedures, and geographic areas.",
      },
    ],
    services: [
      "Medical SEO",
      "Local SEO",
      "Content Marketing",
      "Reputation Management",
      "PPC Advertising",
      "Social Media",
    ],
    faqs: [
      {
        question: "Do you understand medical SEO compliance requirements?",
        answer:
          "Yes. Our healthcare content specialists are trained in YMYL guidelines, E-E-A-T requirements, and ethical medical marketing standards. All content is fact-checked and appropriate disclaimers are included.",
      },
      {
        question: "Can you help a single-doctor clinic as well as large hospitals?",
        answer:
          "Absolutely. We serve solo practitioners, multi-specialty clinics, hospital chains, and health-tech platforms. Our packages scale from individual practitioners to enterprise hospital networks.",
      },
    ],
    stats: [
      { value: "200%", label: "Average New Patient Enquiry Growth" },
      { value: "4.8★", label: "Average Google Rating Achieved" },
      { value: "60%", label: "Reduction in Cost Per Patient Acquisition" },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "🏢",
    tagline: "Generate High-Quality Property Leads Online",
    description:
      "Reveal Rank's real estate digital marketing strategies help developers, brokers, and property portals generate qualified leads, dominate local property searches, and build lasting brand authority in India's competitive real estate market.",
    challenges: [
      "Intense competition from 99acres, MagicBricks, and Housing.com",
      "High cost-per-lead in real estate paid advertising",
      "Long sales cycles requiring sustained nurturing strategies",
      "Hyper-local targeting needs across multiple project locations",
      "Building trust with high-value buyers through digital channels",
    ],
    solutions: [
      {
        title: "Project-Specific Landing Pages",
        description:
          "We build SEO-optimised, conversion-focused landing pages for each project—targeting location, property type, and buyer intent keywords.",
      },
      {
        title: "Real Estate Local SEO",
        description:
          "We dominate 'flats for sale in [city]', 'property near [landmark]', and 'builder in [city]' searches through targeted local SEO campaigns.",
      },
      {
        title: "Lead Generation Campaigns",
        description:
          "We run high-ROI Google Ads and Meta campaigns targeting in-market property buyers with compelling creatives and optimised landing pages.",
      },
      {
        title: "Content & Virtual Tours",
        description:
          "We create neighbourhood guides, investment analysis content, and virtual tour SEO that attracts buyers researching properties online.",
      },
    ],
    services: [
      "Local SEO",
      "PPC Advertising",
      "Landing Page Optimization",
      "Content Marketing",
      "Social Media",
      "Video SEO",
    ],
    faqs: [
      {
        question: "Can you generate leads for under-construction projects?",
        answer:
          "Yes. We specialise in pre-launch and under-construction project marketing—building anticipation, capturing early interest, and maintaining lead pipelines throughout the construction period.",
      },
      {
        question: "Do you work with both developers and individual brokers?",
        answer:
          "Yes. We have tailored packages for large real estate developers, boutique agencies, and individual brokers—each designed to maximise ROI at the appropriate scale.",
      },
    ],
    stats: [
      { value: "3x", label: "More Qualified Property Leads" },
      { value: "40%", label: "Lower Cost Per Lead vs. Portals" },
      { value: "5x", label: "More Location Page Traffic" },
    ],
  },
  {
    slug: "education",
    name: "Education",
    icon: "🎓",
    tagline: "Attract More Students to Your Institution",
    description:
      "Reveal Rank helps educational institutions, EdTech platforms, coaching centres, and universities attract students through search, build brand authority, and convert prospective students into enrolments.",
    challenges: [
      "High competition from established universities and EdTech giants",
      "Seasonal enrollment windows requiring precise campaign timing",
      "Targeting both students and parents with different messaging",
      "Building credibility and outcome-based trust online",
      "Managing reputation across review platforms",
    ],
    solutions: [
      {
        title: "Course & Program SEO",
        description:
          "We optimise individual course and program pages for high-intent searches like 'MBA colleges in Delhi' or 'online coding courses India'—capturing students at the decision stage.",
      },
      {
        title: "EdTech Content Strategy",
        description:
          "We build content hubs around educational topics that attract organic traffic—positioning your institution as the go-to learning authority.",
      },
      {
        title: "Enrollment Campaign Management",
        description:
          "We plan and execute paid search and social campaigns timed to application seasons—maximising enrollment during peak admission periods.",
      },
      {
        title: "Alumni & Review Marketing",
        description:
          "We build review strategies and alumni success story content that builds social proof and drives new student trust.",
      },
    ],
    services: [
      "SEO Services",
      "PPC Advertising",
      "Content Marketing",
      "Social Media Marketing",
      "Local SEO",
      "Reputation Management",
    ],
    faqs: [
      {
        question: "Can you help with international student recruitment?",
        answer:
          "Yes. We run international SEO and targeted paid campaigns for institutions seeking students from South Asia, the Middle East, and beyond—with location-specific landing pages and multilingual content where needed.",
      },
      {
        question: "Do you work with both online and offline education providers?",
        answer:
          "Yes. We serve traditional universities, coaching institutes, professional training centres, and EdTech platforms equally—adapting strategies to each model.",
      },
    ],
    stats: [
      { value: "180%", label: "Increase in Prospective Student Enquiries" },
      { value: "55%", label: "Reduction in Cost Per Enrollment" },
      { value: "4x", label: "More Organic Course Page Traffic" },
    ],
  },
  {
    slug: "hospitality",
    name: "Hospitality & Travel",
    icon: "✈️",
    tagline: "Fill More Rooms, Book More Tables",
    description:
      "Reveal Rank's hospitality digital marketing strategies help hotels, restaurants, resorts, and travel agencies increase direct bookings, reduce OTA dependency, and build loyal customer bases through targeted SEO, content, and paid campaigns.",
    challenges: [
      "OTA dependency eroding profit margins with 15–25% commission fees",
      "Competition from global booking platforms like Booking.com and MakeMyTrip",
      "Seasonal demand requiring flexible marketing strategies",
      "Building positive online reputation across TripAdvisor, Google, and Zomato",
      "Converting website visitors to direct bookings",
    ],
    solutions: [
      {
        title: "Direct Booking SEO",
        description:
          "We optimise hotel and restaurant websites to rank for 'hotel in [city]' and 'best restaurant in [area]' searches—driving direct bookings that bypass OTA commissions.",
      },
      {
        title: "Google Hotels Optimisation",
        description:
          "We optimise your Google Hotel profile and implement Hotel Ads campaigns to compete with OTAs directly in Google's hotel booking interface.",
      },
      {
        title: "Travel Content Marketing",
        description:
          "We create destination guides, local experience content, and travel blogs that attract organic traffic from travellers planning their trips.",
      },
      {
        title: "Review & Reputation Management",
        description:
          "We build proactive review generation systems and manage your reputation on TripAdvisor, Google, Zomato, and social media platforms.",
      },
    ],
    services: [
      "Local SEO",
      "SEO Services",
      "PPC Advertising",
      "Content Marketing",
      "Social Media",
      "Reputation Management",
    ],
    faqs: [
      {
        question: "How do you help hotels reduce OTA dependency?",
        answer:
          "We combine direct booking SEO, Google Hotel Ads, email remarketing to past guests, and loyalty programme promotion to shift the booking mix towards direct channels—typically saving 15–20% in commission costs.",
      },
      {
        question: "Can you manage seasonal campaign planning?",
        answer:
          "Absolutely. We plan campaigns 3–6 months ahead of peak seasons, building content authority early and launching paid campaigns at the precise moment demand begins to rise.",
      },
    ],
    stats: [
      { value: "40%", label: "Increase in Direct Bookings" },
      { value: "25%", label: "Reduction in OTA Dependency" },
      { value: "300%", label: "ROI on Travel Content Investment" },
    ],
  },
  {
    slug: "legal",
    name: "Legal Services",
    icon: "⚖️",
    tagline: "Attract High-Value Clients to Your Law Firm",
    description:
      "Reveal Rank helps law firms, advocates, and legal consultancies attract high-value clients through specialised legal SEO, authoritative content marketing, and targeted local campaigns—built around India's unique legal marketing landscape.",
    challenges: [
      "Bar Council of India restrictions on advertising",
      "High competition for keywords like 'lawyer in [city]' and 'legal advice India'",
      "Building E-E-A-T authority for legal content that satisfies Google's YMYL standards",
      "Targeting clients by specific practice area and location",
      "Long consideration cycles requiring sustained trust-building content",
    ],
    solutions: [
      {
        title: "Practice Area SEO",
        description:
          "We create authoritative, compliance-sensitive content for each practice area—corporate law, family law, IP, criminal law—targeting the high-intent searches clients make when they need legal help.",
      },
      {
        title: "Local Legal SEO",
        description:
          "We optimise for location-specific queries like 'property lawyer in Bangalore' or 'divorce advocate Delhi'—connecting you with clients in your immediate geography.",
      },
      {
        title: "Legal Knowledge Content",
        description:
          "We build comprehensive legal guides and FAQs that demonstrate expertise, rank for informational queries, and position your firm as the trusted authority clients consult first.",
      },
      {
        title: "Reputation & Review Management",
        description:
          "We help you build and manage your firm's online reputation—gathering client testimonials and managing your presence on Justdial, Google, and legal directories.",
      },
    ],
    services: ["SEO Services", "Local SEO", "Content Marketing", "Reputation Management", "Technical SEO"],
    faqs: [
      {
        question: "Are there restrictions on marketing for lawyers in India?",
        answer:
          "Yes. The Bar Council of India has rules governing legal advertising. Our legal marketing strategies are fully compliant—focusing on informational content, organic SEO, and reputation building rather than direct advertising.",
      },
      {
        question: "How long does legal SEO take to generate client enquiries?",
        answer:
          "Legal SEO typically shows meaningful results in 4–8 months, as legal keywords are competitive. However, local SEO for less competitive markets can show results faster. We set clear, realistic expectations from the start.",
      },
    ],
    stats: [
      { value: "150%", label: "Increase in Client Enquiries" },
      { value: "Top 3", label: "Google Rankings for Practice Area Keywords" },
      { value: "4.9★", label: "Average Google Rating Achieved" },
    ],
  },
  {
    slug: "finance",
    name: "Finance & Banking",
    icon: "💰",
    tagline: "Build Trust and Grow Assets Under Management",
    description:
      "Reveal Rank's financial services digital marketing helps banks, NBFCs, wealth managers, insurance companies, and fintech platforms build credibility, capture high-intent financial queries, and acquire customers at scale.",
    challenges: [
      "SEBI and RBI compliance requirements for financial advertising",
      "Extreme competition for high-CPC financial keywords",
      "Building trust for YMYL financial content",
      "Long consideration cycles for high-value financial products",
      "Educating consumers about complex financial products",
    ],
    solutions: [
      {
        title: "Compliance-First Financial Content",
        description:
          "We create SEBI/RBI-compliant financial content with appropriate disclaimers, expert attribution, and factual accuracy—satisfying both regulators and Google's YMYL standards.",
      },
      {
        title: "Financial Query SEO",
        description:
          "We rank for high-intent financial searches—'best mutual fund India', 'home loan rates', 'term insurance comparison'—capturing prospects at peak decision moments.",
      },
      {
        title: "Fintech Product Marketing",
        description:
          "We build digital acquisition funnels for fintech products using targeted content, App Store Optimisation, and performance marketing campaigns.",
      },
      {
        title: "Trust Building Content",
        description:
          "We develop educational content—investment guides, calculators, market analysis—that builds audience trust and positions your brand as the credible financial authority.",
      },
    ],
    services: ["SEO Services", "Content Marketing", "PPC Advertising", "Technical SEO", "Social Media"],
    faqs: [
      {
        question: "How do you handle compliance for financial marketing?",
        answer:
          "Our financial content specialists are trained on SEBI advertising guidelines, IRDAI regulations, and RBI compliance requirements. All content is reviewed for regulatory compliance before publication.",
      },
      {
        question: "Can you help with App Store Optimisation for fintech apps?",
        answer:
          "Yes. We offer ASO services for both Google Play Store and Apple App Store—optimising title, keywords, description, screenshots, and review management to increase downloads.",
      },
    ],
    stats: [
      { value: "200%", label: "Increase in Financial Query Rankings" },
      { value: "50%", label: "Reduction in Customer Acquisition Cost" },
      { value: "8x", label: "Content Marketing ROI" },
    ],
  },
  {
    slug: "technology",
    name: "Technology & SaaS",
    icon: "💻",
    tagline: "Grow Your SaaS or IT Business with Precision Marketing",
    description:
      "Reveal Rank helps technology companies, SaaS platforms, IT service firms, and software startups build pipeline through inbound marketing, product-led SEO, and targeted demand generation campaigns.",
    challenges: [
      "Long and complex B2B sales cycles requiring multi-touch marketing",
      "Educating market about new technology categories",
      "High competition for B2B software keywords from global players",
      "Building product-led growth through organic channels",
      "Generating MQLs and SQLs at scale within budget constraints",
    ],
    solutions: [
      {
        title: "Product-Led SEO",
        description:
          "We build SEO strategies around your product's use cases, integrations, and alternatives—capturing bottom-of-funnel traffic from prospects actively evaluating software.",
      },
      {
        title: "B2B Content Funnel",
        description:
          "We build a full content funnel—awareness blogs, comparison pages, case studies, ROI calculators—that moves prospects from first touch to sales-ready.",
      },
      {
        title: "Technical SEO for Complex Platforms",
        description:
          "SaaS platforms have unique technical SEO challenges. We handle JavaScript rendering, crawl budget optimisation, and product schema for software businesses.",
      },
      {
        title: "B2B Demand Generation",
        description:
          "We run targeted LinkedIn and Google campaigns—webinars, gated content, demo requests—to generate qualified MQLs for your sales team.",
      },
    ],
    services: ["SEO Services", "Content Marketing", "Technical SEO", "PPC Advertising", "Link Building"],
    faqs: [
      {
        question: "Can you help with SaaS G2 and Capterra profile optimisation?",
        answer:
          "Yes. We optimise your G2, Capterra, GetApp, and TrustRadius profiles—including review generation campaigns that improve star ratings and drive profile page traffic.",
      },
      {
        question: "Do you work with early-stage startups as well as scale-ups?",
        answer:
          "Yes. We work with pre-revenue startups establishing early SEO foundations and with Series B+ companies scaling demand generation. Packages are priced appropriately for each stage.",
      },
    ],
    stats: [
      { value: "400%", label: "Increase in Organic MQLs" },
      { value: "60%", label: "Reduction in CAC via Inbound" },
      { value: "10x", label: "Content-Driven Pipeline Growth" },
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
