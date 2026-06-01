/**
 * @sameer405/ui Tailwind preset
 *
 * The components in this package render with stock Tailwind utilities plus a few
 * arbitrary values, so they work as long as the consumer runs Tailwind and adds
 * the package to their `content` globs. This preset additionally exposes the
 * RapidCanvas brand tokens (orange/neutral palettes, Inter font) as named theme
 * keys for convenience.
 *
 * Usage in a consuming app's tailwind.config.js:
 *
 *   module.exports = {
 *     presets: [require('@sameer405/ui/tailwind-preset')],
 *     content: [
 *       './src/**\/*.{ts,tsx}',
 *       './node_modules/@sameer405/ui/dist/**\/*.js', // generate the lib's classes
 *     ],
 *   }
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#ED600E',
        'primary-bg': '#FFF1E9',
        surface: '#F9FAFB',
        'surface-raised': '#FFFFFF',
        border: '#E8E8E8',
        'text-primary': '#171717',
        'text-secondary': '#737373',
        'text-muted': '#ABABAB',
        orange: {
          50: '#FFF4ED',
          100: '#FFE4CC',
          200: '#FFC899',
          300: '#FFA566',
          400: '#FF8133',
          500: '#F96B14',
          600: '#ED600E',
          700: '#C94E08',
          800: '#A33E05',
          900: '#7D2F03',
        },
        neutral: {
          0: '#FFFFFF',
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E8E8E8',
          300: '#D4D4D4',
          400: '#ABABAB',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
};
