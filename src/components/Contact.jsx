import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import { socialLinks } from '../data/content';
import { FiMail, FiArrowUpRight } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const contactLinks = [
    {
      href: `mailto:${socialLinks.email}`,
      icon: <FiMail size={24} />,
      label: socialLinks.email,
      primary: true,
      color: '#3b82f6',
    },
    {
      href: socialLinks.linkedin,
      icon: <FaLinkedinIn size={24} />,
      label: 'LinkedIn',
      color: '#0077b5',
    },
    {
      href: socialLinks.github,
      icon: <FaGithub size={24} />,
      label: 'GitHub',
      color: '#999',
    },
  ];

  return (
    <section id="contact" className="py-28 px-6 relative">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{ background: 'var(--orb-1)' }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <SectionReveal>
          <p className="font-mono text-[var(--gradient-1)] text-sm mb-2 tracking-wider">$ ping chathushka</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-themed mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-themed text-lg mb-14 max-w-lg mx-auto">
            Open to discussing DevOps challenges, cloud architecture, iOS development, or new opportunities.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.15} className="flex flex-col sm:flex-row justify-center gap-4">
          {contactLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.97 }}
              className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-medium text-lg transition-all group ${
                link.primary
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40'
                  : 'glass text-themed glow-border'
              }`}
            >
              {link.icon}
              {link.label}
              <FiArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
            </motion.a>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
