import { ImageResponse } from "next/og";
import { getBlogPost } from "@/data/blog";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPost(params.slug);
  const title = post?.title ?? "SEO Guides & Resources";
  const topic = post?.parentTopic ?? "SEO";
  const readTime = post?.readTime ?? 8;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #1e3a8a 100%)",
          padding: "0",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(67,97,238,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(67,97,238,0.07) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Top accent bar */}
        <div
          style={{
            height: "6px",
            width: "100%",
            background: "linear-gradient(90deg, #4361ee, #ff531a, #4361ee)",
            flexShrink: 0,
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "56px 72px",
            justifyContent: "space-between",
          }}
        >
          {/* Top row: logo + domain */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  background: "#4361ee",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  fontWeight: "900",
                  color: "white",
                }}
              >
                RR
              </div>
              <span style={{ color: "white", fontSize: "22px", fontWeight: "700" }}>
                RevealRank
              </span>
            </div>
            <span style={{ color: "rgba(148,163,184,0.9)", fontSize: "16px" }}>
              revealrank.com/blog
            </span>
          </div>

          {/* Category badge + read time */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                background: "rgba(67,97,238,0.25)",
                border: "1px solid rgba(67,97,238,0.5)",
                color: "#93c5fd",
                padding: "6px 16px",
                borderRadius: "100px",
                fontSize: "16px",
                fontWeight: "700",
                textTransform: "capitalize",
              }}
            >
              {topic}
            </div>
            <span style={{ color: "rgba(148,163,184,0.7)", fontSize: "15px" }}>
              {readTime} min read
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: title.length > 80 ? "38px" : title.length > 60 ? "44px" : "50px",
              fontWeight: "900",
              color: "white",
              lineHeight: "1.2",
              letterSpacing: "-0.5px",
              maxWidth: "980px",
            }}
          >
            {title}
          </div>

          {/* Bottom row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ color: "rgba(148,163,184,0.6)", fontSize: "15px" }}>
              Free SEO resource — no signup required
            </span>
            <div
              style={{
                background: "#4361ee",
                color: "white",
                padding: "12px 28px",
                borderRadius: "12px",
                fontSize: "16px",
                fontWeight: "700",
              }}
            >
              Read the guide →
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
