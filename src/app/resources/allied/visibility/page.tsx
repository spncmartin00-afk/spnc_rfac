import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import Layout from '@/components/layout/Layout';

export default function VisibilityPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-2xl p-8 space-y-10">
            <div className="text-center">
              <FontAwesomeIcon icon={faBullseye} className="text-6xl text-blue-600 mb-4" />
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Increased Visibility for Allied Members
              </h1>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Showcase your commitment to inclusive senior care and reach a wider audience of 2SLGBTQI+ seniors and their families by being featured in our Allied Member directory and promotional channels.
              </p>
            </div>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Directory & Listing Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-xl mb-3">Premium Directory Listing</h3>
                  <p className="text-gray-700 mb-4">Your organization will have a detailed and prominent listing in our public-facing Allied Member directory, complete with contact information, services offered, and inclusion certifications.</p>
                  <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                    Manage Your Listing &rarr;
                  </a>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-xl mb-3">Featured Organization Spotlight</h3>
                  <p className="text-gray-700 mb-4">Be highlighted as a featured organization on our website homepage, showcasing your commitment to 2SLGBTQI+ inclusive care.</p>
                  <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                    Apply for Spotlight &rarr;
                  </a>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Certification & Recognition</h2>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
                <h3 className="font-semibold text-2xl mb-4">2SLGBTQI+ Inclusive Care Certification</h3>
                <p className="text-gray-700 mb-6">
                  Earn our official certification badge to display on your website, marketing materials, and physical location, demonstrating your commitment to inclusive senior care.
                </p>
                <div className="mt-6">
                  <a href="#" className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700">
                    Start Certification Process
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