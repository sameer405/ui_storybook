/** Tailwind config for this package's own Storybook (not shipped). */
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('./tailwind-preset.cjs')],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './.storybook/**/*.{ts,tsx}'],
  plugins: [],
};
