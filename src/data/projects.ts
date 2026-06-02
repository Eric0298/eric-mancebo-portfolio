import { projectSchema } from "./schemas";

export const featuredProjects = projectSchema.array().parse([
  {
    name: "KORUS",
    slug: "korus",
    status: "planned",
    summary:
      "Prepared case study slot for a product-quality project with clear problem framing, architecture, and measurable value.",
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
      "Prepared case study slot for backend architecture, secure redirects, analytics, validation, and operational concerns.",
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
]);
