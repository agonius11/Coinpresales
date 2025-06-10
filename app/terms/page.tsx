import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Coin Trends News",
  description:
    "Terms and conditions for using Coin Trends News services and subscribing to our cryptocurrency newsletter.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-sm text-gray-500 mb-6">
              Effective Date: June 20, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing or using Coin Trends News (Service), operated by
                Coin Trends News (we, us, or our), you agree to be bound by
                these Terms of Service (Terms). If you disagree with any part of
                these terms, you do not have permission to access the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Description of Service
              </h2>
              <p>
                Coin Trends News provides cryptocurrency news, analysis, and
                insights through:
              </p>
              <ul className="list-disc pl-6">
                <li>A website featuring crypto-related content</li>
                <li>Daily email newsletters with market updates</li>
                <li>Educational content about cryptocurrency and blockchain</li>
                <li>Market analysis and commentary</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. User Accounts and Registration
              </h2>
              <p>
                To access certain features of our Service, you may need to
                subscribe to our newsletter by providing your email address. You
                agree to:
              </p>
              <ul className="list-disc pl-6">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Promptly update any changes to your information</li>
                <li>
                  Accept responsibility for all activities under your account
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Acceptable Use Policy
              </h2>
              <p>You agree NOT to use the Service to:</p>
              <ul className="list-disc pl-6">
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

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Content and Intellectual Property
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Our Content
              </h3>
              <p>
                All content on Coin Trends News, including text, graphics,
                logos, images, and software, is the property of Coin Trends News
                or its content suppliers and is protected by intellectual
                property laws. You may not:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Copy, modify, or distribute our content without permission
                </li>
                <li>Use our content for commercial purposes</li>
                <li>Create derivative works based on our content</li>
                <li>Remove any proprietary notices from our content</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                User Content
              </h3>
              <p>
                By submitting content to our Service (such as comments or
                feedback), you grant us a non-exclusive, worldwide, royalty-free
                license to use, reproduce, and distribute such content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Investment Disclaimer
              </h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="font-semibold text-yellow-800 mb-2">
                  IMPORTANT NOTICE:
                </p>
                <p className="text-yellow-700">
                  Coin Trends News provides information and analysis about
                  cryptocurrency markets for educational and informational
                  purposes only. Nothing on this website constitutes:
                </p>
                <ul className="list-disc pl-6 mt-2 text-yellow-700">
                  <li>Investment advice</li>
                  <li>Financial advice</li>
                  <li>Trading recommendations</li>
                  <li>Solicitation to buy or sell any cryptocurrencies</li>
                </ul>
              </div>
              <p>
                Cryptocurrency investments carry high risk. Past performance
                does not guarantee future results. Always conduct your own
                research and consult with qualified financial advisors before
                making investment decisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Limitation of Liability
              </h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, COIN TRENDS NEWS SHALL
                NOT BE LIABLE FOR:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Any indirect, incidental, special, or consequential damages
                </li>
                <li>Loss of profits, revenue, or data</li>
                <li>Trading losses based on our content</li>
                <li>Errors or omissions in our content</li>
                <li>Unauthorized access to your information</li>
                <li>Service interruptions or downtime</li>
              </ul>
              <p className="mt-4">
                IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID
                US IN THE PAST TWELVE MONTHS, OR $100, WHICHEVER IS LESS.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless Coin Trends News, its
                affiliates, and their respective officers, directors, employees,
                and agents from any claims, damages, losses, or expenses arising
                from:
              </p>
              <ul className="list-disc pl-6">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Any content you submit to the Service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Privacy
              </h2>
              <p>
                Your use of our Service is also governed by our Privacy Policy.
                Please review our Privacy Policy, which explains how we collect,
                use, and protect your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Third-Party Links and Services
              </h2>
              <p>
                Our Service may contain links to third-party websites or
                services. We are not responsible for:
              </p>
              <ul className="list-disc pl-6">
                <li>The content or practices of third-party sites</li>
                <li>Any transactions you conduct with third parties</li>
                <li>Any damages resulting from third-party services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Modifications to Service
              </h2>
              <p>We reserve the right to:</p>
              <ul className="list-disc pl-6">
                <li>Modify or discontinue the Service at any time</li>
                <li>Change subscription terms or pricing</li>
                <li>Limit access to certain features</li>
                <li>Update content without notice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                12. Termination
              </h2>
              <p>
                We may terminate or suspend your access to the Service
                immediately, without prior notice, for any reason, including:
              </p>
              <ul className="list-disc pl-6">
                <li>Breach of these Terms</li>
                <li>Fraudulent or illegal activity</li>
                <li>Request by law enforcement</li>
                <li>Extended periods of inactivity</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                13. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of New York, without regard to its conflict of law
                provisions. Any disputes arising from these Terms shall be
                resolved in the courts of New York.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                14. Severability
              </h2>
              <p>
                If any provision of these Terms is found to be unenforceable or
                invalid, that provision will be limited or eliminated to the
                minimum extent necessary, and the remaining provisions will
                remain in full effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                15. Entire Agreement
              </h2>
              <p>
                These Terms constitute the entire agreement between you and Coin
                Trends News regarding the use of the Service, superseding any
                prior agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                16. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. We will
                notify users of any material changes by:
              </p>
              <ul className="list-disc pl-6">
                <li>Posting the updated Terms on our website</li>
                <li>Updating the Effective Date at the top</li>
                <li>Sending an email notification for significant changes</li>
              </ul>
              <p className="mt-4">
                Your continued use of the Service after changes constitutes
                acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                17. Contact Information
              </h2>
              <p>
                For questions about these Terms of Service, please contact us
                at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="font-semibold">Coin Trends News</p>
                <p>Email: legal@cointrendsnews.com</p>
                <p>Address: 46 Island Rd Phoenix, New York(NY), 13135</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
