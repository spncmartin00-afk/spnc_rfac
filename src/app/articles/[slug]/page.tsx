import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import { client, articleQueries } from '@/lib/sanity';

interface Article {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  image?: string;
  publishedAt: string;
  category?: string;
  content: any[];
  order?: number;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getArticle(slug: string): Promise<Article | null> {
  try {
    const article = await client.fetch(articleQueries.bySlug, { slug });
    return article;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const slugs = await client.fetch(articleQueries.slugs);
    return slugs.map((slug: string) => ({
      slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);
  
  if (!article) {
    return {
      title: 'Article Not Found - Senior Pride Network Canada',
    };
  }

  return {
    title: `${article.title} - Senior Pride Network Canada`,
    description: article.excerpt || 'Article from Senior Pride Network Canada',
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-CA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Layout>
      <article className="max-w-6xl mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            {article.category && (
              <span className="chip mb-4">
                {article.category}
              </span>
            )}
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {article.title}
            </h1>
            
            {article.excerpt && (
              <p className="text-xl text-gray-600 mb-6">
                {article.excerpt}
              </p>
            )}
            
            <div className="flex items-center text-gray-500 text-sm">
              <time dateTime={article.publishedAt}>
                Published {formatDate(article.publishedAt)}
              </time>
            </div>
          </header>

          {/* Featured Image */}
          {article.image && (
            <div className="relative w-full h-96 mb-8 rounded-2xl overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <PortableText
              value={article.content}
              components={{
                types: {
                  image: ({ value }) => (
                    <div className="relative w-full h-96 my-8 rounded-xl overflow-hidden">
                      <Image
                        src={value.asset.url}
                        alt={value.alt || ''}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ),
                },
                block: {
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold text-gray-800 mt-8 mb-4">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">
                      {children}
                    </h3>
                  ),
                  normal: ({ children }) => (
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {children}
                    </p>
                  ),
                },
              }}
            />
          </div>

          {/* Back to Articles */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <a
              href="/articles"
              className="inline-flex items-center text-fuchsia-600 hover:text-fuchsia-800 font-semibold"
            >
              ← Back to Articles
            </a>
          </div>
        </div>
      </article>
    </Layout>
  );
}