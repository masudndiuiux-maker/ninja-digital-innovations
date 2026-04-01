'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { projects } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function PortfolioGrid() {
  return (
    <section id="portfolio" className="bg-white py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Case Studies"
          title="Selected work delivering measurable outcomes"
          description="Modernization projects across SaaS, healthcare, ecommerce, and enterprise operations."
          center
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50"
            >
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-brand-500 to-brand-400">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/20 to-transparent" />
                <motion.div whileHover={{ scale: 1.05 }} className="absolute inset-0 opacity-30 noise-overlay" />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">{project.category}</div>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-brand-500">{project.metric}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-2 text-slate-600">{project.summary}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
