import { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import { getLatestArticles } from "@/lib/articles";
import { Search } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Articles | Coin Trends News",
  description:
    "Browse all crypto news, analysis, and insights from Coin Trends News.",
};

export default async function ArticlesPage() {
  const articles = await getLatestArticles(100); // Get all articles

  return (
    <div className="min-h-screen relative light-gradient-bg">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <section className="section-padding relative z-10">
        <div className="container-max-w">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              All Crypto{" "}
              <span className="text-teal-600 glow-teal">Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive collection of articles, from in-depth
              market analysis to breaking news and exclusive trading insights.
            </p>

            {/* Search bar */}
            <div className="max-w-xl mx-auto mb-16">
              <div className="relative glass-strong rounded-full p-2">
                <input
                  type="text"
                  placeholder="Search crypto articles..."
                  className="w-full px-6 py-4 pl-14 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white/80 border-none"
                />
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-teal-600 w-5 h-5" />
              </div>
            </div>
          </div>

          {articles.length > 0 ? (
            <>
              {/* Articles grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {articles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>

              {/* Load more section */}
              <div className="text-center mt-16">
                <div className="glass-strong p-8 rounded-2xl inline-block glow-teal">
                  <p className="text-gray-600 mb-4 text-lg">
                    Want more crypto insights delivered daily?
                  </p>
                  <Link
                    href="/#newsletter"
                    className="btn-primary text-lg px-8 py-3"
                  >
                    Subscribe to Newsletter
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="glass-strong p-12 rounded-2xl max-w-2xl mx-auto glow-teal">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-10 h-10 text-teal-600" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  No articles found yet.
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Were working hard to bring you the latest crypto insights.
                  Subscribe to our newsletter to be notified when we publish new
                  content!
                </p>
                <Link
                  href="/#newsletter"
                  className="btn-primary text-lg px-8 py-3"
                >
                  Get Notified
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
