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
    <article
      className={`rounded-2xl overflow-hidden card-hover-effect light-card group ${
        article.isSpecialPage
          ? "ring-2 ring-orange-400 ring-opacity-60 shadow-xl"
          : ""
      }`}
    >
      {/* Article content link */}
      <Link href={linkPath} className="block">
        <div className="relative h-52 w-full overflow-hidden">
          {/* Special HOT badge for landing page */}
          {article.isSpecialPage && (
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-pulse shadow-lg">
                <Zap className="w-3 h-3" />
                HOT
              </span>
            </div>
          )}

          <Image
            src={article.image || "/images/placeholder.jpg"}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
          <span
            className={`article-badge absolute top-4 left-4 ${badgeStyle} rounded-full px-4 py-1.5 text-sm font-semibold shadow-lg ${
              article.isSpecialPage
                ? "bg-orange-500 text-white border-2 border-white"
                : ""
            }`}
          >
            {article.category}
          </span>
        </div>

        <div className="p-6 md:p-7">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-snug line-clamp-2 group-hover:text-teal-600 transition-colors duration-300">
            {article.title}
          </h3>
          <p className="text-gray-600 mb-4 text-base line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Special urgency message for landing page */}
          {article.isSpecialPage && (
            <div className="mb-4 p-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg border border-orange-200">
              <p className="text-sm font-semibold text-orange-800 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Only 1 Presale Still Live — Don&apos;t Miss Out!
              </p>
            </div>
          )}
        </div>
      </Link>

      {/* Author section outside the article link to prevent nested links */}
      <div className="px-6 md:px-7 pb-6 md:pb-7">
        <div className="flex justify-between items-center text-sm text-gray-500 pt-4 border-t border-gray-200">
          <AuthorProfile
            author={article.author}
            size="small"
            showModal={true}
          />
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-teal-500" />
            <span>{publishedDate}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
