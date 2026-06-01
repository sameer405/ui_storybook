/**
 * Tag — RapidCanvas UX Design Library
 * Figma component key: d8a1fb3103caf47b7192ebb2e00b22dd4921272b
 * Page: Tags
 * Variants: color (Default/orange/green/yellow/red/blue/pink/purple/cyan/olive)
 */
import React from 'react';

export type TagColor =
  | 'default' | 'orange' | 'green' | 'yellow' | 'red'
  | 'blue' | 'pink' | 'purple' | 'cyan' | 'olive';
export type TagSize = 'sm' | 'md';

export interface TagProps {
  label: string;
  color?: TagColor;
  size?: TagSize;
  leadingIcon?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

const colorClasses: Record<TagColor, string> = {
  default: 'bg-gray-100 text-gray-700 border border-gray-200',
  orange:  'bg-orange-50 text-[#ED600E] border border-orange-200',
  green:   'bg-green-50 text-green-700 border border-green-200',
  yellow:  'bg-amber-50 text-amber-700 border border-amber-200',
  red:     'bg-red-50 text-red-700 border border-red-200',
  blue:    'bg-blue-50 text-blue-700 border border-blue-200',
  pink:    'bg-pink-50 text-pink-700 border border-pink-200',
  purple:  'bg-purple-50 text-purple-700 border border-purple-200',
  cyan:    'bg-cyan-50 text-cyan-700 border border-cyan-200',
  olive:   'bg-lime-50 text-lime-700 border border-lime-200',
};

const sizeClasses: Record<TagSize, string> = {
  sm: 'px-2 py-0.5 text-xs rounded-md gap-1',
  md: 'px-2.5 py-1 text-sm rounded-lg gap-1.5',
};

export function Tag({
  label,
  color = 'default',
  size = 'md',
  leadingIcon,
  dismissible = false,
  onDismiss,
}: TagProps) {
  return (
    <span
      className={[
        'inline-flex items-center font-medium',
        colorClasses[color],
        sizeClasses[size],
      ].join(' ')}
    >
      {leadingIcon && <span className="shrink-0">{leadingIcon}</span>}
      {label}
      {dismissible && (
        <button
          onClick={onDismiss}
          aria-label={`Remove ${label}`}
          className="shrink-0 ml-0.5 rounded hover:opacity-70 transition-opacity focus:outline-none"
        >
          <svg viewBox="0 0 14 14" fill="none" className="h-3 w-3" stroke="currentColor" strokeWidth={2}>
            <path d="M2 2l10 10M12 2L2 12" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </span>
  );
}
