import { defaultLanguage, type Language } from "../i18n/config";
import { useTranslations } from "../i18n/useTranslations";

export function getFeaturedProjects(language: Language = defaultLanguage) {
  return useTranslations(language).projects.items;
}

export const featuredProjects = getFeaturedProjects();
