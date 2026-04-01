'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '@/lib/data';
import { GradientButton } from '@/components/ui/GradientButton';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={`section-container rounded-2xl border transition-all ${
          scrolled || open ? 'border-slate-200 bg-white/95 shadow-soft backdrop-blur' : 'border-transparent bg-transparent'
        }`}
      >
        <nav className="flex min-h-[5rem] items-center justify-between gap-4 py-3 md:min-h-[5.5rem] md:py-4">
          <Link href="/" className="flex min-w-0 flex-1 items-center md:flex-none">
            <Image
              src="/logo-wordmark.svg"
              alt="Ninja Digital Innovations logo"
              width={360}
              height={102}
              sizes="(max-width: 768px) 220px, 360px"
              className="h-12 w-auto max-w-[13.5rem] object-contain sm:h-14 sm:max-w-[15rem] md:h-16 md:max-w-[18rem]"
              priority
            />
          </Link>
          <div className="hidden items-center gap-6 lg:gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="group relative text-sm font-medium text-slate-600 hover:text-slate-900">
                {link}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand-gradient transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          <div className="hidden shrink-0 md:block">
            <GradientButton href="#contact">Book a Consultation</GradientButton>
          </div>
          <button
            aria-label="Open menu"
            aria-expanded={open}
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white/90 p-2 text-slate-700 shadow-soft md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="section-container mt-2 rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-soft backdrop-blur md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              ))}
              <GradientButton href="#contact">Let&apos;s Talk</GradientButton>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
