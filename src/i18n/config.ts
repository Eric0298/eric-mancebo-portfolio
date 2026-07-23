export const languages = ["es", "en"] as const;
export type Language = (typeof languages)[number];

export const defaultLanguage: Language = "es";
export const languageStorageKey = "eric-mancebo-portfolio-language";

export function isSupportedLanguage(value: string | undefined | null): value is Language {
  return languages.includes(value as Language);
}
