/**
 * Slider — RapidCanvas UX Design Library
 * Figma component key: 1383:7416  (page: Slider)
 * Variants: size (sm/md/lg) × orientation (horizontal/vertical) × state (default/disable) × range
 *
 * Design: rounded-full track, orange gradient fill, white drop-shadow thumb, no thumb border
 */
import React from 'react';

export type SliderSize = 'sm' | 'md' | 'lg';
export type SliderOrientation = 'horizontal' | 'vertical';

export interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
  size?: SliderSize;
  orientation?: SliderOrientation;
  showValue?: boolean;
  label?: string;
}

const trackThickness: Record<SliderSize, string> = {
  sm: 'h-1.5',
  md: 'h-2',
  lg: 'h-3',
};

const thumbSize: Record<SliderSize, string> = {
  sm: '[&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4',
  md: '[&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5',
  lg: '[&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6',
};

export function Slider({
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue = 0,
  onChange,
  disabled = false,
  size = 'md',
  orientation = 'horizontal',
  showValue = false,
  label,
}: SliderProps) {
  const [internal, setInternal] = React.useState(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const v = Number(e.target.value);
    if (!isControlled) setInternal(v);
    onChange?.(v);
  }

  const pct = ((current - min) / (max - min)) * 100;
  const isVertical = orientation === 'vertical';

  return (
    <div className={['flex gap-2', isVertical ? 'flex-col-reverse items-center' : 'flex-col'].join(' ')}>
      {(label || showValue) && (
        <div className="flex justify-between items-center">
          {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
          {showValue && <span className="text-sm text-gray-500 tabular-nums">{current}</span>}
        </div>
      )}

      <div className={['relative flex items-center', isVertical ? 'flex-col h-40 w-8' : 'w-full h-8'].join(' ')}>
        {/* Track background */}
        <div className={[
          'absolute rounded-full',
          isVertical ? `w-${size === 'sm' ? '1.5' : size === 'md' ? '2' : '3'} h-full` : `w-full ${trackThickness[size]}`,
          disabled ? 'bg-gray-200' : 'bg-gray-200',
        ].join(' ')} />

        {/* Orange fill */}
        {!disabled && (
          <div
            className={[
              'absolute rounded-full',
              isVertical
                ? `w-${size === 'sm' ? '1.5' : size === 'md' ? '2' : '3'} bottom-0`
                : `h-full left-0 ${trackThickness[size]}`,
            ].join(' ')}
            style={{
              background: `linear-gradient(90deg, #F98C4E, #ED600E)`,
              ...(isVertical
                ? { height: `${pct}%` }
                : { width: `${pct}%` }),
            }}
          />
        )}

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={current}
          disabled={disabled}
          onChange={handleChange}
          aria-label={label}
          aria-orientation={isVertical ? 'vertical' : 'horizontal'}
          className={[
            'relative appearance-none bg-transparent cursor-pointer focus:outline-none',
            isVertical ? 'h-full w-8 rotate-[-90deg]' : 'w-full',
            disabled ? 'opacity-50 cursor-not-allowed' : '',
            // Thumb styles
            '[&::-webkit-slider-thumb]:appearance-none',
            thumbSize[size],
            '[&::-webkit-slider-thumb]:rounded-full',
            '[&::-webkit-slider-thumb]:bg-white',
            disabled
              ? '[&::-webkit-slider-thumb]:bg-gray-300 [&::-webkit-slider-thumb]:shadow-none'
              : '[&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(0,0,0,0.18)]',
            '[&::-webkit-slider-thumb]:transition-transform',
            '[&::-webkit-slider-thumb]:hover:scale-110',
            // Firefox
            '[&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white',
            '[&::-moz-range-thumb]:border-0',
            disabled ? '[&::-moz-range-thumb]:bg-gray-300' : '[&::-moz-range-thumb]:shadow-[0_2px_8px_rgba(0,0,0,0.18)]',
          ].join(' ')}
        />
      </div>
    </div>
  );
}
