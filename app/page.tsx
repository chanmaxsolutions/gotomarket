// src/app/page.tsx
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import AboutPreview from '@/components/home/AboutPreview';
import ServicesOverview from '@/components/home/ServicesOverview';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <AboutPreview />
      <TestimonialsSection />
    </main>
  );
}