import { useEffect } from "react";
import {
  getLocalizedPath,
  languages,
  type Language,
  type TranslationDictionary,
} from "../../i18n/config";
import { usePreferredLanguage } from "../../hooks/usePreferredLanguage";

interface LanguageSwitcherProps {
  currentLanguage: Language;
  currentPath: string;
  labels: TranslationDictionary["languageSwitcher"];
}

export default function LanguageSwitcher({
  currentLanguage,
  currentPath,
  labels,
}: LanguageSwitcherProps) {
  const {
    browserLanguage,
    hasStoredPreference,
    preferredLanguage,
    selectLanguage,
    storedLanguage,
  } = usePreferredLanguage(currentLanguage);

  useEffect(() => {
    if (!hasStoredPreference || !storedLanguage || storedLanguage === currentLanguage) {
      return;
    }

    const targetPath = getLocalizedPath(storedLanguage, window.location.pathname);
    const targetUrl = `${targetPath}${window.location.hash}`;

    window.location.replace(targetUrl);
  }, [currentLanguage, hasStoredPreference, storedLanguage]);

  return (
    <nav
      className="language-switcher"
      aria-label={labels.label}
      data-browser-language={browserLanguage}
      data-preferred-language={preferredLanguage}
    >
      {languages.map((language) => {
        const isCurrent = language === currentLanguage;
        const href = getLocalizedPath(language, currentPath);

        return (
          <a
            key={language}
            href={href}
            aria-label={labels.optionLabel[language]}
            aria-current={isCurrent ? "page" : undefined}
            data-language-option={language}
            data-current={isCurrent}
            onClick={() => selectLanguage(language)}
            title={
              isCurrent
                ? `${labels.currentLabel}: ${labels.optionShortLabel[language]}`
                : labels.optionLabel[language]
            }
          >
            {labels.optionShortLabel[language]}
          </a>
        );
      })}
    </nav>
  );
}
