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

export const pageRoutes = {
  home: {
    es: "/",
    en: "/en/",
  },
  projects: {
    es: "/proyectos/",
    en: "/en/projects/",
  },
  skills: {
    es: "/skills/",
    en: "/en/skills/",
  },
  automation: {
    es: "/automatizacion/",
    en: "/en/automation/",
  },
  about: {
    es: "/sobre-mi/",
    en: "/en/about/",
  },
  contact: {
    es: "/contacto/",
    en: "/en/contact/",
  },
} as const satisfies Record<string, Record<Language, string>>;

export type PageKey = keyof typeof pageRoutes;

function normalizeRoutePath(pathname: string) {
  const pathnameOnly = pathname.split("#")[0]?.split("?")[0] || "/";
  const withLeadingSlash = pathnameOnly.startsWith("/") ? pathnameOnly : `/${pathnameOnly}`;

  return withLeadingSlash === "/" ? "/" : withLeadingSlash.replace(/\/$/, "");
}

export function getPageKeyFromPath(pathname: string): PageKey | undefined {
  const normalizedPath = normalizeRoutePath(pathname);

  return Object.entries(pageRoutes).find(([, localizedRoutes]) =>
    Object.values(localizedRoutes).some((route) => normalizeRoutePath(route) === normalizedPath),
  )?.[0] as PageKey | undefined;
}

export function getPagePath(language: Language, pageKey: PageKey) {
  return pageRoutes[pageKey][language];
}

export function isSupportedLanguage(value: string | undefined | null): value is Language {
  return languages.includes(value as Language);
}

export function getLanguageFromPath(pathname: string): Language {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return isSupportedLanguage(firstSegment) ? firstSegment : defaultLanguage;
}

export function getLocalizedPath(language: Language, path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const pageKey = getPageKeyFromPath(normalizedPath);

  if (pageKey) {
    return getPagePath(language, pageKey);
  }

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

export interface PageCopy {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  summary: string;
  annotation: string;
  sticker: string;
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
  loader: {
    title: string;
    sticker: string;
    annotation: string;
  };
  pages: Record<PageKey, PageCopy>;
  homeCover: {
    manifesto: {
      eyebrow: string;
      title: string;
      summary: string;
      annotation: string;
    };
    navigationLabel: string;
    cards: Array<{
      pageKey: PageKey;
      label: string;
      title: string;
      summary: string;
      sticker: string;
    }>;
    finalCta: {
      eyebrow: string;
      title: string;
      summary: string;
      primaryLabel: string;
      secondaryLabel: string;
    };
  };
  sections: Record<Section["key"], Section>;
  hero: {
    actions: {
      projects: string;
      contact: string;
    };
    displayLines: string[];
    supportingParagraph: string;
    snapshotLabel: string;
    architectureSignals: string[];
    stickers: string[];
    annotations: Array<{
      label: string;
      placement: "headline" | "portrait" | "actions";
    }>;
    portrait: {
      alt: string;
      placeholderLabel: string;
      placeholderNote: string;
      futureImageLabel: string;
    };
  };
  aboutCards: Array<{
    label: string;
    title: string;
    summary: string;
  }>;
  projects: {
    statusLabels: Record<Project["status"], string>;
    highlightLabel: string;
    technicalFocusLabel: string;
    stackLabel: string;
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
