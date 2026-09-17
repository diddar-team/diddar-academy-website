'use client';

import { useEffect, useRef, useState } from 'react';
import { MarkUnderline } from '@/components/marks';
import { APP_NAME } from '@/lib/site';

const SLIDES = [
  {
    lead: 'Learn the skill.',
    highlight: 'change the story.',
    body: `${APP_NAME} is a practical, mentor-led tech school. Tell us what you want to learn and your level — the list decides which cohorts open first.`,
  },
  {
    lead: 'Learn the stack.',
    highlight: 'build with AI.',
    body: 'Every track pairs the fundamentals with the AI tools people actually use on the job — Copilot, Cursor, Claude and more, taught in every track we run.',
  },
  {
    lead: 'AI gets you moving.',
    highlight: 'mentors step in.',
    body: 'Real code review from people who do this for a living — the human side no AI verdict can replace.',
  },
];

const INTERVAL_MS = 5200;

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const id = setInterval(() => {
      if (!paused.current) {
        setActive((i) => (i + 1) % SLIDES.length);
      }
    }, INTERVAL_MS);

    return () => clearInterval(id);
  }, []);

  return (
    <div
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
      }}
      onFocus={() => {
        paused.current = true;
      }}
      onBlur={() => {
        paused.current = false;
      }}
    >
      <div className="grid">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.highlight}
            className="col-start-1 row-start-1 transition-opacity duration-500"
            style={{
              opacity: i === active ? 1 : 0,
              pointerEvents: i === active ? 'auto' : 'none',
            }}
            aria-hidden={i !== active}
          >
            <h1 className="h1-b max-w-3xl" style={{ color: 'var(--text)' }}>
              {slide.lead}
              <br />
              Then{' '}
              <span className="relative inline-block whitespace-nowrap">
                {slide.highlight}
                <MarkUnderline
                  style={{ color: 'var(--primary)' } as React.CSSProperties}
                />
              </span>
            </h1>

            <p
              className="mt-6 max-w-xl font-sans text-[1.05rem] leading-relaxed"
              style={{ color: 'var(--text-light)' }}
            >
              {slide.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-1.5" role="tablist" aria-label="Hero messages">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.highlight}
            type="button"
            role="tab"
            onClick={() => setActive(i)}
            aria-label={`Show: ${slide.lead} Then ${slide.highlight}`}
            aria-selected={i === active}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === active ? '1.5rem' : '0.4rem',
              background: i === active ? 'var(--primary)' : 'var(--stroke)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
