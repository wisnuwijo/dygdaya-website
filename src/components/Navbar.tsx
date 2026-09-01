'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Menu, X, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="vbg-header sticky top-0 z-50 w-full border-b border-[#1c1c1c] bg-[#000000]/90 backdrop-blur-md">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand Identity with slightly bigger Navbar Logo */}
        <div className="flex items-center gap-3">
          <Logo size="md" showText={true} />
        </div>

        {/* Center/Right: Simple Section Links */}
        <nav className="hidden sm:flex items-center gap-6 text-xs font-mono text-[#888888]" aria-label="Main Navigation">
          <a href="#about" className="hover:text-[#ededed] transition-colors">
            About
          </a>
          <a href="#focus" className="hover:text-[#ededed] transition-colors">
            Focus Areas
          </a>
          <a href="#contact" className="hover:text-[#ededed] transition-colors">
            Contact
          </a>
          <a
            href="mailto:hi@dygdaya.com"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono text-[#ededed] bg-[#111111] hover:bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#444444] rounded-[4px] transition-all"
          >
            <Mail className="w-3.5 h-3.5 text-[#0070f3]" />
            <span>hi@dygdaya.com</span>
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="flex sm:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#888888] hover:text-[#ededed] bg-[#111111] border border-[#222222] rounded-[4px]"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#1c1c1c] bg-[#000000] px-4 py-4 flex flex-col gap-3 font-mono text-xs">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#888888] hover:text-[#ededed] py-1"
          >
            About
          </a>
          <a
            href="#focus"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#888888] hover:text-[#ededed] py-1"
          >
            Focus Areas
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#888888] hover:text-[#ededed] py-1"
          >
            Contact
          </a>
          <a
            href="mailto:hi@dygdaya.com"
            className="inline-flex items-center gap-2 py-2 text-[#0070f3] font-semibold"
          >
            <Mail className="w-4 h-4" />
            <span>hi@dygdaya.com</span>
          </a>
        </div>
      )}
    </header>
  );
};
