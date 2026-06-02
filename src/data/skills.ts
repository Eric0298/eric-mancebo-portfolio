import { defaultLanguage, type Language } from "../i18n/config";
import { useTranslations } from "../i18n/useTranslations";

export function getSkillGroups(language: Language = defaultLanguage) {
  return useTranslations(language).skills.items;
}

export const skillGroups = getSkillGroups();
