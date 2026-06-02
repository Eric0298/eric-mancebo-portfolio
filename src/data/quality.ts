import { qualityPillarSchema } from "./schemas";

export const qualityPillars = qualityPillarSchema.array().parse([
  {
    title: "SEO foundation",
    summary: "Unique titles, descriptions, Open Graph, Twitter Cards, JSON-LD, sitemap, robots, and semantic headings.",
    preparedFor: ["Meta component", "Structured data", "Sitemap endpoint", "Robots endpoint"],
  },
  {
    title: "Performance foundation",
    summary: "Mobile-first loading priorities, reduced heavy motion, CSS tokens, and component-level boundaries.",
    preparedFor: ["Responsive sections", "Motion preferences", "Image optimization plan", "Lean placeholders"],
  },
  {
    title: "Accessibility foundation",
    summary: "Semantic landmarks, skip links, keyboard navigation, readable type scales, and reduced-motion support.",
    preparedFor: ["Skip link", "ARIA labels", "Focus states", "Reduced motion CSS"],
  },
  {
    title: "Security foundation",
    summary: "External link protection, no exposed secrets, validation planning, and future server-side contact handling.",
    preparedFor: ["noopener noreferrer", "Env placeholders", "Honeypot field", "Server validation model"],
  },
]);
