import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons';
import Layout from '@/components/layout/Layout';

export default function EducationPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-2xl p-8 space-y-10">
          <div className="text-center">
            <FontAwesomeIcon icon={faChalkboardUser} className="text-6xl text-blue-600 mb-4" />
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              Educational Resources for Allied Members
            </h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Access our specialized educational resources, including workshops and training modules, designed to enhance your team's understanding and capacity to serve 2SLGBTQI+ seniors with cultural competence and sensitivity.
            </p>
          </div>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Training Programs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-xl mb-3">On-Demand Cultural Competency Training</h3>
                <p className="text-gray-700 mb-4">Self-paced online modules covering 2SLGBTQI+ history, terminology, and best practices in inclusive senior care.</p>
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-sm">Modules include:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Understanding 2SLGBTQI+ terminology and identities</li>
                    <li>Historical context and generational trauma</li>
                    <li>Creating affirming environments</li>
                    <li>Addressing bias and discrimination</li>
                  </ul>
                </div>
                <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                  Access Training Modules →
                </a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-xl mb-3">Live Workshop Series</h3>
                <p className="text-gray-700 mb-4">Interactive workshops led by experts, covering specialized topics in 2SLGBTQI+ inclusive care and best practices.</p>
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-sm">Upcoming workshops:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Trans-inclusive healthcare practices</li>
                    <li>Supporting seniors with dementia</li>
                    <li>Family dynamics and chosen families</li>
                    <li>End-of-life care considerations</li>
                  </ul>
                </div>
                <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                  View Workshop Calendar →
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
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Program Overview</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                    <li>40 hours of training content</li>
                    <li>Interactive case studies and scenarios</li>
                    <li>Practical assessment and evaluation</li>
                    <li>Ongoing continuing education requirements</li>
                    <li>Certificate valid for 2 years</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3">Learning Outcomes</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                    <li>Demonstrate cultural competency</li>
                    <li>Apply inclusive care practices</li>
                    <li>Address unique health disparities</li>
                    <li>Create welcoming environments</li>
                    <li>Advocate for 2SLGBTQI+ seniors</li>
                  </ul>
                </div>
              </div>
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

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Educational Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">Research Library</h3>
                <p className="text-gray-700 mb-4">Access the latest research on 2SLGBTQI+ aging, health disparities, and inclusive care practices.</p>
                <ul className="list-disc list-inside text-sm text-gray-600 mb-4 space-y-1">
                  <li>Peer-reviewed studies</li>
                  <li>White papers and reports</li>
                  <li>Best practice guides</li>
                  <li>International perspectives</li>
                </ul>
                <a href="#" className="inline-block text-yellow-700 font-semibold hover:text-yellow-800">
                  Browse Library →
                </a>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">Webinar Archive</h3>
                <p className="text-gray-700 mb-4">Watch recorded webinars from our expert speakers on various topics related to 2SLGBTQI+ senior care.</p>
                <ul className="list-disc list-inside text-sm text-gray-600 mb-4 space-y-1">
                  <li>50+ recorded sessions</li>
                  <li>Expert guest speakers</li>
                  <li>Q&A sessions included</li>
                  <li>Downloadable resources</li>
                </ul>
                <a href="#" className="inline-block text-green-700 font-semibold hover:text-green-800">
                  Access Archive →
                </a>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">Toolkit Collection</h3>
                <p className="text-gray-700 mb-4">Download practical toolkits and resources for immediate implementation in your organization.</p>
                <ul className="list-disc list-inside text-sm text-gray-600 mb-4 space-y-1">
                  <li>Assessment checklists</li>
                  <li>Policy templates</li>
                  <li>Training materials</li>
                  <li>Communication guides</li>
                </ul>
                <a href="#" className="inline-block text-blue-700 font-semibold hover:text-blue-800">
                  Download Toolkits →
                </a>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Custom Training Solutions</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-2xl mb-4">Organizational Training</h3>
                  <p className="text-gray-700 mb-4">
                    We can develop customized training programs tailored to your organization's specific needs, context, and service delivery model.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                    <li>On-site or virtual delivery</li>
                    <li>Customized content and scenarios</li>
                    <li>Multiple session formats available</li>
                    <li>Follow-up coaching and support</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl mb-4">Train-the-Trainer Programs</h3>
                  <p className="text-gray-700 mb-4">
                    Develop internal capacity by training your staff to become certified trainers who can deliver 2SLGBTQI+ competency education within your organization.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                    <li>Comprehensive trainer certification</li>
                    <li>Training materials and resources provided</li>
                    <li>Ongoing support and updates</li>
                    <li>Quality assurance and evaluation</li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-8">
                <a href="#" className="inline-block bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-900">
                  Request Custom Training Quote
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