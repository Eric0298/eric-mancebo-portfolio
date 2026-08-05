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

export interface StackAiAssisted {
  title: string;
  note: string;
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
    primary: {
      groups: StackGroup[];
    };
    aiAssisted: StackAiAssisted;
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
const linkedinHref =
  "https://www.linkedin.com/in/eric-mancebo-muminhodzic-a50361330/";

export const content: Record<Language, PortfolioContent> = {
  es: {
    meta: {
      title: "Eric Mancebo — Desarrollador de Software · Full Stack",
      description:
        "Portfolio de Eric Mancebo. Desarrollador de software junior con perfil full stack, orientado a producto, calidad y automatización.",
      role: "Desarrollador de Software · Full Stack",
      ogLocale: "es_ES",
    },
    nav: {
      themeToggle: "Cambiar tema",
      languageToggle: "Cambiar idioma",
      langLabel: "ES",
    },
    header: {
      displayLine: "DESARROLLADOR DE SOFTWARE · FULL STACK",
      role: "Desarrollador de software junior con perfil full stack",
      locationLine: "BASED IN VALENCIA",
      ctaLabel: "Abierto a trabajar",
      marqueeTerms: [
        "SOFTWARE",
        "FULL STACK",
        "PRODUCTO",
        "AUTOMATIZACIÓN",
        "SAAS",
        "CALIDAD",
      ],
      marqueeRows: [
        ["SOFTWARE", "FULL STACK"],
        ["PRODUCTO", "AUTOMATIZACIÓN", "SAAS"],
        ["CALIDAD", "SOFTWARE", "FULL STACK"],
      ],
    },
    about: {
      title: "Sobre mí",
      scrollHint: "Desliza para continuar",
      blocks: [
        [
          "Soy ",
          { accent: "Eric Mancebo Muminhodzic" },
          ", Técnico Superior en ",
          { accent: "Desarrollo de Aplicaciones Web" },
          " con perfil ",
          { accent: "full stack" },
          ".",
        ],
        [
          "Tengo experiencia práctica en ",
          { accent: "Beply Technologies" },
          ", dentro de un entorno ",
          { accent: "SaaS/ERP" },
          ", desarrollando aplicaciones full stack y ",
          { accent: "productos digitales" },
          ".",
        ],
        [
          "Mi trabajo anterior en ",
          { accent: "ecommerce" },
          ", ",
          { accent: "marketplaces" },
          " y ",
          { accent: "logística digital" },
          " me ayuda a comprender ",
          { accent: "procesos empresariales" },
          " reales.",
        ],
        [
          "Me interesan el ",
          { accent: "software empresarial" },
          ", el producto y la ",
          { accent: "automatización" },
          ". Actualmente curso ",
          { accent: "Ingeniería de Inteligencia Artificial" },
          " y tengo un nivel ",
          { accent: "B2 de inglés" },
          ".",
        ],
        [
          "Busco una ",
          { accent: "oportunidad junior" },
          " donde seguir aprendiendo y aportar dentro de un ",
          { accent: "equipo profesional" },
          ".",
        ],
      ],
    },
    projects: {
      title: "Trabajo destacado",
      items: [
        {
          name: "MIGA",
          year: "2026",
          summary:
            "PWA mobile-first finalizada para gestionar objetivos, sesiones de estudio, materiales, notas y simulacros. Desarrollada con React, TypeScript, ASP.NET Core y PostgreSQL, con especial atención a la experiencia de usuario, la privacidad y la calidad técnica.",
          href: "https://miga-indol.vercel.app/",
          asset: {
            src: "/05_miga_alt_logo_stacked_transparent.png",
            alt: "MIGA",
            variant: "mark",
          },
        },
        {
          name: "JustWriteIt",
          year: "2026",
          summary:
            "Aplicación de transcripción de audio con historial por usuario y modo estudio. Construida con Next.js, TypeScript, PostgreSQL y Python/Whisper.",
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
            "Web profesional creada para un cliente real. Toma de requisitos, diseño responsive, organización de contenidos, SEO local, accesibilidad y captación de contactos.",
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
          role: "Desarrollo web · SaaS/ERP",
          place: "Beply Technologies · Ontinyent",
          placeHref: "https://beply.es/",
          logo: {
            src: "/logo-beply.png",
            srcDark: "/logo-beply-white.png",
            alt: "Beply Technologies",
          },
          summary: [
            "Experiencia profesional en ",
            { link: "Beply Technologies", href: "https://beply.es/" },
            ", dentro de un entorno ",
            { accent: "SaaS/ERP" },
            ". Participé en la evolución de su web corporativa de WordPress a ",
            { accent: "Vue/Nuxt" },
            " y posteriormente a ",
            { accent: "Astro" },
            ", desarrollando y adaptando ",
            { accent: "componentes" },
            ", diseño responsive, ",
            { accent: "accesibilidad" },
            ", rendimiento y SEO, trabajando de forma colaborativa con ",
            { accent: "GitHub" },
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
      primary: {
        groups: [
          {
            label: "Frontend",
            items: [
              "JavaScript",
              "TypeScript",
              "HTML",
              "CSS",
              "Bootstrap",
              "Tailwind CSS",
            ],
          },
          {
            label: "Backend",
            items: ["Java", "PHP", "Laravel", "Node.js"],
          },
          {
            label: "Bases de datos",
            items: ["MySQL", "PostgreSQL", "MongoDB"],
          },
          {
            label: "DevOps y herramientas",
            items: [
              "Git",
              "GitHub",
              "Docker",
              "Jenkins",
              "GitHub Actions",
              "Vercel",
              "Railway",
              "Cloudflare",
            ],
          },
        ],
      },
      aiAssisted: {
        title: "Tecnologías utilizadas en proyectos asistidos por IA",
        note: "He utilizado estas tecnologías en proyectos desarrollados mediante flujos asistidos por IA, revisando, integrando y validando las soluciones generadas.",
        items: [
          "C#",
          "ASP.NET Core",
          ".NET",
          "Python",
          "Vitest",
          "Testing Library",
          "xUnit",
          "FluentAssertions",
          "Moq",
        ],
      },
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
        { label: "LinkedIn", href: linkedinHref },
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
      title: "Eric Mancebo — Software Developer · Full Stack",
      description:
        "Portfolio of Eric Mancebo. Junior software developer with a full-stack profile, focused on product, quality and automation.",
      role: "Software Developer · Full Stack",
      ogLocale: "en_US",
    },
    nav: {
      themeToggle: "Toggle theme",
      languageToggle: "Toggle language",
      langLabel: "EN",
    },
    header: {
      displayLine: "SOFTWARE DEVELOPER · FULL STACK",
      role: "Junior Software Developer with a full-stack profile",
      locationLine: "BASED IN VALENCIA",
      ctaLabel: "Open to work",
      marqueeTerms: [
        "SOFTWARE",
        "FULL STACK",
        "PRODUCT",
        "AUTOMATION",
        "SAAS",
        "QUALITY",
      ],
      marqueeRows: [
        ["SOFTWARE", "FULL STACK"],
        ["PRODUCT", "AUTOMATION", "SAAS"],
        ["QUALITY", "SOFTWARE", "FULL STACK"],
      ],
    },
    about: {
      title: "About",
      scrollHint: "Scroll to continue",
      blocks: [
        [
          "I'm ",
          { accent: "Eric Mancebo Muminhodzic" },
          ", a Higher Technician in ",
          { accent: "Web Application Development" },
          " with a ",
          { accent: "full-stack profile" },
          ".",
        ],
        [
          "I have hands-on experience at ",
          { accent: "Beply Technologies" },
          ", within a ",
          { accent: "SaaS/ERP environment" },
          ", building full-stack applications and ",
          { accent: "digital products" },
          ".",
        ],
        [
          "My previous work in ",
          { accent: "ecommerce" },
          ", ",
          { accent: "marketplaces" },
          " and ",
          { accent: "digital logistics" },
          " helps me understand real ",
          { accent: "business processes" },
          ".",
        ],
        [
          "I'm interested in ",
          { accent: "enterprise software" },
          ", product and ",
          { accent: "automation" },
          ". I'm currently studying ",
          { accent: "Artificial Intelligence Engineering" },
          " and hold a ",
          { accent: "B2 English level" },
          ".",
        ],
        [
          "I'm looking for a ",
          { accent: "junior opportunity" },
          " where I can keep learning and contribute within a ",
          { accent: "professional team" },
          ".",
        ],
      ],
    },
    projects: {
      title: "Featured work",
      items: [
        {
          name: "MIGA",
          year: "2026",
          summary:
            "Completed mobile-first PWA to manage goals, study sessions, materials, notes and mock exams. Built with React, TypeScript, ASP.NET Core and PostgreSQL, with special focus on user experience, privacy and technical quality.",
          href: "https://miga-indol.vercel.app/",
          asset: {
            src: "/05_miga_alt_logo_stacked_transparent.png",
            alt: "MIGA",
            variant: "mark",
          },
        },
        {
          name: "JustWriteIt",
          year: "2026",
          summary:
            "Audio transcription app with per-user history and study mode. Built with Next.js, TypeScript, PostgreSQL and Python/Whisper.",
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
            "Professional website built for a real client. Requirements gathering, responsive design, content organisation, local SEO, accessibility and lead capture.",
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
          role: "Web development · SaaS/ERP",
          place: "Beply Technologies · Ontinyent",
          placeHref: "https://beply.es/",
          logo: {
            src: "/logo-beply.png",
            srcDark: "/logo-beply-white.png",
            alt: "Beply Technologies",
          },
          summary: [
            "Professional experience at ",
            { link: "Beply Technologies", href: "https://beply.es/" },
            ", within a ",
            { accent: "SaaS/ERP environment" },
            ". I contributed to the evolution of the corporate website from WordPress to ",
            { accent: "Vue/Nuxt" },
            " and later to ",
            { accent: "Astro" },
            ", developing and adapting ",
            { accent: "components" },
            ", responsive design, ",
            { accent: "accessibility" },
            ", performance and SEO, working collaboratively with ",
            { accent: "GitHub" },
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
      primary: {
        groups: [
          {
            label: "Frontend",
            items: [
              "JavaScript",
              "TypeScript",
              "HTML",
              "CSS",
              "Bootstrap",
              "Tailwind CSS",
            ],
          },
          {
            label: "Backend",
            items: ["Java", "PHP", "Laravel", "Node.js"],
          },
          {
            label: "Databases",
            items: ["MySQL", "PostgreSQL", "MongoDB"],
          },
          {
            label: "DevOps & tools",
            items: [
              "Git",
              "GitHub",
              "Docker",
              "Jenkins",
              "GitHub Actions",
              "Vercel",
              "Railway",
              "Cloudflare",
            ],
          },
        ],
      },
      aiAssisted: {
        title: "Technologies used in AI-assisted projects",
        note: "I have used these technologies in projects developed through AI-assisted workflows, reviewing, integrating and validating the generated solutions.",
        items: [
          "C#",
          "ASP.NET Core",
          ".NET",
          "Python",
          "Vitest",
          "Testing Library",
          "xUnit",
          "FluentAssertions",
          "Moq",
        ],
      },
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
        { label: "LinkedIn", href: linkedinHref },
      ],
      footer: "© 2026 Eric Mancebo",
    },
    portrait: {
      alt: "Portrait of Eric Mancebo",
      caption: "Eric Mancebo",
    },
  },
};
