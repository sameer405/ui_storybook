/**
 * Tooltip — RapidCanvas UX Design Library
 * Figma component: Tooltip (page: Tooltip)
 * Single component with position prop added for usability.
 */
import React from 'react';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  content: React.ReactNode;
  position?: TooltipPosition;
  children: React.ReactNode;
}

const positionClasses: Record<TooltipPosition, { wrapper: string; arrow: string }> = {
  top: {
    wrapper: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    arrow: 'top-full left-1/2 -translate-x-1/2 border-t-gray-900',
  },
  bottom: {
    wrapper: 'top-full left-1/2 -translate-x-1/2 mt-2',
    arrow: 'bottom-full left-1/2 -translate-x-1/2 border-b-gray-900',
  },
  left: {
    wrapper: 'right-full top-1/2 -translate-y-1/2 mr-2',
    arrow: 'left-full top-1/2 -translate-y-1/2 border-l-gray-900',
  },
  right: {
    wrapper: 'left-full top-1/2 -translate-y-1/2 ml-2',
    arrow: 'right-full top-1/2 -translate-y-1/2 border-r-gray-900',
  },
};

export function Tooltip({ content, position = 'top', children }: TooltipProps) {
  const [visible, setVisible] = React.useState(false);
  const pos = positionClasses[position];

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span
          role="tooltip"
          className={[
            'absolute z-50 pointer-events-none whitespace-nowrap',
            'bg-gray-900 text-white text-xs font-medium px-2.5 py-1.5 rounded-lg shadow-lg',
            pos.wrapper,
          ].join(' ')}
        >
          {content}
          <span
            className={[
              'absolute border-4 border-transparent',
              pos.arrow,
            ].join(' ')}
          />
        </span>
      )}
    </span>
  );
}
