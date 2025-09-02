import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function MissionVisionValuesPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <Link 
            href="/about" 
            className="inline-flex items-center text-fuchsia-600 hover:text-fuchsia-700 mb-6 font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to About Us
          </Link>
          <div className="bg-white rounded-2xl p-8 space-y-8">
            <h2 className="text-3xl font-bold">Mission, Vision & Values</h2>
            <div>
              <h3 className="text-2xl font-bold text-fuchsia-600 mb-2">Vision</h3>
              <p className="text-gray-700">
                A society where the lives and identities of older 2SLGBTQI+ people are respected, affirmed and celebrated, our voices amplified and heard, where we live with pride, are embraced and empowered, free from fear and discrimination, with a sense of belonging and inclusion.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-fuchsia-600 mb-2">Mission</h3>
              <p className="text-gray-700">
                Our mission is to bring together, advocate for, and represent the interests of older 2SLGBTQI+ people across Canada, fostering unity among organizations and individuals dedicated to supporting communities of older 2SLGBTQI+ people.
              </p>
              <p className="text-gray-700 mt-3">
                By facilitating collaboration, awareness, knowledge exchange, and mutual support among 2SLGBTQI+ groups and service providers for older adults, we aim to improve the quality of life and ensure the dignity and rights of older 2SLGBTQI+ people are upheld.
              </p>
              <p className="text-gray-700 mt-3">
                We strive to influence all policies in order to enact systemic, legislative, and other reforms that benefit the older 2SLGBTQI+ communities.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-fuchsia-600 mb-4">Values</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Reconciliation</h4>
                  <p className="text-gray-700">
                    Acknowledging historical and ongoing oppression of Indigenous 2SLGBTQI+ Elders and building respectful relationships through listening, learning, and collaboration to support healing and reconciliation.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Inclusivity</h4>
                  <p className="text-gray-700">
                    Embracing and celebrating the diversity of older 2SLGBTQI+ individuals.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Collaboration</h4>
                  <p className="text-gray-700">
                    Fostering collaboration and partnership among non-profit organizations, formal and informal groups, projects, and individuals working directly with older 2SLGBTQI+ people.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Advocacy</h4>
                  <p className="text-gray-700">
                    Commitment to advocating for systemic, social, and legislative changes that protect and advance the rights of older 2SLGBTQI+ individuals across Canada.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Empowerment</h4>
                  <p className="text-gray-700">
                    Empowering older 2SLGBTQI+ individuals to become self-advocates, enabling them to assert their rights, needs, visibility, and aspirations and promoting positive change within their communities.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Respect</h4>
                  <p className="text-gray-700">
                    Respecting the lives, the intersectionality of communities, and identities of older 2SLGBTQI+ people, affirming their voices, and creating an environment where they live with pride, free from fear and discrimination.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Transparency</h4>
                  <p className="text-gray-700">
                    Commitment to open communication, transparency in decision-making processes, and accountability to communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
