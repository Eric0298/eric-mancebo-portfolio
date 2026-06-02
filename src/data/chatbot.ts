import { defaultLanguage, type Language } from "../i18n/config";
import { useTranslations } from "../i18n/useTranslations";

export function getChatbotConfig(language: Language = defaultLanguage) {
  return useTranslations(language).chatbot.config;
}

export const chatbotConfig = getChatbotConfig();
