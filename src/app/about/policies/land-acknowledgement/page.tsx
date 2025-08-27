import Layout from '@/components/layout/Layout';

export default function LandAcknowledgement() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r via-orange-500 via-purple-600 from-red-500 to-pink-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Land Acknowledgement</h1>
            <p className="text-xl text-purple-100">
              Acknowledging the traditional territories on which we operate.
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="prose max-w-none">
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8">
                <p className="text-gray-800 text-lg italic leading-relaxed">
                  Inclusify by All Welcome Consulting acknowledges that its operations, based in Ottawa, Ontario, are situated on the traditional, unceded territory of the Algonquin Anishinaabe People.
                </p>
              </div>

              <p className="mb-6">
                The Anishinaabe Peoples have lived on this land since time immemorial, and we recognize their enduring presence and contributions to this region. We are grateful to have the opportunity to work and live on these lands.
              </p>

              <p className="mb-6">
                We understand that a land acknowledgment is only a small part of cultivating strong relationships with Indigenous peoples and respecting their rights and sovereignty. It is a starting point for ongoing learning, reflection, and action towards reconciliation. You can identify the traditional territory you are on by visiting <a href="https://native-land.ca/" target="_blank" rel="noopener noreferrer" className="text-fuchsia-600 hover:underline">Native Land Digital</a>.
              </p>

              <p className="mb-6">
                Inclusify by All Welcome Consulting is committed to ongoing learning about the history and current realities of Indigenous Peoples in Canada and to supporting reconciliation efforts. We strive to incorporate Indigenous perspectives and ways of knowing into our work in a manner that is both appropriate and respectful.
              </p>

              <p className="mb-6">
                We encourage everyone to learn about the Indigenous history of the lands they occupy and to support Indigenous communities and initiatives. For further exploration and learning, we recommend the <a href="https://reseaumtlnetwork.com" target="_blank" rel="noopener noreferrer" className="text-fuchsia-600 hover:underline">Indigenous Ally Toolkit</a> created by reseaumtlnetwork.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}