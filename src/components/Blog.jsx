import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import { StaggerContainer, StaggerItem } from './SectionReveal';
import { blogPosts, socialLinks } from '../data/content';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';

export default function Blog() {
  return (
    <section id="blog" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <p className="font-mono text-[var(--gradient-1)] text-sm mb-2 tracking-wider">$ curl medium.com/@chathushkarodrigo</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-themed mb-4">Latest from the Blog</h2>
          <p className="text-muted-themed mb-12">
            Writing about Kubernetes, Docker, DevSecOps, and cloud-native tooling on{' '}
            <a href={socialLinks.medium} target="_blank" rel="noopener noreferrer" className="text-[var(--gradient-1)] hover:underline">
              Medium
            </a>.
          </p>
        </SectionReveal>

        <StaggerContainer className="grid sm:grid-cols-2 gap-5" staggerDelay={0.08}>
          {blogPosts.map((post) => (
            <StaggerItem key={post.title}>
              <motion.a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="glass rounded-2xl p-6 block h-full group relative overflow-hidden glow-border"
              >
                {/* Hover gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(300px circle at 80% 20%, ${post.iconColor}10, transparent 60%)` }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <i className={`${post.icon} text-lg`} style={{ color: post.iconColor }} />
                      <span className="text-xs font-mono text-dim-themed">{post.date}</span>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -5, y: 5 }}
                      whileHover={{ opacity: 1, x: 0, y: 0 }}
                      className="text-dim-themed group-hover:text-[var(--gradient-1)] transition-colors"
                    >
                      <FiArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </div>
                  <h3 className="font-bold text-themed mb-2 group-hover:text-[var(--gradient-1)] transition-colors">{post.title}</h3>
                  <p className="text-muted-themed text-sm leading-relaxed">{post.description}</p>
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <SectionReveal delay={0.3} className="text-center mt-10">
          <motion.a
            href={socialLinks.medium}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-2 text-[var(--gradient-1)] font-medium transition-colors group"
          >
            View all posts on Medium
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FiArrowRight size={16} />
            </motion.span>
          </motion.a>
        </SectionReveal>
      </div>
    </section>
  );
}
