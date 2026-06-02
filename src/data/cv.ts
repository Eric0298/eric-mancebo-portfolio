import { defaultLanguage, type Language } from "../i18n/config";
import { useTranslations } from "../i18n/useTranslations";

export function getCvMilestones(language: Language = defaultLanguage) {
  return useTranslations(language).cv.milestones;
}

export const cvMilestones = getCvMilestones();
