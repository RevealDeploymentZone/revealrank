import { ImageResponse } from "next/og";
import { blogPosts } from "@/data/blog";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const count = blogPosts.length;
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #1e3a8a 100%)",
          fontFamily: "sans-serif",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(67,97,238,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(67,97,238,0.07) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div style={{ height: "6px", background: "linear-gradient(90deg, #4361ee, #ff531a, #4361ee)", flexShrink: 0 }} />
        <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "60px 80px", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ width: "52px", height: "52px", background: "#4361ee", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: "900", color: "white" }}>
              RR
            </div>
            <span style={{ color: "white", fontSize: "26px", fontWeight: "800" }}>Reveal Rank</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "rgba(67,97,238,0.2)", border: "1px solid rgba(67,97,238,0.4)", color: "#93c5fd", padding: "8px 20px", borderRadius: "100px", fontSize: "18px", fontWeight: "700", width: "fit-content" }}>
              SEO Knowledge Hub
            </div>
            <div style={{ fontSize: "60px", fontWeight: "900", color: "white", lineHeight: "1.1", letterSpacing: "-1px" }}>
              {count} Free SEO Guides
            </div>
            <div style={{ fontSize: "22px", color: "rgba(148,163,184,0.85)" }}>
              Technical SEO · Local SEO · Link Building · Google Ads
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ color: "rgba(148,163,184,0.5)", fontSize: "16px" }}>revealrank.com/blog</span>
            <div style={{ background: "#4361ee", color: "white", padding: "14px 32px", borderRadius: "14px", fontSize: "18px", fontWeight: "700" }}>
              Read for free →
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
