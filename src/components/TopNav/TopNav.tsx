/**
 * TopNav — RapidCanvas UX Design Library
 * Figma component key: 499:283  (page: Navigation)
 * Variant: type=Global
 *
 * Design: white bg + thin bottom border, left = workspace name + LIVE badge + chevron,
 * right = search pill + notification bell with badge dot
 */
import React from 'react';

export interface TopNavProps {
  workspaceName?: string;
  liveStatus?: boolean;
  onWorkspaceClick?: () => void;
  onSearchClick?: () => void;
  searchShortcut?: string;
  notificationCount?: number;
  onNotificationClick?: () => void;
  /** Extra actions to render right of the search/bell */
  actions?: React.ReactNode;
}

export function TopNav({
  workspaceName = 'WorkspaceName',
  liveStatus = true,
  onWorkspaceClick,
  onSearchClick,
  searchShortcut = '⌘K',
  notificationCount = 0,
  onNotificationClick,
  actions,
}: TopNavProps) {
  return (
    <header className="w-full h-14 flex items-center px-5 gap-3 bg-white border-b border-gray-100">
      {/* Left — workspace */}
      <button
        onClick={onWorkspaceClick}
        className="flex items-center gap-2 shrink-0 hover:opacity-80 transition-opacity focus:outline-none"
      >
        <span className="text-sm font-semibold text-gray-900">{workspaceName}</span>
        {liveStatus && (
          <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#ED600E] border border-[#ED600E] rounded leading-none">
            LIVE
          </span>
        )}
        <SortIcon />
      </button>

      <div className="flex-1" />

      {/* Right — search */}
      <button
        onClick={onSearchClick}
        className="flex items-center gap-2 h-8 px-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-sm text-gray-400 focus:outline-none"
      >
        <SearchIcon />
        <span>search</span>
        <span className="text-xs text-gray-300 font-mono">{searchShortcut}</span>
      </button>

      {/* Notification bell */}
      <button
        onClick={onNotificationClick}
        className="relative flex items-center justify-center h-8 w-8 rounded-lg hover:bg-gray-100 transition-colors text-gray-500 focus:outline-none"
        aria-label="Notifications"
      >
        <BellIcon />
        {notificationCount > 0 && (
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 border border-white" />
        )}
      </button>

      {actions}
    </header>
  );
}

function SearchIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="11" cy="11" r="8" />
      <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" d="M15 17H9m3-14a7 7 0 017 7c0 5 2 6 2 6H4s2-1 2-6a7 7 0 017-7z" />
      <path d="M13.73 21a2 2 0 01-3.46 0" />
    </svg>
  );
}

function SortIcon() {
  return (
    <svg className="h-3.5 w-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4M16 15l-4 4-4-4" />
    </svg>
  );
}
