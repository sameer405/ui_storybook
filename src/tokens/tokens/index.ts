/**
 * Design tokens from RapidCanvas — UX Design Library [WIP]
 * Figma file: F7YIPUOWnqIZAOcnFszBcr
 * Variable collections: Theme (Light/Dark), Spacing (Mode 1)
 * Values extracted via Figma Plugin API from actual variable definitions.
 */

export const colors = {
  primary: '#ED600E',

  orange: {
    50:  '#FFF4ED',
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
    0:   '#FFFFFF',
    50:  '#FAFAFA',
    100: '#F5F5F5',
    200: '#E8E8E8',
    300: '#D4D4D4',
    400: '#ABABAB',
    500: '#737373',
    600: '#525252',
    700: '#3D3D3D',
    800: '#262626',
    900: '#171717',
    1000: '#0D0D0D',
  },

  semantics: {
    green:  { bg: '#ECFDF5', text: '#15803D', border: '#BBF7D0', solid: '#22C55E' },
    red:    { bg: '#FEF2F2', text: '#DC2626', border: '#FECACA', solid: '#EF4444' },
    yellow: { bg: '#FFFBEB', text: '#D97706', border: '#FDE68A', solid: '#F59E0B' },
    blue:   { bg: '#EFF6FF', text: '#2563EB', border: '#BFDBFE', solid: '#3B82F6' },
    cyan:   { bg: '#ECFEFF', text: '#0891B2', border: '#A5F3FC', solid: '#06B6D4' },
    purple: { bg: '#F5F3FF', text: '#7C3AED', border: '#DDD6FE', solid: '#8B5CF6' },
    pink:   { bg: '#FDF2F8', text: '#DB2777', border: '#FBCFE8', solid: '#EC4899' },
    olive:  { bg: '#F7FEE7', text: '#65A30D', border: '#D9F99D', solid: '#84CC16' },
  },
} as const;

export const spacing = {
  none:  0,
  xxxs:  2,
  xxs:   4,
  xs:    8,
  sm:    12,
  md:    16,
  lg:    24,
  xl:    32,
  xxl:   40,
  xxxl:  48,
} as const;

export const radius = {
  none:  0,
  xxxs:  2,
  xxs:   4,
  xs:    6,
  sm:    8,
  md:    12,
  lg:    16,
  xl:    24,
} as const;

export const typography = {
  families: { sans: 'Inter', mono: 'DM Mono' },
  sizes: {
    caption2: { size: 10, lineHeight: 16, weight: 400 },
    caption1: { size: 12, lineHeight: 18, weight: 400 },
    body2:    { size: 13, lineHeight: 20, weight: 400 },
    body1:    { size: 14, lineHeight: 22, weight: 400 },
    body1Md:  { size: 14, lineHeight: 22, weight: 500 },
    body1Sb:  { size: 14, lineHeight: 22, weight: 600 },
    title3:   { size: 16, lineHeight: 24, weight: 500 },
    title2:   { size: 18, lineHeight: 28, weight: 600 },
    title1:   { size: 20, lineHeight: 30, weight: 600 },
    header3:  { size: 24, lineHeight: 32, weight: 700 },
    header2:  { size: 30, lineHeight: 40, weight: 700 },
    header1:  { size: 36, lineHeight: 48, weight: 700 },
    display:  { size: 48, lineHeight: 60, weight: 800 },
    hero:     { size: 60, lineHeight: 72, weight: 800 },
    jumbo:    { size: 72, lineHeight: 90, weight: 800 },
  },
} as const;

export const shadows = {
  sm:  '0 1px 2px rgba(0,0,0,0.06)',
  md:  '0 4px 8px rgba(0,0,0,0.08)',
  lg:  '0 8px 16px rgba(0,0,0,0.10)',
  xl:  '0 16px 32px rgba(0,0,0,0.12)',
} as const;
