import React from 'react';
import Link from 'next/link';

// Define link groups for easier management and mapping.
const companyLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms-of-service' },
];

/**
 * Renders the global footer for the website.
 * Includes navigation, legal links, and copyright information.
 */
const Footer = () => {
  return (
    <footer className="bg-oxfordBlue text-brand-platinum font-sans">
      <div className="container mx-auto px-6 py-12">
        {/* Main footer content with responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold tracking-wider mb-4">Venture Network</h3>
            <p className="text-brand-platinum/80 pr-4">
              Expert-Led Growth Partner: Aligning technology strategy with hands-on execution.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-brand-platinum/80 hover:text-brand-tangerine transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-brand-platinum/80 hover:text-brand-tangerine transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
              {/* Socials can be added here or in a new column */}
              <li className="pt-4 font-bold">Socials</li>
              <li><span className="text-brand-platinum/80">LinkedIn</span></li>
              <li><span className="text-brand-platinum/80">Twitter</span></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-shadowBlue/50 mt-8">
        <div className="container mx-auto px-6 py-4 text-center text-sm text-brand-platinum/60">
          <p>© 2025 Venture Network. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
