import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, blogPosts } from "@/data/blog";
import { getBlogContent } from "@/data/blog-content";
import CTASection from "@/components/CTASection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

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
  const ogImageUrl = `https://www.revealrank.com/blog/${slug}/opengraph-image`;
  return {
    title: `${post.title} | Reveal Rank`,
    description: post.excerpt,
    keywords: [post.primaryKeyword, post.parentTopic, "seo", "digital marketing", "revealrank"],
    authors: [{ name: post.author, url: "https://www.revealrank.com/about/" }],
    alternates: { canonical: `https://www.revealrank.com/blog/${slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishDate,
      modifiedTime: post.publishDate,
      authors: [post.author],
      url: `https://www.revealrank.com/blog/${slug}/`,
      siteName: "Reveal Rank",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImageUrl],
      site: "@RevealRank",
      creator: "@RevealRank",
    },
  };
}

const RELATED_SERVICES = [
  { label: "Technical SEO", href: "/services/technical-seo/" },
  { label: "Local SEO", href: "/services/local-seo/" },
  { label: "Link Building", href: "/services/link-building/" },
  { label: "SEO Content", href: "/services/seo-content/" },
  { label: "E-commerce SEO", href: "/services/ecommerce-seo/" },
  { label: "PPC Management", href: "/services/ppc-management/" },
];

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
    author: { "@type": "Organization", name: "Reveal Rank", url: "https://www.revealrank.com" },
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    publisher: {
      "@type": "Organization",
      name: "Reveal Rank",
      logo: { "@type": "ImageObject", url: "https://www.revealrank.com/logo.png" },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.revealrank.com/blog/${slug}/`,
    },
  };

  // Related posts: same parentTopic first, then same tier
  const related = [
    ...blogPosts.filter((p) => p.slug !== slug && p.parentTopic === post.parentTopic),
    ...blogPosts.filter(
      (p) => p.slug !== slug && p.parentTopic !== post.parentTopic && p.tier === post.tier
    ),
  ].slice(0, 3);

  // More posts from blog for sidebar
  const morePosts = blogPosts
    .filter((p) => p.slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${slug}` },
        ]}
      />

      <main className="bg-white min-h-screen">
        {/* ── Post Hero ─────────────────────────────────────────────── */}
        <section className="bg-gradient-to-b from-[#f0f4ff] to-white border-b border-gray-100 pt-12 pb-0">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-[#4361ee] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog/" className="hover:text-[#4361ee] transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-gray-600 capitalize line-clamp-1 max-w-xs">{post.parentTopic}</span>
            </nav>

            <div className="max-w-[860px]">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="bg-[#4361ee]/10 text-[#4361ee] text-xs font-bold px-3 py-1.5 rounded-full capitalize">
                  {post.parentTopic}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-gray-400">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readTime} min read
                </span>
                <span className="text-xs text-gray-400">·</span>
                <time dateTime={post.publishDate} className="text-xs text-gray-400">
                  {new Date(post.publishDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-[1.15] mb-5">
                {post.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-8">{post.excerpt}</p>

              {/* Author row */}
              <div className="flex items-center gap-4 pb-8 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#4361ee] flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                  RR
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{post.author}</p>
                  <p className="text-xs text-gray-400">revealrank.com</p>
                </div>
                <div className="ml-auto hidden sm:flex gap-2">
                  <Link
                    href="/contact/"
                    className="text-xs font-semibold bg-[#4361ee] text-white px-4 py-2 rounded-full hover:bg-[#3451de] transition-colors"
                  >
                    Free SEO Audit →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Two-col layout ────────────────────────────────────────── */}
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-12">
          <div className="flex gap-12 items-start">
            {/* ── Article body ──────────────────────────────────────── */}
            <article className="min-w-0 flex-1 max-w-[860px]">
              {/* Inline CSS for blog content since we target dangerouslySetInnerHTML */}
              <style>{`
                .blog-body h1 { font-size: 2rem; font-weight: 900; color: #111827; margin: 2rem 0 1rem; line-height: 1.2; }
                .blog-body h2 { font-size: 1.5rem; font-weight: 800; color: #111827; margin: 2.5rem 0 1rem; padding-top: 0.5rem; border-top: 2px solid #f3f4f6; line-height: 1.3; }
                .blog-body h3 { font-size: 1.2rem; font-weight: 700; color: #1f2937; margin: 2rem 0 0.75rem; line-height: 1.4; }
                .blog-body h4 { font-size: 1rem; font-weight: 700; color: #374151; margin: 1.5rem 0 0.5rem; }
                .blog-body p { font-size: 1.0625rem; line-height: 1.8; color: #374151; margin-bottom: 1.25rem; }
                .blog-body ul, .blog-body ol { padding-left: 1.5rem; margin-bottom: 1.25rem; }
                .blog-body li { font-size: 1rem; line-height: 1.75; color: #374151; margin-bottom: 0.4rem; }
                .blog-body ul li { list-style-type: disc; }
                .blog-body ol li { list-style-type: decimal; }
                .blog-body a { color: #4361ee; text-decoration: none; font-weight: 500; border-bottom: 1px solid #4361ee40; transition: border-color 0.2s, color 0.2s; }
                .blog-body a:hover { color: #3451de; border-bottom-color: #3451de; }
                .blog-body strong { font-weight: 700; color: #111827; }
                .blog-body em { font-style: italic; }
                .blog-body pre { background: #0f172a; color: #e2e8f0; padding: 1.25rem; border-radius: 0.75rem; overflow-x: auto; margin: 1.5rem 0; font-size: 0.875rem; line-height: 1.65; }
                .blog-body code:not(pre code) { background: #eff6ff; color: #3451de; padding: 0.15rem 0.4rem; border-radius: 0.3rem; font-size: 0.875rem; font-family: monospace; }
                .blog-body blockquote { border-left: 4px solid #4361ee; background: #f0f4ff; padding: 1rem 1.5rem; margin: 1.5rem 0; border-radius: 0 0.5rem 0.5rem 0; }
                .blog-body blockquote p { color: #1e3a8a; margin: 0; font-style: italic; }
                .blog-body hr { border: none; border-top: 2px solid #f3f4f6; margin: 2rem 0; }
                .blog-body table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.9rem; }
                .blog-body th { background: #4361ee; color: white; padding: 0.75rem 1rem; text-align: left; font-weight: 700; }
                .blog-body td { padding: 0.65rem 1rem; border-bottom: 1px solid #f3f4f6; color: #374151; }
                .blog-body tr:hover td { background: #f8faff; }
              `}</style>

              <div
                className="blog-body"
                dangerouslySetInnerHTML={{ __html: content }}
              />

              {/* ── Internal Links Box ────────────────────────────── */}
              <div className="mt-14 bg-gradient-to-br from-[#f0f4ff] to-white border border-[#4361ee]/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-lg font-black text-gray-900 mb-1">📚 More from RevealRank</h3>
                <p className="text-sm text-gray-500 mb-5">
                  Explore related guides and services to go deeper on this topic.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {related.length > 0 && related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}/`}
                      className="group flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 hover:border-[#4361ee]/40 hover:shadow-sm transition-all"
                    >
                      <span className="text-[#4361ee] mt-0.5 text-lg">📄</span>
                      <div className="min-w-0">
                        <p className="text-xs text-[#4361ee] font-semibold mb-0.5 capitalize">{r.parentTopic}</p>
                        <p className="text-sm font-semibold text-gray-800 group-hover:text-[#4361ee] transition-colors leading-snug line-clamp-2">{r.title}</p>
                      </div>
                    </Link>
                  ))}
                  {RELATED_SERVICES.slice(0, 4 - Math.min(related.length, 2)).map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="group flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 hover:border-[#4361ee]/40 hover:shadow-sm transition-all"
                    >
                      <span className="text-[#4361ee] mt-0.5 text-lg">🔧</span>
                      <div className="min-w-0">
                        <p className="text-xs text-gray-400 font-semibold mb-0.5">Service</p>
                        <p className="text-sm font-semibold text-gray-800 group-hover:text-[#4361ee] transition-colors leading-snug">{s.label}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* ── Share & Tags ──────────────────────────────────── */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="text-sm text-gray-500 font-medium">Share:</span>
                <a
                  href={`https://twitter.com/intent/tweet?url=https://www.revealrank.com/blog/${slug}/&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  𝕏 Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.revealrank.com/blog/${slug}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold bg-[#0077b5] text-white px-4 py-2 rounded-full hover:bg-[#006399] transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </article>

            {/* ── Sticky Sidebar ────────────────────────────────────── */}
            <aside className="hidden lg:flex flex-col gap-6 w-72 flex-shrink-0 sticky top-24 self-start">
              {/* CTA card */}
              <div className="bg-gradient-to-br from-[#4361ee] to-[#3451de] rounded-2xl p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-3">Free Offer</p>
                <h3 className="text-xl font-black leading-snug mb-3">Get Your Free SEO Audit</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-5">
                  We&apos;ll review your site and show you exactly what&apos;s holding back your rankings.
                </p>
                <Link
                  href="/contact/"
                  className="block text-center bg-white text-[#4361ee] font-black text-sm py-3 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Request Free Audit
                </Link>
                <p className="text-blue-200 text-xs text-center mt-3">No credit card · Response in 24hrs</p>
              </div>

              {/* More articles */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5">
                <h3 className="text-sm font-black text-gray-900 mb-4">More Articles</h3>
                <div className="space-y-3">
                  {morePosts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}/`}
                      className="group block"
                    >
                      <p className="text-xs text-[#4361ee] font-semibold mb-0.5 capitalize">{p.parentTopic}</p>
                      <p className="text-sm text-gray-700 group-hover:text-[#4361ee] font-medium transition-colors leading-snug line-clamp-2">{p.title}</p>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/blog/"
                  className="mt-4 block text-center text-xs font-bold text-[#4361ee] hover:underline"
                >
                  View all articles →
                </Link>
              </div>

              {/* Services quick links */}
              <div className="bg-gray-50 rounded-2xl p-5">
                <h3 className="text-sm font-black text-gray-900 mb-3">Our Services</h3>
                <ul className="space-y-2">
                  {RELATED_SERVICES.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="text-sm text-gray-600 hover:text-[#4361ee] transition-colors font-medium flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4361ee]/40 flex-shrink-0" />
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>

        {/* ── CTA Section ───────────────────────────────────────────── */}
        <CTASection
          title="Ready to Rank Higher on Google?"
          subtitle="RevealRank builds the SEO strategy, technical foundation, and content that turns search into your #1 growth channel."
          primaryCTA="Get a Free SEO Audit"
          primaryHref="/contact/"
        />
      </main>
    </>
  );
}
