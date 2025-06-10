import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="relative h-48">
        <Image
          src={article.image || "/images/placeholder.jpg"}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm font-semibold rounded-full mb-3">
          {article.category}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {article.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{article.author}</span>
          <Link
            href={`/articles/${article.slug}`}
            className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}
