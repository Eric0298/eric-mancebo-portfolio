import type { TranslationDictionary } from "../config";

export const es = {
  metadata: {
    htmlLang: "es",
    siteName: "Portfolio de Eric Mancebo",
    defaultTitle: "Eric Mancebo | Full Stack Developer",
    defaultDescription:
      "Portfolio profesional de Eric Mancebo, orientado a desarrollo web de producto, automatización de procesos, IA aplicada, arquitectura backend, SEO, rendimiento, accesibilidad y seguridad.",
    role: "Full Stack Developer",
    ogLocale: "es_ES",
  },
  accessibility: {
    skipToContent: "Saltar al contenido",
  },
  languageSwitcher: {
    label: "Idioma",
    currentLabel: "Idioma actual",
    browserPreferenceLabel: "Preferencia del navegador",
    optionShortLabel: {
      es: "ES",
      en: "EN",
    },
    optionLabel: {
      es: "Ver versión en español",
      en: "Ver versión en inglés",
    },
  },
  navigation: {
    primaryLabel: "Navegación principal",
    footerLabel: "Navegación del pie",
    mobileLabel: "Navegación móvil",
    mobileToggle: "Abrir o cerrar navegación móvil",
    menuOpen: "Menú",
    menuClose: "Cerrar",
    items: [
      { label: "Proyectos", href: "/proyectos/", section: "projects", mobilePriority: 1 },
      { label: "Skills", href: "/skills/", section: "skills", mobilePriority: 2 },
      { label: "Sobre mí", href: "/sobre-mi/", section: "about", mobilePriority: 3 },
      { label: "Contacto", href: "/contacto/", section: "contact", mobilePriority: 4 },
    ],
  },
  layout: {
    homeLabel: "Ir al inicio del portfolio de Eric Mancebo",
    footerSummary:
      "Cuaderno técnico preparado para casos de estudio, automatizaciones, soporte de chatbot y evidencias de calidad.",
    copyright: "Todos los derechos reservados.",
  },
  loader: {
    title: "ERIC MANCEBO",
    sticker: "Portfolio",
    annotation: "abriendo cuaderno",
  },
  pages: {
    home: {
      metaTitle: "Eric Mancebo | Full Stack Developer",
      metaDescription:
        "Portfolio editorial de Eric Mancebo: full stack, producto, automatización, backend y proyectos técnicos con enfoque profesional.",
      eyebrow: "Portada editorial",
      title: "Cuaderno técnico de producto y desarrollo full stack",
      summary:
        "Una portada breve para entrar en proyectos, stack, automatización y contexto profesional sin convertir la home en una página interminable.",
      annotation: "empieza por la portada",
      sticker: "Home",
    },
    projects: {
      metaTitle: "Proyectos | Eric Mancebo",
      metaDescription:
        "Proyectos seleccionados de Eric Mancebo, preparados como casos de estudio con foco en producto, arquitectura, stack y decisiones técnicas.",
      eyebrow: "Trabajo seleccionado",
      title: "Proyectos con intención de producto",
      summary:
        "Casos preparados para explicar qué se construye, por qué importa y qué decisiones técnicas sostienen cada producto.",
      annotation: "casos sin métricas inventadas",
      sticker: "Case studies",
    },
    skills: {
      metaTitle: "Skills y stack técnico | Eric Mancebo",
      metaDescription:
        "Stack técnico inspeccionable de Eric Mancebo: frontend, backend, automatización, IA aplicada, SEO, rendimiento, accesibilidad y seguridad.",
      eyebrow: "Mapa técnico",
      title: "Stack técnico inspeccionable",
      summary:
        "Una lectura organizada del stack, la arquitectura y las señales de calidad que deberían acompañar a cada proyecto.",
      annotation: "pensado para revisión técnica",
      sticker: "Stack",
    },
    about: {
      metaTitle: "Sobre mí | Eric Mancebo",
      metaDescription:
        "Historia profesional de Eric Mancebo: de operaciones reales a producto digital, desarrollo web, automatización e IA aplicada.",
      eyebrow: "Sobre mí",
      title: "De operaciones a producto digital",
      summary:
        "Una lectura narrativa del perfil de Eric desde trabajo operativo, ecommerce y procesos reales hacia desarrollo web, producto e IA aplicada.",
      annotation: "recorrido con criterio",
      sticker: "About",
    },
    contact: {
      metaTitle: "Contacto | Eric Mancebo",
      metaDescription:
        "Canales de contacto de Eric Mancebo para proyectos, empleo, colaboración y futuras automatizaciones de intake profesional.",
      eyebrow: "Contacto",
      title: "Hablemos de proyecto, empleo o colaboración",
      summary:
        "Punto de contacto preparado para conversación profesional y futura automatización de intake, sin publicar todavía un formulario definitivo.",
      annotation: "intake por activar",
      sticker: "Contacto",
    },
  },
  homeCover: {
    manifesto: {
      eyebrow: "Nota de portada",
      title: "La home funciona como índice, no como expediente completo",
      summary:
        "Este portfolio se organiza como un cuaderno editorial: una portada con impacto, páginas internas para profundizar y una narrativa técnica que puede crecer por casos de estudio.",
      annotation: "menos scroll, más foco",
    },
    navigationLabel: "Páginas principales del portfolio",
    cards: [
      {
        pageKey: "projects",
        label: "01 / Proyectos",
        title: "Casos con intención de producto",
        summary:
          "KORUS como flagship y otros proyectos preparados para explicar valor, arquitectura y decisiones técnicas.",
        sticker: "Ver trabajo",
      },
      {
        pageKey: "skills",
        label: "02 / Stack",
        title: "Skills inspeccionables",
        summary:
          "Frontend, backend, automatización, IA aplicada y calidad técnica organizados para revisión rápida.",
        sticker: "Leer stack",
      },
      {
        pageKey: "about",
        label: "03 / Sobre mí",
        title: "De operaciones a producto digital",
        summary:
          "La historia profesional que conecta operaciones, ecommerce, desarrollo web, automatización e IA aplicada.",
        sticker: "Leer historia",
      },
      {
        pageKey: "contact",
        label: "04 / Contacto",
        title: "Abrir conversación",
        summary:
          "Canales preparados para oportunidades profesionales, proyectos y colaboración.",
        sticker: "Contactar",
      },
    ],
    finalCta: {
      eyebrow: "Siguiente página",
      title: "Empieza por los proyectos o abre conversación",
      summary:
        "La estructura queda preparada para crecer con casos reales, CV descargable e intake de contacto cuando estén listos.",
      primaryLabel: "Ver proyectos",
      secondaryLabel: "Ir a contacto",
    },
  },
  projectsPage: {
    flagshipLabel: "Proyecto flagship",
    galleryLabel: "Otros casos en construcción",
    technicalPanel: {
      eyebrow: "Profundidad técnica",
      title: "KORUS como sistema, no como simple interfaz",
      summary:
        "El caso se documenta alrededor de backend modular, React, PostgreSQL, Docker, CI, staging preparado y decisiones de arquitectura aplicadas con criterio.",
      note: "Arquitectura documentada por capas y preparada para explicar trade-offs.",
    },
    finalCta: {
      eyebrow: "Siguiente lectura",
      title: "Revisar stack o abrir conversación",
      summary:
        "Los casos de estudio irán creciendo con capturas, decisiones técnicas y evidencias reales cuando estén listas para publicar.",
      primaryLabel: "Ver stack técnico",
      secondaryLabel: "Ir a contacto",
    },
  },
  projectsIntroHero: {
    eyebrow: "Casos, herramientas y productos digitales",
    title: "Proyectos con intención de producto",
    summary:
      "Casos, herramientas y futuros productos presentados como etiquetas honestas, sin logos de clientes ni capturas inventadas.",
    annotation: "capturas reales pendientes",
    ctaLabel: "Ver casos seleccionados",
    marqueeLabel: "Etiquetas de proyectos y tecnología",
    mockupStripLabel: "Galería de proyectos en construcción",
    technicalLabels: [
      "KORUS",
      "JustWriteIt",
      "Link Shortener",
      "Wedding Planner App",
      "Photographer Portfolio",
      "Future Business Tool",
      "React",
      "TypeScript",
      ".NET",
      "PostgreSQL",
      "Docker",
      "SEO técnico",
      "IA aplicada",
    ],
    mockups: [
      {
        name: "KORUS",
        status: "en proceso",
        category: "SaaS / connected fitness ecosystem",
        summary:
          "Arquitectura backend, frontend React, PostgreSQL, Docker, GitHub Actions y flujo orientado a staging.",
        stack: ["React", "PostgreSQL", "Docker", "GitHub Actions", "Staging"],
        placeholder: "captura pendiente",
        annotation: "arquitectura documentada",
      },
      {
        name: "JustWriteIt",
        status: "en construcción",
        category: "Audio-to-text / escritura y estudio",
        summary:
          "Herramienta de productividad para transcripción, escritura y estudio con Next.js, TypeScript, Tailwind, Python e integración Whisper.",
        stack: ["Next.js", "TypeScript", "Tailwind", "Python", "Whisper"],
        placeholder: "captura pendiente",
        annotation: "captura pendiente",
      },
      {
        name: "Wedding Planner App",
        status: "futuro proyecto",
        category: "Gestión profesional de bodas y eventos",
        summary:
          "Aplicación para planificación, clientes, proveedores, tareas, calendario, presupuesto y documentación.",
        stack: ["Producto digital", "Planning", "Calendario", "Presupuesto", "Documentación"],
        placeholder: "captura pendiente",
        annotation: "imagen pendiente",
      },
      {
        name: "Photographer Portfolio",
        status: "futuro proyecto",
        category: "Portfolio profesional visual",
        summary:
          "Web para fotógrafo, videógrafo o editor con dirección visual fuerte, SEO, conversión de contacto y presentación premium.",
        stack: ["Astro", "SEO técnico", "Contacto", "Dirección visual", "Portfolio"],
        placeholder: "captura pendiente",
        annotation: "presentación premium",
      },
      {
        name: "Link Shortener App",
        status: "posible proyecto",
        category: "Herramienta backend",
        summary:
          "Acortador de URLs con alias personalizados, expiración, protección por contraseña, analítica y redirecciones seguras.",
        stack: ["Backend", "Analítica", "Seguridad", "Redirecciones", "API"],
        placeholder: "captura pendiente",
        annotation: "sin métricas inventadas",
      },
      {
        name: "Future Business Tool",
        status: "idea abierta",
        category: "Herramienta útil para empresas",
        summary:
          "Espacio reservado para una herramienta de negocio práctica que pueda ahorrar tiempo, ordenar procesos o mejorar seguimiento.",
        stack: ["Automatización", "IA aplicada", "Operación", "Producto digital"],
        placeholder: "captura pendiente",
        annotation: "definición por validar",
      },
    ],
  },
  projectsFeaturedCarousel: {
    title: "Proyectos destacados",
    ariaLabel: "Carrusel de proyectos destacados",
    previousLabel: "Ver proyecto anterior",
    nextLabel: "Ver proyecto siguiente",
    placeholderLabel: "captura pendiente",
    items: [
      {
        name: "KORUS",
        status: "En proceso",
        description:
          "SaaS y ecosistema connected fitness con producto, arquitectura backend y flujo orientado a staging.",
        tags: [
          "React",
          "TypeScript",
          "PostgreSQL",
          "Docker",
          "GitHub Actions",
          "Railway",
          "JWT",
          "Clean Architecture",
          "CQRS",
        ],
        isActive: true,
      },
      {
        name: "JustWriteIt",
        status: "Lanzado",
        description: "Herramienta de productividad audio-to-text, escritura y estudio.",
        tags: ["Next.js", "TypeScript", "Tailwind", "Python", "Whisper"],
      },
      {
        name: "Wedding Planner App",
        status: "Futuro proyecto",
        description:
          "Aplicación profesional de gestión de bodas y eventos para planificación, clientes, proveedores, tareas, calendario, presupuesto y documentación.",
        tags: ["Product design", "Planning", "Calendar", "Documentation"],
      },
      {
        name: "Photographer Portfolio",
        status: "Futuro proyecto",
        description:
          "Portfolio profesional para fotógrafo, videógrafo y editor, centrado en narrativa visual, SEO y conversión de contacto.",
        tags: ["Astro", "SEO", "Visual direction", "Contact conversion"],
      },
      {
        name: "Link Shortener App",
        status: "Posible proyecto",
        description:
          "Acortador de URLs con alias personalizados, expiración, protección por contraseña, analítica y redirecciones seguras.",
        tags: ["API", "Security", "Analytics", "Redirects"],
      },
      {
        name: "Future Business Tool",
        status: "Idea futura",
        description:
          "Placeholder para una herramienta interna útil y orientada a negocio que empresas reales podrían usar.",
        tags: ["Business tool", "Automation", "Dashboard", "Operations"],
      },
    ],
  },
  projectsWorkNarrative: {
    value: {
      eyebrow: "Valor de proyecto",
      title: "No construyo pantallas sueltas.",
      summary:
        "Construyo webs, herramientas y productos digitales con estructura, rendimiento, lógica backend y una lectura clara del valor de negocio.",
      annotation: "producto antes que ruido visual",
    },
    separator: {
      ariaLabel: "Capacidades que conectan los proyectos",
      line: "Frontend · Backend · Producto · SEO · Automatización · IA aplicada",
      items: ["Frontend", "Backend", "Producto", "SEO", "Automatización", "IA aplicada"],
    },
    services: {
      eyebrow: "Dónde aporto",
      title: "Dos formas de convertir una idea en algo útil",
      items: [
        {
          index: "01",
          title: "Webs profesionales con intención comercial",
          summary:
            "Sitios preparados para explicar una oferta, captar contacto y sostener SEO técnico, performance y estructura sin convertirse en una plantilla genérica.",
          tags: ["Astro", "SEO técnico", "Conversión", "Performance"],
          annotation: "una web que también ordena negocio",
          visualItems: ["Oferta clara", "Contacto preparado", "Metadatos", "Mobile-first"],
          layout: "text-left",
        },
        {
          index: "02",
          title: "Aplicaciones internas y automatización de procesos",
          summary:
            "Interfaces, flujos y automatizaciones para ordenar datos, tareas, routing y seguimiento cuando un equipo necesita menos trabajo manual y más trazabilidad.",
          tags: ["React", "TypeScript", "Workflows", "Validación"],
          annotation: "menos fricción, más contexto",
          visualItems: ["Datos ordenados", "Routing", "Notificaciones", "Handoff"],
          layout: "text-right",
        },
      ],
    },
    technical: {
      eyebrow: "Credibilidad técnica",
      title: "Calidad visible para recruiters, equipos y clientes",
      summary:
        "La página de proyectos no solo enseña capturas: también deja claro cómo pienso una entrega, desde la interfaz hasta los límites del sistema.",
      items: [
        {
          label: "Frontend",
          title: "Interfaces mantenibles",
          summary:
            "Componentes, responsive real, estados claros y HTML semántico para que la experiencia sea revisable.",
        },
        {
          label: "Backend",
          title: "Arquitectura preparada",
          summary:
            "APIs, modelos de datos, autenticación y separación de responsabilidades cuando el producto lo necesita.",
        },
        {
          label: "Seguridad",
          title: "Validación y límites",
          summary:
            "Mentalidad de validación server-side, variables de entorno, enlaces seguros y controles anti-spam futuros.",
        },
        {
          label: "Entrega",
          title: "CI, despliegue y SEO",
          summary:
            "Pensamiento de staging, GitHub Actions, rendimiento mobile-first, metadatos y estructura indexable.",
        },
      ],
    },
    mosaicCta: {
      ariaLabel: "Navegación hacia skills y contexto profesional",
      eyebrow: "Leer el proceso",
      title: "¿Quieres revisar cómo trabajo?",
      summary:
        "El valor no está solo en la idea del proyecto, sino en cómo se estructura: frontend, backend, SEO, automatización y criterio de producto.",
      primaryLabel: "Ver skills",
      secondaryLabel: "Conocer mi historia",
      annotation: "siguiente capítulo",
      fragments: [
        "Componentes",
        "APIs",
        "SEO técnico",
        "Staging",
        "Validación",
        "Automatización",
        "Producto",
        "Mobile-first",
      ],
    },
    faq: {
      title: "Preguntas que suelen importar",
      ariaLabel: "Preguntas frecuentes sobre proyectos y colaboración",
      items: [
        {
          question: "¿Qué tipo de proyectos puedo construir?",
          answer:
            "Webs profesionales, portfolios, herramientas internas, automatizaciones y aplicaciones pequeñas o medianas con foco en producto.",
        },
        {
          question: "¿Trabajo solo diseño o también backend?",
          answer:
            "Puedo trabajar interfaz, lógica de datos, APIs, validación, despliegue y automatización cuando el proyecto lo requiere.",
        },
        {
          question: "¿Puedo preparar una web profesional para un negocio real?",
          answer:
            "Sí. La idea es conectar presentación, SEO, rendimiento y contacto para que la web sirva a una operación real.",
        },
        {
          question: "¿Cómo demuestro calidad técnica si un proyecto aún está en proceso?",
          answer:
            "Con arquitectura preparada, decisiones documentadas, estados honestos, capturas pendientes y casos de estudio en construcción sin métricas inventadas.",
        },
        {
          question: "¿Estoy disponible para empleo, prácticas o colaboración?",
          answer:
            "Sí. La página de contacto queda preparada para oportunidades laborales, colaboración y conversaciones de proyecto.",
        },
      ],
    },
    finalCta: {
      eyebrow: "Siguiente paso",
      title: "Revisa el stack o abre conversación",
      summary:
        "Si el trabajo encaja, el siguiente paso natural es revisar capacidades técnicas o hablar de una oportunidad concreta.",
      primaryLabel: "Ver skills",
      secondaryLabel: "Contactar",
    },
  },
  skillsPage: {
    inspectionLabel: "Inspección técnica",
    hero: {
      eyebrow: "MAPA TÉCNICO",
      title: "Mis\nSKILLS",
      summary:
        "Tecnologías, criterios y sistemas que utilizo para construir productos digitales mantenibles, rápidos y preparados para crecer.",
      annotation: "notas reales, prioridades visibles",
      primaryLabel: "Ver proyectos",
      secondaryLabel: "Contactar",
      tickerItems: [
        "Frontend",
        "Backend",
        "SEO",
        "DevOps",
        "Datos",
        "Automatización",
        "IA aplicada",
        "Arquitectura",
        "Performance",
        "Accesibilidad",
      ],
      stickers: [
        {
          label: "React + Astro",
          detail: "interfaz, contenido y rendimiento",
          tone: "yellow",
        },
        {
          label: "ASP.NET Core",
          detail: "APIs y lógica backend",
          tone: "green",
        },
        {
          label: "PostgreSQL",
          detail: "datos pensados para producto",
          tone: "white",
        },
        {
          label: "Docker + CI",
          detail: "entrega reproducible",
          tone: "coral",
        },
        {
          label: "SEO técnico",
          detail: "estructura para personas y máquinas",
          tone: "lilac",
        },
      ],
    },
    positioning: {
      eyebrow: "Posicionamiento honesto",
      title: "El stack no es una colección de medallas",
      summary:
        "No presento este stack como una colección de medallas. Lo presento como un sistema de trabajo: tecnologías que sé conectar para construir productos reales.",
      annotation: "tecnologías conectadas, no cromos",
      principles: [
        {
          label: "Criterio",
          title: "Tecnología con intención",
          summary:
            "Cada herramienta debe explicar una decisión: velocidad, mantenibilidad, arquitectura, contenido, seguridad o automatización.",
        },
        {
          label: "Entrega",
          title: "Calidad desde el inicio",
          summary:
            "SEO, rendimiento, accesibilidad y despliegue no son capas finales; forman parte de cómo se plantea la solución.",
        },
        {
          label: "Evolución",
          title: "Aprendizaje visible",
          summary:
            "El portfolio separa lo aplicado, lo que estoy consolidando y lo que sigo ampliando para evitar señales infladas.",
        },
      ],
    },
    capability: {
      eyebrow: "Clasificación real",
      title: "Capacidades sin porcentajes inventados",
      summary:
        "Prefiero mostrar contexto de uso antes que barras numéricas. La madurez de una tecnología depende de dónde se ha aplicado y de qué problema resuelve.",
      groups: [
        {
          label: "01",
          title: "Aplicado en proyectos",
          summary:
            "Tecnologías que ya conecto en interfaces, arquitectura, contenido, calidad técnica y entrega de producto.",
          tone: "applied",
          items: [
            "React",
            "Astro",
            "TypeScript",
            "JavaScript",
            "ASP.NET Core",
            "C#",
            "PostgreSQL",
            "Docker",
            "GitHub Actions",
            "Tailwind",
            "SEO técnico",
            "Accessibility",
            "Responsive design",
          ],
        },
        {
          label: "02",
          title: "En consolidación",
          summary:
            "Piezas que ya tienen práctica aplicada y que sigo ordenando con más criterio de arquitectura, fiabilidad y producto.",
          tone: "consolidation",
          items: ["Automation", "Applied AI", "Python", "Whisper", "Node.js", "MySQL"],
        },
        {
          label: "03",
          title: "En aprendizaje activo",
          summary:
            "Tecnologías y áreas complementarias que mantengo en progreso sin presentarlas como expertise cerrado.",
          tone: "learning",
          items: ["PHP", "Laravel", "Java", "Testing strategy", "Observabilidad"],
        },
      ],
      supporting: {
        label: "Stack complementario / previo",
        items: ["PHP", "Laravel", "Java", "MySQL", "Node.js"],
      },
    },
    stackStateBoard: {
      ariaLabel: "Tablero de estado del stack técnico",
      groups: [
        {
          state: "Aplicado en proyectos",
          summary: "Tecnologías ya conectadas en producto, contenido, arquitectura, calidad técnica o entrega.",
          tone: "applied",
          items: [
            { name: "JavaScript", note: "interacción y lógica cliente" },
            { name: "TypeScript", note: "interfaces y contratos" },
            { name: "React", note: "componentes aplicados" },
            { name: "Astro", note: "portfolio e i18n" },
            { name: "C#", note: "backend y reglas" },
            { name: ".NET", note: "APIs y arquitectura" },
            { name: "PostgreSQL", note: "datos de producto" },
            { name: "Docker", note: "entorno reproducible" },
            { name: "GitHub Actions", note: "CI y entrega" },
            { name: "Railway", note: "staging y despliegue" },
            { name: "Tailwind", note: "sistemas visuales" },
            { name: "SEO", note: "estructura indexable" },
            { name: "Accessibility", note: "interacción revisable" },
          ],
        },
        {
          state: "En consolidación",
          summary: "Piezas con práctica real que sigo ordenando con más criterio operativo y de producto.",
          tone: "consolidation",
          items: [
            { name: "Python", note: "automatización útil" },
            { name: "Whisper", note: "transcripción aplicada" },
            { name: "MySQL", note: "datos complementarios" },
          ],
        },
        {
          state: "En aprendizaje activo",
          summary: "Tecnologías complementarias que mantengo visibles sin presentarlas como dominio cerrado.",
          tone: "learning",
          items: [
            { name: "PHP", note: "contexto previo" },
            { name: "Java", note: "base complementaria" },
          ],
        },
        {
          state: "EN EXPERIENCIA LABORAL",
          summary: "Tecnologías y herramientas utilizadas en contexto profesional real.",
          tone: "work",
          items: [
            { name: "Vue", note: "frontend profesional" },
            { name: "Astro", note: "sites y contenido" },
            { name: "SEO", note: "optimización real" },
            { name: "Claude Code", note: "asistencia de desarrollo" },
            { name: "BMAD agents", note: "orquestación de agentes" },
            { name: "Codex", note: "apoyo técnico en editor" },
          ],
        },
      ],
    },
    macroCapabilityChart: {
      ariaLabel: "Mapa visual de capacidades conectadas",
      centerLabel: "stack como sistema",
      centerNote: "decisiones conectadas, no barras de nivel",
      nodes: [
        { label: "Frontend", note: "interfaz" },
        { label: "Backend", note: "lógica" },
        { label: "DevOps", note: "entrega" },
        { label: "SEO / Performance", note: "visibilidad" },
        { label: "Automation", note: "automatización" },
        { label: "Applied AI", note: "asistencia útil" },
      ],
    },
    technicalDistributionChart: {
      ariaLabel: "Distribución actual del perfil técnico",
      eyebrow: "Distribución actual",
      title: "Peso relativo de mis áreas técnicas",
      summary:
        "Una lectura editorial del foco actual del perfil: no mide precisión científica, muestra dónde pesa más mi trabajo técnico ahora mismo.",
      centerValue: "100%",
      centerLabel: "perfil técnico",
      items: [
        { label: "Frontend", percent: 28, note: "interfaces, componentes, experiencia visual" },
        { label: "Backend", percent: 24, note: "APIs, lógica, arquitectura" },
        { label: "SEO / Performance", percent: 16, note: "visibilidad, semántica, optimización" },
        { label: "DevOps / Deployment", percent: 12, note: "despliegue, CI/CD, entornos" },
        { label: "Automatización", percent: 10, note: "flujos, integraciones, eficiencia" },
        { label: "IA aplicada", percent: 10, note: "asistentes, productividad, procesos" },
      ],
    },
    categories: {
      eyebrow: "Mapa por capas",
      title: "Capacidades que se conectan",
      summary:
        "La página separa áreas de trabajo, pero la intención real es conectarlas: interfaz, datos, backend, despliegue, SEO y automatización.",
      items: [
        {
          label: "Frontend",
          title: "Interfaces que no viven en un solo archivo.",
          summary:
            "Trabajo la interfaz como sistema: componentes, estados, responsive real, contenido legible y detalles que se sostienen al crecer.",
          note: "componentes, estado, responsive y semántica",
          variant: "paper",
          stack: ["React", "Astro", "TypeScript", "JavaScript", "Tailwind"],
          signals: ["Componentes mantenibles", "HTML semántico", "Estados responsive", "Interacción accesible"],
        },
        {
          label: "Backend",
          title: "La lógica también necesita arquitectura.",
          summary:
            "El backend se piensa como límite del producto: APIs, validación, autenticación, modelos, responsabilidades y reglas que deben sobrevivir al frontend.",
          note: "contratos antes que pantallas",
          variant: "graphite",
          stack: ["ASP.NET Core", "C#", "API design", "JWT", "Validación"],
          signals: ["Contratos claros", "Separación de capas", "Reglas server-side", "Seguridad por defecto"],
        },
        {
          label: "Data",
          title: "Los datos condicionan el producto.",
          summary:
            "Una interfaz limpia necesita datos modelados con intención: entidades comprensibles, relaciones claras y consultas que no bloqueen el crecimiento.",
          note: "la base de datos también cuenta historia",
          variant: "marker",
          stack: ["PostgreSQL", "MySQL", "Modelado", "Consultas", "Persistencia"],
          signals: ["Modelos legibles", "Relaciones claras", "Datos preparados", "Trazabilidad"],
        },
        {
          label: "DevOps / Deployment",
          title: "Que funcione en local no es suficiente.",
          summary:
            "La entrega necesita reproducibilidad, variables de entorno, CI, staging preparado y una lectura mínima de operación.",
          note: "entrega como parte del producto",
          variant: "blueprint",
          stack: ["Docker", "GitHub Actions", "Railway", "Variables env", "CI"],
          signals: ["Build reproducible", "Staging preparado", "Secretos fuera del frontend", "Automatización de entrega"],
        },
        {
          label: "SEO / Performance / Accessibility",
          title: "Una web también debe ser entendida por máquinas.",
          summary:
            "La calidad técnica une metadatos, estructura semántica, velocidad mobile-first, foco visible y contenido que pueda indexarse y revisarse.",
          note: "calidad antes del checklist",
          variant: "paper",
          stack: ["SEO técnico", "Performance", "Accessibility", "Structured data", "Responsive"],
          signals: ["Hreflang", "Sitemap", "Focus states", "Carga mobile-first"],
        },
        {
          label: "Automation / Applied AI",
          title: "Menos tareas manuales, más flujo de trabajo.",
          summary:
            "La automatización y la IA aplicada tienen sentido cuando reducen fricción real: intake, transcripción, routing, notificaciones y handoff operativo.",
          note: "automatizar sin vender magia",
          variant: "graphite",
          stack: ["Automation", "Applied AI", "Python", "Whisper", "Workflows"],
          signals: ["Flujos claros", "Payloads estructurados", "Handoff", "Asistencia medible"],
        },
      ],
    },
    process: {
      eyebrow: "Proceso aplicado",
      title: "Del diseño al sistema en producción",
      summary:
        "El stack importa por cómo se mueve entre fases: una idea visual termina conectada a datos, backend, despliegue y automatización útil.",
      steps: ["Diseño", "Frontend", "Backend", "Datos", "Deploy", "Automatización"],
      annotations: ["flujo completo", "sin saltos invisibles", "cada fase deja evidencia"],
      systemDiagram: {
        center: "Producto digital",
        modules: ["Diseño", "Frontend", "Backend", "Datos", "Deploy", "SEO", "Automatización", "IA aplicada"],
        microLabels: ["Componentes", "APIs", "Validación", "PostgreSQL", "CI/CD", "Handoff", "Leads", "Notificaciones"],
        status: "Sistema en vivo",
        uptime: "99.4% · v3.2",
      },
    },
    evidence: {
      eyebrow: "Evidencia conectada",
      title: "Dónde se aplica este stack",
      summary:
        "Los proyectos funcionan como ejemplos de aplicación, no como una lista cerrada ni como métricas inventadas.",
      projectLabel: "Proyecto",
      items: [
        {
          name: "KORUS",
          status: "en construcción",
          summary:
            "Caso flagship para conectar React, backend modular, PostgreSQL, Docker, CI y criterio de producto.",
          stack: ["React", ".NET", "PostgreSQL", "Docker", "GitHub Actions", "arquitectura"],
        },
        {
          name: "JustWriteIt",
          status: "en proceso",
          summary:
            "Herramienta de productividad donde encajan escritura, transcripción, TypeScript, Python y Whisper.",
          stack: ["TypeScript", "Python", "Whisper", "IA aplicada", "productividad"],
        },
        {
          name: "Portfolio",
          status: "actual",
          summary:
            "Sistema editorial con Astro, i18n, SEO, rendimiento, accesibilidad, motion y arquitectura de contenido.",
          stack: ["Astro", "SEO", "Motion", "i18n", "Accessibility", "responsive design"],
        },
        {
          name: "Link Shortener App",
          status: "posible proyecto",
          summary:
            "Superficie compacta para demostrar API, datos, validación, seguridad, analítica y redirecciones.",
          stack: ["API", "Seguridad", "Analítica", "Redirecciones", "validación"],
        },
      ],
    },
    finalCta: {
      eyebrow: "Siguiente página",
      title: "Revisar proyectos o abrir conversación",
      summary:
        "Si quieres comprobar el stack en contexto, el siguiente paso natural es saltar a proyectos, leer el perfil o abrir contacto.",
      projectsLabel: "Ver proyectos",
      aboutLabel: "Sobre mí",
      contactLabel: "Contactar",
    },
    depthPanel: {
      eyebrow: "Zona graphite",
      title: "Backend, seguridad y calidad con más profundidad",
      summary:
        "Las piezas críticas se separan del discurso visual: contratos de API, validación, modelos de datos, variables de entorno, rendimiento, accesibilidad y seguridad.",
    },
    questionBlocks: [
      {
        question: "¿Qué debería revisar primero un recruiter técnico?",
        answer:
          "Proyectos, arquitectura y señales de calidad. El stack se presenta como soporte de decisiones, no como una lista decorativa.",
      },
      {
        question: "¿Dónde encajan automatización e IA?",
        answer:
          "En flujos concretos: contacto, leads, productividad, handoff operativo y asistencia donde aporte claridad medible.",
      },
    ],
  },
  automationPage: {
    mapLabel: "Mapa de flujo",
    connectorLabel: "siguiente paso",
    handoffPanel: {
      eyebrow: "Handoff técnico",
      title: "La automatización debe terminar en una acción útil",
      summary:
        "El objetivo no es añadir herramientas por añadir, sino dejar trazabilidad, contexto y rutas claras para responder mejor.",
    },
    finalCta: {
      title: "Un flujo preparado para evolucionar hacia intake",
      summary:
        "El cuestionario completo no está implementado todavía, pero la arquitectura queda lista para validación, seguridad y routing server-side.",
      label: "Hablar de automatización",
    },
  },
  aboutPage: {
    hero: {
      eyebrow: "SOBRE MÍ",
      title: "DE OPERACIONES A PRODUCTO DIGITAL",
      summary:
        "Mi recorrido no empezó en una pantalla. Empezó trabajando, observando procesos reales y aprendiendo a resolver problemas donde los tiempos, los pedidos y los clientes importaban. Hoy conecto esa experiencia con desarrollo web, producto digital, automatización e IA aplicada.",
      placeholderLabel: "Retrato futuro",
      placeholderNote: "Área reservada para una imagen profesional o retrato editorial.",
      annotation: "trabajo real antes que teoría perfecta",
    },
    manifesto: {
      phrase: "La tecnología tiene sentido cuando mejora procesos reales.",
      placeholders: ["procesos", "trabajo real", "producto"],
    },
    origin: {
      eyebrow: "Antes del código",
      title: "Trabajo real, procesos y criterio",
      summary:
        "Antes del código hubo trabajo real: atención al cliente, almacén, ecommerce, pedidos, etiquetas, marketplaces, errores que corregir y procesos repetitivos que debían salir bien. Esa etapa me enseñó a mirar la tecnología desde dentro del trabajo, no desde fuera.",
      placeholders: ["cliente", "pedidos", "ecommerce", "procesos", "aprendizaje"],
    },
    horizontalStory: {
      ariaLabel: "Historia profesional en cuatro capítulos",
      progressLabel: "Progreso de la historia",
      chapters: [
        {
          label: "01",
          title: "Responsabilidad antes del camino perfecto",
          summary:
            "Por ciertas complicaciones de la vida tuve que empezar a trabajar antes de lo previsto y construir mi camino desde ahí. Ese inicio me enseñó responsabilidad, constancia y la importancia de cumplir cuando las cosas dependen de ti.",
          visualLabel: "Inicio",
          visualNote: "Placeholder para imagen de origen profesional.",
          layout: "text-left",
        },
        {
          label: "02",
          title: "Operaciones, pedidos y procesos reales",
          summary:
            "Durante años trabajé en entornos operativos, especialmente en almacén y ecommerce. Preparar pedidos, gestionar etiquetas, subir trackings o trabajar con marketplaces me enseñó algo muy útil para el desarrollo: los procesos importan tanto como la interfaz.",
          visualLabel: "Operaciones",
          visualNote: "Placeholder para collage de pedidos, etiquetas y marketplaces.",
          layout: "text-right",
        },
        {
          label: "03",
          title: "Aprender mientras seguía avanzando",
          summary:
            "Mientras trabajaba, fui construyendo mi siguiente etapa: inglés, Desarrollo de Aplicaciones Web y proyectos personales. No fue un cambio inmediato, sino una transición sostenida a base de disciplina, práctica y muchas horas de aprendizaje.",
          visualLabel: "Aprendizaje",
          visualNote: "Placeholder para notas, pantalla y cuaderno técnico.",
          layout: "text-left",
        },
        {
          label: "04",
          title: "Producto digital, IA y automatización",
          summary:
            "Hoy estoy llevando esa experiencia hacia el desarrollo de producto: prácticas en Beply, proyectos como KORUS y JustWriteIt, y una forma de trabajar donde frontend, backend, SEO, automatización e IA aplicada se conectan para resolver problemas reales.",
          visualLabel: "Producto",
          visualNote: "Placeholder para sistema digital y herramientas conectadas.",
          layout: "text-right",
        },
      ],
    },
    timeline: {
      eyebrow: "Hitos",
      title: "UNA TRANSICIÓN CONSTRUIDA POR ETAPAS",
      summary:
        "No es una línea perfecta: es una secuencia de trabajo, aprendizaje y práctica aplicada que hoy se conecta en producto digital.",
      items: [
        {
          label: "Etapa 01",
          title: "Empezar a trabajar",
          summary:
            "Una etapa marcada por responsabilidad temprana, trato con clientes y adaptación a contextos reales de trabajo.",
          visualLabel: "Primer trabajo",
          visualNote: "Espacio para una imagen de inicio profesional.",
        },
        {
          label: "Etapa 02",
          title: "Operaciones y ecommerce",
          summary:
            "Años de almacén, pedidos, marketplaces, etiquetas, tracking y tareas repetitivas que me enseñaron a detectar fricción operativa.",
          visualLabel: "Operaciones",
          visualNote: "Futuro collage de pedidos, etiquetas y marketplaces.",
        },
        {
          label: "Etapa 03",
          title: "Inglés como reto personal",
          summary:
            "Avancé con el inglés hasta obtener el B2 y preparé el C1, reforzando disciplina, constancia y capacidad de aprendizaje.",
          visualLabel: "Inglés",
          visualNote: "Placeholder para notas, certificados o material de estudio.",
        },
        {
          label: "Etapa 04",
          title: "Desarrollo de Aplicaciones Web",
          summary:
            "La formación técnica me dio base en programación, bases de datos, backend, frontend, despliegue y estructura de proyectos.",
          visualLabel: "DAW",
          visualNote: "Espacio reservado para cuaderno técnico y pantalla.",
        },
        {
          label: "Etapa 05",
          title: "Proyectos personales",
          summary:
            "KORUS, JustWriteIt y este portfolio me han permitido unir código, producto, automatización, IA, SEO y criterio visual.",
          visualLabel: "Proyectos",
          visualNote: "Slot editorial para bocetos, repos y producto en proceso.",
        },
        {
          label: "Etapa 06",
          title: "Beply",
          summary:
            "En prácticas, he trabajado en un entorno profesional de CRM/ERP, migración web hacia Astro, diseño, integraciones y herramientas asistidas por IA.",
          visualLabel: "Beply",
          visualNote: "Placeholder para fragmentos de CRM, ERP y migración web.",
        },
        {
          label: "Etapa 07",
          title: "Siguiente etapa",
          summary:
            "Busco crecer en equipos donde pueda construir producto digital útil, aprender rápido y aportar visión técnica con sentido operativo.",
          visualLabel: "Siguiente paso",
          visualNote: "Espacio para una imagen de equipo, producto o futuro rol.",
        },
      ],
    },
    closing: {
      eyebrow: "Valor profesional",
      title: "CÓDIGO CON TRABAJO REAL DETRÁS",
      summary:
        "Mi recorrido mezcla operaciones, aprendizaje y desarrollo: código pensado para procesos reales, producto útil y automatización con sentido.",
      placeholderLabel: "Collage final",
      notes: ["operaciones", "desarrollo web", "producto", "automatización", "IA aplicada"],
      media: [
        {
          label: "Operaciones",
          note: "Pedidos, etiquetas y procesos reales.",
          column: "left",
        },
        {
          label: "Cuaderno técnico",
          note: "Aprendizaje sostenido mientras trabajaba.",
          column: "left",
        },
        {
          label: "Beply",
          note: "CRM, ERP, migración web e integraciones.",
          column: "left",
        },
        {
          label: "Pedidos",
          note: "Detalle operativo y ritmo real.",
          column: "left",
        },
        {
          label: "Aprendizaje",
          note: "Horas de práctica entre turnos y proyectos.",
          column: "left",
        },
        {
          label: "Producto digital",
          note: "Frontend, backend y criterio de producto.",
          column: "right",
        },
        {
          label: "Automatización",
          note: "Flujos útiles, no decoración técnica.",
          column: "right",
        },
        {
          label: "IA aplicada",
          note: "Herramientas asistidas con contexto real.",
          column: "right",
        },
        {
          label: "Portfolio",
          note: "Sistema editorial, rendimiento e i18n.",
          column: "right",
        },
        {
          label: "Siguiente equipo",
          note: "Un rol donde construir producto útil.",
          column: "right",
        },
      ],
    },
    cta: {
      summary: "Si mi recorrido encaja con lo que necesitas, revisa mis proyectos o hablemos.",
      projectsLabel: "Ver proyectos",
      contactLabel: "Contactar",
    },
  },
  contactPage: {
    intro: {
      eyebrow: "Entrada de contacto",
      title: "Canales claros antes que formulario largo",
      summary:
        "La página mantiene el contacto simple por ahora y deja preparada una ruta futura para intake automatizado y validado.",
    },
    securityPanel: {
      eyebrow: "Privacidad y routing",
      title: "Contacto preparado para automatización segura",
      summary:
        "Los canales finales se conectarán sin exponer secretos en frontend, con validación server-side y control anti-spam cuando el formulario esté listo.",
    },
    channelNote: "Canal por activar",
  },
  sections: {
    hero: {
      key: "hero",
      anchor: "hero",
      eyebrow: "Arquitectura inicial del portfolio",
      title: "Eric Mancebo",
      summary:
        "Base profesional para presentar trabajo full stack orientado a producto, automatización, IA aplicada, backend, SEO, rendimiento, accesibilidad y seguridad.",
      devicePriority: ["desktop", "tablet", "mobile"],
    },
    about: {
      key: "about",
      anchor: "about",
      eyebrow: "Posicionamiento",
      title: "Full stack con criterio de producto",
      summary:
        "Un perfil orientado a construir interfaces, sistemas y automatizaciones que ayudan a negocio sin perder rigor técnico.",
      devicePriority: ["desktop", "tablet", "mobile"],
    },
    skills: {
      key: "skills",
      anchor: "skills",
      eyebrow: "Mapa de capacidades",
      title: "Capacidades organizadas como notas de campo",
      summary:
        "Lectura rápida para recruiters y revisión técnica: frontend, backend, automatización, IA aplicada y calidad de entrega.",
      devicePriority: ["desktop", "tablet", "mobile"],
    },
    projects: {
      key: "projects",
      anchor: "projects",
      eyebrow: "Trabajo seleccionado",
      title: "Proyectos como casos de estudio",
      summary:
        "Una selección inicial preparada para explicar decisiones de producto, arquitectura, stack y próximos pasos sin inventar métricas.",
      devicePriority: ["desktop", "tablet", "mobile"],
    },
    automation: {
      key: "automation",
      anchor: "automation",
      eyebrow: "Procesos y negocio",
      title: "Workflows pensados para contacto, leads y operación",
      summary:
        "Campo de trabajo reservado para automatizaciones seguras: captura, cualificación, routing y seguimiento con datos estructurados.",
      devicePriority: ["desktop", "tablet"],
    },
    architecture: {
      key: "architecture",
      anchor: "architecture",
      eyebrow: "Backend y sistemas",
      title: "Fundamentos backend preparados para crecer",
      summary:
        "Notas de arquitectura para APIs, validación, modelos de datos, seguridad, despliegue y handoff operativo.",
      devicePriority: ["desktop", "tablet"],
    },
    quality: {
      key: "quality",
      anchor: "quality",
      eyebrow: "Calidad de entrega",
      title: "SEO, rendimiento, accesibilidad y seguridad",
      summary:
        "Capa de calidad preparada para que cada proyecto pueda demostrar metadatos, semántica, velocidad, teclado y límites seguros.",
      devicePriority: ["desktop", "tablet", "mobile"],
    },
    cv: {
      key: "cv",
      anchor: "cv",
      eyebrow: "Contexto recruiter",
      title: "CV y lectura profesional",
      summary:
        "Resumen pensado para entender perfil, experiencia y aprendizaje aplicado sin convertir la página en un documento plano.",
      devicePriority: ["desktop", "tablet", "mobile"],
    },
    contact: {
      key: "contact",
      anchor: "contact",
      eyebrow: "Hub de contacto",
      title: "Contacto preparado para automatización futura",
      summary:
        "Canales profesionales listos para conectar con LinkedIn, GitHub, email y mensajería cuando los datos finales estén configurados.",
      devicePriority: ["desktop", "tablet", "mobile"],
    },
    chatbot: {
      key: "chatbot",
      anchor: "chatbot",
      eyebrow: "Asistente futuro",
      title: "Soporte de chatbot reservado",
      summary:
        "Punto de montaje desactivado para un futuro asistente que pueda explicar proyectos, CV, stack y rutas de contacto.",
      devicePriority: ["desktop", "tablet"],
    },
  },
  hero: {
    actions: {
      projects: "Ver proyectos",
      contact: "Hablar con Eric",
    },
    displayLines: ["Full stack", "con criterio", "de producto"],
    supportingParagraph:
      "Desarrollo interfaces, arquitectura backend y automatizaciones con foco en producto, rendimiento y valor real para negocio.",
    snapshotLabel: "Scaffold inicial",
    architectureSignals: [
      "Astro + React",
      "TypeScript",
      "Automatización",
      "Backend",
      "SEO técnico",
      "IA aplicada",
    ],
    stickers: ["Disponible para proyectos", "Portfolio en construcción", "DevTools-friendly"],
    annotations: [
      {
        label: "pensado para recruiters técnicos",
        placement: "headline",
      },
      {
        label: "retrato pendiente",
        placement: "portrait",
      },
      {
        label: "contacto preparado para intake",
        placement: "actions",
      },
    ],
    portrait: {
      alt: "Retrato de Eric Mancebo",
      placeholderLabel: "Retrato",
      placeholderNote: "Área reservada para futura imagen recortada transparente",
      futureImageLabel: "Futura imagen de Eric",
    },
  },
  aboutCards: [
    {
      label: "01 / Producto",
      title: "Criterio antes que ruido",
      summary:
        "Priorizo decisiones que hacen más claro el producto: navegación, rendimiento, flujos de usuario y mantenimiento real del código.",
    },
    {
      label: "02 / Stack",
      title: "Ejecución full stack",
      summary:
        "Puedo moverme entre interfaz, backend, datos, automatización y despliegue con una lectura práctica de riesgos y dependencias.",
    },
    {
      label: "03 / Evidencia",
      title: "Portfolio pensado para revisión técnica",
      summary:
        "Cada bloque está preparado para evolucionar hacia pruebas concretas: casos de estudio, decisiones de arquitectura y señales de calidad.",
    },
  ],
  projects: {
    statusLabels: {
      planned: "Caso preparado",
      "in-progress": "En construcción",
      private: "Privado",
      published: "Publicado",
    },
    highlightLabel: "Notas de caso",
    technicalFocusLabel: "Foco técnico",
    stackLabel: "Stack",
    items: [
      {
        name: "KORUS",
        slug: "korus",
        status: "in-progress",
        summary:
          "SaaS y ecosistema connected fitness planteado como proyecto flagship, con foco en producto, arquitectura backend y operación preparada.",
        technicalFocus:
          "Backend modular, frontend React, autenticación JWT, PostgreSQL, Docker, CI con GitHub Actions y staging preparado en Railway.",
        stack: [
          "React",
          "TypeScript",
          "PostgreSQL",
          "Docker",
          "GitHub Actions",
          "Railway staging",
          "JWT",
          "Clean Architecture",
          "CQRS",
        ],
        ctaLabel: "Caso de estudio en construcción",
        note: "Flagship: producto, arquitectura y automatización en una misma narrativa.",
        isFlagship: true,
        plannedHighlights: [
          "Arquitectura backend preparada para crecer por módulos",
          "Frontend React orientado a experiencia de producto",
          "Staging y despliegue tratados como parte del sistema",
          "CQRS aplicado donde aporta claridad, no como dogma",
        ],
        links: [],
      },
      {
        name: "JustWriteIt",
        slug: "justwriteit",
        status: "planned",
        summary:
          "Producto de escritura y productividad preparado para mostrar experiencia de usuario, estructura de contenido y soporte técnico evolutivo.",
        technicalFocus:
          "Flujos de escritura, estado de interfaz, validación de datos y base preparada para futuras funciones asistidas.",
        stack: ["React", "TypeScript", "UX de producto", "Validación", "Contenido estructurado"],
        ctaLabel: "Ficha de caso en construcción",
        note: "Interesa por la mezcla de producto, claridad editorial y tooling.",
        plannedHighlights: [
          "Flujo principal de escritura documentable",
          "Sistema de componentes preparado para crecer",
          "Tratamiento de estados vacíos y guardado futuro",
          "Posible integración de IA aplicada sin promesas artificiales",
        ],
        links: [],
      },
      {
        name: "Link Shortener App",
        slug: "link-shortener-app",
        status: "planned",
        summary:
          "Aplicación backend-friendly para explicar redirecciones seguras, modelo de datos, validación y límites operativos.",
        technicalFocus:
          "Diseño de API, persistencia, validación de URLs, control de abusos y observabilidad preparada.",
        stack: ["API", "Base de datos", "Validación", "Seguridad", "Observabilidad"],
        ctaLabel: "Arquitectura por publicar",
        note: "Buen caso para demostrar criterio backend en una superficie pequeña.",
        plannedHighlights: [
          "Contratos claros de endpoints",
          "Modelo de datos legible",
          "Límites de seguridad y rate limiting planificados",
          "Analítica preparada sin inventar métricas",
        ],
        links: [],
      },
      {
        name: "Web y automatización para negocio local",
        slug: "local-business-automation",
        status: "planned",
        summary:
          "Web orientada a captación y operación para negocio local, preparada para conectar presencia online con seguimiento comercial.",
        technicalFocus:
          "SEO local, formularios seguros, routing de contacto, automatización de notificaciones y medición preparada.",
        stack: ["Astro", "SEO local", "Formularios", "Webhooks", "Automatización"],
        ctaLabel: "Caso comercial en preparación",
        note: "Muestra cómo una web pequeña puede funcionar como sistema operativo de negocio.",
        plannedHighlights: [
          "Mapa de proceso comercial",
          "Entrada de contacto preparada para validación",
          "Disparadores de automatización futuros",
          "Calidad de conversión y SEO técnico",
        ],
        links: [],
      },
    ],
  },
  skills: {
    stackLabel: "Stack y capacidades",
    items: [
      {
        title: "Frontend de producto",
        focus:
          "Interfaces con Astro, React y TypeScript, pensadas para lectura rápida, responsive real y componentes mantenibles.",
        items: ["Astro", "React", "TypeScript", "Tailwind CSS", "Web Components"],
        evidencePlaceholder:
          "Notas futuras: arquitectura de componentes, estados responsive, accesibilidad de interacción y resultados Lighthouse.",
      },
      {
        title: "Backend y sistemas",
        focus:
          "APIs, validación server-side, modelos de datos, autenticación, seguridad y despliegues preparados para operación.",
        items: ["Diseño de API", "Zod", "PostgreSQL", "JWT", "Docker", "Variables de entorno"],
        evidencePlaceholder:
          "Notas futuras: diagramas, contratos de endpoint, validación, límites de seguridad y decisiones de despliegue.",
      },
      {
        title: "Automatización e IA aplicada",
        focus:
          "Workflows prácticos para contacto, leads, productividad y handoff operativo, sin depender de magia ni datos opacos.",
        items: ["Diseño de workflows", "IA aplicada", "Routing de leads", "Notificaciones", "Handoff operativo"],
        evidencePlaceholder:
          "Notas futuras: mapas de flujo, payloads estructurados, fiabilidad y mejoras medibles cuando existan datos reales.",
      },
      {
        title: "Calidad técnica",
        focus:
          "SEO, rendimiento, accesibilidad y seguridad como parte de la entrega, no como checklist añadido al final.",
        items: ["SEO", "Rendimiento", "Accesibilidad", "Seguridad", "HTML semántico"],
        evidencePlaceholder:
          "Notas futuras: datos estructurados, pruebas, informes de página, estados focus y auditorías de seguridad.",
      },
    ],
  },
  automation: {
    steps: [
      {
        title: "Captura",
        summary:
          "Recoger una consulta de recruiter, empresa o proyecto mediante una superficie segura, clara y accesible.",
        futureCapability:
          "Validación con Zod, honeypot anti-spam y metadatos preparados para rate limiting.",
      },
      {
        title: "Cualificación",
        summary:
          "Ordenar la consulta por canal, urgencia, tipo de oportunidad y siguiente acción recomendable.",
        futureCapability: "Etiquetado de intención, scoring de lead y payloads estructurados.",
      },
      {
        title: "Routing",
        summary:
          "Enviar el aviso o handoff correcto sin exponer secretos ni lógica sensible en el frontend.",
        futureCapability: "Webhooks server-side, variables de entorno y notificaciones por canal.",
      },
      {
        title: "Notificación",
        summary:
          "Avisar por el canal adecuado con suficiente contexto para tomar una decisión rápida.",
        futureCapability: "Mensajes estructurados, prioridad por intención y registro de origen.",
      },
      {
        title: "Seguimiento",
        summary:
          "Dejar contexto suficiente para responder con rapidez y mantener conversaciones profesionales ordenadas.",
        futureCapability: "Notas CRM, plantillas de email, recordatorios y contexto para chatbot.",
      },
    ],
  },
  architectureCards: [
    {
      label: "API",
      title: "Contratos antes de pantallas",
      summary:
        "La arquitectura futura debe explicar rutas, schemas de validación, metadatos de request y garantías de respuesta.",
    },
    {
      label: "Datos",
      title: "Modelos tipados y contenido separado",
      summary:
        "El portfolio mantiene datos, traducciones y configuración fuera de los componentes para crecer sin deuda innecesaria.",
    },
    {
      label: "Seguridad",
      title: "Límites del lado servidor",
      summary:
        "Preparado para variables de entorno, aislamiento de webhooks, controles anti-spam y enlaces externos seguros.",
    },
    {
      label: "Operación",
      title: "Automatización como extensión del producto",
      summary:
        "El contacto, el chatbot y los futuros casos de estudio quedan conectados a una estrategia de handoff y seguimiento.",
    },
  ],
  quality: {
    preparedForLabel: "Preparado para",
    pillars: [
      {
        title: "SEO técnico",
        summary:
          "Títulos y descripciones únicas, Open Graph, Twitter Cards, JSON-LD, sitemap, robots y headings semánticos.",
        preparedFor: ["Metadatos", "Hreflang", "Datos estructurados", "Sitemap"],
      },
      {
        title: "Rendimiento",
        summary:
          "Carga mobile-first, movimiento controlado, tokens CSS y límites claros para imágenes y componentes futuros.",
        preparedFor: ["Responsive", "Reduced motion", "Plan de imágenes", "CSS mantenible"],
      },
      {
        title: "Accesibilidad",
        summary:
          "Landmarks semánticos, skip link, navegación por teclado, escalas legibles y estados focus visibles.",
        preparedFor: ["Teclado", "ARIA", "Focus visible", "Semántica"],
      },
      {
        title: "Seguridad",
        summary:
          "Protección de enlaces externos, ausencia de secretos expuestos, validación planificada y contacto server-side futuro.",
        preparedFor: ["noopener", "Variables env", "Honeypot", "Validación server"],
      },
    ],
  },
  cv: {
    milestones: [
      {
        label: "Perfil",
        title: "Full stack developer",
        summary:
          "Contexto profesional orientado a producto, sistemas web, automatización e integración técnica con negocio.",
      },
      {
        label: "Experiencia",
        title: "Proyectos con lectura de negocio",
        summary:
          "Espacio preparado para conectar responsabilidades, decisiones técnicas y resultados cuando existan evidencias publicables.",
      },
      {
        label: "Aprendizaje",
        title: "Backend, IA, SEO, rendimiento y seguridad",
        summary:
          "Bloque reservado para certificaciones, práctica aplicada, profundidad técnica y evolución del stack.",
      },
    ],
  },
  contact: {
    mobileActionsLabel: "Acciones de contacto móvil",
    mobileChannelsLabel: "Canales de contacto móvil",
    intentLabel: "Intención",
    channels: [
      {
        channel: "email",
        label: "Email",
        href: "#contact",
        handle: "Canal por activar",
        summary:
          "Canal asíncrono principal, preparado para validación futura y routing seguro de formularios.",
        automationIntent: "email-intake",
        isPlaceholder: true,
      },
      {
        channel: "whatsapp",
        label: "WhatsApp",
        href: "#contact",
        handle: "Canal por activar",
        summary:
          "Canal rápido para contacto móvil con recruiters, empresas y seguimiento de conversaciones.",
        automationIntent: "instant-contact",
        isPlaceholder: true,
      },
      {
        channel: "telegram",
        label: "Telegram",
        href: "#contact",
        handle: "Canal por activar",
        summary: "Canal de mensajería opcional preparado para routing futuro.",
        automationIntent: "instant-contact",
        isPlaceholder: true,
      },
      {
        channel: "instagram",
        label: "Instagram",
        href: "#contact",
        handle: "Canal por activar",
        summary: "Canal social reservado para enlazar el perfil cuando esté listo.",
        automationIntent: "social-contact",
        isPlaceholder: true,
      },
      {
        channel: "linkedin",
        label: "LinkedIn",
        href: "#contact",
        handle: "Canal por activar",
        summary: "Enlace profesional orientado a recruiters y oportunidades laborales.",
        automationIntent: "professional-contact",
        isPlaceholder: true,
      },
      {
        channel: "github",
        label: "GitHub",
        href: "#contact",
        handle: "Canal por activar",
        summary: "Perfil técnico preparado para revisión de código y proyectos.",
        automationIntent: "technical-review",
        isPlaceholder: true,
      },
    ],
    form: {
      name: "Nombre",
      email: "Email",
      honeypot: "Web de empresa",
      message: "Mensaje",
      fieldPlaceholder: "Campo inactivo hasta activar el intake",
      messagePlaceholder: "Mensaje validado cuando el intake esté activo",
      note:
        "El endpoint de contacto queda reservado para validación server-side, controles anti-spam y routing seguro.",
      pendingButton: "Intake por activar",
    },
  },
  chatbot: {
    mountTitle: "Punto de montaje del asistente",
    plannedIntentsLabel: "Intenciones previstas del chatbot",
    config: {
      enabled: false,
      mountId: "portfolio-chatbot",
      summary:
        "El soporte de chatbot queda reservado para responder preguntas sobre portfolio, proyectos, CV y contacto sin publicar un asistente ficticio.",
      plannedIntents: [
        "Responder preguntas de recruiters",
        "Explicar arquitectura de proyectos",
        "Resumir skills por rol",
        "Derivar solicitudes de contacto",
      ],
    },
  },
} satisfies TranslationDictionary;
