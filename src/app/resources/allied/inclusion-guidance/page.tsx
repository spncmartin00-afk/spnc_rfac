import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import Layout from '@/components/layout/Layout';

export default function InclusionGuidancePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-2xl p-8 space-y-10">
          <div className="text-center">
            <FontAwesomeIcon icon={faLanguage} className="text-6xl text-blue-600 mb-4" />
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              Inclusion Guidance for Allied Members
            </h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              This section provides allied organizations with comprehensive guides and resources to integrate 2SLGBTQI+ inclusive practices into your existing services and programs for seniors. Our goal is to help you create truly affirming and welcoming environments.
            </p>
          </div>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Resources & Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-xl mb-3">Inclusive Language Guide</h3>
                <p className="text-gray-700 mb-4">A practical guide to using respectful and affirming language in all communications with 2SLGBTQI+ seniors.</p>
                <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                  Download Guide →
                </a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-xl mb-3">Facility & Program Accessibility Checklist</h3>
                <p className="text-gray-700 mb-4">Ensure your physical spaces and programs are welcoming to 2SLGBTQI+ seniors with this comprehensive checklist.</p>
                <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                  View Checklist →
                </a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-xl mb-3">Cultural Sensitivity Training Modules</h3>
                <p className="text-gray-700 mb-4">Access online modules for your staff on 2SLGBTQI+ cultural competency and best practices.</p>
                <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                  Access Training →
                </a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-xl mb-3">Case Studies in Affirming Care</h3>
                <p className="text-gray-700 mb-4">Examples of successful implementation of inclusive practices in senior care settings across Canada.</p>
                <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                  Read Case Studies →
                </a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-xl mb-3">Policy Development Toolkit</h3>
                <p className="text-gray-700 mb-4">Templates and guidelines for developing inclusive policies and procedures within your organization.</p>
                <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                  Download Toolkit →
                </a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-xl mb-3">Staff Assessment Tools</h3>
                <p className="text-gray-700 mb-4">Self-assessment questionnaires to gauge your organization's current level of 2SLGBTQI+ inclusivity.</p>
                <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                  Access Tools →
                </a>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Implementation Support</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">Personalized Consultation</h3>
                <p className="text-gray-700 mb-4">Schedule a one-on-one consultation with our inclusion specialists to discuss your organization's specific needs and challenges.</p>
                <a href="#" className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">
                  Book Consultation
                </a>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">Peer Network Forum</h3>
                <p className="text-gray-700 mb-4">Connect with other allied organizations to share experiences, challenges, and best practices in inclusive care.</p>
                <a href="#" className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">
                  Join Forum
                </a>
              </div>
            </div>
          </section>

          <div className="text-center pt-8">
            <a href="/resources" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
              ← Back to Resources
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}