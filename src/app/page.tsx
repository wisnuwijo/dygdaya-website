'use client';

import React, { useState } from 'react';
import { Mail, ArrowUpRight, Code, Cpu, Compass, Copy, Check } from 'lucide-react';

export default function HomePage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hi@dygdaya.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article
      className="flex flex-col gap-16 sm:gap-24"
      itemScope
      itemType="https://schema.org/ResearchOrganization"
    >
      {/* 1. Hero / Core Identity */}
      <section
        id="about"
        className="flex flex-col gap-6 pt-4 sm:pt-10 scroll-mt-20"
        aria-labelledby="hero-title"
      >
        {/* Masthead Tag with Semantic Microdata */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#888888]">
          <span className="inline-block w-2 h-2 rounded-full bg-[#0070f3]" aria-hidden="true" />
          <span className="text-[#ededed] font-semibold" itemProp="name">
            DYGDAYA TECHNOLOGY
          </span>
          <span className="text-[#444444]">/</span>
          <span className="text-[#888888]">RESEARCH & APPLIED AI</span>
        </div>

        {/* Hero Headline & Content */}
        <div className="flex flex-col gap-5 max-w-3xl">
          <h1
            id="hero-title"
            className="vbg-display font-semibold tracking-tight text-[#ededed]"
          >
            Research in software engineering and real-world AI implementation.
          </h1>

          <p
            className="text-base sm:text-lg text-[#a1a1a1] leading-relaxed"
            itemProp="description"
          >
            Dygdaya Technology is an independent research company dedicated to software engineering and the practical implementation of artificial intelligence in real-life domains.
          </p>

          <p className="text-sm text-[#777777] leading-relaxed">
            We investigate how modern software architecture and emerging AI capabilities can be effectively combined to solve concrete, practical problems with reliability and clarity.
          </p>
        </div>
      </section>

      {/* 2. Research & Focus Areas */}
      <section
        id="focus"
        className="flex flex-col gap-6 pt-10 border-t border-[#1c1c1c] scroll-mt-20"
        aria-labelledby="focus-title"
      >
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-[#0070f3] uppercase tracking-wider font-semibold">
            Scope of Research
          </span>
          <h2 id="focus-title" className="vbg-heading-20 font-bold text-[#ededed]">
            Core Focus Areas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Software Systems */}
          <div className="p-5 sm:p-6 bg-[#0a0a0a] border border-[#1c1c1c] rounded-[6px] flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#0070f3]">
              <Code className="w-4 h-4" aria-hidden="true" />
              <span>SOFTWARE ENGINEERING</span>
            </div>
            <h3 className="text-sm font-semibold text-[#ededed]">
              Software Systems & Architecture
            </h3>
            <p className="text-xs text-[#888888] leading-relaxed">
              Studying resilient system design, modern engineering patterns, code maintainability, and dependable software execution in production environments.
            </p>
          </div>

          {/* Card 2: Applied AI */}
          <div className="p-5 sm:p-6 bg-[#0a0a0a] border border-[#1c1c1c] rounded-[6px] flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#0070f3]">
              <Cpu className="w-4 h-4" aria-hidden="true" />
              <span>APPLIED AI</span>
            </div>
            <h3 className="text-sm font-semibold text-[#ededed]">
              Real-World AI Implementation
            </h3>
            <p className="text-xs text-[#888888] leading-relaxed">
              Exploring the practical deployment of artificial intelligence to address everyday challenges, automate complex workflows, and enhance human capabilities.
            </p>
          </div>

          {/* Card 3: Applied Exploration */}
          <div className="p-5 sm:p-6 bg-[#0a0a0a] border border-[#1c1c1c] rounded-[6px] flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#0070f3]">
              <Compass className="w-4 h-4" aria-hidden="true" />
              <span>PRACTICAL RESEARCH</span>
            </div>
            <h3 className="text-sm font-semibold text-[#ededed]">
              Applied Exploration
            </h3>
            <p className="text-xs text-[#888888] leading-relaxed">
              Bridging the gap between theoretical AI models and real-life software systems, focusing on empirical usability, safety, and performance.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Principles & Approach */}
      <section
        className="p-6 sm:p-8 bg-[#0a0a0a] border border-[#1c1c1c] rounded-[6px] flex flex-col gap-4"
        aria-labelledby="approach-title"
      >
        <span className="font-mono text-xs text-[#0070f3] uppercase tracking-wider font-semibold">
          Approach
        </span>
        <h2 id="approach-title" className="text-base sm:text-lg font-semibold text-[#ededed]">
          Pragmatic, Evidence-Led Inquiry
        </h2>
        <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
          Rather than chasing ungrounded trends, we prioritize foundational software engineering discipline, verifiable outcomes, and practical utility. We believe the true value of artificial intelligence lies in how effectively and safely it operates in real-world scenarios.
        </p>
      </section>

      {/* 4. Contact & Inquiries */}
      <section
        id="contact"
        className="flex flex-col gap-6 pt-10 border-t border-[#1c1c1c] scroll-mt-20"
        aria-labelledby="contact-title"
      >
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-[#0070f3] uppercase tracking-wider font-semibold">
            Get in Touch
          </span>
          <h2 id="contact-title" className="vbg-heading-20 font-bold text-[#ededed]">
            Connect with Dygdaya Technology
          </h2>
          <p className="text-xs text-[#888888] max-w-xl">
            For research discussions, questions, or collaboration inquiries regarding software engineering and applied AI implementations, visitors can reach out directly via email.
          </p>
        </div>

        {/* Email Contact Card with Microdata */}
        <div className="p-6 sm:p-8 bg-[#0a0a0a] border border-[#222222] rounded-[8px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-[6px] bg-[#111111] border border-[#262626] flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-[#0070f3]" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono text-[#666666] uppercase tracking-wider">
                Primary Contact Email
              </span>
              <a
                href="mailto:hi@dygdaya.com"
                itemProp="email"
                className="text-lg sm:text-xl font-mono font-bold text-[#ededed] hover:text-[#0070f3] transition-colors"
              >
                hi@dygdaya.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href="mailto:hi@dygdaya.com"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-mono font-semibold text-black bg-[#ededed] hover:bg-white rounded-[4px] transition-colors"
            >
              <span>Send Email</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center p-2.5 text-xs font-mono text-[#888888] hover:text-[#ededed] bg-[#141414] hover:bg-[#1f1f1f] border border-[#2a2a2a] rounded-[4px] transition-colors"
              aria-label="Copy email address to clipboard"
              title="Copy email to clipboard"
            >
              {copied ? (
                <Check className="w-4 h-4 text-[#0070f3]" aria-hidden="true" />
              ) : (
                <Copy className="w-4 h-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </section>
    </article>
  );
}
