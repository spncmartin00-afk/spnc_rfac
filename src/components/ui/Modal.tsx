'use client';

import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  type?: 'success' | 'error' | 'info';
}

export default function Modal({ isOpen, onClose, title, children, type = 'info' }: ModalProps) {
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

  if (!isOpen) return null;

  const getIconAndColors = () => {
    switch (type) {
      case 'success':
        return {
          bgColor: 'bg-green-50',
          iconColor: 'text-green-400',
          titleColor: 'text-green-800',
          buttonColor: 'bg-green-600 hover:bg-green-700',
          icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        };
      case 'error':
        return {
          bgColor: 'bg-red-50',
          iconColor: 'text-red-400',
          titleColor: 'text-red-800',
          buttonColor: 'bg-red-600 hover:bg-red-700',
          icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          )
        };
      default:
        return {
          bgColor: 'bg-blue-50',
          iconColor: 'text-blue-400',
          titleColor: 'text-blue-800',
          buttonColor: 'bg-blue-600 hover:bg-blue-700',
          icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
          )
        };
    }
  };

  const { bgColor, iconColor, titleColor, buttonColor, icon } = getIconAndColors();

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div 
        className="bg-white rounded-lg max-w-md w-full mx-4 shadow-xl"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div className={`p-6 ${bgColor} rounded-t-lg`}>
          <div className="flex items-center">
            <div className={`flex-shrink-0 ${iconColor}`}>
              {icon}
            </div>
            <div className="ml-3">
              <h3 className={`text-lg font-semibold ${titleColor}`}>
                {title}
              </h3>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="text-gray-700">
            {children}
          </div>
          
          <div className="mt-6 flex justify-end">
            <button 
              onClick={onClose}
              className={`px-4 py-2 ${buttonColor} text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2`}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}