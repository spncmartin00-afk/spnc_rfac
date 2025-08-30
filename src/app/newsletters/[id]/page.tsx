import { notFound } from 'next/navigation';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { getNewsletterById, getPreviousNewsletter, getNextNewsletter } from '@/lib/newsletterData';

interface NewsletterPageProps {
  params: {
    id: string;
  };
}

export default function NewsletterPage({ params }: NewsletterPageProps) {
  const newsletter = getNewsletterById(params.id);
  const previousNewsletter = getPreviousNewsletter(params.id);
  const nextNewsletter = getNextNewsletter(params.id);

  if (!newsletter) {
    notFound();
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">{newsletter.title} Newsletter</h1>
              <p className="text-gray-600 mt-1">{newsletter.description}</p>
            </div>
            <div className="flex gap-4">
              <a 
                href={newsletter.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-fuchsia-600 text-white px-4 py-2 rounded-lg hover:bg-fuchsia-700 transition-colors"
              >
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Original
              </a>
              <a 
                href="/newsletters" 
                className="inline-flex items-center border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Newsletters
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Newsletter */}
      <div className="container mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src={newsletter.url}
            className="w-full h-[800px] border-0"
            title={`${newsletter.title} Newsletter`}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          />
        </div>
        
        {/* Fallback message */}
        <div className="text-center mt-6 text-gray-600">
          <p className="mb-2">Having trouble viewing the newsletter?</p>
          <a 
            href={newsletter.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-fuchsia-600 hover:text-fuchsia-800 font-semibold"
          >
            Open in new window →
          </a>
        </div>

        {/* Previous/Next Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
          <div className="flex-1">
            {previousNewsletter ? (
              <Link 
                href={`/newsletters/${previousNewsletter.id}`}
                className="group inline-flex items-center text-gray-600 hover:text-fuchsia-600 transition-colors"
              >
                <svg className="mr-2 w-5 h-5 group-hover:text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <div className="text-left">
                  <p className="text-sm text-gray-500">Previous</p>
                  <p className="font-semibold">{previousNewsletter.title}</p>
                </div>
              </Link>
            ) : (
              <div></div>
            )}
          </div>

          <div className="flex-1 text-right">
            {nextNewsletter ? (
              <Link 
                href={`/newsletters/${nextNewsletter.id}`}
                className="group inline-flex items-center text-gray-600 hover:text-fuchsia-600 transition-colors"
              >
                <div className="text-right mr-2">
                  <p className="text-sm text-gray-500">Next</p>
                  <p className="font-semibold">{nextNewsletter.title}</p>
                </div>
                <svg className="w-5 h-5 group-hover:text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
}