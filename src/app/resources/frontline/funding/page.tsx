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