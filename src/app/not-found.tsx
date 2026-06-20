"use client";

import Link from "next/link";
import { useState } from "react";
import { m } from "framer-motion";
import { ArrowRight } from "@/components/ui/icons";
import {
  defaultLocale,
  isLocale,
  localeStorageKey,
  type Locale,
} from "@/i18n/config";
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

export default function NotFound() {
  const [locale] = useState<Locale>(getInitialLocale);

  const t = getMessages(locale).notFound;

  return (
    <main className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-bg absolute inset-0 opacity-60" />
        <div className="aurora animate-float-slow absolute top-1/3 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full" />
      </div>

      <m.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="text-gradient font-display text-[7rem] leading-none font-bold tracking-tight sm:text-[11rem]"
      >
        {t.code}
      </m.p>

      <m.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        {t.title}
      </m.h1>

      <m.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.18 }}
        className="text-muted mt-3 max-w-md"
      >
        {t.text}
      </m.p>

      <m.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.26 }}
      >
        <Link
          href={`/${locale}`}
          className="group bg-foreground text-background mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
        >
          {t.cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </m.div>
    </main>
  );
}
