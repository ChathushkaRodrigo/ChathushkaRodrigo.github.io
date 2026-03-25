import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import ParticleField from './components/ParticleField';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { isDark, toggle } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="relative antialiased noise-overlay">
      {/* Scroll progress bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <ParticleField />
      <Navbar isDark={isDark} onToggleTheme={toggle} />
      <Hero />
      <TechMarquee />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Blog />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
