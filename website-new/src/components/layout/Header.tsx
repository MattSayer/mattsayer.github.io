'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/images/headshot-square.jpg"
                alt="Matt Sayer"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">Matt Sayer</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={handleToggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-600 dark:text-gray-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 