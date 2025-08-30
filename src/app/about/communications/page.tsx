import Layout from '@/components/layout/Layout';
import NewsletterCard from '@/components/ui/NewsletterCard';
import { getAllNewsletters } from '@/lib/newsletterData';

export default function Communications() {
  const newsletters = getAllNewsletters();
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
              <span className="text-lg">Strategic Plan</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                <a
                  href="/pdfs/SPNC_2024-2027_Strategic_Plan_v_FEB_21_2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  View PDF
                </a>
              </button>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">By Laws</h2>
          <div className="bg-white p-6 rounded-lg border">
            <div className="flex justify-between items-center">
              <span className="text-lg">Our By Laws</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                <a
                  href="/pdfs/SPNC_RFAC_by-laws_v_NOV_1_2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  View PDF
                </a>
              </button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Annual Report</h2>
          <div className="bg-white p-6 rounded-lg border">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-lg">Annual Report</span>
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
            <p className="text-gray-600 mb-6">Stay connected with the Senior Pride Network Canada through our regular newsletters. Get updates on community initiatives, resources, and upcoming events.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsletters.map((newsletter) => (
                <NewsletterCard key={newsletter.id} newsletter={newsletter} />
              ))}
            </div>
            <div className="text-center mt-8">
              <a 
                href="/newsletters" 
                className="inline-flex items-center bg-fuchsia-600 text-white px-6 py-3 rounded-lg hover:bg-fuchsia-700 transition-colors font-semibold"
              >
                View All Newsletters
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
          <div className="bg-white p-6 rounded-lg border">
            <p className="text-gray-600 mb-4">Stay updated with our latest news, events, and community stories.</p>
            <form className="space-y-4">
              <div>
                <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="newsletter-email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Email"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacy-policy"
                  name="privacyPolicy"
                  required
                  className="mr-2"
                />
                <label htmlFor="privacy-policy" className="text-sm text-gray-700">
                  I agree to the <a href="/about/policies/privacy-policy" className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                </label>
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
        </div>
      </div>
    </Layout>
  )
}