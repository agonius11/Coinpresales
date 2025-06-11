import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types";
import { Clock } from "lucide-react";

interface ArticleCardProps {
  article: Article;
}

// Function to get appropriate badge style based on category
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

  // Default to teal for crypto-related content
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

  return (
    <article className="rounded-2xl overflow-hidden card-hover-effect dark-card group">
      <Link href={`/articles/${article.slug}`} className="block">
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={article.image || "/images/placeholder.jpg"}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          {/* Category badge */}
          <span
            className={`article-badge absolute top-4 left-4 ${badgeStyle} rounded-full px-4 py-1.5 text-sm font-semibold shadow-lg`}
          >
            {article.category}
          </span>
        </div>

        <div className="p-6 md:p-7">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug line-clamp-2 group-hover:text-teal-300 transition-colors duration-300">
            {article.title}
          </h3>
          <p className="text-gray-300 mb-4 text-base line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
          <div className="flex justify-between items-center text-sm text-gray-400 mt-4 pt-4 border-t border-gray-700">
            <span className="font-semibold text-gray-300">
              {article.author}
            </span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-teal-400" />
              <span>{publishedDate}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
