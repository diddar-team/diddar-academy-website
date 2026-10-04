import type { CSSProperties } from 'react';
import { cn } from '@/lib/utils';

type MarkProps = { className?: string; style?: CSSProperties };

export function MarkUnderline({ className, style }: MarkProps) {
  return (
    <svg
      viewBox="0 0 300 16"
      preserveAspectRatio="none"
      aria-hidden
      style={style}
      className={cn(
        'pointer-events-none absolute inset-x-0 -bottom-[0.15em] h-[0.34em] w-full text-primary',
        className,
      )}
      fill="none"
    >
      <path
        d="M3 11c48-6 120-8 180-6 40 1 82 4 114 2"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M10 15c60-4 150-5 210-3 25 1 55 2 72 1"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function MarkStar({ className, style }: MarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden
      style={style}
      className={cn('h-5 w-5 text-primary', className)}
      fill="none"
    >
      <path
        d="M20 3v34M3 20h34M8 8l24 24M32 8L8 32"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
