import { siteConfig } from "../data/site";
import type { Language } from "../i18n/config";
import type { PortfolioContent } from "../data/content";
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

export function buildPersonJsonLd(
  translations: PortfolioContent,
  language: Language,
  siteUrl?: string | URL | null,
): JsonLdDocument {
  const canonicalUrl = buildCanonicalUrl("/", siteUrl ?? siteConfig.siteUrl);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.personName,
    jobTitle: translations.meta.role,
    description: translations.meta.description,
    inLanguage: language,
    ...(canonicalUrl ? { url: canonicalUrl } : {}),
  };
}

export function buildWebsiteJsonLd(
  translations: PortfolioContent,
  language: Language,
  siteUrl?: string | URL | null,
): JsonLdDocument {
  const canonicalUrl = buildCanonicalUrl("/", siteUrl ?? siteConfig.siteUrl);

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.personName,
    description: translations.meta.description,
    inLanguage: language,
    ...(canonicalUrl ? { url: canonicalUrl } : {}),
  };
}
