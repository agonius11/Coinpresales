import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Mail, Tag, User } from "lucide-react";
import { getArticleBySlug, getAllArticleSlugs } from "@/lib/articles";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | Coin Trends News`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Coin Trends News",
      logo: {
        "@type": "ImageObject",
        url: "https://cointrendsnews.com/logo.png",
      },
    },
  };

  // Convert markdown content to HTML with light theme styling
  const htmlContent = article.content
    .replace(
      /^### (.*$)/gim,
      '<h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">$1</h3>'
    )
    .replace(
      /^## (.*$)/gim,
      '<h2 class="text-3xl font-bold text-gray-900 mb-6 mt-10">$1</h2>'
    )
    .replace(
      /^# (.*$)/gim,
      '<h1 class="text-4xl font-bold text-gray-900 mb-8 mt-12">$1</h1>'
    )
    .replace(
      /^\*\*(.*)\*\*/gim,
      '<strong class="text-gray-900 font-semibold">$1</strong>'
    )
    .replace(/^\*(.*)\*/gim, '<em class="italic">$1</em>')
    .replace(/^\- (.*$)/gim, '<li class="mb-2 text-gray-700">$1</li>')
    .replace(/\n\n/gim, '</p><p class="mb-4 text-gray-700 leading-relaxed">')
    .replace(
      /^(?!<[h|l|p])(.*$)/gim,
      '<p class="mb-4 text-gray-700 leading-relaxed">$1</p>'
    )
    .replace(/<li/gim, '<ul class="list-disc pl-6 mb-4"><li')
    .replace(/li>/gim, "li></ul>")
    .replace(/<\/ul><ul[^>]*>/gim, "");

  return (
    <div className="min-h-screen relative light-gradient-bg">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="container-max-w py-12 md:py-20 relative z-10">
        <Link
          href="/articles"
          className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium mb-10 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to All Articles
        </Link>

        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-6">
            <span className="article-badge bg-teal-500 text-white flex items-center gap-1.5 px-4 py-2 rounded-full font-semibold">
              <Tag className="w-4 h-4" />
              {article.category}
            </span>
            <div className="flex items-center gap-1.5">
              <CalendarDays className="w-4 h-4 text-teal-600" />
              <time dateTime={article.publishedAt}>
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            {article.excerpt}
          </p>

          <div className="text-base font-semibold text-gray-700 flex items-center justify-center gap-2">
            <User className="w-4 h-4 text-teal-600" /> By {article.author}
          </div>
        </header>

        <div className="max-w-4xl mx-auto">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>

        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="light-card rounded-2xl p-8 md:p-12 text-center glow-teal">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              Never Miss <span className="text-teal-600">Daily Alpha!</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest crypto insights, market analysis, and exclusive
              tips delivered straight to your inbox daily.
            </p>
            <Link href="/#newsletter" className="btn-primary text-lg px-8 py-4">
              <Mail className="w-5 h-5 mr-2" /> Subscribe to Our Newsletter
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
