'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-3">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex-1">
          <p className="text-gray-700 text-xs sm:text-sm">
            This website uses cookies to provide necessary site functionality and to improve your experience. 
            By using this website, you agree to our use of cookies.
          </p>
        </div>
        <div className="flex gap-2">
        <button
            onClick={handleAccept}
            className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-medium py-1.5 px-4 rounded text-sm transition-colors duration-200 whitespace-nowrap"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-1.5 px-4 rounded text-sm transition-colors duration-200 whitespace-nowrap"
          >
            Decline
          </button>

        </div>
      </div>
    </div>
  );
}