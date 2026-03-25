import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from './SectionReveal';
import { StaggerContainer, StaggerItem } from './SectionReveal';
import GlassCard from './GlassCard';
import { Iphone17Pro } from '../registry/eldoraui/iphone-17-pro';
import { MacbookPro } from '../registry/eldoraui/macbook-pro';
import { iosApps, macApps, infraProjects, devProjects } from '../data/content';
import { SiApple, SiKubernetes } from 'react-icons/si';
import { FiCode, FiExternalLink } from 'react-icons/fi';

const tabs = [
  { id: 'apps', label: 'iOS & macOS Apps', icon: <SiApple size={16} /> },
  { id: 'infra', label: 'Infrastructure & DevOps', icon: <SiKubernetes size={16} /> },
  { id: 'dev', label: 'Software & Dev', icon: <FiCode size={16} /> },
];

const contentVariants = {
  initial: { opacity: 0, y: 30, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, y: -20, filter: 'blur(8px)', transition: { duration: 0.3 } },
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState('apps');

  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15" style={{ background: 'var(--orb-1)' }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionReveal>
          <p className="font-mono text-[var(--gradient-1)] text-sm mb-2 tracking-wider">$ ls -la ~/projects/</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-themed mb-4">Projects</h2>
          <p className="text-muted-themed mb-10">Key infrastructure and development projects I've led or contributed to.</p>
        </SectionReveal>

        {/* Tabs */}
        <SectionReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-12">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab.id ? 'text-white' : 'text-muted-themed hover:text-themed'
                }`}
                style={activeTab === tab.id ? {} : { background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="project-tab"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: 'linear-gradient(135deg, var(--gradient-1), var(--gradient-2))' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {tab.icon}
                  {tab.label}
                </span>
              </motion.button>
            ))}
          </div>
        </SectionReveal>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'apps' && (
            <motion.div key="apps" variants={contentVariants} initial="initial" animate="animate" exit="exit">
              {/* iOS Apps with iPhone mockups */}
              <h3 className="text-lg font-bold text-themed mb-8 flex items-center gap-3">
                <SiApple size={18} /> iOS Apps
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
                {iosApps.map((app, i) => (
                  <motion.div
                    key={app.name}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-center group"
                  >
                    <motion.div
                      whileHover={{ y: -12, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="mb-6 relative"
                    >
                      {/* Glow behind phone */}
                      <div
                        className="absolute inset-0 blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-full scale-75"
                        style={{ background: `linear-gradient(135deg, ${app.gradient.includes('orange') ? '#f97316' : app.gradient.includes('indigo') ? '#6366f1' : '#eab308'}, ${app.gradient.includes('red') ? '#ef4444' : app.gradient.includes('purple') ? '#9333ea' : '#f59e0b'})` }}
                      />
                      <Iphone17Pro src={app.screenshot} className="mx-auto relative z-10" />
                    </motion.div>
                    <h4 className="font-bold text-themed text-lg mb-1">{app.name}</h4>
                    <p className="text-dim-themed text-xs font-mono mb-2">{app.platform}</p>
                    <p className="text-muted-themed text-sm mb-4 leading-relaxed">{app.description}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {app.tags.map((tag) => (
                        <span key={tag} className={`text-xs font-mono px-2.5 py-1 rounded-full ${app.tagColor}`}>{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* macOS Apps with MacBook mockup */}
              <h3 className="text-lg font-bold text-themed mb-8 flex items-center gap-3">
                <SiApple size={18} /> macOS Apps
              </h3>
              <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
                {macApps.map((app, i) => (
                  <motion.div
                    key={app.name}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-center group"
                  >
                    <motion.div
                      whileHover={{ y: -10, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="mb-6 relative"
                    >
                      <div className="absolute inset-0 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-full scale-50" style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }} />
                      <MacbookPro src={app.screenshot} className="mx-auto relative z-10" />
                    </motion.div>
                    <h4 className="font-bold text-themed text-lg mb-1">{app.name}</h4>
                    <p className="text-dim-themed text-xs font-mono mb-2">{app.platform}</p>
                    <p className="text-muted-themed text-sm mb-4 leading-relaxed">{app.description}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {app.tags.map((tag) => (
                        <span key={tag} className={`text-xs font-mono px-2.5 py-1 rounded-full ${app.tagColor}`}>{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'infra' && (
            <motion.div key="infra" variants={contentVariants} initial="initial" animate="animate" exit="exit">
              <StaggerContainer className="grid sm:grid-cols-2 gap-5" staggerDelay={0.08}>
                {infraProjects.map((project) => (
                  <StaggerItem key={project.name}>
                    <GlassCard className="h-full group">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-themed">{project.name}</h3>
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          className="text-dim-themed"
                        >
                          <FiExternalLink size={14} />
                        </motion.div>
                      </div>
                      <p className="text-muted-themed text-sm mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <motion.span
                            key={tag}
                            whileHover={{ scale: 1.08 }}
                            className="text-xs font-mono px-2.5 py-1 rounded-full"
                            style={{ background: 'rgba(59,130,246,0.06)', color: 'var(--gradient-1)', border: '1px solid rgba(59,130,246,0.12)' }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </GlassCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          )}

          {activeTab === 'dev' && (
            <motion.div key="dev" variants={contentVariants} initial="initial" animate="animate" exit="exit">
              <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.06}>
                {devProjects.map((project) => (
                  <StaggerItem key={project.name}>
                    <GlassCard className="h-full group">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-themed">{project.name}</h3>
                      </div>
                      <p className="text-muted-themed text-sm mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <motion.span
                            key={tag}
                            whileHover={{ scale: 1.08 }}
                            className="text-xs font-mono px-2.5 py-1 rounded-full"
                            style={{ background: 'rgba(139,92,246,0.06)', color: 'var(--gradient-2)', border: '1px solid rgba(139,92,246,0.12)' }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </GlassCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
