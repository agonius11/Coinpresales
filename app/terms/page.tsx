import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | CoinPresales",
  description:
    "Terms and conditions for using CoinPresales services and subscribing to our cryptocurrency newsletter.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen py-12 md:py-20 relative light-gradient-bg">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container-max-w max-w-4xl relative z-10">
        <div className="light-card p-8 md:p-12 rounded-3xl shadow-2xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 text-center">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-500 mb-12 text-center">
              Effective Date: June 20, 2024
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                1. Agreement to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using CoinPresales (Service), operated by
                CoinPresales (we, us, or our), you agree to be bound by
                these Terms of Service (Terms). If you disagree with any part of
                these terms, you do not have permission to access the Service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                2. Description of Service
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CoinPresales provides cryptocurrency news, analysis, and
                insights through:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>A website featuring crypto-related content</li>
                <li>Daily email newsletters with market updates</li>
                <li>Educational content about cryptocurrency and blockchain</li>
                <li>Market analysis and commentary</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                3. Investment Disclaimer
              </h2>
              <div className="glass border border-yellow-400 p-6 rounded-lg mb-6 bg-yellow-50/50">
                <p className="font-bold text-lg text-yellow-700 mb-3">
                  IMPORTANT NOTICE:
                </p>
                <p className="text-gray-700 mb-4">
                  CoinPresales provides information and analysis about
                  cryptocurrency markets for educational and informational
                  purposes only. Nothing on this website constitutes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Investment advice</li>
                  <li>Financial advice</li>
                  <li>Trading recommendations</li>
                  <li>Solicitation to buy or sell any cryptocurrencies</li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Cryptocurrency investments carry high risk. Past performance
                does not guarantee future results. Always conduct your own
                research and consult with qualified financial advisors before
                making investment decisions.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                4. Acceptable Use Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree NOT to use the Service to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Violate any laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Transmit malware, viruses, or harmful code</li>
                <li>Engage in unauthorized data mining or scraping</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use the Service for illegal financial activities</li>
                <li>Manipulate or interfere with the Services functionality</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                5. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, COIN TRENDS NEWS SHALL
                NOT BE LIABLE FOR:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Any indirect, incidental, special, or consequential damages
                </li>
                <li>Loss of profits, revenue, or data</li>
                <li>Trading losses based on our content</li>
                <li>Errors or omissions in our content</li>
                <li>Unauthorized access to your information</li>
                <li>Service interruptions or downtime</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID
                US IN THE PAST TWELVE MONTHS, OR $100, WHICHEVER IS LESS.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                6. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us
                at:
              </p>
              <div className="glass p-6 rounded-lg border border-teal-200 glow-teal">
                <p className="font-semibold text-gray-900 text-lg mb-2">
                  CoinPresales
                </p>
                <p className="text-gray-700">Email: legal@coinpresales.net</p>
                <p className="text-gray-700">
                  Address: 46 Island Rd Phoenix, New York(NY), 13135
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
