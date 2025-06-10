import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Article } from "@/types";

interface FeaturedArticleProps {
  article: Article;
}

export default function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/2">
          <div className="relative h-64 md:h-full">
            <Image
              src={article.image || "/images/placeholder.jpg"}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="md:w-1/2 p-8">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-4">
            {article.category}
          </span>
          <h3 className="text-3xl font-bold text-gray-900 mb-3">
            {article.title}
          </h3>
          <p className="text-lg text-gray-600 mb-4">{article.excerpt}</p>
          <div className="text-sm text-gray-500 mb-6">
            {article.author} •{" "}
            {new Date(article.publishedAt).toLocaleDateString()}
          </div>
          <Link
            href={`/articles/${article.slug}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            Read Full Article
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
