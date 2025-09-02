'use client';

import { useEffect } from 'react';
import { StaffMember } from '@/lib/boardData';

interface StaffBiographyModalProps {
  isOpen: boolean;
  onClose: () => void;
  staffMember: StaffMember | null;
}

export default function StaffBiographyModal({ isOpen, onClose, staffMember }: StaffBiographyModalProps) {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !staffMember) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      {/* Transparent Backdrop */}
      <div 
        className="absolute inset-0"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full mx-4 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Header with photo and basic info */}
        <div className={`bg-gradient-to-r ${staffMember.gradientColors.from} ${staffMember.gradientColors.to} p-6 rounded-t-2xl border-b ${staffMember.gradientColors.border}`}>
          <div className="flex items-center">
            <img 
              src={staffMember.image} 
              alt={`Professional headshot of ${staffMember.name}`} 
              className="w-24 h-24 rounded-full mr-6 object-cover border-4 border-white shadow-lg" 
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{staffMember.name}</h2>
              <p className="text-sm text-gray-600 mb-1">{staffMember.pronouns}</p>
              <p className={`text-lg font-semibold ${staffMember.gradientColors.text}`}>{staffMember.role}</p>
            </div>
            {/* Close button */}
            <button 
              onClick={onClose}
              className="ml-auto p-2 hover:bg-white hover:bg-opacity-30 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Biography content */}
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Biography</h3>
          <div className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
            {staffMember.biography}
          </div>
          
          <div className="mt-6 flex justify-end">
            <button 
              onClick={onClose}
              className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}