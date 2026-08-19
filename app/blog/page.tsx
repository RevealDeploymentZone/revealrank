import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "SEO Blog | RevealRank — Guides, Tips & Strategies",
  description: "In-depth SEO guides, technical tutorials, and digital marketing strategies from the RevealRank team. Practical advice that drives real organic growth.",
  alternates: { canonical: "https://www.revealrank.com/blog/" },
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime()
  );

  const tier1 = sorted.filter((p) => p.tier === 1);
  const tier2 = sorted.filter((p) => p.tier === 2);
  const tier3 = sorted.filter((p) => p.tier === 3);
  const tier4 = sorted.filter((p) => p.tier === 4);

  const renderGrid = (posts: typeof blogPosts) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}/`}
          className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
              {post.parentTopic}
            </span>
            <span className="text-xs text-gray-400">{post.readTime} min read</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug mb-3">
            {post.title}
          </h3>
          <p className="text-sm text-gray-500 flex-1 line-clamp-3">{post.excerpt}</p>
          <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400">
            <span>{post.author}</span>
            <span>{new Date(post.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-16">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            SEO Resources & Guides
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Practical SEO strategies, technical guides, and digital marketing insights from RevealRank.
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-16 space-y-16">
        {tier1.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Core SEO Guides</h2>
            {renderGrid(tier1)}
          </section>
        )}
        {tier2.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Technical SEO</h2>
            {renderGrid(tier2)}
          </section>
        )}
        {tier3.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Local SEO & Paid Search</h2>
            {renderGrid(tier3)}
          </section>
        )}
        {tier4.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Advanced Strategies</h2>
            {renderGrid(tier4)}
          </section>
        )}
      </div>
    </main>
  );
}
