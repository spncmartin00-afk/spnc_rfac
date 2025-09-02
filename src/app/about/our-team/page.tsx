'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import BiographyModal from '@/components/ui/BiographyModal';
import StaffBiographyModal from '@/components/ui/StaffBiographyModal';
import { getAllBoardMembers, BoardMember, getAllStaffMembers, StaffMember } from '@/lib/boardData';

export default function OurTeamPage() {
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null);
  const [selectedStaffMember, setSelectedStaffMember] = useState<StaffMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStaffModalOpen, setIsStaffModalOpen] = useState(false);
  const boardMembers = getAllBoardMembers();
  const staffMembers = getAllStaffMembers();

  const openBiography = (member: BoardMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeBiography = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  const openStaffBiography = (member: StaffMember) => {
    setSelectedStaffMember(member);
    setIsStaffModalOpen(true);
  };

  const closeStaffBiography = () => {
    setIsStaffModalOpen(false);
    setSelectedStaffMember(null);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <Link 
            href="/about" 
            className="inline-flex items-center text-fuchsia-600 hover:text-fuchsia-700 mb-6 font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to About Us
          </Link>
          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6">Our Board of Directors</h2>
            <p className="text-gray-600 mb-8">Our governance is led by a dedicated Board of Directors comprised of community leaders, advocates, and professionals committed to advancing the rights and wellbeing of 2SLGBTQI+ seniors across Canada.</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member) => (
                <div 
                  key={member.id}
                  className={`text-center bg-gradient-to-br ${member.gradientColors.from} ${member.gradientColors.to} p-6 rounded-2xl border-2 ${member.gradientColors.border} cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-fuchsia-300`}
                  onClick={() => openBiography(member)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openBiography(member);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View biography of ${member.name}, ${member.role}`}
                >
                  <img
                    src={member.image}
                    alt={`Professional headshot of ${member.name}`}
                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-4 border-white shadow-lg"
                  />
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-800">{member.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{member.pronouns}</p>
                    <p className={`text-base ${member.gradientColors.text} font-semibold mb-2`}>{member.role}</p>
                    <div className="flex items-center justify-center text-xs text-gray-600 mt-3">
                      <svg className="mr-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>View biography</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 mt-8">
            <h2 className="text-3xl font-bold mb-6">Our Committees</h2>
            <p className="text-gray-600 mb-8">Our work is guided by dedicated committees that focus on specific aspects of our mission to support 2SLGBTQI+ seniors.</p>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Governance and Finance Committee</h3>
                <p className="text-gray-600">
                  Responsible for organizational governance, financial oversight, and strategic planning to ensure effective management of resources and adherence to our mission.
                </p>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg border border-emerald-200">
                <h3 className="text-xl font-semibold mb-3 text-emerald-800">Engagement Committee</h3>
                <p className="text-gray-600">
                  Focuses on community outreach, member engagement, and building partnerships to expand our reach and impact within the 2SLGBTQI+ senior community.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-fuchsia-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">PARE Committee</h3>
                <p className="text-gray-600">
                  Dedicated to Policy, Advocacy, Research, and Education initiatives that advance the rights and wellbeing of 2SLGBTQI+ seniors through evidence-based approaches.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 text-center">
              <Link
                href="/join-committee"
                className="inline-flex items-center bg-fuchsia-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-fuchsia-700 transition-colors shadow-lg"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Join a Committee
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 mt-8">
            <h2 className="text-3xl font-bold mb-6">Our Staff and Volunteers</h2>
            <p className="text-gray-600 mb-8">Our dedicated team works tirelessly to support our community and advance our mission.</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {staffMembers.map((member) => (
                <div 
                  key={member.id}
                  className={`text-center bg-gradient-to-br ${member.gradientColors.from} ${member.gradientColors.to} p-6 rounded-2xl border-2 ${member.gradientColors.border} cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300`}
                  onClick={() => openStaffBiography(member)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openStaffBiography(member);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View biography of ${member.name}, ${member.role}`}
                >
                  <img
                    src={member.image}
                    alt={`Professional headshot of ${member.name}`}
                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-4 border-white shadow-lg"
                  />
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-800">{member.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{member.pronouns}</p>
                    <p className={`text-base ${member.gradientColors.text} font-semibold mb-2`}>{member.role}</p>
                    <p className="text-gray-600 text-sm mb-3">Leading our day-to-day operations and coordinating programs to serve the 2SLGBTQI+ senior community.</p>
                    <div className="flex items-center justify-center text-xs text-gray-600 mt-3">
                      <svg className="mr-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>View biography</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Biography Modal */}
        <BiographyModal 
          isOpen={isModalOpen}
          onClose={closeBiography}
          boardMember={selectedMember}
        />

        {/* Staff Biography Modal */}
        <StaffBiographyModal 
          isOpen={isStaffModalOpen}
          onClose={closeStaffBiography}
          staffMember={selectedStaffMember}
        />
      </div>
    </Layout>
  );
}
