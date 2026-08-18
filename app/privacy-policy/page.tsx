import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Reveal Rank",
  description: "Read Reveal Rank's privacy policy to understand how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://www.revealrank.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[800px] mx-auto px-4 lg:px-8 py-20">
        <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
        <h1 className="text-4xl font-black text-gray-900 mb-3">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: January 1, 2025</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p>Reveal Rank ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>revealrank.com</strong> or engage with our digital marketing services.</p>
            <p className="mt-3">By using our website or services, you agree to the collection and use of information in accordance with this policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
            <h3 className="text-base font-semibold text-gray-800 mb-2">Information You Provide Directly</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name, email address, phone number, and business details submitted through our contact form</li>
              <li>Website URL and information about your business goals</li>
              <li>Any communications you send us via email or other channels</li>
            </ul>
            <h3 className="text-base font-semibold text-gray-800 mb-2 mt-4">Information Collected Automatically</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>IP address, browser type, device type, and operating system</li>
              <li>Pages visited, time spent on pages, and referring URLs</li>
              <li>Cookies and similar tracking technologies (see Section 5)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Send you proposals, service updates, and relevant marketing communications</li>
              <li>Improve our website, content, and service offerings</li>
              <li>Analyze website traffic and user behavior to enhance user experience</li>
              <li>Comply with legal obligations and enforce our terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Sharing Your Information</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Service providers</strong> who assist us in operating our website and delivering services (e.g., email platforms, analytics tools), under strict confidentiality agreements</li>
              <li><strong>Legal authorities</strong> when required by law or to protect our legal rights</li>
              <li><strong>Business successors</strong> in the event of a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Cookies</h2>
            <p>We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device. We use:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Essential cookies</strong> — necessary for the website to function properly</li>
              <li><strong>Analytics cookies</strong> — to understand how visitors interact with our website (e.g., Google Analytics)</li>
              <li><strong>Marketing cookies</strong> — to deliver relevant advertisements and track campaign effectiveness</li>
            </ul>
            <p className="mt-3">You can control cookie settings through your browser. Note that disabling certain cookies may affect website functionality.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Data Retention</h2>
            <p>We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Contact form submissions are retained for up to 3 years unless you request deletion.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Your Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Access</strong> — request a copy of the personal data we hold about you</li>
              <li><strong>Correction</strong> — request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion</strong> — request deletion of your personal data</li>
              <li><strong>Opt-out</strong> — unsubscribe from marketing communications at any time</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:outreach@revealrank.com" className="text-[#4361ee] hover:underline">outreach@revealrank.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Children's Privacy</h2>
            <p>Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date. Your continued use of our website after changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <div className="mt-3 bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-gray-900">Reveal Rank</p>
              <p>Email: <a href="mailto:outreach@revealrank.com" className="text-[#4361ee] hover:underline">outreach@revealrank.com</a></p>
              <p>Website: <Link href="/" className="text-[#4361ee] hover:underline">revealrank.com</Link></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
