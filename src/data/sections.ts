import { defaultLanguage, type Language } from "../i18n/config";
import { useTranslations } from "../i18n/useTranslations";
import type { Section } from "./schemas";

export function getSections(language: Language = defaultLanguage) {
  return Object.values(useTranslations(language).sections);
}

export function getSectionByKey(language: Language = defaultLanguage) {
  return useTranslations(language).sections;
}

export const sections = getSections();
export const sectionByKey = getSectionByKey() as Record<Section["key"], Section>;
