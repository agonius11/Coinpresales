import HeroSection from "@/components/HeroSection"; // Renamed import
import FeaturedArticle from "@/components/FeaturedArticle";
import ArticleCard from "@/components/ArticleCard";
import FeatureSection from "@/components/FeatureSection";
import { getLatestArticles, getFeaturedArticle } from "@/lib/articles";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function Home() {
  const featuredArticle = await getFeaturedArticle();
  const latestArticles = await getLatestArticles(6);

  return (
    <>
      <HeroSection /> {/* Updated component name */}
      {featuredArticle && (
        <section className="section-padding style={{ backgroundColor: 'rgba(255, 245, 238, 0.7)' }}>">
          <div className="container-max-w">
            <h2 className="sr-only">Featured Article</h2>{" "}
            {/* Screen reader only for the main featured piece */}
            {/* <FeaturedArticle article={featuredArticle} /> */}
          </div>
        </section>
      )}
      {latestArticles.length > 0 ? (
        <section className="section-padding style={{ backgroundColor: 'rgba(255, 245, 238, 0.7)' }}>">
          <div className="container-max-w">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Latest Crypto News
              </h2>
              <Link
                href="/articles"
                className="inline-flex items-center text-blue-700 hover:text-blue-800 font-semibold transition-colors"
              >
                View All Articles
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {latestArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="section-padding bg-white">
          <div className="container-max-w text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              No Articles Yet
            </h2>
            <p className="text-gray-600 text-lg">
              Add your first article in the content/articles folder!
            </p>
          </div>
        </section>
      )}
      <FeatureSection />
    </>
  );
}
