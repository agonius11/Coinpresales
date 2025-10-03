import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-white to-orange-50/50 border-t-2 border-orange-200">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-200/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-200/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container-max-w relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Brand Section */}
            <div className="md:col-span-5">
              <Link
                href="/"
                className="flex items-center gap-2 mb-6 group w-fit"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-sky-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative px-3 py-2 bg-white rounded-lg border-2 border-orange-300">
                    <Sparkles className="w-5 h-5 text-orange-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-black tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                    COIN
                  </span>
                  <span className="text-gray-900">PRESALES</span>
                </h3>
              </Link>

              <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
                Your unfair advantage in crypto. Get daily unfiltered insights,
                expert research, and early access to the most promising
                presales.
              </p>
            </div>

            {/* Navigation Sections */}
            <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Main Links */}
              <div>
                <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider">
                  Main
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-orange-600 transition-colors duration-300 text-sm"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/articles"
                      className="text-gray-600 hover:text-orange-600 transition-colors duration-300 text-sm"
                    >
                      Articles
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#features"
                      className="text-gray-600 hover:text-orange-600 transition-colors duration-300 text-sm"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#newsletter"
                      className="text-gray-600 hover:text-orange-600 transition-colors duration-300 text-sm"
                    >
                      Subscribe
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider">
                  Resources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/best-crypto-presales-2025"
                      className="text-gray-600 hover:text-orange-600 transition-colors duration-300 text-sm"
                    >
                      Best Presales 2025
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-orange-600 transition-colors duration-300 text-sm"
                    >
                      Research Reports
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-orange-600 transition-colors duration-300 text-sm"
                    >
                      Market Analysis
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider">
                  Legal
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-gray-600 hover:text-orange-600 transition-colors duration-300 text-sm"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-gray-600 hover:text-orange-600 transition-colors duration-300 text-sm"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-orange-600 transition-colors duration-300 text-sm"
                    >
                      Disclaimer
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t-2 border-orange-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2025 CoinPresales. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm">
              Built with passion by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-sky-600 font-semibold">
                CoinPresales Team
              </span>
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 rounded-lg bg-orange-50/50 border-2 border-orange-200">
            <p className="text-gray-600 text-xs leading-relaxed text-center">
              <strong className="text-gray-900">Disclaimer:</strong> The
              information provided on this website is for educational and
              informational purposes only. It should not be considered as
              financial or investment advice. Cryptocurrency investments carry
              high risk, and you should conduct your own research before making
              any investment decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
