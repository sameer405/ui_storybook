/**
 * Badge — RapidCanvas UX Design Library
 * Figma component key: 2766:1867
 * Page: Badge
 * Variants: color × style (neutral/orange/green/red/cyan/blue/purple/yellow/pink/olive × glass/solid)
 */
import React from 'react';

export type BadgeColor =
  | 'neutral' | 'orange' | 'green' | 'red'
  | 'cyan' | 'blue' | 'purple' | 'yellow' | 'pink' | 'olive';
export type BadgeStyle = 'solid' | 'glass';

export interface BadgeProps {
  label: string;
  color?: BadgeColor;
  style?: BadgeStyle;
  icon?: React.ReactNode;
}

const colorMap: Record<BadgeColor, { solid: string; glass: string }> = {
  neutral: {
    solid: 'bg-neutral-700 text-white',
    glass: 'bg-neutral-100 text-neutral-700 ring-1 ring-neutral-200',
  },
  orange: {
    solid: 'bg-[#ED600E] text-white',
    glass: 'bg-orange-50 text-[#ED600E] ring-1 ring-orange-200',
  },
  green: {
    solid: 'bg-green-600 text-white',
    glass: 'bg-green-50 text-green-700 ring-1 ring-green-200',
  },
  red: {
    solid: 'bg-red-600 text-white',
    glass: 'bg-red-50 text-red-700 ring-1 ring-red-200',
  },
  cyan: {
    solid: 'bg-cyan-500 text-white',
    glass: 'bg-cyan-50 text-cyan-700 ring-1 ring-cyan-200',
  },
  blue: {
    solid: 'bg-blue-600 text-white',
    glass: 'bg-blue-50 text-blue-700 ring-1 ring-blue-200',
  },
  purple: {
    solid: 'bg-purple-600 text-white',
    glass: 'bg-purple-50 text-purple-700 ring-1 ring-purple-200',
  },
  yellow: {
    solid: 'bg-amber-500 text-white',
    glass: 'bg-amber-50 text-amber-700 ring-1 ring-amber-200',
  },
  pink: {
    solid: 'bg-pink-500 text-white',
    glass: 'bg-pink-50 text-pink-700 ring-1 ring-pink-200',
  },
  olive: {
    solid: 'bg-lime-600 text-white',
    glass: 'bg-lime-50 text-lime-700 ring-1 ring-lime-200',
  },
};

export function Badge({ label, color = 'neutral', style = 'solid', icon }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium',
        colorMap[color][style],
      ].join(' ')}
    >
      {icon && <span className="shrink-0 -ml-0.5">{icon}</span>}
      {label}
    </span>
  );
}
