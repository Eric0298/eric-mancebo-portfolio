import { z } from "zod";

export const siteConfigSchema = z.object({
  personName: z.string().min(1),
  siteUrl: z.string(),
  socialHandle: z.string(),
});

export type SiteConfig = z.infer<typeof siteConfigSchema>;
