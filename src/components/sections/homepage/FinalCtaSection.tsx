import React from 'react';
import Link from 'next/link';

/**
 * Renders the final Call-to-Action section for the homepage.
 */
const FinalCtaSection = () => {
  return (
    <section className="bg-[--color-oxford-blue] py-20 md:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[--color-brand-platinum] mb-6">
          Ready to Build Your Future?
        </h2>
        <p className="text-lg text-[--color-brand-platinum]/80 mb-8 max-w-2xl mx-auto">
          Let&apos;s discuss how our expertise can help you achieve your technology goals.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/contact" 
            className="bg-[--color-brand-tangerine] text-[--color-oxford-blue] font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors w-full sm:w-auto"
          >
            Schedule a Consultation
          </Link>
          <Link 
            href="/contact" 
            className="text-[--color-brand-platinum]/90 hover:text-[--color-brand-tangerine] font-medium py-3 px-8 transition-colors w-full sm:w-auto"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
