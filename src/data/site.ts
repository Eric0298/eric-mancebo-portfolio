import { siteConfigSchema } from "./schemas";

export const siteConfig = siteConfigSchema.parse({
  personName: "Eric Mancebo",
  siteUrl: import.meta.env.PUBLIC_SITE_URL ?? "",
  socialHandle: "",
});
