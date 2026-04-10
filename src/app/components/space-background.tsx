'use client';

import { useEffect, useState } from 'react';
import DynamicIcon from './dynamic-icon/dynamic-icon';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
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
    const generated: Star[] = Array.from({ length: 120 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    }));
    setStars(generated);
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Stars */}
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
          }}
        />
      ))}

      {/* Nebula blobs */}
      <div
        className="absolute rounded-full"
        style={{
          width: '600px',
          height: '600px',
          top: '-10%',
          right: '-8%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: '500px',
          height: '500px',
          top: '40%',
          left: '-10%',
          background: 'radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: '400px',
          height: '400px',
          bottom: '5%',
          right: '20%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Meteors */}
      {!reduced && METEORS.map((m, i) => (
        <div
          key={i}
          className="meteor-wrap absolute"
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
          {/* Tail */}
          <div
            className="absolute"
            style={{
              right: `${m.iconPx - 4}px`,
              top: '50%',
              width: `${m.tailLen}px`,
              height: '1.5px',
              transform: 'translateY(-50%)',
              background: 'linear-gradient(to left, rgba(56,189,248,0.55), transparent)',
            }}
          />
          {/* Icon */}
          <div
            style={{
              width: `${m.iconPx}px`,
              height: `${m.iconPx}px`,
              opacity: 0.65,
            }}
          >
            <DynamicIcon label={m.tech} className="w-full h-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
