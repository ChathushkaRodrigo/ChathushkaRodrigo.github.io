import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import { aboutParagraphs } from '../data/content';
import { StaggerContainer, StaggerItem } from './SectionReveal';

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <p className="font-mono text-[var(--gradient-1)] text-sm mb-2 tracking-wider">$ cat about.md</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-themed mb-8">About Me</h2>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="glass rounded-2xl overflow-hidden glow-border">
            {/* Terminal header */}
            <div className="px-5 py-3 flex items-center gap-2" style={{ background: 'var(--bg-terminal-header)', borderBottom: '1px solid var(--glass-border)' }}>
              <motion.div whileHover={{ scale: 1.3 }} className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" />
              <motion.div whileHover={{ scale: 1.3 }} className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer" />
              <motion.div whileHover={{ scale: 1.3 }} className="w-3 h-3 rounded-full bg-green-500/80 cursor-pointer" />
              <span className="text-dim-themed text-xs font-mono ml-2">about.sh</span>
            </div>
            {/* Terminal body */}
            <StaggerContainer className="p-6 sm:p-8 font-mono text-sm sm:text-base leading-relaxed space-y-4" staggerDelay={0.1}>
              {aboutParagraphs.map((para, i) => (
                <StaggerItem key={i}>
                  <p className="flex gap-2">
                    <span className="text-emerald-400 shrink-0">{'>'}</span>
                    <span dangerouslySetInnerHTML={{ __html: para.text }} />
                  </p>
                </StaggerItem>
              ))}
              <StaggerItem>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                  className="inline-block w-2.5 h-5 bg-emerald-400/60 ml-4"
                />
              </StaggerItem>
            </StaggerContainer>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
