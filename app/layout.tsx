import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CryptoPresales - Best Crypto Presales 2025",
  description:
    "Discover the most promising crypto presales before they launch. Get early access to verified presale opportunities with expert research.",
  keywords:
    "crypto presales, cryptocurrency presales, bitcoin presales, ethereum presales, blockchain presales, presale opportunities, early crypto investments",
  authors: [{ name: "CryptoPresales" }],
  creator: "CryptoPresales",
  publisher: "CryptoPresales",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://coinpresales.net",
    siteName: "CryptoPresales",
    title: "CryptoPresales - Best Crypto Presales 2025",
    description:
      "Discover the most promising crypto presales before they launch. Get early access to verified opportunities.",
    images: [
      {
        url: "https://coinpresales.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CryptoPresales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CryptoPresales - Best Crypto Presales 2025",
    description: "Discover the best crypto presales before they launch.",
    images: ["https://coinpresales.net/twitter-image.jpg"],
    creator: "@CryptoPresales",
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MNXQJPZK');
            `,
          }}
        />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MNXQJPZK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
