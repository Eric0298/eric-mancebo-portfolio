import { siteConfig } from "../data/site";
import {
  defaultLanguage,
  languageRoutes,
  languages,
  type AlternateLanguageLink,
  type Language,
  type TranslationDictionary,
} from "../i18n/config";
import type { JsonLdDocument } from "../types/content";

export function normalizeSiteUrl(siteUrl?: string | URL | null) {
  if (!siteUrl) {
    return undefined;
  }

  const rawUrl = siteUrl instanceof URL ? siteUrl.toString() : siteUrl;

  if (!rawUrl.trim()) {
    return undefined;
  }

  return rawUrl.endsWith("/") ? rawUrl : `${rawUrl}/`;
}

export function buildCanonicalUrl(pathname: string, siteUrl?: string | URL | null) {
  const normalizedSiteUrl = normalizeSiteUrl(siteUrl);

  if (!normalizedSiteUrl) {
    return undefined;
  }

  return new URL(pathname, normalizedSiteUrl).toString();
}

export function buildAlternateLanguageLinks(
  pathname: string,
  siteUrl?: string | URL | null,
): AlternateLanguageLink[] {
  const normalizedSiteUrl = normalizeSiteUrl(siteUrl);

  if (!normalizedSiteUrl) {
    return [];
  }

  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const pathWithoutLocale = normalizedPath.replace(/^\/(es|en)(?=\/|$)/, "") || "/";
  const links = languages.map((language) => {
    const localizedPath = language === defaultLanguage
      ? pathWithoutLocale
      : `${languageRoutes[language].replace(/\/$/, "")}${pathWithoutLocale}`;

    return {
      language,
      href: new URL(localizedPath, normalizedSiteUrl).toString(),
    };
  });

  return [
    ...links,
    {
      language: "x-default",
      href: new URL(pathWithoutLocale, normalizedSiteUrl).toString(),
    },
  ];
}

export function buildPersonJsonLd(
  dictionary: TranslationDictionary,
  language: Language,
  pathname = "/",
  siteUrl?: string | URL | null,
): JsonLdDocument {
  const canonicalUrl = buildCanonicalUrl(pathname, siteUrl ?? siteConfig.siteUrl);
  const sameAs = dictionary.contact.channels
    .filter((channel) => !channel.isPlaceholder && channel.href.startsWith("http"))
    .map((channel) => channel.href);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.personName,
    jobTitle: dictionary.metadata.role,
    description: dictionary.metadata.defaultDescription,
    inLanguage: language,
    ...(canonicalUrl ? { url: canonicalUrl } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function buildWebsiteJsonLd(
  dictionary: TranslationDictionary,
  language: Language,
  pathname = "/",
  siteUrl?: string | URL | null,
): JsonLdDocument {
  const canonicalUrl = buildCanonicalUrl(pathname, siteUrl ?? siteConfig.siteUrl);

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: dictionary.metadata.siteName,
    description: dictionary.metadata.defaultDescription,
    inLanguage: language,
    ...(canonicalUrl ? { url: canonicalUrl } : {}),
  };
}
