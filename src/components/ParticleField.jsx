import { useMemo, useEffect, useState } from 'react';

export default function ParticleField() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: 1 + Math.random() * 2.5,
      duration: 12 + Math.random() * 25,
      delay: Math.random() * 20,
      opacity: 0.1 + Math.random() * 0.3,
    }));
  }, []);

  const orbs = useMemo(() => [
    { cx: '15%', cy: '20%', r: 300, color: 'var(--orb-1)', delay: 0 },
    { cx: '80%', cy: '50%', r: 250, color: 'var(--orb-2)', delay: 5 },
    { cx: '50%', cy: '80%', r: 350, color: 'var(--orb-1)', delay: 10 },
  ], []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Aurora orbs */}
      {orbs.map((orb, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full blur-3xl aurora-orb"
          style={{
            left: orb.cx,
            top: orb.cy,
            width: `${orb.r}px`,
            height: `${orb.r}px`,
            background: orb.color,
            animationDelay: `${orb.delay}s`,
            transform: `translateY(${scrollY * 0.05 * (i % 2 === 0 ? 1 : -1)}px)`,
          }}
        />
      ))}

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            bottom: '-10px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `rgba(59, 130, 246, ${p.opacity})`,
            animation: `float-up ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `translateY(${scrollY * 0.02}px)`,
        }}
      />
    </div>
  );
}
