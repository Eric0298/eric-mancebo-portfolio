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
  summary: string;
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
    displayLine: string;
    role: string;
    locationLine: string;
    ctaLabel: string;
    marqueeTerms: string[];
    marqueeRows: [string[], string[], string[]];
  };
  about: {
    title: string;
    body: string;
  };
  projects: {
    title: string;
    items: Project[];
  };
  experience: {
    title: string;
    items: ExperienceItem[];
    scrollHint: string;
  };
  stack: {
    title: string;
    groups: StackGroup[];
  };
  links: {
    title: string;
    email: string;
    phone: string;
    phoneHref: string;
    whatsappHref: string;
    items: LinkItem[];
    footer: string;
  };
  portrait: {
    alt: string;
    caption: string;
  };
}

const email = "ericmancebo6950@gmail.com";
const phoneDisplay = "+34 610 27 11 91";
const phoneHref = "tel:+34610271191";
const whatsappHref = "https://wa.me/34610271191";

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
      displayLine: "FULLSTACK DEVELOPER",
      role: "Desarrollador full-stack",
      locationLine: "BASED IN VALENCIA",
      ctaLabel: "Abierto a trabajar",
      marqueeTerms: ["FULLSTACK", "DEVELOPER", "INTERFACES", "PRODUCTO"],
      marqueeRows: [
        ["FULLSTACK", "DEVELOPER", "ENGINEER"],
        ["INTERFACES", "PRODUCTO", "SISTEMAS"],
        ["EDITORIAL", "CREATIVE", "DETAIL"],
      ],
    },
    about: {
      title: "Sobre mí",
      body: "Construyo productos web con criterio de ingeniero y ojo de diseñador. Me interesa la precisión, el ritmo del scroll y las interfaces que no sobran.",
    },
    projects: {
      title: "Trabajo destacado",
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
      title: "Experiencia",
      scrollHint: "Desliza para avanzar",
      items: [
        {
          period: "2024",
          role: "Desarrollador freelance",
          place: "Independiente",
          summary:
            "Trabajos por encargo end-to-end: producto web, automatización y arquitectura.",
        },
        {
          period: "2022",
          role: "Full-stack",
          place: "Empresa",
          summary:
            "Diseño e implementación de interfaces y APIs para producto en producción.",
        },
        {
          period: "2020",
          role: "Frontend Junior",
          place: "Empresa",
          summary:
            "Primeros pasos profesionales: HTML/CSS/JS, componentes y buenas prácticas.",
        },
      ],
    },
    stack: {
      title: "Stack",
      groups: [
        { label: "Frontend", items: ["Astro", "React", "TypeScript", "GSAP", "Lenis", "Tailwind"] },
        { label: "Backend", items: ["Node.js", "Python", "PostgreSQL", "REST", "Cloudflare"] },
        { label: "Herramientas", items: ["Git", "Figma", "Vite", "Docker"] },
      ],
    },
    links: {
      title: "Contacto",
      email,
      phone: phoneDisplay,
      phoneHref,
      whatsappHref,
      items: [
        { label: "Email", href: `mailto:${email}` },
        { label: "WhatsApp", href: whatsappHref },
        { label: "Teléfono", href: phoneHref },
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
      displayLine: "FULLSTACK DEVELOPER",
      role: "Full-stack developer",
      locationLine: "BASED IN VALENCIA",
      ctaLabel: "Open to work",
      marqueeTerms: ["FULLSTACK", "DEVELOPER", "INTERFACES", "PRODUCT"],
      marqueeRows: [
        ["FULLSTACK", "DEVELOPER", "ENGINEER"],
        ["INTERFACES", "PRODUCT", "SYSTEMS"],
        ["EDITORIAL", "CREATIVE", "DETAIL"],
      ],
    },
    about: {
      title: "About",
      body: "I build web products with an engineer's judgment and a designer's eye. I care about precision, scroll cadence, and interfaces that leave nothing extra.",
    },
    projects: {
      title: "Featured work",
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
      title: "Experience",
      scrollHint: "Scroll to advance",
      items: [
        {
          period: "2024",
          role: "Freelance developer",
          place: "Independent",
          summary:
            "End-to-end commissioned work: web product, automation, and architecture.",
        },
        {
          period: "2022",
          role: "Full-stack",
          place: "Company",
          summary:
            "Design and implementation of interfaces and APIs for a live product.",
        },
        {
          period: "2020",
          role: "Junior frontend",
          place: "Company",
          summary:
            "First professional steps: HTML/CSS/JS, components and good practices.",
        },
      ],
    },
    stack: {
      title: "Stack",
      groups: [
        { label: "Frontend", items: ["Astro", "React", "TypeScript", "GSAP", "Lenis", "Tailwind"] },
        { label: "Backend", items: ["Node.js", "Python", "PostgreSQL", "REST", "Cloudflare"] },
        { label: "Tools", items: ["Git", "Figma", "Vite", "Docker"] },
      ],
    },
    links: {
      title: "Contact",
      email,
      phone: phoneDisplay,
      phoneHref,
      whatsappHref,
      items: [
        { label: "Email", href: `mailto:${email}` },
        { label: "WhatsApp", href: whatsappHref },
        { label: "Phone", href: phoneHref },
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
