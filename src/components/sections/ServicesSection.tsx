'use client';

import { useState } from 'react';

interface ServicesSectionProps {
  isActive: boolean;
}

export default function ServicesSection({ isActive }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section className={`section ${isActive ? 'active' : ''}`}>
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Training & Services</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Professional development and training opportunities for organizations serving 2SLGBTQI+ older adults.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <button 
          onClick={() => setActiveTab('overview')}
          className={`nav-sub-link border-b-2 pb-1 text-lg ${activeTab === 'overview' ? 'border-fuchsia-600 text-fuchsia-600' : 'border-transparent text-gray-600 hover:text-fuchsia-600'}`}
        >
          Services Overview
        </button>
        <button 
          onClick={() => setActiveTab('training')}
          className={`nav-sub-link border-b-2 pb-1 text-lg ${activeTab === 'training' ? 'border-fuchsia-600 text-fuchsia-600' : 'border-transparent text-gray-600 hover:text-fuchsia-600'}`}
        >
          Training & Workshops
        </button>
        <button 
          onClick={() => setActiveTab('consulting')}
          className={`nav-sub-link border-b-2 pb-1 text-lg ${activeTab === 'consulting' ? 'border-fuchsia-600 text-fuchsia-600' : 'border-transparent text-gray-600 hover:text-fuchsia-600'}`}
        >
          Consulting & Policy Review
        </button>
      </div>

      {activeTab === 'overview' && (
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div 
            className="card bg-white p-8 rounded-2xl text-center cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setActiveTab('training')}
          >
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold mb-2">Training & Workshops</h3>
            <p className="text-gray-600">On-demand learning and custom sessions to build cultural competency and skills.</p>
            <span className="mt-4 inline-block text-fuchsia-600 font-semibold hover:text-fuchsia-800">Learn More →</span>
          </div>
          <div 
            className="card bg-white p-8 rounded-2xl text-center cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setActiveTab('consulting')}
          >
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold mb-2">Consulting & Policy Review</h3>
            <p className="text-gray-600">Expert guidance to embed inclusive practices into your organizational structure.</p>
            <span className="mt-4 inline-block text-fuchsia-600 font-semibold hover:text-fuchsia-800">Learn More →</span>
          </div>
        </div>
      )}

      {activeTab === 'training' && (
        <div className="mt-12 bg-white p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Training & Workshops</h2>
          <p className="text-gray-600 mb-8">We offer a range of workshops and on-demand training to help your organization and staff become more affirming and knowledgeable. Our sessions are co-created with queer elders to ensure a community-centered approach.</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg">
              <span className="text-sm font-bold text-fuchsia-600 bg-fuchsia-100 py-1 px-2 rounded">Workshop</span>
              <h3 className="text-xl font-bold mt-2 mb-2">Foundations of Cultural Competency</h3>
              <p className="text-gray-600 mb-4">A 3-hour interactive session covering the basics of 2SLGBTQI+ terminology, history, and best practices in service provision for older adults.</p>
              <button className="bg-fuchsia-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-fuchsia-700">Book Workshop</button>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg">
              <span className="text-sm font-bold text-blue-600 bg-blue-100 py-1 px-2 rounded">E-Learning</span>
              <h3 className="text-xl font-bold mt-2 mb-2">Advanced Policy & Inclusion</h3>
              <p className="text-gray-600 mb-4">A self-paced, online module designed for managers and policy-makers, focusing on embedding inclusive language and practices into organizational policy.</p>
              <button className="bg-blue-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-blue-700">Explore Module</button>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <span className="text-sm font-bold text-green-600 bg-green-100 py-1 px-2 rounded">On-Demand</span>
              <h3 className="text-xl font-bold mt-2 mb-2">Webinar: Cultural Competency in Queer Senior Care</h3>
              <p className="text-gray-600 mb-4">Monthly webinars addressing specific topics and challenges in providing culturally competent care to 2SLGBTQI+ seniors.</p>
              <button className="bg-green-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-green-700">Register Now</button>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <span className="text-sm font-bold text-purple-600 bg-purple-100 py-1 px-2 rounded">Module Series</span>
              <h3 className="text-xl font-bold mt-2 mb-2">On-Demand Training Modules</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2 mb-4">
                <li>Module 1: Introduction to 2SLGBTQI+ Aging</li>
                <li>Module 2: Mental Health & Well-being for Queer Seniors</li>
                <li>Module 3: Addressing Ageism & Homophobia</li>
              </ul>
              <button className="bg-purple-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-purple-700">Start Modules</button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-2">Looking for something specific?</h3>
            <p className="text-gray-600 mb-4">We offer custom training tailored to your organization's unique needs. Get in touch to learn more.</p>
            <button className="bg-fuchsia-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-700">Request Custom Training</button>
          </div>
        </div>
      )}

      {activeTab === 'consulting' && (
        <div className="mt-12 bg-white p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Consulting & Policy Review</h2>
          <p className="text-gray-600 mb-8">Move beyond training to create lasting change with our consulting services. We provide expert guidance to audit your policies, assess your organizational culture, and build a strategic roadmap for inclusion.</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Policy & Program Review</h3>
              <p className="text-gray-600 mb-4">Our team will conduct a thorough review of your existing policies, procedures, and programs to identify gaps and provide concrete recommendations for creating more inclusive and equitable outcomes for 2SLGBTQI+ seniors.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Review of intake forms and procedures</li>
                <li>Assessment of organizational policies and practices</li>
                <li>Analysis of service delivery approaches</li>
                <li>Identification of barriers and gaps</li>
                <li>Comprehensive recommendations report</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-2">Organizational Culture Assessment</h3>
              <p className="text-gray-600 mb-4">Understanding your current organizational culture is key to creating meaningful change. We'll work with your team to assess where you are and develop a roadmap for where you want to be.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Staff surveys and interviews</li>
                <li>Culture assessment tools</li>
                <li>Leadership readiness evaluation</li>
                <li>Change management planning</li>
                <li>Implementation timeline and milestones</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Ready to Get Started?</h3>
            <p className="text-gray-600 max-w-xl mx-auto mb-6 text-center">Fill out the form below to tell us about your needs, and a member of our team will be in touch shortly.</p>
            
            <form className="max-w-xl mx-auto">
              <div className="mb-4">
                <label htmlFor="consulting-name" className="block font-bold mb-2">Your Name</label>
                <input type="text" id="consulting-name" className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label htmlFor="consulting-org" className="block font-bold mb-2">Organization</label>
                <input type="text" id="consulting-org" className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label htmlFor="consulting-email" className="block font-bold mb-2">Email Address</label>
                <input type="email" id="consulting-email" className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label htmlFor="consulting-message" className="block font-bold mb-2">Your Needs</label>
                <textarea id="consulting-message" rows={5} className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
              </div>
              <button type="submit" className="w-full bg-fuchsia-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-700 text-lg">Submit Inquiry</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}