/**
 * Tabs / Tab element — RapidCanvas UX Design Library
 * Tabs component key:       d34c44309e0f20244fdd0f3896d2688e28d0d3ef
 * Tab element component key: 6aa3d906b709e2d43e38393845d767c33bd44aad
 * filePath: design_systems/RapidCanvas - UX Design Library [WIP]/components/Tabs
 */
import React from 'react';

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string | number;
  disabled?: boolean;
}

export type TabSize = 'sm' | 'md' | 'lg';

export interface TabsProps {
  items: TabItem[];
  activeId?: string;
  defaultActiveId?: string;
  onChange?: (id: string) => void;
  variant?: 'line' | 'pill';
  size?: TabSize;
}

const lineTextSize: Record<TabSize, string> = {
  sm: 'text-xs pb-2',
  md: 'text-sm pb-3',
  lg: 'text-base pb-3',
};

export function Tabs({
  items,
  activeId,
  defaultActiveId,
  onChange,
  variant = 'line',
  size = 'md',
}: TabsProps) {
  const [internal, setInternal] = React.useState(defaultActiveId ?? items[0]?.id);
  const isControlled = activeId !== undefined;
  const current = isControlled ? activeId : internal;

  function select(id: string) {
    if (!isControlled) setInternal(id);
    onChange?.(id);
  }

  if (variant === 'pill') {
    return (
      <div className="inline-flex items-center gap-1">
        {items.map((item) => {
          const active = current === item.id;
          return (
            <button
              key={item.id}
              disabled={item.disabled}
              onClick={() => select(item.id)}
              className={[
                'inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full transition-colors',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED600E]',
                'disabled:opacity-40 disabled:cursor-not-allowed',
                active
                  ? 'bg-[#ED600E] text-white shadow-sm'
                  : 'text-gray-500 hover:bg-[#FFF1E9] hover:text-[#ED600E]',
              ].join(' ')}
            >
              {item.icon && (
                <span className={active ? 'text-white' : 'text-gray-400'}>
                  {item.icon}
                </span>
              )}
              {item.label}
              {item.badge !== undefined && (
                <span className={[
                  'ml-1 px-1.5 py-0.5 text-xs rounded-full',
                  active ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600',
                ].join(' ')}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex gap-6" aria-label="Tabs">
        {items.map((item) => {
          const active = current === item.id;
          return (
            <button
              key={item.id}
              disabled={item.disabled}
              onClick={() => select(item.id)}
              className={[
                'inline-flex items-center gap-1.5 font-medium border-b-2 transition-colors',
                lineTextSize[size],
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED600E] focus-visible:ring-offset-2',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                active
                  ? 'border-[#ED600E] text-[#ED600E]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
              ].join(' ')}
            >
              {item.icon}
              {item.label}
              {item.badge !== undefined && (
                <span
                  className={[
                    'ml-1 px-1.5 py-0.5 text-xs rounded-full',
                    active ? 'bg-[#FFF1E9] text-[#ED600E]' : 'bg-gray-100 text-gray-600',
                  ].join(' ')}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
