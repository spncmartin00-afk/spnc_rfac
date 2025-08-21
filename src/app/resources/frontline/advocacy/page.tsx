'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faFileAlt, faExclamationTriangle, faGraduationCap, faUsers } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { ArrowLeft } from 'lucide-react';

export default function AdvocacyPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-2xl p-8 space-y-10">
            <div className="flex items-center mb-6">
              <Link href="/resources/frontline" className="flex items-center text-fuchsia-600 hover:text-fuchsia-800 mr-4">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Frontline
              </Link>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <FontAwesomeIcon icon={faBullhorn} className="w-16 h-16 text-fuchsia-600" />
              </div>
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Advocacy Support for Frontline Members
              </h1>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Tools and information to effectively advocate for policy changes and improved rights at local, provincial, and national levels.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faFileAlt} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Policy Briefs & Position Papers</h3>
                <p className="text-gray-600 text-sm mb-4">Access comprehensive policy documents and position statements on 2SLGBTQI+ senior issues.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  View Policy Resources →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Advocacy Action Alerts</h3>
                <p className="text-gray-600 text-sm mb-4">Stay informed about urgent advocacy opportunities and time-sensitive calls to action.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  See Latest Alerts →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faFileAlt} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">How-to Guides for Local Advocacy</h3>
                <p className="text-gray-600 text-sm mb-4">Step-by-step guides for engaging with local government and community stakeholders.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  Download Guides →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faGraduationCap} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Advocacy Training Modules</h3>
                <p className="text-gray-600 text-sm mb-4">Build your advocacy skills with our comprehensive training programs and workshops.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  Access Training →
                </a>
              </div>
            </div>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-center">Current Advocacy Priorities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="font-semibold text-xl mb-3 text-fuchsia-600">Healthcare Access & Quality</h3>
                  <p className="text-gray-700 mb-4">
                    Advocating for inclusive healthcare policies that address the unique needs of 2SLGBTQI+ seniors, including gender-affirming care and culturally competent medical services.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    <li>Provincial health insurance coverage for transition-related care</li>
                    <li>Training requirements for healthcare providers</li>
                    <li>Anti-discrimination policies in healthcare settings</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="font-semibold text-xl mb-3 text-fuchsia-600">Housing & Long-Term Care</h3>
                  <p className="text-gray-700 mb-4">
                    Ensuring safe, affirming housing options and long-term care facilities that respect the dignity and identity of 2SLGBTQI+ seniors.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    <li>Inclusive policies in senior housing developments</li>
                    <li>Staff training in long-term care facilities</li>
                    <li>Protection from discrimination in housing applications</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="font-semibold text-xl mb-3 text-fuchsia-600">Legal Rights & Protections</h3>
                  <p className="text-gray-700 mb-4">
                    Strengthening legal protections against discrimination and ensuring equal rights for 2SLGBTQI+ seniors in all aspects of life.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    <li>Enhanced human rights legislation</li>
                    <li>Elder abuse prevention with 2SLGBTQI+ considerations</li>
                    <li>Estate planning and next-of-kin recognition</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="font-semibold text-xl mb-3 text-fuchsia-600">Social Inclusion & Community Support</h3>
                  <p className="text-gray-700 mb-4">
                    Promoting social programs and community initiatives that combat isolation and foster connection among 2SLGBTQI+ seniors.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    <li>Funding for 2SLGBTQI+ senior programs</li>
                    <li>Public awareness campaigns</li>
                    <li>Intergenerational programming support</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-fuchsia-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">Advocacy Tools & Resources</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  <FontAwesomeIcon icon={faFileAlt} className="text-xl text-fuchsia-600 mb-2" />
                  <h4 className="font-semibold mb-2">Template Letters</h4>
                  <p className="text-sm text-gray-700 mb-3">Ready-to-use letter templates for contacting elected officials and decision-makers.</p>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Download Templates →</a>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <FontAwesomeIcon icon={faBullhorn} className="text-xl text-fuchsia-600 mb-2" />
                  <h4 className="font-semibold mb-2">Media Toolkit</h4>
                  <p className="text-sm text-gray-700 mb-3">Press release templates, fact sheets, and media contact lists for amplifying your message.</p>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Access Toolkit →</a>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <FontAwesomeIcon icon={faUsers} className="text-xl text-fuchsia-600 mb-2" />
                  <h4 className="font-semibold mb-2">Coalition Building</h4>
                  <p className="text-sm text-gray-700 mb-3">Strategies and resources for building effective coalitions and partnerships.</p>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Learn More →</a>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-center">Take Action Now</h3>
              <div className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white p-8 rounded-lg text-center">
                <h4 className="text-xl font-bold mb-4">Join Our National Advocacy Campaign</h4>
                <p className="mb-6">
                  Be part of a coordinated effort to improve the lives of 2SLGBTQI+ seniors across Canada. Your voice matters, and together we can create meaningful change.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#" className="bg-white text-fuchsia-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100">
                    Sign Up for Action Alerts
                  </a>
                  <a href="#" className="bg-fuchsia-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-800">
                    Contact Your Representative
                  </a>
                </div>
              </div>
            </section>

            <div className="text-center space-y-4">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-2">Need Advocacy Support?</h3>
                <p className="text-gray-700 mb-4">
                  Our advocacy team is here to help you develop effective campaigns and navigate the policy landscape.
                </p>
                <a href="#" className="inline-block bg-fuchsia-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-700">
                  Get Involved in Advocacy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}