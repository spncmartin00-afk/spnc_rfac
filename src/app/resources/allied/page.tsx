import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLanguage,
  faBullseye,
  faHandshakeAngle,
  faChalkboardUser,
  faLightbulb,
  faNetworkWired
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { HandHeart, ArrowLeft } from 'lucide-react';

export default function AlliedPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <Link 
            href="/resources" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
          <div className="bg-white rounded-2xl p-8 space-y-10">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <HandHeart className="w-16 h-16 icon-gradient" />
              </div>
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                For Our Allied Members
              </h1>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                We are Senior Pride Network Canada/Réseau de la Fierté des personnes aînées du Canada (SPNC/RFAC), a national non-profit organization.
                We exist to unite, advocate for, and empower older, senior, and elder 2SLGBTQI+ (2-Spirited, Lesbian, Gay, Bisexual, Trans, Queer, Questioning, Intersex, and others) people across Canada.
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Partnering for Broader Inclusive Senior Care</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/resources/allied/inclusion-guidance" className="tile bg-gray-50 p-6 rounded-lg cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all duration-200 block">
                  <FontAwesomeIcon icon={faLanguage} className="text-2xl text-blue-600" />
                  <h3 className="font-bold mt-2">Inclusion Guidance</h3>
                  <p className="text-sm text-gray-600">Access resources and checklists to integrate 2SLGBTQI+ inclusive practices.</p>
                </Link>
                <Link href="/resources/allied/visibility" className="tile bg-gray-50 p-6 rounded-lg cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all duration-200 block">
                  <FontAwesomeIcon icon={faBullseye} className="text-2xl text-blue-600" />
                  <h3 className="font-bold mt-2">Increased Visibility</h3>
                  <p className="text-sm text-gray-600">Get listed in our public directory, reaching 2SLGBTQI+ seniors and groups.</p>
                </Link>
                <Link href="/resources/allied/collaboration" className="tile bg-gray-50 p-6 rounded-lg cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all duration-200 block">
                  <FontAwesomeIcon icon={faHandshakeAngle} className="text-2xl text-blue-600" />
                  <h3 className="font-bold mt-2">Collaboration</h3>
                  <p className="text-sm text-gray-600">Explore partnerships with SPNC/RFAC and frontline organizations.</p>
                </Link>
                <Link href="/resources/allied/education" className="tile bg-gray-50 p-6 rounded-lg cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all duration-200 block">
                  <FontAwesomeIcon icon={faChalkboardUser} className="text-2xl text-blue-600" />
                  <h3 className="font-bold mt-2">Educational Resources</h3>
                  <p className="text-sm text-gray-600">Participate in workshops on 2SLGBTQI+ cultural competency.</p>
                </Link>
                <Link href="/resources/allied/contribute" className="tile bg-gray-50 p-6 rounded-lg cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all duration-200 block">
                  <FontAwesomeIcon icon={faLightbulb} className="text-2xl text-blue-600" />
                  <h3 className="font-bold mt-2">Contribute Expertise</h3>
                  <p className="text-sm text-gray-600">Share research, case studies, and innovative programs with our network.</p>
                </Link>
                <Link href="/resources/allied/network-access" className="tile bg-gray-50 p-6 rounded-lg cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all duration-200 block">
                  <FontAwesomeIcon icon={faNetworkWired} className="text-2xl text-blue-600" />
                  <h3 className="font-bold mt-2">National Network Access</h3>
                  <p className="text-sm text-gray-600">Stay informed on trends and policy developments in 2SLGBTQI+ aging.</p>
                </Link>
              </div>
            </div>
            
            <section className="space-y-4 text-center">
              <h3 className="text-2xl font-bold">Benefits of Becoming an Allied Member</h3>
              <p className="text-gray-700 max-w-3xl mx-auto">
                By partnering with SPNC/RFAC, your organization demonstrates a strong commitment to diversity and inclusion. Gain access to specialized knowledge, connect with a vibrant network, and enhance your services to better serve 2SLGBTQI+ seniors. This collaboration strengthens your brand as an inclusive provider.
              </p>
              <p className="text-gray-700 max-w-3xl mx-auto">
                We invite you to actively review our guidelines for inclusive practices, integrate our resources into your operations, and share your own expertise to foster a more comprehensive and affirming landscape for all seniors in Canada.
              </p>
              <a href="/membership" className="inline-block mt-2 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700">Become an Allied Member</a>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}