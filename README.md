# Eric Mancebo — Portfolio

Portfolio personal y CV interactivo de Eric Mancebo, desarrollador full-stack centrado en producto, automatización e IA aplicada. La web funciona como carta de presentación técnica para reclutadores, clientes y colaboradores, y como demostración pública del propio trabajo.

## Stack real

- **Astro 6** — sitio estático, generación por rutas.
- **TypeScript** — datos y contenido tipados en `src/data/`.
- **Tailwind CSS 4** — vía `@tailwindcss/vite`.
- **GSAP + ScrollTrigger** — animaciones cinemáticas (hero, about pinned, experience pinned, tarjetas de proyecto).
- **Lenis** — scroll suave y transiciones entre secciones.
- **Motion One** — animaciones auxiliares.
- **Zod** — validación de configuración del sitio.
- **astro-icon + @iconify-json/simple-icons** — iconografía oficial del stack técnico.

## Arquitectura

Sitio estático de una sola página con una navegación scroll-driven entre secciones. El copy en español e inglés vive en un único archivo tipado (`src/data/content.ts`) y se cambia en cliente sin recargar la página.

```text
src/
  components/
    layout/         Nav flotante (idioma + tema)
    sections/       Header, Summary, Projects, Experience, Stack, Links
    seo/            SeoHead, StructuredData
    ui/             Container, LiquidGlassFilter
    NextSectionButton.astro
    SectionTitleText.astro
  data/
    content.ts      Copy ES + EN, proyectos, experiencia, stack, links
    site.ts         Config del sitio (Zod)
    schemas.ts      Schemas Zod
  i18n/
    config.ts       Idiomas soportados y clave de localStorage
    useTranslations.ts
  layouts/
    BaseLayout.astro
  lib/
    seo.ts          Canonical + JSON-LD (Person, WebSite)
  pages/
    index.astro
    robots.txt.ts
    sitemap.xml.ts
  scripts/
    theme.ts        Toggle claro/oscuro con localStorage
    i18n.ts         Toggle ES/EN con localStorage
    motion.ts       GSAP + Lenis + ScrollTrigger
    clock.ts        Reloj en vivo del hero
  styles/
    global.css
    tokens.css      Design tokens
  types/
    content.ts
public/             Imágenes, logos, hero, favicon
```

## Internacionalización (ES / EN)

- Español es el idioma por defecto (`defaultLanguage = "es"`).
- Ambos idiomas se renderizan en el mismo documento; el script cliente (`src/scripts/i18n.ts`) alterna la visibilidad de los nodos con `data-i18n="es"` / `data-i18n="en"`.
- La preferencia se persiste en `localStorage` (`eric-mancebo-portfolio-language`).
- La detección inicial usa `navigator.language` de forma no invasiva.
- No hay geolocalización, IP tracking ni analítica invasiva.

## Accesibilidad

- Landmarks semánticos (`<main>`, `<nav>`, `<section>`, `<article>`, `<figure>`).
- Skip link al contenido principal.
- Contraste alto en ambos temas.
- `aria-label` en botones de tema e idioma.
- Enlaces externos con `rel="noopener noreferrer"`.
- Todas las animaciones respetan `prefers-reduced-motion` (fallback estático en `motion.ts` y CSS).
- Focus visible y navegación por teclado en tarjetas de proyecto y filas de contacto.

## SEO

- `<title>` y meta description por idioma.
- Open Graph y Twitter Card.
- Canonical y `og:url` construidos desde `PUBLIC_SITE_URL`.
- JSON-LD `Person` y `WebSite` (`src/lib/seo.ts`).
- `robots.txt` y `sitemap.xml` generados dinámicamente (`src/pages/robots.txt.ts`, `src/pages/sitemap.xml.ts`).
- HTML semántico y tipografía optimizada.

## Rendimiento

- Sitio 100% estático (Astro).
- Zero-JS en secciones que no lo necesitan; solo `theme`, `i18n`, `clock`, `motion` se hidratan globalmente.
- Marquee del hero puramente en CSS keyframes.
- Imágenes con `loading="lazy"` y `decoding="async"` donde corresponde.
- Fuentes vía `preconnect` a Google Fonts.

## Scripts disponibles

```sh
npm run dev       # servidor de desarrollo (astro dev)
npm run build     # build de producción (astro build)
npm run preview   # servir el build local
npm run astro     # CLI de Astro (--help para opciones)
```

## Instalación local

Requiere **Node ≥ 22.12.0** (declarado en `package.json`).

```sh
npm install
npm run dev
```

## Variables de entorno

Copia `.env.example` a `.env` si necesitas fijar la URL de producción:

```sh
PUBLIC_SITE_URL=
```

`PUBLIC_SITE_URL` se utiliza para construir la URL canónica, `og:url`, el sitemap y `robots.txt`. Las demás variables presentes en `.env.example` (`CONTACT_RECIPIENT_EMAIL`, `CONTACT_WEBHOOK_URL`, `CHATBOT_API_ROUTE`, `CHATBOT_PROVIDER`) están reservadas para funcionalidades futuras y hoy no son requeridas para desplegar.

## Estado actual

Portfolio publicado. Cambios de copy y proyectos se realizan editando `src/data/content.ts`. El diseño, las animaciones y el comportamiento responsive están estables.
