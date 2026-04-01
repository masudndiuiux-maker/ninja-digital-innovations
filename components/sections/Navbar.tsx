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
      <div className={`section-container rounded-2xl border transition-all ${scrolled ? 'border-slate-200 bg-white/90 shadow-soft backdrop-blur' : 'border-transparent bg-transparent'}`}>
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-wordmark.svg"
              alt="Ninja Digital Innovations logo"
              width={260}
              height={64}
              className="h-12 w-auto"
              priority
            />
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="group relative text-sm font-medium text-slate-600 hover:text-slate-900">
                {link}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand-gradient transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <GradientButton href="#contact">Book a Consultation</GradientButton>
          </div>
          <button aria-label="Open menu" className="md:hidden" onClick={() => setOpen((prev) => !prev)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="section-container mt-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-slate-700" onClick={() => setOpen(false)}>
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
