'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Moon, Sun } from 'lucide-react';
import { experience, projects, skills, tools } from '@/lib/portfolio-data';

const sectionMotion = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } }
};

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldDark = stored ? stored === 'dark' : prefersDark;
    setIsDark(shouldDark);
    document.documentElement.classList.toggle('dark', shouldDark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggle}
      className="group rounded-full border border-zinc-300/70 bg-white/70 p-2 text-zinc-700 backdrop-blur transition hover:scale-105 hover:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-100"
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function MagneticButton({ href, label, primary = false }: { href: string; label: string; primary?: boolean }) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition ${
          primary
            ? 'bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900'
            : 'border border-zinc-400/70 text-zinc-800 hover:border-zinc-900 dark:border-zinc-600 dark:text-zinc-200 dark:hover:border-zinc-200'
        }`}
      >
        {label}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
}

export function PortfolioHome() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 transition-colors dark:bg-zinc-950 dark:text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-zinc-50/85 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <span className="text-sm font-semibold tracking-[0.2em]">MASUD RANA</span>
          <nav className="hidden gap-6 text-sm md:flex">
            {['about', 'projects', 'skills', 'experience', 'contact'].map((item) => (
              <a key={item} href={`#${item}`} className="transition hover:text-sky-500">
                {item}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <section className="mx-auto grid min-h-[88vh] max-w-6xl place-content-center gap-8 px-6 py-24 md:px-10" id="hero">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} className="text-sm tracking-[0.2em] text-zinc-500">
          UI/UX DESIGNER · JAPAN EXPERIENCE
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.75 }}
          className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl"
        >
          Hi, I’m Masud Rana — UI/UX Designer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.75 }}
          className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300"
        >
          Designing intuitive and meaningful digital experiences with 3+ years of experience in a Japanese multinational software company, where precision, clarity, and craft shape every decision.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.75 }}
          className="flex flex-wrap gap-4"
        >
          <MagneticButton href="#projects" label="View My Work" primary />
          <MagneticButton href="#contact" label="Contact Me" />
        </motion.div>
      </section>

      <motion.section id="about" variants={sectionMotion} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <h2 className="mb-6 text-3xl font-semibold">About Me</h2>
        <p className="max-w-3xl text-zinc-600 dark:text-zinc-300">
          I design products that feel calm, clear, and human. Working within a Japanese product environment taught me discipline in process, respect for detail, and the importance of intentional whitespace (Ma) to guide attention. My approach blends UX strategy with refined interface craft to create outcomes that are elegant and measurable.
        </p>
      </motion.section>

      <motion.section id="projects" variants={sectionMotion} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-semibold">Featured Projects</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div key={project.slug} whileHover={{ y: -6, scale: 1.01 }} transition={{ duration: 0.25 }} className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-4 h-40 rounded-xl bg-gradient-to-br from-zinc-200 via-zinc-100 to-sky-100 dark:from-zinc-800 dark:to-sky-950" />
              <p className="text-xs tracking-[0.16em] text-zinc-500">0{index + 1}</p>
              <h3 className="mt-2 text-xl font-medium">{project.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-zinc-300 px-2 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/case-study/${project.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sky-600">
                View Case Study <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section id="skills" variants={sectionMotion} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2 md:px-10">
        <div>
          <h2 className="mb-6 text-3xl font-semibold">Skills & Expertise</h2>
          <div className="grid grid-cols-2 gap-3">
            {skills.map((skill) => (
              <div key={skill} className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm dark:border-zinc-800 dark:bg-zinc-900">
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-6 text-xl font-medium">Tools</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span key={tool} className="rounded-full bg-zinc-200 px-4 py-2 text-sm dark:bg-zinc-800">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="experience" variants={sectionMotion} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <h2 className="mb-8 text-3xl font-semibold">Experience</h2>
        <div className="space-y-5 border-l border-zinc-300 pl-6 dark:border-zinc-700">
          {experience.map((item) => (
            <div key={item.period} className="relative rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <span className="absolute -left-[31px] top-8 h-3 w-3 rounded-full bg-sky-500" />
              <p className="text-xs tracking-[0.15em] text-zinc-500">{item.period}</p>
              <h3 className="mt-1 text-lg font-medium">{item.role}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">{item.company}</p>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">{item.summary}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section id="testimonials" variants={sectionMotion} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <h2 className="mb-8 text-3xl font-semibold">Testimonials</h2>
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-lg italic text-zinc-700 dark:text-zinc-200">
            “Masud consistently transforms complex requirements into elegant experiences. His design thinking and precision significantly improved product quality and cross-team confidence.”
          </p>
          <p className="mt-4 text-sm text-zinc-500">— Product Manager, Tokyo</p>
        </div>
      </motion.section>

      <motion.section id="contact" variants={sectionMotion} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mx-auto max-w-6xl px-6 pb-12 pt-24 md:px-10">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900 md:p-12">
          <h2 className="text-3xl font-semibold">Let’s design something meaningful.</h2>
          <p className="mt-3 max-w-xl text-zinc-600 dark:text-zinc-300">
            I’m always open to discussing product design, UX strategy, and collaborative opportunities.
          </p>
          <form className="mt-8 grid gap-4 md:grid-cols-2">
            <input className="rounded-xl border border-zinc-300 bg-transparent px-4 py-3 text-sm outline-none focus:border-sky-500 dark:border-zinc-700" placeholder="Your name" />
            <input className="rounded-xl border border-zinc-300 bg-transparent px-4 py-3 text-sm outline-none focus:border-sky-500 dark:border-zinc-700" placeholder="Email" />
            <textarea className="min-h-32 rounded-xl border border-zinc-300 bg-transparent px-4 py-3 text-sm outline-none focus:border-sky-500 dark:border-zinc-700 md:col-span-2" placeholder="Tell me about your project" />
            <button className="w-fit rounded-full bg-zinc-900 px-6 py-3 text-sm text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900">Send Message</button>
          </form>
          <div className="mt-8 text-sm text-zinc-600 dark:text-zinc-300">
            <p>Email: masud.rana@ninja-digital-innovations.com</p>
            <p className="mt-2">LinkedIn · Behance · Dribbble</p>
          </div>
        </div>
      </motion.section>

      <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
        © Masud Rana
      </footer>
    </main>
  );
}
