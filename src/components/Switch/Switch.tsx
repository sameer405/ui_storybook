/**
 * Switch — RapidCanvas UX Design Library
 * Figma component: Switch (On/Off) — page: Switch
 * Variants: Switch (On/Off)
 * See also: Toggle component (Toggle A/B × sm/md/lg)
 */
import React from 'react';

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  labelPosition?: 'left' | 'right';
}

export function Switch({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  label,
  labelPosition = 'right',
}: SwitchProps) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const isControlled = checked !== undefined;
  const isOn = isControlled ? checked : internal;

  function handleClick() {
    if (disabled) return;
    if (!isControlled) setInternal(v => !v);
    onChange?.(!isOn);
  }

  const labelEl = label && (
    <span className={['text-sm font-medium', disabled ? 'text-gray-400' : 'text-gray-700'].join(' ')}>
      {label}
    </span>
  );

  return (
    <label
      className={[
        'inline-flex items-center gap-2 cursor-pointer',
        disabled ? 'cursor-not-allowed' : '',
      ].join(' ')}
    >
      {labelPosition === 'left' && labelEl}
      <button
        role="switch"
        aria-checked={isOn}
        aria-label={label}
        disabled={disabled}
        onClick={handleClick}
        className={[
          'relative inline-flex shrink-0 items-center rounded-full transition-colors',
          'h-6 w-11',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED600E] focus-visible:ring-offset-2',
          isOn ? 'bg-[#ED600E]' : 'bg-gray-200',
          disabled ? 'opacity-50' : '',
        ].join(' ')}
      >
        <span
          className={[
            'inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform',
            isOn ? 'translate-x-5' : 'translate-x-0.5',
          ].join(' ')}
        />
      </button>
      {labelPosition === 'right' && labelEl}
    </label>
  );
}
