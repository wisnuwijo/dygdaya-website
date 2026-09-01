'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [topic, setTopic] = useState('Academic Collaboration');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  return (
    <div className="bg-[#0a0a0a] border border-[#1c1c1c] rounded-[6px] p-6 sm:p-8">
      {status === 'success' ? (
        <div className="flex flex-col items-center justify-center text-center py-10 gap-3">
          <CheckCircle2 className="w-10 h-10 text-[#0070f3]" />
          <h3 className="text-lg font-semibold text-[#ededed]">Inquiry Dispatched</h3>
          <p className="text-xs text-[#888888] max-w-md">
            Thank you, {name}. Your inquiry regarding <span className="text-[#ededed] font-mono">{topic}</span> has been securely transmitted to the Dygdaya Systems Architecture & Research Board.
          </p>
          <button
            type="button"
            onClick={() => {
              setStatus('idle');
              setMessage('');
            }}
            className="mt-4 px-4 py-1.5 text-xs font-mono text-[#ededed] bg-[#161616] hover:bg-[#222222] border border-[#2e2e2e] rounded-[4px] transition-colors"
          >
            Submit Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex items-center gap-2 pb-3 border-b border-[#1c1c1c]">
            <Mail className="w-4 h-4 text-[#0070f3]" />
            <h3 className="text-sm font-mono uppercase tracking-wider font-semibold text-[#ededed]">
              Research Engagement & Access Portal
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="vbg-field">
              <label htmlFor="contact-name" className="vbg-label">
                Full Name / Principal Investigator *
              </label>
              <div className="vbg-unit-field">
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Dr. Jane Doe"
                />
              </div>
            </div>

            <div className="vbg-field">
              <label htmlFor="contact-email" className="vbg-label">
                Institutional / Academic Email *
              </label>
              <div className="vbg-unit-field">
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@university.edu"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="vbg-field">
              <label htmlFor="contact-org" className="vbg-label">
                Institution / University / Company
              </label>
              <div className="vbg-unit-field">
                <input
                  id="contact-org"
                  type="text"
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  placeholder="e.g. MIT CSAIL / Distributed Systems Lab"
                />
              </div>
            </div>

            <div className="vbg-field">
              <label htmlFor="contact-topic" className="vbg-label">
                Engagement Domain
              </label>
              <div className="vbg-unit-field">
                <select
                  id="contact-topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                >
                  <option value="Academic Collaboration">Academic Collaboration & Research Grants</option>
                  <option value="Enterprise Compute Access">Enterprise Compute & Compiler Licensing</option>
                  <option value="Research Fellowship">Research Fellowships & PhD Internships</option>
                  <option value="Technical Question">Technical Benchmark & Reproducibility</option>
                </select>
              </div>
            </div>
          </div>

          <div className="vbg-field">
            <label htmlFor="contact-message" className="vbg-label">
              Research Objective / Proposal Summary *
            </label>
            <div className="vbg-unit-field">
              <textarea
                id="contact-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your research question, hardware constraints, or collaboration scope..."
                className="w-full bg-transparent border-none p-3 text-xs font-mono text-[#ededed] outline-none resize-y"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-[10px] font-mono text-[#555555]">
              * Encrypted end-to-end with Dygdaya Research PGP Key
            </span>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="vbg-button vbg-button-primary"
            >
              {status === 'submitting' ? (
                <span>Transmitting...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
