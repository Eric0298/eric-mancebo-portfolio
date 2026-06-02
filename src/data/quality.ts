import { defaultLanguage, type Language } from "../i18n/config";
import { useTranslations } from "../i18n/useTranslations";

export function getQualityPillars(language: Language = defaultLanguage) {
  return useTranslations(language).quality.pillars;
}

export const qualityPillars = getQualityPillars();
