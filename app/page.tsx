import NewsletterSection from "@/components/NewsletterSection";
import FeaturedArticle from "@/components/FeaturedArticle";
import ArticleCard from "@/components/ArticleCard";
import FeatureSection from "@/components/FeatureSection";
import { getLatestArticles, getFeaturedArticle } from "@/lib/articles";

export default async function Home() {
  const featuredArticle = await getFeaturedArticle();
  const latestArticles = await getLatestArticles(6);

  return (
    <>
      <NewsletterSection />

      {featuredArticle && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FeaturedArticle article={featuredArticle} />
          </div>
        </section>
      )}

      {latestArticles.length > 0 ? (
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Latest Crypto News
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              No Articles Yet
            </h2>
            <p className="text-gray-600">
              Add your first article in the content/articles folder!
            </p>
          </div>
        </section>
      )}

      <FeatureSection />
    </>
  );
}
