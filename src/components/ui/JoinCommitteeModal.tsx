'use client';

import { useState, useEffect } from 'react';

interface JoinCommitteeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  province: string;
  committees: string[];
  experience: string;
  motivation: string;
  availability: string;
}

const committees = [
  'Governance and Finance Committee',
  'Engagement Committee', 
  'PARE Committee (Policy, Advocacy, Research, and Education)',
];

const provinces = [
  'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 
  'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 
  'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon'
];

export default function JoinCommitteeModal({ isOpen, onClose }: JoinCommitteeModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    province: '',
    committees: [],
    experience: '',
    motivation: '',
    availability: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCommitteeChange = (committee: string) => {
    setFormData(prev => ({
      ...prev,
      committees: prev.committees.includes(committee)
        ? prev.committees.filter(c => c !== committee)
        : [...prev.committees, committee]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Create email body
    const emailBody = `
Committee Volunteer Application

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Province/Territory: ${formData.province}

Committees of Interest:
${formData.committees.map(c => `• ${c}`).join('\n')}

Relevant Experience:
${formData.experience}

Motivation to Join:
${formData.motivation}

Availability:
${formData.availability}

Submitted on: ${new Date().toLocaleDateString()}
    `.trim();

    // Create mailto link
    const subject = encodeURIComponent('Committee Volunteer Application - ' + formData.name);
    const body = encodeURIComponent(emailBody);
    const mailtoLink = `mailto:info@spnc-rfac.ca?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setSubmitMessage('Thank you for showing interest in joining our committee. You will receive a confirmation email.');
    
    // Reset form after a delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        province: '',
        committees: [],
        experience: '',
        motivation: '',
        availability: ''
      });
      setSubmitMessage('');
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

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
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-fuchsia-50 to-purple-50 p-6 rounded-t-2xl border-b border-fuchsia-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Join a Committee</h2>
              <p className="text-gray-600 mt-1">Help advance our mission by volunteering with one of our committees</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white hover:bg-opacity-30 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500"
              />
            </div>

            {/* Province */}
            <div>
              <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-1">
                Province/Territory *
              </label>
              <select
                id="province"
                name="province"
                required
                value={formData.province}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500"
              >
                <option value="">Select your province/territory</option>
                {provinces.map(province => (
                  <option key={province} value={province}>{province}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Committees */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Committees of Interest * (Select all that apply)
            </label>
            <div className="space-y-2">
              {committees.map(committee => (
                <label key={committee} className="flex items-start">
                  <input
                    type="checkbox"
                    checked={formData.committees.includes(committee)}
                    onChange={() => handleCommitteeChange(committee)}
                    className="mt-1 h-4 w-4 text-fuchsia-600 focus:ring-fuchsia-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">{committee}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-4">
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
              Relevant Experience or Skills
            </label>
            <textarea
              id="experience"
              name="experience"
              rows={3}
              value={formData.experience}
              onChange={handleInputChange}
              placeholder="Tell us about any relevant experience, skills, or qualifications..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500"
            />
          </div>

          {/* Motivation */}
          <div className="mb-4">
            <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">
              Why do you want to join a committee? *
            </label>
            <textarea
              id="motivation"
              name="motivation"
              rows={3}
              required
              value={formData.motivation}
              onChange={handleInputChange}
              placeholder="What motivates you to volunteer with SPNC/RFAC committees?"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500"
            />
          </div>

          {/* Availability */}
          <div className="mb-6">
            <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
              Availability and Time Commitment
            </label>
            <textarea
              id="availability"
              name="availability"
              rows={2}
              value={formData.availability}
              onChange={handleInputChange}
              placeholder="How much time can you commit? Any scheduling preferences or constraints?"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500"
            />
          </div>

          {/* Submit Message */}
          {submitMessage && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-700">{submitMessage}</p>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || formData.committees.length === 0}
              className="px-6 py-2 bg-fuchsia-600 hover:bg-fuchsia-700 disabled:bg-gray-400 text-white rounded-lg transition-colors"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}