'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import DynamicIcon from '../dynamic-icon/dynamic-icon';
import OpenLink from '../ui/icons/openLink';
import { ProjectMeta } from '@/app/constants/projects';

const AUTOPLAY_MS = 5000;

interface ProjectCardData {
  meta: ProjectMeta;
  title: string;
  descriptions: string[];
  seeProject: string;
}

interface ProjectCarouselProps {
  items: ProjectCardData[];
}

export default function ProjectCarousel({ items }: ProjectCarouselProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setActive(index);
    setProgress(0);
  }, []);

  const next = useCallback(() => {
    goTo((active + 1) % items.length);
  }, [active, items.length, goTo]);

  const prev = useCallback(() => {
    goTo(active === 0 ? items.length - 1 : active - 1);
  }, [active, items.length, goTo]);

  // Autoplay timer
  useEffect(() => {
    if (paused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
      return;
    }

    setProgress(0);

    const TICK = 50;
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + (TICK / AUTOPLAY_MS) * 100, 100));
    }, TICK);

    intervalRef.current = setInterval(() => {
      setActive((i) => (i + 1) % items.length);
      setProgress(0);
    }, AUTOPLAY_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [paused, active, items.length]);

  const project = items[active];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Card — fixed height, every slide identical */}
      <div className="relative rounded-2xl border border-white/[0.09] bg-[#0d0d0d] h-[660px] sm:h-[620px] flex flex-col overflow-hidden">

        {/* Autoplay progress bar */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-white/5 z-10 shrink-0">
          <div
            className="h-full bg-gradient-to-r from-sky-400 to-indigo-500"
            style={{ width: `${progress}%`, transition: paused ? 'none' : 'width 50ms linear' }}
          />
        </div>

        {/* Browser mockup — inset with padding so card bg shows around it */}
        {project.meta.image && (
          <div className="shrink-0 px-4 pt-5 sm:px-6 sm:pt-6">
            <div className="rounded-xl overflow-hidden border border-white/[0.10] shadow-[0_8px_32px_rgba(0,0,0,0.5)]">

              {/* Chrome bar */}
              <div className="flex items-center gap-3 px-3 h-8 bg-[#1c1c1c] border-b border-white/[0.07]">
                {/* Traffic lights */}
                <div className="flex gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                {/* URL bar */}
                <div className="flex-1 flex items-center gap-1.5 bg-[#0a0a0a] rounded px-2.5 h-[18px]">
                  <svg className="text-white/20 shrink-0" width="9" height="9" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 1.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zM7 5v3.5l2.5 1.5.75-1.25-2-1.25V5H7z"/>
                  </svg>
                  <span className="text-[10px] font-mono text-white/30 truncate">
                    {project.meta.href
                      ? project.meta.href.replace(/^https?:\/\//, '')
                      : project.title.toLowerCase().replace(/\s+/g, '-') + '.com'}
                  </span>
                </div>
                {/* Counter */}
                <span className="shrink-0 text-[10px] font-mono text-white/25">
                  {active + 1}/{items.length}
                </span>
              </div>

              {/* Screenshot */}
              <div className="relative h-[260px] sm:h-[290px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.meta.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
                {/* Bottom fade into card bg */}
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
              </div>
            </div>
          </div>
        )}

        {/* Content — flex-1 so it always fills the remaining space */}
        <div className="flex flex-col flex-1 min-h-0 px-5 pb-5 pt-4 sm:px-7 sm:pb-6 sm:pt-4">

          {/* Title + meta */}
          <header className="shrink-0 space-y-1 mb-3">
            <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
              {project.title}
            </h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              {project.meta.company && (
                <span className="text-sm text-stone-400">{project.meta.company}</span>
              )}
              {project.meta.href && (
                <a
                  href={project.meta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm text-sky-400 hover:text-sky-300 transition-colors duration-150"
                >
                  <span>{project.seeProject}</span>
                  <OpenLink size={12} />
                </a>
              )}
            </div>
          </header>

          {/* Divider */}
          <div className="h-px bg-white/[0.06] shrink-0 mb-3" />

          {/* Descriptions */}
          <div className="flex-1 min-h-0 overflow-hidden relative">
            <div className="space-y-2">
              {project.descriptions.map((paragraph, i) => (
                <p key={i} className="text-sm text-[#94a3b8] font-light leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#0d0d0d] to-transparent pointer-events-none" />
          </div>

          {/* Stack icons — pinned to bottom */}
          <div className="flex flex-wrap gap-2 pt-3 shrink-0">
            {project.meta.stack.map((tech, i) => (
              <DynamicIcon
                key={i + tech}
                label={tech}
                className="w-8 h-8 bg-white/[0.05] p-1.5 rounded-lg border border-white/[0.07] hover:bg-white/[0.10] transition-all duration-150"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-between mt-4 px-1">

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === active
                  ? 'w-7 bg-sky-400'
                  : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
          {paused && (
            <span className="ml-2 text-xs text-white/25 font-mono select-none">paused</span>
          )}
        </div>

        {/* Arrow buttons */}
        <div className="flex gap-2">
          <button
            onClick={prev}
            aria-label="Previous project"
            className="flex items-center justify-center w-8 h-8 rounded-full border border-white/[0.10] bg-white/[0.03] hover:bg-white/[0.10] text-white/50 hover:text-white transition-all duration-150 cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next project"
            className="flex items-center justify-center w-8 h-8 rounded-full border border-white/[0.10] bg-white/[0.03] hover:bg-white/[0.10] text-white/50 hover:text-white transition-all duration-150 cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
