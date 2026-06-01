/**
 * Checkbox — RapidCanvas UX Design Library
 * Figma component key: 822:1255
 * Page: Checkbox
 * Variants: Size (xl/lg/md/sm) × State (uncheck/check/semi-check)
 */
import React from 'react';

export type CheckboxSize = 'sm' | 'md' | 'lg' | 'xl';
export type CheckboxState = 'uncheck' | 'check' | 'semi-check';

export interface CheckboxProps {
  size?: CheckboxSize;
  checked?: boolean;
  indeterminate?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
}

const boxSize: Record<CheckboxSize, string> = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-5 w-5',
  xl: 'h-6 w-6',
};

const labelSize: Record<CheckboxSize, string> = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-sm',
  xl: 'text-base',
};

export function Checkbox({
  size = 'md',
  checked,
  indeterminate = false,
  defaultChecked = false,
  onChange,
  disabled = false,
  label,
}: CheckboxProps) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internal;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange?.(e.target.checked);
  }

  const ref = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <label
      className={[
        'inline-flex items-center gap-2 cursor-pointer select-none',
        disabled ? 'cursor-not-allowed opacity-50' : '',
      ].join(' ')}
    >
      <div className="relative flex shrink-0">
        <input
          ref={ref}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          className="sr-only peer"
        />
        <div
          className={[
            'rounded flex items-center justify-center border-2 transition-colors',
            boxSize[size],
            isChecked || indeterminate
              ? 'bg-[#ED600E] border-[#ED600E]'
              : 'bg-white border-gray-300 hover:border-[#ED600E]',
          ].join(' ')}
        >
          {indeterminate ? (
            <svg viewBox="0 0 10 2" className="w-2.5 h-0.5 fill-white">
              <rect width="10" height="2" rx="1" />
            </svg>
          ) : isChecked ? (
            <svg viewBox="0 0 10 8" className="w-2.5 h-2" fill="none" stroke="white" strokeWidth={2}>
              <path d="M1 4l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : null}
        </div>
      </div>
      {label && (
        <span className={[labelSize[size], disabled ? 'text-gray-400' : 'text-gray-700'].join(' ')}>
          {label}
        </span>
      )}
    </label>
  );
}
