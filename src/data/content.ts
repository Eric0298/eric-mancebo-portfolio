import type { Language } from "../i18n/config";

export interface Project {
  name: string;
  year: string;
  summary: string;
  href?: string;
  asset?: {
    src: string;
    srcDark?: string;
    alt: string;
    variant?: "mark" | "wordmark" | "monogram";
  };
}

export type ExperienceSegment =
  | string
  | { accent: string }
  | { link: string; href: string };

export interface ExperienceLogo {
  src: string;
  srcDark?: string;
  alt: string;
}

export interface ExperienceItem {
  period: string;
  periodLabel?: string;
  role: string;
  place: string;
  placeHref?: string;
  logo?: ExperienceLogo;
  summary: ExperienceSegment[];
}

export interface StackGroup {
  label: string;
  items: string[];
}

export interface LinkItem {
  label: string;
  href: string;
}

export type AboutSegment = string | { accent: string };
export type AboutBlock = AboutSegment[];

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
    blocks: AboutBlock[];
    scrollHint: string;
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
      title: "Eric Mancebo — Desarrollador Full-Stack",
      description:
        "Portfolio de Eric Mancebo. Desarrollador full-stack centrado en producto, automatización e IA aplicada.",
      role: "Desarrollador Full-Stack",
      ogLocale: "es_ES",
    },
    nav: {
      themeToggle: "Cambiar tema",
      languageToggle: "Cambiar idioma",
      langLabel: "ES",
    },
    header: {
      displayLine: "DESARROLLADOR FULL-STACK",
      role: "Desarrollador Full-Stack",
      locationLine: "BASED IN VALENCIA",
      ctaLabel: "Abierto a trabajar",
      marqueeTerms: ["FULL-STACK", "DEVELOPER", "PRODUCTO", "AUTOMATIZACIÓN", "IA APLICADA"],
      marqueeRows: [
        ["FULL-STACK", "DEVELOPER"],
        ["PRODUCTO", "AUTOMATIZACIÓN", "IA APLICADA"],
        ["EDITORIAL", "CREATIVE", "DETAIL"],
      ],
    },
    about: {
      title: "Sobre mí",
      scrollHint: "Desliza para continuar",
      blocks: [
        [
          "Hola, soy Eric Mancebo Muminhodzic, ",
          { accent: "desarrollador full-stack" },
          " especializado en transformar ideas y necesidades reales en ",
          { accent: "soluciones digitales funcionales" },
          ".",
        ],
        [
          "Creo aplicaciones, herramientas y experiencias web orientadas a ",
          { accent: "resolver problemas" },
          ", ",
          { accent: "automatizar procesos" },
          " y mejorar la forma en que personas y empresas trabajan y se relacionan con su entorno digital.",
        ],
        [
          "Soy técnico superior en Desarrollo de Aplicaciones Web por el IES L'Estació de Ontinyent. Durante mi formación he trabajado tanto en ",
          { accent: "frontend y backend" },
          ", desarrollando proyectos completos y aprendiendo a entender el ",
          { accent: "producto más allá del código" },
          ".",
        ],
        [
          "Actualmente continúo ampliando mis conocimientos en ",
          { accent: "arquitectura de software" },
          ", automatización, ",
          { accent: "inteligencia artificial aplicada" },
          " y desarrollo de productos digitales mientras curso ",
          { accent: "Ingeniería de Inteligencia Artificial" },
          ".",
        ],
        [
          "Me interesa construir ",
          { accent: "tecnología útil" },
          ": productos mantenibles, intuitivos y pensados para generar un ",
          { accent: "impacto real" },
          " en los usuarios y en los negocios.",
        ],
      ],
    },
    projects: {
      title: "Trabajo destacado",
      items: [
        {
          name: "JustWriteIt",
          year: "2026",
          summary:
            "Aplicación web de transcripción de audio con IA. Segmentación clara, historial y modo estudio con reproducción en bucle.",
          href: "https://www.justwriteit.app/",
          asset: {
            src: "/mark-jwi.svg",
            alt: "JustWriteIt",
            variant: "mark",
          },
        },
        {
          name: "PG Peritaciones",
          year: "2026",
          summary:
            "Web corporativa para gabinete pericial judicial. Presentación de servicios técnicos y captación de clientes.",
          href: "https://www.pgperitaciones.com/",
          asset: {
            src: "/logo-mark.png",
            alt: "PG Peritaciones",
            variant: "monogram",
          },
        },
      ],
    },
    experience: {
      title: "Experiencia",
      scrollHint: "Desliza para avanzar",
      items: [
        {
          period: "2026",
          periodLabel: "— actualidad",
          role: "Desarrollo freelance",
          place: "Independiente · Valencia",
          summary: [
            "Trabajo como ",
            { accent: "desarrollador freelance" },
            " creando ",
            { accent: "soluciones digitales" },
            " para ",
            { accent: "profesionales y pequeñas empresas" },
            " —como la web de ",
            { link: "PG Peritaciones", href: "https://www.pgperitaciones.com/" },
            "—.",
          ],
        },
        {
          period: "2026",
          role: "Desarrollo web · Prácticas",
          place: "Ontinyent",
          logo: {
            src: "/logo-beply.png",
            srcDark: "/logo-beply-white.png",
            alt: "Beply",
          },
          summary: [
            "Durante mis ",
            { accent: "prácticas" },
            " en ",
            { link: "Beply", href: "https://beply.es/" },
            " participé en la evolución de su web corporativa a través de diferentes ",
            { accent: "etapas tecnológicas" },
            ": desde WordPress a Vue/Nuxt y, posteriormente, a Astro. Trabajé en el desarrollo y adaptación de ",
            { accent: "componentes" },
            ", diseño responsive, ",
            { accent: "rendimiento" },
            ", accesibilidad y SEO dentro de un ",
            { accent: "entorno profesional y colaborativo" },
            ".",
          ],
        },
        {
          period: "2020–2025",
          role: "Operaciones y logística digital",
          place: "Bluebags · Ontinyent",
          placeHref: "https://bluebags.es/",
          logo: {
            src: "/bluebagsLogo.png",
            alt: "Bluebags",
          },
          summary: [
            "Más de cuatro años en la ",
            { accent: "operativa logística y digital" },
            " de una empresa dedicada al ",
            { accent: "comercio electrónico" },
            " y a la venta en ",
            { accent: "marketplaces" },
            " nacionales e internacionales. En paralelo obtuve el nivel B2 de inglés y completé el Grado Superior en ",
            { accent: "Desarrollo de Aplicaciones Web" },
            ", y descubrí mi interés por la ",
            { accent: "automatización de procesos" },
            ".",
          ],
        },
        {
          period: "2019",
          role: "Atención al cliente",
          place: "Hostelería · Alicante",
          summary: [
            "Interrumpí mis estudios de ADE en la Universidad de Alicante para priorizar la estabilidad económica de mi familia. Empecé en hostelería, donde desarrollé habilidades de ",
            { accent: "atención al cliente" },
            ", comunicación y ",
            { accent: "resolución de problemas" },
            ", y tuve mi primer contacto real con la operativa diaria de un negocio.",
          ],
        },
      ],
    },
    stack: {
      title: "Stack",
      groups: [
        { label: "Frontend", items: ["Astro", "React", "Next.js", "JavaScript", "TypeScript", "Tailwind"] },
        { label: "Backend", items: ["Node.js", "Python", "Java", "PHP", "PostgreSQL", "MySQL", "MongoDB", "Cloudflare"] },
        { label: "Herramientas", items: ["Git", "GitHub", "Vite", "Docker"] },
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
        { label: "GitHub", href: "https://github.com/Eric0298" },
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
      title: "Eric Mancebo — Full-Stack Developer",
      description:
        "Portfolio of Eric Mancebo. Full-stack developer focused on product, automation and applied AI.",
      role: "Full-Stack Developer",
      ogLocale: "en_US",
    },
    nav: {
      themeToggle: "Toggle theme",
      languageToggle: "Toggle language",
      langLabel: "EN",
    },
    header: {
      displayLine: "FULL-STACK DEVELOPER",
      role: "Full-Stack Developer",
      locationLine: "BASED IN VALENCIA",
      ctaLabel: "Open to work",
      marqueeTerms: ["FULL-STACK", "DEVELOPER", "PRODUCT", "AUTOMATION", "APPLIED AI"],
      marqueeRows: [
        ["FULL-STACK", "DEVELOPER"],
        ["PRODUCT", "AUTOMATION", "APPLIED AI"],
        ["EDITORIAL", "CREATIVE", "DETAIL"],
      ],
    },
    about: {
      title: "About",
      scrollHint: "Scroll to continue",
      blocks: [
        [
          "Hi, I'm Eric Mancebo Muminhodzic, a ",
          { accent: "full-stack developer" },
          " focused on turning ideas and real-world needs into ",
          { accent: "functional digital solutions" },
          ".",
        ],
        [
          "I build applications, tools and web experiences aimed at ",
          { accent: "solving problems" },
          ", ",
          { accent: "automating processes" },
          " and improving the way people and companies work and relate to their digital environment.",
        ],
        [
          "I'm a Higher Technician in Web Application Development from IES L'Estació in Ontinyent. Throughout my training I've worked on both ",
          { accent: "frontend and backend" },
          ", delivering complete projects and learning to understand ",
          { accent: "the product beyond the code" },
          ".",
        ],
        [
          "I am currently expanding my knowledge of ",
          { accent: "software architecture" },
          ", automation, ",
          { accent: "applied artificial intelligence" },
          " and digital product development while studying ",
          { accent: "Artificial Intelligence Engineering" },
          ".",
        ],
        [
          "I care about building ",
          { accent: "useful technology" },
          ": maintainable, intuitive products designed to have a ",
          { accent: "real impact" },
          " on users and businesses.",
        ],
      ],
    },
    projects: {
      title: "Featured work",
      items: [
        {
          name: "JustWriteIt",
          year: "2026",
          summary:
            "AI-powered audio transcription web app. Clear segmentation, history and study mode with loop playback.",
          href: "https://www.justwriteit.app/",
          asset: {
            src: "/mark-jwi.svg",
            alt: "JustWriteIt",
            variant: "mark",
          },
        },
        {
          name: "PG Peritaciones",
          year: "2026",
          summary:
            "Corporate website for a judicial expert firm. Technical services showcase and client acquisition.",
          href: "https://www.pgperitaciones.com/",
          asset: {
            src: "/logo-mark.png",
            alt: "PG Peritaciones",
            variant: "monogram",
          },
        },
      ],
    },
    experience: {
      title: "Experience",
      scrollHint: "Scroll to advance",
      items: [
        {
          period: "2026",
          periodLabel: "— present",
          role: "Freelance developer",
          place: "Independent · Valencia",
          summary: [
            "I work as a ",
            { accent: "freelance developer" },
            " building ",
            { accent: "digital solutions" },
            " for ",
            { accent: "professionals and small companies" },
            " — such as the website for ",
            { link: "PG Peritaciones", href: "https://www.pgperitaciones.com/" },
            ".",
          ],
        },
        {
          period: "2026",
          role: "Web development · Internship",
          place: "Ontinyent",
          logo: {
            src: "/logo-beply.png",
            srcDark: "/logo-beply-white.png",
            alt: "Beply",
          },
          summary: [
            "During my ",
            { accent: "internship" },
            " at ",
            { link: "Beply", href: "https://beply.es/" },
            ", I contributed to the evolution of its corporate website through different ",
            { accent: "technology stages" },
            ": from WordPress to Vue/Nuxt and later to Astro. I worked on developing and adapting ",
            { accent: "components" },
            ", responsive design, ",
            { accent: "performance" },
            ", accessibility and SEO within a ",
            { accent: "professional and collaborative environment" },
            ".",
          ],
        },
        {
          period: "2020–2025",
          role: "Operations and digital logistics",
          place: "Bluebags · Ontinyent",
          placeHref: "https://bluebags.es/",
          logo: {
            src: "/bluebagsLogo.png",
            alt: "Bluebags",
          },
          summary: [
            "More than four years inside the ",
            { accent: "logistics and digital operations" },
            " of a fashion company running ",
            { accent: "ecommerce" },
            " and selling on international ",
            { accent: "marketplaces" },
            ". In parallel I earned a B2 in English and finished the Higher Vocational Degree in ",
            { accent: "Web Application Development" },
            ", and discovered my interest in ",
            { accent: "process automation" },
            ".",
          ],
        },
        {
          period: "2019",
          role: "Customer service",
          place: "Hospitality · Alicante",
          summary: [
            "I paused my Business Administration degree at the University of Alicante to prioritise my family's stability. I started out in hospitality, where I built ",
            { accent: "customer service" },
            ", communication and ",
            { accent: "problem-solving" },
            " skills, and got my first real exposure to how a business runs day to day.",
          ],
        },
      ],
    },
    stack: {
      title: "Stack",
      groups: [
        { label: "Frontend", items: ["Astro", "React", "Next.js", "JavaScript", "TypeScript", "Tailwind"] },
        { label: "Backend", items: ["Node.js", "Python", "Java", "PHP", "PostgreSQL", "MySQL", "MongoDB", "Cloudflare"] },
        { label: "Tools", items: ["Git", "GitHub", "Vite", "Docker"] },
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
        { label: "GitHub", href: "https://github.com/Eric0298" },
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
