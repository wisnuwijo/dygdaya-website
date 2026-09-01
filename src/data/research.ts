import { ResearchDomain } from '@/types';

export const researchDomains: ResearchDomain[] = [
  {
    id: 'distributed-neural-runtimes',
    code: 'SYS-01',
    title: 'Distributed Neural Runtimes & Tensor Compilation',
    tagline: 'Sub-millisecond latency scheduling and automated kernel synthesis for multi-node accelerators.',
    abstract:
      'We research automatic parallelization across heterogenous accelerator topologies. By synthesizing custom Triton and PTX kernels with memory-aware loop tiling, our runtime eliminates kernel launch overheads and achieves near-theoretical memory bandwidth saturation on modern GPU clusters.',
    keyContributions: [
      'Automated intra-node Tensor Parallelism kernel fusion via static graph rewrite passes.',
      'Asynchronous ring-allreduce overlap with compute kernels using fine-grained CUDA stream synchronization.',
      'Dynamic memory defragmentation for dynamic-batch sequence generation in multi-tenant serving.'
    ],
    metrics: [
      { label: 'Kernel Launch Latency', value: '< 2.4 µs', detail: 'Measured on PCIe Gen5 / NVLink 4' },
      { label: 'MFU Saturation', value: '74.2%', detail: 'Sustained Model FLOPs Utilization on H100' },
      { label: 'Peak Memory Footprint', value: '-38.4%', detail: 'Reduction via activation checkpointing synthesis' }
    ],
    activeInitiatives: [
      { name: 'DygTensor JIT Compiler', stage: 'Production Verification', lead: 'Systems Architecture Lab' },
      { name: 'Topology-Aware Comm Protocol', stage: 'Empirical Validation', lead: 'Distributed Computing Group' },
      { name: 'Heterogeneous Cluster Scheduler', stage: 'Foundational', lead: 'Systems Architecture Lab' }
    ]
  },
  {
    id: 'formal-verification-reasoning',
    code: 'AI-02',
    title: 'Formal Verification of Neural Reasoning & Autonomous Agents',
    tagline: 'Guaranteed execution bounds and verifiable correctness for neuro-symbolic reasoning pipelines.',
    abstract:
      'Large autoregressive reasoning models suffer from stochastic hallucination and unconstrained search trees. Dygdaya develops formal verification layers that constrain decoding using first-order logic provers and SMT solvers, ensuring mathematical and procedural correctness during multi-step inference.',
    keyContributions: [
      'Real-time grammar and logical schema projection during token logit generation.',
      'Automated invariant checking for tool-augmented and agentic execution graphs.',
      'Divergence bounding in multi-agent consensus protocols under adversarial perturbations.'
    ],
    metrics: [
      { label: 'Verification Pass Rate', value: '99.98%', detail: 'On GSM8k-Formal & Lean4 proof synthesis' },
      { label: 'Constraint Overhead', value: '< 1.8 ms', detail: 'SMT solver check per reasoning step' },
      { label: 'Hallucination Mitigation', value: '94.6%', detail: 'Reduction in domain-specific logic fallacies' }
    ],
    activeInitiatives: [
      { name: 'DygReason Symbolic Prover', stage: 'Production Verification', lead: 'Neuro-Symbolic Lab' },
      { name: 'Constrained Logit Projector', stage: 'Empirical Validation', lead: 'Reasoning Research Group' },
      { name: 'Autonomous Agent Safety Sandbox', stage: 'Foundational', lead: 'Verification & Safety Lab' }
    ]
  },
  {
    id: 'sparse-computation-quantization',
    code: 'SYS-03',
    title: 'Extreme Sparsity & Low-Bit Quantization Architectures',
    tagline: 'Sub-4-bit weight and activation quantization with zero loss in downstream reasoning accuracy.',
    abstract:
      'We design ultra-low-bit quantization schemes (FP4, INT3, INT2 non-uniform) coupled with structured 2:4 sparsity. Our research exploits activation outlier distribution and token entropy to dynamically allocate numerical precision per layer without expensive fine-tuning.',
    keyContributions: [
      'Entropy-aware mixed precision assignment for attention matrices and MLP projections.',
      'Hardware-friendly vector quantization with dequantization fused into tensor core registers.',
      'Lossless KV cache compression supporting 256k+ sequence lengths on single workstation nodes.'
    ],
    metrics: [
      { label: 'Quantization Compression', value: '3.8x', detail: 'Relative to standard FP16 baseline' },
      { label: 'Accuracy Degradation', value: '< 0.12%', detail: 'MMLU benchmark score delta on 70B models' },
      { label: 'KV Cache Bandwidth Saving', value: '71.5%', detail: 'Achieved with 3-bit adaptive grouping' }
    ],
    activeInitiatives: [
      { name: 'DygQuant Engine', stage: 'Production Verification', lead: 'Hardware Co-Design Lab' },
      { name: 'Dynamic 2:4 Sparse Kernel Suite', stage: 'Empirical Validation', lead: 'Systems Architecture Lab' },
      { name: 'Sub-2-bit Weight Representation', stage: 'Foundational', lead: 'Mathematical Foundations Group' }
    ]
  },
  {
    id: 'compiler-runtime-synthesis',
    code: 'SYS-04',
    title: 'Autonomous Software Engineering & Compiler Synthesis',
    tagline: 'Self-improving compilers and provably safe programmatic program synthesis.',
    abstract:
      'Bridging programming languages and AI, we study LLM-guided compiler optimization passes. Our compilers iteratively discover novel SIMD loop vectorization strategies and GPU memory access layouts, outperforming manual human optimization by up to 30% in high-performance computing workloads.',
    keyContributions: [
      'Deep reinforcement learning guided polyhedral loop transformation and tiling.',
      'Automated bug synthesis and mutation testing for mission-critical aerospace and financial software.',
      'Direct IR-to-assembly translation with provable semantic equivalence preservation.'
    ],
    metrics: [
      { label: 'Auto-Vectorization Speedup', value: '1.42x', detail: 'Geometric mean over LLVM -O3 on SPEC benchmarks' },
      { label: 'Compilation Pipeline Speed', value: '12.4k LoC/s', detail: 'Throughput in distributed verification mode' },
      { label: 'Semantic Equivalence Proofs', value: '100%', detail: 'Verified via symbolic execution engines' }
    ],
    activeInitiatives: [
      { name: 'DygOpt Auto-Tuner', stage: 'Production Verification', lead: 'Compiler Technology Group' },
      { name: 'Symbolic IR Translator', stage: 'Empirical Validation', lead: 'Programming Languages Lab' },
      { name: 'Autonomous Refactoring Engine', stage: 'Foundational', lead: 'Software Intelligence Group' }
    ]
  }
];
