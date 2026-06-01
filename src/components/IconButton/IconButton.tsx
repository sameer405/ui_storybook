/**
 * Icon Button — RapidCanvas UX Design Library
 * Figma component key: 676:18280
 * Page: Buttons
 * Variants: Type (Primary/Secondary/Tertiary/No bg) × Size (sm/md/lg/xl)
 */
import React from 'react';

export type IconButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'no-bg';
export type IconButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  icon: React.ReactNode;
  label: string;
}

const variantClasses: Record<IconButtonVariant, string> = {
  primary:   'bg-[#ED600E] text-white hover:bg-orange-700 active:bg-orange-800',
  secondary: 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 active:bg-gray-100 shadow-sm',
  tertiary:  'bg-transparent text-[#ED600E] hover:bg-orange-50 active:bg-orange-100',
  'no-bg':   'bg-transparent text-gray-500 hover:bg-gray-100 active:bg-gray-200',
};

const sizeClasses: Record<IconButtonSize, string> = {
  sm: 'h-7 w-7 rounded-md',
  md: 'h-8 w-8 rounded-lg',
  lg: 'h-10 w-10 rounded-lg',
  xl: 'h-12 w-12 rounded-xl',
};

export function IconButton({
  variant = 'no-bg',
  size = 'md',
  icon,
  label,
  className = '',
  ...rest
}: IconButtonProps) {
  return (
    <button
      {...rest}
      aria-label={label}
      className={[
        'inline-flex items-center justify-center transition-colors',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED600E] focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].join(' ')}
    >
      {icon}
    </button>
  );
}
