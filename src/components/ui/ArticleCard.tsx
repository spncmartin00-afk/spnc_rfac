import Link from 'next/link';
import Image from 'next/image';

interface ArticleCardProps {
  title: string;
  slug: string;
  excerpt?: string;
  image?: string;
  publishedAt: string;
  category?: string;
}

export default function ArticleCard({ 
  title, 
  slug, 
  excerpt, 
  image, 
  publishedAt, 
  category 
}: ArticleCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-CA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Link href={`/articles/${slug}`}>
      <article className="card bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer">
        {image && (
          <div className="relative h-48 w-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}
        
        <div className="p-6">
          {category && (
            <span className="chip mb-3">
              {category}
            </span>
          )}
          
          <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
            {title}
          </h3>
          
          {excerpt && (
            <p className="text-gray-600 mb-4 line-clamp-3">
              {excerpt}
            </p>
          )}
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <time dateTime={publishedAt}>
              {formatDate(publishedAt)}
            </time>
            <span className="text-fuchsia-600 font-semibold">
              Read more →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}