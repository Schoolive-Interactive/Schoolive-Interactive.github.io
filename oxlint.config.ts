import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['import', 'typescript', 'unicorn'],
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  globals: {
    Astro: 'readonly',
    __ASTRO_IMAGE_OPTIONS__: 'readonly',
  },
  rules: {
    eqeqeq: 'error',
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-duplicate-imports': 'error',
    'no-unused-vars': 'warn',
    'prefer-const': 'warn',
    'sort-imports': 'off',
    'import/no-duplicates': 'error',
    'import/no-cycle': 'warn',
    'typescript/no-unused-vars': 'warn',
    'typescript/no-explicit-any': 'warn',
    'unicorn/prefer-top-level-await': 'off',
  },
  overrides: [
    {
      files: ['tests/**/*.ts', 'tests/**/*.tsx'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
});
