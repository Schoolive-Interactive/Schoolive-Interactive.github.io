import { defineConfig } from 'astro/config';
import UnoCSS from '@unocss/astro';

export default defineConfig({
  site: 'https://schoolive-interactive.github.io',
  integrations: [UnoCSS()],
  i18n: {
    locales: ['en', 'zh-CN', 'zh-HK', 'zh-TW'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
