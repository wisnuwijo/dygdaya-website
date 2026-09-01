'use client';

import React, { useState, useMemo } from 'react';
import { CalculatorState, CalculatorResults } from '@/types';
import { formatNumber } from '@/lib/utils';
import { Cpu, Check, Copy } from 'lucide-react';

const PRESET_MODELS = [
  { name: 'Dyg-Reasoner-14B', params: 14, layers: 48, hiddenDim: 5120 },
  { name: 'Dyg-Dense-70B', params: 70, layers: 80, hiddenDim: 8192 },
  { name: 'Dyg-MoE-236B (32B Active)', params: 236, layers: 60, hiddenDim: 7168 },
  { name: 'Custom Architecture', params: 0, layers: 32, hiddenDim: 4096 },
];

const GPU_PROFILES = [
  { name: 'NVIDIA H100 SXM5 (80GB / 3.35 TB/s)', vramGb: 80, bandwidthTbps: 3.35, tflopsFp8: 1979 },
  { name: 'NVIDIA B200 (192GB / 8.0 TB/s)', vramGb: 192, bandwidthTbps: 8.0, tflopsFp8: 4500 },
  { name: 'NVIDIA RTX 4090 (24GB / 1.0 TB/s)', vramGb: 24, bandwidthTbps: 1.0, tflopsFp8: 330 },
];

