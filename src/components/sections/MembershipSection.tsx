'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { memberOrganizations, getMembersByProvince, Member } from '@/lib/memberData';

interface MembershipSectionProps {
  isActive: boolean;
}


export default function MembershipSection({ isActive }: MembershipSectionProps) {
  const searchParams = useSearchParams();
  const [expandedProvinces, setExpandedProvinces] = useState<string[]>([]);

  const toggleProvince = (province: string) => {
    setExpandedProvinces(prev => 
      prev.includes(province) 
        ? prev.filter(p => p !== province)
        : [...prev, province]
    );
  };

  // Auto-expand province from URL parameter
  useEffect(() => {
    const provinceParam = searchParams.get('province');
    if (provinceParam && !expandedProvinces.includes(provinceParam)) {
      setExpandedProvinces(prev => [...prev, provinceParam]);
    }
  }, [searchParams, expandedProvinces]);

  const membersByProvince = getMembersByProvince();

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

      {/* Call to Action for Joining */}
      <div className="mt-8 text-center">
        <a href="/membership/join" className="inline-block bg-fuchsia-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-700 transition-colors">
          Join Our Network →
        </a>
      </div>
    </section>
  );
}