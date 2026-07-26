// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || undefined,
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
