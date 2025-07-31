import React from 'react';

/**
 * A simple placeholder logo component for the social proof bar.
 */
const PlaceholderLogo = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center h-12 w-40 filter grayscale hover:filter-none transition-all duration-300 cursor-pointer" title={name}>
    {/* This is a placeholder SVG. In a real project, you would use an <Image> component with the client's logo SVG. */}
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
      <text x="60" y="25" textAnchor="middle" className="font-semibold text-lg text-shadowBlue/60 tracking-wider">
        {name}
      </text>
    </svg>
  </div>
);

/**
 * Renders the Social Proof Bar section for the homepage.
 * Displays a heading and a list of trusted partner/client logos.
 */
const SocialProofBar = () => {
  // Placeholder names for the logos
  const logos = ["Innovate Inc.", "TechCorp", "Future Systems", "NextGen", "Alpha Ventures"];

  return (
    // Using brand-platinum for a subtle, professional background.
    <section className="bg-brand-platinum py-16 md:py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-base font-semibold text-shadowBlue mb-10 tracking-wider uppercase">
          Trusted by technology leaders and innovators
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {logos.map(name => <PlaceholderLogo key={name} name={name} />)}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
