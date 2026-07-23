export type { SiteConfig } from "../data/schemas";

export interface JsonLdDocument {
  "@context": "https://schema.org";
  "@type": string | string[];
  [key: string]: unknown;
}
