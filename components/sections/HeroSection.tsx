'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { GradientButton } from '@/components/ui/GradientButton';
import { StatsStrip } from '@/components/sections/StatsStrip';

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden pt-40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(38,112,127,0.18),_transparent_28%),radial-gradient(circle_at_top_left,_rgba(3,67,84,0.14),_transparent_34%),linear-gradient(135deg,rgba(3,67,84,0.12),transparent_48%,rgba(38,112,127,0.16))]" />
      <div className="hero-ai-grid absolute inset-0 -z-10 opacity-70" />
      <motion.div
        aria-hidden="true"
        animate={
          reduce
            ? undefined
            : {
                opacity: [0.2, 0.35, 0.2],
                scale: [1, 1.04, 1]
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-x-[-10%] top-[-12%] -z-10 h-[34rem] rounded-full bg-[radial-gradient(circle,_rgba(38,112,127,0.22),_transparent_62%)]"
      />
      <motion.div
        aria-hidden="true"
        animate={
          reduce
            ? undefined
            : {
                opacity: [0.18, 0.3, 0.18],
                x: ['-2%', '2%', '-2%'],
                y: ['0%', '3%', '0%']
              }
        }
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_38%,_rgba(3,67,84,0.18),_transparent_26%),radial-gradient(circle_at_22%_72%,_rgba(38,112,127,0.16),_transparent_22%),radial-gradient(circle_at_78%_68%,_rgba(3,67,84,0.12),_transparent_20%)]"
      />
      <div className="section-container pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-brand-400">Digital Innovation Studio</p>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Ninja Digital Innovations
            <br />
            <span className="block pt-4 sm:pt-5 md:pt-6 text-brand-500">
              Pioneering the Future with AI
              <br />
              and Human Collaboration
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            We partner with ambitious teams to design, engineer, and scale high-performing digital products across web, mobile, AI, and cloud.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <GradientButton href="#contact">Book a Consultation</GradientButton>
            <GradientButton href="#portfolio" secondary>
              View Case Studies
            </GradientButton>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <span>Trusted by growth-stage & enterprise teams</span>
            <span>•</span>
            <span>ISO-ready engineering practices</span>
            <span>•</span>
            <span>End-to-end delivery</span>
          </div>
        </div>
      </div>
      <StatsStrip />
    </section>
  );
}
