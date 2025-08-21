import Layout from '@/components/layout/Layout';

export default function OurMandatePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6">Our Mandate</h2>
            <p className="text-gray-700 mb-4">
              Our mandate is to unite non-profit organizations, formal and informal groups, projects, and individuals who work directly for and with older 2SLGBTQI+ people across the country to champion the well-being of 2SLGBTQI+ older adults. 
            </p>
            <p className="text-gray-700 mb-4 font-semibold">We will do it by:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Advocacy:</strong> Champion systemic policy and legislative changes that protect and advance the rights of older 2SLGBTQI+ individuals.</li>
              <li><strong>Representation:</strong> Cultivate a strong, collective voice with diverse representation across Canada.</li>
              <li><strong>Capacity Building:</strong> Bolster the capabilities of all involved organizations in supporting 2SLGBTQI+ older adults.</li>
              <li><strong>Research, Education, and Support Initiatives:</strong> Support the capacity of organizations that serve older 2SLGBTQI+ communities through research, education, and support initiatives.</li>
              <li><strong>Collaborative Hub and Knowledge Sharing for Organizations:</strong> Serve as a central point for collaboration and knowledge sharing among entities working with older 2SLGBTQI+ populations.</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
