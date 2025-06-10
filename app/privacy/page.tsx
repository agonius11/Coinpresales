import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Coin Trends News",
  description:
    "Learn how Coin Trends News collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-sm text-gray-500 mb-6">
              Last updated: June 10, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p>
                Welcome to Coin Trends News (we, our, or us). We are committed
                to protecting your personal information and your right to
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website and subscribe to our newsletter.
              </p>
              <p>
                By accessing or using our services, you agree to this Privacy
                Policy. If you do not agree with the terms of this policy,
                please do not access our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Information You Provide
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Email address (when you subscribe to our newsletter)</li>
                <li>Name (optional, if provided)</li>
                <li>
                  Any information you voluntarily provide when contacting us
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Information Automatically Collected
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website</li>
                <li>Date and time of visits</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Cookies and Tracking
              </h3>
              <p>
                We use cookies and similar tracking technologies to enhance your
                experience. These include:
              </p>
              <ul className="list-disc pl-6">
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand usage patterns</li>
                <li>Performance cookies to improve website speed</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p>We use the collected information for:</p>
              <ul className="list-disc pl-6">
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

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Information Sharing
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information only in the
                following circumstances:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  <strong>Service Providers:</strong> With trusted third-party
                  service providers who assist in operating our website and
                  delivering our services (e.g., email service providers)
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or
                  to respond to legal process
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a
                  merger, acquisition, or sale of assets
                </li>
                <li>
                  <strong>Consent:</strong> With your explicit consent
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational security
                measures to protect your personal information, including:
              </p>
              <ul className="list-disc pl-6">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure data storage with access controls</li>
                <li>Regular security assessments</li>
                <li>
                  Limited access to personal information on a need-to-know basis
                </li>
              </ul>
              <p>
                However, no method of electronic storage is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Your Rights and Choices
              </h2>
              <p>
                You have the following rights regarding your personal
                information:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  <strong>Access:</strong> Request a copy of your personal
                  information
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information
                </li>
                <li>
                  <strong>Opt-out:</strong> Unsubscribe from our newsletter at
                  any time
                </li>
                <li>
                  <strong>Cookies:</strong> Disable cookies through your browser
                  settings
                </li>
              </ul>
              <p>
                To exercise these rights, please contact us at
                privacy@cointrendsnews.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Childrens Privacy
              </h2>
              <p>
                Our services are not intended for individuals under the age of
                18. We do not knowingly collect personal information from
                children. If we learn that we have collected information from a
                child under 18, we will delete that information promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. International Data Transfers
              </h2>
              <p>
                Your information may be transferred to and processed in
                countries other than your country of residence. These countries
                may have different data protection laws. By using our services,
                you consent to such transfers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices of these external
                sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the Last updated date. For significant changes, we
                may provide additional notice via email.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Contact Information
              </h2>
              <p>
                If you have questions or concerns about this Privacy Policy,
                please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="font-semibold">Coin Trends News</p>
                <p>Email: privacy@cointrendsnews.com</p>
                <p>Address: 46 Island Rd Phoenix, New York(NY), 13135</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                12. California Privacy Rights
              </h2>
              <p>
                California residents have additional rights under the California
                Consumer Privacy Act (CCPA), including the right to know what
                personal information is collected, used, shared, or sold.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                13. European Privacy Rights
              </h2>
              <p>
                If you are in the European Economic Area (EEA), you have
                additional rights under the General Data Protection Regulation
                (GDPR), including the right to data portability and the right to
                object to processing.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
