'use client';

import {
  AppWindow,
  Bot,
  Cloud,
  Cog,
  LayoutPanelTop,
  Smartphone
} from 'lucide-react';
import { services, type ServiceIconName } from '@/lib/data';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { SectionHeading } from '@/components/ui/SectionHeading';

const serviceIcons: Record<ServiceIconName, typeof AppWindow> = {
  AppWindow,
  Smartphone,
  LayoutPanelTop,
  Bot,
  Cloud,
  Cog
};

export function ServicesGrid() {
  return (
    <section id="services" className="py-24">
      <div className="section-container space-y-12">
        <SectionHeading
          eyebrow="Services"
          title="High-impact engineering and design services"
          description="From strategy to delivery, we craft digital systems that are resilient, elegant, and built for measurable outcomes."
          center
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            return (
              <AnimatedCard key={service.title} delay={i * 0.08} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft transition hover:border-brand-400/60">
                <div className="mb-5 inline-flex rounded-2xl bg-brand-gradient p-3 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-slate-600">{service.description}</p>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
