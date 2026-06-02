import { skillGroupSchema } from "./schemas";

export const skillGroups = skillGroupSchema.array().parse([
  {
    title: "Frontend engineering",
    focus: "Modern UI architecture with Astro, React, TypeScript, Tailwind CSS, web components, and accessible semantics.",
    items: ["Astro", "React", "TypeScript", "Tailwind CSS", "Web Components"],
    evidencePlaceholder: "Future evidence: component architecture, responsive behavior, DevTools clarity, and Lighthouse results.",
  },
  {
    title: "Backend architecture",
    focus: "Server-side validation, API boundaries, data modeling, security, integrations, and automation-ready workflows.",
    items: ["API design", "Zod validation", "Data modeling", "Security headers", "Environment variables"],
    evidencePlaceholder: "Future evidence: architecture diagrams, validation flow, deployment notes, and endpoint contracts.",
  },
  {
    title: "Automation and applied AI",
    focus: "Business process automation, AI-assisted workflows, contact routing, and practical productivity systems.",
    items: ["Workflow design", "Applied AI", "Lead routing", "Notifications", "Operational handoff"],
    evidencePlaceholder: "Future evidence: workflow maps, before-and-after metrics, and automation reliability notes.",
  },
  {
    title: "SEO, performance, accessibility, security",
    focus: "Production-minded quality across metadata, semantics, speed, keyboard access, motion preferences, and safe links.",
    items: ["SEO", "Performance", "Accessibility", "Security", "Semantic HTML"],
    evidencePlaceholder: "Future evidence: page reports, test results, structured data, and security checklist status.",
  },
]);
