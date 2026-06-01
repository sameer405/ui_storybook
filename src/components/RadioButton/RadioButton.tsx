/**
 * Radiobutton — RapidCanvas UX Design Library
 * Figma component key: 822:1298 (page: Radiobutton)
 * Variants: Size (xl/lg/md/sm) × Select (off/on)
 */
import React from 'react';

export type RadioSize = 'sm' | 'md' | 'lg' | 'xl';

export interface RadioButtonProps {
  size?: RadioSize;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  name?: string;
  value?: string;
}

const outerSize: Record<RadioSize, string> = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-5 w-5',
  xl: 'h-6 w-6',
};

const innerSize: Record<RadioSize, string> = {
  sm: 'h-1.5 w-1.5',
  md: 'h-2 w-2',
  lg: 'h-2 w-2',
  xl: 'h-2.5 w-2.5',
};

const labelSize: Record<RadioSize, string> = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-sm',
  xl: 'text-base',
};

export function RadioButton({
  size = 'md',
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  label,
  name,
  value,
}: RadioButtonProps) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const isControlled = checked !== undefined;
  const isSelected = isControlled ? checked : internal;

  function handleChange() {
    if (disabled) return;
    if (!isControlled) setInternal(true);
    onChange?.(true);
  }

  return (
    <label
      className={[
        'inline-flex items-center gap-2 cursor-pointer select-none',
        disabled ? 'cursor-not-allowed opacity-50' : '',
      ].join(' ')}
    >
      <div className="relative flex shrink-0">
        <input
          type="radio"
          name={name}
          value={value}
          checked={isSelected}
          disabled={disabled}
          onChange={handleChange}
          className="sr-only"
        />
        <div
          className={[
            'rounded-full flex items-center justify-center border-2 transition-colors',
            outerSize[size],
            isSelected
              ? 'border-[#ED600E] bg-white'
              : 'border-gray-300 bg-white hover:border-[#ED600E]',
          ].join(' ')}
        >
          {isSelected && (
            <span className={['rounded-full bg-[#ED600E]', innerSize[size]].join(' ')} />
          )}
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
