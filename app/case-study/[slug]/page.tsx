import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/portfolio-data';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[240px_1fr] md:px-10">
        <aside className="top-24 h-fit rounded-2xl border border-zinc-200 bg-white p-5 md:sticky dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-xs tracking-[0.2em] text-zinc-500">CASE STUDY</p>
          <h1 className="mt-2 text-lg font-semibold">{project.title}</h1>
          <nav className="mt-6 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
            {['Problem', 'Research', 'Process', 'Solution', 'Outcome'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block transition hover:text-sky-500">
                {item}
              </a>
            ))}
          </nav>
          <Link href="/" className="mt-8 inline-block text-sm font-medium text-sky-600">
            ← Back to Portfolio
          </Link>
        </aside>

        <article className="space-y-12">
          <section id="problem">
            <h2 className="text-3xl font-semibold">Problem</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">{project.problem}</p>
          </section>
          <section id="research">
            <h2 className="text-3xl font-semibold">Research</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">{project.research}</p>
          </section>
          <section id="process">
            <h2 className="text-3xl font-semibold">Process</h2>
            <ul className="mt-4 space-y-3 text-zinc-600 dark:text-zinc-300">
              {project.process.map((step) => (
                <li key={step} className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                  {step}
                </li>
              ))}
            </ul>
          </section>
          <section id="solution">
            <h2 className="text-3xl font-semibold">Solution</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">{project.solution}</p>
            <div className="mt-6 h-56 rounded-2xl bg-gradient-to-br from-zinc-200 to-sky-100 dark:from-zinc-800 dark:to-sky-950" />
          </section>
          <section id="outcome">
            <h2 className="text-3xl font-semibold">Outcome / Impact</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">{project.outcome}</p>
          </section>
        </article>
      </div>
    </main>
  );
}
