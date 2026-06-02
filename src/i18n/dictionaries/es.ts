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
      { label: "Sobre mí", href: "#about", section: "about", mobilePriority: 1 },
      { label: "Skills", href: "#skills", section: "skills", mobilePriority: 2 },
      { label: "Proyectos", href: "#projects", section: "projects", mobilePriority: 3 },
      { label: "Automatización", href: "#automation", section: "automation" },
      { label: "Arquitectura", href: "#architecture", section: "architecture" },
      { label: "Contacto", href: "#contact", section: "contact", mobilePriority: 4 },
    ],
  },
  layout: {
    homeLabel: "Ir al inicio del portfolio de Eric Mancebo",
    footerSummary:
      "Arquitectura preparada para futuros casos de estudio, automatizaciones, soporte de chatbot y evidencias técnicas de calidad.",
    copyright: "Todos los derechos reservados.",
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
      title: "Desarrollo full stack con mentalidad de producto",
      summary:
        "Espacio preparado para explicar el perfil profesional de Eric con foco en valor de negocio, criterio técnico y ejecución práctica.",
      devicePriority: ["desktop", "tablet", "mobile"],
    },
    skills: {
      key: "skills",
      anchor: "skills",
      eyebrow: "Mapa de capacidades",
      title: "Skills organizadas para inspección técnica",
      summary:
        "Estructura tipada para mostrar frontend, backend, automatización, IA, SEO, rendimiento, accesibilidad y seguridad con evidencias futuras.",
      devicePriority: ["desktop", "tablet", "mobile"],
    },
    projects: {
      key: "projects",
      anchor: "projects",
      eyebrow: "Trabajo seleccionado",
      title: "Proyectos preparados para casos de estudio",
      summary:
        "Showcase inicial para KORUS, JustWriteIt, Link Shortener App y una web con automatización para negocio local.",
      devicePriority: ["desktop", "tablet", "mobile"],
    },
    automation: {
      key: "automation",
      anchor: "automation",
      eyebrow: "Procesos y negocio",
      title: "Flujos de automatización empresarial",
      summary:
        "Sección preparada para explicar entradas, validación, orquestación, notificaciones y resultados medibles.",
      devicePriority: ["desktop", "tablet"],
    },
    architecture: {
      key: "architecture",
      anchor: "architecture",
      eyebrow: "Backend y sistemas",
      title: "Fundamentos de arquitectura backend",
      summary:
        "Espacio reservado para diseño de APIs, validación, modelos de datos, límites de seguridad y despliegue.",
      devicePriority: ["desktop", "tablet"],
    },
    quality: {
      key: "quality",
      anchor: "quality",
      eyebrow: "Calidad de entrega",
      title: "SEO, rendimiento, accesibilidad y seguridad",
      summary:
        "Base para demostrar calidad técnica de producción mediante metadatos, semántica, rendimiento, accesibilidad y seguridad.",
      devicePriority: ["desktop", "tablet", "mobile"],
    },
    cv: {
      key: "cv",
      anchor: "cv",
      eyebrow: "CV interactivo",
      title: "Contexto profesional para recruiters",
      summary:
        "Placeholder compacto para experiencia, formación, certificaciones y futura descarga del CV.",
      devicePriority: ["desktop", "tablet", "mobile"],
    },
    contact: {
      key: "contact",
      anchor: "contact",
      eyebrow: "Hub de contacto",
      title: "Canales de contacto preparados para automatización",
      summary:
        "Estructura lista para WhatsApp, Telegram, Instagram, Email, LinkedIn y GitHub sin exponer secretos.",
      devicePriority: ["desktop", "tablet", "mobile"],
    },
    chatbot: {
      key: "chatbot",
      anchor: "chatbot",
      eyebrow: "Asistente futuro",
      title: "Soporte de chatbot preparado y desactivado",
      summary:
        "Punto de montaje e intenciones reservadas para un futuro chatbot del portfolio, sin publicar un asistente ficticio.",
      devicePriority: ["desktop", "tablet"],
    },
  },
  hero: {
    actions: {
      projects: "Ver estructura de proyectos",
      contact: "Ver contacto",
    },
    snapshotLabel: "Scaffold inicial",
    architectureSignals: [
      "Datos tipados",
      "Secciones responsive",
      "Utilidades de movimiento",
      "Base SEO",
      "Preparado para automatización",
    ],
  },
  aboutCards: [
    {
      label: "Narrativa",
      title: "Posicionamiento profesional",
      summary:
        "La copia futura debe presentar a Eric como un perfil full stack capaz de conectar calidad técnica con impacto de negocio.",
    },
    {
      label: "Audiencia",
      title: "Lectura clara para recruiters y empresas",
      summary:
        "La sección está preparada para escaneo rápido en móvil y para pruebas más detalladas en escritorio.",
    },
    {
      label: "Evidencia",
      title: "Estructura orientada a pruebas",
      summary:
        "Los futuros contenidos deben conectar skills con proyectos, resultados, arquitectura y señales de calidad.",
    },
  ],
  projects: {
    statusLabels: {
      planned: "Preparado",
      "in-progress": "En progreso",
      private: "Privado",
      published: "Publicado",
    },
    highlightLabel: "Puntos previstos",
    items: [
      {
        name: "KORUS",
        slug: "korus",
        status: "planned",
        summary:
          "Espacio preparado para un caso de estudio con contexto de producto, arquitectura y valor medible.",
        plannedHighlights: [
          "Contexto de producto",
          "Arquitectura frontend",
          "Notas backend o integraciones",
          "Evidencia de rendimiento y SEO",
        ],
        links: [],
      },
      {
        name: "JustWriteIt",
        slug: "justwriteit",
        status: "planned",
        summary:
          "Espacio preparado para un producto de escritura o productividad con foco en UX y evidencia técnica.",
        plannedHighlights: [
          "Flujo de usuario",
          "Soporte de contenido o IA",
          "Sistema de componentes",
          "Validación y manejo de datos",
        ],
        links: [],
      },
      {
        name: "Link Shortener App",
        slug: "link-shortener-app",
        status: "planned",
        summary:
          "Espacio preparado para explicar arquitectura backend, redirecciones seguras, analítica, validación y operación.",
        plannedHighlights: [
          "Diseño de API",
          "Modelo de datos",
          "Límites de seguridad",
          "Hooks de observabilidad",
        ],
        links: [],
      },
      {
        name: "Web y automatización para negocio local",
        slug: "local-business-automation",
        status: "planned",
        summary:
          "Espacio preparado para una web orientada a negocio con captación de leads, rutas de contacto y automatización.",
        plannedHighlights: [
          "Mapa de proceso de negocio",
          "Entrada de contacto",
          "Disparadores de automatización",
          "SEO y calidad de conversión",
        ],
        links: [],
      },
    ],
  },
  skills: {
    stackLabel: "Stack y capacidades",
    items: [
      {
        title: "Frontend engineering",
        focus:
          "Arquitectura UI moderna con Astro, React, TypeScript, Tailwind CSS, Web Components y semántica accesible.",
        items: ["Astro", "React", "TypeScript", "Tailwind CSS", "Web Components"],
        evidencePlaceholder:
          "Evidencia futura: arquitectura de componentes, comportamiento responsive, claridad en DevTools y resultados Lighthouse.",
      },
      {
        title: "Arquitectura backend",
        focus:
          "Validación server-side, límites de API, modelado de datos, seguridad, integraciones y flujos preparados para automatización.",
        items: ["Diseño de API", "Validación Zod", "Modelado de datos", "Security headers", "Variables de entorno"],
        evidencePlaceholder:
          "Evidencia futura: diagramas de arquitectura, flujo de validación, notas de despliegue y contratos de endpoints.",
      },
      {
        title: "Automatización e IA aplicada",
        focus:
          "Automatización de procesos de negocio, workflows asistidos por IA, routing de contacto y sistemas prácticos de productividad.",
        items: ["Diseño de workflows", "IA aplicada", "Routing de leads", "Notificaciones", "Handoff operativo"],
        evidencePlaceholder:
          "Evidencia futura: mapas de flujo, métricas antes/después y notas de fiabilidad de la automatización.",
      },
      {
        title: "SEO, rendimiento, accesibilidad y seguridad",
        focus:
          "Calidad de producción en metadatos, semántica, velocidad, teclado, preferencias de movimiento y enlaces seguros.",
        items: ["SEO", "Rendimiento", "Accesibilidad", "Seguridad", "HTML semántico"],
        evidencePlaceholder:
          "Evidencia futura: informes de página, resultados de test, datos estructurados y checklist de seguridad.",
      },
    ],
  },
  automation: {
    steps: [
      {
        title: "Captura",
        summary:
          "Recoger una consulta de recruiter, empresa o proyecto mediante una superficie segura y accesible.",
        futureCapability:
          "Validación con Zod, honeypot anti-spam y metadatos preparados para rate limiting.",
      },
      {
        title: "Cualificación",
        summary:
          "Clasificar la consulta por canal, urgencia, tipo de proyecto y siguiente acción recomendable.",
        futureCapability: "Etiquetado de intención, scoring de lead y payloads estructurados.",
      },
      {
        title: "Routing",
        summary:
          "Enviar la notificación o handoff correcto sin exponer secretos en el frontend.",
        futureCapability: "Webhooks server-side, variables de entorno y notificaciones por canal.",
      },
      {
        title: "Seguimiento",
        summary:
          "Preparar una respuesta fiable para conversaciones profesionales y proyectos potenciales.",
        futureCapability: "Notas CRM, plantillas de email, recordatorios y contexto para chatbot.",
      },
    ],
  },
  architectureCards: [
    {
      label: "API",
      title: "Contratos de endpoint",
      summary:
        "Espacio reservado para futuras rutas API, schemas de validación, metadatos de request y garantías de respuesta.",
    },
    {
      label: "Datos",
      title: "Modelos tipados",
      summary:
        "El contenido y la configuración están separados en archivos tipados para que los casos de estudio puedan crecer con seguridad.",
    },
    {
      label: "Seguridad",
      title: "Límites server-side",
      summary:
        "Preparado para variables de entorno, aislamiento de webhooks, controles anti-spam y enlaces externos seguros.",
    },
    {
      label: "Operación",
      title: "Handoff de automatización",
      summary:
        "Preparado para notificaciones, notas CRM, contexto de chatbot y futura orquestación backend.",
    },
  ],
  quality: {
    preparedForLabel: "Preparado para",
    pillars: [
      {
        title: "Base SEO",
        summary:
          "Títulos y descripciones únicas, Open Graph, Twitter Cards, JSON-LD, sitemap, robots y headings semánticos.",
        preparedFor: ["Componente meta", "Datos estructurados", "Endpoint sitemap", "Endpoint robots"],
      },
      {
        title: "Base de rendimiento",
        summary:
          "Prioridades mobile-first, movimiento reducido, tokens CSS y límites claros por componente.",
        preparedFor: ["Secciones responsive", "Preferencias de movimiento", "Plan de imágenes", "Placeholders ligeros"],
      },
      {
        title: "Base de accesibilidad",
        summary:
          "Landmarks semánticos, skip link, navegación por teclado, escalas legibles y soporte para reduced motion.",
        preparedFor: ["Skip link", "Etiquetas ARIA", "Estados focus", "CSS reduced motion"],
      },
      {
        title: "Base de seguridad",
        summary:
          "Protección de enlaces externos, ausencia de secretos expuestos, plan de validación y contacto server-side futuro.",
        preparedFor: ["noopener noreferrer", "Placeholders env", "Campo honeypot", "Modelo de validación server"],
      },
    ],
  },
  cv: {
    milestones: [
      {
        label: "Perfil",
        title: "Full stack developer",
        summary:
          "Placeholder para el perfil actual de Eric, su posicionamiento y el contexto de colaboración preferido.",
      },
      {
        label: "Experiencia",
        title: "Producto y automatización",
        summary:
          "Placeholder para futuras experiencias, resultados de negocio, responsabilidades y evidencia de proyectos.",
      },
      {
        label: "Aprendizaje",
        title: "Backend, IA, SEO, rendimiento y seguridad",
        summary:
          "Placeholder para certificaciones, hitos de aprendizaje, profundidad técnica y prueba de práctica aplicada.",
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
        "El soporte de chatbot queda reservado para responder preguntas sobre el portfolio, proyectos, CV y contacto.",
      plannedIntents: [
        "Responder preguntas de recruiters",
        "Explicar arquitectura de proyectos",
        "Resumir skills por rol",
        "Derivar solicitudes de contacto",
      ],
    },
  },
} satisfies TranslationDictionary;
