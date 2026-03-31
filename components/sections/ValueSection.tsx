'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { values } from '@/lib/data';
import { motion } from 'framer-motion';

export function ValueSection() {
  return (
    <section id="solutions" className="bg-white py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built for decision-makers who need speed, quality, and confidence"
          description="A strategic partner combining product thinking, engineering depth, and enterprise-grade execution."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <Icon className="h-5 w-5 text-brand-500" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
