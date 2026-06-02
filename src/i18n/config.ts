import type {
  AutomationStep,
  ChatbotConfig,
  ContactChannel,
  CvMilestone,
  NavigationItem,
  Project,
  QualityPillar,
  Section,
  SkillGroup,
} from "../data/schemas";

export const languages = ["es", "en"] as const;
export type Language = (typeof languages)[number];

export const defaultLanguage: Language = "es";
export const languageStorageKey = "eric-mancebo-portfolio-language";

export const languageRoutes: Record<Language, string> = {
  es: "/",
  en: "/en/",
};

export function isSupportedLanguage(value: string | undefined | null): value is Language {
  return languages.includes(value as Language);
}

export function getLanguageFromPath(pathname: string): Language {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return isSupportedLanguage(firstSegment) ? firstSegment : defaultLanguage;
}

export function getLocalizedPath(language: Language, path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const routePrefix = languageRoutes[language];

  if (language === defaultLanguage) {
    return normalizedPath === "/en/" ? "/" : normalizedPath.replace(/^\/en(?=\/|$)/, "") || "/";
  }

  const pathWithoutLocale = normalizedPath.replace(/^\/(es|en)(?=\/|$)/, "");
  const suffix = pathWithoutLocale === "" ? "/" : pathWithoutLocale;
  return `${routePrefix.replace(/\/$/, "")}${suffix}`.replace(/\/$/, "/");
}

export interface AlternateLanguageLink {
  language: Language | "x-default";
  href: string;
}

export interface TranslationDictionary {
  metadata: {
    htmlLang: Language;
    siteName: string;
    defaultTitle: string;
    defaultDescription: string;
    role: string;
    ogLocale: string;
  };
  accessibility: {
    skipToContent: string;
  };
  languageSwitcher: {
    label: string;
    currentLabel: string;
    browserPreferenceLabel: string;
    optionShortLabel: Record<Language, string>;
    optionLabel: Record<Language, string>;
  };
  navigation: {
    primaryLabel: string;
    footerLabel: string;
    mobileLabel: string;
    mobileToggle: string;
    menuOpen: string;
    menuClose: string;
    items: NavigationItem[];
  };
  layout: {
    homeLabel: string;
    footerSummary: string;
    copyright: string;
  };
  sections: Record<Section["key"], Section>;
  hero: {
    actions: {
      projects: string;
      contact: string;
    };
    snapshotLabel: string;
    architectureSignals: string[];
  };
  aboutCards: Array<{
    label: string;
    title: string;
    summary: string;
  }>;
  projects: {
    statusLabels: Record<Project["status"], string>;
    highlightLabel: string;
    items: Project[];
  };
  skills: {
    stackLabel: string;
    items: SkillGroup[];
  };
  automation: {
    steps: AutomationStep[];
  };
  architectureCards: Array<{
    label: string;
    title: string;
    summary: string;
  }>;
  quality: {
    preparedForLabel: string;
    pillars: QualityPillar[];
  };
  cv: {
    milestones: CvMilestone[];
  };
  contact: {
    mobileActionsLabel: string;
    mobileChannelsLabel: string;
    intentLabel: string;
    channels: ContactChannel[];
    form: {
      name: string;
      email: string;
      honeypot: string;
      message: string;
      fieldPlaceholder: string;
      messagePlaceholder: string;
      note: string;
      pendingButton: string;
    };
  };
  chatbot: {
    mountTitle: string;
    plannedIntentsLabel: string;
    config: ChatbotConfig;
  };
}
