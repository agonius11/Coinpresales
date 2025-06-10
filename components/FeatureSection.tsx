import { BarChart3, Cpu, Shield } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Extensive Research & Analysis",
    description:
      "Our full-time research team brings years of combined experience in crypto and finance, with backgrounds at some of the most reputable trading companies. We're always on the lookout for the next big crypto moves.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    alt: "Crypto market analysis charts",
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI-Powered Wallet Tracking",
    description:
      "Coin Trends uses advanced AI to track over 1000 wallets in real time, following every move of the top crypto traders to uncover what is really happening in the market.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    alt: "AI technology visualization",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Private Crypto Network Insights",
    description:
      "We're part of several invite-only private crypto groups, giving us direct access to C-suite executives, exchange managers, founders, and top traders, providing real insight into what's actually happening behind the scenes.",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
    alt: "Private network connections",
  },
];

export default function FeatureSection() {
  return (
    <div>
      {/* Section Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Coin Trends ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide unparalleled crypto insights through advanced
              technology and exclusive networks
            </p>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      {features.map((feature, index) => (
        <section
          key={index}
          className={`py-16 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Additional visual elements */}
                <div className="mt-8">
                  {index === 0 && (
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-50 px-4 py-2 rounded-lg">
                        <span className="text-2xl font-bold text-blue-600">
                          10+
                        </span>
                        <p className="text-sm text-gray-600">
                          Years Experience
                        </p>
                      </div>
                      <div className="bg-blue-50 px-4 py-2 rounded-lg">
                        <span className="text-2xl font-bold text-blue-600">
                          24/7
                        </span>
                        <p className="text-sm text-gray-600">Market Analysis</p>
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-50 px-4 py-2 rounded-lg">
                        <span className="text-2xl font-bold text-blue-600">
                          1000+
                        </span>
                        <p className="text-sm text-gray-600">Wallets Tracked</p>
                      </div>
                      <div className="bg-blue-50 px-4 py-2 rounded-lg">
                        <span className="text-2xl font-bold text-blue-600">
                          Real-time
                        </span>
                        <p className="text-sm text-gray-600">Data Analysis</p>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-50 px-4 py-2 rounded-lg">
                        <span className="text-2xl font-bold text-blue-600">
                          Exclusive
                        </span>
                        <p className="text-sm text-gray-600">Access</p>
                      </div>
                      <div className="bg-blue-50 px-4 py-2 rounded-lg">
                        <span className="text-2xl font-bold text-blue-600">
                          C-Suite
                        </span>
                        <p className="text-sm text-gray-600">Connections</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Image */}
              <div
                className={`relative h-96 rounded-2xl overflow-hidden shadow-xl ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Overlay gradient for better text visibility if needed */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Final Result: A 3-Minute Daily Email
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Our experienced research team analyzes over 1,000 data points daily,
            using AI to filter out what truly matters. The result? A concise
            email you can read in just 3 minutes.
          </p>
          <button className="bg-white text-blue-900 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Start Your Free Subscription
          </button>
        </div>
      </section>
    </div>
  );
}
