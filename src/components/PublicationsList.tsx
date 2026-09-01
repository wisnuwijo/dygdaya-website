'use client';

import React, { useState } from 'react';
import { publications } from '@/data/publications';
import { BookOpen, Copy, Check, FileText, ExternalLink, Search } from 'lucide-react';

export const PublicationsList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedBibtexId, setCopiedBibtexId] = useState<string | null>(null);
  const [expandedBibtexId, setExpandedBibtexId] = useState<string | null>(null);

  const categories = ['All', 'Neural Compilers', 'Reasoning & Verification', 'Quantization', 'Distributed Systems'];

  const filteredPubs = publications.filter((pub) => {
    const matchesCategory = selectedCategory === 'All' || pub.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase())) ||
      pub.abstract.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopyBibtex = (id: string, bibtex: string) => {
    navigator.clipboard.writeText(bibtex);
    setCopiedBibtexId(id);
    setTimeout(() => setCopiedBibtexId(null), 2000);
  };

  return (
    <div className="flex flex-col gap-6 my-6">
      {/* Search & Category Filter Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-4 border-b border-[#1c1c1c]">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              type="button"
              className={`px-3 py-1.5 text-xs rounded-[4px] font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#1a1a1a] text-[#ededed] border border-[#333333]'
                  : 'text-[#888888] hover:text-[#ededed] hover:bg-[#111111]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#555555]" />
          <input
            type="text"
            placeholder="Search papers, authors, topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 bg-[#0a0a0a] border border-[#222222] focus:border-[#0070f3] rounded-[4px] text-xs font-mono text-[#ededed] placeholder-[#555555] outline-none transition-colors"
          />
        </div>
      </div>

      {/* Publications List */}
      <div className="flex flex-col gap-4">
        {filteredPubs.length === 0 ? (
          <div className="p-8 text-center text-xs font-mono text-[#666666] bg-[#0a0a0a] border border-[#1c1c1c] rounded-[4px]">
            No publications found matching your search query.
          </div>
        ) : (
          filteredPubs.map((pub) => {
            const isBibtexOpen = expandedBibtexId === pub.id;
            const isCopied = copiedBibtexId === pub.id;

            return (
              <article
                key={pub.id}
                className="p-5 sm:p-6 bg-[#0a0a0a] border border-[#1c1c1c] hover:border-[#2a2a2a] rounded-[6px] transition-colors flex flex-col gap-3"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 font-mono text-[11px]">
                    <span className="text-[#0070f3] font-semibold">{pub.category}</span>
                    <span className="text-[#333333]">•</span>
                    <span className="text-[#888888]">{pub.month} {pub.year}</span>
                    {pub.arxivId && (
                      <>
                        <span className="text-[#333333]">•</span>
                        <span className="text-[#666666]">{pub.arxivId}</span>
                      </>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#666666]">
                    <span>{pub.citationsCount} Citations</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold text-[#ededed] tracking-tight leading-snug">
                  {pub.title}
                </h3>

                {/* Authors & Venue */}
                <div className="text-xs text-[#888888]">
                  <span className="text-[#ededed]">{pub.authors.join(', ')}</span>
                  <div className="mt-1 font-mono text-[11px] text-[#666666]">
                    Venue: {pub.venue}
                  </div>
                </div>

                {/* Abstract */}
                <p className="text-xs text-[#888888] leading-relaxed line-clamp-3 hover:line-clamp-none transition-all">
                  {pub.abstract}
                </p>

                {/* Actions & Identifiers */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#161616]">
                  <div className="flex items-center gap-3 font-mono text-xs">
                    {pub.doi && (
                      <span className="text-[11px] text-[#555555]">
                        DOI: <span className="text-[#888888]">{pub.doi}</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setExpandedBibtexId(isBibtexOpen ? null : pub.id)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono text-[#888888] hover:text-[#ededed] bg-[#111111] hover:bg-[#161616] border border-[#222222] rounded-[3px] transition-colors"
                    >
                      <BookOpen className="w-3 h-3 text-[#666666]" />
                      <span>{isBibtexOpen ? 'Hide BibTeX' : 'Cite BibTeX'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleCopyBibtex(pub.id, pub.bibtex)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono text-[#888888] hover:text-[#ededed] bg-[#111111] hover:bg-[#161616] border border-[#222222] rounded-[3px] transition-colors"
                      aria-label="Copy Citation BibTeX"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3 h-3 text-[#0070f3]" />
                          <span className="text-[#0070f3]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy Citation</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Expanded BibTeX Drawer */}
                {isBibtexOpen && (
                  <div className="mt-2 p-3 bg-[#050505] border border-[#1f1f1f] rounded-[4px] relative">
                    <pre className="font-mono text-[11px] text-[#a1a1a1] overflow-x-auto whitespace-pre-wrap leading-relaxed">
                      {pub.bibtex}
                    </pre>
                  </div>
                )}
              </article>
            );
          })
        )}
      </div>
    </div>
  );
};
