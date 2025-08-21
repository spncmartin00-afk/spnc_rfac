import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons';
import Layout from '@/components/layout/Layout';

export default function EducationPage() {
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
              <FontAwesomeIcon icon={faChalkboardUser} className="text-6xl text-blue-600 mb-4" />
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Educational Resources for Allied Members
              </h1>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Access our specialized educational resources, including workshops and training modules, designed to enhance your team&apos;s understanding and capacity to serve 2SLGBTQI+ seniors with cultural competence and sensitivity.
              </p>
            </div>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Training Programs</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-xl mb-3">On-Demand Cultural Competency Training</h3>
                  <p className="text-gray-700 mb-4">Self-paced online modules covering 2SLGBTQI+ history, terminology, and best practices in inclusive senior care.</p>
                  <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                    Access Training Modules &rarr;
                  </a>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-xl mb-3">Live Workshop Series</h3>
                  <p className="text-gray-700 mb-4">Interactive workshops led by experts, covering specialized topics in 2SLGBTQI+ inclusive care and best practices.</p>
                  <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                    View Workshop Calendar &rarr;
                  </a>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Certification Programs</h2>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg">
                <h3 className="font-semibold text-2xl mb-4">2SLGBTQI+ Inclusive Care Specialist Certification</h3>
                <p className="text-gray-700 mb-6">
                  Comprehensive certification program for healthcare and social service providers working with 2SLGBTQI+ seniors.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="inline-block bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700">
                    Start Certification
                  </a>
                  <a href="#" className="inline-block border-2 border-purple-600 text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-purple-600 hover:text-white">
                    Download Curriculum
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}