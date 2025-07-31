'use client'; // Needed for the interactive FAQ accordion

import React, { useState } from 'react';

// Reusable component for the page header
const PageHeader = ({ title, description }: { title: string; description: string; }) => (
  <section className="bg-oxfordBlue text-brand-platinum py-20">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="text-lg md:text-xl text-brand-platinum/80 max-w-3xl mx-auto">{description}</p>
    </div>
  </section>
);

// Reusable component for a feature item
const FeatureItem = ({ title, children }: { title: string; children: React.ReactNode; }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-200">
    <h3 className="text-xl font-bold text-oxfordBlue mb-2">{title}</h3>
    <p className="text-shadowBlue/80">{children}</p>
  </div>
);

// Reusable component for an FAQ item
const FaqItem = ({ question, answer }: { question: string; answer: string; }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left">
        <span className="text-lg font-semibold text-oxfordBlue">{question}</span>
        <span className="text-2xl text-brand-tangerine">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="mt-4 text-shadowBlue/80">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

// The main Development Detail Page component
export default function DevelopmentPage() {
  return (
    <div className="bg-brand-platinum">
      <PageHeader
        title="Custom Development"
        description="From complex web applications to MVPs, we build tailored software solutions that solve your unique business challenges."
      />

      <main className="container mx-auto px-6 py-16">
        {/* Features & Benefits Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-oxfordBlue text-center mb-10">Our Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureItem title="Full-Stack Expertise">We cover the entire development lifecycle, from front-end user interfaces to back-end logic and database architecture.</FeatureItem>
            <FeatureItem title="Agile Methodology">Our iterative process ensures your project stays on track and you have full visibility at every stage.</FeatureItem>
            <FeatureItem title="Clean, Maintainable Code">We write code that is not only functional but also easy to understand, scale, and maintain for the long term.</FeatureItem>
            <FeatureItem title="Modern Technology Stack">We leverage the best of modern technologies like Next.js, TypeScript, and serverless architecture to build for the future.</FeatureItem>
            <FeatureItem title="API & Third-Party Integrations">We seamlessly connect your application with the third-party services and APIs that are critical to your business.</FeatureItem>
            <FeatureItem title="Focus on User Experience">Our development is always guided by a deep understanding of your users&apos; needs and behaviors.</FeatureItem>
          </div>
        </section>

        {/* "Who Is This For?" Section */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-oxfordBlue mb-4">Who Is This For?</h2>
          <p className="text-lg text-shadowBlue max-w-3xl mx-auto">
            Our development services are perfect for funded startups needing an MVP, established businesses looking to build a new product, or companies requiring expert technical talent to augment their team.
          </p>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold text-oxfordBlue text-center mb-10">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <FaqItem question="What technologies do you specialize in?" answer="We specialize in the modern web stack, primarily focusing on TypeScript, React/Next.js for the front-end, and Node.js with serverless technologies for the back-end." />
            <FaqItem question="Do I own the source code?" answer="Yes. Upon final payment, all source code and intellectual property for the project are transferred to you." />
            <FaqItem question="How do you handle project management?" answer="We use an agile approach with regular sprint planning, stand-ups, and retrospectives. You will have a dedicated project manager and full access to our project management tools." />
          </div>
        </section>
      </main>
    </div>
  );
}
