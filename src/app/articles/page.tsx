import Layout from '@/components/layout/Layout';
import ArticleList from '@/components/ui/ArticleList';
import { client, articleQueries } from '@/lib/sanity';

interface Article {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  image?: string;
  publishedAt: string;
  category?: string;
}

async function getArticles(): Promise<Article[]> {
  try {
    const articles = await client.fetch(articleQueries.all);
    return articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

export const metadata = {
  title: 'Articles - Senior Pride Network Canada',
  description: 'Latest articles, resources, and news from Senior Pride Network Canada.',
};

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Articles & Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the latest insights, resources, and stories from our community 
            focused on supporting 2SLGBTQI+ older people across Canada.
          </p>
        </div>

        <ArticleList 
          articles={articles}
          className="max-w-6xl mx-auto"
        />
      </div>
    </Layout>
  );
}