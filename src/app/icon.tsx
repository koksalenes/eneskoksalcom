import { ImageResponse } from "next/og";
import { paletteConfig, paletteAccents } from "@/lib/data";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const { accent, accentBorder } = paletteAccents[paletteConfig.defaultPalette];

  return new ImageResponse(
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: "#111117",
        border: `1.5px solid ${accentBorder}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0px",
        fontFamily: "sans-serif",
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: "-0.5px",
        lineHeight: 1,
      }}
    >
      <span style={{ color: "#ffffff" }}>E</span>
      <span style={{ color: accent }}>K</span>
    </div>,
    { ...size },
  );
}
