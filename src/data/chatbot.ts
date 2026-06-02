import { chatbotConfigSchema } from "./schemas";

export const chatbotConfig = chatbotConfigSchema.parse({
  enabled: false,
  mountId: "portfolio-chatbot",
  summary:
    "Future chatbot support is reserved for guided portfolio questions, project discovery, CV context, and contact handoff.",
  plannedIntents: [
    "Answer recruiter questions",
    "Explain project architecture",
    "Summarize skills by role",
    "Route contact requests",
  ],
});
