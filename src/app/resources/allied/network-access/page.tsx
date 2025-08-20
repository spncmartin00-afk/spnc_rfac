import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import Layout from '@/components/layout/Layout';

export default function NetworkAccessPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-2xl p-8 space-y-10">
            <div className="text-center">
              <FontAwesomeIcon icon={faNetworkWired} className="text-6xl text-blue-600 mb-4" />
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                National Network Access for Allied Members
              </h1>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                As an allied member, you gain access to a broader national network, staying informed on trends, policy developments, and collaborative opportunities that impact 2SLGBTQI+ aging across Canada.
              </p>
            </div>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Policy & Advocacy Network</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-xl mb-3">National Policy Updates</h3>
                  <p className="text-gray-700 mb-4">Receive regular updates on federal and provincial policies impacting 2SLGBTQI+ seniors, including healthcare, housing, and social services legislation.</p>
                  <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                    View Policy Briefs &rarr;
                  </a>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-xl mb-3">Advocacy Toolkit</h3>
                  <p className="text-gray-700 mb-4">Access resources and templates for advocacy efforts, including letter templates, fact sheets, and talking points for engaging with policymakers.</p>
                  <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                    Download Toolkit &rarr;
                  </a>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-xl mb-3">Legislative Action Alerts</h3>
                  <p className="text-gray-700 mb-4">Get notified about time-sensitive legislative opportunities where your voice and advocacy can make a difference for 2SLGBTQI+ seniors.</p>
                  <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                    Sign Up for Alerts &rarr;
                  </a>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Research & Trends Intelligence</h2>
              <div className="bg-purple-50 p-8 rounded-lg">
                <h3 className="font-semibold text-2xl mb-4">Trends in Senior Care</h3>
                <p className="text-gray-700 mb-6">
                  Gain insights into emerging trends and best practices in inclusive senior care across Canada and internationally, helping you stay ahead of the curve.
                </p>
                <div className="text-center">
                  <a href="#" className="inline-block bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 mr-4">
                    Access Research Portal
                  </a>
                  <a href="#" className="inline-block border-2 border-purple-600 text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-purple-600 hover:text-white">
                    View Sample Report
                  </a>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Connect?</h2>
                <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                  Your network access begins immediately upon becoming an allied member. Join thousands of organizations and practitioners working together to improve the lives of 2SLGBTQI+ seniors across Canada.
                </p>
                <div className="space-x-4">
                  <a href="#" className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700">
                    Activate Network Access
                  </a>
                  <a href="#" className="inline-block border-2 border-blue-600 text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 hover:text-white">
                    Network Directory
                  </a>
                </div>
              </div>
            </section>

            <div className="text-center pt-8">
              <a href="/resources" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                &larr; Back to Resources
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}