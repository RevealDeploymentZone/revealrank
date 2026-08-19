import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(67,97,238,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(67,97,238,0.07) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Top accent */}
        <div style={{ height: "6px", background: "linear-gradient(90deg, #4361ee, #ff531a, #4361ee)", flexShrink: 0 }} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "60px 80px",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "52px",
                height: "52px",
                background: "#4361ee",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
                fontWeight: "900",
                color: "white",
              }}
            >
              RR
            </div>
            <span style={{ color: "white", fontSize: "26px", fontWeight: "800" }}>
              Reveal Rank
            </span>
          </div>

          {/* Main headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div
              style={{
                fontSize: "58px",
                fontWeight: "900",
                color: "white",
                lineHeight: "1.15",
                letterSpacing: "-1px",
              }}
            >
              Performance SEO &amp;{" "}
              <span style={{ color: "#4361ee" }}>Digital Marketing</span>
            </div>
            <div style={{ fontSize: "22px", color: "rgba(148,163,184,0.9)", maxWidth: "700px" }}>
              Data-driven strategies that grow organic traffic, leads, and revenue.
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: "40px" }}>
            {[
              { v: "300%", l: "Avg Traffic Growth" },
              { v: "200+", l: "Projects Delivered" },
              { v: "98%", l: "Client Retention" },
            ].map((s) => (
              <div key={s.l} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "32px", fontWeight: "900", color: "#4361ee" }}>{s.v}</span>
                <span style={{ fontSize: "14px", color: "rgba(148,163,184,0.7)" }}>{s.l}</span>
              </div>
            ))}
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
              <span style={{ color: "rgba(148,163,184,0.5)", fontSize: "16px" }}>revealrank.com</span>
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
