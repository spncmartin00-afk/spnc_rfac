import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEye, faNewspaper, faAward, faBullhorn, faCamera } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { ArrowLeft } from 'lucide-react';

export default function VisibilityPage() {
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
                <FontAwesomeIcon icon={faStar} className="w-16 h-16 text-fuchsia-600" />
              </div>
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Visibility & Recognition for Frontline Members
              </h1>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Showcase your work via our directory and spotlight features. Gain recognition for your contributions to 2SLGBTQI+ senior care and connect with the broader community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faEye} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Public Directory Listing</h3>
                <p className="text-gray-600 text-sm mb-4">Get featured in our searchable directory of frontline organizations serving 2SLGBTQI+ seniors across Canada.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  Submit for Directory →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faNewspaper} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Spotlight Features</h3>
                <p className="text-gray-600 text-sm mb-4">Be featured in our monthly newsletter and website spotlights highlighting innovative programs and success stories.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  Nominate Your Organization →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faAward} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Excellence Awards</h3>
                <p className="text-gray-600 text-sm mb-4">Apply for annual awards recognizing outstanding contributions to 2SLGBTQI+ senior care and advocacy.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  View Award Categories →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faBullhorn} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Media Opportunities</h3>
                <p className="text-gray-600 text-sm mb-4">Get connected with media outlets and speaking opportunities to share your expertise and advocate for change.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  Express Interest →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faCamera} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Social Media Features</h3>
                <p className="text-gray-600 text-sm mb-4">Share your stories and achievements through our social media channels to reach a wider audience.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  Share Your Story →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faNewspaper} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Research Participation</h3>
                <p className="text-gray-600 text-sm mb-4">Participate in research studies and contribute to the growing body of knowledge in 2SLGBTQI+ aging.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  Join Research →
                </a>
              </div>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-2">Ready to Increase Your Visibility?</h3>
                <p className="text-gray-700 mb-4">
                  Join our network of recognized frontline organizations and showcase your valuable contributions to the community.
                </p>
                <a href="#" className="inline-block bg-fuchsia-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-700">
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}