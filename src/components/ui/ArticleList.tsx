import ArticleCard from './ArticleCard';

interface Article {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  image?: string;
  publishedAt: string;
  category?: string;
}

interface ArticleListProps {
  articles: Article[];
  title?: string;
  className?: string;
}

export default function ArticleList({ articles, title, className = '' }: ArticleListProps) {
  if (!articles.length) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <p className="text-gray-600">No articles found.</p>
      </div>
    );
  }

  return (
    <section className={className}>
      {title && (
        <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
      )}
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard
            key={article._id}
            title={article.title}
            slug={article.slug.current}
            excerpt={article.excerpt}
            image={article.image}
            publishedAt={article.publishedAt}
            category={article.category}
          />
        ))}
      </div>
    </section>
  );
}