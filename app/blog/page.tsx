import { Metadata } from "next";
import Link from "next/link";
import { blogPosts, BlogPost } from "@/data/blog";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "SEO Blog — Guides, Strategies & Digital Marketing Tips | Reveal Rank",
  description:
    "Free SEO guides, technical tutorials, local SEO strategies, and digital marketing insights from Reveal Rank. Practical advice that drives real organic growth.",
  keywords: ["seo blog", "seo guides", "technical seo", "local seo tips", "digital marketing blog", "revealrank blog"],
  alternates: { canonical: "https://www.revealrank.com/blog/" },
  openGraph: {
    title: "SEO Blog | Reveal Rank — Free SEO Guides",
    description: "In-depth SEO & digital marketing guides from Reveal Rank. Technical SEO, local SEO, link building, Google Ads and more.",
    url: "https://www.revealrank.com/blog/",
    siteName: "Reveal Rank",
    type: "website",
    images: [
      {
        url: "https://www.revealrank.com/blog/opengraph-image/",
        width: 1200,
        height: 630,
        alt: "Reveal Rank SEO Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Blog | Reveal Rank — Free SEO Guides",
    description: "In-depth SEO & digital marketing guides from Reveal Rank.",
    images: ["https://www.revealrank.com/blog/opengraph-image/"],
    site: "@RevealRank",
  },
};

const CATEGORY_COLOR: Record<string, string> = {
  "seo roi": "#4361ee",
  "seo kpis": "#4361ee",
  "local seo": "#16BC4E",
  "technical seo": "#ff531a",
  "link building": "#933ceb",
  "google ads": "#BF249A",
  "content seo": "#ff9f1c",
  default: "#4361ee",
};

function getCategoryColor(topic: string) {
  const lower = topic.toLowerCase();
  for (const key of Object.keys(CATEGORY_COLOR)) {
    if (lower.includes(key)) return CATEGORY_COLOR[key];
  }
  return CATEGORY_COLOR.default;
}

function PostCard({ post }: { post: BlogPost }) {
  const color = getCategoryColor(post.parentTopic);
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group flex flex-col bg-white rounded-2xl border border-gray-100 hover:border-[#4361ee]/30 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 overflow-hidden"
    >
      {/* Color bar */}
      <div className="h-1 w-full" style={{ backgroundColor: color }} />
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-2 mb-4">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full capitalize"
            style={{ backgroundColor: color + "18", color }}
          >
            {post.parentTopic}
          </span>
          <span className="text-xs text-gray-400">{post.readTime} min read</span>
        </div>
        <h3 className="text-[17px] font-bold text-gray-900 group-hover:text-[#4361ee] transition-colors leading-snug mb-3 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
        <div className="mt-5 pt-4 border-t border-gray-50 flex items-center justify-between">
          <span className="text-xs text-gray-400">
            {new Date(post.publishDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="text-xs font-semibold text-[#4361ee] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Read article →
          </span>
        </div>
      </div>
    </Link>
  );
}

const SECTIONS = [
  { label: "Core SEO Guides", tier: 1, icon: "📈", desc: "Fundamentals every business owner needs to understand" },
  { label: "Technical SEO", tier: 2, icon: "⚙️", desc: "Deep-dives for developers and advanced practitioners" },
  { label: "Local SEO & Paid Search", tier: 3, icon: "📍", desc: "Rank locally and run profitable ad campaigns" },
  { label: "Advanced Strategies", tier: 4, icon: "🚀", desc: "Scale your results with advanced tactics and tools" },
];

export default function BlogPage() {
  const allPosts = [...blogPosts].sort(
    (a, b) => new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime()
  );
  const featured = allPosts[0];
  const recent = allPosts.slice(1, 4);

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100 py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 bg-[#4361ee]/10 text-[#4361ee] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-[#4361ee] rounded-full animate-pulse" />
              {blogPosts.length} Free SEO Resources
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-5 leading-[1.1]">
              SEO Knowledge<br />
              <span className="text-[#4361ee]">That Ranks You Higher</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              Practical guides on SEO, technical optimization, local search, and paid advertising — written by the RevealRank team.
            </p>
          </div>

          {/* ── Featured + Recent Row ──────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Featured big card */}
            <Link
              href={`/blog/${featured.slug}/`}
              className="group lg:col-span-2 bg-gradient-to-br from-[#4361ee] to-[#3451de] rounded-2xl p-8 md:p-10 text-white flex flex-col justify-between hover:shadow-2xl hover:shadow-blue-200 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full capitalize">
                    {featured.parentTopic}
                  </span>
                  <span className="text-white/70 text-xs">{featured.readTime} min read</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black leading-snug mb-4 group-hover:text-blue-100 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-blue-100 text-base leading-relaxed line-clamp-3">{featured.excerpt}</p>
              </div>
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/20">
                <span className="text-blue-200 text-sm">
                  {new Date(featured.publishDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </span>
                <span className="font-bold text-white group-hover:translate-x-1 transition-transform">
                  Read guide →
                </span>
              </div>
            </Link>

            {/* Recent 3 mini-cards */}
            <div className="flex flex-col gap-4">
              {recent.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="group bg-white rounded-xl border border-gray-100 p-5 hover:border-[#4361ee]/30 hover:shadow-md transition-all flex gap-4 items-start"
                >
                  <div
                    className="w-1.5 self-stretch rounded-full flex-shrink-0 mt-1"
                    style={{ backgroundColor: getCategoryColor(post.parentTopic) }}
                  />
                  <div className="min-w-0">
                    <span className="text-xs text-gray-400 mb-1 block capitalize">{post.parentTopic}</span>
                    <h3 className="text-sm font-bold text-gray-800 group-hover:text-[#4361ee] transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                    <span className="text-xs text-gray-400 mt-1 block">{post.readTime} min</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────────────── */}
      <section className="bg-gray-900 py-10">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: `${blogPosts.length}`, label: "Free Guides" },
              { value: "4", label: "Topic Areas" },
              { value: "1,500+", label: "Words Per Article" },
              { value: "100%", label: "Free to Read" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-[#4361ee] mb-1">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tier Sections ────────────────────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-16 space-y-20">
        {SECTIONS.map(({ label, tier, icon, desc }) => {
          const posts = allPosts.filter((p) => p.tier === tier);
          if (!posts.length) return null;
          return (
            <section key={tier}>
              <div className="flex items-start justify-between mb-10 flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{icon}</span>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900">{label}</h2>
                  </div>
                  <p className="text-gray-500 ml-12">{desc}</p>
                </div>
                <span className="self-start bg-gray-100 text-gray-600 text-sm font-medium px-3 py-1 rounded-full">
                  {posts.length} articles
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* ── Internal Links Section ────────────────────────────────────── */}
      <section className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">Explore Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: "Technical SEO", href: "/services/technical-seo/", icon: "⚙️" },
              { label: "Local SEO", href: "/services/local-seo/", icon: "📍" },
              { label: "Link Building", href: "/services/link-building/", icon: "🔗" },
              { label: "SEO Content", href: "/services/seo-content/", icon: "✍️" },
              { label: "E-commerce SEO", href: "/services/ecommerce-seo/", icon: "🛒" },
              { label: "PPC Management", href: "/services/ppc-management/", icon: "📊" },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col items-center text-center p-4 rounded-xl bg-gray-50 hover:bg-[#4361ee]/5 hover:border-[#4361ee]/20 border border-transparent transition-all"
              >
                <span className="text-2xl mb-2">{s.icon}</span>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-[#4361ee] transition-colors">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want Us to Do the SEO For You?"
        subtitle="Get a free SEO audit and custom growth strategy from RevealRank."
        primaryCTA="Get a Free SEO Audit"
        primaryHref="/contact/"
      />
    </main>
  );
}
