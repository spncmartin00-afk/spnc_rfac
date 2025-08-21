import Layout from '@/components/layout/Layout';

export default function MissionVisionValuesPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
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
          </div>
        </div>
      </div>
    </Layout>
  );
}
