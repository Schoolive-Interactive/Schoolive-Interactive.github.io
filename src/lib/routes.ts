import type { Locale } from './locale-types';

export const defaultLocale: Locale = 'en';
export const locales = ['en', 'zh-CN', 'zh-HK', 'zh-TW'] as const satisfies readonly Locale[];

export const localePaths: Record<Locale, string> = {
  en: '/',
  'zh-CN': '/zh-CN/',
  'zh-HK': '/zh-HK/',
  'zh-TW': '/zh-TW/',
};

export function localePath(locale: Locale): string {
  return localePaths[locale];
}

export function sectionPath(locale: Locale, sectionId: string): string {
  return `${localePath(locale)}#${sectionId}`;
}

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function localeStaticPaths() {
  return locales
    .filter((locale) => locale !== defaultLocale)
    .map((locale) => ({ params: { locale } }));
}
