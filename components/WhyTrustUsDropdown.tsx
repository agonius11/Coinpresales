"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

export default function WhyTrustUsDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto mb-8">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Dropdown Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 hover:bg-gray-50/50 transition-colors group"
          aria-expanded={isOpen}
          aria-controls="trust-us-content"
        >
          <div className="flex items-center gap-3">
            <Image
              src="/favicon.ico"
              alt="Coin Trends News"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="font-semibold text-gray-900 text-lg">
              Why Trust Us
            </span>
          </div>

          <div className="flex items-center">
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-500 group-hover:text-gray-700 transition-colors" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-gray-700 transition-colors" />
            )}
          </div>
        </button>

        {/* Dropdown Content */}
        {isOpen && (
          <div
            id="trust-us-content"
            className="px-4 pb-4 border-t border-gray-100 bg-gray-50/30"
          >
            <div className="pt-4">
              <p className="text-gray-700 leading-relaxed text-sm">
                CryptoPresales.net was founded by a team of cryptocurrency
                enthusiasts and experts dedicated to helping investors navigate
                the ever-evolving world of digital assets. Our platform provides
                in-depth, up-to-date analysis of the latest crypto presales,
                opportunities, and trends. We prioritize transparency, reliability,
                and unbiased reporting to ensure that all the information you
                receive is accurate, well-researched, and objective. Our
                editorial team conducts thorough investigations using trusted
                sources and expert insights to compare and evaluate presale
                opportunities, providing you with the most relevant and timely information. At
                CryptoPresales.net, we believe in empowering investors to make
                informed decisions while keeping safety, security, and risk
                management at the forefront. Please note, all content is for
                informational purposes only and should not be considered as
                financial or investment advice.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
