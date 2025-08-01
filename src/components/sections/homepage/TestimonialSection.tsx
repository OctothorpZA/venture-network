import React from 'react';

/**
 * Renders the Client Testimonial section for the homepage.
 * Features a single, impactful quote to build trust.
 */
const TestimonialSection = () => {
  return (
    <section className="bg-[--color-oxford-blue] py-20 md:py-24">
      <div className="container mx-auto px-6 text-center">
        <blockquote className="max-w-4xl mx-auto">
          <p className="text-2xl md:text-4xl font-medium italic text-[--color-brand-platinum] leading-relaxed">
            &ldquo;Working with Venture Network was a game-changer for our business. Their strategic insight and technical expertise allowed us to launch our platform ahead of schedule and with a level of quality that exceeded all our expectations.&rdquo;
          </p>
        </blockquote>
        <footer className="mt-8">
          <p className="text-xl font-bold text-[--color-brand-platinum]">John Doe</p>
          <p className="text-[--color-brand-platinum]/80">CEO, ExampleCorp</p>
        </footer>
      </div>
    </section>
  );
};

export default TestimonialSection;
