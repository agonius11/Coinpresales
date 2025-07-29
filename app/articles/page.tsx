import { Metadata } from "next";
import ArticleSearchClient from "@/components/ArticleSearchClient";
import { getLatestArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "All Articles | Coin Trends News",
  description:
    "Browse all crypto news, analysis, and insights from Coin Trends News.",
};

export default async function ArticlesPage() {
  const articles = await getLatestArticles(100); // Get all articles

  return <ArticleSearchClient articles={articles} />;
}
