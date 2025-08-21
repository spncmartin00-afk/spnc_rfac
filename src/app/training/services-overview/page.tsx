import Layout from '@/components/layout/Layout';

export default function ServicesOverviewPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r via-orange-500 via-purple-600 from-red-500 to-pink-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Services Overview</h1>
            <p className="text-xl text-fuchsia-100">
              Comprehensive training and support services for organizations and communities
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Service Portfolio</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-fuchsia-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Educational Programs</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• LGBTQ2S+ cultural competency training</li>
                    <li>• Age-inclusive diversity workshops</li>
                    <li>• Intersectional awareness sessions</li>
                    <li>• Best practices for inclusive care</li>
                  </ul>
                </div>

                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Professional Development</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Leadership training for senior LGBTQ2S+ advocates</li>
                    <li>• Peer support facilitation skills</li>
                    <li>• Community engagement strategies</li>
                    <li>• Program development guidance</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Organizational Support</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Policy review and development</li>
                    <li>• Inclusive service delivery assessment</li>
                    <li>• Staff training programs</li>
                    <li>• Implementation support</li>
                  </ul>
                </div>

                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Community Initiatives</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Public awareness campaigns</li>
                    <li>• Community dialogue facilitation</li>
                    <li>• Resource development</li>
                    <li>• Partnership building</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Service Delivery Approach</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-fuchsia-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-fuchsia-600">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Evidence-Based</h3>
                <p className="text-gray-600 text-sm">
                  Our programs are grounded in research and best practices for LGBTQ2S+ seniors
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-pink-600">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Collaborative</h3>
                <p className="text-gray-600 text-sm">
                  We work closely with organizations to customize solutions for their unique needs
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-purple-600">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Outcomes-Focused</h3>
                <p className="text-gray-600 text-sm">
                  We measure success through improved inclusivity and participant satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}