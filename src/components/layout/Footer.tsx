'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    agreeToPolicy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showPolicyError, setShowPolicyError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear policy error when user checks the box
    if (name === 'agreeToPolicy' && checked) {
      setShowPolicyError(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToPolicy) {
      setShowPolicyError(true);
      return;
    }
    
    setShowPolicyError(false);
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
      console.log('Newsletter signup:', formData);
      setIsSubscribed(true);
      setFormData({ firstName: '', lastName: '', email: '', agreeToPolicy: false });
    } catch (error) {
      console.error('Subscription failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <footer className="bg-gray-900 text-gray-300 py-4 px-6">
                <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:pl-10">
            {/* Company Info & Social Media */}
            <div className="lg:w-1/4 pl-10">
              <div className="mb-4">
                <Link 
                  href="/"
                  prefetch={true}
                  className="flex items-center mt-[-14px]"
                >
                  <img 
                    src="/SPNC_RFAC_logo_IconPlusAcronymAndFullNameENFR_White_Web.png" 
                    alt="Senior Pride Network Canada / Réseau de la Fierté des personnes aînées du Canada" 
                    className="h-16 w-auto mt-4 mb-5"
                  />
                </Link>
              </div>
              <p className="text-sm leading-relaxed -mt-4 max-w-xs">
                A national organization for 2SLGBTQI+ senior support, connecting communities and empowering organizations across Canada.
              </p>
              <div className="flex space-x-4 mt-2">
                <a href="https://www.facebook.com/profile.php?id=61562126780629" className="text-gray-400 hover:text-fuchsia-400" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebookF} className="text-lg" />
                </a>
                <a href="https://www.instagram.com/spnc.rfac" className="text-gray-400 hover:text-fuchsia-400" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                </a>
                <a href="https://www.linkedin.com/in/spnc-rfac/" className="text-gray-400 hover:text-fuchsia-400" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-lg" />
                </a>
              </div>
            </div>

            {/* Policies */}
            <div className="lg:w-1/6 pl-12">
              <h3 className="font-bold text-white mb-4">Policies</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link 
                    href="/about/policies/privacy-policy" 
                    prefetch={true}
                    className="hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about/policies/terms-of-use" 
                    prefetch={true}
                    className="hover:underline"
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about/policies/accessibility" 
                    prefetch={true}
                    className="hover:underline"
                  >
                    Accessibility Statement
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about/policies/land-acknowledgement" 
                    prefetch={true}
                    className="hover:underline"
                  >
                    Land Acknowledgement
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:w-1/6 pl-4">
              <h3 className="font-bold text-white mb-4">Contacts</h3>
              <ul className="space-y-2 text-sm">
                <li>Email: info@spnc-rfac.ca</li>
                <li>Address: SPNC/RFAC, 10-30 Cleary Ave, Ottawa, ON, K2A 4A1</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="lg:w-1/4 pl-5 pr-8">  
            <h3 className="font-bold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-3">Stay up-to-date with our latest news and resources.</p>
            {isSubscribed ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                <p className="text-sm font-semibold">✓ Successfully subscribed!</p>
                <p className="text-xs mt-1">Thank you for joining our newsletter. You'll receive updates soon.</p>
                <button 
                  onClick={() => setIsSubscribed(false)}
                  className="text-green-600 hover:text-green-800 text-xs underline mt-2"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                </div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="p-2 w-full bg-white text-gray-900 rounded-lg text-sm border-0 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 disabled:opacity-50" 
                />
                <label className="flex items-start gap-2 text-xs">
                  <input 
                    type="checkbox" 
                    name="agreeToPolicy"
                    checked={formData.agreeToPolicy}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    required
                    className="mt-1"
                  />
                  <span>I agree to the <Link href="/about/policies/privacy-policy" className="underline">Privacy Policy</Link>.</span>
                </label>
                {showPolicyError && (
                  <p className="text-red-500 text-xs mt-1">Please agree to the Privacy Policy to continue.</p>
                )}
                <button 
                  type="submit" 
                  disabled={isSubmitting || !formData.email || !formData.agreeToPolicy}
                  className="bg-fuchsia-600 text-white p-2 w-full rounded-lg hover:bg-fuchsia-700 text-sm font-semibold flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Subscribing...
                    </>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}