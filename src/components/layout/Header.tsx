'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img 
            src="/SPNC_RFAC_logo_IconPlusAcronymAndFullNameENFR_RGB_Web.png" 
            alt="Senior Pride Network Canada / Réseau de la Fierté des personnes aînées du Canada" 
            className="h-30 w-auto"
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-4">
          {/* About Us Dropdown */}
          <div className="relative"
            onMouseEnter={() => setIsAboutDropdownOpen(true)}
            onMouseLeave={() => setIsAboutDropdownOpen(false)}
          >
            <button
              className={`nav-link border-b-2 border-transparent pb-1 hover:text-fuchsia-600 font-semibold flex items-center space-x-1 ${
                isActive('/about') ? 'active' : ''
              }`}
              aria-expanded={isAboutDropdownOpen}
              aria-haspopup="true"
            >
              <span>About Us</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            {isAboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                <Link
                  href="/about/our-story"
                  className="block px-4 py-2 text-gray-700 hover:bg-fuchsia-50 hover:text-fuchsia-600 transition-colors"
                >
                  Our Story
                </Link>
                <Link
                  href="/about/our-mandate"
                  className="block px-4 py-2 text-gray-700 hover:bg-fuchsia-50 hover:text-fuchsia-600 transition-colors"
                >
                  Our Mandate
                </Link>
                <Link
                  href="/about/mission-vision-values"
                  className="block px-4 py-2 text-gray-700 hover:bg-fuchsia-50 hover:text-fuchsia-600 transition-colors"
                >
                  Mission, Vision & Values
                </Link>
                <Link
                  href="/about/our-team"
                  className="block px-4 py-2 text-gray-700 hover:bg-fuchsia-50 hover:text-fuchsia-600 transition-colors"
                >
                  Our Team
                </Link>
                <Link
                  href="/about/communications"
                  className="block px-4 py-2 text-gray-700 hover:bg-fuchsia-50 hover:text-fuchsia-600 transition-colors"
                >
                  Communications
                </Link>
                <Link
                  href="/about/policies"
                  className="block px-4 py-2 text-gray-700 hover:bg-fuchsia-50 hover:text-fuchsia-600 transition-colors"
                >
                  Policies
                </Link>
              </div>
            )}
          </div>

          {/* Membership Link */}
          <Link
            href="/membership"
            prefetch={true}
            className={`nav-link border-b-2 border-transparent pb-1 hover:text-fuchsia-600 font-semibold ${
              isActive('/membership') ? 'active' : ''
            }`}
          >
            Membership
          </Link>


          {/* Resources Link */}
          <Link
            href="/resources"
            prefetch={true}
            className={`nav-link border-b-2 border-transparent pb-1 hover:text-fuchsia-600 font-semibold ${
              isActive('/resources') ? 'active' : ''
            }`}
          >
            Resources
          </Link>

          {/* Training Link */}
          <Link
            href="/training"
            prefetch={true}
            className={`nav-link border-b-2 border-transparent pb-1 hover:text-fuchsia-600 font-semibold ${
              isActive('/training') ? 'active' : ''
            }`}
          >
            Training
          </Link>

          <Link
            href="/contact"
            prefetch={true}
            className={`nav-link border-b-2 border-transparent pb-1 hover:text-fuchsia-600 font-semibold ${
              isActive('/contact') ? 'active' : ''
            }`}
          >
            Contact
          </Link>
          <Link
            href="/donate"
            prefetch={true}
            className={`nav-link border-b-2 border-transparent pb-1 hover:text-fuchsia-600 font-semibold ${
              isActive('/donate') ? 'active' : ''
            }`}
          >
            Donate
          </Link>
        </div>

        <div className="hidden lg:flex items-center">
          <button 
            onClick={toggleLanguage}
            className="relative bg-gray-50 rounded-lg p-1 flex items-center transition-colors duration-200 cursor-pointer ml-4"
          >
            <span className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
              language === 'en' 
                ? 'bg-white text-gray-800 shadow-sm' 
                : 'text-gray-600'
            }`}>
              EN
            </span>
            <span className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
              language === 'fr' 
                ? 'bg-white text-gray-800 shadow-sm' 
                : 'text-gray-600'
            }`}>
              FR
            </span>
          </button>
        </div>

        <div className="lg:hidden flex items-center space-x-4">
          <button 
            onClick={toggleLanguage}
            className="relative bg-gray-200 rounded-lg p-1 flex items-center transition-colors duration-200 cursor-pointer"
          >
            <span className={`px-2 py-1 rounded-md text-xs font-medium transition-all duration-200 ${
              language === 'en' 
                ? 'bg-white text-gray-800 shadow-sm' 
                : 'text-gray-600'
            }`}>
              EN
            </span>
            <span className={`px-2 py-1 rounded-md text-xs font-medium transition-all duration-200 ${
              language === 'fr' 
                ? 'bg-white text-gray-800 shadow-sm' 
                : 'text-gray-600'
            }`}>
              FR
            </span>
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-2 text-center">
          {/* Mobile About Us Dropdown */}
          <div className="space-y-2">
            <button
              onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
              className={`block nav-link w-full text-center py-2 hover:text-fuchsia-600 font-semibold flex items-center justify-center space-x-1 ${
                isActive('/about') ? 'active' : ''
              }`}
            >
              <span>About Us</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Mobile Dropdown Items */}
            {isAboutDropdownOpen && (
              <div className="bg-gray-50 rounded-lg py-2 space-y-1">
                <Link
                  href="/about/our-story"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 px-4 text-gray-700 hover:text-fuchsia-600 transition-colors"
                >
                  Our Story
                </Link>
                <Link
                  href="/about/our-mandate"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 px-4 text-gray-700 hover:text-fuchsia-600 transition-colors"
                >
                  Our Mandate
                </Link>
                <Link
                  href="/about/mission-vision-values"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 px-4 text-gray-700 hover:text-fuchsia-600 transition-colors"
                >
                  Mission, Vision & Values
                </Link>
                <Link
                  href="/about/our-team"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 px-4 text-gray-700 hover:text-fuchsia-600 transition-colors"
                >
                  Our Team
                </Link>
                <Link
                  href="/about/communications"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 px-4 text-gray-700 hover:text-fuchsia-600 transition-colors"
                >
                  Communications
                </Link>
                <Link
                  href="/about/policies"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 px-4 text-gray-700 hover:text-fuchsia-600 transition-colors"
                >
                  Policies
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Membership Link */}
          <Link
            href="/membership"
            prefetch={true}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block nav-link w-full text-center py-2 hover:text-fuchsia-600 font-semibold ${
              isActive('/membership') ? 'active' : ''
            }`}
          >
            Membership
          </Link>
          

          {/* Mobile Resources Link */}
          <Link
            href="/resources"
            prefetch={true}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block nav-link w-full text-center py-2 hover:text-fuchsia-600 font-semibold ${
              isActive('/resources') ? 'active' : ''
            }`}
          >
            Resources
          </Link>

          {/* Mobile Training Link */}
          <Link
            href="/training"
            prefetch={true}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block nav-link w-full text-center py-2 hover:text-fuchsia-600 font-semibold ${
              isActive('/training') ? 'active' : ''
            }`}
          >
            Training
          </Link>

          <Link
            href="/contact"
            prefetch={true}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block nav-link w-full text-center py-2 hover:text-fuchsia-600 font-semibold ${
              isActive('/contact') ? 'active' : ''
            }`}
          >
            Contact
          </Link>
          <Link
            href="/donate"
            prefetch={true}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block nav-link w-full text-center py-2 hover:text-fuchsia-600 font-bold ${
              isActive('/donate') ? 'active' : ''
            }`}
          >
            Donate
          </Link>
        </div>
      )}
    </header>
  );
}