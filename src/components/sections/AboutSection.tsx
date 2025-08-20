'use client';

import { useState } from 'react';

interface AboutSectionProps {
  isActive: boolean;
}

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'Director of Operations',
    photo: 'https://placehold.co/80x80/D946EF/FFFFFF?text=AC'
  },
  {
    name: 'Maria Garcia',
    role: 'Community Engagement Lead',
    photo: 'https://placehold.co/80x80/D946EF/FFFFFF?text=MG'
  },
  {
    name: 'Jamal Williams',
    role: 'Advocacy Coordinator',
    photo: 'https://placehold.co/80x80/D946EF/FFFFFF?text=JW'
  },
  {
    name: 'Sarah Lévesque',
    role: 'Board Chair',
    photo: 'https://placehold.co/80x80/D946EF/FFFFFF?text=SL'
  }
];

export default function AboutSection({ isActive }: AboutSectionProps) {
  const [activeSubSection, setActiveSubSection] = useState('story');

  const subSections = [
    { id: 'story', label: 'Our Story' },
    { id: 'mandate', label: 'Our Mandate' },
    { id: 'mission', label: 'Mission, Vision & Values' },
    { id: 'team', label: 'Our Team' }
  ];

  return (
    <section className={`section ${isActive ? 'active' : ''}`}>
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Learn more about our mission, our team, and our commitment to the communities we serve.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {subSections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSubSection(section.id)}
            className={`nav-sub-link border-b-2 border-transparent pb-1 text-lg ${
              activeSubSection === section.id ? 'active' : ''
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>

      {/* Our Story */}
      {activeSubSection === 'story' && (
        <div className="mt-12 bg-white p-8 rounded-2xl space-y-4">
          <h2 className="text-3xl font-bold mb-2">Our Story</h2>
          <p className="text-gray-700">
            Before our national organization came to be, there was no single voice representing older 2SLGBTQI+ individuals nationally in Canada. This left a significant gap, resulting in a need for more policies, resources, training, programs, and services addressing the unique needs and limited recognition of older 2SLGBTQI+ people. To bridge this gap, several organizations from across the country joined forces in August 2022, aiming to create a national entity dedicated to supporting queer seniors.
          </p>
          <p className="text-gray-700">
            Key organizations like Dignity Seniors Society in British Columbia, Rainbow Resource Centre in Manitoba, and Senior Pride Network Toronto in Ontario initiated the conversation. As more groups from various provinces joined, the importance of establishing a national organization became increasingly evident.
          </p>
          <p className="text-gray-700">
            Together, we outlined several priorities for our collaboration, including combating discrimination, reducing social isolation, promoting visibility, empowering self-advocacy, creating tailored resources, driving policy change, and fostering the creation of safer and inclusive spaces where queer seniors belong and are affirmed.
          </p>
          <p className="text-gray-700">
            With a united vision, we decided to incorporate as a national not-for-profit organization. On October 16, 2023, Senior Pride Network Canada/Réseau de la Fierté des personnes aînées du Canada (SPNC/RFAC) officially became a national not-for-profit corporation operating from Ottawa, Ontario.
          </p>
        </div>
      )}

      {/* Our Mandate */}
      {activeSubSection === 'mandate' && (
        <div className="mt-12 bg-white p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Our Mandate</h2>
          <p className="text-gray-700 mb-4">
            Our mandate is to unite non-profit organizations, formal and informal groups, projects, and individuals who work directly for and with older 2SLGBTQI+ people across the country to champion the well-being of 2SLGBTQI+ older adults.
          </p>
          <p className="text-gray-700 mb-4 font-semibold">We will do it by:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Advocacy:</strong> Champion systemic policy and legislative changes that protect and advance the rights of older 2SLGBTQI+ individuals.</li>
            <li><strong>Representation:</strong> Cultivate a strong, collective voice with diverse representation across Canada.</li>
            <li><strong>Capacity Building:</strong> Bolster the capabilities of all involved organizations in supporting 2SLGBTQI+ older adults.</li>
            <li><strong>Research, Education, and Support Initiatives:</strong> Support the capacity of organizations that serve older 2SLGBTQI+ communities through research, education, and support initiatives.</li>
            <li><strong>Collaborative Hub and Knowledge Sharing for Organizations:</strong> Serve as a central point for collaboration and knowledge sharing among entities working with older 2SLGBTQI+ populations.</li>
          </ul>
        </div>
      )}

      {/* Mission, Vision & Values */}
      {activeSubSection === 'mission' && (
        <div className="mt-12 bg-white p-8 rounded-2xl space-y-8">
          <h2 className="text-3xl font-bold">Mission, Vision & Values</h2>
          
          <div>
            <h3 className="text-2xl font-bold text-fuchsia-600 mb-2">Vision</h3>
            <p className="text-gray-700">
              A society where the lives and identities of older 2SLGBTQI+ people are respected, affirmed and celebrated, our voices amplified and heard, where we live with pride, are embraced and empowered, free from fear and discrimination, with a sense of belonging and inclusion.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-fuchsia-600 mb-2">Mission</h3>
            <p className="text-gray-700">
              Our mission is to bring together, advocate for, and represent the interests of older 2SLGBTQI+ people across Canada, fostering unity among organizations and individuals dedicated to supporting communities of older 2SLGBTQI+ people.
            </p>
            <p className="text-gray-700 mt-3">
              By facilitating collaboration, awareness, knowledge exchange, and mutual support among 2SLGBTQI+ groups and service providers for older adults, we aim to improve the quality of life and ensure the dignity and rights of older 2SLGBTQI+ people are upheld.
            </p>
            <p className="text-gray-700 mt-3">
              We strive to influence all policies in order to enact systemic, legislative, and other reforms that benefit the older 2SLGBTQI+ communities.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-fuchsia-600 mb-2">Values</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Reconciliation:</strong> Acknowledging historical and ongoing oppression of Indigenous 2SLGBTQI+ Elders and building respectful relationships through listening, learning, and collaboration to support healing and reconciliation.</li>
              <li><strong>Inclusivity:</strong> Embracing and celebrating the diversity of older 2SLGBTQI+ individuals.</li>
              <li><strong>Collaboration:</strong> Fostering collaboration and partnership among non-profit organizations, formal and informal groups, projects, and individuals working directly with older 2SLGBTQI+ people.</li>
              <li><strong>Advocacy:</strong> Commitment to advocating for systemic, social, and legislative changes that protect and advance the rights of older 2SLGBTQI+ individuals across Canada.</li>
              <li><strong>Empowerment:</strong> Empowering older 2SLGBTQI+ individuals to become self-advocates, enabling them to assert their rights, needs, visibility, and aspirations and promoting positive change within their communities.</li>
              <li><strong>Respect:</strong> Respecting the lives, the intersectionality of communities, and identities of older 2SLGBTQI+ people, affirming their voices, and creating an environment where they live with pride, free from fear and discrimination.</li>
              <li><strong>Transparency:</strong> Commitment to open communication, transparency in decision-making processes, and accountability to communities.</li>
            </ul>
          </div>
        </div>
      )}

      {/* Our Team */}
      {activeSubSection === 'team' && (
        <div className="mt-12 bg-white p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-gray-600 mb-8">
            Our work is led by a dedicated team of passionate professionals and supported by an experienced Board of Directors and a diverse Advisory Council. Together, we are committed to our mission.{' '}
            <a href="#" className="text-fuchsia-600 hover:underline">Read detailed biographies here.</a>
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex items-center bg-gray-100 p-4 rounded-lg">
                <img 
                  src={member.photo} 
                  alt={`${member.name} photo`} 
                  className="rounded-full mr-4 w-20 h-20"
                />
                <div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}