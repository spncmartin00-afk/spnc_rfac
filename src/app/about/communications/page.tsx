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
          <div className="bg-white p-6 rounded-lg border">
            <div className="flex justify-between items-center">
              <span className="text-lg">Strategic Plan [PDF]</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Download PDF
              </button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Annual Report</h2>
          <div className="bg-white p-6 rounded-lg border">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-lg">Annual Report [PDF]</span>
                <p className="text-sm text-gray-600 mt-1">(will be available in November)</p>
              </div>
              <button className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed" disabled>
                Coming Soon
              </button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Newsletters</h2>
          <div className="bg-white p-6 rounded-lg border">
            <p className="text-gray-600 mb-4">All newsletters [PDF]</p>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded border">
                <span>Newsletter - Issue 1 [PDF]</span>
                <button className="text-blue-600 hover:text-blue-800">Download</button>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded border">
                <span>Newsletter - Issue 2 [PDF]</span>
                <button className="text-blue-600 hover:text-blue-800">Download</button>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded border">
                <span>Newsletter - Issue 3 [PDF]</span>
                <button className="text-blue-600 hover:text-blue-800">Download</button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
          <div className="bg-white p-6 rounded-lg border">
            <p className="text-gray-600 mb-4">Stay updated with our latest news, events, and community stories.</p>
            <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 font-medium">
              Subscribe to Our Newsletter
            </button>
          </div>
        </section>
      </div>
        </div>
      </div>
    </Layout>
  )
}