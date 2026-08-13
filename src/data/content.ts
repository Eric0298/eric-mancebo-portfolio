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
    body: string;
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
  "https://www.linkedin.com/in/eric-mancebo-muminhodzic";

export const content: Record<Language, PortfolioContent> = {
  es: {
    meta: {
      title: "Eric Mancebo — Desarrollador de Software · Full Stack",
      description:
        "Portfolio de Eric Mancebo. Desarrollador de software con perfil full stack, enfocado en aplicaciones web, producto digital y automatización.",
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
      role: "Aplicaciones web · Producto digital · Automatización",
      locationLine: "BASED IN VALENCIA",
      ctaLabel: "Hablemos",
      marqueeTerms: [
        "DESARROLLO DE SOFTWARE · FULL STACK",
        "APLICACIONES WEB · PRODUCTO DIGITAL · AUTOMATIZACIÓN",
        "FRONTEND · BACKEND · SISTEMAS",
      ],
      marqueeRows: [
        ["DESARROLLO DE SOFTWARE · FULL STACK"],
        ["APLICACIONES WEB · PRODUCTO DIGITAL · AUTOMATIZACIÓN"],
        ["FRONTEND · BACKEND · SISTEMAS"],
      ],
    },
    about: {
      title: "Sobre mí",
      scrollHint: "Desliza para continuar",
      blocks: [
        [
          "Hola, soy ",
          { accent: "Eric Mancebo Muminhodzic" },
          ", desarrollador de software con perfil ",
          { accent: "Full Stack" },
          ".",
        ],
        [
          "Desarrollo ",
          { accent: "aplicaciones web" },
          ", ",
          { accent: "productos digitales" },
          " y soluciones orientadas a resolver necesidades reales, mejorar procesos y hacer más sencillo el trabajo de personas y empresas.",
        ],
        [
          "He trabajado en un entorno ",
          { accent: "SaaS/ERP" },
          " en ",
          { accent: "Beply Technologies" },
          " y también he desarrollado productos propios y soluciones para clientes reales, participando tanto en frontend como en backend, bases de datos, despliegue y evolución de producto.",
        ],
        [
          "Mi experiencia anterior en ",
          { accent: "ecommerce" },
          ", ",
          { accent: "marketplaces" },
          " y ",
          { accent: "operaciones digitales" },
          " me aporta una visión especialmente práctica del software: entender primero el problema, el proceso y las necesidades del negocio antes de decidir cómo resolverlo técnicamente.",
        ],
        [
          "Actualmente continúo ampliando mis conocimientos en ",
          { accent: "arquitectura de software" },
          ", ",
          { accent: "automatización" },
          ", ",
          { accent: "inteligencia artificial aplicada" },
          " y desarrollo de producto, compaginándolo con el ",
          { accent: "Grado en Ingeniería de Inteligencia Artificial" },
          " en la UNED.",
        ],
        [
          "Me interesa construir tecnología útil, mantenible y comprensible, ya sea formando parte de un ",
          { accent: "equipo de desarrollo" },
          " o colaborando directamente con empresas y profesionales en la creación de soluciones digitales.",
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
          role: "Desarrollo de software independiente",
          place: "Independiente · Valencia",
          summary: [
            "Desarrollo ",
            { accent: "soluciones digitales" },
            " para ",
            { accent: "profesionales y pequeñas empresas" },
            ", desde la identificación de necesidades y definición del producto hasta el desarrollo, publicación y evolución de la solución. Ejemplo: ",
            { link: "PG Peritaciones", href: "https://www.pgperitaciones.com/" },
            ".",
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
            label: "Desarrollo",
            items: [
              "JavaScript",
              "TypeScript",
              "Java",
              "PHP",
              "Laravel",
              "Node.js",
            ],
          },
          {
            label: "Frontend",
            items: ["HTML", "CSS", "Tailwind CSS", "Bootstrap"],
          },
          {
            label: "Datos",
            items: ["PostgreSQL", "MySQL", "MongoDB"],
          },
          {
            label: "DevOps & Deployment",
            items: [
              "Git",
              "GitHub",
              "Docker",
              "Jenkins",
              "GitHub Actions",
              "Cloudflare",
              "Vercel",
              "Railway",
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
      title: "¿Hablamos?",
      body:
        "Estoy abierto a conversar sobre desarrollo de software, productos digitales, colaboraciones técnicas o proyectos de digitalización. Si crees que puedo aportar a tu equipo, producto o negocio, puedes escribirme directamente.",
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
        "Portfolio of Eric Mancebo. Software developer with a full-stack profile, focused on web applications, digital products and automation.",
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
      role: "Web applications · Digital products · Automation",
      locationLine: "BASED IN VALENCIA",
      ctaLabel: "Let's talk",
      marqueeTerms: [
        "SOFTWARE DEVELOPMENT · FULL STACK",
        "WEB APPLICATIONS · DIGITAL PRODUCTS · AUTOMATION",
        "FRONTEND · BACKEND · SYSTEMS",
      ],
      marqueeRows: [
        ["SOFTWARE DEVELOPMENT · FULL STACK"],
        ["WEB APPLICATIONS · DIGITAL PRODUCTS · AUTOMATION"],
        ["FRONTEND · BACKEND · SYSTEMS"],
      ],
    },
    about: {
      title: "About",
      scrollHint: "Scroll to continue",
      blocks: [
        [
          "Hi, I'm ",
          { accent: "Eric Mancebo Muminhodzic" },
          ", a software developer with a ",
          { accent: "Full Stack profile" },
          ".",
        ],
        [
          "I develop ",
          { accent: "web applications" },
          ", ",
          { accent: "digital products" },
          " and solutions focused on solving real needs, improving processes and making work easier for people and businesses.",
        ],
        [
          "I have worked in a ",
          { accent: "SaaS/ERP environment" },
          " at ",
          { accent: "Beply Technologies" },
          " and have also developed my own products and solutions for real clients, working across frontend, backend, databases, deployment and product evolution.",
        ],
        [
          "My previous experience in ",
          { accent: "ecommerce" },
          ", ",
          { accent: "marketplaces" },
          " and ",
          { accent: "digital operations" },
          " gives me a practical perspective on software development: understanding the problem, the process and the business needs before deciding how to solve them technically.",
        ],
        [
          "I continue to expand my knowledge of ",
          { accent: "software architecture" },
          ", ",
          { accent: "automation" },
          ", ",
          { accent: "applied artificial intelligence" },
          " and product development while studying ",
          { accent: "Artificial Intelligence Engineering" },
          " at UNED.",
        ],
        [
          "I am interested in building useful, maintainable and understandable technology, whether as part of a ",
          { accent: "development team" },
          " or by collaborating directly with companies and professionals on digital solutions.",
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
          role: "Independent Software Development",
          place: "Independent · Valencia",
          summary: [
            "I develop ",
            { accent: "digital solutions" },
            " for ",
            { accent: "professionals and small businesses" },
            ", from identifying needs and defining the product to development, deployment and ongoing evolution. Example: ",
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
            label: "Development",
            items: [
              "JavaScript",
              "TypeScript",
              "Java",
              "PHP",
              "Laravel",
              "Node.js",
            ],
          },
          {
            label: "Frontend",
            items: ["HTML", "CSS", "Tailwind CSS", "Bootstrap"],
          },
          {
            label: "Data",
            items: ["PostgreSQL", "MySQL", "MongoDB"],
          },
          {
            label: "DevOps & Deployment",
            items: [
              "Git",
              "GitHub",
              "Docker",
              "Jenkins",
              "GitHub Actions",
              "Cloudflare",
              "Vercel",
              "Railway",
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
      title: "Let's talk",
      body:
        "I'm open to conversations about software development, digital products, technical collaborations or digitalisation projects. If you think I can contribute to your team, product or business, feel free to contact me.",
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
