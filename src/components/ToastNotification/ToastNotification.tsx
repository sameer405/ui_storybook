/**
 * Toast notification — RapidCanvas UX Design Library
 * Figma component key: 732334aaa5538c5f79ee50c559f99eb3c9088a8c
 * Page: Toast notification
 * Types: Info / success / warning-alert / error
 */
import React from 'react';

export type ToastType = 'info' | 'success' | 'warning-alert' | 'error';

export interface ToastNotificationProps {
  type?: ToastType;
  title: string;
  description?: string;
  action?: { label: string; onClick: () => void };
  onDismiss?: () => void;
  visible?: boolean;
}

const typeConfig: Record<ToastType, { icon: React.ReactNode; track: string; iconColor: string }> = {
  info: {
    icon: <InfoIcon />,
    track: 'bg-white border border-blue-200',
    iconColor: 'text-blue-500',
  },
  success: {
    icon: <CheckIcon />,
    track: 'bg-white border border-green-200',
    iconColor: 'text-green-500',
  },
  'warning-alert': {
    icon: <WarnIcon />,
    track: 'bg-white border border-amber-200',
    iconColor: 'text-amber-500',
  },
  error: {
    icon: <ErrorIcon />,
    track: 'bg-white border border-red-200',
    iconColor: 'text-red-500',
  },
};

export function ToastNotification({
  type = 'info',
  title,
  description,
  action,
  onDismiss,
  visible = true,
}: ToastNotificationProps) {
  if (!visible) return null;
  const cfg = typeConfig[type];

  return (
    <div
      role="alert"
      className={[
        'flex items-start gap-3 p-4 rounded-xl shadow-lg max-w-sm w-full',
        cfg.track,
      ].join(' ')}
    >
      <span className={['mt-0.5 shrink-0', cfg.iconColor].join(' ')}>{cfg.icon}</span>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        {description && <p className="mt-0.5 text-sm text-gray-500">{description}</p>}
        {action && (
          <button
            onClick={action.onClick}
            className="mt-2 text-sm font-medium text-[#ED600E] hover:text-orange-700"
          >
            {action.label}
          </button>
        )}
      </div>

      {onDismiss && (
        <button
          onClick={onDismiss}
          aria-label="Dismiss notification"
          className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <XIcon />
        </button>
      )}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
function WarnIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    </svg>
  );
}
function ErrorIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" /><path strokeLinecap="round" d="M15 9l-6 6M9 9l6 6" />
    </svg>
  );
}
function InfoIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" /><path strokeLinecap="round" d="M12 16v-4m0-4h.01" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
