'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBookOpen, 
  faUsers, 
  faBullhorn, 
  faHandHoldingDollar, 
  faChalkboardTeacher, 
  faStar,
  faLanguage,
  faBullseye,
  faHandshakeAngle,
  faChalkboardUser,
  faLightbulb,
  faNetworkWired
} from '@fortawesome/free-solid-svg-icons';
import { Settings, HandHeart, Rainbow, Home, Heart, Search } from 'lucide-react';

interface ResourcesSectionProps {
  isActive: boolean;
}

export default function ResourcesSection({ isActive }: ResourcesSectionProps) {
  const [activeSubSection, setActiveSubSection] = useState('landing');


  return (
    <section className={`section ${isActive ? 'active' : ''}`}>
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          One hub. Three pathways. Practical tools for action.
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          This is the central hub for all our resources. Find the tools, guides, and information you need, tailored to your role in the community.
        </p>
      </div>

      {/* Landing Page */}
      {activeSubSection === 'landing' && (
        <div className="mt-12 grid md:grid-cols-4 gap-8">
          <Link 
            href="/frontline"
            className="card bg-white p-8 rounded-2xl text-center cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="mb-4 flex justify-center">
              <Settings className="w-12 h-12 icon-gradient" />
            </div>
            <h3 className="text-2xl font-bold mb-2">For Frontline Organizations</h3>
            <p className="text-gray-600">Resources and tools to strengthen your work.</p>
          </Link>
          <Link 
            href="/allied"
            className="card bg-white p-8 rounded-2xl text-center cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="mb-4 flex justify-center">
              <HandHeart className="w-12 h-12 icon-gradient" />
            </div>
            <h3 className="text-2xl font-bold mb-2">For Allied Organizations</h3>
            <p className="text-gray-600">Guidance for building inclusive services.</p>
          </Link>
          <Link 
            href="/seniors"
            className="card bg-white p-8 rounded-2xl text-center cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="mb-4 flex justify-center">
              <Rainbow className="w-12 h-12 icon-gradient" />
            </div>
            <h3 className="text-2xl font-bold mb-2">For Queer Seniors</h3>
            <p className="text-gray-600">Resources and support for your wellbeing.</p>
          </Link>
          <Link 
            href="/community-map"
            className="card bg-white p-8 rounded-2xl text-center cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="mb-4 flex justify-center">
              <Search className="w-12 h-12 icon-gradient" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Community Map</h3>
            <p className="text-gray-600">A powerful tool to find resources near you.</p>
          </Link>
        </div>
      )}

      {/* Frontline Content */}
      {activeSubSection === 'frontline' && (
        <div className="mt-12 bg-white p-8 rounded-2xl space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">For Our Frontline Members</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We are Senior Pride Network Canada/Réseau de la Fierté des personnes aînées du Canada (SPNC/RFAC), a national non-profit organization.
              We exist to unite, advocate for, and empower older, senior, and elder 2SLGBTQI+ (2-Spirited, Lesbian, Gay, Bisexual, Trans, Queer, Questioning, Intersex, and others) people across Canada.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Empowering Your Work: Resources and Support</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="tile bg-gray-50 p-6 rounded-lg">
                <FontAwesomeIcon icon={faBookOpen} className="text-2xl text-fuchsia-600" />
                <h4 className="font-bold mt-2">Resource Library</h4>
                <p className="text-sm text-gray-600">Access curated guides, toolkits, and research on 2SLGBTQI+ senior care.</p>
              </div>
              <div className="tile bg-gray-50 p-6 rounded-lg">
                <FontAwesomeIcon icon={faUsers} className="text-2xl text-fuchsia-600" />
                <h4 className="font-bold mt-2">Networking Hub</h4>
                <p className="text-sm text-gray-600">Connect with peers, share best practices, and collaborate on initiatives.</p>
              </div>
              <div className="tile bg-gray-50 p-6 rounded-lg">
                <FontAwesomeIcon icon={faBullhorn} className="text-2xl text-fuchsia-600" />
                <h4 className="font-bold mt-2">Advocacy Support</h4>
                <p className="text-sm text-gray-600">Access toolkits and legislative updates to inform your advocacy.</p>
              </div>
              <div className="tile bg-gray-50 p-6 rounded-lg">
                <FontAwesomeIcon icon={faHandHoldingDollar} className="text-2xl text-fuchsia-600" />
                <h4 className="font-bold mt-2">Funding Information</h4>
                <p className="text-sm text-gray-600">Find grants, funding programs, and partnership opportunities.</p>
              </div>
              <div className="tile bg-gray-50 p-6 rounded-lg">
                <FontAwesomeIcon icon={faChalkboardTeacher} className="text-2xl text-fuchsia-600" />
                <h4 className="font-bold mt-2">Training & Workshops</h4>
                <p className="text-sm text-gray-600">Specialized sessions to enhance your capacity and services.</p>
              </div>
              <div className="tile bg-gray-50 p-6 rounded-lg">
                <FontAwesomeIcon icon={faStar} className="text-2xl text-fuchsia-600" />
                <h4 className="font-bold mt-2">Visibility & Recognition</h4>
                <p className="text-sm text-gray-600">Showcase your work via our directory and spotlight features.</p>
              </div>
            </div>
            <Link href="/frontline" className="inline-block mt-6 bg-fuchsia-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-700">
              Join Our Frontline Network
            </Link>
          </div>

          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-2">
              <span className="chip">
                <FontAwesomeIcon icon={faBookOpen} className="mr-1" /> Resource Library
              </span>
              <span className="chip">
                <FontAwesomeIcon icon={faUsers} className="mr-1" /> Networking Hub
              </span>
              <span className="chip">
                <FontAwesomeIcon icon={faBullhorn} className="mr-1" /> Advocacy
              </span>
              <span className="chip">
                <FontAwesomeIcon icon={faHandHoldingDollar} className="mr-1" /> Funding
              </span>
              <span className="chip">
                <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-1" /> Training
              </span>
              <span className="chip">
                <FontAwesomeIcon icon={faStar} className="mr-1" /> Visibility
              </span>
            </div>
          </div>

          {/* Resource Library Section */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold">Resource Library for Frontline Members</h3>
            <p className="text-gray-700">
              Welcome to the comprehensive Resource Library, a curated collection of essential documents, guides, and tools designed to support your work with 2SLGBTQI+ seniors. We continually update this library with the latest research, best practices, and advocacy materials.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Inclusive Care Guides</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                  <li>Guide to Affirming Senior Care (PDF)</li>
                  <li>Checklist for Inclusive Intake Forms</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Research & Reports</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                  <li>National Survey on 2SLGBTQI+ Aging (2024)</li>
                  <li>Impact of Social Isolation on Queer Seniors</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Advocacy Toolkits & Templates</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                  <li>Community Advocacy Action Plan Template</li>
                  <li>Letter Template for Local Policy Makers</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Training Modules & Webinars</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                  <li>Recorded Webinar: Understanding Gender Identity in Seniors</li>
                  <li>Module: Addressing Ageism & Homophobia</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Legal & Rights Information</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                  <li>Legal Rights Fact Sheet for 2SLGBTQI+ Seniors</li>
                  <li>Housing Rights and Protections Overview</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Funding Resources</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                  <li>Grant Application Tips & Tricks</li>
                  <li>Directory of Senior-Focused Funding Bodies</li>
                </ul>
              </div>
            </div>
            <a href="#" className="inline-block mt-2 text-fuchsia-600 font-semibold hover:text-fuchsia-800">
              Submit a Resource →
            </a>
          </section>

          {/* Networking Section */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold">Networking Hub for Frontline Members</h3>
            <p className="text-gray-700">
              Connect with other frontline organizations, share experiences, and collaborate on initiatives that empower 2SLGBTQI+ seniors across Canada.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Online Member Forum</h4>
                <p className="text-sm text-gray-700">Engage in discussions, ask questions, and share insights with a secure community of peers.</p>
                <a href="#" className="text-fuchsia-600 text-sm font-semibold">Go to Forum (Login Required) →</a>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Upcoming Webinars & Events</h4>
                <p className="text-sm text-gray-700">Register for virtual and in-person events designed for professional development and networking.</p>
                <a href="#" className="text-fuchsia-600 text-sm font-semibold">View Event Calendar →</a>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Peer Support Initiatives</h4>
                <p className="text-sm text-gray-700">Join or form peer support groups focused on specific challenges or regions.</p>
                <a href="#" className="text-fuchsia-600 text-sm font-semibold">Learn About Peer Groups →</a>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Member Directory</h4>
                <p className="text-sm text-gray-700">Find contact information for other frontline organizations across Canada.</p>
                <a href="#" className="text-fuchsia-600 text-sm font-semibold">Access Directory (Login Required) →</a>
              </div>
            </div>
            <a href="#" className="inline-block mt-2 text-fuchsia-600 text-sm font-semibold hover:text-fuchsia-800">
              Contact Us to Get Involved →
            </a>
          </section>
        </div>
      )}

      {/* Allied Content */}
      {activeSubSection === 'allied' && (
        <div className="mt-12 bg-white p-8 rounded-2xl space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">For Our Allied Members</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We are Senior Pride Network Canada/Réseau de la Fierté des personnes aînées du Canada (SPNC/RFAC), a national non-profit organization.
              We exist to unite, advocate for, and empower older, senior, and elder 2SLGBTQI+ (2-Spirited, Lesbian, Gay, Bisexual, Trans, Queer, Questioning, Intersex, and others) people across Canada.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Partnering for Broader Inclusive Senior Care</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/resources/allied/inclusion-guidance" className="tile bg-gray-50 p-6 rounded-lg cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all duration-200 block">
                <FontAwesomeIcon icon={faLanguage} className="text-2xl text-blue-600" />
                <h4 className="font-bold mt-2">Inclusion Guidance</h4>
                <p className="text-sm text-gray-600">Access resources and checklists to integrate 2SLGBTQI+ inclusive practices.</p>
              </Link>
              <Link href="/resources/allied/visibility" className="tile bg-gray-50 p-6 rounded-lg cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all duration-200 block">
                <FontAwesomeIcon icon={faBullseye} className="text-2xl text-blue-600" />
                <h4 className="font-bold mt-2">Increased Visibility</h4>
                <p className="text-sm text-gray-600">Get listed in our public directory, reaching 2SLGBTQI+ seniors and groups.</p>
              </Link>
              <Link href="/resources/allied/collaboration" className="tile bg-gray-50 p-6 rounded-lg cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all duration-200 block">
                <FontAwesomeIcon icon={faHandshakeAngle} className="text-2xl text-blue-600" />
                <h4 className="font-bold mt-2">Collaboration</h4>
                <p className="text-sm text-gray-600">Explore partnerships with SPNC/RFAC and frontline organizations.</p>
              </Link>
              <Link href="/resources/allied/education" className="tile bg-gray-50 p-6 rounded-lg cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all duration-200 block">
                <FontAwesomeIcon icon={faChalkboardUser} className="text-2xl text-blue-600" />
                <h4 className="font-bold mt-2">Educational Resources</h4>
                <p className="text-sm text-gray-600">Participate in workshops on 2SLGBTQI+ cultural competency.</p>
              </Link>
              <Link href="/resources/allied/contribute" className="tile bg-gray-50 p-6 rounded-lg cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all duration-200 block">
                <FontAwesomeIcon icon={faLightbulb} className="text-2xl text-blue-600" />
                <h4 className="font-bold mt-2">Contribute Expertise</h4>
                <p className="text-sm text-gray-600">Share research, case studies, and innovative programs with our network.</p>
              </Link>
              <Link href="/resources/allied/network-access" className="tile bg-gray-50 p-6 rounded-lg cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all duration-200 block">
                <FontAwesomeIcon icon={faNetworkWired} className="text-2xl text-blue-600" />
                <h4 className="font-bold mt-2">National Network Access</h4>
                <p className="text-sm text-gray-600">Stay informed on trends and policy developments in 2SLGBTQI+ aging.</p>
              </Link>
            </div>
          </div>
          
          <section className="space-y-4 text-center">
            <h3 className="text-2xl font-bold">Benefits of Becoming an Allied Member</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              By partnering with SPNC/RFAC, your organization demonstrates a strong commitment to diversity and inclusion. Gain access to specialized knowledge, connect with a vibrant network, and enhance your services to better serve 2SLGBTQI+ seniors. This collaboration strengthens your brand as an inclusive provider.
            </p>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We invite you to actively review our guidelines for inclusive practices, integrate our resources into your operations, and share your own expertise to foster a more comprehensive and affirming landscape for all seniors in Canada.
            </p>
            <Link href="/allied" className="inline-block mt-2 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700">
              Become an Allied Member
            </Link>
          </section>
          
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-2">
              <Link href="/resources/allied/inclusion-guidance" className="chip hover:bg-blue-100 transition-colors cursor-pointer">
                <FontAwesomeIcon icon={faLanguage} className="mr-1" /> Inclusion Guidance
              </Link>
              <Link href="/resources/allied/visibility" className="chip hover:bg-blue-100 transition-colors cursor-pointer">
                <FontAwesomeIcon icon={faBullseye} className="mr-1" /> Visibility
              </Link>
              <Link href="/resources/allied/collaboration" className="chip hover:bg-blue-100 transition-colors cursor-pointer">
                <FontAwesomeIcon icon={faHandshakeAngle} className="mr-1" /> Collaboration
              </Link>
              <Link href="/resources/allied/education" className="chip hover:bg-blue-100 transition-colors cursor-pointer">
                <FontAwesomeIcon icon={faChalkboardUser} className="mr-1" /> Education
              </Link>
              <Link href="/resources/allied/contribute" className="chip hover:bg-blue-100 transition-colors cursor-pointer">
                <FontAwesomeIcon icon={faLightbulb} className="mr-1" /> Contribute
              </Link>
              <Link href="/resources/allied/network-access" className="chip hover:bg-blue-100 transition-colors cursor-pointer">
                <FontAwesomeIcon icon={faNetworkWired} className="mr-1" /> Network Access
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Seniors Content */}
      {activeSubSection === 'seniors' && (
        <div className="mt-12 bg-white p-8 rounded-2xl space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">For 2SLGBTQI+ Seniors</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Welcome! This space is designed specifically for you. Find resources, connect with others, and access support to help you live authentically and with dignity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Home className="w-5 h-5 icon-gradient" />
                Housing & Living
              </h3>
              <p className="text-gray-600 mb-4">Find LGBTQI+ friendly housing options and know your rights.</p>
              <a href="#" className="text-fuchsia-600 font-semibold hover:text-fuchsia-800">Explore Resources →</a>
            </div>
            <div className="card bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 icon-gradient" />
                Health & Wellness
              </h3>
              <p className="text-gray-600 mb-4">Access health resources and find inclusive healthcare providers.</p>
              <a href="#" className="text-fuchsia-600 font-semibold hover:text-fuchsia-800">Find Support →</a>
            </div>
            <div className="card bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <HandHeart className="w-5 h-5 icon-gradient" />
                Community & Social
              </h3>
              <p className="text-gray-600 mb-4">Connect with others and find social activities in your area.</p>
              <a href="#" className="text-fuchsia-600 font-semibold hover:text-fuchsia-800">Get Connected →</a>
            </div>
          </div>
        </div>
      )}

      {/* Community Map */}
      {activeSubSection === 'map' && (
        <div className="mt-12 bg-white p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Community Resource Map</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Find 2SLGBTQI+ friendly services and organizations across Canada. Use our interactive map to locate resources in your area.
            </p>
          </div>
          
          <div className="map-canvas bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-xl font-semibold mb-2">Interactive Map Coming Soon</h3>
              <p>We're building an interactive map to help you find resources in your community.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}