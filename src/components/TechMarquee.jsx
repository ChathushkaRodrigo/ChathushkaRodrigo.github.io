import { motion } from 'framer-motion';
import { techLogos } from '../data/content';
import SectionReveal from './SectionReveal';

function LogoRow() {
  return (
    <div className="flex items-center gap-14 px-7">
      {techLogos.map((logo) => (
        <motion.i
          key={logo.name}
          whileHover={{ scale: 1.3, y: -4 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          className={`${logo.icon} text-4xl transition-all duration-500 opacity-30 hover:opacity-100 grayscale hover:grayscale-0 cursor-default`}
          style={{ color: logo.color }}
          title={logo.name}
        />
      ))}
    </div>
  );
}

export default function TechMarquee() {
  return (
    <SectionReveal>
      <section className="py-10 overflow-hidden relative">
        <div className="section-divider mb-10" />
        <div className="flex items-center logo-scroll" style={{ width: 'max-content' }}>
          <LogoRow />
          <LogoRow />
        </div>
        <div className="section-divider mt-10" />

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none" />
      </section>
    </SectionReveal>
  );
}
