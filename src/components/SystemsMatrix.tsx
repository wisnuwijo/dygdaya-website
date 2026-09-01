'use client';

import React, { useState } from 'react';
import { softwareSystems } from '@/data/systems';
import { Terminal, Copy, Check, ExternalLink, Cpu, Layers } from 'lucide-react';

export const SystemsMatrix: React.FC = () => {
  const [selectedSystemId, setSelectedSystemId] = useState<string>(softwareSystems[0].id);
  const [copiedInstall, setCopiedInstall] = useState<string | null>(null);
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  const currentSystem = softwareSystems.find((s) => s.id === selectedSystemId) || softwareSystems[0];

  const handleCopyInstall = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedInstall(id);
    setTimeout(() => setCopiedInstall(null), 2000);
  };

  const handleCopySnippet = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  return (
    <div className="flex flex-col gap-6 my-6">
      {/* System Selection Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-b border-[#1c1c1c] pb-4">
        {softwareSystems.map((system) => {
          const isSelected = system.id === selectedSystemId;
          return (
            <button
              key={system.id}
              onClick={() => setSelectedSystemId(system.id)}
              type="button"
              className={`p-3 text-left rounded-[4px] border transition-all flex flex-col gap-1 ${
                isSelected
                  ? 'bg-[#111111] border-[#333333] text-[#ededed]'
                  : 'bg-[#0a0a0a] border-[#1a1a1a] text-[#888888] hover:border-[#262626] hover:text-[#ededed]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-semibold text-[#ededed]">{system.name}</span>
                <span className="text-[10px] font-mono text-[#0070f3]">{system.language.split(' ')[0]}</span>
              </div>
              <span className="text-[11px] text-[#666666] line-clamp-1">{system.architecture}</span>
            </button>
          );
        })}
      </div>

      {/* Selected System In-Depth View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#0a0a0a] border border-[#1c1c1c] rounded-[6px] p-5 sm:p-6">
        {/* Left: Architecture & Features (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-[#0070f3] font-semibold tracking-wider uppercase">
              {currentSystem.badge}
            </span>
            <span className="text-[11px] font-mono text-[#555555]">
              License: {currentSystem.license}
            </span>
          </div>

          <h3 className="text-xl font-bold font-mono text-[#ededed]">
            {currentSystem.name}
          </h3>

          <p className="text-xs text-[#888888] leading-relaxed">
            {currentSystem.description}
          </p>

          {/* Quick Install Command */}
          <div className="flex flex-col gap-1.5 mt-1">
            <span className="text-[10px] font-mono text-[#555555] uppercase tracking-wider">
              Installation
            </span>
            <div className="flex items-center justify-between p-2.5 bg-[#050505] border border-[#222222] rounded-[4px]">
              <span className="font-mono text-xs text-[#ededed] overflow-x-auto whitespace-nowrap pr-2">
                $ {currentSystem.installCommand}
              </span>
              <button
                type="button"
                onClick={() => handleCopyInstall(currentSystem.id, currentSystem.installCommand)}
                className="text-[#888888] hover:text-[#ededed] p-1 shrink-0 transition-colors"
                aria-label="Copy installation command"
              >
                {copiedInstall === currentSystem.id ? (
                  <Check className="w-3.5 h-3.5 text-[#0070f3]" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* Key Architectural Features */}
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-[10px] font-mono text-[#555555] uppercase tracking-wider">
              System Capabilities
            </span>
            <ul className="flex flex-col gap-1.5 text-xs text-[#888888]">
              {currentSystem.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#0070f3] mt-0.5">•</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Code Block & Example (7 cols) */}
        <div className="lg:col-span-7 flex flex-col bg-[#050505] border border-[#1f1f1f] rounded-[4px] overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2 bg-[#0c0c0c] border-b border-[#1f1f1f]">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#0070f3]" />
              <span className="text-[11px] font-mono text-[#888888]">
                {currentSystem.name}_benchmark_example.{currentSystem.language.includes('C++') ? 'cpp' : currentSystem.language.includes('Rust') ? 'rs' : 'py'}
              </span>
            </div>
            <button
              type="button"
              onClick={() => handleCopySnippet(currentSystem.id, currentSystem.codeSnippet)}
              className="inline-flex items-center gap-1 text-[11px] font-mono text-[#888888] hover:text-[#ededed] transition-colors"
              aria-label="Copy Code Snippet"
            >
              {copiedSnippet === currentSystem.id ? (
                <>
                  <Check className="w-3 h-3 text-[#0070f3]" />
                  <span className="text-[#0070f3]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          <pre className="p-4 font-mono text-xs text-[#d1d1d1] overflow-x-auto leading-relaxed whitespace-pre">
            <code>{currentSystem.codeSnippet}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};
