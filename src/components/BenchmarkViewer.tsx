'use client';

import React, { useState } from 'react';
import { benchmarkResults, kernelLatencyBenchmarks } from '@/data/benchmarks';
import { formatNumber } from '@/lib/utils';
import { BarChart3, Zap, ShieldCheck } from 'lucide-react';

export const BenchmarkViewer: React.FC = () => {
  const [filterPrecision, setFilterPrecision] = useState<string>('All');
  const [activeTab, setActiveTab] = useState<'inference' | 'kernels'>('inference');

  const filteredBenchmarks = benchmarkResults.filter((b) => {
    if (filterPrecision === 'All') return true;
    if (filterPrecision === 'FP4') return b.precision.includes('FP4');
    if (filterPrecision === 'FP8') return b.precision.includes('FP8');
    if (filterPrecision === 'FP16') return b.precision.includes('FP16');
    return true;
  });

  const maxThroughput = Math.max(...benchmarkResults.map((b) => b.throughputTokensPerSec));

  return (
    <div className="flex flex-col gap-6 my-6">
      {/* Tab Switcher & Filter */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-3 border-b border-[#1c1c1c]">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('inference')}
            type="button"
            className={`px-3 py-1.5 text-xs font-medium rounded-[4px] transition-colors ${
              activeTab === 'inference'
                ? 'bg-[#1a1a1a] text-[#ededed] border border-[#2e2e2e]'
                : 'text-[#888888] hover:text-[#ededed]'
            }`}
          >
            End-to-End Inference Throughput
          </button>
          <button
            onClick={() => setActiveTab('kernels')}
            type="button"
            className={`px-3 py-1.5 text-xs font-medium rounded-[4px] transition-colors ${
              activeTab === 'kernels'
                ? 'bg-[#1a1a1a] text-[#ededed] border border-[#2e2e2e]'
                : 'text-[#888888] hover:text-[#ededed]'
            }`}
          >
            Fused Kernel Latencies (µs)
          </button>
        </div>

        {activeTab === 'inference' && (
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-[#666666]">Filter Precision:</span>
            {['All', 'FP4', 'FP8', 'FP16'].map((p) => (
              <button
                key={p}
                onClick={() => setFilterPrecision(p)}
                type="button"
                className={`px-2 py-1 rounded-[3px] transition-colors ${
                  filterPrecision === p
                    ? 'bg-[#0070f3] text-white font-semibold'
                    : 'bg-[#111111] text-[#888888] hover:text-[#ededed] border border-[#222222]'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        )}
      </div>

      {activeTab === 'inference' ? (
        <div className="flex flex-col gap-8">
          {/* Visual Bar Comparison (Honest Encoding with shared scale) */}
          <div className="p-4 sm:p-6 bg-[#0a0a0a] border border-[#1c1c1c] rounded-[6px]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#ededed] font-semibold flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-[#0070f3]" />
                  Throughput Scale Comparison (Tokens / Second)
                </h4>
                <p className="text-[11px] text-[#666666] mt-0.5">
                  Direct hardware measurements under continuous streaming batch generation.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#555555]">Scale: 0 – {maxThroughput} tok/s</span>
            </div>

            <div className="vbg-bar-list">
              {filteredBenchmarks.map((item, idx) => {
                const fillPercent = (item.throughputTokensPerSec / maxThroughput) * 100;
                const isDygQuant = item.precision.includes('FP4');
                return (
                  <div key={`${item.model}-${item.precision}-${idx}`} className="vbg-bar-item">
                    <div className="vbg-bar-label font-mono" title={`${item.model} (${item.precision})`}>
                      <span className="text-[#ededed] block truncate">{item.model.replace('Dyg-', '')}</span>
                      <span className="text-[10px] text-[#666666] block truncate">{item.precision.split(' ')[0]}</span>
                    </div>

                    <div className="vbg-bar-track">
                      <div
                        className={`vbg-bar-fill ${isDygQuant ? 'bg-[#0070f3]' : 'bg-[#ededed]/70'}`}
                        style={{ width: `${fillPercent}%` }}
                      />
                    </div>

                    <div className="vbg-bar-value font-mono">
                      {formatNumber(item.throughputTokensPerSec, 1)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Full Audit Table */}
          <div className="vbg-table-wrap">
            <table aria-label="End-to-End AI Inference Benchmarks Table">
              <thead>
                <tr>
                  <th scope="col">Model Architecture</th>
                  <th scope="col">Numerical Format</th>
                  <th scope="col">Hardware Topology</th>
                  <th scope="col" className="vbg-numeric">Context</th>
                  <th scope="col" className="vbg-numeric">Throughput</th>
                  <th scope="col" className="vbg-numeric">TTFT</th>
                  <th scope="col" className="vbg-numeric">VRAM</th>
                  <th scope="col" className="vbg-numeric">Speedup</th>
                </tr>
              </thead>
              <tbody>
                {filteredBenchmarks.map((b, idx) => (
                  <tr key={idx}>
                    <td className="font-mono text-xs font-medium text-[#ededed]">{b.model}</td>
                    <td className="font-mono text-xs text-[#888888]">{b.precision}</td>
                    <td className="text-xs text-[#888888]">{b.hardware}</td>
                    <td className="vbg-numeric font-mono text-xs">{b.contextLength.toLocaleString()}</td>
                    <td className="vbg-numeric font-mono text-xs font-semibold text-[#ededed]">
                      {formatNumber(b.throughputTokensPerSec, 1)} <span className="text-[10px] text-[#666666]">tok/s</span>
                    </td>
                    <td className="vbg-numeric font-mono text-xs">
                      {formatNumber(b.timeToFirstTokenMs, 1)} <span className="text-[10px] text-[#666666]">ms</span>
                    </td>
                    <td className="vbg-numeric font-mono text-xs">
                      {formatNumber(b.memoryFootprintGb, 1)} <span className="text-[10px] text-[#666666]">GB</span>
                    </td>
                    <td className="vbg-numeric font-mono text-xs">
                      <span className={b.speedupVsBaseline > 1.0 ? 'text-[#0070f3] font-semibold' : 'text-[#888888]'}>
                        {formatNumber(b.speedupVsBaseline, 2)}x
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Fused Kernel Latencies Audit Table */
        <div className="vbg-table-wrap">
          <table aria-label="Fused Kernel Latencies Table">
            <thead>
              <tr>
                <th scope="col">Kernel Operation</th>
                <th scope="col" className="vbg-numeric">DygTensor (µs)</th>
                <th scope="col" className="vbg-numeric">Baseline (µs)</th>
                <th scope="col" className="vbg-numeric">Speedup Delta</th>
              </tr>
            </thead>
            <tbody>
              {kernelLatencyBenchmarks.map((k, idx) => (
                <tr key={idx}>
                  <td className="font-mono text-xs text-[#ededed] font-medium">{k.kernel}</td>
                  <td className="vbg-numeric font-mono text-xs text-[#0070f3] font-semibold">
                    {formatNumber(k.dygTensorUs, 1)} µs
                  </td>
                  <td className="vbg-numeric font-mono text-xs text-[#888888]">
                    {formatNumber(k.baselineUs, 1)} µs
                  </td>
                  <td className="vbg-numeric font-mono text-xs text-[#ededed] font-semibold">
                    {k.speedup}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Methodology Note */}
      <div className="flex items-start gap-2 p-3 bg-[#0a0a0a] border border-[#1c1c1c] rounded-[4px] text-xs text-[#666666] font-mono">
        <ShieldCheck className="w-4 h-4 text-[#0070f3] shrink-0 mt-0.5" />
        <p className="m-0 leading-relaxed">
          <strong className="text-[#888888]">Methodology:</strong> Benchmarks measured on dedicated bare-metal SXM5 clusters with CUDA 12.6, PyTorch 2.5, and Ubuntu 24.04 LTS. Latencies represent median of 100 warm-up runs and 500 timed iterations. Baseline compares against default PyTorch SDPA and un-fused cuBLAS implementations.
        </p>
      </div>
    </div>
  );
};
