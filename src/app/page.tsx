import HeroSection from '@/components/sections/homepage/HeroSection';
import SocialProofBar from '@/components/sections/homepage/SocialProofBar';
import ServicesSection from '@/components/sections/homepage/ServicesSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <ServicesSection />
      {/* Other homepage sections will be added here in future sprints */}
    </>
  );
}
