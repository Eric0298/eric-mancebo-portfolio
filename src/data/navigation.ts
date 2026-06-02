import { defaultLanguage, type Language } from "../i18n/config";
import { useTranslations } from "../i18n/useTranslations";

export function getPrimaryNavigation(language: Language = defaultLanguage) {
  return useTranslations(language).navigation.items;
}

export const primaryNavigation = getPrimaryNavigation();
