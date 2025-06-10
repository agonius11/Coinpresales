import { BarChart3, Cpu, Shield, TrendingUp, Zap, Users } from "lucide-react"; // More relevant icons
import Link from "next/link";

const features = [
  {
    icon: <BarChart3 className="w-10 h-10 text-orange-500" />,
    title: "In-depth Market Analysis",
    description:
      "Our team of veteran analysts provides comprehensive research and actionable insights across the crypto landscape, identifying emerging trends and hidden opportunities.",
    stats: [
      { value: "10+", label: "Years Experience" },
      { value: "24/7", label: "Market Monitoring" },
    ],
  },
  {
    icon: <Cpu className="w-10 h-10 text-orange-500" />,
    title: "AI-Driven Alpha Signals",
    description:
      "Leveraging advanced AI, we track over 1,000 top-performing crypto wallets in real-time, delivering proprietary signals derived from smart money movements.",
    stats: [
      { value: "1000+", label: "Wallets Tracked" },
      { value: "Real-time", label: "Data Processing" },
    ],
  },
  {
    icon: <Shield className="w-10 h-10 text-orange-500" />,
    title: "Exclusive Insider Network",
    description:
      "Gain unparalleled access to a private network of C-suite executives, exchange managers, and industry founders for insights you won't find on public channels.",
    stats: [
      { value: "Exclusive", label: "Access" },
      { value: "C-Suite", label: "Connections" },
    ],
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-orange-500" />,
    title: "Actionable Trading Strategies",
    description:
      "Beyond just news, we provide concise and actionable trading strategies, helping you navigate volatility and capitalize on market movements with confidence.",
    stats: [
      { value: "Proven", label: "Strategies" },
      { value: "Risk", label: "Management" },
    ],
  },
  {
    icon: <Zap className="w-10 h-10 text-orange-500" />,
    title: "Rapid Breaking News Alerts",
    description:
      "Receive instant alerts on critical market developments, regulatory changes, and major announcements that impact crypto prices, giving you an edge.",
    stats: [
      { value: "Instant", label: "Notifications" },
      { value: "Critical", label: "Insights" },
    ],
  },
  {
    icon: <Users className="w-10 h-10 text-orange-500" />,
    title: "Community & Support",
    description:
      "Join a thriving community of serious crypto enthusiasts. Share insights, ask questions, and get support directly from our experts.",
    stats: [
      { value: "Active", label: "Community" },
      { value: "Expert", label: "Support" },
    ],
  },
];

export default function FeatureSection() {
  return (
    <div id="features">
      {" "}
      {/* Add ID for direct linking */}
      {/* Section Header */}
      <section className="section-padding">
        <div className="container-max-w">
          <div className="text-center mb-16">
            <span className="text-blue-700 font-semibold text-lg uppercase mb-3 block">
              Why Choose Us?
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
              Unleash Your <span className="text-orange-500">Crypto Edge</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We empower you with actionable intelligence, advanced technology,
              and exclusive insights to navigate the dynamic crypto markets.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl shadow-lg glass text-center card-hover-effect" // Applying glass here
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-700">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {feature.description}
                </p>
                {feature.stats && (
                  <div className="mt-6 flex justify-center gap-4">
                    {feature.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="bg-blue-50 px-4 py-2 rounded-lg text-left"
                      >
                        <span className="text-xl font-bold text-blue-700 block">
                          {stat.value}
                        </span>
                        <p className="text-xs text-gray-600">{stat.label}</p>
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
      <section className="section-padding bg-teal-900 text-white">
        <div className="container-max-w text-center max-w-4xl">
          <h2 className="text-4xl font-extrabold mb-4 leading-tight">
            Ready to Get Your Daily Alpha?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            Our experienced research team analyzes over 1,000 data points daily,
            using AI to filter out what truly matters. The result? A concise
            email you can read in just 3 minutes.
          </p>
          <Link
            href="/#newsletter" // Link to the newsletter section
            className="btn-primary text-xl px-10 py-4 transform hover:scale-105"
          >
            Start Your Free Subscription
          </Link>
        </div>
      </section>
    </div>
  );
}
