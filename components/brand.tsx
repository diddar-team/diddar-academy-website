import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { APP_NAME } from '@/lib/site';

type Tone = 'auto' | 'default' | 'light';

const MARK_SRC = {
  default: '/diddar-mark.png',
  light: '/diddar-mark-light.png',
};

const MARK_RATIO = '188 / 256';

export function BrandMark({
  className,
  tone = 'auto',
  priority = false,
}: {
  className?: string;
  tone?: Tone;
  priority?: boolean;
}) {
  if (tone !== 'auto') {
    return (
      <Image
        src={MARK_SRC[tone]}
        alt={APP_NAME}
        width={188}
        height={256}
        priority={priority}
        className={cn('h-9 w-auto', className)}
      />
    );
  }

  return (
    <span
      className={cn('relative inline-block h-9 shrink-0', className)}
      style={{ aspectRatio: MARK_RATIO }}
    >
      <Image
        src={MARK_SRC.default}
        alt={APP_NAME}
        fill
        sizes="32px"
        priority={priority}
        className="object-contain dark:hidden"
      />
      <Image
        src={MARK_SRC.light}
        alt=""
        aria-hidden
        fill
        sizes="32px"
        priority={priority}
        className="hidden object-contain dark:block"
      />
    </span>
  );
}

export function BrandLockup({
  className,
  href = '/',
  tone = 'auto',
  showName = true,
  showMark = true,
  priority = false,
}: {
  className?: string;
  href?: string;
  tone?: Tone;
  showName?: boolean;
  showMark?: boolean;
  priority?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label={`${APP_NAME} home`}
      className={cn(
        'inline-flex items-center gap-1.5 font-display text-[1.15rem] font-semibold leading-none tracking-[-0.01em]',
        tone === 'light' ? 'text-white' : 'text-text',
        className,
      )}
    >
      {showMark && <BrandMark tone={tone} priority={priority} />}
      {showName && (
        <span className="relative">
          {APP_NAME.toLowerCase()}
          <svg
            viewBox="0 0 120 12"
            preserveAspectRatio="none"
            aria-hidden
            className="absolute -bottom-1.5 left-0 h-2 w-full text-primary"
            fill="none"
          >
            <path
              d="M2 7c22-4 74-6 116-3"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </span>
      )}
    </Link>
  );
}
