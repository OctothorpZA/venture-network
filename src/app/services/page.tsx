import React from 'react';
import Link from 'next/link';

// Reusable card for the services landing page
const ServiceIntroCard = ({ href, title, description }: { href: string; title: string; description: string; }) => (
  <Link href={href} className="block bg-white p-8 rounded-lg border border-gray-200 hover:shadow-xl hover:border-transparent transition-all duration-300 group">
    <h3 className="text-2xl font-bold text-oxfordBlue mb-2">{title}</h3>
    <p className="text-shadowBlue/80 mb-4">{description}</p>
    <span className="font-bold text-brand-tangerine group-hover:underline">Learn More &rarr;</span>
  </Link>
);

// The main Services Landing Page component
export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-oxfordBlue text-brand-platinum py-20 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl text-brand-platinum/80 max-w-3xl mx-auto">
            We offer a suite of services designed to provide strategic guidance and flawless technical execution, ensuring your technology becomes your greatest asset.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-brand-platinum py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceIntroCard
              href="/services/hosting"
              title="Managed Hosting"
              description="Secure, scalable, and reliable infrastructure that grows with your business, ensuring your applications are always online and performant."
            />
            <ServiceIntroCard
              href="/services/development"
              title="Custom Development"
              description="From complex web applications to MVPs, we build tailored software solutions that solve your unique business challenges."
            />
            <ServiceIntroCard
              href="/services/consulting"
              title="Strategic Consulting"
              description="Leverage our expertise to create technology roadmaps, conduct architectural reviews, and develop an IT strategy that drives results."
            />
          </div>
        </div>
      </section>
    </>
  );
}
