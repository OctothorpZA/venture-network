import React from 'react';
import Link from 'next/link';

/**
 * Renders the Hero Section for the homepage.
 * It includes the main headline, sub-headline, and a primary call-to-action button.
 */
const HeroSection = () => {
  return (
    <section className="bg-[--color-oxford-blue] text-[--color-brand-platinum]">
      <div className="container mx-auto flex flex-col items-center text-center px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-4">
          Technology That Drives Your Business Forward.
        </h1>
        <p className="text-lg md:text-xl text-[--color-brand-platinum]/80 max-w-3xl mb-8">
          We are an Expert-Led Growth Partner, aligning technology strategy with hands-on execution to help you achieve your goals.
        </p>
        <Link 
          href="/services" 
          className="bg-[--color-brand-tangerine] text-[--color-oxford-blue] font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors"
        >
          Explore Our Services
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
