import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import Layout from '@/components/layout/Layout';

export default function ContributePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-2xl p-8 space-y-10">
          <div className="pt-8">
              <a href="/resources/allied" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                &larr; Back to Resources
              </a>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faLightbulb} className="text-6xl text-blue-600 mb-4" />
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Contribute Your Expertise as an Allied Member
              </h1>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Your organization&apos;s expertise is invaluable. We encourage allied members to contribute their research, case studies, and innovative programs to enrich our shared knowledge base and benefit the entire community.
              </p>
            </div>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Research & Publications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-xl mb-3">Submit Research & Publications</h3>
                  <p className="text-gray-700 mb-4">Share your studies, reports, or articles relevant to 2SLGBTQI+ aging and care. Your research helps inform policy, practice, and future program development.</p>
                  <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                    Upload Research &rarr;
                  </a>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-xl mb-3">Co-Author Publications</h3>
                  <p className="text-gray-700 mb-4">Collaborate with SPNC/RFAC researchers and other allied members on joint publications and research projects.</p>
                  <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                    Express Interest &rarr;
                  </a>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Program & Innovation Showcase</h2>
              <div className="bg-purple-50 p-8 rounded-lg">
                <h3 className="font-semibold text-2xl mb-4">Showcase Programs & Initiatives</h3>
                <p className="text-gray-700 mb-6">
                  Feature your successful programs that positively impact 2SLGBTQI+ seniors. Your innovations inspire others and contribute to the advancement of inclusive care across Canada.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3">Program Documentation</h4>
                    <p className="text-sm text-gray-700 mb-3">Submit detailed descriptions of your programs including objectives, methods, outcomes, and lessons learned.</p>
                    <a href="#" className="text-purple-600 font-semibold text-sm hover:text-purple-800">
                      Submit Program Details &rarr;
                    </a>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3">Video Case Studies</h4>
                    <p className="text-sm text-gray-700 mb-3">Create video testimonials and case studies showcasing the impact of your programs on 2SLGBTQI+ seniors.</p>
                    <a href="#" className="text-purple-600 font-semibold text-sm hover:text-purple-800">
                      Submit Video Content &rarr;
                    </a>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3">Innovation Awards</h4>
                    <p className="text-sm text-gray-700 mb-3">Apply for recognition through our annual innovation awards celebrating outstanding programs and initiatives.</p>
                    <a href="#" className="text-purple-600 font-semibold text-sm hover:text-purple-800">
                      Apply for Awards &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}