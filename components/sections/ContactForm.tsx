'use client';

import { FormEvent, useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-24">
      <div className="section-container grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s create your next digital advantage"
            description="Tell us where you are today and where you want to go. We’ll propose a clear, practical next step."
          />
          <div className="mt-8 space-y-3 text-slate-600">
            <p>hello@ninjadigitalinnovations.com</p>
            <p>+1 (555) 010-2048</p>
            <p>27 Shaptak Square, Dhanmondi 27, Dhaka • Remote Global Delivery</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-soft md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <input required placeholder="First name" className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20" />
            <input required placeholder="Last name" className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20" />
          </div>
          <input required type="email" placeholder="Work email" className="mt-4 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20" />
          <textarea required placeholder="Tell us about your project" rows={5} className="mt-4 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20" />
          <button type="submit" className="mt-5 w-full rounded-full bg-brand-gradient px-6 py-3 font-semibold text-white transition hover:brightness-110">
            Submit Inquiry
          </button>
          {submitted ? <p className="mt-3 text-sm text-emerald-600">Thanks! We&apos;ll respond within one business day.</p> : null}
        </form>
      </div>
    </section>
  );
}
