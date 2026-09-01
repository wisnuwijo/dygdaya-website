import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="vbg-footer border-t border-[#1c1c1c] bg-[#000000] text-[#777777] text-xs py-12 mt-20">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Logo size="md" asLink={false} />
        </div>
        <div className="flex flex-col sm:items-end gap-1.5 text-center sm:text-right font-mono text-[11px] text-[#666666]">
          <div className="flex items-center gap-3 justify-center sm:justify-end text-[#888888]">
            <Link href="/privacy" className="hover:text-[#ededed] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <a href="mailto:hi@dygdaya.com" className="hover:text-[#ededed] transition-colors">
              hi@dygdaya.com
            </a>
          </div>
          <span>© {new Date().getFullYear()} Dygdaya Technology. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};
