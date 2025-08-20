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
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-sm">Stay informed about:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Healthcare policy changes</li>
                    <li>Housing and accommodation rights</li>
                    <li>Anti-discrimination legislation</li>
                    <li>Funding and grant opportunities</li>
                  </ul>
                </div>
                <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                  View Policy Briefs →
                </a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-xl mb-3">Advocacy Toolkit</h3>
                <p className="text-gray-700 mb-4">Access resources and templates for advocacy efforts, including letter templates, fact sheets, and talking points for engaging with policymakers.</p>
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-sm">Toolkit includes:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Template letters to government officials</li>
                    <li>Key statistics and talking points</li>
                    <li>Media engagement strategies</li>
                    <li>Coalition-building resources</li>
                  </ul>
                </div>
                <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                  Download Toolkit →
                </a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-xl mb-3">Legislative Action Alerts</h3>
                <p className="text-gray-700 mb-4">Get notified about time-sensitive legislative opportunities where your voice and advocacy can make a difference for 2SLGBTQI+ seniors.</p>
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-sm">Alert types:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Public consultation opportunities</li>
                    <li>Committee hearing notifications</li>
                    <li>Vote alerts and calls to action</li>
                    <li>Coalition campaign launches</li>
                  </ul>
                </div>
                <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                  Sign Up for Alerts →
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
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Research Access</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                    <li>Quarterly trend reports and analysis</li>
                    <li>Exclusive research findings</li>
                    <li>International comparative studies</li>
                    <li>Future forecasting and predictions</li>
                    <li>Technology and innovation updates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3">Data Dashboard</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                    <li>Real-time statistics and metrics</li>
                    <li>Regional and national comparisons</li>
                    <li>Service demand projections</li>
                    <li>Funding landscape analysis</li>
                    <li>Outcome measurement tools</li>
                  </ul>
                </div>
              </div>
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

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Professional Networks & Communities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">Allied Member Forum</h3>
                <p className="text-gray-700 mb-4">Connect with other allied organizations across Canada in our secure online forum to share experiences, ask questions, and collaborate on initiatives.</p>
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-sm">Forum features:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Topic-based discussion groups</li>
                    <li>Resource sharing library</li>
                    <li>Regional networking groups</li>
                    <li>Expert Q&A sessions</li>
                    <li>Job and opportunity postings</li>
                  </ul>
                </div>
                <a href="#" className="inline-block text-green-600 font-semibold hover:text-green-800">
                  Join Forum →
                </a>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">Expert Advisory Panels</h3>
                <p className="text-gray-700 mb-4">Participate in specialized advisory panels that inform SPNC/RFAC policy positions, program development, and strategic initiatives.</p>
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-sm">Panel areas:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Healthcare and medical care</li>
                    <li>Housing and long-term care</li>
                    <li>Mental health and wellness</li>
                    <li>Legal and advocacy issues</li>
                    <li>Technology and innovation</li>
                  </ul>
                </div>
                <a href="#" className="inline-block text-green-600 font-semibold hover:text-green-800">
                  Apply to Join Panel →
                </a>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Events & Networking</h2>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="font-semibold text-2xl mb-4">Exclusive Member Events</h3>
              <p className="text-gray-700 mb-6">
                Access to exclusive events designed specifically for allied members, including networking receptions, professional development sessions, and strategic planning workshops.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3">Annual Conference</h4>
                  <p className="text-sm text-gray-700 mb-3">Priority registration and special sessions for allied members at our national conference.</p>
                  <a href="#" className="text-blue-600 font-semibold text-sm hover:text-blue-800">
                    View Conference Info →
                  </a>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3">Regional Meetups</h4>
                  <p className="text-sm text-gray-700 mb-3">Local networking events and professional development sessions organized by region.</p>
                  <a href="#" className="text-blue-600 font-semibold text-sm hover:text-blue-800">
                    Find Local Events →
                  </a>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3">Virtual Summits</h4>
                  <p className="text-sm text-gray-700 mb-3">Online events featuring expert speakers, panel discussions, and interactive workshops.</p>
                  <a href="#" className="text-blue-600 font-semibold text-sm hover:text-blue-800">
                    Register for Summit →
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Funding & Grant Intelligence</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">Grant Opportunity Database</h3>
                <p className="text-gray-700 mb-4">Access a curated database of funding opportunities specifically relevant to organizations serving 2SLGBTQI+ seniors and allied services.</p>
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-sm">Database features:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Federal and provincial grants</li>
                    <li>Foundation funding opportunities</li>
                    <li>Corporate sponsorship programs</li>
                    <li>Application deadline tracking</li>
                    <li>Success rate analytics</li>
                  </ul>
                </div>
                <a href="#" className="inline-block text-yellow-700 font-semibold hover:text-yellow-800">
                  Browse Database →
                </a>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">Collaborative Funding</h3>
                <p className="text-gray-700 mb-4">Participate in joint funding applications and consortium bids that leverage the collective strength of allied members.</p>
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-sm">Collaborative opportunities:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Multi-organization grant applications</li>
                    <li>Research consortium participation</li>
                    <li>Shared infrastructure projects</li>
                    <li>Joint program development</li>
                    <li>Coordinated service delivery</li>
                  </ul>
                </div>
                <a href="#" className="inline-block text-yellow-700 font-semibold hover:text-yellow-800">
                  Express Interest →
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
              ← Back to Resources
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}