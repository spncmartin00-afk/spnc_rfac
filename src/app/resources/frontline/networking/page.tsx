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
          <Link 
            href="/resources/frontline" 
            className="inline-flex items-center text-fuchsia-600 hover:text-fuchsia-700 mb-6 font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Frontline
          </Link>
          <div className="bg-white rounded-2xl p-8 space-y-10">
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