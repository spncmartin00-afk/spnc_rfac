'use client';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  organization: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  organization?: string;
  email?: string;
  message?: string;
}

export default function ConsultingPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    organization: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const fieldName = id.replace('consulting-', '') as keyof FormData;
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
    // Clear error when user starts typing
    if (errors[fieldName]) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: ''
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.organization.trim()) newErrors.organization = 'Organization is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If validation passes, you can submit the form
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will be in touch shortly.');
    
    // Reset form
    setFormData({
      name: '',
      organization: '',
      email: '',
      message: ''
    });
    setErrors({});
  };
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r via-orange-500 via-purple-600 from-red-500 to-pink-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Consulting & Policy Review</h1>
            <p className="text-xl text-purple-100">
              Move beyond training to create lasting change with our consulting services. We provide expert guidance to audit your policies, assess your organizational culture, and build a strategic roadmap for inclusion.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl py-12">
          <Link 
            href="/training" 
            className="inline-flex items-center text-fuchsia-600 hover:text-fuchsia-700 mb-6 font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Training
          </Link>
          <div className="bg-white rounded-2xl p-8">
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Policy & Program Review</h3>
                <p className="text-gray-600 mb-4">Our team will conduct a thorough review of your existing policies, procedures, and programs to identify gaps and provide concrete recommendations for creating more inclusive and equitable outcomes for 2SLGBTQI+ seniors.</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Review of intake forms and procedures.</li>
                  <li>Analysis of language in communications and policies.</li>
                  <li>Recommendations for program adjustments.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Organizational Assessment</h3>
                <p className="text-gray-600 mb-4">We'll help you understand your starting point. This service includes a comprehensive assessment of your organization's readiness for change, focusing on cultural climate, staff knowledge, and leadership commitment.</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Confidential staff and stakeholder interviews.</li>
                  <li>Reporting on key strengths and areas for improvement.</li>
                  <li>Development of a strategic implementation plan.</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-center">Ready to get started?</h3>
              <p className="text-gray-600 max-w-xl mx-auto mb-6 text-center">Fill out the form below to tell us about your needs, and a member of our team will be in touch shortly.</p>
              <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="consulting-name" className="block font-bold mb-2">Your Name *</label>
                  <input 
                    type="text" 
                    id="consulting-name" 
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="consulting-org" className="block font-bold mb-2">Organization *</label>
                  <input 
                    type="text" 
                    id="consulting-org" 
                    required
                    value={formData.organization}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg ${errors.organization ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.organization && <p className="text-red-500 text-sm mt-1">{errors.organization}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="consulting-email" className="block font-bold mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    id="consulting-email" 
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="consulting-message" className="block font-bold mb-2">Your Needs *</label>
                  <textarea 
                    id="consulting-message" 
                    rows={5} 
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full bg-fuchsia-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-700 text-lg">Submit Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}