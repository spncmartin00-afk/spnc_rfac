import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import Layout from '@/components/layout/Layout';

export default function ContributePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-2xl p-8 space-y-10">
          <div className="text-center">
            <FontAwesomeIcon icon={faLightbulb} className="text-6xl text-blue-600 mb-4" />
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              Contribute Your Expertise as an Allied Member
            </h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Your organization's expertise is invaluable. We encourage allied members to contribute their research, case studies, and innovative programs to enrich our shared knowledge base and benefit the entire community.
            </p>
          </div>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Research & Publications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-xl mb-3">Submit Research & Publications</h3>
                <p className="text-gray-700 mb-4">Share your studies, reports, or articles relevant to 2SLGBTQI+ aging and care. Your research helps inform policy, practice, and future program development.</p>
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-sm">We welcome:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Peer-reviewed research studies</li>
                    <li>Program evaluation reports</li>
                    <li>Policy analysis and white papers</li>
                    <li>Literature reviews and meta-analyses</li>
                    <li>Conference presentations</li>
                  </ul>
                </div>
                <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                  Upload Research →
                </a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-xl mb-3">Co-Author Publications</h3>
                <p className="text-gray-700 mb-4">Collaborate with SPNC/RFAC researchers and other allied members on joint publications and research projects.</p>
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-sm">Opportunities include:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Multi-site research studies</li>
                    <li>Comparative analysis projects</li>
                    <li>Best practice compilations</li>
                    <li>Policy recommendation papers</li>
                    <li>Special issue contributions</li>
                  </ul>
                </div>
                <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800">
                  Express Interest →
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
                    Submit Program Details →
                  </a>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3">Video Case Studies</h4>
                  <p className="text-sm text-gray-700 mb-3">Create video testimonials and case studies showcasing the impact of your programs on 2SLGBTQI+ seniors.</p>
                  <a href="#" className="text-purple-600 font-semibold text-sm hover:text-purple-800">
                    Submit Video Content →
                  </a>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3">Innovation Awards</h4>
                  <p className="text-sm text-gray-700 mb-3">Apply for recognition through our annual innovation awards celebrating outstanding programs and initiatives.</p>
                  <a href="#" className="text-purple-600 font-semibold text-sm hover:text-purple-800">
                    Apply for Awards →
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Knowledge Sharing Platforms</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">Expert Speaker Bureau</h3>
                <p className="text-gray-700 mb-4">Join our speaker bureau to share your expertise at conferences, webinars, and training events across Canada.</p>
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-sm">Speaking opportunities:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>National and regional conferences</li>
                    <li>Webinar series presentations</li>
                    <li>Training workshop facilitation</li>
                    <li>Panel discussions and forums</li>
                    <li>Media interviews and podcasts</li>
                  </ul>
                </div>
                <a href="#" className="inline-block text-green-600 font-semibold hover:text-green-800">
                  Join Speaker Bureau →
                </a>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">Mentorship Program</h3>
                <p className="text-gray-700 mb-4">Share your expertise by mentoring emerging organizations and practitioners in 2SLGBTQI+ inclusive care.</p>
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-sm">Mentorship activities:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>One-on-one guidance sessions</li>
                    <li>Program development support</li>
                    <li>Policy consultation</li>
                    <li>Staff training assistance</li>
                    <li>Strategic planning guidance</li>
                  </ul>
                </div>
                <a href="#" className="inline-block text-green-600 font-semibold hover:text-green-800">
                  Become a Mentor →
                </a>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Data & Insights Contribution</h2>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="font-semibold text-2xl mb-4">National Data Collection Initiative</h3>
              <p className="text-gray-700 mb-6">
                Contribute to our understanding of 2SLGBTQI+ seniors' needs and experiences by participating in data collection efforts and sharing anonymized program data.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Data Sharing Opportunities</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                    <li>Program outcome data</li>
                    <li>Service utilization statistics</li>
                    <li>Client demographic information (anonymized)</li>
                    <li>Staff training and competency data</li>
                    <li>Cost-effectiveness analyses</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3">Benefits of Participation</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                    <li>Benchmarking against national standards</li>
                    <li>Access to aggregated insights</li>
                    <li>Recognition in research publications</li>
                    <li>Input on policy recommendations</li>
                    <li>Networking with other contributors</li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <a href="#" className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 mr-4">
                  Join Data Initiative
                </a>
                <a href="#" className="inline-block border-2 border-blue-600 text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 hover:text-white">
                  Data Privacy Guidelines
                </a>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Content Creation & Media</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">Blog Contributions</h3>
                <p className="text-gray-700 mb-4">Write articles for our blog and newsletter, sharing insights, experiences, and advice with our community.</p>
                <a href="#" className="inline-block text-yellow-700 font-semibold hover:text-yellow-800">
                  Submit Article →
                </a>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">Resource Development</h3>
                <p className="text-gray-700 mb-4">Help create educational materials, toolkits, and guides for use by allied organizations across Canada.</p>
                <a href="#" className="inline-block text-yellow-700 font-semibold hover:text-yellow-800">
                  Volunteer as Developer →
                </a>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">Podcast & Media</h3>
                <p className="text-gray-700 mb-4">Participate in our podcast series and media initiatives to amplify important messages about 2SLGBTQI+ senior care.</p>
                <a href="#" className="inline-block text-yellow-700 font-semibold hover:text-yellow-800">
                  Express Interest →
                </a>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Recognition & Impact</h2>
              <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                Your contributions make a real difference in the lives of 2SLGBTQI+ seniors across Canada. We recognize and celebrate the expertise, innovation, and dedication of our allied members through various recognition programs.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Annual Awards</h4>
                  <p className="text-sm text-gray-700">Recognition at our national conference and in our annual report.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Media Features</h4>
                  <p className="text-sm text-gray-700">Highlighting your contributions in newsletters, social media, and publications.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Leadership Opportunities</h4>
                  <p className="text-sm text-gray-700">Invitations to join advisory committees and working groups.</p>
                </div>
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