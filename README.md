<div align="center">

# Enes Köksal — Portfolio

**Personal portfolio website built with Next.js 16, React 19, and Tailwind CSS v4.**

[![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?style=flat-square&logo=nextdotjs)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Deployed on Cloudflare Pages](https://img.shields.io/badge/Deployed_on-Cloudflare_Pages-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)
[![License](https://img.shields.io/badge/License-Others-22c55e?style=flat-square)](LICENSE)

[eneskoksal.com](https://eneskoksal.com) · [LinkedIn](https://linkedin.com/in/koksalenes) · [GitHub](https://github.com/koksalenes) · [Freelancer](https://freelancer.com/u/koksalenes)

**Contact:** [contact@eneskoksal.com](mailto:contact@eneskoksal.com)

</div>

---

## Features

- **Internationalisation** — EN / TR with browser-locale auto-detection and a persistent locale switcher (`next-intl`)
- **Theming** — Dark / light mode toggle + three colour palettes (Orange, Purple, Charcoal) persisted in `localStorage`
- **Scroll animations** — Section reveal transitions powered by `framer-motion`
- **SEO** — Per-locale OG images (static, `next/og`) · Dynamic `sitemap.xml` (`app/sitemap.ts`) · `robots.txt` · JSON-LD structured data · Canonical URLs
- **Performance** — Fully static output; all locale routes pre-rendered at build time
- **Accessibility** — Semantic HTML, keyboard-navigable controls, `aria` labels throughout

---

## Tech Stack

| Layer          | Tools                                                                                                                                                                                                                                                                                                     |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework**  | ![Next.js](https://img.shields.io/badge/Next.js-black?style=flat-square&logo=nextdotjs) ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) |
| **Styling**    | ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=flat-square&logo=framer)                                                                                         |
| **i18n**       | ![next-intl](https://img.shields.io/badge/next--intl-4.13-6366F1?style=flat-square)                                                                                                                                                                                                                       |
| **Theming**    | ![next-themes](https://img.shields.io/badge/next--themes-0.4-0ea5e9?style=flat-square)                                                                                                                                                                                                                    |
| **Deployment** | ![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-F38020?style=flat-square&logo=cloudflare&logoColor=white)                                                                                                                                                                               |
| **Tooling**    | ![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?style=flat-square&logo=eslint) ![Prettier](https://img.shields.io/badge/Prettier-3-F7B93E?style=flat-square&logo=prettier&logoColor=black)                                                                                                         |

---

## Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # Per-locale layout with metadata
│   │   ├── page.tsx            # Main page — assembles all sections
│   │   └── opengraph-image.tsx # Statically generated OG image (per locale)
│   ├── globals.css             # Tailwind base + CSS custom properties
│   ├── icon.tsx                # Favicon (dynamic, matches active palette)
│   └── apple-icon.tsx
├── components/
│   ├── layout/                 # Header, Footer
│   ├── sections/               # Hero, Marquee, About, Experience, Skills, Education, Contact
│   ├── controls/               # ThemeToggle, LocaleSwitcher, PaletteSwitcher
│   ├── providers/              # Providers, PaletteProvider, HtmlLang
│   └── ui/                     # Reveal (scroll animation), SectionHeading, icons
├── i18n/
│   ├── config.ts               # Locale list + browser-detect helper
│   ├── messages.ts             # Type-safe message loader
│   └── request.ts              # next-intl server request config
└── lib/
    ├── data.ts                 # CV data (experiences, skills, socials, palette config)
    └── cn.ts                   # clsx/twMerge helper
messages/
├── en.json                     # English translations
└── tr.json                     # Turkish translations
public/
├── profile/profile.jpeg        # Profile photo (Hero + OG image)
├── robots.txt
└── llms.txt
```

---

## Getting Started

### Prerequisites

![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![npm](https://img.shields.io/badge/npm-latest-CB3837?style=flat-square&logo=npm)

### Install

```bash
git clone https://github.com/koksalenes/eneskoksalcom.git
cd eneskoksalcom
npm install
```

### Develop

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000). The app auto-redirects to `/en` or `/tr` based on browser language.

### Build

```bash
npm run build
npm run start
```

The build is fully static-output-friendly — OG images, sitemaps, and all locale routes are pre-rendered at build time.

---

## Available Scripts

| Script                 | Description                  |
| ---------------------- | ---------------------------- |
| `npm run dev`          | Start the development server |
| `npm run build`        | Production build             |
| `npm run start`        | Start the production server  |
| `npm run lint`         | Run ESLint                   |
| `npm run lint:fix`     | ESLint with auto-fix         |
| `npm run format`       | Prettier write               |
| `npm run format:check` | Prettier check (CI)          |

---

## Customisation

All personal data (experiences, skills, socials, stats) lives in [src/lib/data.ts](src/lib/data.ts).

Translatable strings (titles, descriptions, labels) live in [messages/en.json](messages/en.json) and [messages/tr.json](messages/tr.json).

To change the default colour palette or hide the palette switcher, edit `paletteConfig` in `data.ts`:

```ts
export const paletteConfig = {
  defaultPalette: "charcoal", // "orange" | "purple" | "charcoal"
  showSwitcher: true,
};
```

---

## Deployment

Deployed on [Cloudflare Pages](https://pages.cloudflare.com) with the Next.js adapter.

The `public/_headers` file sets security and cache headers for static assets.

---

## License

Custom Portfolio License © [Enes Köksal](https://eneskoksal.com)

You are free to use, copy, modify, and adapt the design and source code for your own portfolio. **You may not reuse any personal content** — photos, biography, work experience, or any other text or media identifying Enes Köksal. Replace all such content with your own before publishing. See [LICENSE](LICENSE) for the full terms.
