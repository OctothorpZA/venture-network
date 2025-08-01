import React from 'react';

// Placeholder Icon Components
const HostingIcon = () => (
  <svg className="w-10 h-10 mb-4 text-[--color-shadow-blue]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>
);

const DevelopmentIcon = () => (
  <svg className="w-10 h-10 mb-4 text-[--color-shadow-blue]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
);

const ConsultingIcon = () => (
  <svg className="w-10 h-10 mb-4 text-[--color-shadow-blue]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
);


// Service Card Component
const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg hover:border-transparent transition-all duration-300">
    {icon}
    <h3 className="text-xl font-bold text-[--color-oxford-blue] mb-2">{title}</h3>
    <p className="text-[--color-shadow-blue]/80">{description}</p>
  </div>
);

/**
 * Renders the Services Section for the homepage.
 * Displays a 3-column grid of the company's core offerings.
 */
const ServicesSection = () => {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[--color-oxford-blue]">
          A Partner for Every Stage of Your Growth
        </h2>
        <p className="text-lg md:text-xl text-[--color-shadow-blue] mt-4 mb-12 max-w-3xl mx-auto">
          We provide the strategic guidance and technical execution needed to turn your vision into a reality.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <ServiceCard 
            icon={<HostingIcon />}
            title="Managed Hosting"
            description="Secure, scalable, and reliable infrastructure that grows with your business, ensuring your applications are always online and performant."
          />
          <ServiceCard 
            icon={<DevelopmentIcon />}
            title="Custom Development"
            description="From complex web applications to minimum viable products, we build tailored software solutions that solve your unique challenges."
          />
          <ServiceCard 
            icon={<ConsultingIcon />}
            title="Strategic Consulting"
            description="Leverage our expertise to create technology roadmaps, conduct architectural reviews, and develop an IT strategy that drives business results."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
