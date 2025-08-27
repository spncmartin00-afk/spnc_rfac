import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function Policies() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r via-orange-500 via-purple-600 from-red-500 to-pink-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Policies</h1>
            <p className="text-xl text-purple-100">
              Our commitments to accessibility, privacy, and inclusive service
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-12">
      
      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <div className="bg-white rounded-lg shadow-sm p-6 h-full flex flex-col">
            <h2 className="text-2xl font-semibold mb-4 text-fuchsia-600">Accessibility Policy</h2>
            <p className="text-gray-600 mb-4 flex-1">
              At Inclusify by All Welcome Consulting, we make every reasonable effort to meet the requirements of the Accessibility for Ontarians with Disabilities Act (AODA), 2005. Our commitment includes WCAG 2.2 Level AA compliance and comprehensive accessibility standards.
            </p>
            <div className="prose max-w-none mb-4">
              <h3 className="text-lg font-medium mb-2">Key Commitments</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Alt-text and image descriptions for social media</li>
                <li>Automated English captioning for video content</li>
                <li>Alternative formats upon request</li>
                <li>Barrier-free customer service</li>
                <li>Support for assistive devices</li>
              </ul>
            </div>
            <Link href="/about/policies/accessibility" className="inline-block bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-2 px-4 rounded transition-colors">
              View Full Accessibility Policy
            </Link>
          </div>
        </section>

        <section>
          <div className="bg-white rounded-lg shadow-sm p-6 h-full flex flex-col">
            <h2 className="text-2xl font-semibold mb-4 text-fuchsia-600">Privacy Policy</h2>
            <p className="text-gray-600 mb-4 flex-1">
              At Inclusify by All Welcome Consulting, your privacy is a top priority. We collect very limited personal information and never sell or rent your data. Our policy covers information collection, usage, and your choices regarding your information.
            </p>
            <div className="prose max-w-none mb-4">
              <h3 className="text-lg font-medium mb-2">Key Points</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Limited data collection only when you choose to provide it</li>
                <li>Anonymous usage data via cookies and analytics</li>
                <li>No selling or renting of personal information</li>
                <li>Easy unsubscribe and data deletion options</li>
                <li>Compliance with Ontario privacy laws</li>
              </ul>
            </div>
            <Link href="/privacy" className="inline-block bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-2 px-4 rounded transition-colors">
              View Full Privacy Policy
            </Link>
          </div>
        </section>

        <section>
          <div className="bg-white rounded-lg shadow-sm p-6 h-full flex flex-col">
            <h2 className="text-2xl font-semibold mb-4 text-fuchsia-600">Terms of Service</h2>
            <p className="text-gray-600 mb-4 flex-1">
              These Terms of Service govern your use of our websites at <a href="https://inclusify.allwelcome.ca" className="text-fuchsia-600 hover:underline" target="_blank" rel="noopener noreferrer">inclusify.allwelcome.ca</a> and <a href="https://allwelcome.ca" className="text-fuchsia-600 hover:underline" target="_blank" rel="noopener noreferrer">allwelcome.ca</a>. By accessing our sites, you agree to be bound by these terms and by the laws of Ontario and Canada.
            </p>
            <div className="prose max-w-none mb-4">
              <h3 className="text-lg font-medium mb-2">Key Areas</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Website use eligibility and licensing</li>
                <li>Intellectual property protection</li>
                <li>Permission to copy under fair use</li>
                <li>Copyright attribution requirements</li>
                <li>Limitation of liability</li>
              </ul>
            </div>
            <Link href="/about/policies/terms-of-use" className="inline-block bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-2 px-4 rounded transition-colors">
              View Full Terms of Service
            </Link>
          </div>
        </section>

        <section>
          <div className="bg-white rounded-lg shadow-sm p-6 h-full flex flex-col">
            <h2 className="text-2xl font-semibold mb-4 text-fuchsia-600">Land Acknowledgement</h2>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4">
              <p className="text-gray-800 italic text-sm">
                Inclusify by All Welcome Consulting acknowledges that its operations, based in Ottawa, Ontario, are situated on the traditional, unceded territory of the Algonquin Anishinaabe People.
              </p>
            </div>
            <p className="text-gray-600 mb-4 flex-1">
              We recognize that a land acknowledgment is a starting point for ongoing learning, reflection, and action towards reconciliation. We are committed to incorporating Indigenous perspectives and supporting reconciliation efforts in our work.
            </p>
            <div className="prose max-w-none mb-4">
              <h3 className="text-lg font-medium mb-2">Our Commitment</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Ongoing learning about Indigenous history</li>
                <li>Incorporating Indigenous perspectives respectfully</li>
                <li>Supporting Indigenous communities and initiatives</li>
                <li>Encouraging land acknowledgement education</li>
              </ul>
            </div>
            <Link href="/about/policies/land-acknowledgement" className="inline-block bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-2 px-4 rounded transition-colors">
              View Full Land Acknowledgement
            </Link>
          </div>
        </section>
      </div>
        </div>
      </div>
    </Layout>
  )
}