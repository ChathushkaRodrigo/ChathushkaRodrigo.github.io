import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { phrases, socialLinks } from '../data/content';
import { FiMail, FiArrowDown } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub, FaMediumM } from 'react-icons/fa';
import AwsBlueprint from './AwsBlueprint';

function useTypewriter(words, typeSpeed = 80, deleteSpeed = 40, pauseTime = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setText(current.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseTime]);

  return text;
}

// Magnetic button component
function MagneticButton({ children, className, ...props }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      className={className}
      {...props}
    >
      {children}
    </motion.a>
  );
}

export default function Hero() {
  const typed = useTypewriter(phrases);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const buttons = [
    { href: socialLinks.linkedin, icon: <FaLinkedinIn size={18} />, label: 'LinkedIn', primary: true },
    { href: socialLinks.github, icon: <FaGithub size={18} />, label: 'GitHub' },
    { href: socialLinks.medium, icon: <FaMediumM size={18} />, label: 'Blog' },
    { href: `mailto:${socialLinks.email}`, icon: <FiMail size={18} />, label: 'Email' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 pt-20">
      {/* Background gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'var(--orb-1)' }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
        style={{ background: 'var(--orb-2)' }}
      />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-subtle mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs font-mono text-muted-themed">Available for opportunities</span>
          </motion.div>

          <motion.p variants={itemVariants} className="font-mono text-[var(--gradient-1)] text-sm mb-4 tracking-wider">
            $ whoami
          </motion.p>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-themed mb-4 leading-[1.1] tracking-tight">
            Chathushka
            <br />
            <span className="text-shimmer">Rodrigo</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="font-mono text-xl sm:text-2xl text-muted-themed mb-6 h-9 flex items-center">
            <span className="text-[var(--gradient-1)] mr-2">{'>'}</span>
            <span>{typed}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
              className="inline-block w-0.5 h-6 bg-[var(--gradient-1)] ml-1"
            />
          </motion.div>

          <motion.p variants={itemVariants} className="text-muted-themed text-lg mb-10 max-w-lg leading-relaxed">
            Building reliable infrastructure at scale. Crafting native Apple experiences. Passionate about automating everything and shipping fast with confidence.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            {buttons.map((btn) => (
              <MagneticButton
                key={btn.label}
                href={btn.href}
                target={btn.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all cursor-pointer ${
                  btn.primary
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : 'glass text-themed hover:border-[var(--gradient-1)]/30 glow-border'
                }`}
              >
                {btn.icon}
                {btn.label}
              </MagneticButton>
            ))}
          </motion.div>
        </motion.div>

        {/* Avatar with AWS Blueprint background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex justify-center md:justify-end relative"
        >
          {/* AWS Blueprint behind avatar */}
          <div className="absolute inset-0 -inset-x-16 -inset-y-20 hidden md:block">
            <AwsBlueprint />
          </div>

          <div className="relative group z-10">
            {/* Animated outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-3 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, transparent 0%, var(--gradient-1) 25%, transparent 50%, var(--gradient-2) 75%, transparent 100%)',
                opacity: 0.3,
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-6 rounded-full"
              style={{
                background: 'conic-gradient(from 180deg, transparent 0%, var(--gradient-2) 20%, transparent 40%, var(--gradient-1) 60%, transparent 80%)',
                opacity: 0.15,
              }}
            />

            {/* Glow */}
            <div className="absolute inset-0 bg-[var(--gradient-1)]/20 rounded-full blur-3xl scale-125 group-hover:scale-150 transition-transform duration-700" />

            {/* Avatar */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden ring-2 ring-[var(--glass-border)] shadow-2xl">
              <img
                src="/avatar.png"
                alt="Chathushka Rodrigo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 items-center justify-center hidden">
                <span className="text-6xl font-bold gradient-text font-mono">CR</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-dim-themed">scroll</span>
          <FiArrowDown className="text-dim-themed" size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
