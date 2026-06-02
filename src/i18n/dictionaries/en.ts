import type { TranslationDictionary } from "../config";

export const en = {
  metadata: {
    htmlLang: "en",
    siteName: "Eric Mancebo Portfolio",
    defaultTitle: "Eric Mancebo | Full Stack Developer",
    defaultDescription:
      "Professional portfolio for Eric Mancebo, focused on product web development, business automation, applied AI, backend architecture, SEO, performance, accessibility, and security.",
    role: "Full Stack Developer",
    ogLocale: "en_US",
  },
  accessibility: {
    skipToContent: "Skip to content",
  },
  languageSwitcher: {
    label: "Language",
    currentLabel: "Current language",
    browserPreferenceLabel: "Browser preference",
    optionShortLabel: {
      es: "ES",
      en: "EN",
    },
    optionLabel: {
      es: "View Spanish version",
      en: "View English version",
    },
  },
  navigation: {
    primaryLabel: "Primary navigation",
    footerLabel: "Footer navigation",
    mobileLabel: "Mobile navigation",
    mobileToggle: "Toggle mobile navigation",
    menuOpen: "Menu",
    menuClose: "Close",
    items: [
      { label: "About", href: "#about", section: "about", mobilePriority: 1 },
      { label: "Skills", href: "#skills", section: "skills", mobilePriority: 2 },
      { label: "Projects", href: "#projects", section: "projects", mobilePriority: 3 },
      { label: "Automation", href: "#automation", section: "automation" },
      { label: "Architecture", href: "#architecture", section: "architecture" },
      { label: "Contact", href: "#contact", section: "contact", mobilePriority: 4 },
    ],
  },
  layout: {
    homeLabel: "Go to Eric Mancebo portfolio home",
    footerSummary:
      "Portfolio architecture prepared for future case studies, automation, chatbot support, and technical quality evidence.",
    copyright: "All rights reserved.",
  },
  sections: {
    hero: {
      key: "hero",
      anchor: "hero",
      eyebrow: "Professional portfolio architecture",
      title: "Eric Mancebo",
      summary:
        "A structured portfolio foundation for product-oriented full stack work, automation, applied AI, backend, SEO, performance, accessibility, and security.",
      devicePriority: ["desktop", "tablet", "mobile"],
    },
    about: {
      key: "about",
      anchor: "about",
      eyebrow: "Positioning",
      title: "Product-minded full stack development",
      summary:
        "Prepared space for Eric's professional narrative, focused on business value, technical judgment, and practical delivery.",
      devicePriority: ["desktop", "tablet", "mobile"],
    },
    skills: {
      key: "skills",
      anchor: "skills",
      eyebrow: "Capability map",
      title: "Skills prepared as an inspectable matrix",
      summary:
        "A typed structure for frontend, backend, automation, AI, SEO, performance, accessibility, and security evidence.",
      devicePriority: ["desktop", "tablet", "mobile"],
    },
    projects: {
      key: "projects",
      anchor: "projects",
      eyebrow: "Selected work",
      title: "Featured projects prepared for case studies",
      summary:
        "A placeholder showcase for KORUS, JustWriteIt, Link Shortener App, and a local business automation project.",
      devicePriority: ["desktop", "tablet", "mobile"],
    },
    automation: {
      key: "automation",
      anchor: "automation",
      eyebrow: "Workflow thinking",
      title: "Business automation workflows",
      summary:
        "A future-ready section for explaining inputs, validation, orchestration, notifications, and measurable outcomes.",
      devicePriority: ["desktop", "tablet"],
    },
    architecture: {
      key: "architecture",
      anchor: "architecture",
      eyebrow: "Backend and systems",
      title: "Backend architecture foundations",
      summary:
        "Prepared space for API design, validation, data modeling, security boundaries, and deployment concerns.",
      devicePriority: ["desktop", "tablet"],
    },
    quality: {
      key: "quality",
      anchor: "quality",
      eyebrow: "Delivery quality",
      title: "SEO, performance, accessibility, and security",
      summary:
        "A foundation for demonstrating production-minded technical quality through metadata, semantics, speed, accessibility, and security.",
      devicePriority: ["desktop", "tablet", "mobile"],
    },
    cv: {
      key: "cv",
      anchor: "cv",
      eyebrow: "Interactive CV",
      title: "Recruiter-ready CV context",
      summary:
        "A compact placeholder for future experience, education, certifications, and CV download support.",
      devicePriority: ["desktop", "tablet", "mobile"],
    },
    contact: {
      key: "contact",
      anchor: "contact",
      eyebrow: "Contact hub",
      title: "Contact channels prepared for automation",
      summary:
        "Prepared contact structure for WhatsApp, Telegram, Instagram, Email, LinkedIn, and GitHub without exposing secrets.",
      devicePriority: ["desktop", "tablet", "mobile"],
    },
    chatbot: {
      key: "chatbot",
      anchor: "chatbot",
      eyebrow: "Future assistant",
      title: "Chatbot support prepared and disabled",
      summary:
        "A reserved mount point and intent model for a future portfolio chatbot, without shipping a fake assistant.",
      devicePriority: ["desktop", "tablet"],
    },
  },
  hero: {
    actions: {
      projects: "View projects",
      contact: "Talk to Eric",
    },
    displayLines: ["Full stack", "with product", "judgment"],
    supportingParagraph:
      "I build interfaces, backend architecture, and automation workflows with a focus on product value, performance, and real business outcomes.",
    snapshotLabel: "Initial scaffold",
    architectureSignals: [
      "Astro + React",
      "TypeScript",
      "Automation",
      "Backend",
      "Technical SEO",
      "Applied AI",
    ],
    stickers: ["Open to projects", "Portfolio in progress", "DevTools-friendly"],
    annotations: [
      {
        label: "built for technical recruiters",
        placement: "headline",
      },
      {
        label: "portrait pending",
        placement: "portrait",
      },
      {
        label: "ready for contact intake",
        placement: "actions",
      },
    ],
    portrait: {
      alt: "Portrait of Eric Mancebo",
      placeholderLabel: "Portrait",
      placeholderNote: "Reserved area for a future transparent cutout image",
      futureImageLabel: "Future image of Eric",
    },
  },
  aboutCards: [
    {
      label: "Narrative",
      title: "Professional positioning",
      summary:
        "Future copy should present Eric as a full stack profile who connects technical quality with business value.",
    },
    {
      label: "Audience",
      title: "Clear recruiter and company reading",
      summary:
        "The section is prepared for quick mobile scanning and deeper desktop evidence.",
    },
    {
      label: "Evidence",
      title: "Proof-oriented structure",
      summary:
        "Future content should connect skills to projects, outcomes, architecture, and quality signals.",
    },
  ],
  projects: {
    statusLabels: {
      planned: "Prepared",
      "in-progress": "In progress",
      private: "Private",
      published: "Published",
    },
    highlightLabel: "Planned highlights",
    items: [
      {
        name: "KORUS",
        slug: "korus",
        status: "planned",
        summary:
          "Prepared case study slot for a product-quality project with context, architecture, and measurable value.",
        plannedHighlights: [
          "Product context",
          "Frontend architecture",
          "Backend or integration notes",
          "Performance and SEO evidence",
        ],
        links: [],
      },
      {
        name: "JustWriteIt",
        slug: "justwriteit",
        status: "planned",
        summary:
          "Prepared case study slot for an applied writing or productivity product, ready for UX and technical evidence.",
        plannedHighlights: [
          "User workflow",
          "Content or AI support",
          "Component system",
          "Validation and data handling",
        ],
        links: [],
      },
      {
        name: "Link Shortener App",
        slug: "link-shortener-app",
        status: "planned",
        summary:
          "Prepared case study slot for backend architecture, secure redirects, analytics, validation, and operations.",
        plannedHighlights: [
          "API design",
          "Database model",
          "Security boundaries",
          "Observability hooks",
        ],
        links: [],
      },
      {
        name: "Local Business Website and Automation",
        slug: "local-business-automation",
        status: "planned",
        summary:
          "Prepared case study slot for a business-facing website with lead capture, contact routing, and automation workflows.",
        plannedHighlights: [
          "Business process mapping",
          "Contact intake",
          "Automation triggers",
          "SEO and conversion quality",
        ],
        links: [],
      },
    ],
  },
  skills: {
    stackLabel: "Stack and capabilities",
    items: [
      {
        title: "Frontend engineering",
        focus:
          "Modern UI architecture with Astro, React, TypeScript, Tailwind CSS, web components, and accessible semantics.",
        items: ["Astro", "React", "TypeScript", "Tailwind CSS", "Web Components"],
        evidencePlaceholder:
          "Future evidence: component architecture, responsive behavior, DevTools clarity, and Lighthouse results.",
      },
      {
        title: "Backend architecture",
        focus:
          "Server-side validation, API boundaries, data modeling, security, integrations, and automation-ready workflows.",
        items: ["API design", "Zod validation", "Data modeling", "Security headers", "Environment variables"],
        evidencePlaceholder:
          "Future evidence: architecture diagrams, validation flow, deployment notes, and endpoint contracts.",
      },
      {
        title: "Automation and applied AI",
        focus:
          "Business process automation, AI-assisted workflows, contact routing, and practical productivity systems.",
        items: ["Workflow design", "Applied AI", "Lead routing", "Notifications", "Operational handoff"],
        evidencePlaceholder:
          "Future evidence: workflow maps, before-and-after metrics, and automation reliability notes.",
      },
      {
        title: "SEO, performance, accessibility, security",
        focus:
          "Production-minded quality across metadata, semantics, speed, keyboard access, motion preferences, and safe links.",
        items: ["SEO", "Performance", "Accessibility", "Security", "Semantic HTML"],
        evidencePlaceholder:
          "Future evidence: page reports, test results, structured data, and security checklist status.",
      },
    ],
  },
  automation: {
    steps: [
      {
        title: "Capture",
        summary:
          "Collect a recruiter, company, or project inquiry through a safe and accessible intake surface.",
        futureCapability:
          "Zod validation, honeypot anti-spam, and rate-limit-ready request metadata.",
      },
      {
        title: "Qualify",
        summary:
          "Classify the inquiry by contact channel, urgency, project type, and next best action.",
        futureCapability: "Intent tagging, lead scoring, and structured contact payloads.",
      },
      {
        title: "Route",
        summary:
          "Send the right notification or handoff without exposing secrets in the frontend.",
        futureCapability: "Server-side webhooks, environment variables, and channel-specific notifications.",
      },
      {
        title: "Follow up",
        summary:
          "Prepare a reliable response path for professional outreach and project conversations.",
        futureCapability: "CRM notes, email templates, reminders, and chatbot handoff context.",
      },
    ],
  },
  architectureCards: [
    {
      label: "API",
      title: "Endpoint contracts",
      summary:
        "Reserved space for future API routes, validation schemas, request metadata, and response guarantees.",
    },
    {
      label: "Data",
      title: "Typed models",
      summary:
        "Content and configuration are separated into typed files so future case studies can grow safely.",
    },
    {
      label: "Security",
      title: "Server-side boundaries",
      summary:
        "Prepared for environment variables, webhook isolation, anti-spam checks, and safe external links.",
    },
    {
      label: "Operations",
      title: "Automation handoff",
      summary:
        "Prepared for notifications, CRM notes, chatbot context, and future backend workflow orchestration.",
    },
  ],
  quality: {
    preparedForLabel: "Prepared for",
    pillars: [
      {
        title: "SEO foundation",
        summary:
          "Unique titles, descriptions, Open Graph, Twitter Cards, JSON-LD, sitemap, robots, and semantic headings.",
        preparedFor: ["Meta component", "Structured data", "Sitemap endpoint", "Robots endpoint"],
      },
      {
        title: "Performance foundation",
        summary:
          "Mobile-first loading priorities, reduced heavy motion, CSS tokens, and component-level boundaries.",
        preparedFor: ["Responsive sections", "Motion preferences", "Image optimization plan", "Lean placeholders"],
      },
      {
        title: "Accessibility foundation",
        summary:
          "Semantic landmarks, skip links, keyboard navigation, readable type scales, and reduced-motion support.",
        preparedFor: ["Skip link", "ARIA labels", "Focus states", "Reduced motion CSS"],
      },
      {
        title: "Security foundation",
        summary:
          "External link protection, no exposed secrets, validation planning, and future server-side contact handling.",
        preparedFor: ["noopener noreferrer", "Env placeholders", "Honeypot field", "Server validation model"],
      },
    ],
  },
  cv: {
    milestones: [
      {
        label: "Profile",
        title: "Full stack developer",
        summary:
          "Placeholder for Eric's current professional profile, positioning, and preferred collaboration context.",
      },
      {
        label: "Experience",
        title: "Product and automation work",
        summary:
          "Placeholder for future experience entries, business outcomes, responsibilities, and project evidence.",
      },
      {
        label: "Learning",
        title: "Backend, AI, SEO, performance, and security",
        summary:
          "Placeholder for certifications, learning milestones, technical depth, and proof of applied practice.",
      },
    ],
  },
  contact: {
    mobileActionsLabel: "Mobile contact actions",
    mobileChannelsLabel: "Mobile contact channels",
    intentLabel: "Intent",
    channels: [
      {
        channel: "email",
        label: "Email",
        href: "#contact",
        handle: "To be configured",
        summary:
          "Primary async contact channel, prepared for future validation and safe form routing.",
        automationIntent: "email-intake",
        isPlaceholder: true,
      },
      {
        channel: "whatsapp",
        label: "WhatsApp",
        href: "#contact",
        handle: "To be configured",
        summary:
          "Fast mobile contact channel for recruiters, companies, and follow-up conversations.",
        automationIntent: "instant-contact",
        isPlaceholder: true,
      },
      {
        channel: "telegram",
        label: "Telegram",
        href: "#contact",
        handle: "To be configured",
        summary: "Optional direct messaging channel prepared for future routing.",
        automationIntent: "instant-contact",
        isPlaceholder: true,
      },
      {
        channel: "instagram",
        label: "Instagram",
        href: "#contact",
        handle: "To be configured",
        summary: "Social contact channel reserved for future profile linking.",
        automationIntent: "social-contact",
        isPlaceholder: true,
      },
      {
        channel: "linkedin",
        label: "LinkedIn",
        href: "#contact",
        handle: "To be configured",
        summary: "Professional profile link prepared for recruiter outreach.",
        automationIntent: "professional-contact",
        isPlaceholder: true,
      },
      {
        channel: "github",
        label: "GitHub",
        href: "#contact",
        handle: "To be configured",
        summary: "Code profile link prepared for technical review.",
        automationIntent: "technical-review",
        isPlaceholder: true,
      },
    ],
    form: {
      name: "Name",
      email: "Email",
      honeypot: "Company website",
      message: "Message",
      fieldPlaceholder: "Future contact form field",
      messagePlaceholder: "Future validated message field",
      note:
        "The contact endpoint is reserved for future server-side validation, anti-spam checks, and safe routing.",
      pendingButton: "Contact form pending",
    },
  },
  chatbot: {
    mountTitle: "Assistant mount point",
    plannedIntentsLabel: "Planned chatbot intents",
    config: {
      enabled: false,
      mountId: "portfolio-chatbot",
      summary:
        "Future chatbot support is reserved for guided portfolio questions, project discovery, CV context, and contact handoff.",
      plannedIntents: [
        "Answer recruiter questions",
        "Explain project architecture",
        "Summarize skills by role",
        "Route contact requests",
      ],
    },
  },
} satisfies TranslationDictionary;
