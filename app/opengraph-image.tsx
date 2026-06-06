import { ImageResponse } from "next/og";

export const alt = "Akshar Prajapati — Senior Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050505",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Ambient top gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(251,191,36,0.14) 0%, transparent 70%)",
          }}
        />

        {/* Bottom right secondary glow */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 90% 80% at 50% 30%, black 5%, transparent 85%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            padding: "0 80px",
          }}
        >
          {/* Status badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 99,
              border: "1px solid rgba(52,211,153,0.2)",
              backgroundColor: "rgba(52,211,153,0.05)",
              color: "#34d399",
              fontSize: 14,
              letterSpacing: "0.05em",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#34d399",
              }}
            />
            Available for new opportunities
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              display: "flex",
              gap: 18,
            }}
          >
            <span style={{ color: "#fafafa" }}>Akshar</span>
            <span
              style={{
                background: "linear-gradient(to right, #fbbf24, #f97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Prajapati
            </span>
          </div>

          {/* Role */}
          <div
            style={{
              fontSize: 22,
              color: "#71717a",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Senior Software Engineer · MERN Stack
          </div>

          {/* Tech pills */}
          <div
            style={{
              display: "flex",
              gap: 10,
              marginTop: 8,
            }}
          >
            {["Next.js", "NestJS", "TypeScript", "MongoDB", "AWS"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 99,
                    border: "1px solid rgba(255,255,255,0.08)",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    color: "#a1a1aa",
                    fontSize: 13,
                  }}
                >
                  {tech}
                </div>
              ),
            )}
          </div>
        </div>

        {/* Footer URL */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            color: "#3f3f46",
            fontSize: 13,
            fontFamily: "monospace",
          }}
        >
          aksharprajapati.vercel.app
        </div>
      </div>
    ),
    { ...size },
  );
}
