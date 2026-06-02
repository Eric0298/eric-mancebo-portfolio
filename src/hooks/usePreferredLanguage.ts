import { useEffect, useMemo, useState } from "react";
import {
  defaultLanguage,
  isSupportedLanguage,
  languageStorageKey,
  type Language,
} from "../i18n/config";

function getBrowserLanguagePreference(): Language {
  if (typeof navigator === "undefined") {
    return defaultLanguage;
  }

  const normalizedLanguage = navigator.language.toLowerCase().split("-")[0];
  return isSupportedLanguage(normalizedLanguage) ? normalizedLanguage : defaultLanguage;
}

function getStoredLanguagePreference(): Language | null {
  if (typeof window === "undefined") {
    return null;
  }

  const storedLanguage = window.localStorage.getItem(languageStorageKey);
  return isSupportedLanguage(storedLanguage) ? storedLanguage : null;
}

export function usePreferredLanguage(currentLanguage: Language = defaultLanguage) {
  const [storedLanguage, setStoredLanguage] = useState<Language | null>(null);
  const [browserLanguage, setBrowserLanguage] = useState<Language>(defaultLanguage);

  useEffect(() => {
    setStoredLanguage(getStoredLanguagePreference());
    setBrowserLanguage(getBrowserLanguagePreference());
  }, []);

  const preferredLanguage = storedLanguage ?? browserLanguage;

  const selectLanguage = (language: Language) => {
    window.localStorage.setItem(languageStorageKey, language);
    setStoredLanguage(language);
  };

  return useMemo(
    () => ({
      browserLanguage,
      currentLanguage,
      hasStoredPreference: storedLanguage !== null,
      preferredLanguage,
      selectLanguage,
      storedLanguage,
    }),
    [browserLanguage, currentLanguage, preferredLanguage, storedLanguage],
  );
}
