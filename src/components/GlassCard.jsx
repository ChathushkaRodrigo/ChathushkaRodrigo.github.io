import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function GlassCard({ children, className = '', hover3d = true, glowColor = 'rgba(59,130,246,0.15)', ...props }) {
  const ref = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [6, -6]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), { stiffness: 200, damping: 25 });

  // Spotlight position
  const spotX = useTransform(mouseX, [0, 1], ['0%', '100%']);
  const spotY = useTransform(mouseY, [0, 1], ['0%', '100%']);

  function handleMouseMove(e) {
    if (!hover3d || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: hover3d ? rotateX : 0,
        rotateY: hover3d ? rotateY : 0,
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{
        borderColor: 'rgba(255,255,255,0.12)',
      }}
      className={`glass rounded-2xl p-6 transition-all duration-500 relative overflow-hidden group ${className}`}
      {...props}
    >
      {/* Spotlight gradient that follows mouse */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: useTransform(
            [spotX, spotY],
            ([x, y]) => `radial-gradient(400px circle at ${x} ${y}, ${glowColor}, transparent 60%)`
          ),
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
