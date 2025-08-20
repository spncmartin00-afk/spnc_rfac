'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const pathname = usePathname();

  const navItems = [
    { href: '/about', label: 'About Us' },
    { href: '/membership', label: 'Membership' },
    { href: '/resources', label: 'Resources' },
    { href: '/training', label: 'Training' },
    { href: '/contact', label: 'Contact' },
    { href: '/donate', label: 'Donate' },
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
            className="h-33 w-auto"
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={true}
              className={`nav-link border-b-2 border-transparent pb-1 hover:text-fuchsia-600 ${
                isActive(item.href) ? 'active' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <button 
            onClick={toggleLanguage}
            className="relative bg-gray-50 rounded-lg p-1 flex items-center transition-colors duration-200"
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
            className="relative bg-gray-200 rounded-lg p-1 flex items-center transition-colors duration-200"
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
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={true}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block nav-link w-full text-center py-2 hover:text-fuchsia-600 ${
                isActive(item.href) ? 'active' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}