export type Palette = "orange" | "purple" | "charcoal";

export const paletteConfig = {
  defaultPalette: "charcoal" as Palette,
  showSwitcher: false, // If false, the palette switcher won't be rendered and the default palette will be used.
};

export const paletteAccents: Record<
  Palette,
  { accent: string; accent2: string; accentBorder: string }
> = {
  orange: {
    accent: "#ff7840",
    accent2: "#4d6fff",
    accentBorder: "rgba(255,120,64,0.35)",
  },
  purple: {
    accent: "#8b6bff",
    accent2: "#34d9f5",
    accentBorder: "rgba(139,107,255,0.35)",
  },
  charcoal: {
    accent: "#c6ff00",
    accent2: "#00e5c6",
    accentBorder: "rgba(198,255,0,0.35)",
  },
};

export type ExperienceId = "octopus" | "founder" | "freelancer" | "tofas";

export type Experience = {
  id: ExperienceId;
  href?: string;
};

export const experiences: Experience[] = [
  { id: "octopus" },
  { id: "founder" },
  { id: "freelancer", href: "https://freelancer.com/u/koksalenes" },
  { id: "tofas" },
];

function countUniqueExperienceMonths(now: Date): number {
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1);
  const ranges: Array<[Date, Date]> = [
    [new Date(2023, 6), new Date(2024, 6)], // Jul 2023 – Jul 2024 (tofas)
    [new Date(2024, 6), new Date(2025, 4)], // Jul 2024 – May 2025 (freelancer)
    [new Date(2025, 4), nextMonth], // May 2025 – present (founder)
    [new Date(2026, 3), nextMonth], // Apr 2026 – present (octopus)
  ];

  ranges.sort((a, b) => a[0].getTime() - b[0].getTime());

  const merged: Array<[Date, Date]> = [];
  for (const [start, end] of ranges) {
    const last = merged.at(-1);
    if (!last || start.getTime() > last[1].getTime()) {
      merged.push([start, end]);
    } else if (end.getTime() > last[1].getTime()) {
      last[1] = end;
    }
  }

  return merged.reduce((total, [start, end]) => {
    return (
      total +
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth())
    );
  }, 0);
}

export function getExperienceYears(date: Date = new Date()): number {
  return Math.floor(countUniqueExperienceMonths(date) / 12);
}

export type SkillCategoryId =
  | "technologies"
  | "architecture"
  | "data"
  | "testing"
  | "devtools"
  | "collaboration";

export type SkillCategory = {
  id: SkillCategoryId;
  skills: string[];
  span: "sm" | "md" | "lg";
};

export const skillCategories: SkillCategory[] = [
  {
    id: "technologies",
    span: "lg",
    skills: [
      "C#",
      ".NET",
      "TypeScript",
      "Nest.js",
      "React",
      "Next.js",
      "Zustand",
      "WebSockets",
      "Redux Toolkit",
      "React Query",
      "Shadcn",
      "Tailwind CSS",
      "Node.js",
      "Serilog",
      "Pino",
    ],
  },
  {
    id: "architecture",
    span: "md",
    skills: [
      "Clean Architecture",
      "REST APIs",
      "Hexagonal Architecture",
    ],
  },
  {
    id: "data",
    span: "md",
    skills: [
      "PostgreSQL",
      "MSSQL",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "Entity Framework",
      "Prisma",
      "CDN",
      "Blob Storages"
    ],
  },
  {
    id: "testing",
    span: "lg",
    skills: [
      "xUnit",
      "Moq",
      "Jest",
      "Vitest",
      "RTL",
      "Cypress",
      "Playwright",
      "Testcontainers",
    ],
  },
  {
    id: "devtools",
    span: "sm",
    skills: [
      "Postman",
      "Swagger",
      "Docker",
      "Sentry",
      "SonarQube",
      "Figma",
      "Github Actions",
      "Coding Agents",
    ],
  },
  {
    id: "collaboration",
    span: "sm",
    skills: [
      "Agile/Scrum",
      "Git",
      "Code Review",
      "Technical Documentation",
      "Jira",
      "Azure DevOps",
      "Notion",
    ],
  },
];

export const marqueeTech = [
  "C#",
  ".NET",
  "TypeScript",
  "React",
  "Next.js",
  "Nest.js",
  "PostgreSQL",
  "Docker",
  "Redis",
  "RabbitMQ",
  "Prisma",
  "Tailwind CSS",
  "Playwright",
  "Clean Architecture",
];

export const socials = {
  email: "contact@eneskoksal.com",
  linkedin: "https://linkedin.com/in/koksalenes",
  github: "https://github.com/koksalenes",
  freelancer: "https://freelancer.com/u/koksalenes",
} as const;

export const heroStats = [
  { id: "experience", value: null, suffix: "+" },
  { id: "clients", value: "20", suffix: "+" },
  { id: "satisfaction", value: "100", suffix: "%" },
] as const;
