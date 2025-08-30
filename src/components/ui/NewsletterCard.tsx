'use client';

import Link from 'next/link';
import { Newsletter } from '@/lib/newsletterData';

interface NewsletterCardProps {
  newsletter: Newsletter;
}

export default function NewsletterCard({ newsletter }: NewsletterCardProps) {
  return (
    <Link href={`/newsletters/${newsletter.id}`}>
      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
        <div className="mb-4 flex justify-center">
          <div className="w-12 h-12 bg-fuchsia-100 rounded-full flex items-center justify-center group-hover:bg-fuchsia-200 transition-colors">
            <svg 
              className="w-6 h-6 text-fuchsia-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-center">{newsletter.title}</h3>
        <p className="text-gray-600 text-center mb-4">{newsletter.description}</p>
        <div className="text-center">
          <span className="inline-flex items-center text-fuchsia-600 font-semibold group-hover:text-fuchsia-800 transition-colors">
            Read Newsletter 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}