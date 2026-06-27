# Schoolive Modern Website

This package migrates the Schoolive public website from Mobirise/Bootstrap-generated static HTML into a static-first Astro architecture with TypeScript, UnoCSS, and JSON-based localization.

## Stack

- Astro
- TypeScript
- UnoCSS with `presetWind4` and `presetIcons`
- JSON locale data
- Minimal Vitest checks for locale schema consistency and route mapping

## Routes

| Locale | Route |
| --- | --- |
| English | `/` |
| Simplified Chinese | `/zh-CN/` |
| Hong Kong/Macau Traditional Chinese | `/zh-HK/` |
| Taiwan Traditional Chinese | `/zh-TW/` |

Legacy `.html` compatibility pages and browser-language detection are intentionally not implemented in this first migration.

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

## Validation

```bash
npm run check
npm run test:unit
npm run build
```

or run the full validation sequence:

```bash
npm test
```

## Preview production output

```bash
npm run preview
```

## Project structure

```text
.
├─ astro.config.mjs
├─ package.json
├─ tsconfig.json
├─ uno.config.ts
├─ vitest.config.ts
├─ public/
│  ├─ favicon.png
│  └─ assets/images/
├─ src/
│  ├─ components/
│  ├─ data/
│  │  ├─ locales/
│  │  ├─ members.json
│  │  └─ social.json
│  ├─ layouts/
│  ├─ lib/
│  ├─ pages/
│  └─ styles/
└─ tests/
```

## Deployment

A GitHub Pages workflow is included at `.github/workflows/deploy.yml`. It builds the Astro site into `dist/` and deploys the generated artifact using GitHub Pages Actions.

If this repository continues to deploy from a committed `docs/` directory instead of GitHub Actions, update the deployment configuration intentionally. The recommended path is to keep generated output out of source control and deploy from CI.

## Feedback form status

The original Mobirise form posted to `https://mobirise.eu/`. This migration intentionally replaces it with a mailto fallback and does not add a new backend in the first pass.

## Asset notes

The source HTML referenced generated Mobirise image filenames. This migration uses semantic filenames under `public/assets/images/`. In this environment the repository could be inspected through GitHub file reads, but direct `git clone` and binary asset download were unavailable; therefore the packaged migration includes semantic SVG stand-ins for visual assets. Replace these files with original optimized images before final production rollout if exact visual parity is required.
