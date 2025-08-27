import Layout from '@/components/layout/Layout';

export default function Communications() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r via-orange-500 via-purple-600 from-red-500 to-pink-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Communications</h1>
            <p className="text-xl text-purple-100">
              Strategic plans, reports, and newsletters to keep you informed
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-12">
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Strategic Plan</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              Our strategic plan outlines our vision, goals, and initiatives for advancing LGBTQ2S+ seniors' rights and wellbeing.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Download Strategic Plan
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Reports</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              Access our annual reports, research findings, and impact assessments.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-3 bg-white rounded border">
                <span>Annual Report 2023</span>
                <button className="text-blue-600 hover:text-blue-800">Download</button>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded border">
                <span>Community Impact Report 2023</span>
                <button className="text-blue-600 hover:text-blue-800">Download</button>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded border">
                <span>Research Report: LGBTQ2S+ Seniors Housing</span>
                <button className="text-blue-600 hover:text-blue-800">Download</button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Newsletters</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              Stay updated with our latest news, events, and community stories through our newsletters.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded border">
                <h3 className="font-semibold mb-2">Pride & Progress - Winter 2024</h3>
                <p className="text-sm text-gray-600 mb-3">Our latest newsletter featuring community spotlights and upcoming events.</p>
                <button className="text-blue-600 hover:text-blue-800 text-sm">Read Online</button>
              </div>
              <div className="bg-white p-4 rounded border">
                <h3 className="font-semibold mb-2">Pride & Progress - Fall 2023</h3>
                <p className="text-sm text-gray-600 mb-3">Highlights from our annual conference and community achievements.</p>
                <button className="text-blue-600 hover:text-blue-800 text-sm">Read Online</button>
              </div>
            </div>
            <div className="mt-4">
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </section>
      </div>
        </div>
      </div>
    </Layout>
  )
}