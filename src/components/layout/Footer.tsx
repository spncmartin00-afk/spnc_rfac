'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    agreeToPolicy: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', formData);
  };


  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Company Info & Social Media */}
          <div className="lg:col-span-2">
            <Link 
              href="/"
              prefetch={true}
              className="flex items-center"
            >
              <img 
                src="/SPNC_RFAC_logo_IconPlusAcronymAndFullNameENFR_White_Web.png" 
                alt="Senior Pride Network Canada / Réseau de la Fierté des personnes aînées du Canada" 
                className="h-30 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              A national organization for 2SLGBTQI+ senior support, connecting communities and empowering organizations across Canada.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.facebook.com/profile.php?id=61562126780629" className="text-gray-400 hover:text-fuchsia-400" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} className="text-lg" />
              </a>
              <a href="https://x.com/SPNC_RFAC" className="text-gray-400 hover:text-fuchsia-400" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} className="text-lg" />
              </a>
              <a href="https://www.instagram.com/spnc.rfac" className="text-gray-400 hover:text-fuchsia-400" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/about/our-story" 
                  prefetch={true}
                  className="hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/membership" 
                  prefetch={true}
                  className="hover:underline"
                >
                  Membership
                </Link>
              </li>
              <li>
                <Link 
                  href="/resources" 
                  prefetch={true}
                  className="hover:underline"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link 
                  href="/training" 
                  prefetch={true}
                  className="hover:underline"
                >
                  Training
                </Link>
              </li>
              <li>
                <Link 
                  href="/donate" 
                  prefetch={true}
                  className="hover:underline"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-bold text-white mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/privacy" 
                  prefetch={true}
                  className="hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/land-acknowledgement" 
                  prefetch={true}
                  className="hover:underline"
                >
                  Land Acknowledgement
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Contacts</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/contact" 
                  prefetch={true}
                  className="hover:underline"
                >
                  Contact Us
                </Link>
              </li>
              <li>Email: info@spnc-rfac.ca</li>
              <li>Address: SPNC/RFAC, 10-30 Ave. Cleary Ave., Ottawa, ON, K2A 4A1</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:w-4/3">  
            <h3 className="font-bold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-3">Stay up-to-date with our latest news and resources.</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <input 
                  type="text" 
                  name="firstName"
                  placeholder="First name" 
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="p-2 w-full bg-white text-gray-900 rounded-lg text-sm border-0 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" 
                />
                <input 
                  type="text" 
                  name="lastName"
                  placeholder="Last name" 
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="p-2 w-full bg-white text-gray-900 rounded-lg text-sm border-0 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" 
                />
              </div>
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                value={formData.email}
                onChange={handleInputChange}
                className="p-2 w-full bg-white text-gray-900 rounded-lg text-sm border-0 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" 
              />
              <label className="flex items-start gap-2 text-xs">
                <input 
                  type="checkbox" 
                  name="agreeToPolicy"
                  checked={formData.agreeToPolicy}
                  onChange={handleInputChange}
                  className="mt-1"
                />
                <span>I agree to the <Link href="/privacy" className="underline">Privacy Policy</Link>.</span>
              </label>
              <button 
                type="submit" 
                className="bg-fuchsia-600 text-white p-2 w-full rounded-lg hover:bg-fuchsia-700 text-sm font-semibold"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-6 text-xs text-gray-400">&copy; 2024 Senior Pride Network Canada. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}