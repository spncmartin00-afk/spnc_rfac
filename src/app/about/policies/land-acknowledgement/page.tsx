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
              <p className="text-sm text-gray-600 mb-6">Effective Date: June 26, 2025</p>

              <p className="mb-6 text-lg leading-relaxed">
                We at the Senior Pride Network Canada/Réseau de la Fierté des personnes aînées du Canada acknowledge that our office in Ottawa is located on the unceded, unsurrendered Territory of the Algonquin Anishinaabe Nation. The Algonquin people have been living and caring for this land since time immemorial and continue to do so today. We are grateful to be able to gather and work on this land.
              </p>

              <p className="mb-6 text-lg leading-relaxed">
                We recognize and deeply appreciate the Indigenous communities' welcoming gesture to live and work on their traditional territory, including the Two-Spirit community who have always been an integral part of Indigenous societies. We honour the Two-Spirit individuals who have paved the way for 2SLGBTQI+ rights and continue to guide us with their wisdom and courage.
              </p>

              <br />

              <p className="mb-6 text-lg leading-relaxed">
                We also acknowledge that this territory is covered by numerous treaties, and we are all treaty people. We have a collective responsibility to understand the complex history of this land and to engage in meaningful reconciliation with Indigenous peoples.
              </p>

              <br />

              <p className="mb-6 text-lg leading-relaxed">
                As an organization committed to supporting and advocating for senior 2SLGBTQI+ adults, we recognize the intersections of age, sexual orientation, gender identity, race, ability, and other aspects that shape our experiences and perspectives. We remember that the land we are on has been shaped by the labour and experiences of Indigenous, Black, and racialized people, including those who were brought here involuntarily through the trans-Atlantic slave trade.
              </p>

              <p className="mb-6 text-lg leading-relaxed">
                We also acknowledge the contributions of immigrants and migrants who have shaped this land and continue to do so, despite facing systemic barriers and injustices.
              </p>

              <br />

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-6">Our Commitment</h2>
              <p className="mb-6 text-lg leading-relaxed">
                The Senior Pride Network Canada/Réseau de la Fierté des personnes aînées du Canada is committed to advancing anti-racism, decolonization, and intersectionality in our work. We centre the voices, leadership, and experiences of Black, Indigenous, racialized, Two-Spirit, trans, and non-binary seniors.
              </p>

              <br />

              <p className="mb-6 text-lg leading-relaxed">
                We invite you to join us in this commitment. Let us learn about the Indigenous Nations that care for the land we are on and the treaties that govern our relationships. Let us work together towards a future where truth, reconciliation, and equity guide our actions.
              </p>

              <br />

              <p className="mb-6 text-lg leading-relaxed">
                To learn more about the land you are on and its Indigenous caretakers, visit <a href="https://native-land.ca" target="_blank" rel="noopener noreferrer" className="text-fuchsia-600 hover:underline">native-land.ca</a>.
              </p>

              <p className="mb-6 text-lg leading-relaxed">
                In the spirit of peace, friendship, and respect, we thank the Algonquin Anishinaabe Nation for sharing this land with us.
              </p>

              <p className="text-lg leading-relaxed">Chi-Miigwetch. Thank you. Merci.</p>

              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}