/**
 * Toggle — RapidCanvas UX Design Library
 * Figma component key: 1483:13667  (page: Switch)
 * Variants: size (sm/md/lg) × selection (single item active at a time)
 *
 * Design: pill-group row. Active item = #ED600E bg + white text.
 * Inactive = white bg + gray-600 text + gray-200 border. Plus-icon prefix.
 */
import React from 'react';

export type ToggleSize = 'sm' | 'md' | 'lg';

export interface ToggleItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface ToggleProps {
  items: ToggleItem[];
  activeId?: string;
  defaultActiveId?: string;
  onChange?: (id: string) => void;
  size?: ToggleSize;
  showIcon?: boolean;
}

const sizeClasses: Record<ToggleSize, { pill: string; text: string; icon: string }> = {
  sm: { pill: 'px-2.5 py-1',   text: 'text-xs',  icon: 'h-3 w-3' },
  md: { pill: 'px-3.5 py-1.5', text: 'text-sm',  icon: 'h-3.5 w-3.5' },
  lg: { pill: 'px-4 py-2',     text: 'text-sm',  icon: 'h-4 w-4' },
};

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Toggle({
  items,
  activeId,
  defaultActiveId,
  onChange,
  size = 'md',
  showIcon = true,
}: ToggleProps) {
  const [internal, setInternal] = React.useState(defaultActiveId ?? items[0]?.id);
  const isControlled = activeId !== undefined;
  const current = isControlled ? activeId : internal;

  const s = sizeClasses[size];

  function select(id: string) {
    if (!isControlled) setInternal(id);
    onChange?.(id);
  }

  return (
    <div className="inline-flex items-center gap-1.5 flex-wrap">
      {items.map((item) => {
        const active = current === item.id;
        return (
          <button
            key={item.id}
            disabled={item.disabled}
            onClick={() => !item.disabled && select(item.id)}
            className={[
              'inline-flex items-center gap-1.5 rounded-full font-medium transition-colors focus:outline-none',
              'focus-visible:ring-2 focus-visible:ring-[#ED600E] focus-visible:ring-offset-1',
              s.pill,
              s.text,
              active
                ? 'bg-[#ED600E] text-white shadow-sm'
                : item.disabled
                ? 'bg-white text-gray-300 border border-gray-200 cursor-not-allowed'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-[#ED600E] hover:text-[#ED600E]',
            ].join(' ')}
          >
            {showIcon && (item.icon ?? <PlusIcon className={s.icon} />)}
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
