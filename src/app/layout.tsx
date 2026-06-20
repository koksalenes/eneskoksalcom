import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers/Providers";
import { paletteConfig } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eneskoksal.com"),
  title: {
    default: "Enes Köksal - Software Engineer",
    template: "%s - Enes Köksal",
  },
  description:
    "Enes Köksal - Full-stack software engineer building scalable applications with the .NET and TypeScript ecosystems.",
  keywords: [
    "Enes Köksal",
    "Software Engineer",
    "Full-Stack Developer",
    ".NET",
    "TypeScript",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Enes Köksal", url: "https://eneskoksal.com" }],
  openGraph: {
    type: "website",
    title: "Enes Köksal - Software Engineer",
    description:
      "Full-stack software engineer building scalable applications with the .NET and TypeScript ecosystems.",
    url: "https://eneskoksal.com",
    siteName: "Enes Köksal",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Enes Köksal",
  url: "https://eneskoksal.com",
  email: "contact@eneskoksal.com",
  jobTitle: "Software Engineer",
  description:
    "Full-stack software engineer building scalable applications with .NET and TypeScript.",
  sameAs: [
    "https://linkedin.com/in/koksalenes",
    "https://github.com/koksalenes",
    "https://freelancer.com/u/koksalenes",
  ],
  knowsAbout: [
    "C#",
    ".NET",
    "TypeScript",
    "React",
    "Next.js",
    "Nest.js",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Kubernetes",
    "Clean Architecture",
    "Microservices",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Bursa Technical University",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f6f3" },
    { media: "(prefers-color-scheme: dark)", color: "#07070a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var p=localStorage.getItem('ek-palette')||'${paletteConfig.defaultPalette}';if(p!=='orange')document.documentElement.dataset.palette=p}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
