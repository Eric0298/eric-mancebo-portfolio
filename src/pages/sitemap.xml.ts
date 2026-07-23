import type { APIRoute } from "astro";
import { siteConfig } from "../data/site";
import { normalizeSiteUrl } from "../lib/seo";

export const GET: APIRoute = ({ site, url }) => {
  const siteUrl = normalizeSiteUrl(site ?? siteConfig.siteUrl ?? url.origin) ?? url.origin;
  const location = new URL("/", siteUrl).toString();

  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${location}</loc></url></urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
