'use client';

import { useEffect, useState } from 'react';
import DynamicIcon from './dynamic-icon/dynamic-icon';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkle: boolean;
}

interface MeteorConfig {
  tech: string;
  startX: number;
  startY: number;
  duration: number;
  delay: number;
  iconPx: number;
  tailLen: number;
}

// startX/startY are % positions along the viewport edges.
// Top-edge meteors: startY ≈ -3  (just above fold), startX spread across full width
// Right-edge meteors: startX ≈ 102 (just off right), startY spread down the side
const METEORS: MeteorConfig[] = [
  { tech: 'TypeScript',     startX:  8, startY: -3, duration: 16, delay:  0, iconPx: 28, tailLen: 100 },
  { tech: 'Docker',         startX: 24, startY: -3, duration: 20, delay:  5, iconPx: 24, tailLen:  80 },
  { tech: 'React',          startX: 40, startY: -3, duration: 13, delay: 10, iconPx: 32, tailLen: 120 },
  { tech: 'NestJS',         startX: 57, startY: -3, duration: 22, delay:  2, iconPx: 20, tailLen:  70 },
  { tech: 'Next.js',        startX: 73, startY: -3, duration: 15, delay: 14, iconPx: 24, tailLen:  85 },
  { tech: 'TailwindCSS',    startX: 89, startY: -3, duration: 18, delay:  7, iconPx: 28, tailLen:  95 },
  { tech: 'AWS',            startX:102, startY:  6, duration: 17, delay:  1, iconPx: 28, tailLen:  90 },
  { tech: 'Terraform',      startX:102, startY: 20, duration: 24, delay:  9, iconPx: 20, tailLen:  65 },
  { tech: 'PostgreSQL',     startX:102, startY: 35, duration: 19, delay:  4, iconPx: 24, tailLen:  75 },
  { tech: 'Ansible',        startX:102, startY: 50, duration: 14, delay: 17, iconPx: 20, tailLen:  60 },
  { tech: 'GitHub Actions', startX:102, startY: 65, duration: 16, delay: 12, iconPx: 24, tailLen:  80 },
  { tech: 'MongoDB',        startX: 33, startY: -3, duration: 21, delay: 19, iconPx: 20, tailLen:  70 },
];

