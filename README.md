# Schoolive Interactive Website

A static website for **Schoolive - Virtual Streamer Society**, built as a multilingual promotional page for the Schoolive group.

## Overview

- **Title:** Schoolive - Virtual Streamer Society
- **Primary entry point:** `docs/index.html`
- **Languages:** English, Simplified Chinese (`docs/chs.html`), Traditional Chinese for Hong Kong/Macau (`docs/chth.html`), and Traditional Chinese for Taiwan (`docs/chtt.html`).
- **Built with:** HTML, CSS, JavaScript, Bootstrap, Mobirise templates.

## Features

- Responsive homepage with navigation menu and language selector.
- Introduction section describing Schoolive's mission and creative focus.
- Member showcase with linked Bilibili profiles.
- Feedback form powered by Mobirise form builder.
- Footer with company contact information and social links.

## Project Structure

- `docs/index.html` - English homepage.
- `docs/chs.html`, `docs/chth.html`, `docs/chtt.html` - Chinese language variants.
- `docs/assets/` - site assets including CSS, JavaScript, images, fonts, and third-party libraries.
  - `bootstrap/` - Bootstrap CSS and JS files.
  - `dropdown/`, `parallax/`, `smoothscroll/`, `socicon/`, `theme/`, and `mobirise/` support site layout and interactions.
  - `images/` - local images used throughout the site.

## How to Use

1. Open `docs/index.html` in a web browser to view the English homepage.
2. Use the language dropdown in the navbar to switch to Chinese versions.
3. Click member cards to visit each linked Bilibili profile.
4. Submit feedback using the contact form.

## Local Preview

Since this is a static HTML site, serve the `docs/` folder from any local static server.

Example using `npx`:

```bash
npx http-server docs
```

Then open `http://localhost:8080` in your browser.

## Deployment

This site can be deployed to any static hosting provider, such as GitHub Pages, Netlify, or Vercel.

## Notes

- The contact form appears to point to <https://mobirise.eu/> for submission handling.
- Bilibili links are included to connect visitors to the Schoolive community.

## License

No license is specified. Add a license file if you want to make the repository terms explicit.
