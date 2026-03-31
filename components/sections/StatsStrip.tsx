'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { stats } from '@/lib/data';

export function StatsStrip() {
  return (
    <div className="section-container pb-24">
      <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-soft backdrop-blur md:grid-cols-4">
        {stats.map((item, i) => (
          <Counter key={item.label} end={item.value} suffix={item.suffix} label={item.label} delay={i * 0.1} />
        ))}
      </div>
    </div>
  );
}

function Counter({ end, suffix, label, delay }: { end: number; suffix: string; label: string; delay: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const step = Math.max(1, Math.floor(end / 40));
    const id = setInterval(() => {
      setCount((current) => {
        const next = current + step;
        if (next >= end) {
          clearInterval(id);
          return end;
        }
        return next;
      });
    }, 35);

    return () => clearInterval(id);
  }, [end]);

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay, duration: 0.6 }} className="text-center">
      <p className="font-display text-3xl font-bold text-slate-900">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-slate-500">{label}</p>
    </motion.div>
  );
}
