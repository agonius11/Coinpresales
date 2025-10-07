import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Coin Trends News",
  description:
    "Learn how Coin Trends News collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-12 md:py-20 relative light-gradient-bg">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container-max-w max-w-4xl relative z-10">
        <div className="light-card p-8 md:p-12 rounded-3xl shadow-2xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 text-center">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-500 mb-12 text-center">
              Last updated: June 10, 2024
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Coin Trends News (we, our, or us). We are committed
                to protecting your personal information and your right to
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website and subscribe to our newsletter.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using our services, you agree to this Privacy
                Policy. If you do not agree with the terms of this policy,
                please do not access our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-teal-600 mb-4">
                Information You Provide
              </h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Email address (when you subscribe to our newsletter)</li>
                <li>Name (optional, if provided)</li>
                <li>
                  Any information you voluntarily provide when contacting us
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-teal-600 mb-4">
                Information Automatically Collected
              </h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website</li>
                <li>Date and time of visits</li>
              </ul>

              <h3 className="text-xl font-semibold text-teal-600 mb-4">
                Cookies and Tracking
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your
                experience. These include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand usage patterns</li>
                <li>Performance cookies to improve website speed</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the collected information for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Sending daily cryptocurrency news and insights via email
                </li>
                <li>Improving our content and services</li>
                <li>Analyzing website traffic and user behavior</li>
                <li>Responding to your inquiries and support requests</li>
                <li>Complying with legal obligations</li>
                <li>Protecting against fraudulent or illegal activity</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                4. Information Sharing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information only in the
                following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-3">
                <li>
                  <strong className="text-teal-600">Service Providers:</strong>{" "}
                  With trusted third-party service providers who assist in
                  operating our website and delivering our services (e.g., email
                  service providers)
                </li>
                <li>
                  <strong className="text-teal-600">Legal Requirements:</strong>{" "}
                  When required by law or to respond to legal process
                </li>
                <li>
                  <strong className="text-teal-600">Business Transfers:</strong>{" "}
                  In connection with a merger, acquisition, or sale of assets
                </li>
                <li>
                  <strong className="text-teal-600">Consent:</strong> With your
                  explicit consent
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                5. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions or concerns about this Privacy Policy,
                please contact us at:
              </p>
              <div className="glass p-6 rounded-lg border border-teal-200 glow-teal">
                <p className="font-semibold text-gray-900 text-lg mb-2">
                  CryptoPresales
                </p>
                <p className="text-gray-700">
                  Email: privacy@cryptopresales.net
                </p>
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
