import HeroSection from "@/components/HeroSection";
import ArticleCard from "@/components/ArticleCard";
import FeatureSection from "@/components/FeatureSection";
import { getLatestArticles } from "@/lib/articles";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function Home() {
  const latestArticles = await getLatestArticles(6);

  return (
    <>
      <HeroSection />

      {/* Featured Posts Section */}
      {latestArticles.length > 0 ? (
        <section className="section-padding relative light-gradient-bg">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
          </div>

          <div className="container-max-w relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Featured <span className="text-blue-600">Posts</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Stay ahead of the crypto game with our latest insights,
                analysis, and breaking news from the world of digital assets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16">
              {latestArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>

            {/* Explore More Button */}
            <div className="text-center">
              <Link
                href="/articles"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-semibold bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-white text-lg"
              >
                Explore More Articles
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="section-padding light-gradient-bg">
          <div className="container-max-w text-center">
            <div className="glass-strong p-12 rounded-2xl max-w-2xl mx-auto glow-teal">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                No Articles Yet
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Were working hard to bring you the latest crypto insights.
                Subscribe to our newsletter to be the first to know when we
                publish new content!
              </p>
              <Link
                href="/#newsletter"
                className="btn-primary text-lg px-8 py-3"
              >
                Subscribe Now
              </Link>
            </div>
          </div>
        </section>
      )}

      <FeatureSection />
    </>
  );
}
