import en from '../data/locales/en.json';
import zhCN from '../data/locales/zh-CN.json';
import zhHK from '../data/locales/zh-HK.json';
import zhTW from '../data/locales/zh-TW.json';
import type { Locale, LocaleCopy } from './locale-types';
import { defaultLocale, localePath, locales } from './routes';

export const localeData = {
  en,
  'zh-CN': zhCN,
  'zh-HK': zhHK,
  'zh-TW': zhTW,
} satisfies Record<Locale, LocaleCopy>;

export function getLocaleData(locale: Locale): LocaleCopy {
  return localeData[locale];
}

export function localizeTemplate(template: string, values: Record<string, string>): string {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, value),
    template,
  );
}

export function htmlLang(locale: Locale): string {
  return locale === defaultLocale ? 'en' : locale;
}

export function alternateLinks(site: URL) {
  return locales.map((locale) => ({
    locale,
    href: new URL(localePath(locale), site).toString(),
  }));
}
