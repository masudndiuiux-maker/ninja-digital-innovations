import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export function SectionHeading({ eyebrow, title, description, center }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-400">{eyebrow}</p> : null}
      <h2 className="font-display text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-relaxed text-slate-600">{description}</p> : null}
    </motion.div>
  );
}
