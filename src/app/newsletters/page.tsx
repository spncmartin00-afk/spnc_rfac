import Layout from '@/components/layout/Layout';
import NewsletterCard from '@/components/ui/NewsletterCard';
import { getAllNewsletters } from '@/lib/newsletterData';

export default function NewslettersPage() {
  const newsletters = getAllNewsletters();

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Our Newsletters</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Stay connected with the Senior Pride Network Canada through our regular newsletters. 
            Get updates on community initiatives, resources, and upcoming events.
          </p>
        </div>

        {/* Newsletter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {newsletters.map((newsletter) => (
            <NewsletterCard key={newsletter.id} newsletter={newsletter} />
          ))}
        </div>

        {/* Back Navigation */}
        <div className="text-center mt-12">
          <a 
            href="/" 
            className="inline-flex items-center text-fuchsia-600 hover:text-fuchsia-800 font-semibold transition-colors"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
      </div>
    </Layout>
  );
}