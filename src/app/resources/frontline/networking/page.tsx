import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCalendarAlt, faComments, faHandshake, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { ArrowLeft } from 'lucide-react';

export default function NetworkingPage() {
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
                <FontAwesomeIcon icon={faUsers} className="w-16 h-16 text-fuchsia-600" />
              </div>
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Networking Hub for Frontline Members
              </h1>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Connect with other frontline organizations, share experiences, and collaborate on initiatives that empower 2SLGBTQI+ seniors across Canada.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faComments} className="text-3xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-xl mb-3">Online Member Forum</h3>
                <p className="text-gray-700 mb-4">
                  Engage in discussions, ask questions, and share insights with a secure community of peers. Access member-only discussions on best practices, challenges, and innovative solutions.
                </p>
                <a href="#" className="inline-block bg-fuchsia-600 text-white font-semibold py-2 px-4 rounded hover:bg-fuchsia-700">
                  Access Forum (Login Required) →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-3xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-xl mb-3">Upcoming Webinars & Events</h3>
                <p className="text-gray-700 mb-4">
                  Register for virtual and in-person events designed for professional development and networking. Monthly webinars, annual conference, and regional meetups.
                </p>
                <a href="#" className="inline-block bg-fuchsia-600 text-white font-semibold py-2 px-4 rounded hover:bg-fuchsia-700">
                  View Event Calendar →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faHandshake} className="text-3xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-xl mb-3">Peer Support Initiatives</h3>
                <p className="text-gray-700 mb-4">
                  Join or form peer support groups focused on specific challenges or regions. Connect with organizations facing similar challenges and share solutions.
                </p>
                <a href="#" className="inline-block bg-fuchsia-600 text-white font-semibold py-2 px-4 rounded hover:bg-fuchsia-700">
                  Learn About Peer Groups →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-3xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-xl mb-3">Member Directory</h3>
                <p className="text-gray-700 mb-4">
                  Find contact information for other frontline organizations across Canada. Search by province, services offered, or population served.
                </p>
                <a href="#" className="inline-block bg-fuchsia-600 text-white font-semibold py-2 px-4 rounded hover:bg-fuchsia-700">
                  Access Directory (Login Required) →
                </a>
              </div>
            </div>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-center">Collaboration Opportunities</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border">
                  <h4 className="font-semibold text-lg mb-3">Joint Grant Applications</h4>
                  <p className="text-gray-700 text-sm mb-4">
                    Partner with other organizations on funding applications to increase impact and success rates.
                  </p>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Learn More →</a>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border">
                  <h4 className="font-semibold text-lg mb-3">Resource Sharing</h4>
                  <p className="text-gray-700 text-sm mb-4">
                    Share training materials, expertise, and resources to reduce costs and improve service delivery.
                  </p>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Get Started →</a>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border">
                  <h4 className="font-semibold text-lg mb-3">Advocacy Campaigns</h4>
                  <p className="text-gray-700 text-sm mb-4">
                    Join coordinated advocacy efforts to influence policy at municipal, provincial, and federal levels.
                  </p>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Join Campaign →</a>
                </div>
              </div>
            </section>

            <section className="bg-fuchsia-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">Upcoming Events</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">Monthly Frontline Forum</h4>
                      <p className="text-gray-600 text-sm">Virtual networking session for frontline organizations</p>
                    </div>
                    <span className="bg-fuchsia-100 text-fuchsia-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Next Friday, 2:00 PM EST
                    </span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">Regional Training Workshop</h4>
                      <p className="text-gray-600 text-sm">In-person training on inclusive service delivery</p>
                    </div>
                    <span className="bg-fuchsia-100 text-fuchsia-800 px-3 py-1 rounded-full text-sm font-semibold">
                      March 15, Toronto
                    </span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">Annual Conference</h4>
                      <p className="text-gray-600 text-sm">National conference for 2SLGBTQI+ aging advocacy</p>
                    </div>
                    <span className="bg-fuchsia-100 text-fuchsia-800 px-3 py-1 rounded-full text-sm font-semibold">
                      June 10-12, Vancouver
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <div className="text-center space-y-4">
              <div className="bg-white p-6 rounded-lg border">
                <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-fuchsia-600 mb-3" />
                <h3 className="text-xl font-bold mb-2">Get Connected</h3>
                <p className="text-gray-700 mb-4">
                  Ready to join our network of frontline organizations? Contact us to learn about membership benefits and how to get involved.
                </p>
                <a href="#" className="inline-block bg-fuchsia-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-700">
                  Contact Us to Get Involved
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}