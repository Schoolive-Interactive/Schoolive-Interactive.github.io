import { defineConfig, presetIcons, presetWind4 } from 'unocss';

export default defineConfig({
  presets: [
    presetWind4(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  theme: {
    colors: {
      brand: {
        DEFAULT: '#40b0bf',
        deep: '#2a747e',
        ink: '#142b34',
        light: '#e9fbfd',
        blue: '#6592e6',
      },
    },
  },
  shortcuts: {
    'site-container': 'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8',
    'section-title': 'text-center text-3xl font-bold tracking-tight md:text-5xl',
    'btn-primary': 'inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 font-semibold text-white shadow-lg shadow-brand/25 transition hover:-translate-y-0.5 hover:bg-brand-deep focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2',
    'btn-secondary': 'inline-flex items-center justify-center rounded-full border border-white/70 px-5 py-2.5 font-semibold text-white transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/80 focus:ring-offset-2 focus:ring-offset-brand-ink',
    'glass-card': 'rounded-3xl border border-white/70 bg-white/85 shadow-xl shadow-slate-900/8 backdrop-blur',
    'member-card': 'overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-1 hover:shadow-2xl',
  },
});
