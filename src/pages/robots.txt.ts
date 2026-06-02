import type { APIRoute } from "astro";
import { siteConfig } from "../data/site";
import { normalizeSiteUrl } from "../lib/seo";

export const GET: APIRoute = ({ site, url }) => {
  const siteUrl = normalizeSiteUrl(site ?? siteConfig.siteUrl ?? url.origin) ?? url.origin;
  const sitemapUrl = new URL("/sitemap.xml", siteUrl).toString();

  return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
