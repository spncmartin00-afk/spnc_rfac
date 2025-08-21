import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar, faSearch, faFileAlt, faCalendarAlt, faUsers, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { ArrowLeft } from 'lucide-react';

export default function FundingPage() {
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
                <FontAwesomeIcon icon={faHandHoldingDollar} className="w-16 h-16 text-fuchsia-600" />
              </div>
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Funding Information for Frontline Members
              </h1>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Find grants, funding programs, and partnership opportunities to support your work with 2SLGBTQI+ seniors. Access tools and resources to improve your funding success rates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faSearch} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Funding Directory</h3>
                <p className="text-gray-600 text-sm mb-4">Searchable database of grants and funding opportunities specifically relevant to 2SLGBTQI+ senior services.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  Search Funding Database →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faFileAlt} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Grant Writing Resources</h3>
                <p className="text-gray-600 text-sm mb-4">Templates, guides, and best practices for writing successful grant applications and proposals.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  Access Resources →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Application Deadlines</h3>
                <p className="text-gray-600 text-sm mb-4">Stay updated on important funding deadlines and application timelines for relevant opportunities.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  View Calendar →
                </a>
              </div>
            </div>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-center">Featured Funding Opportunities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-xl text-fuchsia-600">Federal New Horizons for Seniors</h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Open
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Supports community-based projects that make a difference in the lives of seniors and their communities, with up to $25,000 available.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-4">
                    <li>Deadline: March 31, 2024</li>
                    <li>Maximum: $25,000</li>
                    <li>Eligible: Non-profit organizations</li>
                  </ul>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Learn More →</a>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-xl text-fuchsia-600">Community Foundation Grants</h3>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Varies
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Local community foundations across Canada offer various grants for organizations serving vulnerable populations, including 2SLGBTQI+ seniors.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-4">
                    <li>Deadline: Multiple throughout year</li>
                    <li>Amount: Varies by foundation</li>
                    <li>Eligible: Local non-profits</li>
                  </ul>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Find Local Foundations →</a>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-xl text-fuchsia-600">Provincial Health Innovation Funds</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Upcoming
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Provincial programs supporting innovative healthcare delivery models and community health initiatives, including mental health and wellness programs.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-4">
                    <li>Deadline: Check provincial schedules</li>
                    <li>Maximum: $50,000-$200,000</li>
                    <li>Eligible: Healthcare organizations</li>
                  </ul>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">View by Province →</a>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-xl text-fuchsia-600">Corporate Foundation Programs</h3>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Rolling
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Major corporations offer funding for diversity, equity, and inclusion initiatives, particularly those supporting vulnerable populations.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-4">
                    <li>Deadline: Various schedules</li>
                    <li>Amount: $5,000-$100,000</li>
                    <li>Eligible: Registered charities</li>
                  </ul>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Browse Corporations →</a>
                </div>
              </div>
            </section>

            <section className="bg-fuchsia-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">Funding Success Tools</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  <FontAwesomeIcon icon={faFileAlt} className="text-xl text-fuchsia-600 mb-2" />
                  <h4 className="font-semibold mb-2">Application Templates</h4>
                  <p className="text-sm text-gray-700 mb-3">Proven templates for common grant applications, including budget worksheets and project descriptions.</p>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Download Templates →</a>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <FontAwesomeIcon icon={faUsers} className="text-xl text-fuchsia-600 mb-2" />
                  <h4 className="font-semibold mb-2">Peer Review Network</h4>
                  <p className="text-sm text-gray-700 mb-3">Connect with other organizations for application reviews and collaborative funding opportunities.</p>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Join Network →</a>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <FontAwesomeIcon icon={faLightbulb} className="text-xl text-fuchsia-600 mb-2" />
                  <h4 className="font-semibold mb-2">Success Stories</h4>
                  <p className="text-sm text-gray-700 mb-3">Learn from successful funding applications and project implementations from peer organizations.</p>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Read Stories →</a>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-center">Grant Writing Workshops</h3>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Upcoming Workshop Dates</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <div>
                          <p className="font-semibold">Foundations of Grant Writing</p>
                          <p className="text-sm text-gray-600">Virtual workshop for beginners</p>
                        </div>
                        <span className="text-fuchsia-600 font-semibold text-sm">Feb 20</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <div>
                          <p className="font-semibold">Advanced Proposal Development</p>
                          <p className="text-sm text-gray-600">For experienced applicants</p>
                        </div>
                        <span className="text-fuchsia-600 font-semibold text-sm">Mar 15</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <div>
                          <p className="font-semibold">Budget Planning & Financial Management</p>
                          <p className="text-sm text-gray-600">Focus on financial components</p>
                        </div>
                        <span className="text-fuchsia-600 font-semibold text-sm">Apr 12</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">What You'll Learn</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>How to identify relevant funding opportunities</li>
                      <li>Writing compelling project narratives</li>
                      <li>Developing realistic budgets and timelines</li>
                      <li>Building strong evaluation frameworks</li>
                      <li>Common pitfalls and how to avoid them</li>
                      <li>Post-award management and reporting</li>
                    </ul>
                    <div className="mt-6">
                      <a href="#" className="bg-fuchsia-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-700">
                        Register for Workshops
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="text-center space-y-4">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-2">Need Personalized Funding Support?</h3>
                <p className="text-gray-700 mb-4">
                  Our funding specialists can provide one-on-one guidance for your specific project needs and organizational goals.
                </p>
                <a href="#" className="inline-block bg-fuchsia-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-700">
                  Request Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}