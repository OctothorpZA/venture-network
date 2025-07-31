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

// The main Consulting Detail Page component
export default function ConsultingPage() {
  return (
    <div className="bg-brand-platinum">
      <PageHeader
        title="Strategic Consulting"
        description="Leverage our expertise to create technology roadmaps, conduct architectural reviews, and develop an IT strategy that drives business results."
      />

      <main className="container mx-auto px-6 py-16">
        {/* Features & Benefits Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-oxfordBlue text-center mb-10">Our Consulting Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureItem title="Technology Roadmapping">We help you plan your technology investments and initiatives to align perfectly with your long-term business goals.</FeatureItem>
            <FeatureItem title="Architectural Reviews">Our experts analyze your existing systems to identify bottlenecks, security risks, and opportunities for improvement.</FeatureItem>
            <FeatureItem title="IT Strategy">We work with your leadership to develop a comprehensive IT strategy that reduces costs and creates a competitive advantage.</FeatureItem>
            <FeatureItem title="Due Diligence">Providing technical due diligence for investors and companies considering acquisitions.</FeatureItem>
            <FeatureItem title="Team Augmentation Strategy">We help you define the right strategy for growing your technical team, whether in-house or through partners.</FeatureItem>
            <FeatureItem title="Cloud Cost Optimization">Analyze your cloud spending and implement strategies to significantly reduce your infrastructure costs.</FeatureItem>
          </div>
        </section>

        {/* "Who Is This For?" Section */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-oxfordBlue mb-4">Who Is This For?</h2>
          <p className="text-lg text-shadowBlue max-w-3xl mx-auto">
            Our consulting services are designed for founders who need a technical co-pilot, established businesses looking to optimize their IT strategy, and investors needing expert technical evaluation.
          </p>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold text-oxfordBlue text-center mb-10">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <FaqItem question="What is the typical engagement model?" answer="We offer flexible engagement models, including project-based consulting, monthly retainers for ongoing advice, and one-time architectural reviews." />
            <FaqItem question="Our team is not very technical. Can you still help?" answer="Absolutely. A key part of our role is to translate complex technical concepts into clear, actionable business strategies that your entire team can understand and get behind." />
            <FaqItem question="How do we start a consulting engagement?" answer="It starts with a simple conversation. Contact us to schedule an initial, no-obligation call to discuss your challenges and goals." />
          </div>
        </section>
      </main>
    </div>
  );
}
