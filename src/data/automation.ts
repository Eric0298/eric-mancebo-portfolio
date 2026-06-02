import { defaultLanguage, type Language } from "../i18n/config";
import { useTranslations } from "../i18n/useTranslations";

export function getAutomationSteps(language: Language = defaultLanguage) {
  return useTranslations(language).automation.steps;
}

export const automationSteps = getAutomationSteps();
