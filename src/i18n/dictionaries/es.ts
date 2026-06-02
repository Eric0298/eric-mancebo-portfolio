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
      { label: "Automatización", href: "/automatizacion/", section: "automation", mobilePriority: 3 },
      { label: "Sobre mí", href: "/sobre-mi/", section: "about" },
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
    automation: {
      metaTitle: "Automatización | Eric Mancebo",
      metaDescription:
        "Automatización de procesos reales para contacto, leads, operaciones y handoff profesional, preparada con datos estructurados y seguridad.",
      eyebrow: "Procesos reales",
      title: "Automatización para procesos reales",
      summary:
        "Flujos preparados para capturar, cualificar, enrutar y seguir conversaciones profesionales sin exponer lógica sensible.",
      annotation: "menos fricción, más trazabilidad",
      sticker: "Workflows",
    },
    about: {
      metaTitle: "Sobre mí | Eric Mancebo",
      metaDescription:
        "Contexto profesional de Eric Mancebo: evolución hacia producto digital, desarrollo full stack, automatización y criterio técnico.",
      eyebrow: "Contexto profesional",
      title: "De operaciones a producto digital",
      summary:
        "Una lectura del perfil de Eric desde la ejecución práctica, la automatización y la construcción de sistemas web orientados a negocio.",
      annotation: "perfil con contexto",
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
      annotation: "intake pendiente",
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
        pageKey: "automation",
        label: "03 / Automatización",
        title: "Procesos con handoff real",
        summary:
          "Flujos de contacto, leads y operación preparados para validación, routing y seguimiento futuro.",
        sticker: "Ver flujos",
      },
      {
        pageKey: "about",
        label: "04 / Sobre mí",
        title: "Contexto profesional",
        summary:
          "Una lectura breve del perfil, la evolución hacia producto digital y el criterio técnico detrás del trabajo.",
        sticker: "Conocer perfil",
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
        ctaLabel: "Ficha de caso pendiente",
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
        handle: "Pendiente de configurar",
        summary:
          "Canal asíncrono principal, preparado para validación futura y routing seguro de formularios.",
        automationIntent: "email-intake",
        isPlaceholder: true,
      },
      {
        channel: "whatsapp",
        label: "WhatsApp",
        href: "#contact",
        handle: "Pendiente de configurar",
        summary:
          "Canal rápido para contacto móvil con recruiters, empresas y seguimiento de conversaciones.",
        automationIntent: "instant-contact",
        isPlaceholder: true,
      },
      {
        channel: "telegram",
        label: "Telegram",
        href: "#contact",
        handle: "Pendiente de configurar",
        summary: "Canal de mensajería opcional preparado para routing futuro.",
        automationIntent: "instant-contact",
        isPlaceholder: true,
      },
      {
        channel: "instagram",
        label: "Instagram",
        href: "#contact",
        handle: "Pendiente de configurar",
        summary: "Canal social reservado para enlazar el perfil cuando esté listo.",
        automationIntent: "social-contact",
        isPlaceholder: true,
      },
      {
        channel: "linkedin",
        label: "LinkedIn",
        href: "#contact",
        handle: "Pendiente de configurar",
        summary: "Enlace profesional orientado a recruiters y oportunidades laborales.",
        automationIntent: "professional-contact",
        isPlaceholder: true,
      },
      {
        channel: "github",
        label: "GitHub",
        href: "#contact",
        handle: "Pendiente de configurar",
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
      fieldPlaceholder: "Campo reservado para el futuro formulario",
      messagePlaceholder: "Campo reservado para futuro mensaje validado",
      note:
        "El endpoint de contacto queda reservado para validación server-side, controles anti-spam y routing seguro.",
      pendingButton: "Formulario pendiente",
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
