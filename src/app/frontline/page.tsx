import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBookOpen, 
  faUsers, 
  faBullhorn, 
  faHandHoldingDollar, 
  faChalkboardTeacher, 
  faStar 
} from '@fortawesome/free-solid-svg-icons';
import Layout from '@/components/layout/Layout';
import { Settings } from 'lucide-react';

export default function FrontlinePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-2xl p-8 space-y-10">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <Settings className="w-16 h-16 icon-gradient" />
              </div>
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                For Our Frontline Members
              </h1>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                We are Senior Pride Network Canada/Réseau de la Fierté des personnes aînées du Canada (SPNC/RFAC), a national non-profit organization.
                We exist to unite, advocate for, and empower older, senior, and elder 2SLGBTQI+ (2-Spirited, Lesbian, Gay, Bisexual, Trans, Queer, Questioning, Intersex, and others) people across Canada.
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Empowering Your Work: Resources and Support</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="tile bg-gray-50 p-6 rounded-lg">
                  <FontAwesomeIcon icon={faBookOpen} className="text-2xl text-fuchsia-600" />
                  <h3 className="font-bold mt-2">Resource Library</h3>
                  <p className="text-sm text-gray-600">Access curated guides, toolkits, and research on 2SLGBTQI+ senior care.</p>
                </div>
                <div className="tile bg-gray-50 p-6 rounded-lg">
                  <FontAwesomeIcon icon={faUsers} className="text-2xl text-fuchsia-600" />
                  <h3 className="font-bold mt-2">Networking Hub</h3>
                  <p className="text-sm text-gray-600">Connect with peers, share best practices, and collaborate on initiatives.</p>
                </div>
                <div className="tile bg-gray-50 p-6 rounded-lg">
                  <FontAwesomeIcon icon={faBullhorn} className="text-2xl text-fuchsia-600" />
                  <h3 className="font-bold mt-2">Advocacy Support</h3>
                  <p className="text-sm text-gray-600">Access toolkits and legislative updates to inform your advocacy.</p>
                </div>
                <div className="tile bg-gray-50 p-6 rounded-lg">
                  <FontAwesomeIcon icon={faHandHoldingDollar} className="text-2xl text-fuchsia-600" />
                  <h3 className="font-bold mt-2">Funding Information</h3>
                  <p className="text-sm text-gray-600">Find grants, funding programs, and partnership opportunities.</p>
                </div>
                <div className="tile bg-gray-50 p-6 rounded-lg">
                  <FontAwesomeIcon icon={faChalkboardTeacher} className="text-2xl text-fuchsia-600" />
                  <h3 className="font-bold mt-2">Training & Workshops</h3>
                  <p className="text-sm text-gray-600">Specialized sessions to enhance your capacity and services.</p>
                </div>
                <div className="tile bg-gray-50 p-6 rounded-lg">
                  <FontAwesomeIcon icon={faStar} className="text-2xl text-fuchsia-600" />
                  <h3 className="font-bold mt-2">Visibility & Recognition</h3>
                  <p className="text-sm text-gray-600">Showcase your work via our directory and spotlight features.</p>
                </div>
              </div>
              <a href="#" className="inline-block mt-6 bg-fuchsia-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-700">
                Join Our Frontline Network
              </a>
            </div>

            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-2">
                <span className="chip">
                  <FontAwesomeIcon icon={faBookOpen} className="mr-1" /> Resource Library
                </span>
                <span className="chip">
                  <FontAwesomeIcon icon={faUsers} className="mr-1" /> Networking Hub
                </span>
                <span className="chip">
                  <FontAwesomeIcon icon={faBullhorn} className="mr-1" /> Advocacy
                </span>
                <span className="chip">
                  <FontAwesomeIcon icon={faHandHoldingDollar} className="mr-1" /> Funding
                </span>
                <span className="chip">
                  <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-1" /> Training
                </span>
                <span className="chip">
                  <FontAwesomeIcon icon={faStar} className="mr-1" /> Visibility
                </span>
              </div>
            </div>

            {/* Resource Library Section */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold">Resource Library for Frontline Members</h3>
              <p className="text-gray-700">
                Welcome to the comprehensive Resource Library, a curated collection of essential documents, guides, and tools designed to support your work with 2SLGBTQI+ seniors. We continually update this library with the latest research, best practices, and advocacy materials.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Inclusive Care Guides</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                    <li>Guide to Affirming Senior Care (PDF)</li>
                    <li>Checklist for Inclusive Intake Forms</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Research & Reports</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                    <li>National Survey on 2SLGBTQI+ Aging (2024)</li>
                    <li>Impact of Social Isolation on Queer Seniors</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Advocacy Toolkits & Templates</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                    <li>Community Advocacy Action Plan Template</li>
                    <li>Letter Template for Local Policy Makers</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Training Modules & Webinars</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                    <li>Recorded Webinar: Understanding Gender Identity in Seniors</li>
                    <li>Module: Addressing Ageism & Homophobia</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Legal & Rights Information</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                    <li>Legal Rights Fact Sheet for 2SLGBTQI+ Seniors</li>
                    <li>Housing Rights and Protections Overview</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Funding Resources</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                    <li>Grant Application Tips & Tricks</li>
                    <li>Directory of Senior-Focused Funding Bodies</li>
                  </ul>
                </div>
              </div>
              <a href="#" className="inline-block mt-2 text-fuchsia-600 font-semibold hover:text-fuchsia-800">
                Submit a Resource &rarr;
              </a>
            </section>

            {/* Networking Section */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold">Networking Hub for Frontline Members</h3>
              <p className="text-gray-700">
                Connect with other frontline organizations, share experiences, and collaborate on initiatives that empower 2SLGBTQI+ seniors across Canada.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Online Member Forum</h4>
                  <p className="text-sm text-gray-700">Engage in discussions, ask questions, and share insights with a secure community of peers.</p>
                  <a href="#" className="text-fuchsia-600 text-sm font-semibold">Go to Forum (Login Required) &rarr;</a>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Upcoming Webinars & Events</h4>
                  <p className="text-sm text-gray-700">Register for virtual and in-person events designed for professional development and networking.</p>
                  <a href="#" className="text-fuchsia-600 text-sm font-semibold">View Event Calendar &rarr;</a>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Peer Support Initiatives</h4>
                  <p className="text-sm text-gray-700">Join or form peer support groups focused on specific challenges or regions.</p>
                  <a href="#" className="text-fuchsia-600 text-sm font-semibold">Learn About Peer Groups &rarr;</a>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Member Directory</h4>
                  <p className="text-sm text-gray-700">Find contact information for other frontline organizations across Canada.</p>
                  <a href="#" className="text-fuchsia-600 text-sm font-semibold">Access Directory (Login Required) &rarr;</a>
                </div>
              </div>
              <a href="#" className="inline-block mt-2 text-fuchsia-600 text-sm font-semibold hover:text-fuchsia-800">
                Contact Us to Get Involved &rarr;
              </a>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}