'use client';

import { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { ArrowLeft } from 'lucide-react';

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

export default function JoinCommitteePage() {
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
    }, 5000);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link 
            href="/about/our-team" 
            className="inline-flex items-center text-fuchsia-600 hover:text-fuchsia-700 mb-6 font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Our Team
          </Link>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">Join a Committee</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Help advance our mission by volunteering with one of our committees. Your skills, experience, and passion can make a real difference in the lives of 2SLGBTQI+ seniors across Canada.
              </p>
            </div>

            {/* Committee Information */}
            <div className="mb-8 bg-gradient-to-r from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
              <h2 className="text-xl font-semibold mb-4 text-fuchsia-800">Our Committees</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-blue-800">Governance and Finance Committee</h3>
                  <p className="text-sm text-gray-600">Responsible for organizational governance, financial oversight, and strategic planning.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-emerald-800">Engagement Committee</h3>
                  <p className="text-sm text-gray-600">Focuses on community outreach, member engagement, and building partnerships.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-800">PARE Committee</h3>
                  <p className="text-sm text-gray-600">Dedicated to Policy, Advocacy, Research, and Education initiatives.</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors"
                  />
                </div>

                {/* Province */}
                <div>
                  <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-2">
                    Province/Territory *
                  </label>
                  <select
                    id="province"
                    name="province"
                    required
                    value={formData.province}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors"
                  >
                    <option value="">Select your province/territory</option>
                    {provinces.map(province => (
                      <option key={province} value={province}>{province}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Committees */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Committees of Interest * (Select all that apply)
                </label>
                <div className="space-y-3">
                  {committees.map(committee => (
                    <label key={committee} className="flex items-start p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.committees.includes(committee)}
                        onChange={() => handleCommitteeChange(committee)}
                        className="mt-1 h-4 w-4 text-fuchsia-600 focus:ring-fuchsia-500 border-gray-300 rounded"
                      />
                      <span className="ml-3 text-sm text-gray-700 font-medium">{committee}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Relevant Experience or Skills
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  rows={4}
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="Tell us about any relevant experience, skills, or qualifications that would be valuable to our committees..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors"
                />
              </div>

              {/* Motivation */}
              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to join a committee? *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  rows={4}
                  required
                  value={formData.motivation}
                  onChange={handleInputChange}
                  placeholder="What motivates you to volunteer with SPNC/RFAC committees? How do you hope to contribute?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors"
                />
              </div>

              {/* Availability */}
              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                  Availability and Time Commitment
                </label>
                <textarea
                  id="availability"
                  name="availability"
                  rows={3}
                  value={formData.availability}
                  onChange={handleInputChange}
                  placeholder="How much time can you commit per week/month? Any scheduling preferences or constraints?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors"
                />
              </div>

              {/* Submit Message */}
              {submitMessage && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-700">{submitMessage}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting || formData.committees.length === 0}
                  className="px-8 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors shadow-lg"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}