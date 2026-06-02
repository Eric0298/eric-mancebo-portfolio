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
      { label: "Projects", href: "/en/projects/", section: "projects", mobilePriority: 1 },
      { label: "Skills", href: "/en/skills/", section: "skills", mobilePriority: 2 },
      { label: "Automation", href: "/en/automation/", section: "automation", mobilePriority: 3 },
      { label: "About", href: "/en/about/", section: "about" },
      { label: "Contact", href: "/en/contact/", section: "contact", mobilePriority: 4 },
    ],
  },
  layout: {
    homeLabel: "Go to Eric Mancebo portfolio home",
    footerSummary:
      "Technical notebook prepared for case studies, automation, chatbot support, and quality evidence.",
    copyright: "All rights reserved.",
  },
  loader: {
    title: "ERIC MANCEBO",
    sticker: "Portfolio",
    annotation: "opening notebook",
  },
  pages: {
    home: {
      metaTitle: "Eric Mancebo | Full Stack Developer",
      metaDescription:
        "Editorial portfolio for Eric Mancebo: full stack development, product thinking, automation, backend architecture, and technical projects.",
      eyebrow: "Editorial cover",
      title: "Technical notebook for product-minded full stack work",
      summary:
        "A short cover page for entering projects, stack, automation, and professional context without turning the homepage into a long scroll.",
      annotation: "start with the cover",
      sticker: "Home",
    },
    projects: {
      metaTitle: "Projects | Eric Mancebo",
      metaDescription:
        "Selected projects by Eric Mancebo, prepared as case studies with product context, architecture, stack, and technical decisions.",
      eyebrow: "Selected work",
      title: "Projects with product intent",
      summary:
        "Case-study scaffolds for explaining what is being built, why it matters, and which technical decisions support each product.",
      annotation: "no invented metrics",
      sticker: "Case studies",
    },
    skills: {
      metaTitle: "Skills and technical stack | Eric Mancebo",
      metaDescription:
        "Inspectable technical stack for Eric Mancebo: frontend, backend, automation, applied AI, SEO, performance, accessibility, and security.",
      eyebrow: "Technical map",
      title: "Inspectable technical stack",
      summary:
        "An organized view of the stack, architecture, and delivery-quality signals that should support each project.",
      annotation: "built for technical review",
      sticker: "Stack",
    },
    automation: {
      metaTitle: "Automation | Eric Mancebo",
      metaDescription:
        "Automation for real processes: contact, leads, operations, and professional handoff prepared with structured data and security.",
      eyebrow: "Real workflows",
      title: "Automation for real processes",
      summary:
        "Workflows prepared to capture, qualify, route, and follow up on professional conversations without exposing sensitive logic.",
      annotation: "less friction, more traceability",
      sticker: "Workflows",
    },
    about: {
      metaTitle: "About | Eric Mancebo",
      metaDescription:
        "Professional context for Eric Mancebo: evolution toward digital product, full stack development, automation, and technical judgment.",
      eyebrow: "Professional context",
      title: "From operations to digital product",
      summary:
        "A profile view shaped by practical execution, automation, and web systems built around business needs.",
      annotation: "profile with context",
      sticker: "About",
    },
    contact: {
      metaTitle: "Contact | Eric Mancebo",
      metaDescription:
        "Contact channels for Eric Mancebo for projects, employment, collaboration, and future professional intake automation.",
      eyebrow: "Contact",
      title: "Let’s talk about a project, role, or collaboration",
      summary:
        "A professional contact point prepared for future intake automation, without shipping the final questionnaire yet.",
      annotation: "intake pending",
      sticker: "Contact",
    },
  },
  homeCover: {
    manifesto: {
      eyebrow: "Cover note",
      title: "The homepage works as an index, not the whole case file",
      summary:
        "This portfolio is structured as an editorial notebook: a strong cover, focused internal pages, and a technical narrative that can grow through case studies.",
      annotation: "less scrolling, more focus",
    },
    navigationLabel: "Main portfolio pages",
    cards: [
      {
        pageKey: "projects",
        label: "01 / Projects",
        title: "Cases with product intent",
        summary:
          "KORUS as the flagship and other projects prepared to explain value, architecture, and technical decisions.",
        sticker: "View work",
      },
      {
        pageKey: "skills",
        label: "02 / Stack",
        title: "Inspectable skills",
        summary:
          "Frontend, backend, automation, applied AI, and technical quality organized for fast review.",
        sticker: "Read stack",
      },
      {
        pageKey: "automation",
        label: "03 / Automation",
        title: "Processes with real handoff",
        summary:
          "Contact, lead, and operation flows prepared for validation, routing, and future follow-up.",
        sticker: "View flows",
      },
      {
        pageKey: "about",
        label: "04 / About",
        title: "Professional context",
        summary:
          "A short profile view, the move toward digital product, and the technical judgment behind the work.",
        sticker: "Meet profile",
      },
    ],
    finalCta: {
      eyebrow: "Next page",
      title: "Start with projects or open a conversation",
      summary:
        "The structure is ready to grow with real case studies, a downloadable CV, and contact intake when those pieces are ready.",
      primaryLabel: "View projects",
      secondaryLabel: "Go to contact",
    },
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
      title: "Full stack development with product judgment",
      summary:
        "A profile focused on building interfaces, systems, and automation that support business goals without losing technical rigor.",
      devicePriority: ["desktop", "tablet", "mobile"],
    },
    skills: {
      key: "skills",
      anchor: "skills",
      eyebrow: "Capability map",
      title: "Capabilities organized as field notes",
      summary:
        "Fast recruiter reading and technical review across frontend, backend, automation, applied AI, and delivery quality.",
      devicePriority: ["desktop", "tablet", "mobile"],
    },
    projects: {
      key: "projects",
      anchor: "projects",
      eyebrow: "Selected work",
      title: "Projects framed as case studies",
      summary:
        "An initial selection prepared to explain product decisions, architecture, stack, and next steps without inventing metrics.",
      devicePriority: ["desktop", "tablet", "mobile"],
    },
    automation: {
      key: "automation",
      anchor: "automation",
      eyebrow: "Workflow thinking",
      title: "Workflows for contact, leads, and operations",
      summary:
        "A reserved workspace for safe automation: capture, qualification, routing, and follow-up with structured data.",
      devicePriority: ["desktop", "tablet"],
    },
    architecture: {
      key: "architecture",
      anchor: "architecture",
      eyebrow: "Backend and systems",
      title: "Backend foundations prepared to scale",
      summary:
        "Architecture notes for APIs, validation, data models, security, deployment, and operational handoff.",
      devicePriority: ["desktop", "tablet"],
    },
    quality: {
      key: "quality",
      anchor: "quality",
      eyebrow: "Delivery quality",
      title: "SEO, performance, accessibility, and security",
      summary:
        "A quality layer prepared so each project can show metadata, semantics, speed, keyboard support, and safe boundaries.",
      devicePriority: ["desktop", "tablet", "mobile"],
    },
    cv: {
      key: "cv",
      anchor: "cv",
      eyebrow: "Recruiter context",
      title: "CV and professional context",
      summary:
        "A recruiter-friendly summary for profile, experience, and applied learning without turning the page into a flat document.",
      devicePriority: ["desktop", "tablet", "mobile"],
    },
    contact: {
      key: "contact",
      anchor: "contact",
      eyebrow: "Contact hub",
      title: "Contact prepared for future automation",
      summary:
        "Professional channels ready to connect LinkedIn, GitHub, email, and messaging once final details are configured.",
      devicePriority: ["desktop", "tablet", "mobile"],
    },
    chatbot: {
      key: "chatbot",
      anchor: "chatbot",
      eyebrow: "Future assistant",
      title: "Chatbot support reserved",
      summary:
        "A disabled mount point for a future assistant that can explain projects, CV context, stack, and contact paths.",
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
      label: "01 / Product",
      title: "Judgment before noise",
      summary:
        "I prioritize decisions that make the product clearer: navigation, performance, user flows, and real code maintainability.",
    },
    {
      label: "02 / Stack",
      title: "Full stack execution",
      summary:
        "I can move across UI, backend, data, automation, and deployment with a practical view of risks and dependencies.",
    },
    {
      label: "03 / Evidence",
      title: "Built for technical review",
      summary:
        "Each block is prepared to evolve into concrete proof: case studies, architecture decisions, and quality signals.",
    },
  ],
  projects: {
    statusLabels: {
      planned: "Case prepared",
      "in-progress": "In progress",
      private: "Private",
      published: "Published",
    },
    highlightLabel: "Case notes",
    technicalFocusLabel: "Technical focus",
    stackLabel: "Stack",
    items: [
      {
        name: "KORUS",
        slug: "korus",
        status: "in-progress",
        summary:
          "A connected fitness SaaS ecosystem framed as the flagship project, focused on product thinking, backend architecture, and prepared operations.",
        technicalFocus:
          "Modular backend, React frontend, JWT authentication, PostgreSQL, Docker, GitHub Actions CI, and Railway staging preparation.",
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
        ctaLabel: "Case study in progress",
        note: "Flagship: product, architecture, and automation in one narrative.",
        isFlagship: true,
        plannedHighlights: [
          "Backend architecture prepared to grow by modules",
          "React frontend shaped around product experience",
          "Staging and deployment treated as part of the system",
          "CQRS used where it adds clarity, not as dogma",
        ],
        links: [],
      },
      {
        name: "JustWriteIt",
        slug: "justwriteit",
        status: "planned",
        summary:
          "A writing and productivity product prepared to show user experience, content structure, and a technical base that can evolve.",
        technicalFocus:
          "Writing workflows, interface state, data validation, and a foundation for future assisted features.",
        stack: ["React", "TypeScript", "Product UX", "Validation", "Structured content"],
        ctaLabel: "Case file pending",
        note: "Useful for showing product thinking, editorial clarity, and tooling.",
        plannedHighlights: [
          "Documentable core writing flow",
          "Component system prepared to grow",
          "Empty states and future save behavior",
          "Possible applied AI integration without artificial claims",
        ],
        links: [],
      },
      {
        name: "Link Shortener App",
        slug: "link-shortener-app",
        status: "planned",
        summary:
          "A backend-friendly app for explaining safe redirects, data modeling, validation, and operational boundaries.",
        technicalFocus:
          "API design, persistence, URL validation, abuse controls, and prepared observability.",
        stack: ["API", "Database", "Validation", "Security", "Observability"],
        ctaLabel: "Architecture to be published",
        note: "A compact surface for demonstrating backend judgment.",
        plannedHighlights: [
          "Clear endpoint contracts",
          "Readable data model",
          "Planned security boundaries and rate limiting",
          "Analytics prepared without invented metrics",
        ],
        links: [],
      },
      {
        name: "Local Business Website and Automation",
        slug: "local-business-automation",
        status: "planned",
        summary:
          "A local business website concept prepared to connect online presence with commercial follow-up.",
        technicalFocus:
          "Local SEO, safe forms, contact routing, notification automation, and prepared measurement.",
        stack: ["Astro", "Local SEO", "Forms", "Webhooks", "Automation"],
        ctaLabel: "Business case in preparation",
        note: "Shows how a small website can act as a business operating surface.",
        plannedHighlights: [
          "Commercial process map",
          "Contact intake prepared for validation",
          "Future automation triggers",
          "Conversion quality and technical SEO",
        ],
        links: [],
      },
    ],
  },
  skills: {
    stackLabel: "Stack and capabilities",
    items: [
      {
        title: "Product frontend",
        focus:
          "Interfaces with Astro, React, and TypeScript, designed for fast reading, real responsive behavior, and maintainable components.",
        items: ["Astro", "React", "TypeScript", "Tailwind CSS", "Web Components"],
        evidencePlaceholder:
          "Future notes: component architecture, responsive states, interaction accessibility, and Lighthouse results.",
      },
      {
        title: "Backend and systems",
        focus:
          "APIs, server-side validation, data models, authentication, security, and deployment prepared for operations.",
        items: ["API design", "Zod", "PostgreSQL", "JWT", "Docker", "Environment variables"],
        evidencePlaceholder:
          "Future notes: diagrams, endpoint contracts, validation, security boundaries, and deployment decisions.",
      },
      {
        title: "Automation and applied AI",
        focus:
          "Practical workflows for contact, leads, productivity, and operational handoff without magic or opaque data.",
        items: ["Workflow design", "Applied AI", "Lead routing", "Notifications", "Operational handoff"],
        evidencePlaceholder:
          "Future notes: flow maps, structured payloads, reliability, and measurable improvements when real data exists.",
      },
      {
        title: "Technical quality",
        focus:
          "SEO, performance, accessibility, and security as part of delivery, not as a checklist added at the end.",
        items: ["SEO", "Performance", "Accessibility", "Security", "Semantic HTML"],
        evidencePlaceholder:
          "Future notes: structured data, tests, page reports, focus states, and security audits.",
      },
    ],
  },
  automation: {
    steps: [
      {
        title: "Capture",
        summary:
          "Collect a recruiter, company, or project inquiry through a safe, clear, and accessible intake surface.",
        futureCapability:
          "Zod validation, honeypot anti-spam, and rate-limit-ready request metadata.",
      },
      {
        title: "Qualify",
        summary:
          "Sort the inquiry by channel, urgency, opportunity type, and recommended next action.",
        futureCapability: "Intent tagging, lead scoring, and structured contact payloads.",
      },
      {
        title: "Route",
        summary:
          "Send the right notification or handoff without exposing secrets or sensitive logic in the frontend.",
        futureCapability: "Server-side webhooks, environment variables, and channel-specific notifications.",
      },
      {
        title: "Follow up",
        summary:
          "Keep enough context to respond quickly and maintain organized professional conversations.",
        futureCapability: "CRM notes, email templates, reminders, and chatbot handoff context.",
      },
    ],
  },
  architectureCards: [
    {
      label: "API",
      title: "Contracts before screens",
      summary:
        "Future architecture should explain routes, validation schemas, request metadata, and response guarantees.",
    },
    {
      label: "Data",
      title: "Typed models and separated content",
      summary:
        "The portfolio keeps data, translations, and configuration outside components so it can grow without avoidable debt.",
    },
    {
      label: "Security",
      title: "Server-side boundaries",
      summary:
        "Prepared for environment variables, webhook isolation, anti-spam checks, and safe external links.",
    },
    {
      label: "Operations",
      title: "Automation as a product extension",
      summary:
        "Contact, chatbot support, and future case studies connect to a handoff and follow-up strategy.",
    },
  ],
  quality: {
    preparedForLabel: "Prepared for",
    pillars: [
      {
        title: "Technical SEO",
        summary:
          "Unique titles and descriptions, Open Graph, Twitter Cards, JSON-LD, sitemap, robots, and semantic headings.",
        preparedFor: ["Metadata", "Hreflang", "Structured data", "Sitemap"],
      },
      {
        title: "Performance",
        summary:
          "Mobile-first loading, controlled motion, CSS tokens, and clear boundaries for future images and components.",
        preparedFor: ["Responsive", "Reduced motion", "Image plan", "Maintainable CSS"],
      },
      {
        title: "Accessibility",
        summary:
          "Semantic landmarks, skip link, keyboard navigation, readable scales, and visible focus states.",
        preparedFor: ["Keyboard", "ARIA", "Visible focus", "Semantics"],
      },
      {
        title: "Security",
        summary:
          "External link protection, no exposed secrets, validation planning, and future server-side contact handling.",
        preparedFor: ["noopener", "Env variables", "Honeypot", "Server validation"],
      },
    ],
  },
  cv: {
    milestones: [
      {
        label: "Profile",
        title: "Full stack developer",
        summary:
          "Professional context across product-minded web systems, automation, and technical integration with business needs.",
      },
      {
        label: "Experience",
        title: "Projects with business context",
        summary:
          "Prepared space to connect responsibilities, technical decisions, and outcomes when publishable evidence exists.",
      },
      {
        label: "Learning",
        title: "Backend, AI, SEO, performance, and security",
        summary:
          "Reserved block for certifications, applied practice, technical depth, and stack evolution.",
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
        "Future chatbot support is reserved for answering portfolio, project, CV, and contact questions without shipping a fake assistant.",
      plannedIntents: [
        "Answer recruiter questions",
        "Explain project architecture",
        "Summarize skills by role",
        "Route contact requests",
      ],
    },
  },
} satisfies TranslationDictionary;
