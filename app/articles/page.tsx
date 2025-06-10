import { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import { getLatestArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "All Articles | Brand Name",
  description: "Browse all crypto news, analysis, and insights from BrandName",
};

export default async function ArticlesPage() {
  const articles = await getLatestArticles(100); // Get all articles

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            All Articles
          </h1>

          {articles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No articles found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
