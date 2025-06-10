"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 shadow-md py-2 backdrop-blur-sm"
          : "bg-white/80 py-4 backdrop-blur-sm"
      }`}
    >
      <div className="container-max-w">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-extrabold text-gray-900">
              <span className="text-orange-500">COIN</span>TRENDS NEWS
            </h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/articles"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Articles
            </Link>
            <Link
              href="/#features" // Link to the new features section
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#newsletter" // Link to the newsletter section
              className="btn-primary py-2 px-5 text-base" // Use custom class
            >
              Subscribe
            </Link>
          </nav>

          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-50 rounded-lg text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/articles"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-50 rounded-lg text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Articles
            </Link>
            <Link
              href="/#features"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-50 rounded-lg text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/#newsletter"
              className="block w-full text-center btn-primary mt-4"
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
