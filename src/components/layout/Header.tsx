'use client'; // This directive is necessary because we are using the useState hook.

import React, { useState } from 'react';
import Link from 'next/link';

// Define the navigation links in an array for easy mapping.
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

/**
 * Renders the fully responsive global header for the website.
 * Includes desktop navigation and a mobile hamburger menu.
 */
const Header = () => {
  // State to manage the mobile menu's open/closed status.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-oxfordBlue text-brand-platinum font-sans">
      <nav className="container mx-auto flex items-center justify-between p-6">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wider">
          <Link href="/">Venture Network</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-brand-tangerine transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open navigation menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-oxfordBlue z-50 flex flex-col items-center justify-center">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6" aria-label="Close navigation menu">
             <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
          </button>
          <div className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl hover:text-brand-tangerine transition-colors"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
