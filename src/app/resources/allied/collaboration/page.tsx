import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
import Layout from '@/components/layout/Layout';

export default function CollaborationPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-2xl p-8 space-y-10">
          <div className="text-center">
            <FontAwesomeIcon icon={faHandshakeAngle} className="text-6xl text-blue-600 mb-4" />
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              Collaboration Opportunities for Allied Members
            </h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              We invite allied organizations to collaborate with SPNC/RFAC and our frontline members on various initiatives. Partnership is key to expanding our collective impact and improving the lives of 2SLGBTQI+ seniors across Canada.
            </p>
          </div>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Partnership Programs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-xl mb-3">Joint Program Development</h3>
                <p className="text-gray-700 mb-4">Collaborate with SPNC/RFAC to develop and implement new programs or services specifically targeting the unique needs of 2SLGBTQI+ seniors in your community.</p>
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold">Examples include:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Affirming housing initiatives</li>
                    <li>Health and wellness programs</li>
                    <li>Social connection activities</li>
                    <li>Legal advocacy services</li>
                  </ul>
                </div>
                <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                  Propose a Partnership →
                </a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-xl mb-3">Co-host Events & Webinars</h3>
                <p className="text-gray-700 mb-4">Partner with us to organize and promote educational events, workshops, and webinars relevant to 2SLGBTQI+ aging and inclusive care practices.</p>
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold">Event types:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Educational webinars</li>
                    <li>Community workshops</li>
                    <li>Networking events</li>
                    <li>Advocacy campaigns</li>
                  </ul>
                </div>
                <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                  Suggest an Event →
                </a>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Research & Innovation Partnerships</h2>
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="font-semibold text-2xl mb-4">Collaborative Research Initiatives</h3>
              <p className="text-gray-700 mb-6">
                Join our research network to contribute to and benefit from groundbreaking studies on 2SLGBTQI+ aging, inclusive care practices, and policy development.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Data Collection</h4>
                  <p className="text-sm text-gray-700">Participate in national surveys and data collection efforts to better understand the needs of 2SLGBTQI+ seniors.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Best Practices</h4>
                  <p className="text-sm text-gray-700">Contribute to and access research on effective inclusive care practices and program implementation.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Policy Development</h4>
                  <p className="text-sm text-gray-700">Collaborate on policy research and advocacy efforts to improve conditions for 2SLGBTQI+ seniors nationwide.</p>
                </div>
              </div>
              <div className="mt-6">
                <a href="#" className="inline-block bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700">
                  Join Research Network
                </a>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Resource Sharing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">Facility & Space Sharing</h3>
                <p className="text-gray-700 mb-4">Partner with frontline organizations to share facilities, meeting spaces, or resources for 2SLGBTQI+ senior programming.</p>
                <ul className="list-disc list-inside text-sm text-gray-600 mb-4 space-y-1">
                  <li>Meeting room availability</li>
                  <li>Event space partnerships</li>
                  <li>Equipment and resource sharing</li>
                  <li>Co-located service delivery</li>
                </ul>
                <a href="#" className="inline-block text-green-600 font-semibold hover:text-green-800">
                  Explore Space Sharing →
                </a>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">Expertise Exchange</h3>
                <p className="text-gray-700 mb-4">Share your organization's specialized knowledge while accessing expertise from other allied and frontline members.</p>
                <ul className="list-disc list-inside text-sm text-gray-600 mb-4 space-y-1">
                  <li>Professional consultation</li>
                  <li>Staff training exchanges</li>
                  <li>Best practice sharing</li>
                  <li>Mentorship programs</li>
                </ul>
                <a href="#" className="inline-block text-green-600 font-semibold hover:text-green-800">
                  Join Expertise Network →
                </a>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 p-8 rounded-lg">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Collaborate?</h2>
              <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                Our partnership team is ready to work with you to identify collaboration opportunities that align with your organization's goals and capacity while maximizing impact for 2SLGBTQI+ seniors.
              </p>
              <div className="space-x-4">
                <a href="#" className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700">
                  Schedule Partnership Meeting
                </a>
                <a href="#" className="inline-block border-2 border-blue-600 text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 hover:text-white">
                  Download Partnership Guide
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