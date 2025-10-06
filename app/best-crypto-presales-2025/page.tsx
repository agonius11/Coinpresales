import { Metadata } from "next";
import CryptoPresalesClient from "@/components/CryptoPresalesClient";

export const metadata: Metadata = {
  title:
    "5 Best Crypto Presales to Buy Now (One Is Still Early) | CryptoPresales",
  description:
    "In 2023-2024, $PEPE, $WIF, and $VIRTUAL turned early buyers into millionaires. In 2025, DeepSnitch ($DSNT) might be your next shot at 100x gains.",
  keywords:
    "crypto presales, best crypto presales 2025, DSNT, DeepSnitch AI, PEPE, WIF, VIRTUAL, FET, crypto investment",
  openGraph: {
    title: "5 Best Crypto Presales to Buy Now (One Is Still Early)",
    description:
      "Bitcoin's hitting ATHs and the appetite for gains is bigger than ever. One of the best crypto presales is still live — but not for long.",
    type: "article",
    images: [
      {
        url: "/images/crypto-presales-2025.jpg",
        width: 1200,
        height: 630,
        alt: "Best Crypto Presales 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Best Crypto Presales to Buy Now (One Is Still Early)",
    description:
      "$PEPE, $WIF, and $VIRTUAL turned early buyers into millionaires. DeepSnitch might be next.",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "5 Best Crypto Presales to Buy Now — One Is Still Early",
    description:
      "In 2023-2024, coins like $PEPE, $WIF, and $VIRTUAL launched with zero fanfare and turned early buyers into millionaires practically overnight.",
    datePublished: "2025-07-21",
    dateModified: "2025-07-21",
    author: {
      "@type": "Organization",
      name: "CryptoPresales Research Team",
    },
    publisher: {
      "@type": "Organization",
      name: "CryptoPresales",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <CryptoPresalesClient />
    </>
  );
}