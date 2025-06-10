import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Mail, Tag, User } from "lucide-react";
import { getArticleBySlug, getAllArticleSlugs } from "@/lib/articles";

// Remove this interface:
// interface ArticlePageProps {
//   params: {
//     slug: string;
//   };
// }

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Update the type of params directly in generateMetadata
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

// Update the type of params directly in the default export function
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
        url: "https://yoursite.com/logo.png",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="container-max-w py-12 md:py-16">
        <Link
          href="/articles" // Link back to all articles page
          className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to All Articles
        </Link>

        <header className="mb-10 text-center">
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mb-4">
            <span className="article-badge bg-blue-100 text-blue-700 flex items-center gap-1.5">
              <Tag className="w-4 h-4" />
              {article.category}
            </span>
            <div className="flex items-center gap-1.5">
              <CalendarDays className="w-4 h-4 text-gray-500" />
              <time dateTime={article.publishedAt}>
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
            {article.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-3xl mx-auto">
            {article.excerpt}
          </p>

          <div className="text-base font-semibold text-gray-600 flex items-center justify-center gap-2">
            <User className="w-4 h-4 text-gray-500" /> By {article.author}
          </div>
        </header>

        {article.image && (
          <div className="relative h-72 md:h-96 w-full mb-10 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        )}

        <div
          className="prose lg:prose-lg max-w-none mx-auto" // Apply prose styles from globals.css
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="rounded-xl p-8 text-center shadow-md glass">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Never Miss an Update!
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Get the latest crypto insights, market analysis, and exclusive
              tips delivered straight to your inbox daily.
            </p>
            <Link href="/#newsletter" className="btn-primary text-lg">
              <Mail className="w-5 h-5 mr-2" /> Subscribe to Our Newsletter
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
