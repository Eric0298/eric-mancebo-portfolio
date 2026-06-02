# Eric Mancebo Portfolio

Initial Astro architecture for Eric Mancebo's professional portfolio.

This is a scaffold, not a final art direction. The project is prepared for a premium portfolio, interactive CV, project evidence, automation workflows, SEO, performance, accessibility, security, future contact automation, and future chatbot support.

## Stack

- Astro
- React
- TypeScript
- Tailwind CSS
- Native Web Components
- Motion One
- Zod

## Structure

```text
src/
  components/
    cards/          Project, skill, and contact cards
    effects/        Scroll reveal, parallax, and device motion wrappers
    forms/          Future-safe contact form placeholder
    layout/         Header and footer
    mobile/         Mobile navigation, contact sheet, and action bar
    sections/       Portfolio sections
    seo/            Metadata and structured data components
    ui/             Reusable shell, button, badge, and placeholder components
  data/             Zod-validated portfolio data
  hooks/            React hooks for device, motion, scroll, and parallax
  layouts/          Base page layout
  lib/              SEO, responsive, motion, contact, and link utilities
  pages/            Astro routes and SEO endpoints
  styles/           Tokens, responsive utilities, motion, and global CSS
  types/            Shared TypeScript types
  web-components/   Native browser behavior
```

## Current Scope

- Neutral design tokens and CSS variables
- Base layout with semantic landmarks
- SEO metadata component
- Person and WebSite JSON-LD
- Robots and sitemap endpoints
- Typed data for sections, projects, skills, contact channels, CV, quality pillars, automation, and chatbot settings
- Desktop, tablet, and mobile layout foundations
- Mobile-specific navigation and sticky action bar
- Reduced-motion-aware reveal utility
- Contact automation placeholders with honeypot planning
- Chatbot mount point reserved but disabled

## Environment

Copy `.env.example` when real deployment and contact values are ready.

```sh
PUBLIC_SITE_URL=
CONTACT_RECIPIENT_EMAIL=
CONTACT_WEBHOOK_URL=
CHATBOT_API_ROUTE=
CHATBOT_PROVIDER=
```

Do not expose secrets in frontend code. Future contact and chatbot features should validate server-side and read sensitive values from environment variables.

## Commands

```sh
npm run dev
npm run build
npm run preview
npm run astro -- --help
```
