import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import { StaggerContainer, StaggerItem } from './SectionReveal';
import GlassCard from './GlassCard';
import { skills } from '../data/content';
import { FaAws } from 'react-icons/fa';
import { SiJenkins, SiKubernetes, SiApple, SiLinux, SiReact } from 'react-icons/si';

const iconMap = {
  SiAmazonaws: FaAws,
  SiJenkins: SiJenkins,
  SiKubernetes: SiKubernetes,
  SiApple: SiApple,
  SiLinux: SiLinux,
  SiReact: SiReact,
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full blur-3xl opacity-15" style={{ background: 'var(--orb-2)' }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionReveal>
          <p className="font-mono text-[var(--gradient-1)] text-sm mb-2 tracking-wider">$ helm list --all-namespaces</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-themed mb-12">Skills & Tools</h2>
        </SectionReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon];
            return (
              <StaggerItem key={skill.category}>
                <GlassCard className="h-full" glowColor={`${skill.iconColor}22`}>
                  <div className="flex items-center gap-3 mb-5">
                    {Icon && (
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className="p-2.5 rounded-xl"
                        style={{ background: `${skill.iconColor}15` }}
                      >
                        <Icon size={22} style={{ color: skill.iconColor }} />
                      </motion.div>
                    )}
                    <h3 className="font-bold text-themed text-lg">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <motion.span
                        key={item}
                        whileHover={{ y: -3, scale: 1.08, boxShadow: `0 4px 12px ${skill.iconColor}20` }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        className="text-xs font-mono px-3 py-1.5 rounded-full cursor-default transition-colors"
                        style={{
                          background: 'var(--bg-card)',
                          color: 'var(--text-muted)',
                          border: '1px solid var(--glass-border)',
                        }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
