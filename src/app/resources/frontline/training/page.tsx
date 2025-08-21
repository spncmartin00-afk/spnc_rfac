import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faVideo, faCalendarAlt, faCertificate, faUsers, faDownload } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { ArrowLeft } from 'lucide-react';

export default function TrainingPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-2xl p-8 space-y-10">
            <div className="flex items-center mb-6">
              <Link href="/resources/frontline" className="flex items-center text-fuchsia-600 hover:text-fuchsia-800 mr-4">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Frontline
              </Link>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <FontAwesomeIcon icon={faChalkboardTeacher} className="w-16 h-16 text-fuchsia-600" />
              </div>
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Training & Workshops for Frontline Members
              </h1>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Specialized sessions to enhance your capacity and services. Build your skills and knowledge to better serve 2SLGBTQI+ seniors through our comprehensive training programs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faVideo} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Online Training Modules</h3>
                <p className="text-gray-600 text-sm mb-4">Self-paced learning modules covering key topics in 2SLGBTQI+ senior care and cultural competency.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  Access Modules →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Live Webinars</h3>
                <p className="text-gray-600 text-sm mb-4">Interactive online sessions with experts, Q&A opportunities, and real-time discussion with peers.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  View Schedule →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faUsers} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">In-Person Workshops</h3>
                <p className="text-gray-600 text-sm mb-4">Regional training sessions providing hands-on learning and networking opportunities with local organizations.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  Find Workshops →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faCertificate} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Certification Programs</h3>
                <p className="text-gray-600 text-sm mb-4">Comprehensive certification courses for staff and volunteers working with 2SLGBTQI+ seniors.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  Learn About Certification →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faDownload} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Training Resources</h3>
                <p className="text-gray-600 text-sm mb-4">Downloadable materials, toolkits, and resources for internal staff training and development.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  Download Resources →
                </a>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 p-6 rounded-lg border border-fuchsia-200">
                <FontAwesomeIcon icon={faUsers} className="text-2xl text-fuchsia-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3">Train-the-Trainer</h3>
                <p className="text-gray-600 text-sm mb-4">Programs to develop internal training capacity within your organization for sustainable knowledge transfer.</p>
                <a href="#" className="text-fuchsia-600 font-semibold text-sm hover:text-fuchsia-800">
                  Join Program →
                </a>
              </div>
            </div>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-center">Featured Training Programs</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="font-semibold text-xl text-fuchsia-600 mb-3">Cultural Competency Fundamentals</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Online
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      4 hours
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Certificate
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Essential training covering 2SLGBTQI+ terminology, identity concepts, and best practices for creating inclusive environments for seniors.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-4">
                    <li>Understanding gender identity and sexual orientation</li>
                    <li>Inclusive language and communication</li>
                    <li>Recognizing and addressing bias</li>
                    <li>Creating welcoming spaces</li>
                  </ul>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Start Training →</a>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="font-semibold text-xl text-fuchsia-600 mb-3">Advanced Care Coordination</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                      In-Person
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      2 days
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Certificate
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Intensive workshop for healthcare coordinators and social workers focusing on complex care planning for 2SLGBTQI+ seniors.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-4">
                    <li>Comprehensive care planning approaches</li>
                    <li>Family and support network navigation</li>
                    <li>Healthcare advocacy strategies</li>
                    <li>Legal and ethical considerations</li>
                  </ul>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Register for Workshop →</a>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="font-semibold text-xl text-fuchsia-600 mb-3">Mental Health & Wellness</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Hybrid
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      6 hours
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Certificate
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Specialized training addressing unique mental health challenges faced by 2SLGBTQI+ seniors and evidence-based intervention strategies.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-4">
                    <li>Trauma-informed care approaches</li>
                    <li>Depression and anxiety management</li>
                    <li>Substance use considerations</li>
                    <li>Crisis intervention techniques</li>
                  </ul>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Learn More →</a>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="font-semibold text-xl text-fuchsia-600 mb-3">Legal & Advocacy Essentials</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Webinar
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      3 hours
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Certificate
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Understanding legal rights, protections, and advocacy strategies for 2SLGBTQI+ seniors in healthcare, housing, and social services.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-4">
                    <li>Human rights legislation overview</li>
                    <li>Elder abuse prevention and reporting</li>
                    <li>Healthcare decision-making rights</li>
                    <li>Housing and accommodation rights</li>
                  </ul>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Join Webinar →</a>
                </div>
              </div>
            </section>

            <section className="bg-fuchsia-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">Upcoming Training Calendar</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Introduction to 2SLGBTQI+ Seniors</h4>
                    <span className="bg-fuchsia-100 text-fuchsia-800 px-2 py-1 rounded text-xs">
                      Feb 25
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Basic orientation for new staff and volunteers</p>
                  <p className="text-xs text-gray-600">Online • 2 hours • Free</p>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Register →</a>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Healthcare Navigation Workshop</h4>
                    <span className="bg-fuchsia-100 text-fuchsia-800 px-2 py-1 rounded text-xs">
                      Mar 10
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Supporting seniors through healthcare systems</p>
                  <p className="text-xs text-gray-600">In-person • 4 hours • $75</p>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Register →</a>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Crisis Intervention Certification</h4>
                    <span className="bg-fuchsia-100 text-fuchsia-800 px-2 py-1 rounded text-xs">
                      Mar 22-23
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Two-day intensive certification program</p>
                  <p className="text-xs text-gray-600">In-person • 16 hours • $250</p>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Register →</a>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Family Engagement Strategies</h4>
                    <span className="bg-fuchsia-100 text-fuchsia-800 px-2 py-1 rounded text-xs">
                      Apr 5
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Working with chosen and biological families</p>
                  <p className="text-xs text-gray-600">Webinar • 3 hours • $50</p>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Register →</a>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Program Evaluation Workshop</h4>
                    <span className="bg-fuchsia-100 text-fuchsia-800 px-2 py-1 rounded text-xs">
                      Apr 18
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Measuring impact and outcomes</p>
                  <p className="text-xs text-gray-600">Online • 4 hours • $100</p>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Register →</a>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Annual Training Conference</h4>
                    <span className="bg-fuchsia-100 text-fuchsia-800 px-2 py-1 rounded text-xs">
                      Jun 8-10
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Three-day comprehensive training event</p>
                  <p className="text-xs text-gray-600">In-person • 3 days • $400</p>
                  <a href="#" className="text-fuchsia-600 font-semibold text-sm">Register →</a>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-center">Custom Training Solutions</h3>
              <div className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white p-8 rounded-lg text-center">
                <h4 className="text-xl font-bold mb-4">Tailored Training for Your Organization</h4>
                <p className="mb-6">
                  We offer customized training programs designed specifically for your organization's needs, staff size, and service model. Our expert trainers can deliver on-site or virtual sessions.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Organizational Assessment</h5>
                    <p className="text-sm">Evaluate current capacity and identify training needs</p>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Custom Curriculum</h5>
                    <p className="text-sm">Develop training content specific to your context</p>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Ongoing Support</h5>
                    <p className="text-sm">Provide follow-up coaching and resource development</p>
                  </div>
                </div>
                <a href="#" className="bg-white text-fuchsia-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100">
                  Request Custom Training Consultation
                </a>
              </div>
            </section>

            <div className="text-center space-y-4">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-2">Training Support & Resources</h3>
                <p className="text-gray-700 mb-4">
                  Access our comprehensive library of training materials, certification tracking, and ongoing professional development resources.
                </p>
                <a href="#" className="inline-block bg-fuchsia-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-700">
                  Access Training Portal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}