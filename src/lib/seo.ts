import { contactChannels } from "../data/contact";
import { siteConfig } from "../data/site";
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

export function buildPersonJsonLd(siteUrl?: string | URL | null): JsonLdDocument {
  const canonicalUrl = buildCanonicalUrl("/", siteUrl ?? siteConfig.siteUrl);
  const sameAs = contactChannels
    .filter((channel) => !channel.isPlaceholder && channel.href.startsWith("http"))
    .map((channel) => channel.href);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.personName,
    jobTitle: siteConfig.role,
    description: siteConfig.defaultDescription,
    ...(canonicalUrl ? { url: canonicalUrl } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function buildWebsiteJsonLd(siteUrl?: string | URL | null): JsonLdDocument {
  const canonicalUrl = buildCanonicalUrl("/", siteUrl ?? siteConfig.siteUrl);

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.defaultDescription,
    inLanguage: siteConfig.locale,
    ...(canonicalUrl ? { url: canonicalUrl } : {}),
  };
}
