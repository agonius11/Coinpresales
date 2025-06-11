import { BarChart3, Cpu, Shield, TrendingUp, Zap, Users } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <BarChart3 className="w-10 h-10 text-teal-400" />,
    title: "In-depth Market Analysis",
    description:
      "Our team of veteran analysts provides comprehensive research and actionable insights across the crypto landscape, identifying emerging trends and hidden opportunities.",
    stats: [
      { value: "10+", label: "Years Experience" },
      { value: "24/7", label: "Market Monitoring" },
    ],
    glow: "glow-teal",
  },
  {
    icon: <Cpu className="w-10 h-10 text-purple-400" />,
    title: "AI-Driven Alpha Signals",
    description:
      "Leveraging advanced AI, we track over 1,000 top-performing crypto wallets in real-time, delivering proprietary signals derived from smart money movements.",
    stats: [
      { value: "1000+", label: "Wallets Tracked" },
      { value: "Real-time", label: "Data Processing" },
    ],
    glow: "glow-purple",
  },
  {
    icon: <Shield className="w-10 h-10 text-blue-400" />,
    title: "Exclusive Insider Network",
    description:
      "Gain unparalleled access to a private network of C-suite executives, exchange managers, and industry founders for insights you won't find on public channels.",
    stats: [
      { value: "Exclusive", label: "Access" },
      { value: "C-Suite", label: "Connections" },
    ],
    glow: "glow-teal",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-green-400" />,
    title: "Actionable Trading Strategies",
    description:
      "Beyond just news, we provide concise and actionable trading strategies, helping you navigate volatility and capitalize on market movements with confidence.",
    stats: [
      { value: "Proven", label: "Strategies" },
      { value: "Risk", label: "Management" },
    ],
    glow: "glow-teal",
  },
  {
    icon: <Zap className="w-10 h-10 text-yellow-400" />,
    title: "Rapid Breaking News Alerts",
    description:
      "Receive instant alerts on critical market developments, regulatory changes, and major announcements that impact crypto prices, giving you an edge.",
    stats: [
      { value: "Instant", label: "Notifications" },
      { value: "Critical", label: "Insights" },
    ],
    glow: "glow-purple",
  },
  {
    icon: <Users className="w-10 h-10 text-pink-400" />,
    title: "Community & Support",
    description:
      "Join a thriving community of serious crypto enthusiasts. Share insights, ask questions, and get support directly from our experts.",
    stats: [
      { value: "Active", label: "Community" },
      { value: "Expert", label: "Support" },
    ],
    glow: "glow-teal",
  },
];

export default function FeatureSection() {
  return (
    <div id="features" className="relative">
      {/* Background with subtle patterns */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(20, 185, 185, 0.1) 0%, transparent 50%), 
                                radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      {/* Section Header */}
      <section className="section-padding relative z-10">
        <div className="container-max-w">
          <div className="text-center mb-20">
            <span className="text-teal-400 font-semibold text-lg uppercase mb-3 block tracking-wider">
              Why Choose Us?
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Unleash Your{" "}
              <span className="text-teal-400 glow-teal">Crypto Edge</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We empower you with actionable intelligence, advanced technology,
              and exclusive insights to navigate the dynamic crypto markets with
              confidence.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl dark-card text-center card-hover-effect ${feature.glow} group`}
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-gray-800/50 w-20 h-20 rounded-full flex items-center justify-center border border-gray-700 group-hover:border-teal-400/50 transition-all duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-base mb-6">
                  {feature.description}
                </p>
                {feature.stats && (
                  <div className="flex justify-center gap-4">
                    {feature.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-800/30 px-4 py-3 rounded-lg text-center border border-gray-700 group-hover:border-teal-400/30 transition-all duration-300"
                      >
                        <span className="text-lg font-bold text-teal-400 block">
                          {stat.value}
                        </span>
                        <p className="text-xs text-gray-400 mt-1">
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
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-gray-900/40 to-purple-900/20"></div>

        <div className="container-max-w text-center max-w-5xl relative z-10">
          <div className="glass-strong p-12 md:p-16 rounded-3xl glow-teal">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
              Ready to Get Your{" "}
              <span className="text-teal-400">Daily Alpha?</span>
            </h2>
            <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our experienced research team analyzes over 1,000 data points
              daily, using AI to filter out what truly matters. The result? A
              concise email you can read in just 3 minutes.
            </p>
            <Link
              href="/#newsletter"
              className="btn-primary text-xl px-12 py-4 transform hover:scale-105 shadow-2xl"
            >
              Start Your Free Subscription
            </Link>
            <p className="text-sm text-gray-400 mt-6">
              Join 10,000+ crypto enthusiasts • No spam, ever • Unsubscribe
              anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
