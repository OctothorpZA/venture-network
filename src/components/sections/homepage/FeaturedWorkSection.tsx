import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * A reusable card component for displaying a featured project.
 */
const ProjectCard = ({ title, description, imageUrl, slug }: { title: string; description: string; imageUrl: string; slug: string }) => (
  <Link href={`/work/${slug}`} className="block group overflow-hidden rounded-lg">
    <div className="relative">
      <Image
        src={imageUrl}
        alt={`Screenshot of the ${title} project`}
        width={800}
        height={600}
        className="w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-6 bg-shadowBlue/20">
      <h3 className="text-xl font-bold text-brand-platinum mb-2">{title}</h3>
      <p className="text-brand-platinum/80">{description}</p>
    </div>
  </Link>
);

/**
 * Renders the Featured Work section for the homepage.
 * Displays a grid of selected projects.
 */
const FeaturedWorkSection = () => {
  return (
    <section className="bg-oxfordBlue py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-platinum">
            Transforming Ideas into Reality
          </h2>
          {/* Corrected the unescaped apostrophe in "we've" to "we&apos;ve" */}
          <p className="text-lg md:text-xl text-brand-platinum/80 mt-4 max-w-2xl mx-auto">
            Here is a selection of our work. See how we&apos;ve helped businesses like yours achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProjectCard
            title="Building a Scalable E-commerce Platform"
            description="A custom-built online store with a focus on performance, user experience, and seamless checkout."
            imageUrl="https://placehold.co/800x600/415A77/E0E1DD.png?text=Project+One"
            slug="ecommerce-platform"
          />
          <ProjectCard
            title="MVP for an AI-Powered SaaS Application"
            description="We developed the minimum viable product for a B2B SaaS startup, enabling them to secure their first round of funding."
            imageUrl="https://placehold.co/800x600/415A77/E0E1DD.png?text=Project+Two"
            slug="ai-saas-mvp"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
