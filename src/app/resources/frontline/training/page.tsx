import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faVideo, faCalendarAlt, faCertificate, faUsers, faDownload } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { ArrowLeft } from 'lucide-react';

export default function TrainingPage() {
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
                <FontAwesomeIcon icon={faChalkboardTeacher} className="w-16 h-16 text-fuchsia-600" />
              </div>
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Training & Workshops for Frontline Members
              </h1>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Specialized sessions to enhance your capacity and services. Build your skills and knowledge to better serve 2SLGBTQI+ seniors through our comprehensive training programs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faVideo} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Online Training Modules</h3>
                <p className="text-gray-600 text-sm mb-4">Self-paced learning modules covering key topics in 2SLGBTQI+ senior care and cultural competency.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  Access Modules →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Live Webinars</h3>
                <p className="text-gray-600 text-sm mb-4">Interactive online sessions with experts, Q&A opportunities, and real-time discussion with peers.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  View Schedule →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faUsers} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">In-Person Workshops</h3>
                <p className="text-gray-600 text-sm mb-4">Regional training sessions providing hands-on learning and networking opportunities with local organizations.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  Find Workshops →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faCertificate} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Certification Programs</h3>
                <p className="text-gray-600 text-sm mb-4">Comprehensive certification courses for staff and volunteers working with 2SLGBTQI+ seniors.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  Learn About Certification →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faDownload} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Training Resources</h3>
                <p className="text-gray-600 text-sm mb-4">Downloadable materials, toolkits, and resources for internal staff training and development.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  Download Resources →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faUsers} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Train-the-Trainer</h3>
                <p className="text-gray-600 text-sm mb-4">Programs to develop internal training capacity within your organization for sustainable knowledge transfer.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  Join Program →
                </a>
              </div>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-2">Training Support & Resources</h3>
                <p className="text-gray-700 mb-4">
                  Access our comprehensive library of training materials, certification tracking, and ongoing professional development resources.
                </p>
                <a href="#" className="inline-block bg-fuchsia-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-700">
                  Access Training Portal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}