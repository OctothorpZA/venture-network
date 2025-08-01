import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// --- Placeholder Data ---
const placeholderProjects = [
  {
    slug: 'ecommerce-platform',
    title: 'Building a Scalable E-commerce Platform',
    description: 'A custom-built online store with a focus on performance, user experience, and seamless checkout.',
    imageUrl: 'https://placehold.co/800x600/415A77/E0E1DD.png?text=Project+One',
  },
  {
    slug: 'ai-saas-mvp',
    title: 'MVP for an AI-Powered SaaS Application',
    description: 'We developed the minimum viable product for a B2B SaaS startup, enabling them to secure their first round of funding.',
    imageUrl: 'https://placehold.co/800x600/415A77/E0E1DD.png?text=Project+Two',
  },
  {
    slug: 'data-analytics-dashboard',
    title: 'Data Analytics Dashboard',
    description: 'A real-time data visualization tool that helps stakeholders make informed business decisions.',
    imageUrl: 'https://placehold.co/800x600/415A77/E0E1DD.png?text=Project+Three',
  },
  {
    slug: 'corporate-website-redesign',
    title: 'Corporate Website Redesign',
    description: 'A complete overhaul of a legacy website, focusing on modern design, accessibility, and SEO performance.',
    imageUrl: 'https://placehold.co/800x600/415A77/E0E1DD.png?text=Project+Four',
  },
];

// --- Reusable Project Card Component ---
const ProjectCard = ({ title, description, imageUrl, slug }: { title: string; description: string; imageUrl: string; slug: string }) => (
  <Link href={`/work/${slug}`} className="block group overflow-hidden rounded-lg bg-[--color-oxford-blue] text-[--color-brand-platinum]">
    <div className="relative aspect-[4/3]">
      <Image
        src={imageUrl}
        alt={`Screenshot of the ${title} project`}
        fill
        className="object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-[--color-brand-platinum]/80">{description}</p>
    </div>
  </Link>
);

// --- The main Work Page component ---
export default function WorkPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[--color-oxford-blue] text-[--color-brand-platinum] py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h1>
          <p className="text-lg md:text-xl text-[--color-brand-platinum]/80 max-w-3xl mx-auto">
            We are proud of the solutions we&apos;ve built and the partnerships we&apos;ve formed. Explore a selection of our projects below to see our expertise in action.
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {placeholderProjects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
