import { defaultLanguage, isSupportedLanguage, type Language } from "./config";
import { content } from "../data/content";

export function useTranslations(language: Language = defaultLanguage) {
  return content[language];
}

export function getTranslations(language: string | undefined | null) {
  return useTranslations(isSupportedLanguage(language) ? language : defaultLanguage);
}
