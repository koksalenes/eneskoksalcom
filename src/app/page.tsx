"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { defaultLocale, isLocale, localeStorageKey, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

function getInitialLocale(): Locale {
  if (globalThis.window === undefined) return defaultLocale;
  try {
    const stored = localStorage.getItem(localeStorageKey);
    if (isLocale(stored)) return stored;
  } catch {
    console.error("Failed to access localStorage");
  }
  return defaultLocale;
}

export default function RootRedirect() {
  const router = useRouter();
  const [locale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    router.replace(`/${locale}`);
  }, [router, locale]);

  const { loading } = getMessages(locale);

  return (
    <div className="grid min-h-[100svh] place-items-center">
      <span className="mono-label animate-pulse">{loading}</span>
    </div>
  );
}
