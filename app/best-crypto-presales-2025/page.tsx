import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AuthorProfile from "@/components/AuthorProfile";
import {
  ArrowLeft,
  CheckCircle,
  ExternalLink,
  TrendingUp,
  Zap,
  Shield,
  Brain,
  Users,
  DollarSign,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "5 Best Crypto Presales to Buy Now (One Is Still Early) | CoinTrends News",
  description:
    "Looking for the best crypto presales to buy now? See which 5 tokens exploded post-presale — and why $DSNT might be the last one still early.",
  keywords:
    "crypto presales, best crypto presales 2025, DSNT, DeepSnitch AI, PEPE, WIF, crypto investment",
  openGraph: {
    title: "5 Best Crypto Presales to Buy Now (One Is Still Early)",
    description:
      "$PEPE and $WIF exploded after presale — only one on this list is still live. Don't miss it.",
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
      "$PEPE and $WIF exploded after presale — only one on this list is still live. Don't miss it.",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "5 Best Crypto Presales to Buy Now — One Is Still Early",
    description:
      "Looking for the best crypto presales to buy now? See which 5 tokens exploded post-presale — and why $DSNT might be the last one still early.",
    datePublished: "2025-07-16",
    dateModified: "2025-07-16",
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

      <article
        className="min-h-screen"
        style={{ backgroundColor: "rgba(255, 245, 238, 0.7)" }}
      >
        {/* Header Section */}
        <section className="section-padding">
          <div className="container-max-w">
            <Link
              href="/articles"
              className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium mb-8 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to All Articles
            </Link>

            {/* Author Box */}
            <div className="glass p-6 rounded-2xl mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">
                    Research Team @ CoinTrends
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Presale Intelligence & Market Analysis
                  </p>
                  <AuthorProfile
                    author="Antoine Marin"
                    size="small"
                    showModal={true}
                  />
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-64 md:h-80 w-full mb-12 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/articles/five-cryptos.jpg"
                alt="Best 5 Crypto Presales Comparison - DSNT, PEPE, WIF, JEET, LADYS"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  5 Best Crypto Presales Analysis
                </span>
              </div>
            </div>

            {/* Main Title */}
            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                5 Best Crypto Presales to Buy Now —
                <span className="text-orange-500"> One Is Still Early</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                In 2023 and 2024, projects like <strong>$PEPE</strong>,{" "}
                <strong>$WIF</strong>, and <strong>$FET</strong> launched
                quietly, hit public markets, and then 10x&apos;d — sometimes
                100x&apos;d — before most people even noticed.
              </p>

              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                In 2025, presales are once again heating up. But the truth is,
                only a few still offer real upside — and just one on this list
                is still live.
              </p>
            </header>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16">
          <div className="container-max-w max-w-4xl">
            {/* Coin #1 - DSNT (Featured/Highlighted) */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-3xl p-8 mb-12 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  🔥 Top Pick
                </div>
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  🟢 Presale Live
                </div>
                <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  Audited
                </div>
                <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  No Tax
                </div>
                <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  Low Risk
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/articles/dslogo.png"
                    alt="DeepSnitch AI Logo"
                    width={48}
                    height={48}
                    className="rounded-lg"
                  />
                  <span>1. $DSNT — DeepSnitch AI</span>
                </div>
                <span className="block text-lg font-normal text-gray-600 mt-2">
                  (Best Crypto Presale of 2025)
                </span>
              </h2>

              <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm text-gray-700">
                <div>
                  <strong>Status:</strong> ✅ Presale Live
                </div>
                <div>
                  <strong>Chain:</strong> Ethereum
                </div>
                <div>
                  <strong>Narrative:</strong> AI x Agent Networks x Alpha
                  Intelligence
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                $DSNT is one of the few crypto presales live in 2025 that
                combines a real, working AI product with a narrative that&apos;s
                getting hotter by the day. Where most &apos;AI tokens&apos; slap
                GPT on a website and call it a day, DeepSnitch is different: it
                runs autonomous AI agents that track wallet activity, contract
                deploys, liquidity movements, and Telegram chatter — to flag
                early alpha, rug risks, and degen launches before they go
                public.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why DeepSnitch Fits the 2025 Narrative:
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>
                      Part of the AgentOps + On-Chain Intelligence boom (same
                      trend as $FET, $NUM, $ARKM)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Brain className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span>
                      Uses multiple AI agents working in tandem to surface
                      verified, prioritized trading signals
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span>
                      Audited contract, no taxes, no team tokens, no whitelist
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>
                      💰 Current Price: $0.01510 — Listing Price: $0.0547
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    <span>
                      Fully public presale — no VCs, no private round, no
                      insider advantage
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <span>
                      Still early — but already gaining traction in Telegram, X,
                      and degen circles
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>
                      Aiming to become the go-to tool for on-chain intelligence,
                      just like $ARKM did in 2023-24
                    </span>
                  </div>
                </div>
              </div>

              {/* Main CTA for DSNT */}
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-2xl text-white text-center shadow-lg">
                <h4 className="text-xl font-bold mb-3">
                  🔥 Join the $DSNT Presale
                </h4>
                <p className="mb-4 text-orange-100">
                  $DSNT is what $PEPE was before it launched. But instead of
                  relying on meme power alone, it&apos;s packing a powerful AI
                  engine designed to find alphas, track whales, and detect
                  trends before they go viral.
                </p>
                <Link
                  href="https://deepsnitch.ai/?utm_source=cointrendsnews&utm_medium=article&utm_campaign=5-best-crypto-presales&utm_term=dsnt-presale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-orange-500 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Join the $DSNT Presale Now{" "}
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

            {/* Coin #2 - PEPE */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-gray-900">
                  2. $PEPE — Meme Power + Timing = 1000x
                </h2>
                <span className="bg-gray-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Presale Ended
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm text-gray-700">
                <div>
                  <strong>Status:</strong> Trading
                </div>
                <div>
                  <strong>Presale Gain:</strong> ~1000x
                </div>
                <div>
                  <strong>Narrative:</strong> Meme Culture Revival
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                $PEPE launched in early 2023 and became a historic meme coin
                success — despite no roadmap, no team pitch, and no utility. Its
                early buyers were rewarded massively. It&apos;s no longer early,
                but it still holds relevance and liquidity.
              </p>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Built a cult following presale</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>30 stards under $000K</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Multi-stage public presale</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Presale long over</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coin #3 - WIF */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-gray-900">
                  3. $WIF (dogwifhat) — Solana&apos;s Viral King
                </h2>
                <span className="bg-gray-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Presale Ended
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm text-gray-700">
                <div>
                  <strong>Status:</strong> Trading
                </div>
                <div>
                  <strong>Presale Gain:</strong> ~500x
                </div>
                <div>
                  <strong>Narrative:</strong> Solana x Meme Community
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                $WIF launched stealthily on Solana, exploded in popularity, and
                now holds a strong position across major CEXs. Early presale
                buyers saw significant gains.
              </p>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Started with a tiny presale</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Grew from ~$500K to billions</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Trading actively</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Presale is long over</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mid-Article CTA */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-2xl text-white text-center my-12 shadow-lg">
              <div className="text-2xl mb-3">
                🚨 Still looking for an active presale in 2025?
              </div>
              <p className="mb-4 text-blue-100">
                You still have a shot with $DSNT. It&apos;s public, audited, and
                gaining momentum.
              </p>
              <Link
                href="https://deepsnitch.ai/?utm_source=cointrendsnews&utm_medium=article&utm_campaign=5-best-crypto-presales&utm_term=mid-article-cta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300"
              >
                👉 Check out DeepSnitch AI ($DSNT){" "}
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Coin #4 - JEET */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-gray-900">
                  4. $JEET — From Joke to Juggernaut
                </h2>
                <span className="bg-gray-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Presale Ended
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm text-gray-700">
                <div>
                  <strong>Status:</strong> Trading
                </div>
                <div>
                  <strong>Presale Gain:</strong> 10-20x
                </div>
                <div>
                  <strong>Narrative:</strong> Meme x Degen Culture
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                $JEET leaned into satire and &apos;paper hands&apos; culture to
                attract degens. The presale sold out fast, and early buyers saw
                strong returns.
              </p>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Built a cult following</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>10x group order exploded</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Strong memento &apos;social fuel&apos;</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>The early phase</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coin #5 - LADYS */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-12 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-gray-900">
                  5. LADYS — The Cult-Favorite That Slipped Through
                </h2>
                <span className="bg-gray-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Presale Ended
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm text-gray-700">
                <div>
                  <strong>Status:</strong> Trading
                </div>
                <div>
                  <strong>Narrative:</strong> Community-Driven Meme
                </div>
                <div>
                  <strong>Chain:</strong> Ethereum
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                LADYS launched quietly, built a loyal community, and flew under
                the radar before exploding in value.
              </p>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Launched quietly built a loyal community</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Flew under radar then exploded</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-12 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Final Word: Which Presale Is Still Early?
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-4 font-bold text-gray-900">
                        Token
                      </th>
                      <th className="text-left py-4 px-4 font-bold text-gray-900">
                        Status
                      </th>
                      <th className="text-left py-4 px-4 font-bold text-gray-900">
                        Presale ROI
                      </th>
                      <th className="text-left py-4 px-4 font-bold text-gray-900">
                        Still Early?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 bg-green-50">
                      <td className="py-4 px-4 font-semibold">$DSNT</td>
                      <td className="py-4 px-4">🟢 Live</td>
                      <td className="py-4 px-4">TBD</td>
                      <td className="py-4 px-4 text-green-600 font-bold">
                        ✅ YES
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 font-semibold">$PEPE</td>
                      <td className="py-4 px-4">❌ Over</td>
                      <td className="py-4 px-4">~1000x</td>
                      <td className="py-4 px-4 text-red-600">❌ No</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 font-semibold">$WIF</td>
                      <td className="py-4 px-4">❌ Over</td>
                      <td className="py-4 px-4">~500x</td>
                      <td className="py-4 px-4 text-red-600">❌ No</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 font-semibold">$JEET</td>
                      <td className="py-4 px-4">❌ Over</td>
                      <td className="py-4 px-4">~10-20x</td>
                      <td className="py-4 px-4 text-red-600">❌ No</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold">LADYS</td>
                      <td className="py-4 px-4">❌ Over</td>
                      <td className="py-4 px-4">TBD</td>
                      <td className="py-4 px-4 text-red-600">❌ No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Final CTA - UPDATED WITH DEEPSNITCH BRANDING */}
            <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 p-8 rounded-3xl text-white text-center shadow-2xl relative overflow-hidden">
              {/* Background Pattern/Decoration */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
                <div className="absolute top-12 right-8 w-12 h-12 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-8 left-12 w-20 h-20 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-white rounded-full"></div>
              </div>

              {/* DeepSnitch Branding */}
              <div className="relative z-10 mb-6">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Image
                    src="/images/articles/deepsnitchlogo.svg"
                    alt="DeepSnitch AI Logo"
                    width={200}
                    height={48}
                    className="h-12 bg-white/20 px-4 py-2 rounded-lg"
                  />
                </div>
                <div className="text-center">
                  <div className="text-sm text-orange-200">
                    AI-Powered Crypto Intelligence Platform
                  </div>
                </div>
              </div>

              <h3 className="text-3xl font-bold mb-4 relative z-10">
                If you missed $PEPE, $WIF, or $JEET…
              </h3>
              <p className="text-xl mb-6 text-orange-100 relative z-10">
                You still have a shot with $DSNT. It&apos;s public, audited, and
                gaining momentum — before the hype, before the CEX listings,
                before the 10x.
              </p>
              <p className="text-lg mb-8 text-orange-200 relative z-10">
                If you&apos;re looking for the next AI-driven breakout token,
                $DSNT is the only one on this list still in that window.
              </p>

              {/* Enhanced CTA Button with Icons */}
              <div className="relative z-10">
                <Link
                  href="https://deepsnitch.ai/?utm_source=cointrendsnews&utm_medium=article&utm_campaign=5-best-crypto-presales&utm_term=final-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-orange-500 px-10 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg group"
                >
                  <Image
                    src="/images/articles/dslogo.png"
                    alt="DeepSnitch"
                    width={24}
                    height={24}
                    className="mr-3 h-5"
                  />
                  Join the $DSNT Presale Today{" "}
                  <ExternalLink className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Additional branding elements */}
                <div className="mt-6 flex items-center justify-center gap-6 text-sm text-orange-200">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>Audited</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Brain className="w-4 h-4" />
                    <span>AI-Powered</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    <span>$0.01510</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="rounded-xl p-8 text-center shadow-md glass">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  Never Miss the Next Big Presale!
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Get early alerts on the hottest crypto presales, exclusive
                  market analysis, and trading insights delivered to your inbox
                  daily.
                </p>
                <Link href="/#newsletter" className="btn-primary text-lg">
                  <Zap className="w-5 h-5 mr-2" /> Subscribe to Our Newsletter
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
