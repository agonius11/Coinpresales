import { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import { getLatestArticles } from "@/lib/articles";
import { Search } from "lucide-react"; // Added search icon

export const metadata: Metadata = {
  title: "All Articles | Coin Trends News", // Updated brand name
  description:
    "Browse all crypto news, analysis, and insights from Coin Trends News.",
};

export default async function ArticlesPage() {
  const articles = await getLatestArticles(100); // Get all articles

  return (
    <div className="min-h-screen style={{ backgroundColor: 'rgba(255, 245, 238, 0.7)' }}>">
      <section className="section-padding">
        <div className="container-max-w">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            All Crypto Insights
          </h1>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto">
            Explore our comprehensive collection of articles, from in-depth
            market analysis to breaking news and exclusive trading insights.
          </p>

          {/* Optional: Add a search bar or filter */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-5 py-3 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {articles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-100">
              <p className="text-gray-600 text-xl font-semibold">
                No articles found yet.
              </p>
              <p className="text-gray-500 mt-2">
                Check back soon for new insights!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
