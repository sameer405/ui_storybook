/**
 * Animated Calendar — RapidCanvas UX Design Library
 * Figma component key: 1390:7904  (page: Calender)
 * Variants: Select (Date/Month/Year) — animated view switching
 *
 * Design: white rounded-2xl card, orange selected circle, S M T W T F S headers,
 * out-of-month dates in lighter gray, header labels clickable to switch views
 */
import React from 'react';

export interface AnimatedCalendarProps {
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
}

type CalView = 'date' | 'month' | 'year';

const DAY_LABELS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const MONTH_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const MONTH_FULL  = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();
}

function Chevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d={dir === 'left' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
    </svg>
  );
}

export function AnimatedCalendar({
  value,
  defaultValue,
  onChange,
  minDate,
  maxDate,
  disabledDates = [],
}: AnimatedCalendarProps) {
  const today = new Date();
  const [view, setView] = React.useState<CalView>('date');
  const [cursor, setCursor] = React.useState(value ?? defaultValue ?? today);
  const [selected, setSelected] = React.useState<Date | undefined>(value ?? defaultValue);
  const isControlled = value !== undefined;

  React.useEffect(() => {
    if (isControlled && value) {
      setSelected(value);
      setCursor(value);
    }
  }, [value, isControlled]);

  const year  = cursor.getFullYear();
  const month = cursor.getMonth();

  function isDisabled(date: Date) {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return disabledDates.some(d => isSameDay(d, date));
  }

  function selectDate(date: Date) {
    if (isDisabled(date)) return;
    if (!isControlled) setSelected(date);
    onChange?.(date);
    setView('date');
  }

  function nav(delta: number) {
    if (view === 'date')  setCursor(new Date(year, month + delta, 1));
    if (view === 'month') setCursor(new Date(year + delta, month, 1));
    if (view === 'year')  setCursor(new Date(year + delta * 12, month, 1));
  }

  // ── Date view ──────────────────────────────────────────────
  function renderDateView() {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevDays = new Date(year, month, 0).getDate();

    const cells: { date: Date; outside: boolean }[] = [];
    for (let i = firstDay - 1; i >= 0; i--) {
      cells.push({ date: new Date(year, month - 1, prevDays - i), outside: true });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push({ date: new Date(year, month, d), outside: false });
    }
    const remaining = 42 - cells.length;
    for (let d = 1; d <= remaining; d++) {
      cells.push({ date: new Date(year, month + 1, d), outside: true });
    }

    return (
      <div className="flex flex-col gap-1">
        <div className="grid grid-cols-7">
          {DAY_LABELS.map((d, i) => (
            <div key={i} className="flex items-center justify-center h-9 text-xs font-medium text-gray-400">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-y-0.5">
          {cells.map(({ date, outside }, i) => {
            const isSelected = selected && isSameDay(date, selected);
            const isToday = isSameDay(date, today);
            const disabled = isDisabled(date) || outside;

            return (
              <button
                key={i}
                disabled={disabled && !outside}
                onClick={() => !outside && selectDate(date)}
                className={[
                  'flex items-center justify-center h-9 w-9 mx-auto rounded-full text-sm transition-colors',
                  'focus:outline-none',
                  isSelected
                    ? 'bg-[#ED600E] text-white font-semibold'
                    : isToday && !outside
                    ? 'ring-1 ring-[#ED600E] text-[#ED600E] font-medium'
                    : outside
                    ? 'text-gray-300 cursor-default'
                    : disabled
                    ? 'text-gray-200 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-[#FFF1E9] hover:text-[#ED600E]',
                ].join(' ')}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // ── Month view ─────────────────────────────────────────────
  function renderMonthView() {
    return (
      <div className="grid grid-cols-4 gap-2 py-2">
        {MONTH_SHORT.map((m, i) => {
          const isCurrent = i === month && year === (selected?.getFullYear() ?? today.getFullYear());
          const isThisMonth = i === today.getMonth() && year === today.getFullYear();
          return (
            <button
              key={m}
              onClick={() => { setCursor(new Date(year, i, 1)); setView('date'); }}
              className={[
                'flex items-center justify-center h-9 rounded-lg text-sm font-medium transition-colors',
                'focus:outline-none',
                isCurrent
                  ? 'bg-[#ED600E] text-white'
                  : isThisMonth
                  ? 'ring-1 ring-[#ED600E] text-[#ED600E]'
                  : 'text-gray-700 hover:bg-[#FFF1E9] hover:text-[#ED600E]',
              ].join(' ')}
            >
              {m}
            </button>
          );
        })}
      </div>
    );
  }

  // ── Year view ──────────────────────────────────────────────
  function renderYearView() {
    const startYear = Math.floor(year / 12) * 12;
    const years = Array.from({ length: 12 }, (_, i) => startYear + i);
    return (
      <div className="grid grid-cols-4 gap-2 py-2">
        {years.map(y => {
          const isCurrent = y === (selected?.getFullYear() ?? -1);
          const isThisYear = y === today.getFullYear();
          return (
            <button
              key={y}
              onClick={() => { setCursor(new Date(y, month, 1)); setView('month'); }}
              className={[
                'flex items-center justify-center h-9 rounded-lg text-sm font-medium transition-colors',
                'focus:outline-none',
                isCurrent
                  ? 'bg-[#ED600E] text-white'
                  : isThisYear
                  ? 'ring-1 ring-[#ED600E] text-[#ED600E]'
                  : 'text-gray-700 hover:bg-[#FFF1E9] hover:text-[#ED600E]',
              ].join(' ')}
            >
              {y}
            </button>
          );
        })}
      </div>
    );
  }

  const headerLabel =
    view === 'date'  ? `${MONTH_FULL[month]}, ${year}` :
    view === 'month' ? `${year}` :
    `${Math.floor(year / 12) * 12} – ${Math.floor(year / 12) * 12 + 11}`;

  return (
    <div className="inline-flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden w-[284px] p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={() => nav(-1)}
          className="flex items-center justify-center h-8 w-8 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors focus:outline-none"
          aria-label="Previous"
        >
          <Chevron dir="left" />
        </button>

        <button
          onClick={() => setView(v => v === 'date' ? 'month' : v === 'month' ? 'year' : 'date')}
          className="text-sm font-semibold text-gray-900 hover:text-[#ED600E] transition-colors focus:outline-none px-2 py-1 rounded-lg hover:bg-[#FFF1E9]"
        >
          {headerLabel}
        </button>

        <button
          onClick={() => nav(1)}
          className="flex items-center justify-center h-8 w-8 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors focus:outline-none"
          aria-label="Next"
        >
          <Chevron dir="right" />
        </button>
      </div>

      {view === 'date'  && renderDateView()}
      {view === 'month' && renderMonthView()}
      {view === 'year'  && renderYearView()}
    </div>
  );
}
