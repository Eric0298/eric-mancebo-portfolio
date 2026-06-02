import { defaultLanguage, isSupportedLanguage, type Language } from "./config";
import { en } from "./dictionaries/en";
import { es } from "./dictionaries/es";

export const dictionaries = {
  es,
  en,
} as const;

export function useTranslations(language: Language = defaultLanguage) {
  return dictionaries[language];
}

export function getTranslations(language: string | undefined | null) {
  return useTranslations(isSupportedLanguage(language) ? language : defaultLanguage);
}
