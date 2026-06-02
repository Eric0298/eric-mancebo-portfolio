import { automationStepSchema } from "./schemas";

export const automationSteps = automationStepSchema.array().parse([
  {
    title: "Capture",
    summary: "Collect a recruiter, client, or project inquiry through a safe and accessible intake surface.",
    futureCapability: "Zod validation, honeypot anti-spam, and rate-limit-ready request metadata.",
  },
  {
    title: "Qualify",
    summary: "Classify the inquiry by contact channel, urgency, project type, and next best action.",
    futureCapability: "Intent tagging, lead scoring, and structured contact payloads.",
  },
  {
    title: "Route",
    summary: "Send the right notification or handoff without exposing secrets in the frontend.",
    futureCapability: "Server-side webhooks, environment variables, and channel-specific notifications.",
  },
  {
    title: "Follow up",
    summary: "Prepare a reliable response path for professional outreach and project conversations.",
    futureCapability: "CRM notes, email templates, reminders, and chatbot handoff context.",
  },
]);
