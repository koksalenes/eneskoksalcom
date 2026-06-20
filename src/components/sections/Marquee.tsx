"use client";

import { marqueeTech } from "@/lib/data";

export function Marquee() {
  const items = [...marqueeTech, ...marqueeTech];
  return (
    <div className="border-border bg-surface/40 relative border-y py-5">
      <div
        className="flex overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="font-display text-faint flex items-center gap-10 text-xl font-semibold whitespace-nowrap sm:text-2xl"
            >
              {tech}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
