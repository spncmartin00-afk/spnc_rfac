'use client';

import { useState, useEffect } from 'react';

interface MembershipSectionProps {
  isActive: boolean;
}

const memberOrganizations = [
  { id: 1, name: 'BC Senior Pride Society', province: 'British Columbia' },
  { id: 2, name: 'Calgary Elder Services', province: 'Alberta' },
  { id: 3, name: 'Manitoba Queer Seniors Alliance', province: 'Manitoba' },
  { id: 4, name: 'Ontario Senior Care Network', province: 'Ontario' },
  { id: 5, name: 'Quebec 2SLGBTQI+ Aînés', province: 'Quebec' },
  { id: 6, name: 'Nova Scotia Pride Elders', province: 'Nova Scotia' },
  { id: 7, name: 'Saskatchewan Seniors United', province: 'Saskatchewan' },
  { id: 8, name: 'Alberta Elder Support', province: 'Alberta' },
  { id: 9, name: 'Vancouver Island Elders', province: 'British Columbia' },
  { id: 10, name: 'Pride of Prince Edward Island', province: 'Prince Edward Island' },
];

export default function MembershipSection({ isActive }: MembershipSectionProps) {
  const [expandedProvinces, setExpandedProvinces] = useState<string[]>([]);

  const toggleProvince = (province: string) => {
    setExpandedProvinces(prev => 
      prev.includes(province) 
        ? prev.filter(p => p !== province)
        : [...prev, province]
    );
  };

  const membersByProvince = memberOrganizations.reduce((acc, member) => {
    (acc[member.province] = acc[member.province] || []).push(member);
    return acc;
  }, {} as Record<string, typeof memberOrganizations>);

  const sortedProvinces = Object.keys(membersByProvince).sort();

  return (
    <section className={`section ${isActive ? 'active' : ''}`}>
      {/* Our Valued Members */}
      <div className="text-center bg-white p-4 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Our Valued Members</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          We are proud to feature our Frontline and Allied member organizations across Canada. Click on a province to see the organizations making a difference in that region.
        </p>
        <div className="space-y-2">
          {sortedProvinces.map((province) => (
            <div key={province} className="border-b border-gray-300 last:border-b-0">
              <div 
                className="py-4 px-6 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => toggleProvince(province)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold">{province} ({membersByProvince[province].length})</h3>
                  <svg 
                    className={`w-5 h-5 text-gray-500 transition-transform ${expandedProvinces.includes(province) ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              {expandedProvinces.includes(province) && (
                <div className="p-4 bg-gray-50">
                  <ul className="space-y-3">
                    {membersByProvince[province].sort((a, b) => a.name.localeCompare(b.name)).map((member) => (
                      <li key={member.id} className="bg-white p-4 rounded-lg flex justify-between items-center">
                        <span className="font-semibold">{member.name}</span>
                        <a href="#" className="text-fuchsia-600 font-medium hover:underline text-sm">
                          View Profile →
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Membership Types */}
      <div className="mt-12 grid lg:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-fuchsia-600">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Frontline Membership</h2>
          <p className="text-gray-600 mb-6">
            For organizations that <strong>exclusively serve older 2SLGBTQI+ people</strong>. This membership is designed to empower your vital work and connect you with a national peer-support network.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-fuchsia-600">Eligibility</h3>
          <p className="text-gray-600 mb-6">
            Open to non-profit organizations, grassroots groups, and community centers whose primary mission is to support 2SLGBTQI+ seniors.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-fuchsia-600">Benefits</h3>
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            <li><strong>Free membership</strong> and full access to our Resource Hub.</li>
            <li>Priority listing in our <strong>Member Directory</strong> and on the Interactive Services Map.</li>
            <li>Access to our <strong>member-only forum</strong> for peer-support and knowledge-sharing.</li>
            <li>Exclusive access to <strong>funding opportunities</strong> and grant announcements.</li>
            <li>Opportunities to <strong>co-create and pilot programs</strong> with our national team.</li>
          </ul>
          <a href="#" className="mt-8 inline-block w-full text-center bg-fuchsia-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-fuchsia-700 transition-colors">
            Apply for Frontline Membership
          </a>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Allied Membership</h2>
          <p className="text-gray-600 mb-6">
            For other organizations that serve seniors and are committed to becoming more <strong>inclusive and affirming</strong> of 2SLGBTQI+ people. This is your pathway to a deeper understanding and better services.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Eligibility</h3>
          <p className="text-gray-600 mb-6">
            Open to any organization, institution, or business that serves seniors and wants to improve their cultural competency and inclusive practices.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Benefits</h3>
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            <li>Access to our <strong>Inclusion Guides and Toolkits</strong> (e.g., intake forms, policy templates).</li>
            <li>Discounts on our <strong>cultural competency training and workshops</strong>.</li>
            <li>Opportunities to <strong>partner and collaborate</strong> on new initiatives.</li>
            <li>Listing in the <strong>Allied Member Directory</strong>.</li>
            <li>A monthly <strong>newsletter</strong> with insights and best practices for creating affirming spaces.</li>
          </ul>
          <a href="#" className="mt-8 inline-block w-full text-center bg-blue-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Apply for Allied Membership
          </a>
        </div>
      </div>

      {/* How to Join */}
      <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4">How to Join</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-6">
          Ready to join our mission? The application process is quick and easy.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="flex-1">
            <div className="text-4xl font-bold text-fuchsia-600">1</div>
            <p className="font-bold text-lg mt-2">Choose Your Path</p>
            <p className="text-sm text-gray-600">Decide between a Frontline or Allied membership.</p>
          </div>
          <div className="flex-1">
            <div className="text-4xl font-bold text-fuchsia-600">2</div>
            <p className="font-bold text-lg mt-2">Complete the Form</p>
            <p className="text-sm text-gray-600">Fill out our online application form with your details.</p>
          </div>
          <div className="flex-1">
            <div className="text-4xl font-bold text-fuchsia-600">3</div>
            <p className="font-bold text-lg mt-2">Get Connected</p>
            <p className="text-sm text-gray-600">Receive confirmation and start exploring the network!</p>
          </div>
        </div>
        <div className="text-center mt-12 pt-6 border-t border-gray-200">
          <h3 className="text-2xl font-bold mb-2">Existing Members</h3>
          <p className="text-gray-600 mb-4">
            Already part of our network? Log in to manage your profile and access exclusive content.
          </p>
          <a href="#" className="inline-block bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
            Member Login
          </a>
        </div>
      </div>
    </section>
  );
}