/**
 * ProgressBar — RapidCanvas UX Design Library
 * Figma components:
 *   Progress Anim (2078:3773) — animated loading bar, Size=sm/md/lg
 *   Progress load static (2092:2781) — static with %, Size×load (0%/25%/50%/75%/100%/Error)
 * Page: Loader
 */
import React from 'react';

export type ProgressSize = 'sm' | 'md' | 'lg';
export type ProgressVariant = 'animated' | 'static';

export interface ProgressBarProps {
  variant?: ProgressVariant;
  size?: ProgressSize;
  value?: number;
  error?: boolean;
  name?: string;
  label?: string;
  showInfo?: boolean;
}

const trackHeight: Record<ProgressSize, string> = {
  sm: 'h-1',
  md: 'h-1.5',
  lg: 'h-2',
};

const labelSize: Record<ProgressSize, string> = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-sm',
};

export function ProgressBar({
  variant = 'static',
  size = 'md',
  value = 0,
  error = false,
  name,
  label,
  showInfo = true,
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));
  const isComplete = clamped === 100;

  return (
    <div className="w-full flex flex-col gap-1.5">
      {(name || label || showInfo) && (
        <div className="flex items-center justify-between">
          {name && (
            <span className={['font-medium text-gray-800', labelSize[size]].join(' ')}>{name}</span>
          )}
          {label && (
            <span className={['text-gray-500', labelSize[size]].join(' ')}>{label}</span>
          )}
          {showInfo && variant === 'static' && (
            <span className={[
              'font-medium ml-auto',
              labelSize[size],
              error ? 'text-red-600' : isComplete ? 'text-green-600' : 'text-gray-600',
            ].join(' ')}>
              {error ? 'Error' : `${clamped}%`}
            </span>
          )}
        </div>
      )}
      <div
        className={['w-full rounded-full overflow-hidden bg-gray-200', trackHeight[size]].join(' ')}
        role="progressbar"
        aria-valuenow={error ? undefined : clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {variant === 'animated' ? (
          <div
            className={['h-full rounded-full bg-[#ED600E] animate-pulse origin-left', trackHeight[size]].join(' ')}
            style={{ width: '60%', animation: 'progressAnim 1.5s ease-in-out infinite' }}
          />
        ) : error ? (
          <div className={['h-full rounded-full bg-red-500 w-full', trackHeight[size]].join(' ')} />
        ) : (
          <div
            className={[
              'h-full rounded-full transition-all duration-300',
              trackHeight[size],
              isComplete ? 'bg-green-500' : 'bg-[#ED600E]',
            ].join(' ')}
            style={{ width: `${clamped}%` }}
          />
        )}
      </div>
    </div>
  );
}
