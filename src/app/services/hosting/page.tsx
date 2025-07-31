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

// The main Hosting Detail Page component
export default function HostingPage() {
  return (
    <div className="bg-brand-platinum">
      <PageHeader
        title="Managed Hosting"
        description="Secure, scalable, and reliable infrastructure you can count on. We handle the complexities so you can focus on your business."
      />

      <main className="container mx-auto px-6 py-16">
        {/* Features & Benefits Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-oxfordBlue text-center mb-10">Features & Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureItem title="99.9% Uptime SLA">Your business stays online and you never lose revenue due to downtime.</FeatureItem>
            <FeatureItem title="Daily Off-site Backups">Complete peace of mind with your critical data protected against any disaster.</FeatureItem>
            <FeatureItem title="24/7 Security Monitoring">Proactive protection against threats before they can impact your operations.</FeatureItem>
            <FeatureItem title="Scalable Resources">Our infrastructure grows with you, ensuring optimal performance at every stage.</FeatureItem>
            <FeatureItem title="Performance Optimization">We fine-tune every layer of the stack for lightning-fast load times.</FeatureItem>
            <FeatureItem title="Expert Support">Direct access to our infrastructure experts whenever you need assistance.</FeatureItem>
          </div>
        </section>

        {/* "Who Is This For?" Section */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-oxfordBlue mb-4">Who Is This For?</h2>
          <p className="text-lg text-shadowBlue max-w-3xl mx-auto">
            Our managed hosting is ideal for businesses running critical web applications, e-commerce stores, and SaaS platforms that cannot afford downtime.
          </p>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold text-oxfordBlue text-center mb-10">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <FaqItem question="What kind of support is included?" answer="All plans include 24/7 expert support via email and our client portal for any infrastructure-related issues." />
            <FaqItem question="Can you handle high-traffic events?" answer="Absolutely. Our infrastructure is designed to be highly scalable. We can work with you to prepare for anticipated traffic spikes." />
            <FaqItem question="Do you offer migration assistance?" answer="Yes, we provide complimentary migration assistance for most standard application setups to ensure a smooth transition." />
          </div>
        </section>
      </main>
    </div>
  );
}
