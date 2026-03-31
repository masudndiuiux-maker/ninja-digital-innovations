import type { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface GradientButtonProps {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}

export function GradientButton({ href, children, secondary }: GradientButtonProps) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }} transition={{ duration: 0.3 }}>
      <Link
        href={href}
        className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
          secondary
            ? 'border border-slate-200 bg-white text-slate-700 hover:border-brand-400 hover:text-brand-500'
            : 'bg-brand-gradient text-white shadow-soft hover:brightness-110'
        }`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
