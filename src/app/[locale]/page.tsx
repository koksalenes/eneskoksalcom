import { locales } from "@/i18n/config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Enes Köksal",
  url: "https://eneskoksal.com",
  image: "https://eneskoksal.com/profile/profile.jpeg",
  sameAs: [
    "https://linkedin.com/in/koksalenes",
    "https://github.com/koksalenes",
    "https://freelancer.com/u/koksalenes",
  ],
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Octopus Signage",
  },
  knowsAbout: [
    ".NET",
    "C#",
    "TypeScript",
    "React",
    "Next.js",
    "Nest.js",
    "Clean Architecture",
    "PostgreSQL",
    "Docker",
  ],
  email: "contact@eneskoksal.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "TR",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
