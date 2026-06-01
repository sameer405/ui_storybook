/**
 * Button — RapidCanvas UX Design Library
 * Figma component key: 676:17716
 * Page: Buttons
 * Variants: Type (Primary/Secondary/Tertiary/Text only) × Size (sm/md/lg/xl) × State (Default/Hover/Disabled)
 */
import React from 'react';

export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'text-only';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
  size?: ButtonSize;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  loading?: boolean;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonType, string> = {
  primary:
    'bg-[#ED600E] text-white hover:bg-orange-700 active:bg-orange-800 border border-transparent shadow-sm',
  secondary:
    'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 active:bg-gray-100 shadow-sm',
  tertiary:
    'bg-transparent text-[#ED600E] border border-transparent hover:bg-orange-50 active:bg-orange-100',
  'text-only':
    'bg-transparent text-gray-600 border border-transparent hover:text-gray-900 hover:bg-gray-50 active:bg-gray-100',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs rounded-md gap-1.5',
  md: 'px-4 py-2 text-sm rounded-lg gap-2',
  lg: 'px-5 py-2.5 text-sm rounded-lg gap-2',
  xl: 'px-6 py-3 text-base rounded-xl gap-2.5',
};

export function Button({
  variant = 'primary',
  size = 'md',
  leadingIcon,
  trailingIcon,
  loading = false,
  disabled,
  children,
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={disabled || loading}
      className={[
        'inline-flex items-center justify-center font-medium transition-colors',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED600E] focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].join(' ')}
    >
      {loading ? (
        <svg className="animate-spin h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
        </svg>
      ) : leadingIcon ? (
        <span className="shrink-0">{leadingIcon}</span>
      ) : null}
      <span>{children}</span>
      {!loading && trailingIcon && <span className="shrink-0">{trailingIcon}</span>}
    </button>
  );
}
