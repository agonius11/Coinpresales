"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-orange-200 py-3 shadow-lg"
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container-max-w">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-sky-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative px-3 py-2 bg-white rounded-lg border-2 border-orange-300 shadow-sm">
                <Sparkles className="w-5 h-5 text-orange-500" />
              </div>
            </div>
            <h1 className="text-2xl font-black tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">COIN</span>
              <span className="text-gray-900">PRESALES</span>
            </h1>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <Link
              href="/"
              className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300 rounded-lg hover:bg-orange-50"
            >
              Home
            </Link>
            <Link
              href="/articles"
              className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300 rounded-lg hover:bg-orange-50"
            >
              Articles
            </Link>
            <Link
              href="/#features"
              className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300 rounded-lg hover:bg-orange-50"
            >
              Features
            </Link>
            <Link
              href="/#newsletter"
              className="ml-4 px-6 py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-sky-600 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300"
            >
              Subscribe
            </Link>
          </nav>

          <button
            className="md:hidden text-gray-700 hover:text-orange-600 focus:outline-none transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-t border-orange-200 absolute w-full left-0 shadow-lg">
          <div className="container-max-w px-4 pt-4 pb-6 space-y-2">
            <Link
              href="/"
              className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/articles"
              className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Articles
            </Link>
            <Link
              href="/#features"
              className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/#newsletter"
              className="block w-full text-center px-6 py-3 mt-4 rounded-lg bg-gradient-to-r from-orange-500 to-sky-600 text-white font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Subscribe
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
