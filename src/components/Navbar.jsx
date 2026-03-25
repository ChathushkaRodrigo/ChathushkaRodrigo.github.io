import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/content';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

export default function Navbar({ isDark, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled
          ? 'backdrop-blur-2xl border-b shadow-lg'
          : 'backdrop-blur-md'
      }`}
      style={{
        background: isScrolled ? 'var(--nav-bg)' : 'transparent',
        borderColor: isScrolled ? 'var(--glass-border)' : 'transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          href="#"
          whileHover={{ scale: 1.02 }}
          className="font-mono text-lg font-bold tracking-tight text-themed"
        >
          <span className="text-[var(--gradient-1)]">~/</span>chathushka
        </motion.a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-3 py-2 text-sm text-muted-themed hover:text-themed transition-colors rounded-lg"
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                  style={{ background: 'linear-gradient(90deg, var(--gradient-1), var(--gradient-2))' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}
          <motion.button
            onClick={onToggleTheme}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9, rotate: -15 }}
            className="ml-3 p-2.5 rounded-xl glass-subtle text-muted-themed hover:text-themed transition-all"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isDark ? 'sun' : 'moon'}
                initial={{ rotate: -90, opacity: 0, scale: 0 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <motion.button
            onClick={onToggleTheme}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 rounded-xl glass-subtle text-muted-themed hover:text-themed transition-all"
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </motion.button>
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 rounded-xl glass-subtle text-muted-themed hover:text-themed transition-all"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={mobileOpen ? 'close' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, height: 'auto', filter: 'blur(0px)' }}
            exit={{ opacity: 0, height: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t"
            style={{ borderColor: 'var(--glass-border)', background: 'var(--nav-bg)' }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 text-sm text-muted-themed hover:text-themed transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
