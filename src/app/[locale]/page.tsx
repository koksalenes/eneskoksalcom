import dynamic from "next/dynamic";
import { locales } from "@/i18n/config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";

const About = dynamic(() =>
  import("@/components/sections/About").then((m) => ({ default: m.About })),
);
const Experience = dynamic(() =>
  import("@/components/sections/Experience").then((m) => ({
    default: m.Experience,
  })),
);
const Skills = dynamic(() =>
  import("@/components/sections/Skills").then((m) => ({ default: m.Skills })),
);
const Education = dynamic(() =>
  import("@/components/sections/Education").then((m) => ({
    default: m.Education,
  })),
);
const Contact = dynamic(() =>
  import("@/components/sections/Contact").then((m) => ({ default: m.Contact })),
);

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
