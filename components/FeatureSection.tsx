import { Search, Shield, TrendingUp, Zap, Users, CheckCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Expert Presale Research",
    description:
      "Our research team conducts deep due diligence on every presale, analyzing tokenomics, team backgrounds, and project viability.",
    gradient: "from-orange-500 to-orange-600",
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Verified Opportunities",
    description:
      "Every presale undergoes rigorous verification. We check smart contracts, audit reports, and team credentials.",
    gradient: "from-sky-500 to-sky-600",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Early Access Advantage",
    description:
      "Get exclusive early access to promising presales before they go public. Many projects delivered 10x+ returns.",
    gradient: "from-orange-400 to-orange-600",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Risk Assessment",
    description:
      "Each presale comes with comprehensive risk assessment, highlighting potential red flags and clear guidance.",
    gradient: "from-sky-400 to-sky-600",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Real-Time Updates",
    description:
      "Stay informed with real-time updates on presale progress, funding milestones, and important developments.",
    gradient: "from-orange-500 to-sky-500",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Insights",
    description:
      "Connect with other investors and get insights from our community of successful crypto investors and experts.",
    gradient: "from-sky-500 to-orange-500",
  },
];

export default function FeatureSection() {
  return (
    <div id="features" className="relative bg-gradient-to-b from-sky-50/30 via-white to-orange-50/30 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-200/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Decorative pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <section className="section-padding relative z-10">
        <div className="container-max-w">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-sky-500/10 border border-orange-300/30">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
              <span className="text-sm text-gray-700 font-medium">Why Choose Us</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
              Everything You Need To
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-sky-600 to-orange-600">
                Find Winning Projects
              </span>
            </h2>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive tools and insights to help you identify and invest in the most promising crypto presales.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500`}></div>

                <div className="relative h-full p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-orange-300 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 shadow-lg`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-sky-600 transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover arrow */}
                  <div className="mt-4 flex items-center gap-2 text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-24 relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300/20 via-sky-300/20 to-orange-300/20 blur-3xl"></div>

            <div className="relative bg-gradient-to-r from-white to-orange-50/50 rounded-3xl border-2 border-orange-200 overflow-hidden shadow-2xl">
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>

              <div className="relative p-12 md:p-16 text-center space-y-6">
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                  Ready To Find Your Next{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-sky-600 to-orange-600">
                    100x Gem?
                  </span>
                </h2>

                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Join thousands of investors who trust our expert research and early access opportunities.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <Link
                    href="/best-crypto-presales-2025"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-sky-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300"
                  >
                    Explore Top Presales
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>

                  <Link
                    href="/#newsletter"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white border-2 border-gray-300 text-gray-900 font-semibold text-lg hover:bg-gray-50 hover:border-orange-300 transition-all duration-300"
                  >
                    Subscribe For Free
                  </Link>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>100% Free</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Expert Research</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Early Access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
