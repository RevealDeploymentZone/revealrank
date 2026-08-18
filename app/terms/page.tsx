import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Reveal Rank",
  description: "Read Reveal Rank's terms of service governing the use of our website and digital marketing services.",
  alternates: { canonical: "https://www.revealrank.com/terms" },
};

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[800px] mx-auto px-4 lg:px-8 py-20">
        <p className="text-[#4361ee] text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
        <h1 className="text-4xl font-black text-gray-900 mb-3">Terms of Service</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: January 1, 2025</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using the website at <strong>revealrank.com</strong> or engaging Reveal Rank's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Services</h2>
            <p>Reveal Rank provides digital marketing services including but not limited to search engine optimization (SEO), local SEO, pay-per-click advertising (PPC), social media marketing, content marketing, and web design and development.</p>
            <p className="mt-3">Specific services, deliverables, timelines, and pricing are defined in individual client agreements or proposals. These Terms of Service apply in addition to any such agreements.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Use of Our Website</h2>
            <p>You agree to use our website only for lawful purposes. You must not:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Use the website in any way that violates applicable local, national, or international laws or regulations</li>
              <li>Transmit unsolicited commercial communications (spam)</li>
              <li>Attempt to gain unauthorized access to any part of our website or systems</li>
              <li>Reproduce, duplicate, or resell any part of our website without express written permission</li>
              <li>Use automated tools to scrape or extract data from our website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Intellectual Property</h2>
            <p>All content on this website — including text, graphics, logos, images, and software — is the property of Reveal Rank and is protected by applicable intellectual property laws.</p>
            <p className="mt-3">You may not reproduce, distribute, modify, or create derivative works of our content without our prior written consent. You may share links to our website for non-commercial purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Client Responsibilities</h2>
            <p>Clients engaging Reveal Rank's services agree to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Provide accurate and complete information necessary to perform the agreed services</li>
              <li>Grant necessary access to platforms, accounts, or assets required for service delivery</li>
              <li>Review and approve deliverables in a timely manner</li>
              <li>Make payments in accordance with the agreed payment schedule</li>
              <li>Not engage in any activities that would violate search engine guidelines or applicable laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Results Disclaimer</h2>
            <p>Digital marketing results — including search engine rankings, traffic, and conversions — depend on many factors outside our control, including search engine algorithm changes, market competition, and client website quality.</p>
            <p className="mt-3">While we strive to deliver measurable results, Reveal Rank does not guarantee specific rankings, traffic levels, or revenue outcomes. Past results from our portfolio do not guarantee future performance.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Payment Terms</h2>
            <p>Payment terms are specified in individual client agreements. General terms include:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Invoices are due within the timeframe specified in the client agreement</li>
              <li>Late payments may incur additional fees as specified in the agreement</li>
              <li>Failure to pay may result in suspension or termination of services</li>
              <li>Refunds are subject to the terms outlined in the individual client agreement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Reveal Rank shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services, including but not limited to loss of revenue, data, or business opportunities.</p>
            <p className="mt-3">Our total liability to you for any claim arising out of or related to our services shall not exceed the amount paid by you to Reveal Rank in the three months preceding the claim.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Confidentiality</h2>
            <p>Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the business relationship. This includes business strategies, client data, pricing, and any materials marked as confidential.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Termination</h2>
            <p>Either party may terminate a service agreement in accordance with the terms specified in the client agreement. Upon termination, you will be invoiced for all work completed up to the termination date. Reveal Rank reserves the right to terminate service without notice in cases of payment default or violation of these terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Governing Law</h2>
            <p>These Terms of Service shall be governed by and construed in accordance with the laws of the United States. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in the United States.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">12. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms of Service at any time. Updated terms will be posted on this page with a revised date. Continued use of our website or services after changes are posted constitutes acceptance of the updated terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">13. Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
            <div className="mt-3 bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-gray-900">Reveal Rank</p>
              <p>Email: <a href="mailto:outreach@revealrank.com" className="text-[#4361ee] hover:underline">outreach@revealrank.com</a></p>
              <p>Website: <Link href="/" className="text-[#4361ee] hover:underline">revealrank.com</Link></p>
            </div>
          </section>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-400">Also read our <Link href="/privacy-policy" className="text-[#4361ee] hover:underline">Privacy Policy</Link>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