export default function SpaceBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    // Generate stars only on client to avoid hydration mismatch
    const generated: Star[] = Array.from({ length: 160 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.8 + 0.3,
      opacity: Math.random() * 0.6 + 0.15,
      twinkle: Math.random() > 0.7,
    }));
    setStars(generated);
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* ── Stars ── */}
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animation: s.twinkle && !reduced
              ? `star-twinkle ${2 + (i % 4)}s ease-in-out infinite`
              : undefined,
          }}
        />
      ))}

      {/* ── Nebulae ── */}

      {/* Nebula 1 — blue/indigo cloud, top-right */}
      <div className="absolute" style={{
        width: '1000px', height: '700px',
        top: '-20%', right: '-12%',
        background: 'radial-gradient(ellipse at 45% 50%, rgba(79,70,229,0.13) 0%, rgba(56,189,248,0.08) 40%, transparent 70%)',
        filter: 'blur(70px)',
        transform: 'rotate(-18deg)',
      }} />

      {/* Nebula 2 — teal wisp, mid-left */}
      <div className="absolute" style={{
        width: '800px', height: '450px',
        top: '28%', left: '-18%',
        background: 'radial-gradient(ellipse at 55% 45%, rgba(20,184,166,0.09) 0%, rgba(56,189,248,0.05) 45%, transparent 72%)',
        filter: 'blur(60px)',
        transform: 'rotate(22deg)',
      }} />

      {/* Nebula 3 — violet/pink cloud, bottom-center */}
      <div className="absolute" style={{
        width: '900px', height: '550px',
        bottom: '-8%', left: '15%',
        background: 'radial-gradient(ellipse at 50% 42%, rgba(139,92,246,0.11) 0%, rgba(217,70,239,0.06) 42%, transparent 70%)',
        filter: 'blur(65px)',
        transform: 'rotate(-12deg)',
      }} />

      {/* Nebula 4 — rose filament, mid-right */}
      <div className="absolute" style={{
        width: '550px', height: '300px',
        top: '52%', right: '-4%',
        background: 'radial-gradient(ellipse at 40% 50%, rgba(244,63,94,0.06) 0%, rgba(168,85,247,0.05) 50%, transparent 72%)',
        filter: 'blur(50px)',
        transform: 'rotate(8deg)',
      }} />

      {/* Nebula 5 — warm amber accent, upper-center */}
      <div className="absolute" style={{
        width: '500px', height: '250px',
        top: '8%', left: '30%',
        background: 'radial-gradient(ellipse at 50% 50%, rgba(251,191,36,0.04) 0%, rgba(249,115,22,0.03) 50%, transparent 72%)',
        filter: 'blur(55px)',
        transform: 'rotate(-5deg)',
      }} />

      {/* ── Galaxy ── */}

      {/* Outer halo */}
      <div className="absolute" style={{
        width: '340px', height: '160px',
        top: '13%', right: '22%',
        background: 'radial-gradient(ellipse at 50% 50%, rgba(186,230,253,0.08) 0%, rgba(99,102,241,0.06) 45%, transparent 72%)',
        filter: 'blur(22px)',
        transform: 'rotate(-32deg)',
      }} />
      {/* Spiral arms */}
      <div className="absolute" style={{
        width: '220px', height: '80px',
        top: '15.5%', right: '24.5%',
        background: 'radial-gradient(ellipse at 50% 50%, rgba(224,242,254,0.14) 0%, rgba(147,197,253,0.10) 40%, transparent 68%)',
        filter: 'blur(12px)',
        transform: 'rotate(-32deg)',
      }} />
      {/* Bright core */}
      <div className="absolute" style={{
        width: '80px', height: '35px',
        top: '16.8%', right: '27.2%',
        background: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.35) 0%, rgba(186,230,253,0.24) 35%, transparent 65%)',
        filter: 'blur(6px)',
        transform: 'rotate(-32deg)',
      }} />
      {/* Core star */}
      <div className="absolute" style={{
        width: '5px', height: '5px',
        top: 'calc(17.5% + 14px)', right: 'calc(28.3% + 37px)',
        background: 'rgba(255,255,255,0.80)',
        borderRadius: '50%',
        boxShadow: '0 0 6px 3px rgba(186,230,253,0.4), 0 0 16px 6px rgba(99,102,241,0.2)',
      }} />

      {/* ── Meteors ── */}
      {!reduced && METEORS.map((m, i) => (
        // Outer div: handles position + animation only
        <div
          key={i}
          className="absolute"
          style={{
            left: `${m.startX}%`,
            top: `${m.startY}%`,
            animationDuration: `${m.duration}s`,
            animationDelay: `${m.delay}s`,
            animationName: 'meteor-drift',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationFillMode: 'backwards',
          }}
        >
          {/* Inner div: tilt to match diagonal direction of travel */}
          <div style={{ display: 'flex', alignItems: 'center', transform: 'rotate(-34deg)' }}>

            {/* ── Trail (3 layers, extends behind the icon) ── */}
            <div style={{ position: 'relative', width: `${m.tailLen}px`, height: `${m.iconPx}px`, flexShrink: 0, overflow: 'visible' }}>
              {/* Layer 1: wide soft glow */}
              <div style={{
                position: 'absolute', top: '50%', right: 0,
                width: '100%', height: '14px',
                transform: 'translateY(-50%)',
                background: 'linear-gradient(to right, transparent 0%, rgba(56,189,248,0.18) 55%, rgba(147,197,253,0.38) 100%)',
                filter: 'blur(7px)',
              }} />
              {/* Layer 2: medium glow */}
              <div style={{
                position: 'absolute', top: '50%', right: 0,
                width: '72%', height: '4px',
                transform: 'translateY(-50%)',
                background: 'linear-gradient(to right, transparent 0%, rgba(56,189,248,0.58) 45%, rgba(186,230,253,0.82) 100%)',
                filter: 'blur(2px)',
              }} />
              {/* Layer 3: sharp bright core */}
              <div style={{
                position: 'absolute', top: '50%', right: 0,
                width: '42%', height: '1.5px',
                transform: 'translateY(-50%)',
                background: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.72) 40%, rgba(255,255,255,0.98) 100%)',
              }} />
            </div>

            {/* ── Icon with glow halo ── */}
            <div style={{
              width: `${m.iconPx}px`,
              height: `${m.iconPx}px`,
              flexShrink: 0,
              opacity: 0.82,
              transform: 'rotate(34deg)',
              filter: 'drop-shadow(0 0 5px rgba(56,189,248,0.90)) drop-shadow(0 0 14px rgba(99,102,241,0.60))',
            }}>
              <DynamicIcon label={m.tech} className="w-full h-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
