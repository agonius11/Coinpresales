import Link from "next/link";
import { Twitter, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-blue-400">COIN</span>TRENDS NEWS
            </h3>
            <p className="text-gray-400">
              Your unfair advantage in crypto — daily unfiltered insights, news,
              and smart tips to always stay ahead of the game.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/articles?category=analysis"
                  className="hover:text-white"
                >
                  Market Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/articles?category=news"
                  className="hover:text-white"
                >
                  Breaking News
                </Link>
              </li>
              <li>
                <Link
                  href="/articles?category=research"
                  className="hover:text-white"
                >
                  Research Reports
                </Link>
              </li>
              <li>
                <Link
                  href="/articles?category=insights"
                  className="hover:text-white"
                >
                  Trading Insights
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2025 cointrends.news. - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
