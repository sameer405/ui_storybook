/**
 * Pagination — RapidCanvas UX Design Library
 * Figma components: .page no (state×type) + Pagination (page: Pagination)
 * .page no: state=Default/Hover/Disabled/Select × type=number/icon
 */
import React from 'react';

export interface PaginationProps {
  total: number;
  page: number;
  pageSize?: number;
  onChange?: (page: number) => void;
  showEdges?: boolean;
}

function ChevronLeft() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function PageButton({
  label, selected, disabled, onClick, isIcon = false,
}: {
  label: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  isIcon?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={[
        'flex items-center justify-center rounded-lg h-8 transition-colors font-medium text-sm',
        isIcon ? 'w-8' : 'min-w-[32px] px-2',
        selected
          ? 'bg-[#ED600E] text-white shadow-sm'
          : disabled
            ? 'text-gray-300 cursor-not-allowed'
            : 'text-gray-700 hover:bg-gray-100',
      ].join(' ')}
    >
      {label}
    </button>
  );
}

function getPages(current: number, total: number): (number | '...')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, '...', total];
  if (current >= total - 3) return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
  return [1, '...', current - 1, current, current + 1, '...', total];
}

export function Pagination({ total, page, pageSize = 10, onChange, showEdges = true }: PaginationProps) {
  const totalPages = Math.ceil(total / pageSize);
  const pages = getPages(page, totalPages);
  const start = (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);

  return (
    <div className="flex items-center justify-between w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl">
      <span className="text-xs text-gray-500">
        Showing {start}–{end} results out of {total}
      </span>
      <div className="flex items-center gap-1">
        <PageButton
          label={<ChevronLeft />}
          disabled={page <= 1}
          onClick={() => onChange?.(page - 1)}
          isIcon
        />
        {pages.map((p, i) =>
          p === '...' ? (
            <span key={`ellipsis-${i}`} className="px-1 text-gray-400 text-sm select-none">…</span>
          ) : (
            <PageButton
              key={p}
              label={p}
              selected={p === page}
              onClick={() => onChange?.(p as number)}
            />
          )
        )}
        <PageButton
          label={<ChevronRight />}
          disabled={page >= totalPages}
          onClick={() => onChange?.(page + 1)}
          isIcon
        />
      </div>
    </div>
  );
}
