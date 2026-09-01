import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Mail, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Dygdaya Technology. Explaining our minimal data collection, privacy practices, and commitment to user data protection.',
};

export default function PrivacyPage() {
  const lastUpdated = 'September 2, 2026';

  return (
    <div className="flex flex-col gap-10 max-w-3xl">
      {/* Back Link & Header */}
      <div className="flex flex-col gap-4 pb-6 border-b border-[#1c1c1c]">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#888888] hover:text-[#ededed] transition-colors w-fit"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Home</span>
        </Link>

        <div className="flex items-center gap-2 font-mono text-xs text-[#0070f3] mt-2">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>LEGAL & PRIVACY // DYGDAYA TECHNOLOGY</span>
        </div>

        <h1 className="vbg-title font-bold text-[#ededed]">
          Privacy Policy
        </h1>

        <p className="text-xs font-mono text-[#666666]">
          Last Updated: {lastUpdated}
        </p>
      </div>

      {/* Main Privacy Body */}
      <div className="flex flex-col gap-8 text-xs sm:text-sm text-[#999999] leading-relaxed">
        {/* Section 1 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-base font-semibold text-[#ededed]">
            1. Overview & Commitment
          </h2>
          <p>
            Dygdaya Technology (&ldquo;Dygdaya&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is an independent research company focusing on software engineering and practical artificial intelligence implementation. We are committed to protecting your privacy and treating personal data with transparency, restraint, and care.
          </p>
          <p>
            This Privacy Policy explains what information we collect when you visit our website (dygdaya.com / dygdaya.ai) or communicate with us, how that information is utilized, and your rights regarding your data.
          </p>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-base font-semibold text-[#ededed]">
            2. Information We Collect
          </h2>
          <p>
            We adhere to strict data minimization principles and collect only the data necessary to communicate and maintain service reliability:
          </p>
          <ul className="flex flex-col gap-2 pl-4 list-disc text-[#888888]">
            <li>
              <strong className="text-[#ededed]">Direct Communications:</strong> When you contact us directly via email (such as reaching out to <code className="font-mono text-[11px] text-[#0070f3] bg-[#111111] px-1 py-0.5 rounded border border-[#222222]">hi@dygdaya.com</code>), we collect your email address, your name (if provided), and any information contained within your message.
            </li>
            <li>
              <strong className="text-[#ededed]">Server Access Logs:</strong> Like standard web infrastructure, our hosting servers automatically record basic technical access logs, including your IP address, browser user-agent, operating system, requested resource, and the date/time of access. This data is used solely for system health, abuse prevention, and network security.
            </li>
            <li>
              <strong className="text-[#ededed]">No Tracking Cookies:</strong> We do not use third-party analytics trackers, advertising pixels, cross-site trackers, or commercial profiling cookies on this website.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-base font-semibold text-[#ededed]">
            3. How We Use Information
          </h2>
          <p>Information collected is strictly used for the following purposes:</p>
          <ul className="flex flex-col gap-2 pl-4 list-disc text-[#888888]">
            <li>Responding to your inquiries, research discussions, or collaboration proposals.</li>
            <li>Diagnosing technical server issues and maintaining network integrity.</li>
            <li>Ensuring compliance with applicable legal and regulatory standards.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-base font-semibold text-[#ededed]">
            4. Information Sharing & Disclosure
          </h2>
          <p>
            We do not sell, rent, monetize, or trade your personal information to third parties or data brokers. Information is disclosed only under the following limited conditions:
          </p>
          <ul className="flex flex-col gap-2 pl-4 list-disc text-[#888888]">
            <li>
              <strong className="text-[#ededed]">Infrastructure Providers:</strong> We rely on reputable infrastructure and email hosting service providers who process data strictly on our behalf under confidentiality and data protection agreements.
            </li>
            <li>
              <strong className="text-[#ededed]">Legal Compliance:</strong> We may disclose information if required to do so by applicable law, regulation, subpoena, or official governmental request.
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-base font-semibold text-[#ededed]">
            5. Data Security & Retention
          </h2>
          <p>
            We implement appropriate administrative and technical safeguards to protect information against unauthorized access, alteration, or disclosure. Direct communications are retained only as long as necessary to address your inquiry or meet legal and operational record-keeping obligations.
          </p>
        </section>

        {/* Section 6 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-base font-semibold text-[#ededed]">
            6. Your Privacy Rights
          </h2>
          <p>
            Depending on your jurisdiction, you have the right to request access to the personal data we hold about you, request corrections to inaccurate information, or request the deletion of your communication records.
          </p>
          <p>
            To exercise any of these rights, please contact us at <a href="mailto:hi@dygdaya.com" className="text-[#0070f3] hover:underline font-mono">hi@dygdaya.com</a>.
          </p>
        </section>

        {/* Section 7 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-base font-semibold text-[#ededed]">
            7. Changes to This Policy
          </h2>
          <p>
            We may periodically update this Privacy Policy to reflect changes in our research operations or relevant legal standards. The &ldquo;Last Updated&rdquo; date at the top of this document indicates when changes were made.
          </p>
        </section>

        {/* Section 8: Contact Card */}
        <section className="p-6 bg-[#0a0a0a] border border-[#222222] rounded-[6px] flex flex-col gap-3 mt-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#0070f3]">
            <Mail className="w-4 h-4" />
            <span>CONTACT REGARDING PRIVACY</span>
          </div>
          <h3 className="text-sm font-semibold text-[#ededed]">
            Questions or Requests?
          </h3>
          <p className="text-xs text-[#888888] leading-relaxed">
            If you have questions about this Privacy Policy or wish to make a data inquiry, please reach out directly:
          </p>
          <div className="text-xs font-mono text-[#ededed] mt-1">
            Email:{' '}
            <a href="mailto:hi@dygdaya.com" className="text-[#0070f3] hover:underline">
              hi@dygdaya.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
