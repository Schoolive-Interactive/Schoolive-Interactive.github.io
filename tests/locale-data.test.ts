import { describe, expect, it } from 'vitest';
import { defaultLocale, localePath, locales } from '../src/lib/routes';
import { localeData } from '../src/lib/i18n';
import type { Locale } from '../src/lib/locale-types';

function shapeOf(value: unknown): unknown {
  if (Array.isArray(value)) {
    return ['array'];
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([key, nested]) => [key, shapeOf(nested)]),
    );
  }

  return typeof value;
}

describe('locale data', () => {
  it('keeps the exact same JSON schema shape for every locale', () => {
    const baseShape = shapeOf(localeData.en);

    for (const locale of locales) {
      expect(shapeOf(localeData[locale])).toEqual(baseShape);
    }
  });

  it('defines required modern routes without legacy html paths', () => {
    const expectedRoutes: Record<Locale, string> = {
      en: '/',
      'zh-CN': '/zh-CN/',
      'zh-HK': '/zh-HK/',
      'zh-TW': '/zh-TW/',
    };

    for (const locale of locales) {
      expect(localePath(locale)).toBe(expectedRoutes[locale]);
      expect(localePath(locale)).not.toMatch(/\.html$/);
    }
  });

  it('uses English as the unprefixed default locale', () => {
    expect(defaultLocale).toBe('en');
    expect(localePath(defaultLocale)).toBe('/');
  });
});
