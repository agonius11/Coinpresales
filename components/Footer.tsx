import Link from "next/link";
import { Twitter, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12 md:py-16">
      <div className="container-max-w">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-extrabold mb-4 text-blue-50">
              <span className="text-orange-700">COIN</span>TRENDS NEWS
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Your unfair advantage in crypto — daily unfiltered insights, news,
              and smart tips to always stay ahead of the game.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-5 text-gray-200">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-blue-200 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-blue-200 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="hover:text-blue-200 transition-colors"
                >
                  All Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/#newsletter"
                  className="hover:text-blue-200 transition-colors"
                >
                  Subscribe
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-5 text-gray-200">Follow Us</h4>
            <div className="flex space-x-5">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-7 h-7" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-7 h-7" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-7 h-7" />
              </a>
            </div>
            <div className="mt-8">
              <h4 className="font-bold text-xl mb-3 text-gray-200">Contact</h4>
              <p className="text-gray-400">46 Island Rd Phoenix, NY, 13135</p>
              <p className="text-gray-400">info@cointrendsnews.com</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2025 Coin Trends News. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ for crypto insights.</p>
        </div>
      </div>
    </footer>
  );
}
