import { Search, Shield, TrendingUp, Zap, Users, CheckCircle } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Search className="w-10 h-10 text-blue-600" />,
    title: "Expert Presale Research",
    description:
      "Our research team conducts deep due diligence on every presale, analyzing tokenomics, team backgrounds, and project viability to bring you only the most promising opportunities.",
    stats: [
      { value: "100+", label: "Projects Analyzed" },
      { value: "Expert", label: "Due Diligence" },
    ],
    glow: "glow-blue",
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-purple-600" />,
    title: "Verified Opportunities",
    description:
      "Every presale featured on our platform undergoes rigorous verification. We check smart contracts, audit reports, and team credentials to ensure legitimacy.",
    stats: [
      { value: "Verified", label: "Smart Contracts" },
      { value: "Audited", label: "Projects Only" },
    ],
    glow: "glow-purple",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-green-600" />,
    title: "Early Access Advantage",
    description:
      "Get exclusive early access to the most promising presales before they go public. Many of our featured projects have delivered 10x+ returns to early participants.",
    stats: [
      { value: "10x+", label: "Potential Returns" },
      { value: "Early", label: "Access" },
    ],
    glow: "glow-blue",
  },
  {
    icon: <Shield className="w-10 h-10 text-blue-600" />,
    title: "Risk Assessment",
    description:
      "Each presale comes with a comprehensive risk assessment, highlighting potential red flags and providing clear guidance on investment decisions.",
    stats: [
      { value: "Risk", label: "Ratings" },
      { value: "Detailed", label: "Analysis" },
    ],
    glow: "glow-blue",
  },
  {
    icon: <Zap className="w-10 h-10 text-yellow-600" />,
    title: "Real-Time Updates",
    description:
      "Stay informed with real-time updates on presale progress, funding milestones, and important developments that could impact your investment decisions.",
    stats: [
      { value: "Real-time", label: "Updates" },
      { value: "Live", label: "Progress" },
    ],
    glow: "glow-purple",
  },
  {
    icon: <Users className="w-10 h-10 text-pink-600" />,
    title: "Community Insights",
    description:
      "Connect with other presale investors, share experiences, and get insights from our community of successful crypto investors and industry experts.",
    stats: [
      { value: "Active", label: "Investors" },
      { value: "Proven", label: "Track Record" },
    ],
    glow: "glow-blue",
  },
];

export default function FeatureSection() {
  return (
    <div id="features" className="relative light-gradient-bg">
      {/* Background with subtle patterns */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(14, 165, 233, 0.05) 0%, transparent 50%), 
                                radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      {/* Section Header */}
      <section className="section-padding relative z-10">
        <div className="container-max-w">
          <div className="text-center mb-20">
            <span className="text-blue-600 font-semibold text-lg uppercase mb-3 block tracking-wider">
              Why Choose Us?
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Discover the Best{" "}
              <span className="text-blue-600 glow-blue">Crypto Presales</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We provide comprehensive research, verification, and early access to the most promising crypto presales before they become mainstream opportunities.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl light-card text-center card-hover-effect ${feature.glow} group`}
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center border border-gray-200 group-hover:border-teal-300 transition-all duration-300 group-hover:shadow-lg">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base mb-6">
                  {feature.description}
                </p>
                {feature.stats && (
                  <div className="flex justify-center gap-4">
                    {feature.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 px-4 py-3 rounded-lg text-center border border-gray-200 group-hover:border-teal-200 group-hover:bg-teal-50 transition-all duration-300"
                      >
                        <span className="text-lg font-bold text-blue-600 block">
                          {stat.value}
                        </span>
                        <p className="text-xs text-gray-500 mt-1">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding relative">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50"></div>

        <div className="container-max-w text-center max-w-5xl relative z-10">
          <div className="glass-strong p-12 md:p-16 rounded-3xl glow-blue">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
              Ready to Find Your{" "}
              <span className="text-blue-600">Next 100x?</span>
            </h2>
            <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our expert team analyzes hundreds of presale opportunities, conducting thorough due diligence to bring you only the most promising projects with real potential for massive returns.
            </p>
            <Link
              href="/best-crypto-presales-2025"
              className="btn-primary text-xl px-12 py-4 transform hover:scale-105 shadow-2xl"
            >
              Explore Best Presales 2025
            </Link>
            <p className="text-sm text-gray-500 mt-6">
              Trusted by thousands of investors • Expert research • Early access opportunities
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
