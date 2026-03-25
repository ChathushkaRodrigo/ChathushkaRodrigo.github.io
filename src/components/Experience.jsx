import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import { StaggerContainer, StaggerItem } from './SectionReveal';
import GlassCard from './GlassCard';
import { experience } from '../data/content';

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative">
      <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ background: 'var(--orb-1)' }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionReveal>
          <p className="font-mono text-[var(--gradient-1)] text-sm mb-2 tracking-wider">$ kubectl get deployments --all-namespaces</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-themed mb-12">Experience</h2>
        </SectionReveal>

        {/* Timeline line */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px hidden sm:block" style={{ background: 'linear-gradient(to bottom, var(--gradient-1), var(--gradient-2), transparent)' }} />

          <StaggerContainer className="space-y-8" staggerDelay={0.15}>
            {experience.map((job, index) => (
              <StaggerItem key={job.company}>
                <div className="relative sm:pl-16">
                  {/* Timeline dot */}
                  <motion.div
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="absolute left-4 top-8 w-5 h-5 rounded-full hidden sm:flex items-center justify-center z-10"
                    style={{ background: job.isCurrent ? 'var(--gradient-1)' : 'var(--glass-bg)', border: `2px solid ${job.isCurrent ? 'var(--gradient-1)' : 'var(--glass-border)'}` }}
                  >
                    {job.isCurrent && (
                      <motion.div
                        animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-[var(--gradient-1)]"
                      />
                    )}
                  </motion.div>

                  <GlassCard className="sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <motion.img
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                          src={job.logo}
                          alt={job.company}
                          className="w-12 h-12 rounded-xl object-contain p-1.5"
                          style={{ background: 'rgba(255,255,255,0.08)' }}
                        />
                        <div>
                          <h3 className="text-xl font-bold text-themed">{job.title}</h3>
                          <p className="text-[var(--gradient-1)] font-medium">{job.company}</p>
                        </div>
                      </div>
                      <span className={`font-mono text-sm mt-2 sm:mt-0 flex items-center gap-2 ${job.isCurrent ? 'text-emerald-400' : 'text-dim-themed'}`}>
                        {job.isCurrent && <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />}
                        {job.period}
                      </span>
                    </div>

                    <p className="text-dim-themed text-sm mb-4">{job.subtitle}</p>

                    <ul className="space-y-3 text-muted-themed text-sm leading-relaxed">
                      {job.achievements.map((a, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-[var(--gradient-1)] mt-1 shrink-0">▶</span>
                          <span dangerouslySetInnerHTML={{ __html: a }} />
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-5">
                      {job.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.08, y: -2 }}
                          className="text-xs font-mono px-2.5 py-1 rounded-full border cursor-default"
                          style={{
                            background: 'rgba(59,130,246,0.06)',
                            color: 'var(--gradient-1)',
                            borderColor: 'rgba(59,130,246,0.15)',
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
