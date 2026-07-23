import type { Language } from "../i18n/config";

export interface Project {
  name: string;
  year: string;
  summary: string;
  href?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  place: string;
}

export interface StackGroup {
  label: string;
  items: string[];
}

export interface LinkItem {
  label: string;
  href: string;
}

export interface PortfolioContent {
  meta: {
    title: string;
    description: string;
    role: string;
    ogLocale: string;
  };
  nav: {
    themeToggle: string;
    languageToggle: string;
    langLabel: string;
  };
  header: {
    eyebrow: string;
    name: string;
    role: string;
    location: string;
  };
  summary: {
    eyebrow: string;
    body: string;
  };
  projects: {
    eyebrow: string;
    items: Project[];
  };
  experience: {
    eyebrow: string;
    items: ExperienceItem[];
  };
  stack: {
    eyebrow: string;
    groups: StackGroup[];
  };
  links: {
    eyebrow: string;
    email: string;
    items: LinkItem[];
    footer: string;
  };
  portrait: {
    alt: string;
    caption: string;
  };
}

export const content: Record<Language, PortfolioContent> = {
  es: {
    meta: {
      title: "Eric Mancebo — Desarrollador full-stack",
      description:
        "Portfolio de Eric Mancebo. Desarrollo web full-stack con foco en interfaces medidas y experiencia sensible al detalle.",
      role: "Desarrollador full-stack",
      ogLocale: "es_ES",
    },
    nav: {
      themeToggle: "Cambiar tema",
      languageToggle: "Cambiar idioma",
      langLabel: "ES",
    },
    header: {
      eyebrow: "Portfolio",
      name: "Eric Mancebo",
      role: "Desarrollador full-stack",
      location: "Basado en España",
    },
    summary: {
      eyebrow: "Resumen",
      body: "Construyo productos web con criterio de ingeniero y ojo de diseñador. Me interesa la precisión, el ritmo del scroll y las interfaces que no sobran.",
    },
    projects: {
      eyebrow: "Proyectos",
      items: [
        {
          name: "Proyecto uno",
          year: "2025",
          summary: "Aplicación web full-stack con foco en rendimiento y detalle visual.",
        },
        {
          name: "Proyecto dos",
          year: "2024",
          summary: "Automatización de flujos internos con integraciones a medida.",
        },
        {
          name: "Proyecto tres",
          year: "2024",
          summary: "Rediseño y reescritura de una plataforma legacy.",
        },
      ],
    },
    experience: {
      eyebrow: "Experiencia",
      items: [
        { period: "2024 — hoy", role: "Desarrollador freelance", place: "Independiente" },
        { period: "2022 — 2024", role: "Full-stack", place: "Empresa" },
        { period: "2020 — 2022", role: "Frontend Junior", place: "Empresa" },
      ],
    },
    stack: {
      eyebrow: "Stack",
      groups: [
        { label: "Frontend", items: ["Astro", "React", "TypeScript", "GSAP", "Lenis", "Tailwind"] },
        { label: "Backend", items: ["Node.js", "Python", "PostgreSQL", "REST", "Cloudflare"] },
        { label: "Herramientas", items: ["Git", "Figma", "Vite", "Docker"] },
      ],
    },
    links: {
      eyebrow: "Contacto",
      email: "ericmancebo6950@gmail.com",
      items: [
        { label: "Email", href: "mailto:ericmancebo6950@gmail.com" },
        { label: "GitHub", href: "https://github.com/" },
        { label: "LinkedIn", href: "https://linkedin.com/" },
      ],
      footer: "© 2026 Eric Mancebo",
    },
    portrait: {
      alt: "Retrato de Eric Mancebo",
      caption: "Eric Mancebo",
    },
  },
  en: {
    meta: {
      title: "Eric Mancebo — Full-stack developer",
      description:
        "Portfolio of Eric Mancebo. Full-stack web development focused on measured interfaces and detail-sensitive experiences.",
      role: "Full-stack developer",
      ogLocale: "en_US",
    },
    nav: {
      themeToggle: "Toggle theme",
      languageToggle: "Toggle language",
      langLabel: "EN",
    },
    header: {
      eyebrow: "Portfolio",
      name: "Eric Mancebo",
      role: "Full-stack developer",
      location: "Based in Spain",
    },
    summary: {
      eyebrow: "Summary",
      body: "I build web products with an engineer's judgment and a designer's eye. I care about precision, scroll cadence, and interfaces that leave nothing extra.",
    },
    projects: {
      eyebrow: "Projects",
      items: [
        {
          name: "Project one",
          year: "2025",
          summary: "Full-stack web app focused on performance and visual detail.",
        },
        {
          name: "Project two",
          year: "2024",
          summary: "Internal workflow automation with tailored integrations.",
        },
        {
          name: "Project three",
          year: "2024",
          summary: "Redesign and rewrite of a legacy platform.",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      items: [
        { period: "2024 — now", role: "Freelance developer", place: "Independent" },
        { period: "2022 — 2024", role: "Full-stack", place: "Company" },
        { period: "2020 — 2022", role: "Junior frontend", place: "Company" },
      ],
    },
    stack: {
      eyebrow: "Stack",
      groups: [
        { label: "Frontend", items: ["Astro", "React", "TypeScript", "GSAP", "Lenis", "Tailwind"] },
        { label: "Backend", items: ["Node.js", "Python", "PostgreSQL", "REST", "Cloudflare"] },
        { label: "Tools", items: ["Git", "Figma", "Vite", "Docker"] },
      ],
    },
    links: {
      eyebrow: "Contact",
      email: "ericmancebo6950@gmail.com",
      items: [
        { label: "Email", href: "mailto:ericmancebo6950@gmail.com" },
        { label: "GitHub", href: "https://github.com/" },
        { label: "LinkedIn", href: "https://linkedin.com/" },
      ],
      footer: "© 2026 Eric Mancebo",
    },
    portrait: {
      alt: "Portrait of Eric Mancebo",
      caption: "Eric Mancebo",
    },
  },
};
