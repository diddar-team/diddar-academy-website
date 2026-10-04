import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { APP_NAME } from '@/lib/site';

const LOCKUP_SRC = {
  default: '/diddar-lockup.png',
  light: '/diddar-lockup-light.png',
};

export function BrandLockup({
  className,
  href = '/',
  tone = 'default',
  priority = false,
}: {
  className?: string;
  href?: string;
  tone?: 'default' | 'light';
  priority?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label={`${APP_NAME} home`}
      className={cn('inline-flex items-center', className)}
    >
      <Image
        src={LOCKUP_SRC[tone]}
        alt={`${APP_NAME} Academy`}
        width={331}
        height={126}
        priority={priority}
        className="h-10 w-auto"
      />
    </Link>
  );
}
