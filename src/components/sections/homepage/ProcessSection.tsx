import React from 'react';

/**
 * A card representing a single step in the company's process.
 */
const ProcessStep = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="relative flex-1">
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <span className="text-5xl font-bold text-brand-tangerine mb-4">{number}</span>
      <h3 className="text-xl font-bold text-oxfordBlue mb-2">{title}</h3>
      <p className="text-shadowBlue/80">{description}</p>
    </div>
  </div>
);

/**
 * Renders the "Our Process" section for the homepage.
 * Displays a 3-step visual graphic of the client engagement process.
 */
const ProcessSection = () => {
  return (
    <section className="bg-brand-platinum py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-oxfordBlue">
            A Clear Path to Success
          </h2>
          {/* Corrected the unescaped apostrophe in "project's" to "project&apos;s" */}
          <p className="text-lg md:text-xl text-shadowBlue mt-4 max-w-3xl mx-auto">
            Our process is designed for clarity and results. We collaborate with you at every step to ensure your project&apos;s success.
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
          {/* Decorative connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-shadowBlue/30 transform -translate-y-1/2" style={{top: 'calc(1.25rem)'}}></div>
          
          <ProcessStep 
            number="01"
            title="Discover & Strategize"
            description="We start by understanding your business goals and technical needs to create a comprehensive project roadmap."
          />
          <ProcessStep 
            number="02"
            title="Build & Deploy"
            description="Our team gets to work, building your solution with clean code and deploying it on robust infrastructure."
          />
          <ProcessStep 
            number="03"
            title="Host & Support"
            description="We provide ongoing support and managed hosting to ensure your application remains secure, fast, and reliable."
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
