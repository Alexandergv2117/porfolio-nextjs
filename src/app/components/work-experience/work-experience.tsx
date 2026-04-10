'use client';

import { useRef, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { WORKS } from '@/app/constants/works';
import DynamicIcon from '../dynamic-icon/dynamic-icon';

// Interactive skill badge — CSS tooltip on hover, glow + scale on hover
function SkillBadge({ tech }: { tech: string }) {
  return (
    <div className="relative group">
      <div className="w-9 h-9 p-1.5 rounded-lg bg-white/[0.05] border border-white/[0.07] group-hover:bg-sky-400/[0.10] group-hover:border-sky-400/40 group-hover:scale-110 transition-all duration-150 cursor-default">
        <DynamicIcon label={tech} className="w-full h-full" />
      </div>
      {/* Tooltip */}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-0.5 rounded-md bg-[#161616] border border-white/[0.12] text-[11px] font-mono text-white/75 whitespace-nowrap pointer-events-none opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150 z-20">
        {tech}
      </span>
    </div>
  );
}

interface ItemProps {
  title: string;
  company: string;
  date: string;
  descriptions: string[];
  stack: string[];
  isLast: boolean;
}

function TimelineItem({ title, company, date, descriptions, stack, isLast }: ItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Skip animation if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative pb-10 last:pb-0">

      {/* Dot — scales in when item enters viewport */}
      <div
        className="absolute z-10 transition-all duration-500"
        style={{
          left: '11px',
          top: '1.375rem',
          transform: `translate(-50%, -50%) scale(${visible ? 1 : 0})`,
          opacity: visible ? 1 : 0,
        }}
      >
        <div className="absolute inset-0 rounded-full bg-sky-400/20" style={{ transform: 'scale(3.2)' }} />
        <div className="relative w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.45)]" />
      </div>

      {/* Fill line — draws downward to next item after dot appears */}
      {!isLast && (
        <div
          className="absolute w-px overflow-hidden"
          style={{ left: '11px', top: 'calc(1.375rem + 9px)', bottom: 0, transform: 'translateX(-50%)' }}
        >
          <div
            className="w-full h-full bg-gradient-to-b from-sky-400/60 to-sky-400/5 origin-top"
            style={{
              transform: visible ? 'scaleY(1)' : 'scaleY(0)',
              transition: visible ? 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.35s' : 'none',
            }}
          />
        </div>
      )}

      {/* Card — fades + slides up as item enters */}
      <div
        className="ml-8 sm:ml-9"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(14px)',
          transition: visible
            ? 'opacity 0.5s ease-out 0.1s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
            : 'none',
        }}
      >
        {/* Date chip */}
        <span className="inline-block text-xs font-mono text-sky-400/70 tracking-wide mb-2">
          {date}
        </span>

        <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 sm:p-6 hover:border-white/[0.13] hover:bg-white/[0.05] transition-all duration-300">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">{title}</h3>
          <p className="text-sm text-stone-400 mb-5">{company}</p>

          <ul className="space-y-2.5 mb-6">
            {descriptions.map((desc, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-[#94a3b8] leading-relaxed">
                <span className="mt-[0.45rem] shrink-0 w-1 h-1 rounded-full bg-sky-400/50" />
                {desc}
              </li>
            ))}
          </ul>

          {/* Interactive stack badges with name tooltip */}
          <div className="flex flex-wrap gap-2">
            {stack.map((tech, i) => (
              <SkillBadge key={i + tech} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WorkExperience() {
  const t = useTranslations('works');

  return (
    <section id="experiencie" className="mt-10">
      <h2 className="text-4xl font-semibold text-sky-300 mb-10">
        {t('heading')}
      </h2>

      <div className="relative">
        {/* Background track — always visible, full height */}
        <div className="absolute top-0 bottom-0 w-px bg-white/[0.08]" style={{ left: '11px' }} />

        {WORKS.map((work, index) => (
          <TimelineItem
            key={index}
            title={t(`work${index}.title`)}
            date={t(`work${index}.date`)}
            company={work.company}
            descriptions={t.raw(`work${index}.descriptions`) as string[]}
            stack={work.stack}
            isLast={index === WORKS.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
