import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, blogPosts } from "@/data/blog";
import { getBlogContent } from "@/data/blog-content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | RevealRank`,
    description: post.excerpt,
    alternates: { canonical: `https://www.revealrank.com/blog/${slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const content = getBlogContent(slug);
  if (!content) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: post.author },
    datePublished: post.publishDate,
    publisher: {
      "@type": "Organization",
      name: "RevealRank",
      logo: { "@type": "ImageObject", url: "https://www.revealrank.com/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.revealrank.com/blog/${slug}/` },
  };

  // Related posts (same parentTopic or tier)
  const related = blogPosts
    .filter((p) => p.slug !== slug && (p.parentTopic === post.parentTopic || p.tier === post.tier))
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="bg-white min-h-screen">
        {/* Header */}
        <section className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100 py-12">
          <div className="max-w-[800px] mx-auto px-4 lg:px-8">
            <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
              <Link href="/blog/" className="hover:text-blue-600 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-gray-400 capitalize">{post.parentTopic}</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium bg-blue-50 text-blue-700 px-2 py-1 rounded-full capitalize">
                {post.parentTopic}
              </span>
              <span className="text-xs text-gray-400">{post.readTime} min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-gray-500 mb-6">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>By {post.author}</span>
              <span>·</span>
              <time dateTime={post.publishDate}>
                {new Date(post.publishDate).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-[800px] mx-auto px-4 lg:px-8 py-12">
          <article
            className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-code:text-blue-700 prose-code:bg-blue-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Ready to Improve Your SEO?</h3>
            <p className="text-blue-100 mb-6">
              RevealRank helps businesses rank higher, drive more organic traffic, and turn visitors into customers.
            </p>
            <Link
              href="/contact/"
              className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
            >
              Get a Free SEO Audit
            </Link>
          </div>

          {/* Related Posts */}
          {related.length > 0 && (
            <div className="mt-16">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}/`}
                    className="group bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition-colors"
                  >
                    <p className="text-xs text-blue-600 font-medium mb-1 capitalize">{r.parentTopic}</p>
                    <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug">
                      {r.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">{r.readTime} min read</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
