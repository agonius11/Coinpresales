import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coin Trends News - Daily Crypto Insights & News",
  description:
    "Get the alpha you won't find in the news. Daily crypto insights, market analysis, and exclusive trading tips delivered to your inbox.",
  keywords:
    "crypto news, cryptocurrency, bitcoin, ethereum, blockchain, crypto analysis, trading insights",
  authors: [{ name: "cointrends news" }],
  creator: "cointrends news",
  publisher: "Coin Trends News",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yoursite.com",
    siteName: "Coin Trends News",
    title: "Coin Trends News - Daily Crypto Insights & News",
    description:
      "Get the alpha you won't find in the news. Daily crypto insights delivered to your inbox.",
    images: [
      {
        url: "https://yoursite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coin Trends News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coin Trends News - Daily Crypto Insights & News",
    description: "Get the alpha you won't find in the news.",
    images: ["https://yoursite.com/twitter-image.jpg"],
    creator: "@Coin Trends News",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
