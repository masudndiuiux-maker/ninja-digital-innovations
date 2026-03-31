'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { testimonials } from '@/lib/data';

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="section-container">
        <SectionHeading eyebrow="Social Proof" title="Trusted by teams building the future" center />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft"
            >
              <blockquote className="text-slate-700">“{item.quote}”</blockquote>
              <figcaption className="mt-6">
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
