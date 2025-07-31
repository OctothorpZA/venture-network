import HeroSection from '@/components/sections/homepage/HeroSection';
import SocialProofBar from '@/components/sections/homepage/SocialProofBar';
import ServicesSection from '@/components/sections/homepage/ServicesSection';
import FeaturedWorkSection from '@/components/sections/homepage/FeaturedWorkSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <ServicesSection />
      <FeaturedWorkSection />
      {/* Other homepage sections will be added here in future sprints */}
    </>
  );
}
