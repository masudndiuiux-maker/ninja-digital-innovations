import { Navbar } from '@/components/sections/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ValueSection } from '@/components/sections/ValueSection';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { PortfolioGrid } from '@/components/sections/PortfolioGrid';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTASection } from '@/components/sections/CTASection';
import { ContactForm } from '@/components/sections/ContactForm';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesGrid />
      <ValueSection />
      <ProcessTimeline />
      <PortfolioGrid />
      <Testimonials />
      <CTASection />
      <ContactForm />
      <Footer />
    </main>
  );
}
