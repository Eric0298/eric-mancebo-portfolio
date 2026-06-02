import { cvMilestoneSchema } from "./schemas";

export const cvMilestones = cvMilestoneSchema.array().parse([
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
]);
