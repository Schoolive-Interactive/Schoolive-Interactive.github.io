# AI Agent Guide for Schoolive Modern Website

This repository is a static-first Astro site with TypeScript, UnoCSS, and JSON-based localization.

## Primary workflow

- Use `npm install` to set up dependencies.
- Use `npm run dev` for local development.
- Use `npm run build` to build the site.
- Use `npm run preview` to preview production output.
- Use the following commands for validation:
  1. `npm run format:check` to check formatting;
  2. `npm run lint` to check for linting issues;
  3. `npm run check` to check for locale schema consistency and route mapping;
  4. `npm run test` to run Vitest tests.

## Key conventions

- The site is built with Astro and TypeScript (`type: module`).
- Styling is via UnoCSS; do not introduce Tailwind/PostCSS unless the repo already depends on it.
- Localization is handled with JSON locale files in `src/data/locales/`.
- Locale schema must remain consistent across all locale JSON files.
- Locales are exactly:
  - `en` → `/`
  - `[locale]` → `/[locale]/`
- English is the default locale and uses the unprefixed route `/`.
- Use `src/lib/routes.ts` helpers such as `localePath()` and `localeStaticPaths()`.
- Avoid adding legacy `.html` compatibility routes or browser-language redirect logic.

## Important files

- `package.json`
- `README.md`
- `src/pages/index.astro`
- `src/pages/[locale]/index.astro`
- `src/layouts/BaseLayout.astro`
- `src/components/LanguageSwitcher.astro`
- `src/lib/i18n.ts`
- `src/lib/routes.ts`
- `src/lib/locale-types.ts`
- `src/data/locales/[locale].json`
- `tests/locale-data.test.ts`

## Notes for agents

- Preserve the existing localization pattern and route mapping when adding or updating pages.
- The repository does not include a backend service; the feedback form is intentionally a `mailto:` fallback.
- Keep generated output out of source control. The build artifact should be produced by CI.
- When in doubt, consult `README.md` for commands, deployment notes, and project structure.
