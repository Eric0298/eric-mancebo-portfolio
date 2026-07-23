import { defaultLanguage, isSupportedLanguage, languageStorageKey, type Language } from "../i18n/config";

function getStoredLanguage(): Language | null {
  try {
    const value = localStorage.getItem(languageStorageKey);
    return isSupportedLanguage(value) ? value : null;
  } catch {
    return null;
  }
}

function getBrowserLanguage(): Language {
  const nav = navigator.languages?.[0] ?? navigator.language ?? "";
  const short = nav.slice(0, 2).toLowerCase();
  return isSupportedLanguage(short) ? short : defaultLanguage;
}

function applyLanguage(language: Language) {
  const root = document.documentElement;
  root.setAttribute("lang", language);
  root.setAttribute("data-lang", language);
  try {
    localStorage.setItem(languageStorageKey, language);
  } catch {
    /* ignore */
  }
}

export function initLanguage() {
  const initial = getStoredLanguage() ?? getBrowserLanguage();
  applyLanguage(initial);

  document.querySelectorAll<HTMLButtonElement>("[data-lang-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-lang") as Language | null;
      applyLanguage(current === "en" ? "es" : "en");
    });
  });
}
