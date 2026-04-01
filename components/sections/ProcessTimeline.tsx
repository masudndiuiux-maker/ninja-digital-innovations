'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { processSteps } from '@/lib/data';

export function ProcessTimeline() {
  return (
    <section className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Process"
          title="A proven path from idea to scale"
          description="A transparent execution model focused on momentum, product quality, and business impact."
          center
        />
        <div className="relative mx-auto mt-14 max-w-4xl">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="mb-6 flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-gradient font-semibold text-white">{i + 1}</div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-slate-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
