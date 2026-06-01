/**
 * Link — RapidCanvas UX Design Library
 * Figma component key: Link (page: Link Text)
 * Variants: State (Default/hover)
 */
import React from 'react';

export interface LinkTextProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function LinkText({ icon, children, className = '', ...rest }: LinkTextProps) {
  return (
    <a
      {...rest}
      className={[
        'inline-flex items-center gap-1 text-[#ED600E] underline underline-offset-2',
        'hover:text-orange-700 hover:decoration-orange-700',
        'transition-colors cursor-pointer',
        className,
      ].join(' ')}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </a>
  );
}
