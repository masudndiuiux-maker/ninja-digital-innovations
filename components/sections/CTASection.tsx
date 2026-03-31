import { GradientButton } from '@/components/ui/GradientButton';

export function CTASection() {
  return (
    <section className="py-24">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-3xl bg-brand-gradient p-10 text-white md:p-16">
          <div className="absolute right-6 top-6 h-28 w-28 rounded-full bg-white/20 blur-2xl" />
          <h2 className="font-display text-3xl font-bold md:text-4xl">Ready to accelerate your digital roadmap?</h2>
          <p className="mt-3 max-w-2xl text-white/90">
            Let&apos;s align your product vision with scalable execution—through modern software, AI, and strategic delivery.
          </p>
          <div className="mt-8">
            <GradientButton href="#contact" secondary>
              Let&apos;s Talk
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}
