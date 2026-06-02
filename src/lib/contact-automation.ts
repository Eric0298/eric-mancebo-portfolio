import { contactIntentSchema, type ContactChannel, type ContactIntent } from "../data/schemas";

export const contactAutomationConfig = {
  futureEndpoint: "/api/contact",
  honeypotFieldName: "companyWebsite",
  maxMessageLength: 2000,
  allowedChannels: ["email", "whatsapp", "telegram", "instagram", "linkedin", "github"],
} as const;

export function buildContactIntent(channel: ContactChannel, source: string): ContactIntent {
  return contactIntentSchema.parse({
    channel: channel.channel,
    source,
    href: channel.href,
    timestamp: new Date().toISOString(),
  });
}
