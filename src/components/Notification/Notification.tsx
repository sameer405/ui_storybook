/**
 * Notification — RapidCanvas UX Design Library
 * Figma components: .notification (State=Default/Error/Warning/Hover) + Notifications panel
 * Page: Notification
 */
import React from 'react';

export type NotificationState = 'default' | 'error' | 'warning' | 'hover';

export interface NotificationItemProps {
  state?: NotificationState;
  projectName?: string;
  name?: string;
  message?: string;
  time?: string;
  progress?: number;
  actionLabel?: string;
  onAction?: () => void;
  onDismiss?: () => void;
  projectIcon?: React.ReactNode;
}

export interface NotificationsPanelProps {
  items: NotificationItemProps[];
  onClearAll?: () => void;
}

const stateConfig: Record<NotificationState, { border: string; iconColor: string; icon: React.ReactNode }> = {
  default: {
    border: 'border-gray-200',
    iconColor: 'text-gray-500',
    icon: <InfoIcon />,
  },
  error: {
    border: 'border-red-200 bg-red-50',
    iconColor: 'text-red-500',
    icon: <ErrorIcon />,
  },
  warning: {
    border: 'border-amber-200 bg-amber-50',
    iconColor: 'text-amber-500',
    icon: <WarnIcon />,
  },
  hover: {
    border: 'border-gray-300 bg-gray-50',
    iconColor: 'text-gray-500',
    icon: <InfoIcon />,
  },
};

export function NotificationItem({
  state = 'default',
  projectName = 'Project',
  name = 'Pipeline run completed',
  message,
  time,
  progress,
  actionLabel,
  onAction,
  onDismiss,
  projectIcon,
}: NotificationItemProps) {
  const cfg = stateConfig[state];

  return (
    <div className={['flex items-start gap-3 p-3 rounded-xl border bg-white', cfg.border].join(' ')}>
      <div className={['mt-0.5 shrink-0', cfg.iconColor].join(' ')}>
        {projectIcon ?? cfg.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs font-semibold text-gray-900 truncate">{name}</p>
          {time && <span className="text-xs text-gray-400 shrink-0">{time}</span>}
        </div>
        <p className="text-xs text-gray-500 mt-0.5">{projectName}</p>
        {message && <p className="text-xs text-gray-600 mt-1">{message}</p>}
        {progress !== undefined && (
          <div className="mt-2 h-1 rounded-full bg-gray-200 overflow-hidden">
            <div
              className="h-full rounded-full bg-[#ED600E] transition-all"
              style={{ width: `${Math.min(100, progress)}%` }}
            />
          </div>
        )}
        {actionLabel && (
          <button
            onClick={onAction}
            className="mt-2 text-xs font-medium text-[#ED600E] hover:text-orange-700"
          >
            {actionLabel}
          </button>
        )}
      </div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          aria-label="Dismiss"
          className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <XIcon />
        </button>
      )}
    </div>
  );
}

export function NotificationsPanel({ items, onClearAll }: NotificationsPanelProps) {
  return (
    <div className="w-80 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
        {onClearAll && (
          <button
            onClick={onClearAll}
            className="text-xs text-[#ED600E] hover:text-orange-700 font-medium"
          >
            Clear all
          </button>
        )}
      </div>
      <div className="flex flex-col gap-1 p-2 max-h-96 overflow-y-auto">
        {items.map((item, i) => (
          <NotificationItem key={i} {...item} />
        ))}
        {items.length === 0 && (
          <p className="text-sm text-gray-400 text-center py-8">No notifications</p>
        )}
      </div>
    </div>
  );
}

function InfoIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" d="M12 16v-4m0-4h.01" />
    </svg>
  );
}
function WarnIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    </svg>
  );
}
function ErrorIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" d="M15 9l-6 6M9 9l6 6" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
