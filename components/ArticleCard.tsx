// components/ArticleCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types";
import { Clock } from "lucide-react";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const publishedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <article className="rounded-2xl shadow-lg overflow-hidden card-hover-effect">
      <Link href={`/articles/${article.slug}`} className="block">
        <div className="relative h-52 w-full rounded-t-2xl overflow-hidden">
          {" "}
          {/* Added rounded-t-2xl */}
          <Image
            src={article.image || "/images/placeholder.jpg"}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          <span className="article-badge absolute top-4 left-4 bg-orange-500 text-white rounded-full px-4 py-1 text-sm">
            {article.category}
          </span>
        </div>
        <div
          className="p-6 md:p-7  rounded-b-2xl"
          style={{ background: "rgba(255, 250, 240, 0.3)" }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-snug line-clamp-2">
            {article.title}
          </h3>
          <p className="text-gray-600 mb-4 text-base line-clamp-3">
            {article.excerpt}
          </p>
          <div className="flex justify-between items-center text-sm text-gray-500 mt-4 border-t border-gray-200 pt-4">
            <span className="font-semibold">{article.author}</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-gray-400" />
              <span>{publishedDate}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
