'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isTrainingDropdownOpen, setIsTrainingDropdownOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const pathname = usePathname();



  const aboutDropdownItems = [
    { href: '/about/our-story', label: 'Our Story' },
    { href: '/about/our-mandate', label: 'Our Mandate' },
    { href: '/about/mission-vision-values', label: 'Mission, Vision & Values' },
    { href: '/about/our-team', label: 'Our Team' },
  ];

  const resourcesDropdownItems = [
    { href: '/resources', label: 'Landing Page' },
    { href: '/frontline', label: 'Frontline Workers' },
    { href: '/allied', label: 'Allied Orgs' },
    { href: '/seniors', label: 'Seniors' },
    { href: '/community-map', label: 'Community Map' },
  ];

  const trainingDropdownItems = [
    { href: '/training/workshops', label: 'Training & Workshops' },
    { href: '/training/consulting', label: 'Consulting & Policy Review' },
  ];

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

        <div className="hidden lg:flex items-center space-x-6">
          {/* About Us Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
              onBlur={() => setTimeout(() => setIsAboutDropdownOpen(false), 150)}
              className={`nav-link border-b-2 border-transparent pb-1 hover:text-fuchsia-600 flex items-center space-x-1 font-semibold ${
                (pathname.startsWith('/about')) ? 'active' : ''
              }`}
            >
              <span>About Us</span>
              <FontAwesomeIcon 
                icon={faChevronDown} 
                className={`w-3 h-3 transition-transform duration-200 ${
                  isAboutDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {isAboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                {aboutDropdownItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-fuchsia-50 hover:text-fuchsia-600 transition-colors duration-200 text-base"
                    onClick={() => setIsAboutDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
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

          {/* Resources Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsResourcesDropdownOpen(!isResourcesDropdownOpen)}
              onBlur={() => setTimeout(() => setIsResourcesDropdownOpen(false), 150)}
              className={`nav-link border-b-2 border-transparent pb-1 hover:text-fuchsia-600 flex items-center space-x-1 font-semibold ${
                (pathname.startsWith('/resources') || pathname.startsWith('/frontline') || pathname.startsWith('/allied') || 
                 pathname.startsWith('/seniors') || pathname.startsWith('/community-map')) ? 'active' : ''
              }`}
            >
              <span>Resources</span>
              <FontAwesomeIcon 
                icon={faChevronDown} 
                className={`w-3 h-3 transition-transform duration-200 ${
                  isResourcesDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {isResourcesDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                {resourcesDropdownItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-fuchsia-50 hover:text-fuchsia-600 transition-colors duration-200 text-base"
                    onClick={() => setIsResourcesDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Training Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsTrainingDropdownOpen(!isTrainingDropdownOpen)}
              onBlur={() => setTimeout(() => setIsTrainingDropdownOpen(false), 150)}
              className={`nav-link border-b-2 border-transparent pb-1 hover:text-fuchsia-600 flex items-center space-x-1 font-semibold ${
                pathname.startsWith('/training') ? 'active' : ''
              }`}
            >
              <span>Training</span>
              <FontAwesomeIcon 
                icon={faChevronDown} 
                className={`w-3 h-3 transition-transform duration-200 ${
                  isTrainingDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {isTrainingDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                {trainingDropdownItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-fuchsia-50 hover:text-fuchsia-600 transition-colors duration-200 text-base"
                    onClick={() => setIsTrainingDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
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

        <div className="hidden lg:flex items-center space-x-4">
          <button 
            onClick={toggleLanguage}
            className="relative bg-gray-50 rounded-lg p-1 flex items-center transition-colors duration-200 cursor-pointer"
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
          <div className="border-b border-gray-200 pb-2">
            <button
              onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
              className={`block nav-link w-full text-center py-2 hover:text-fuchsia-600 flex items-center justify-center space-x-1 font-semibold ${
                (pathname.startsWith('/about')) ? 'active' : ''
              }`}
            >
              <span>About Us</span>
              <FontAwesomeIcon 
                icon={faChevronDown} 
                className={`w-3 h-3 transition-transform duration-200 ${
                  isAboutDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {isAboutDropdownOpen && (
              <div className="mt-2 space-y-1">
                {aboutDropdownItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block nav-link w-full text-center py-2 pl-4 hover:text-fuchsia-600 text-base"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsAboutDropdownOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
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
          
          {/* Mobile Resources Dropdown */}
          <div className="border-t border-gray-200 pt-2">
            <button
              onClick={() => setIsResourcesDropdownOpen(!isResourcesDropdownOpen)}
              className={`block nav-link w-full text-center py-2 hover:text-fuchsia-600 flex items-center justify-center space-x-1 font-semibold ${
                (pathname.startsWith('/resources') || pathname.startsWith('/frontline') || pathname.startsWith('/allied') || 
                 pathname.startsWith('/seniors') || pathname.startsWith('/community-map')) ? 'active' : ''
              }`}
            >
              <span>Resources</span>
              <FontAwesomeIcon 
                icon={faChevronDown} 
                className={`w-3 h-3 transition-transform duration-200 ${
                  isResourcesDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {isResourcesDropdownOpen && (
              <div className="mt-2 space-y-1">
                {resourcesDropdownItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block nav-link w-full text-center py-2 pl-4 hover:text-fuchsia-600 text-base"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsResourcesDropdownOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Training Dropdown */}
          <div className="border-t border-gray-200 pt-2">
            <button
              onClick={() => setIsTrainingDropdownOpen(!isTrainingDropdownOpen)}
              className={`block nav-link w-full text-center py-2 hover:text-fuchsia-600 flex items-center justify-center space-x-1 font-semibold ${
                pathname.startsWith('/training') ? 'active' : ''
              }`}
            >
              <span>Training</span>
              <FontAwesomeIcon 
                icon={faChevronDown} 
                className={`w-3 h-3 transition-transform duration-200 ${
                  isTrainingDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {isTrainingDropdownOpen && (
              <div className="mt-2 space-y-1">
                {trainingDropdownItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block nav-link w-full text-center py-2 pl-4 hover:text-fuchsia-600 text-base"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsTrainingDropdownOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
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