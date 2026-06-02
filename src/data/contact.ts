import { contactChannelSchema } from "./schemas";

export const contactChannels = contactChannelSchema.array().parse([
  {
    channel: "email",
    label: "Email",
    href: "#contact",
    handle: "To be configured",
    summary: "Primary async contact channel, prepared for future validation and safe form routing.",
    automationIntent: "email-intake",
    isPlaceholder: true,
  },
  {
    channel: "whatsapp",
    label: "WhatsApp",
    href: "#contact",
    handle: "To be configured",
    summary: "Fast mobile contact channel for recruiters, clients, and follow-up conversations.",
    automationIntent: "instant-contact",
    isPlaceholder: true,
  },
  {
    channel: "telegram",
    label: "Telegram",
    href: "#contact",
    handle: "To be configured",
    summary: "Optional direct messaging channel prepared for future routing.",
    automationIntent: "instant-contact",
    isPlaceholder: true,
  },
  {
    channel: "instagram",
    label: "Instagram",
    href: "#contact",
    handle: "To be configured",
    summary: "Social contact channel reserved for future profile linking.",
    automationIntent: "social-contact",
    isPlaceholder: true,
  },
  {
    channel: "linkedin",
    label: "LinkedIn",
    href: "#contact",
    handle: "To be configured",
    summary: "Recruiter-facing profile link prepared for professional outreach.",
    automationIntent: "professional-contact",
    isPlaceholder: true,
  },
  {
    channel: "github",
    label: "GitHub",
    href: "#contact",
    handle: "To be configured",
    summary: "Code profile link prepared for technical review.",
    automationIntent: "technical-review",
    isPlaceholder: true,
  },
]);

export const mobileContactChannels = contactChannels.filter((channel) =>
  ["email", "whatsapp", "linkedin"].includes(channel.channel),
);
