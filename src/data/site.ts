import { siteConfigSchema } from "./schemas";

export const siteConfig = siteConfigSchema.parse({
  name: "Eric Mancebo Portfolio",
  personName: "Eric Mancebo",
  role: "Full Stack Developer",
  locale: "en",
  siteUrl: import.meta.env.PUBLIC_SITE_URL ?? "",
  defaultTitle: "Eric Mancebo | Full Stack Developer",
  defaultDescription:
    "Professional portfolio scaffold for Eric Mancebo, focused on product web development, business automation, applied AI, backend architecture, SEO, performance, accessibility, and security.",
  socialHandle: "",
});