export const InteractiveCalculator: React.FC = () => {
  const [selectedModelIdx, setSelectedModelIdx] = useState(1);
  const [modelParams, setModelParams] = useState(70);
  const [precisionBits, setPrecisionBits] = useState(4); // 4, 8, 16
  const [contextLength, setContextLength] = useState(8192);
  const [batchSize, setBatchSize] = useState(4);
  const [selectedGpuIdx, setSelectedGpuIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  // Sync preset parameters
  const handleModelPresetChange = (idx: number) => {
    setSelectedModelIdx(idx);
    if (PRESET_MODELS[idx].params > 0) {
      setModelParams(PRESET_MODELS[idx].params);
    }
  };

  const results: CalculatorResults = useMemo(() => {
    const gpu = GPU_PROFILES[selectedGpuIdx];
    const bytesPerParam = precisionBits / 8;
    
    // Weights memory footprint (GB)
    const weightsGb = (modelParams * 1e9 * bytesPerParam) / (1024 * 1024 * 1024);
    
    // KV Cache estimation per token: 2 * num_layers * num_heads * head_dim * precision
    // Standard approx: 2 * (modelParams / 1e9 / 10) * context_len * batch_size in bytes
    const kvCacheBytesPerToken = (modelParams * 1e9 * 0.00015 * (precisionBits <= 8 ? 1 : 2));
    const kvCacheGb = (kvCacheBytesPerToken * contextLength * batchSize) / (1024 * 1024 * 1024);
    
    // Activation & CUDA context overhead (~15% of weights + static 2GB)
    const activationGb = weightsGb * 0.12 + 2.0;
    
    const totalVramGb = weightsGb + kvCacheGb + activationGb;
    const minGpus = Math.max(1, Math.ceil(totalVramGb / (gpu.vramGb * 0.90)));
    
    const memoryUtilization = Math.min(100, (totalVramGb / (minGpus * gpu.vramGb)) * 100);
    
    // Throughput estimation (Tokens/sec)
    // Memory bandwidth bound for batch=1 to 4, transitioning to compute bound at high batch
    const aggregateBandwidthGbps = gpu.bandwidthTbps * 1000 * minGpus;
    const bytesPerTokenGen = (modelParams * 1e9 * bytesPerParam) / (1024 * 1024 * 1024);
    
    let estimatedTokensPerSec = 0;
    let boundType: 'Memory Bandwidth Bound' | 'Compute Bound' = 'Memory Bandwidth Bound';
    
    if (batchSize <= 8) {
      // Memory bandwidth dominated
      estimatedTokensPerSec = (aggregateBandwidthGbps / (weightsGb * 1.05)) * (batchSize * 0.75);
      boundType = 'Memory Bandwidth Bound';
    } else {
      // Compute bound approximation
      const totalTflops = gpu.tflopsFp8 * minGpus * 0.65;
      const flopsPerToken = modelParams * 2;
      estimatedTokensPerSec = (totalTflops * 1e12 / flopsPerToken) * (batchSize / 16);
      boundType = 'Compute Bound';
    }
    
    // DygQuant optimization bonus (25% higher efficiency)
    if (precisionBits === 4) {
      estimatedTokensPerSec *= 1.28;
    }

    const arithmeticIntensity = (modelParams * 2) / (modelParams * bytesPerParam);

    return {
      weightsMemoryGb: weightsGb,
      kvCacheMemoryGb: kvCacheGb,
      activationMemoryGb: activationGb,
      totalVramRequiredGb: totalVramGb,
      minGpusNeeded: minGpus,
      memoryUtilizationPercent: memoryUtilization,
      estimatedThroughputTokensPerSec: Math.round(estimatedTokensPerSec),
      arithmeticIntensityFlopsPerByte: Math.round(arithmeticIntensity * 10) / 10,
      boundType,
    };
  }, [modelParams, precisionBits, contextLength, batchSize, selectedGpuIdx]);

  const copyConfig = () => {
    const text = `Dygdaya Compute Sizing Spec:
Model: ${modelParams}B Parameters | Precision: ${precisionBits}-bit
Context Length: ${contextLength} tokens | Batch Size: ${batchSize}
Hardware: ${results.minGpusNeeded}x ${GPU_PROFILES[selectedGpuIdx].name}
Total VRAM: ${formatNumber(results.totalVramRequiredGb, 1)} GB (Weights: ${formatNumber(results.weightsMemoryGb, 1)} GB, KV: ${formatNumber(results.kvCacheMemoryGb, 1)} GB)
Estimated Throughput: ${results.estimatedThroughputTokensPerSec} tokens/sec (${results.boundType})`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="calculator" className="vbg-calculator my-8">
      {/* Controls & Inputs (Left) */}
      <div className="vbg-calculator-inputs">
        <div className="flex items-center justify-between pb-2 border-b border-[#1f1f1f]">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#0070f3]" />
            <h3 className="text-sm font-semibold tracking-tight text-[#ededed] font-mono uppercase">
              Inference & Memory Sizing Estimator
            </h3>
          </div>
          <span className="text-[10px] font-mono text-[#666666]">v2.4 SPEC</span>
        </div>

        {/* Model Preset Selection */}
        <div className="vbg-field">
          <label htmlFor="model-preset" className="vbg-label">
            Model Architecture Preset
          </label>
          <div className="vbg-unit-field">
            <select
              id="model-preset"
              value={selectedModelIdx}
              onChange={(e) => handleModelPresetChange(Number(e.target.value))}
              aria-label="Select Model Architecture Preset"
            >
              {PRESET_MODELS.map((m, idx) => (
                <option key={m.name} value={idx} className="bg-[#111111] text-[#ededed]">
                  {m.name} {m.params > 0 ? `(${m.params}B Params)` : ''}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Custom Params Input */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="vbg-field">
            <label htmlFor="param-count" className="vbg-label">
              Total Parameters (Billions)
            </label>
            <div className="vbg-unit-field">
              <input
                id="param-count"
                type="number"
                min="1"
                max="1000"
                value={modelParams}
                onChange={(e) => setModelParams(Math.max(1, Number(e.target.value)))}
              />
              <span className="vbg-unit-suffix">B Params</span>
            </div>
            <p className="vbg-helper">Dense or total sparse parameters</p>
          </div>

          <div className="vbg-field">
            <label htmlFor="precision-format" className="vbg-label">
              Weight & KV Precision
            </label>
            <div className="vbg-unit-field">
              <select
                id="precision-format"
                value={precisionBits}
                onChange={(e) => setPrecisionBits(Number(e.target.value))}
                aria-label="Select Precision Format"
              >
                <option value={4} className="bg-[#111111]">FP4 / INT4 (DygQuant Fused)</option>
                <option value={8} className="bg-[#111111]">FP8 (E4M3 / E5M2)</option>
                <option value={16} className="bg-[#111111]">FP16 / BF16 (Standard)</option>
              </select>
            </div>
            <p className="vbg-helper">Fused register dequantization</p>
          </div>
        </div>

        {/* Context Length & Batch Size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="vbg-field">
            <label htmlFor="context-length" className="vbg-label">
              Sequence Context Length
            </label>
            <div className="vbg-unit-field">
              <select
                id="context-length"
                value={contextLength}
                onChange={(e) => setContextLength(Number(e.target.value))}
                aria-label="Select Sequence Context Length"
              >
                <option value={4096} className="bg-[#111111]">4,096 tokens</option>
                <option value={8192} className="bg-[#111111]">8,192 tokens</option>
                <option value={16384} className="bg-[#111111]">16,384 tokens</option>
                <option value={32768} className="bg-[#111111]">32,768 tokens</option>
                <option value={65536} className="bg-[#111111]">65,536 tokens</option>
                <option value={131072} className="bg-[#111111]">131,072 tokens</option>
              </select>
            </div>
            <p className="vbg-helper">KV Cache scales linearly with length</p>
          </div>

          <div className="vbg-field">
            <label htmlFor="batch-size" className="vbg-label">
              Concurrency / Batch Size
            </label>
            <div className="vbg-unit-field">
              <input
                id="batch-size"
                type="number"
                min="1"
                max="128"
                value={batchSize}
                onChange={(e) => setBatchSize(Math.max(1, Number(e.target.value)))}
              />
              <span className="vbg-unit-suffix">Reqs</span>
            </div>
            <p className="vbg-helper">Concurrent inference streams</p>
          </div>
        </div>

        {/* Hardware Target */}
        <div className="vbg-field">
          <label htmlFor="gpu-profile" className="vbg-label">
            Target Hardware Architecture
          </label>
          <div className="vbg-unit-field">
            <select
              id="gpu-profile"
              value={selectedGpuIdx}
              onChange={(e) => setSelectedGpuIdx(Number(e.target.value))}
              aria-label="Select Hardware Architecture"
            >
              {GPU_PROFILES.map((g, idx) => (
                <option key={g.name} value={idx} className="bg-[#111111]">
                  {g.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Output & Results (Right) */}
      <div className="vbg-calculator-output">
        <div className="flex items-center justify-between pb-2 border-b border-[#1f1f1f]">
          <span className="font-mono text-xs uppercase tracking-wider text-[#ededed] font-semibold">
            Computed Topology & Sizing
          </span>
          <button
            onClick={copyConfig}
            type="button"
            className="inline-flex items-center gap-1 text-[11px] font-mono text-[#888888] hover:text-[#ededed] transition-colors focus:outline-none"
            aria-label="Copy Sizing Summary"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#0070f3]" />
                <span className="text-[#0070f3]">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Spec</span>
              </>
            )}
          </button>
        </div>

        {/* Primary Metrics */}
        <div className="vbg-result-group">
          <div className="vbg-result p-3 bg-[#0a0a0a] rounded-[4px] border border-[#1c1c1c]">
            <p className="vbg-result-label">Minimum Accelerators</p>
            <p className="vbg-result-value text-[#ededed]">
              {results.minGpusNeeded}x{' '}
              <span className="text-xs font-normal text-[#888888]">GPUs</span>
            </p>
            <p className="vbg-result-detail">
              {GPU_PROFILES[selectedGpuIdx].name.split(' ')[1]} Topology
            </p>
          </div>

          <div className="vbg-result p-3 bg-[#0a0a0a] rounded-[4px] border border-[#1c1c1c]">
            <p className="vbg-result-label">Total VRAM Footprint</p>
            <p className="vbg-result-value text-[#ededed]">
              {formatNumber(results.totalVramRequiredGb, 1)}{' '}
              <span className="text-xs font-normal text-[#888888]">GB</span>
            </p>
            <p className="vbg-result-detail">
              {formatNumber(results.memoryUtilizationPercent, 0)}% of pooled VRAM
            </p>
          </div>
        </div>

        {/* Secondary Metrics */}
        <div className="vbg-result-group">
          <div className="vbg-result p-3 bg-[#0a0a0a] rounded-[4px] border border-[#1c1c1c]">
            <p className="vbg-result-label">Estimated Generation</p>
            <p className="vbg-result-value text-[#0070f3]">
              {results.estimatedThroughputTokensPerSec}{' '}
              <span className="text-xs font-normal text-[#888888]">tok/s</span>
            </p>
            <p className="vbg-result-detail">Aggregated cluster output</p>
          </div>

          <div className="vbg-result p-3 bg-[#0a0a0a] rounded-[4px] border border-[#1c1c1c]">
            <p className="vbg-result-label">Execution Regime</p>
            <p className="text-sm font-semibold font-mono text-[#ededed] mt-1 truncate">
              {results.boundType.replace(' Bound', '')}
            </p>
            <p className="vbg-result-detail">
              Intensity: {results.arithmeticIntensityFlopsPerByte} FLOP/B
            </p>
          </div>
        </div>

        {/* Memory Breakdown Breakdown */}
        <div className="flex flex-col gap-1.5 pt-2 border-t border-[#1c1c1c] text-xs font-mono">
          <div className="flex justify-between text-[#888888]">
            <span>Model Weights ({precisionBits}-bit):</span>
            <span className="text-[#ededed]">{formatNumber(results.weightsMemoryGb, 1)} GB</span>
          </div>
          <div className="flex justify-between text-[#888888]">
            <span>Dynamic KV Cache ({batchSize} streams):</span>
            <span className="text-[#ededed]">{formatNumber(results.kvCacheMemoryGb, 1)} GB</span>
          </div>
          <div className="flex justify-between text-[#888888]">
            <span>CUDA Context & Activation Buffer:</span>
            <span className="text-[#ededed]">{formatNumber(results.activationMemoryGb, 1)} GB</span>
          </div>
        </div>
      </div>
    </div>
  );
};
