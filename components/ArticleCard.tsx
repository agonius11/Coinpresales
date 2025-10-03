import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types";
import { Clock, Zap } from "lucide-react";
import AuthorProfile from "./AuthorProfile";

interface ArticleCardProps {
  article: Article;
}

const getBadgeStyle = (category: string) => {
  const categoryLower = category.toLowerCase();
  if (
    categoryLower.includes("crypto") ||
    categoryLower.includes("cryptocurrency")
  )
    return "badge-crypto";
  if (categoryLower.includes("defi")) return "badge-defi";
  if (categoryLower.includes("nft")) return "badge-nft";
  if (categoryLower.includes("bitcoin") || categoryLower.includes("btc"))
    return "badge-bitcoin";
  if (categoryLower.includes("ethereum") || categoryLower.includes("eth"))
    return "badge-ethereum";
  if (categoryLower.includes("trading")) return "badge-trading";
  if (categoryLower.includes("news")) return "badge-news";
  if (categoryLower.includes("analysis")) return "badge-analysis";
  if (categoryLower.includes("presales")) return "badge-presales";
  return "badge-crypto";
};

export default function ArticleCard({ article }: ArticleCardProps) {
  const publishedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  const badgeStyle = getBadgeStyle(article.category);

  // Determine the correct link path - special articles go to their own route
  const linkPath = article.isSpecialPage
    ? `/${article.slug}`
    : `/articles/${article.slug}`;

  return (
    <article className="group relative">
      <Link href={linkPath} className="block">
        <div className="relative overflow-hidden rounded-3xl bg-white border-2 border-gray-200 hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-500">
          {/* Special HOT badge for landing page */}
          {article.isSpecialPage && (
            <div className="absolute top-4 right-4 z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-md opacity-75 animate-pulse"></div>
                <span className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                  <Zap className="w-3.5 h-3.5" />
                  HOT
                </span>
              </div>
            </div>
          )}

          {/* Image section */}
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={article.image || "/images/placeholder.jpg"}
              alt={article.title}
              fill
              className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>

            {/* Category badge */}
            <div className="absolute bottom-4 left-4">
              <span
                className={`${badgeStyle} px-4 py-2 text-xs font-bold rounded-xl backdrop-blur-md shadow-lg`}
              >
                {article.category}
              </span>
            </div>
          </div>

          {/* Content section */}
          <div className="p-6 space-y-4">
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-sky-600 transition-all duration-300">
              {article.title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
              {article.excerpt}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <AuthorProfile
                author={article.author}
                size="small"
                showModal={true}
              />
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Clock className="w-3.5 h-3.5" />
                <span>{publishedDate}</span>
              </div>
            </div>

            {/* Read more indicator */}
            <div className="flex items-center gap-2 text-orange-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>Read article</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
