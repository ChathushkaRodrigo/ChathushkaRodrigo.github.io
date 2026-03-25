import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import GlassCard from './GlassCard';

export default function Education() {
  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <p className="font-mono text-[var(--gradient-1)] text-sm mb-2 tracking-wider">$ git log --oneline education/</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-themed mb-12">Education</h2>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <GlassCard className="sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <motion.div
                whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'rgba(234,179,8,0.12)' }}
              >
                <span className="text-yellow-400 font-bold text-xl font-mono">CU</span>
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-themed mb-1">Curtin University</h3>
                <p className="text-[var(--gradient-1)] font-medium mb-1">Software Engineering</p>
                <p className="text-dim-themed text-sm mb-4">Colombo, Sri Lanka</p>
                <div className="space-y-3 text-sm text-muted-themed">
                  <p>
                    <span className="text-themed font-medium">Coursework:</span>{' '}
                    {['Algorithm & Data Structures', 'Java', 'Linux', 'Cloud', 'Operating Systems', 'Network'].map((item, i) => (
                      <motion.span
                        key={item}
                        whileHover={{ color: 'var(--gradient-1)', y: -1 }}
                        className="inline-block cursor-default"
                      >
                        {item}{i < 5 ? ', ' : ''}
                      </motion.span>
                    ))}
                  </p>
                  <p>
                    <span className="text-themed font-medium">EE Coursework:</span>{' '}
                    {['Cloud Solutions', 'Human-Computer Interaction Design', 'Embedded Systems'].map((item, i) => (
                      <motion.span
                        key={item}
                        whileHover={{ color: 'var(--gradient-2)', y: -1 }}
                        className="inline-block cursor-default"
                      >
                        {item}{i < 2 ? ', ' : ''}
                      </motion.span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </SectionReveal>
      </div>
    </section>
  );
}
