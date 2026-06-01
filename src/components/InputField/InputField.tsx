/**
 * Input field — RapidCanvas UX Design Library
 * Figma component key: 91bcf366a38581add6f7e35c73cd61d4064e8c9f
 * Page: Input field
 * Variants: Size (sm/md/lg) × State (Default/Hover/Focus/Active/Typing/Filled/error/disabled/Filled>hover)
 *
 * Design:
 *   Default/Filled: bg-[#F5F5F5] no border, gray placeholder/text
 *   Hover/Focus:    bg-white, 1.5px orange border (#ED600E)
 *   Error:          bg-white, 1.5px orange-red border (#ED600E), red helper text
 *   Disabled:       bg-[#F5F5F5] reduced opacity, cursor not-allowed
 */
import React from 'react';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  required?: boolean;
  hint?: string;
  errorMessage?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  size?: InputSize;
}

const heightClass: Record<InputSize, string> = {
  sm: 'h-8 text-sm',
  md: 'h-10 text-sm',
  lg: 'h-12 text-base',
};

const iconSize: Record<InputSize, string> = {
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
};

export function InputField({
  label,
  required,
  hint,
  errorMessage,
  leadingIcon,
  trailingIcon,
  size = 'md',
  className = '',
  id,
  disabled,
  ...rest
}: InputFieldProps) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id ?? React.useId();
  const hasError = !!errorMessage;
  const showOrangeBorder = focused || hasError;

  return (
    <div className={['flex flex-col gap-1', className].join(' ')}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700 leading-tight">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}

      <div
        className={[
          'relative flex items-center rounded-lg overflow-hidden transition-all',
          heightClass[size],
          showOrangeBorder
            ? 'ring-[1.5px] ring-[#ED600E] bg-white'
            : 'bg-[#F5F5F5]',
          disabled ? 'opacity-50 cursor-not-allowed' : '',
        ].join(' ')}
      >
        {leadingIcon && (
          <span className={[
            'absolute left-3 pointer-events-none transition-colors',
            iconSize[size],
            showOrangeBorder ? 'text-[#ED600E]' : 'text-gray-400',
          ].join(' ')}>
            {leadingIcon}
          </span>
        )}

        <input
          {...rest}
          id={inputId}
          disabled={disabled}
          onFocus={e => { setFocused(true); rest.onFocus?.(e); }}
          onBlur={e => { setFocused(false); rest.onBlur?.(e); }}
          className={[
            'w-full h-full bg-transparent px-3 text-gray-900 placeholder:text-gray-400',
            'focus:outline-none',
            disabled ? 'cursor-not-allowed' : '',
            leadingIcon ? 'pl-9' : '',
            trailingIcon ? 'pr-9' : '',
          ].join(' ')}
        />

        {trailingIcon && (
          <span className={[
            'absolute right-3 pointer-events-none',
            iconSize[size],
            showOrangeBorder ? 'text-[#ED600E]' : 'text-gray-400',
          ].join(' ')}>
            {trailingIcon}
          </span>
        )}
      </div>

      {(hint || errorMessage) && (
        <p className={['text-xs leading-tight', hasError ? 'text-[#CE2C31]' : 'text-gray-400'].join(' ')}>
          {errorMessage ?? hint}
        </p>
      )}
    </div>
  );
}
