import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { HtmlLang } from "@/components/providers/HtmlLang";
import { isLocale, locales } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const siteUrl = "https://eneskoksal.com";

const localeMeta = {
  en: {
    title: "Enes Köksal - Software Engineer",
    description:
      "Full-stack software engineer building scalable applications with .NET and TypeScript.",
    ogLocale: "en_US",
    altLocale: "tr_TR",
  },
  tr: {
    title: "Enes Köksal - Yazılım Mühendisi",
    description:
      ".NET ve TypeScript teknolojileriyle ölçeklenebilir uygulamalar geliştiren tam yığın yazılım mühendisi.",
    ogLocale: "tr_TR",
    altLocale: "en_US",
  },
} satisfies Record<
  string,
  { title: string; description: string; ogLocale: string; altLocale: string }
>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = localeMeta[locale as keyof typeof localeMeta] ?? localeMeta.en;
  const canonical = `${siteUrl}/${locale}`;

  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: {
      canonical,
      languages: {
        en: `${siteUrl}/en`,
        tr: `${siteUrl}/tr`,
        "x-default": `${siteUrl}/en`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      locale: meta.ogLocale,
      alternateLocale: meta.altLocale,
    },
  };
}

export const dynamicParams = false;

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  setRequestLocale(locale);

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={getMessages(locale)}
      timeZone="Europe/Istanbul"
    >
      <HtmlLang locale={locale} />
      {children}
    </NextIntlClientProvider>
  );
}
