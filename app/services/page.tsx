import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <section className="section-container py-40">
        <h1 className="font-display text-4xl font-bold text-slate-900">Services</h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          This page is scaffolded and ready for deeper content expansion based on your delivery roadmap.
        </p>
      </section>
      <Footer />
    </main>
  );
}
