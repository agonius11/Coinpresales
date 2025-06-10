import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, User } from "lucide-react"; // Added icons
import { Article } from "@/types";

interface FeaturedArticleProps {
  article: Article;
}

export default function FeaturedArticle({ article }: FeaturedArticleProps) {
  const publishedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="rounded-3xl shadow-xl overflow-hidden card-hover-effect">
      <div className="relative">
        <div className="relative h-72 md:h-96 w-full">
          <Image
            src={article.image || "/images/placeholder.jpg"}
            alt={article.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
          <span className="article-badge absolute bottom-4 left-4 bg-orange-500 text-white text-base py-1.5 px-4 rounded-full">
            {article.category}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white glass-strong">
          {" "}
          {/* Applying strong glass effect here */}
          <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight drop-shadow-md">
            {article.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-100 mb-4 drop-shadow">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-200 mb-6">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4 text-orange-300" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4 text-orange-300" />
              <time dateTime={article.publishedAt}>{publishedDate}</time>
            </div>
          </div>
          <Link
            href={`/articles/${article.slug}`}
            className="inline-flex items-center text-orange-400 hover:text-orange-300 font-semibold text-lg transition-colors"
          >
            Read Full Article
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
