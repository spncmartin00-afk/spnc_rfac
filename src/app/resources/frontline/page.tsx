import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBookOpen, 
  faUsers, 
  faBullhorn, 
  faHandHoldingDollar, 
  faChalkboardTeacher, 
  faStar 
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { Settings, ArrowLeft } from 'lucide-react';

export default function FrontlinePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <Link 
            href="/resources" 
            className="inline-flex items-center text-fuchsia-600 hover:text-fuchsia-700 mb-6 font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
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
                <Link href="/resources/frontline/resource-library" className="tile bg-gray-50 p-6 rounded-lg cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all duration-200 block">
                  <FontAwesomeIcon icon={faBookOpen} className="text-2xl text-fuchsia-600" />
                  <h3 className="font-bold mt-2">Resource Library</h3>
                  <p className="text-sm text-gray-600">Access curated guides, toolkits, and research on 2SLGBTQI+ senior care.</p>
                </Link>
                <Link href="/resources/frontline/networking" className="tile bg-gray-50 p-6 rounded-lg cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all duration-200 block">
                  <FontAwesomeIcon icon={faUsers} className="text-2xl text-fuchsia-600" />
                  <h3 className="font-bold mt-2">Networking Hub</h3>
                  <p className="text-sm text-gray-600">Connect with peers, share best practices, and collaborate on initiatives.</p>
                </Link>
                <Link href="/resources/frontline/advocacy" className="tile bg-gray-50 p-6 rounded-lg cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all duration-200 block">
                  <FontAwesomeIcon icon={faBullhorn} className="text-2xl text-fuchsia-600" />
                  <h3 className="font-bold mt-2">Advocacy Support</h3>
                  <p className="text-sm text-gray-600">Access toolkits and legislative updates to inform your advocacy.</p>
                </Link>
                <Link href="/resources/frontline/funding" className="tile bg-gray-50 p-6 rounded-lg cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all duration-200 block">
                  <FontAwesomeIcon icon={faHandHoldingDollar} className="text-2xl text-fuchsia-600" />
                  <h3 className="font-bold mt-2">Funding Information</h3>
                  <p className="text-sm text-gray-600">Find grants, funding programs, and partnership opportunities.</p>
                </Link>
                <Link href="/resources/frontline/training" className="tile bg-gray-50 p-6 rounded-lg cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all duration-200 block">
                  <FontAwesomeIcon icon={faChalkboardTeacher} className="text-2xl text-fuchsia-600" />
                  <h3 className="font-bold mt-2">Training & Workshops</h3>
                  <p className="text-sm text-gray-600">Specialized sessions to enhance your capacity and services.</p>
                </Link>
                <Link href="/resources/frontline/visibility" className="tile bg-gray-50 p-6 rounded-lg cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all duration-200 block">
                  <FontAwesomeIcon icon={faStar} className="text-2xl text-fuchsia-600" />
                  <h3 className="font-bold mt-2">Visibility & Recognition</h3>
                  <p className="text-sm text-gray-600">Showcase your work via our directory and spotlight features.</p>
                </Link>
              </div>
              <a href="/membership" className="inline-block mt-6 bg-fuchsia-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-700">
                Join Our Frontline Network
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}