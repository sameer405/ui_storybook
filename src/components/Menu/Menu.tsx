/**
 * Menu — RapidCanvas UX Design Library
 * Figma components: Menu item + Menu group (page: Menu)
 * Menu item: full-width row with icon | label | TAGNAME tag | > chevron
 * Selected-solid: left 3px orange bar, white bg
 * Selected-glass: left 3px orange bar + #FFF1E9 bg
 * Menu group: white card, border, shadow, rounded-xl
 */
import React from 'react';

export type MenuSize = 'sm' | 'md' | 'lg';
export type MenuSelectionStyle = 'solid' | 'glass';

export interface MenuItemData {
  id: string;
  label: string;
  icon?: React.ReactNode;
  tag?: string;
  endIcon?: React.ReactNode;
  disabled?: boolean;
}

export interface MenuItemProps extends MenuItemData {
  size?: MenuSize;
  selected?: boolean;
  selectionStyle?: MenuSelectionStyle;
  onClick?: (id: string) => void;
}

export interface MenuGroupProps {
  items: MenuItemData[];
  size?: MenuSize;
  activeId?: string;
  selectionStyle?: MenuSelectionStyle;
  onSelect?: (id: string) => void;
  blur?: boolean;
}

const itemHeight: Record<MenuSize, string> = {
  sm: 'h-9 text-xs',
  md: 'h-10 text-sm',
  lg: 'h-11 text-sm',
};

const iconArea: Record<MenuSize, string> = {
  sm: 'h-6 w-6',
  md: 'h-7 w-7',
  lg: 'h-8 w-8',
};

export function MenuItem({
  id, label, icon, tag, endIcon, disabled = false,
  size = 'md', selected = false, selectionStyle = 'glass',
  onClick,
}: MenuItemProps) {
  const selectedBg = selectionStyle === 'glass' ? 'bg-[#FFF1E9]' : 'bg-white';
  const selectedText = 'text-gray-900 font-medium';
  const defaultStyle = 'text-gray-600 hover:bg-gray-50 hover:text-gray-900';

  return (
    <button
      disabled={disabled}
      onClick={() => !disabled && onClick?.(id)}
      className={[
        'relative w-full flex items-center gap-3 px-4 transition-colors',
        'focus:outline-none',
        itemHeight[size],
        selected ? `${selectedBg} ${selectedText}` : defaultStyle,
        disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer',
      ].join(' ')}
    >
      {/* Left indicator bar */}
      {selected && (
        <span className="absolute left-0 top-1 bottom-1 w-[3px] rounded-r-full bg-[#ED600E]" />
      )}

      {/* Icon container */}
      {icon && (
        <span className={[
          'shrink-0 flex items-center justify-center rounded-md',
          iconArea[size],
          selected ? 'text-[#ED600E]' : 'text-gray-400',
        ].join(' ')}>
          {icon}
        </span>
      )}

      {/* Label */}
      <span className="flex-1 text-left truncate">{label}</span>

      {/* Tag */}
      {tag && (
        <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
          {tag}
        </span>
      )}

      {/* End icon or default chevron */}
      <span className={['shrink-0', selected ? 'text-[#ED600E]' : 'text-gray-300'].join(' ')}>
        {endIcon ?? <ChevronRight />}
      </span>
    </button>
  );
}

export function MenuGroup({
  items, size = 'md', activeId, selectionStyle = 'glass', onSelect, blur = false,
}: MenuGroupProps) {
  return (
    <div className={[
      'overflow-hidden rounded-xl border border-gray-200 shadow-md',
      blur ? 'bg-white/80 backdrop-blur-md' : 'bg-white',
    ].join(' ')}>
      {items.map(item => (
        <MenuItem
          key={item.id}
          {...item}
          size={size}
          selected={item.id === activeId}
          selectionStyle={selectionStyle}
          onClick={onSelect}
        />
      ))}
    </div>
  );
}

function ChevronRight() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}
