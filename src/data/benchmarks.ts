import { BenchmarkData } from '@/types';

export const benchmarkResults: BenchmarkData[] = [
  {
    model: 'Dyg-Dense-70B',
    precision: 'FP4 (DygQuant)',
    hardware: '1x H100 SXM5 (80GB)',
    contextLength: 8192,
    throughputTokensPerSec: 142.8,
    timeToFirstTokenMs: 24.1,
    memoryFootprintGb: 38.2,
    speedupVsBaseline: 3.42,
    tensorParallelism: 1
  },
  {
    model: 'Dyg-Dense-70B',
    precision: 'FP8 (E4M3)',
    hardware: '2x H100 SXM5 (NVLink)',
    contextLength: 8192,
    throughputTokensPerSec: 96.4,
    timeToFirstTokenMs: 38.6,
    memoryFootprintGb: 74.8,
    speedupVsBaseline: 2.15,
    tensorParallelism: 2
  },
  {
    model: 'Dyg-Dense-70B',
    precision: 'FP16 (Baseline)',
    hardware: '4x H100 SXM5 (NVLink)',
    contextLength: 8192,
    throughputTokensPerSec: 44.8,
    timeToFirstTokenMs: 78.2,
    memoryFootprintGb: 148.0,
    speedupVsBaseline: 1.0,
    tensorParallelism: 4
  },
  {
    model: 'Dyg-MoE-236B (32B Active)',
    precision: 'FP4 (DygQuant)',
    hardware: '2x H100 SXM5 (NVLink)',
    contextLength: 16384,
    throughputTokensPerSec: 184.2,
    timeToFirstTokenMs: 29.5,
    memoryFootprintGb: 132.4,
    speedupVsBaseline: 4.18,
    tensorParallelism: 2
  },
  {
    model: 'Dyg-MoE-236B (32B Active)',
    precision: 'FP8 (E4M3)',
    hardware: '4x H100 SXM5 (NVLink)',
    contextLength: 16384,
    throughputTokensPerSec: 118.6,
    timeToFirstTokenMs: 46.2,
    memoryFootprintGb: 254.0,
    speedupVsBaseline: 2.65,
    tensorParallelism: 4
  },
  {
    model: 'Dyg-Reasoner-14B',
    precision: 'FP4 + Proof Manifold',
    hardware: '1x RTX 4090 (24GB)',
    contextLength: 32768,
    throughputTokensPerSec: 168.5,
    timeToFirstTokenMs: 14.8,
    memoryFootprintGb: 9.8,
    speedupVsBaseline: 3.92,
    tensorParallelism: 1
  },
  {
    model: 'Dyg-Reasoner-14B',
    precision: 'FP16 (Standard)',
    hardware: '1x H100 SXM5 (80GB)',
    contextLength: 32768,
    throughputTokensPerSec: 86.4,
    timeToFirstTokenMs: 26.4,
    memoryFootprintGb: 32.6,
    speedupVsBaseline: 1.0,
    tensorParallelism: 1
  }
];

export const kernelLatencyBenchmarks = [
  { kernel: 'Fused Flash-Attn 3 + RoPE + SwiGLU', dygTensorUs: 14.2, baselineUs: 36.8, speedup: '2.59x' },
  { kernel: 'Sub-4bit GEMM Dequant Register Tile', dygTensorUs: 22.4, baselineUs: 71.5, speedup: '3.19x' },
  { kernel: 'Ring-Allreduce Async Overlap (8xH100)', dygTensorUs: 8.9, baselineUs: 24.1, speedup: '2.70x' },
  { kernel: 'Dynamic Sparse MoE Top-K Gate Routing', dygTensorUs: 6.3, baselineUs: 19.8, speedup: '3.14x' },
  { kernel: 'SMT-Constrained Logit Filter Step', dygTensorUs: 18.1, baselineUs: 84.0, speedup: '4.64x' }
];
