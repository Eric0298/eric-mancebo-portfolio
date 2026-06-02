import type { APIRoute } from "astro";
import { siteConfig } from "../data/site";
import { languageRoutes } from "../i18n/config";
import { normalizeSiteUrl } from "../lib/seo";

const staticPaths = Object.values(languageRoutes);

export const GET: APIRoute = ({ site, url }) => {
  const siteUrl = normalizeSiteUrl(site ?? siteConfig.siteUrl ?? url.origin) ?? url.origin;
  const paths = Array.from(new Set(staticPaths));

  const entries = paths
    .map((path) => {
      const location = new URL(path, siteUrl).toString();
      return `<url><loc>${location}</loc></url>`;
    })
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    },
  );
};
