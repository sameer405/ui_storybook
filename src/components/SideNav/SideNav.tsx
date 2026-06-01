/**
 * SideNav — RapidCanvas UX Design Library
 * Figma component key: 295:3506  (page: Navigation)
 * Variants: SideNav=Global-E/C, Project-E/C
 * NavItem: Type=Selected-E/C, Default-E/C
 *
 * Design: white bg, section labels in uppercase xs, active item has 3px left orange
 * bar + #FFF1E9 bg + orange icon tint, collapsed shows icons only (40px wide)
 */
import React from 'react';

export interface SideNavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string | number;
  disabled?: boolean;
  section?: string;
  children?: Omit<SideNavItem, 'children' | 'section'>[];
}

export interface SideNavProps {
  items: SideNavItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
  collapsed?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export function SideNav({
  items,
  activeId,
  onSelect,
  collapsed = false,
  header,
  footer,
}: SideNavProps) {
  const [openSections, setOpenSections] = React.useState<string[]>([]);

  function toggleSection(id: string) {
    setOpenSections(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  }

  // Group items by section
  const grouped: { section?: string; items: SideNavItem[] }[] = [];
  for (const item of items) {
    const last = grouped[grouped.length - 1];
    if (!last || last.section !== item.section) {
      grouped.push({ section: item.section, items: [item] });
    } else {
      last.items.push(item);
    }
  }

  return (
    <nav
      className={[
        'flex flex-col h-full bg-white border-r border-gray-100 transition-all duration-200 shrink-0',
        collapsed ? 'w-[52px]' : 'w-52',
      ].join(' ')}
      aria-label="Sidebar navigation"
    >
      {header && (
        <div className={['shrink-0 flex items-center border-b border-gray-100', collapsed ? 'justify-center p-3' : 'px-4 py-3'].join(' ')}>
          {header}
        </div>
      )}

      <div className="flex-1 overflow-y-auto py-2">
        {grouped.map((group, gi) => (
          <div key={gi} className="mb-1">
            {!collapsed && group.section && (
              <p className="px-4 pt-3 pb-1 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                {group.section}
              </p>
            )}
            {group.items.map(item => {
              const isActive = activeId === item.id ||
                (item.children?.some(c => c.id === activeId));
              const hasChildren = !!item.children?.length;
              const isOpen = openSections.includes(item.id);

              return (
                <div key={item.id}>
                  <button
                    disabled={item.disabled}
                    onClick={() => {
                      if (hasChildren) toggleSection(item.id);
                      else onSelect?.(item.id);
                    }}
                    title={collapsed ? item.label : undefined}
                    className={[
                      'relative w-full flex items-center gap-3 text-sm font-medium transition-colors',
                      'focus:outline-none',
                      'disabled:opacity-40 disabled:cursor-not-allowed',
                      collapsed ? 'justify-center h-9 mx-auto' : 'h-9 px-3',
                      isActive
                        ? 'text-gray-900 bg-[#FFF1E9]'
                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800',
                    ].join(' ')}
                  >
                    {/* active left indicator bar */}
                    {isActive && (
                      <span className="absolute left-0 top-1 bottom-1 w-[3px] rounded-r-full bg-[#ED600E]" />
                    )}
                    {item.icon && (
                      <span className={[
                        'shrink-0 flex items-center justify-center w-7 h-7 rounded-lg',
                        isActive ? 'text-[#ED600E] bg-[#FFF1E9]' : 'text-gray-400',
                      ].join(' ')}>
                        {item.icon}
                      </span>
                    )}
                    {!collapsed && (
                      <>
                        <span className="flex-1 truncate text-left">{item.label}</span>
                        {item.badge !== undefined && (
                          <span className="ml-auto min-w-[18px] h-[18px] flex items-center justify-center px-1 text-[10px] font-semibold rounded-full bg-[#FFF1E9] text-[#ED600E]">
                            {item.badge}
                          </span>
                        )}
                        {hasChildren && (
                          <ChevronDownIcon className={['h-3.5 w-3.5 text-gray-400 transition-transform shrink-0', isOpen ? 'rotate-180' : ''].join(' ')} />
                        )}
                      </>
                    )}
                  </button>

                  {hasChildren && isOpen && !collapsed && (
                    <div className="ml-10 border-l border-gray-100 pl-2 py-0.5 flex flex-col gap-0.5">
                      {item.children!.map(child => {
                        const childActive = activeId === child.id;
                        return (
                          <button
                            key={child.id}
                            disabled={child.disabled}
                            onClick={() => onSelect?.(child.id)}
                            className={[
                              'relative w-full flex items-center gap-2 h-8 px-2 rounded-md text-sm transition-colors',
                              'focus:outline-none',
                              childActive
                                ? 'bg-[#FFF1E9] text-[#ED600E] font-medium'
                                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800',
                            ].join(' ')}
                          >
                            {child.icon && <span className="shrink-0">{child.icon}</span>}
                            <span className="flex-1 truncate text-left">{child.label}</span>
                            {child.badge !== undefined && (
                              <span className="min-w-[18px] h-[18px] flex items-center justify-center px-1 text-[10px] font-semibold rounded-full bg-[#FFF1E9] text-[#ED600E]">
                                {child.badge}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {footer && (
        <div className={['shrink-0 border-t border-gray-100', collapsed ? 'p-2 flex justify-center' : 'px-4 py-3'].join(' ')}>
          {footer}
        </div>
      )}
    </nav>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
