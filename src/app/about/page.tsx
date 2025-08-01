import React from 'react';
import Image from 'next/image';

// Reusable component for a team member profile card
const ProfileCard = ({ name, role, bio, imageUrl }: { name: string; role: string; bio: string; imageUrl: string }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
    <div className="relative w-32 h-32 mx-auto mb-4">
      {/* Corrected Image component: Replaced legacy props with `fill` and className */}
      <Image
        src={imageUrl}
        alt={`Profile picture of ${name}`}
        fill
        className="rounded-full object-cover"
      />
    </div>
    <h3 className="text-xl font-bold text-[--color-oxford-blue]">{name}</h3>
    <p className="text-[--color-brand-tangerine] font-semibold mb-2">{role}</p>
    <p className="text-[--color-shadow-blue]/80">{bio}</p>
  </div>
);

// The main About Page component
export default function AboutPage() {
  return (
    <>
      {/* Our Mission Section */}
      <section className="bg-[--color-oxford-blue] text-[--color-brand-platinum] py-20 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Mission</h1>
          <p className="text-lg md:text-xl text-[--color-brand-platinum]/80 max-w-3xl mx-auto">
            Our mission is to be the expert-led growth partner for businesses looking to leverage technology. We align strategic thinking with hands-on execution to build, deploy, and maintain solutions that drive measurable results and create lasting value.
          </p>
        </div>
      </section>

      {/* Meet the Founders Section */}
      <section className="bg-[--color-brand-platinum] py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-oxford-blue]">
              Meet the Founders
            </h2>
            <p className="text-lg md:text-xl text-[--color-shadow-blue] mt-4 max-w-3xl mx-auto">
              We are a team of dedicated professionals passionate about technology and business strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProfileCard
              name="Mansoer Gallie"
              role="Systems & Infrastructure"
              bio="Founder of Octothorp ITWS and a seasoned systems architect with a passion for building robust, scalable infrastructure."
              // Corrected placeholder URL format
              imageUrl="https://placehold.co/200x200/E0E1DD/415A77.png?text=MG"
            />
            <ProfileCard
              name="Jodi A. Adams"
              role="Senior Developer & Consultant"
              bio="A full-stack development expert with a focus on technical leadership and creating elegant, high-performance applications."
              // Corrected placeholder URL format
              imageUrl="https://placehold.co/200x200/E0E1DD/415A77.png?text=JA"
            />
            <ProfileCard
              name="Mikhail Robertson"
              role="Business Strategy Partner"
              bio="With a BCom background, Mikhail bridges the gap between technology and business, focusing on strategic planning and growth."
              // Corrected placeholder URL format
              imageUrl="https://placehold.co/200x200/E0E1DD/415A77.png?text=MR"
            />
          </div>
        </div>
      </section>
    </>
  );
}
