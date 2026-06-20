export const locales = ["en", "tr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const localeStorageKey = "portfolio-locale";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "tr";
}

export function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return defaultLocale;
  const candidates = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];
  for (const lang of candidates) {
    if (lang?.toLowerCase().startsWith("tr")) return "tr";
    if (lang?.toLowerCase().startsWith("en")) return "en";
  }
  return defaultLocale;
}
