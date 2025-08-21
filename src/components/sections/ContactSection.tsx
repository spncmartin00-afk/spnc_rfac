'use client';

import { useState } from 'react';

interface ContactSectionProps {
  isActive: boolean;
}

export default function ContactSection({ isActive }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className={`section ${isActive ? 'active' : ''}`}>
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">We'd Love to Hear From You</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Whether you have questions about our services, want to volunteer, or need support, our team is ready to help. Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>
      
      <div className="mt-12 flex justify-center">
        <div className="bg-white p-8 rounded-2xl max-w-2xl w-full">
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-fuchsia-600"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-fuchsia-600"
              />
            </div>
            
            <div>
              <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-1">
                Organization
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-fuchsia-600"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-fuchsia-600"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-fuchsia-600 text-white py-3 rounded-lg font-semibold hover:bg-fuchsia-700"
            >
              Send Message
            </button>
          </form>
        </div>
        
       
      </div>
    </section>
  );
}