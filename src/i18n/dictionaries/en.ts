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
      annotation: "intake ready to enable",
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
  projectsPage: {
    flagshipLabel: "Flagship project",
    galleryLabel: "Other cases in progress",
    technicalPanel: {
      eyebrow: "Technical depth",
      title: "KORUS as a system, not just an interface",
      summary:
        "The case is documented around modular backend work, React, PostgreSQL, Docker, CI, prepared staging, and architecture choices applied with judgment.",
      note: "Layered architecture documented and prepared for explaining trade-offs.",
    },
    finalCta: {
      eyebrow: "Next reading",
      title: "Review the stack or open a conversation",
      summary:
        "Case studies will grow with screenshots, technical decisions, and real evidence when those pieces are ready to publish.",
      primaryLabel: "View technical stack",
      secondaryLabel: "Go to contact",
    },
  },
  projectsIntroHero: {
    eyebrow: "Case studies, tools and digital products",
    title: "Product-minded project work",
    summary:
      "Projects, tools, and future product ideas presented as honest labels, with no fake client logos or invented screenshots.",
    annotation: "empty mockups until real captures exist",
    ctaLabel: "View selected work",
    marqueeLabel: "Project and technology labels",
    mockupStripLabel: "Project gallery in progress",
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
      "Technical SEO",
      "Applied AI",
    ],
    mockups: [
      {
        name: "KORUS",
        status: "in progress",
        category: "SaaS / connected fitness ecosystem",
        summary:
          "Backend architecture, React frontend, PostgreSQL, Docker, GitHub Actions, and a staging-oriented workflow.",
        stack: ["React", "PostgreSQL", "Docker", "GitHub Actions", "Staging"],
        placeholder: "case study in progress",
        annotation: "architecture documented",
      },
      {
        name: "JustWriteIt",
        status: "in progress",
        category: "Audio-to-text / writing and study tool",
        summary:
          "Productivity tool for transcription, writing, and study workflows with Next.js, TypeScript, Tailwind, Python, and Whisper integration.",
        stack: ["Next.js", "TypeScript", "Tailwind", "Python", "Whisper"],
        placeholder: "case study in progress",
        annotation: "capture pending",
      },
      {
        name: "Wedding Planner App",
        status: "future project",
        category: "Professional wedding and event management",
        summary:
          "Application for planning, clients, suppliers, tasks, calendar, budget, and documentation.",
        stack: ["Digital Product", "Planning", "Calendar", "Budget", "Documentation"],
        placeholder: "case study in progress",
        annotation: "image pending",
      },
      {
        name: "Photographer Portfolio",
        status: "future project",
        category: "Professional visual portfolio",
        summary:
          "Website for a photographer, videographer, or editor with strong visual direction, SEO, contact conversion, and premium presentation.",
        stack: ["Astro", "Technical SEO", "Contact", "Visual Direction", "Portfolio"],
        placeholder: "case study in progress",
        annotation: "premium presentation",
      },
      {
        name: "Link Shortener App",
        status: "possible project",
        category: "Backend tool",
        summary:
          "URL shortener with custom aliases, expiration, password protection, analytics, and secure redirects.",
        stack: ["Backend", "Analytics", "Security", "Redirects", "API"],
        placeholder: "case study in progress",
        annotation: "no invented metrics",
      },
      {
        name: "Future Business Tool",
        status: "open idea",
        category: "Useful business-oriented tool",
        summary:
          "Reserved space for a practical business tool that could save time, organize processes, or improve follow-up.",
        stack: ["Automation", "Applied AI", "Operations", "Digital Product"],
        placeholder: "case study in progress",
        annotation: "definition to validate",
      },
    ],
  },
  projectsFeaturedCarousel: {
    title: "Featured projects",
    ariaLabel: "Featured projects carousel",
    previousLabel: "View previous project",
    nextLabel: "View next project",
    placeholderLabel: "case study in progress",
    items: [
      {
        name: "KORUS",
        status: "In progress",
        description:
          "SaaS and connected fitness ecosystem with product, backend architecture, and a staging-oriented workflow.",
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
        status: "Launched",
        description: "Audio-to-text, writing, and study productivity tool.",
        tags: ["Next.js", "TypeScript", "Tailwind", "Python", "Whisper"],
      },
      {
        name: "Wedding Planner App",
        status: "Future project",
        description:
          "Professional wedding and event management application for planning, clients, suppliers, tasks, calendar, budget, and documentation.",
        tags: ["Product design", "Planning", "Calendar", "Documentation"],
      },
      {
        name: "Photographer Portfolio",
        status: "Future project",
        description:
          "Professional portfolio website for a photographer, videographer, and editor, focused on visual storytelling, SEO, and contact conversion.",
        tags: ["Astro", "SEO", "Visual direction", "Contact conversion"],
      },
      {
        name: "Link Shortener App",
        status: "Possible project",
        description:
          "URL shortener with custom aliases, expiration, password protection, analytics, and secure redirects.",
        tags: ["API", "Security", "Analytics", "Redirects"],
      },
      {
        name: "Future Business Tool",
        status: "Future idea",
        description: "Placeholder for a useful business-oriented internal tool companies could actually use.",
        tags: ["Business tool", "Automation", "Dashboard", "Operations"],
      },
    ],
  },
  projectsWorkNarrative: {
    value: {
      eyebrow: "Project value",
      title: "I do not build isolated screens.",
      summary:
        "I build websites, tools, and digital products with structure, performance, backend logic, and a clear view of business value.",
      annotation: "product before visual noise",
    },
    separator: {
      ariaLabel: "Capabilities that connect the project work",
      line: "Frontend · Backend · Product · SEO · Automation · Applied AI",
      items: ["Frontend", "Backend", "Product", "SEO", "Automation", "Applied AI"],
    },
    services: {
      eyebrow: "Where I can help",
      title: "Two ways to turn an idea into something useful",
      items: [
        {
          index: "01",
          title: "Professional websites with commercial intent",
          summary:
            "Websites built to explain an offer, capture contact, and support technical SEO, performance, and structure without feeling like a generic template.",
          tags: ["Astro", "Technical SEO", "Conversion", "Performance"],
          annotation: "a website that also organizes business",
          visualItems: ["Clear offer", "Contact ready", "Metadata", "Mobile-first"],
          layout: "text-left",
        },
        {
          index: "02",
          title: "Internal applications and process automation",
          summary:
            "Interfaces, flows, and automations for organizing data, tasks, routing, and follow-up when a team needs less manual work and more traceability.",
          tags: ["React", "TypeScript", "Workflows", "Validation"],
          annotation: "less friction, more context",
          visualItems: ["Organized data", "Routing", "Notifications", "Handoff"],
          layout: "text-right",
        },
      ],
    },
    technical: {
      eyebrow: "Technical credibility",
      title: "Quality signals for recruiters, teams, and clients",
      summary:
        "The projects page should not only show visuals: it should make the delivery thinking inspectable, from interface decisions to system boundaries.",
      items: [
        {
          label: "Frontend",
          title: "Maintainable interfaces",
          summary:
            "Components, real responsive behavior, clear states, and semantic HTML for an experience that can be reviewed.",
        },
        {
          label: "Backend",
          title: "Prepared architecture",
          summary:
            "APIs, data models, authentication, and separation of responsibilities when the product needs it.",
        },
        {
          label: "Security",
          title: "Validation and boundaries",
          summary:
            "Server-side validation mindset, environment variables, safe links, and future anti-spam controls.",
        },
        {
          label: "Delivery",
          title: "CI, deployment, and SEO",
          summary:
            "Staging thinking, GitHub Actions, mobile-first performance, metadata, and indexable structure.",
        },
      ],
    },
    mosaicCta: {
      ariaLabel: "Navigation toward skills and professional context",
      eyebrow: "Read the process",
      title: "Want to review how I work?",
      summary:
        "The value is not only in the project idea, but in how it is structured: frontend, backend, SEO, automation and product thinking.",
      primaryLabel: "View skills",
      secondaryLabel: "About me",
      annotation: "next chapter",
      fragments: [
        "Components",
        "APIs",
        "Technical SEO",
        "Staging",
        "Validation",
        "Automation",
        "Product",
        "Mobile-first",
      ],
    },
    faq: {
      title: "Questions that usually matter",
      ariaLabel: "Frequently asked questions about projects and collaboration",
      items: [
        {
          question: "What kind of projects can I build?",
          answer:
            "Professional websites, portfolios, internal tools, automations, and small to mid-sized applications with product focus.",
        },
        {
          question: "Do I only work on design or also backend?",
          answer:
            "I can work across interface, data logic, APIs, validation, deployment, and automation when the project needs it.",
        },
        {
          question: "Can I prepare a professional website for a real business?",
          answer:
            "Yes. The goal is to connect presentation, SEO, performance, and contact so the website supports real operations.",
        },
        {
          question: "How do I show technical quality when a project is still in progress?",
          answer:
            "Through prepared architecture, documented decisions, honest states, pending screenshots, and case studies in progress without invented metrics.",
        },
        {
          question: "Am I available for employment, internships, or collaboration?",
          answer:
            "Yes. The contact page is prepared for job opportunities, collaboration, and project conversations.",
        },
      ],
    },
    finalCta: {
      eyebrow: "Next step",
      title: "Review the stack or open a conversation",
      summary:
        "If the work fits, the natural next step is to review technical capabilities or discuss a concrete opportunity.",
      primaryLabel: "View skills",
      secondaryLabel: "Contact",
    },
  },
  skillsPage: {
    inspectionLabel: "Technical inspection",
    hero: {
      eyebrow: "TECHNICAL MAP",
      title: "My\nSKILLS",
      summary:
        "The technologies, criteria and systems I use to build maintainable, fast and scalable digital products.",
      annotation: "real notes, visible priorities",
      primaryLabel: "View projects",
      secondaryLabel: "Get in touch",
      tickerItems: [
        "Frontend",
        "Backend",
        "SEO",
        "DevOps",
        "Data",
        "Automation",
        "Applied AI",
        "Architecture",
        "Performance",
        "Accessibility",
      ],
      stickers: [
        {
          label: "React + Astro",
          detail: "interface, content and performance",
          tone: "yellow",
        },
        {
          label: "ASP.NET Core",
          detail: "APIs and backend logic",
          tone: "green",
        },
        {
          label: "PostgreSQL",
          detail: "product-minded data",
          tone: "white",
        },
        {
          label: "Docker + CI",
          detail: "reproducible delivery",
          tone: "coral",
        },
        {
          label: "Technical SEO",
          detail: "structure for people and machines",
          tone: "lilac",
        },
      ],
    },
    positioning: {
      eyebrow: "Honest positioning",
      title: "The stack is not a medal collection",
      summary:
        "I do not present this stack as a collection of trophies. I present it as a working system: technologies I know how to connect to build real products.",
      annotation: "connected technologies, not trading cards",
      principles: [
        {
          label: "Judgment",
          title: "Technology with intent",
          summary:
            "Every tool should explain a decision: speed, maintainability, architecture, content, security or automation.",
        },
        {
          label: "Delivery",
          title: "Quality from the start",
          summary:
            "SEO, performance, accessibility and deployment are not final layers; they shape how the solution is planned.",
        },
        {
          label: "Evolution",
          title: "Visible learning",
          summary:
            "The portfolio separates what is applied, what I am consolidating and what I am still expanding to avoid inflated signals.",
        },
      ],
    },
    capability: {
      eyebrow: "Real classification",
      title: "Capabilities without invented percentages",
      summary:
        "I prefer usage context over numeric bars. A technology's maturity depends on where it has been applied and which problem it solves.",
      groups: [
        {
          label: "01",
          title: "Applied in projects",
          summary:
            "Technologies I already connect across interfaces, architecture, content, technical quality and product delivery.",
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
            "Technical SEO",
            "Accessibility",
            "Responsive design",
          ],
        },
        {
          label: "02",
          title: "In consolidation",
          summary:
            "Pieces with applied practice that I keep strengthening with more architectural, reliability and product judgment.",
          tone: "consolidation",
          items: ["Automation", "Applied AI", "Python", "Whisper", "Node.js", "MySQL"],
        },
        {
          label: "03",
          title: "Actively expanding",
          summary:
            "Complementary technologies and areas I keep progressing in without presenting them as closed expertise.",
          tone: "learning",
          items: ["PHP", "Laravel", "Java", "Testing strategy", "Observability"],
        },
      ],
      supporting: {
        label: "Complementary / previous stack",
        items: ["PHP", "Laravel", "Java", "MySQL", "Node.js"],
      },
    },
    stackStateBoard: {
      ariaLabel: "Technical stack state board",
      groups: [
        {
          state: "Applied in projects",
          summary: "Technologies already connected across product, content, architecture, technical quality or delivery.",
          tone: "applied",
          items: [
            { name: "JavaScript", note: "client interaction and logic" },
            { name: "TypeScript", note: "interfaces and contracts" },
            { name: "React", note: "applied components" },
            { name: "Astro", note: "portfolio and i18n" },
            { name: "C#", note: "backend and rules" },
            { name: ".NET", note: "APIs and architecture" },
            { name: "PostgreSQL", note: "product data" },
            { name: "Docker", note: "reproducible environment" },
            { name: "GitHub Actions", note: "CI and delivery" },
            { name: "Railway", note: "staging and deployment" },
            { name: "Tailwind", note: "visual systems" },
            { name: "SEO", note: "indexable structure" },
            { name: "Accessibility", note: "reviewable interaction" },
          ],
        },
        {
          state: "In consolidation",
          summary: "Pieces with real practice that I keep strengthening with more operational and product judgment.",
          tone: "consolidation",
          items: [
            { name: "Python", note: "useful automation" },
            { name: "Whisper", note: "applied transcription" },
            { name: "MySQL", note: "complementary data" },
          ],
        },
        {
          state: "Actively expanding",
          summary: "Complementary technologies I keep visible without presenting them as closed expertise.",
          tone: "learning",
          items: [
            { name: "PHP", note: "previous context" },
            { name: "Java", note: "complementary base" },
          ],
        },
        {
          state: "IN WORK EXPERIENCE",
          summary: "Technologies and tools used in real professional context.",
          tone: "work",
          items: [
            { name: "Vue", note: "professional frontend" },
            { name: "Astro", note: "sites and content" },
            { name: "SEO", note: "real optimization" },
            { name: "Claude Code", note: "development assistance" },
            { name: "BMAD agents", note: "agent orchestration" },
            { name: "Codex", note: "technical editor support" },
          ],
        },
      ],
    },
    macroCapabilityChart: {
      ariaLabel: "Visual map of connected capabilities",
      centerLabel: "stack as system",
      centerNote: "connected decisions, not level bars",
      nodes: [
        { label: "Frontend", note: "interface" },
        { label: "Backend", note: "logic" },
        { label: "DevOps", note: "delivery" },
        { label: "SEO / Performance", note: "visibility" },
        { label: "Automation", note: "automation" },
        { label: "Applied AI", note: "useful assistance" },
      ],
    },
    technicalDistributionChart: {
      ariaLabel: "Current technical profile distribution",
      eyebrow: "Current distribution",
      title: "Relative weight of my technical areas",
      summary:
        "An editorial reading of the profile's current focus: not scientific precision, but a clear view of where my technical work carries more weight right now.",
      centerValue: "100%",
      centerLabel: "technical profile",
      items: [
        { label: "Frontend", percent: 28, note: "interfaces, components, visual experience" },
        { label: "Backend", percent: 24, note: "APIs, logic, architecture" },
        { label: "SEO / Performance", percent: 16, note: "visibility, semantics, optimization" },
        { label: "DevOps / Deployment", percent: 12, note: "deployment, CI/CD, environments" },
        { label: "Automation", percent: 10, note: "flows, integrations, efficiency" },
        { label: "Applied AI", percent: 10, note: "assistants, productivity, processes" },
      ],
    },
    categories: {
      eyebrow: "Layered map",
      title: "Capabilities that connect",
      summary:
        "The page separates work areas, but the real intent is connecting them: interface, data, backend, deployment, SEO and automation.",
      items: [
        {
          label: "Frontend",
          title: "Interfaces do not live in one file.",
          summary:
            "I treat the interface as a system: components, states, real responsive behavior, readable content and details that hold up as it grows.",
          note: "components, state, responsive and semantics",
          variant: "paper",
          stack: ["React", "Astro", "TypeScript", "JavaScript", "Tailwind"],
          signals: ["Maintainable components", "Semantic HTML", "Responsive states", "Accessible interaction"],
        },
        {
          label: "Backend",
          title: "Logic needs architecture too.",
          summary:
            "Backend work is a product boundary: APIs, validation, authentication, models, responsibilities and rules that should survive the frontend.",
          note: "contracts before screens",
          variant: "graphite",
          stack: ["ASP.NET Core", "C#", "API design", "JWT", "Validation"],
          signals: ["Clear contracts", "Layer separation", "Server-side rules", "Security by default"],
        },
        {
          label: "Data",
          title: "Data shapes the product.",
          summary:
            "A clean interface needs intentional data: understandable entities, clear relationships and queries that do not block growth.",
          note: "the database also tells a story",
          variant: "marker",
          stack: ["PostgreSQL", "MySQL", "Modeling", "Queries", "Persistence"],
          signals: ["Readable models", "Clear relationships", "Prepared data", "Traceability"],
        },
        {
          label: "DevOps / Deployment",
          title: "Working locally is not enough.",
          summary:
            "Delivery needs reproducibility, environment variables, CI, prepared staging and a minimum operational reading.",
          note: "delivery as part of the product",
          variant: "blueprint",
          stack: ["Docker", "GitHub Actions", "Railway", "Env variables", "CI"],
          signals: ["Reproducible build", "Prepared staging", "Secrets outside frontend", "Delivery automation"],
        },
        {
          label: "SEO / Performance / Accessibility",
          title: "A website should be understood by machines too.",
          summary:
            "Technical quality connects metadata, semantic structure, mobile-first speed, visible focus and content that can be indexed and reviewed.",
          note: "quality before the checklist",
          variant: "paper",
          stack: ["Technical SEO", "Performance", "Accessibility", "Structured data", "Responsive"],
          signals: ["Hreflang", "Sitemap", "Focus states", "Mobile-first loading"],
        },
        {
          label: "Automation / Applied AI",
          title: "Less manual work, more workflow.",
          summary:
            "Automation and applied AI make sense when they reduce real friction: intake, transcription, routing, notifications and operational handoff.",
          note: "automating without selling magic",
          variant: "graphite",
          stack: ["Automation", "Applied AI", "Python", "Whisper", "Workflows"],
          signals: ["Clear flows", "Structured payloads", "Handoff", "Measurable assistance"],
        },
      ],
    },
    process: {
      eyebrow: "Applied process",
      title: "From design to a production system",
      summary:
        "The stack matters because of how it moves across phases: a visual idea becomes connected to data, backend, deployment and useful automation.",
      steps: ["Design", "Frontend", "Backend", "Data", "Deploy", "Automation"],
      annotations: ["full flow", "no invisible jumps", "each phase leaves evidence"],
      systemDiagram: {
        center: "Digital product",
        modules: ["Design", "Frontend", "Backend", "Data", "Deploy", "SEO", "Automation", "Applied AI"],
        microLabels: ["Components", "APIs", "Validation", "PostgreSQL", "CI/CD", "Handoff", "Leads", "Notifications"],
        status: "System online",
        uptime: "99.4% · v3.2",
      },
    },
    evidence: {
      eyebrow: "Connected evidence",
      title: "Where this stack is applied",
      summary:
        "Projects work as application examples, not as a closed list or a place for invented metrics.",
      projectLabel: "Project",
      items: [
        {
          name: "KORUS",
          status: "in progress",
          summary:
            "Flagship case for connecting React, modular backend work, PostgreSQL, Docker, CI and product judgment.",
          stack: ["React", ".NET", "PostgreSQL", "Docker", "GitHub Actions", "architecture"],
        },
        {
          name: "JustWriteIt",
          status: "in progress",
          summary:
            "Productivity tool where writing, transcription, TypeScript, Python and Whisper come together.",
          stack: ["TypeScript", "Python", "Whisper", "Applied AI", "productivity"],
        },
        {
          name: "Portfolio",
          status: "current",
          summary:
            "Editorial system with Astro, i18n, SEO, performance, accessibility, motion and content architecture.",
          stack: ["Astro", "SEO", "Motion", "i18n", "Accessibility", "responsive design"],
        },
        {
          name: "Link Shortener App",
          status: "possible project",
          summary:
            "Compact surface for demonstrating API work, data, validation, security, analytics and redirects.",
          stack: ["API", "Security", "Analytics", "Redirects", "validation"],
        },
      ],
    },
    finalCta: {
      eyebrow: "Next page",
      title: "Review projects or open a conversation",
      summary:
        "To check the stack in context, the natural next step is jumping to projects, reading the profile or opening contact.",
      projectsLabel: "View projects",
      aboutLabel: "About me",
      contactLabel: "Get in touch",
    },
    depthPanel: {
      eyebrow: "Graphite zone",
      title: "Backend, security, and quality with more depth",
      summary:
        "Critical pieces are separated from the visual narrative: API contracts, validation, data models, environment variables, performance, accessibility, and security.",
    },
    questionBlocks: [
      {
        question: "What should a technical recruiter review first?",
        answer:
          "Projects, architecture, and quality signals. The stack is presented as support for decisions, not as a decorative list.",
      },
      {
        question: "Where do automation and AI fit?",
        answer:
          "In concrete flows: contact, leads, productivity, operational handoff, and assistance where it adds measurable clarity.",
      },
    ],
  },
  automationPage: {
    mapLabel: "Flow map",
    connectorLabel: "next step",
    handoffPanel: {
      eyebrow: "Technical handoff",
      title: "Automation should end in a useful action",
      summary:
        "The goal is not adding tools for their own sake, but leaving traceability, context, and clear routes for better responses.",
    },
    finalCta: {
      title: "A flow ready to evolve into intake",
      summary:
        "The full questionnaire is not implemented yet, but the architecture is ready for validation, security, and server-side routing.",
      label: "Talk about automation",
    },
  },
  aboutPage: {
    chapterLabel: "Chapter",
    notes: [
      {
        label: "Origin",
        title: "Operations before theatre",
        summary:
          "The perspective comes from solving real processes: understanding needs, ordering priorities, and turning friction into clearer systems.",
      },
      {
        label: "Evolution",
        title: "Digital product with technical grounding",
        summary:
          "The current focus is building interfaces, backend foundations, and automation that support business needs without losing maintainability.",
      },
      {
        label: "Judgment",
        title: "Explainable decisions",
        summary:
          "Each project should justify its stack, boundaries, and next steps with both technical and product language.",
      },
    ],
    finalNote: {
      title: "A profile for teams that need to build and organize",
      summary:
        "The portfolio is designed to show evolution, applied practice, and the ability to connect technical execution with business context.",
    },
  },
  contactPage: {
    intro: {
      eyebrow: "Contact entry",
      title: "Clear channels before a long form",
      summary:
        "The page keeps contact simple for now while preparing a future path for validated and automated intake.",
    },
    securityPanel: {
      eyebrow: "Privacy and routing",
      title: "Contact prepared for safe automation",
      summary:
        "Final channels will be connected without exposing frontend secrets, with server-side validation and anti-spam controls when the form is ready.",
    },
    channelNote: "Channel to activate",
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
        ctaLabel: "Case file in progress",
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
        title: "Notify",
        summary:
          "Send the right channel update with enough context to support a fast decision.",
        futureCapability: "Structured messages, intent-based priority, and source tracking.",
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
        handle: "Channel to activate",
        summary:
          "Primary async contact channel, prepared for future validation and safe form routing.",
        automationIntent: "email-intake",
        isPlaceholder: true,
      },
      {
        channel: "whatsapp",
        label: "WhatsApp",
        href: "#contact",
        handle: "Channel to activate",
        summary:
          "Fast mobile contact channel for recruiters, companies, and follow-up conversations.",
        automationIntent: "instant-contact",
        isPlaceholder: true,
      },
      {
        channel: "telegram",
        label: "Telegram",
        href: "#contact",
        handle: "Channel to activate",
        summary: "Optional direct messaging channel prepared for future routing.",
        automationIntent: "instant-contact",
        isPlaceholder: true,
      },
      {
        channel: "instagram",
        label: "Instagram",
        href: "#contact",
        handle: "Channel to activate",
        summary: "Social contact channel reserved for future profile linking.",
        automationIntent: "social-contact",
        isPlaceholder: true,
      },
      {
        channel: "linkedin",
        label: "LinkedIn",
        href: "#contact",
        handle: "Channel to activate",
        summary: "Professional profile link prepared for recruiter outreach.",
        automationIntent: "professional-contact",
        isPlaceholder: true,
      },
      {
        channel: "github",
        label: "GitHub",
        href: "#contact",
        handle: "Channel to activate",
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
      fieldPlaceholder: "Inactive until intake is enabled",
      messagePlaceholder: "Validated message once intake is enabled",
      note:
        "The contact endpoint is reserved for future server-side validation, anti-spam checks, and safe routing.",
      pendingButton: "Intake to activate",
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
