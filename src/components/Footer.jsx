import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-8 px-6 relative">
      <div className="section-divider mb-8" />
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-dim-themed">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono"
        >
          <span className="text-[var(--gradient-1)]">$</span> echo &quot;Built with passion &amp; too much coffee&quot;
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-mono"
        >
          Chathushka Rodrigo &copy; {new Date().getFullYear()}
        </motion.p>
      </div>
    </footer>
  );
}
