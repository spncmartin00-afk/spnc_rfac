import Layout from '@/components/layout/Layout';

export default function LandAcknowledgement() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r via-orange-500 via-purple-600 from-red-500 to-pink-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Land Acknowledgement</h1>
            <p className="text-xl text-purple-100">
              Recognizing the traditional territories and Indigenous communities
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="prose max-w-none">
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8">
                <p className="text-gray-800 text-lg italic leading-relaxed">
                  We acknowledge that we are gathered on the traditional territories of the Blackfoot Confederacy (Siksika, Kainai, Piikani), the Tsuut'ina, the Îyâxe Nakoda Nations, the Métis Nation (Region 3), and all people who make their homes in the Treaty 7 region of Southern Alberta.
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-4">Our Commitment to Reconciliation</h2>
              <p className="mb-6">
                As an organization serving 2SLGBTQI+ seniors across Canada, we recognize the ongoing impacts of colonization on Indigenous communities and the unique challenges faced by Indigenous 2SLGBTQI+ elders. We are committed to learning, listening, and supporting reconciliation efforts.
              </p>

              <h2 className="text-2xl font-bold mb-4">Indigenous 2SLGBTQI+ Elders</h2>
              <p className="mb-6">
                We particularly acknowledge the resilience and wisdom of Indigenous 2SLGBTQI+ elders who have faced intersectional challenges of colonization, discrimination, and marginalization. Their strength and contributions to both Indigenous communities and 2SLGBTQI+ communities deserve recognition and support.
              </p>

              <h2 className="text-2xl font-bold mb-4">Two-Spirit Traditions</h2>
              <p className="mb-6">
                We honor the sacred Two-Spirit traditions of many Indigenous nations, recognizing that gender and sexual diversity have been celebrated in Indigenous communities long before colonization. We respect the distinct cultural meanings and practices associated with Two-Spirit identity.
              </p>

              <h2 className="text-2xl font-bold mb-4">Our Actions</h2>
              <p className="mb-4">We are committed to reconciliation through:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Supporting Indigenous-led organizations and initiatives</li>
                <li>Advocating for the specific needs of Indigenous 2SLGBTQI+ elders</li>
                <li>Educating our community about Indigenous history and ongoing issues</li>
                <li>Building meaningful relationships with Indigenous communities</li>
                <li>Ensuring Indigenous voices are heard in our advocacy work</li>
                <li>Supporting calls to action from the Truth and Reconciliation Commission</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Learning and Resources</h2>
              <p className="mb-4">
                We encourage all members of our community to learn about the Indigenous history of the lands where they live and work. Some resources to get started:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>
                  <a href="https://native-land.ca/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                    Native Land Digital
                  </a> - Learn about the traditional territories where you live
                </li>
                <li>
                  <a href="https://www.rcaanc-cirnac.gc.ca/eng/1100100014597/1572547985018" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                    Truth and Reconciliation Commission Calls to Action
                  </a>
                </li>
                <li>
                  <a href="https://www.mmiwg-ffada.ca/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                    National Inquiry into Missing and Murdered Indigenous Women and Girls
                  </a>
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="mb-4">
                If you are an Indigenous 2SLGBTQI+ elder or community member, or an ally working in Indigenous communities, we welcome your input on how we can better serve and support Indigenous 2SLGBTQI+ elders.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <p><strong>Email:</strong> indigenous@spnc-rfac.ca</p>
                <p><strong>General Contact:</strong> info@spnc-rfac.ca</p>
                <p><strong>Address:</strong> SPNC/RFAC, 10-30 Cleary Ave, Ottawa, ON, K2A 4A1</p>
              </div>

              <p className="text-sm text-gray-600 mt-8 italic">
                We acknowledge that land acknowledgements are just the beginning. True reconciliation requires ongoing action, commitment, and the redistribution of power and resources to Indigenous communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}