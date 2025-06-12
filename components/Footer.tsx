import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 md:py-20 border-t border-gray-200">
      <div className="container-max-w">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-extrabold mb-6 text-white">
              <span className="text-teal-400">COIN</span>TRENDS NEWS
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md mb-8">
              Your unfair advantage in crypto — daily unfiltered insights, news,
              and smart tips to always stay ahead of the game.
            </p>
          </div>

          {/* Main Links */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-white">Main</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-teal-400 transition-colors duration-300 text-lg"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="hover:text-teal-400 transition-colors duration-300 text-lg"
                >
                  All Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="hover:text-teal-400 transition-colors duration-300 text-lg"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#newsletter"
                  className="hover:text-teal-400 transition-colors duration-300 text-lg"
                >
                  Subscribe
                </Link>
              </li>
            </ul>
          </div>

          {/* Utility Links */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-white">Utility</h4>
            <ul className="space-y-4 text-gray-400 mb-8">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-teal-400 transition-colors duration-300 text-lg"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-teal-400 transition-colors duration-300 text-lg"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-teal-400 transition-colors duration-300 text-lg"
                >
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-teal-400 transition-colors duration-300 text-lg"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © 2025 Coin Trends News. All Rights Reserved.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-sm">
                Designed & Developed By{" "}
                <span className="text-teal-400 font-semibold">
                  Coin Trends Team
                </span>
              </p>
            </div>
          </div>

          {/* Additional footer info */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-xs max-w-4xl mx-auto leading-relaxed">
              Disclaimer: The information provided on this website is for
              educational and informational purposes only. It should not be
              considered as financial or investment advice. Cryptocurrency
              investments carry high risk, and you should conduct your own
              research before making any investment decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
