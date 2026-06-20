import { ImageResponse } from "next/og";
import { paletteConfig, paletteAccents } from "@/lib/data";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const { accent, accentBorder } = paletteAccents[paletteConfig.defaultPalette];

  return new ImageResponse(
    <div
      style={{
        width: 180,
        height: 180,
        borderRadius: "50%",
        background: "#111117",
        border: `8px solid ${accentBorder}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        fontWeight: 700,
        fontSize: 72,
        letterSpacing: "-2px",
        lineHeight: 1,
      }}
    >
      <span style={{ color: "#ffffff" }}>E</span>
      <span style={{ color: accent }}>K</span>
    </div>,
    { ...size },
  );
}
