import HeroSection from '@/components/sections/homepage/HeroSection';
import SocialProofBar from '@/components/sections/homepage/SocialProofBar';
import ServicesSection from '@/components/sections/homepage/ServicesSection';
import FeaturedWorkSection from '@/components/sections/homepage/FeaturedWorkSection';
import ProcessSection from '@/components/sections/homepage/ProcessSection';
import TestimonialSection from '@/components/sections/homepage/TestimonialSection';
import FinalCtaSection from '@/components/sections/homepage/FinalCtaSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <ServicesSection />
      <FeaturedWorkSection />
      <ProcessSection />
      <TestimonialSection />
      <FinalCtaSection />
    </>
  );
}
