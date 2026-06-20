import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

export const dynamic = "force-static";

const BASE_URL = "https://eneskoksal.com";
const LAST_MODIFIED = new Date("2026-06-20");

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${BASE_URL}/${l}`])
      ),
    },
  }));
}
