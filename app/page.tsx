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
        <section className="section-padding relative bg-gradient-to-b from-white via-orange-50/30 to-sky-50/30">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-sky-200/20 rounded-full blur-[120px]"></div>
          </div>

          <div className="container-max-w relative z-10">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-sky-500/10 border border-orange-300/30">
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                <span className="text-sm text-gray-700 font-medium">Latest Insights</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                Featured{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-sky-600 to-orange-600">
                  Articles
                </span>
              </h2>

              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Stay ahead with our expert analysis and breaking news from the crypto presale world.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {latestArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>

            {/* Explore More Button */}
            <div className="text-center">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-sky-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300"
              >
                Explore More Articles
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="section-padding bg-gradient-to-b from-white to-orange-50/30">
          <div className="container-max-w text-center">
            <div className="bg-white border-2 border-orange-200 p-12 rounded-3xl max-w-2xl mx-auto shadow-xl">
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
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-sky-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300"
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
