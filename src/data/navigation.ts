import { navigationItemSchema } from "./schemas";

export const primaryNavigation = navigationItemSchema.array().parse([
  {
    label: "About",
    href: "#about",
    section: "about",
    mobilePriority: 1,
  },
  {
    label: "Skills",
    href: "#skills",
    section: "skills",
    mobilePriority: 2,
  },
  {
    label: "Projects",
    href: "#projects",
    section: "projects",
    mobilePriority: 3,
  },
  {
    label: "Automation",
    href: "#automation",
    section: "automation",
  },
  {
    label: "Architecture",
    href: "#architecture",
    section: "architecture",
  },
  {
    label: "Contact",
    href: "#contact",
    section: "contact",
    mobilePriority: 4,
  },
]);
