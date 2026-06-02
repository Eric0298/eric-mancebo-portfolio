export type {
  AutomationStep,
  ChatbotConfig,
  ContactChannel,
  ContactIntent,
  CvMilestone,
  DevicePriority,
  NavigationItem,
  Project,
  QualityPillar,
  Section,
  SectionKey,
  SiteConfig,
  SkillGroup,
} from "../data/schemas";

export interface JsonLdDocument {
  "@context": "https://schema.org";
  "@type": string | string[];
  [key: string]: unknown;
}
