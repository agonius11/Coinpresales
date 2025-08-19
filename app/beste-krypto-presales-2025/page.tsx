import CryptoPresalesClientDE from "@/components/CryptoPresalesClientDE";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Die 5 besten Krypto-Presales, die du jetzt kaufen kannst (einer ist noch in einer sehr frühen Phase) | CoinTrends News",
  description:
    "In den Jahren 2023 und 2024 kamen Coins wie $PEPE, $WIF und $VIRTUAL nahezu ohne Aufsehen auf den Markt und machten frühe Käufer teilweise über Nacht zu Millionären. 2025 könnte DeepSnitch ($DSNT) deine nächste Chance auf 100x-Gewinne sein.",
  keywords:
    "crypto presales, beste krypto presales 2025, DSNT, DeepSnitch AI, PEPE, WIF, VIRTUAL, FET, krypto investment",
  openGraph: {
    title:
      "Die 5 besten Krypto-Presales, die du jetzt kaufen kannst (einer ist noch in einer sehr frühen Phase)",
    description:
      "Bitcoin erreicht neue Allzeithochs und die Gier nach Gewinnen ist größer denn je. Einer der besten Krypto-Presales läuft noch – aber nicht mehr lange.",
    type: "article",
    images: [
      {
        url: "/images/crypto-presales-2025.jpg",
        width: 1200,
        height: 630,
        alt: "Die besten Krypto-Presales 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Die 5 besten Krypto-Presales, die du jetzt kaufen kannst (einer ist noch in einer sehr frühen Phase)",
    description:
      "$PEPE, $WIF und $VIRTUAL machten frühe Käufer zu Millionären. DeepSnitch könnte der nächste sein.",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "Die 5 besten Krypto-Presales, die du jetzt kaufen kannst – einer ist noch in einer sehr frühen Phase",
    description:
      "In den Jahren 2023 und 2024 kamen Coins wie $PEPE, $WIF und $VIRTUAL nahezu ohne Aufsehen auf den Markt und machten frühe Käufer teilweise über Nacht zu Millionären.",
    datePublished: "2025-08-19",
    dateModified: "2025-08-19",
    author: {
      "@type": "Organization",
      name: "CoinTrends Research Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Coin Trends News",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <CryptoPresalesClientDE />
    </>
  );
}
