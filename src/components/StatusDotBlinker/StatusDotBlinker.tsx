/**
 * StatusDot Blinker — RapidCanvas UX Design Library
 * Figma component key: 4bea9f9373d1aee06f24d7a21e217a3b80e87749
 * filePath: design_systems/RapidCanvas - UX Design Library [WIP]/components/StatusDot Blinker
 */
import React from 'react';

export type StatusDotStatus = 'online' | 'offline' | 'busy' | 'away' | 'idle';
export type StatusDotSize = 'sm' | 'md' | 'lg';

export interface StatusDotBlinkerProps {
  status?: StatusDotStatus;
  size?: StatusDotSize;
  animate?: boolean;
  label?: string;
}

const statusColor: Record<StatusDotStatus, string> = {
  online:  'bg-green-500',
  offline: 'bg-gray-400',
  busy:    'bg-red-500',
  away:    'bg-amber-400',
  idle:    'bg-yellow-300',
};

const pingColor: Record<StatusDotStatus, string> = {
  online:  'bg-green-400',
  offline: 'bg-gray-300',
  busy:    'bg-red-400',
  away:    'bg-amber-300',
  idle:    'bg-yellow-200',
};

const sizeClasses: Record<StatusDotSize, string> = {
  sm: 'h-2 w-2',
  md: 'h-2.5 w-2.5',
  lg: 'h-3 w-3',
};

export function StatusDotBlinker({
  status = 'online',
  size = 'md',
  animate = true,
  label,
}: StatusDotBlinkerProps) {
  return (
    <span
      className="relative inline-flex items-center gap-2"
      role="status"
      aria-label={label ?? status}
    >
      <span className={['relative inline-flex', sizeClasses[size]].join(' ')}>
        {animate && status !== 'offline' && (
          <span
            className={[
              'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
              pingColor[status],
            ].join(' ')}
          />
        )}
        <span
          className={[
            'relative inline-flex rounded-full',
            sizeClasses[size],
            statusColor[status],
          ].join(' ')}
        />
      </span>
      {label && <span className="text-sm text-gray-600">{label}</span>}
    </span>
  );
}
