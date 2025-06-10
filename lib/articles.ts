import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Article } from "@/types";

const articlesDirectory = path.join(process.cwd(), "content/articles");

// Create directory if it doesn't exist
if (!fs.existsSync(articlesDirectory)) {
  fs.mkdirSync(articlesDirectory, { recursive: true });
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);

    const contentHtml = processedContent.toString();

    return {
      id: slug,
      slug,
      content: contentHtml,
      title: data.title,
      excerpt: data.excerpt,
      image: data.image,
      author: data.author,
      category: data.category,
      publishedAt: data.publishedAt,
      updatedAt: data.updatedAt || data.publishedAt,
      featured: data.featured || false,
    };
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error);
    return null;
  }
}

export async function getAllArticleSlugs(): Promise<string[]> {
  try {
    const fileNames = fs.readdirSync(articlesDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => fileName.replace(/\.md$/, ""));
  } catch (error) {
    console.error("Error reading articles directory:", error);
    return [];
  }
}

export async function getLatestArticles(
  limit: number = 10
): Promise<Article[]> {
  const slugs = await getAllArticleSlugs();
  const articles = await Promise.all(
    slugs.map((slug) => getArticleBySlug(slug))
  );

  return articles
    .filter((article): article is Article => article !== null)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, limit);
}

export async function getFeaturedArticle(): Promise<Article | null> {
  const articles = await getLatestArticles(20);
  return articles.find((article) => article.featured) || articles[0] || null;
}

export async function getArticlesByCategory(
  category: string
): Promise<Article[]> {
  const articles = await getLatestArticles(100);
  return articles.filter(
    (article) => article.category.toLowerCase() === category.toLowerCase()
  );
}
