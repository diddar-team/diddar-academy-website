import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button';
import { HeroCarousel } from '@/components/home/hero-carousel';

export function Hero() {
  return (
    <section className="hero-bg relative overflow-hidden">
      <Container className="relative z-10 flex flex-col items-start pb-16 pt-16 lg:pb-20 lg:pt-24">
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 backdrop-blur-sm"
          style={{
            border: '1px solid var(--stroke)',
            background: 'var(--brand-soft)',
          }}
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#22a06b]" />
          <span
            className="font-sans text-[0.78rem] font-medium tracking-wide"
            style={{ color: 'var(--primary)' }}
          >
            The next cohort is forming now
          </span>
        </div>

        <HeroCarousel />

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <ButtonLink href="/waitlist" size="lg" className="btn-glow">
            Add my name to the list
            <span aria-hidden>→</span>
          </ButtonLink>
          <a
            href="#how"
            className="font-sans text-[0.92rem] font-semibold underline decoration-2 underline-offset-[6px] transition-colors"
            style={{
              color: 'var(--text-light)',
              textDecorationColor: 'var(--stroke)',
            }}
          >
            See how it works
          </a>
        </div>
      </Container>
    </section>
  );
}
