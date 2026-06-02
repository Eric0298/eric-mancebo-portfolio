import { z } from "zod";

export const devicePrioritySchema = z.enum(["desktop", "tablet", "mobile"]);

export const sectionKeySchema = z.enum([
  "hero",
  "about",
  "skills",
  "projects",
  "automation",
  "architecture",
  "quality",
  "contact",
  "cv",
  "chatbot",
]);

export const siteConfigSchema = z.object({
  personName: z.string().min(1),
  siteUrl: z.string(),
  socialHandle: z.string(),
});

export const navigationItemSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  section: sectionKeySchema,
  mobilePriority: z.number().int().positive().optional(),
});

export const sectionSchema = z.object({
  key: sectionKeySchema,
  anchor: z.string().min(1),
  eyebrow: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  devicePriority: z.array(devicePrioritySchema),
});

export const projectStatusSchema = z.enum([
  "planned",
  "in-progress",
  "private",
  "published",
]);

export const projectSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  status: projectStatusSchema,
  summary: z.string().min(1),
  plannedHighlights: z.array(z.string().min(1)),
  links: z
    .array(
      z.object({
        label: z.string().min(1),
        href: z.string().min(1),
      }),
    )
    .default([]),
});

export const skillGroupSchema = z.object({
  title: z.string().min(1),
  focus: z.string().min(1),
  items: z.array(z.string().min(1)),
  evidencePlaceholder: z.string().min(1),
});

export const contactChannelSchema = z.object({
  channel: z.enum([
    "email",
    "whatsapp",
    "telegram",
    "instagram",
    "linkedin",
    "github",
  ]),
  label: z.string().min(1),
  href: z.string().min(1),
  handle: z.string().min(1),
  summary: z.string().min(1),
  automationIntent: z.string().min(1),
  isPlaceholder: z.boolean(),
});

export const automationStepSchema = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  futureCapability: z.string().min(1),
});

export const qualityPillarSchema = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  preparedFor: z.array(z.string().min(1)),
});

export const cvMilestoneSchema = z.object({
  label: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
});

export const chatbotConfigSchema = z.object({
  enabled: z.boolean(),
  mountId: z.string().min(1),
  summary: z.string().min(1),
  plannedIntents: z.array(z.string().min(1)),
});

export const contactIntentSchema = z.object({
  channel: contactChannelSchema.shape.channel,
  source: z.string().min(1),
  href: z.string().min(1),
  timestamp: z.string().datetime(),
});

export type DevicePriority = z.infer<typeof devicePrioritySchema>;
export type SectionKey = z.infer<typeof sectionKeySchema>;
export type SiteConfig = z.infer<typeof siteConfigSchema>;
export type NavigationItem = z.infer<typeof navigationItemSchema>;
export type Section = z.infer<typeof sectionSchema>;
export type Project = z.infer<typeof projectSchema>;
export type SkillGroup = z.infer<typeof skillGroupSchema>;
export type ContactChannel = z.infer<typeof contactChannelSchema>;
export type AutomationStep = z.infer<typeof automationStepSchema>;
export type QualityPillar = z.infer<typeof qualityPillarSchema>;
export type CvMilestone = z.infer<typeof cvMilestoneSchema>;
export type ChatbotConfig = z.infer<typeof chatbotConfigSchema>;
export type ContactIntent = z.infer<typeof contactIntentSchema>;
