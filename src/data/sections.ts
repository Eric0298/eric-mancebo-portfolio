import { type Section, sectionSchema } from "./schemas";

export const sections = sectionSchema.array().parse([
  {
    key: "hero",
    anchor: "hero",
    eyebrow: "Professional portfolio architecture",
    title: "Eric Mancebo",
    summary:
      "A structured portfolio foundation for product-oriented frontend, backend, automation, applied AI, SEO, performance, accessibility, and security work.",
    devicePriority: ["desktop", "tablet", "mobile"],
  },
  {
    key: "about",
    anchor: "about",
    eyebrow: "Positioning",
    title: "Product-minded full stack development",
    summary:
      "Placeholder content for Eric's professional narrative, focused on real business value rather than a generic personal homepage.",
    devicePriority: ["desktop", "tablet", "mobile"],
  },
  {
    key: "skills",
    anchor: "skills",
    eyebrow: "Capability map",
    title: "Skills prepared as an inspectable matrix",
    summary:
      "A typed structure for frontend, backend, automation, AI, SEO, performance, accessibility, and security capabilities.",
    devicePriority: ["desktop", "tablet", "mobile"],
  },
  {
    key: "projects",
    anchor: "projects",
    eyebrow: "Selected work",
    title: "Featured projects prepared for case studies",
    summary:
      "A placeholder showcase for KORUS, JustWriteIt, Link Shortener App, and a local business automation project.",
    devicePriority: ["desktop", "tablet", "mobile"],
  },
  {
    key: "automation",
    anchor: "automation",
    eyebrow: "Workflow thinking",
    title: "Business automation workflows",
    summary:
      "A future-ready section for explaining inputs, validation, orchestration, notifications, and measurable outcomes.",
    devicePriority: ["desktop", "tablet"],
  },
  {
    key: "architecture",
    anchor: "architecture",
    eyebrow: "Backend and systems",
    title: "Architecture and backend foundations",
    summary:
      "Prepared space for API design, validation, data modeling, security boundaries, and deployment concerns.",
    devicePriority: ["desktop", "tablet"],
  },
  {
    key: "quality",
    anchor: "quality",
    eyebrow: "Delivery quality",
    title: "SEO, performance, accessibility, and security",
    summary:
      "A foundation for demonstrating production-minded technical quality through structured evidence.",
    devicePriority: ["desktop", "tablet", "mobile"],
  },
  {
    key: "cv",
    anchor: "cv",
    eyebrow: "Interactive CV",
    title: "CV timeline and recruiter context",
    summary:
      "A compact placeholder for future experience, education, certifications, and CV download support.",
    devicePriority: ["desktop", "tablet", "mobile"],
  },
  {
    key: "contact",
    anchor: "contact",
    eyebrow: "Contact hub",
    title: "Contact channels and automation-ready intake",
    summary:
      "Prepared contact structure for WhatsApp, Telegram, Instagram, Email, LinkedIn, and GitHub without exposing secrets.",
    devicePriority: ["desktop", "tablet", "mobile"],
  },
  {
    key: "chatbot",
    anchor: "chatbot",
    eyebrow: "Future assistant",
    title: "Chatbot support prepared but disabled",
    summary:
      "A reserved mount point and intent model for a future portfolio chatbot, without shipping a fake assistant.",
    devicePriority: ["desktop", "tablet"],
  },
]);

export const sectionByKey = sections.reduce(
  (accumulator, section) => {
    accumulator[section.key] = section;
    return accumulator;
  },
  {} as Record<Section["key"], Section>,
);
