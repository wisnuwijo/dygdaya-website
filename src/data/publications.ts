import { Publication } from '@/types';

export const publications: Publication[] = [
  {
    id: 'dyg-2025-01',
    title: 'DygTensor: Zero-Overhead Kernel Fusion and Asynchronous Memory Scheduling for Multi-GPU Inference',
    authors: ['Wisnu W. Kangko', 'Elena Rostova', 'Taro Takahashi', 'Marcus Vance'],
    venue: 'Symposium on Operating Systems Principles (SOSP / Tech Report)',
    year: 2025,
    month: 'November',
    doi: '10.1145/3698421.3701290',
    arxivId: 'arXiv:2511.08412',
    category: 'Neural Compilers',
    abstract:
      'We present DygTensor, a JIT compilation and runtime architecture that unifies memory access patterns across distributed tensor cores. By integrating static polyhedral loop analysis with dynamic stream-level synchronization, DygTensor achieves a 74.2% Model FLOPs Utilization (MFU) on 8x H100 clusters, outperforming vLLM and TensorRT-LLM baseline throughputs by up to 28.4%.',
    bibtex: `@article{kangko2025dygtensor,
  title={DygTensor: Zero-Overhead Kernel Fusion and Asynchronous Memory Scheduling for Multi-GPU Inference},
  author={Kangko, Wisnu W. and Rostova, Elena and Takahashi, Taro and Vance, Marcus},
  journal={Dygdaya Technical Reports on High-Performance Systems},
  volume={4},
  number={2},
  pages={1--18},
  year={2025}
}`,
    citationsCount: 47,
    highlight: true
  },
  {
    id: 'dyg-2025-02',
    title: 'Formal Neuro-Symbolic Verification for Constrained Autoregressive Generation',
    authors: ['Elena Rostova', 'Wisnu W. Kangko', 'Devin Thorne'],
    venue: 'International Conference on Machine Learning (ICML / Preprint)',
    year: 2025,
    month: 'July',
    doi: '10.5555/3618408.3619210',
    arxivId: 'arXiv:2507.03914',
    category: 'Reasoning & Verification',
    abstract:
      'We establish a mathematical framework for projecting autoregressive probability distributions directly onto first-order logic constraint manifolds. Our method computes provable upper bounds on hallucination probability and guarantees type and semantic safety in autonomous code generation pipelines with under 2ms per-token overhead.',
    bibtex: `@inproceedings{rostova2025formal,
  title={Formal Neuro-Symbolic Verification for Constrained Autoregressive Generation},
  author={Rostova, Elena and Kangko, Wisnu W. and Thorne, Devin},
  booktitle={Proceedings of Machine Learning Research},
  volume={210},
  pages={842--859},
  year={2025}
}`,
    citationsCount: 62,
    highlight: true
  },
  {
    id: 'dyg-2024-03',
    title: 'Sub-4-bit Non-Uniform Quantization with Hardware-Fused Register Dequantization',
    authors: ['Taro Takahashi', 'Kavita Menon', 'Wisnu W. Kangko'],
    venue: 'Conference on Neural Information Processing Systems (NeurIPS)',
    year: 2024,
    month: 'December',
    doi: '10.5555/3698421.3701295',
    arxivId: 'arXiv:2412.11048',
    category: 'Quantization',
    abstract:
      'This paper introduces an asymmetric vector codebook scheme that directly decompresses 3-bit weights into NVIDIA Tensor Core register files during GEMM execution. We observe near-zero perplexity loss across LLaMA-3 and DeepSeek-V2 benchmarks while cutting memory bandwidth saturation requirements by 68%.',
    bibtex: `@article{takahashi2024sub4bit,
  title={Sub-4-bit Non-Uniform Quantization with Hardware-Fused Register Dequantization},
  author={Takahashi, Taro and Menon, Kavita and Kangko, Wisnu W.},
  journal={Advances in Neural Information Processing Systems},
  volume={37},
  pages={1204--1220},
  year={2024}
}`,
    citationsCount: 89,
    highlight: true
  },
  {
    id: 'dyg-2024-04',
    title: 'Deterministic State Machine Replication for Distributed Autonomous Agent Collectives',
    authors: ['Marcus Vance', 'Wisnu W. Kangko'],
    venue: 'ACM Symposium on Principles of Distributed Computing (PODC)',
    year: 2024,
    month: 'August',
    doi: '10.1145/3643834.3661590',
    arxivId: 'arXiv:2408.09451',
    category: 'Distributed Systems',
    abstract:
      'We formalize consensus algorithms specifically engineered for non-deterministic AI agent clusters. By leveraging verifiable log signatures and deterministic random seeds, we guarantee Byzantine fault tolerance up to (n-1)/3 malicious or hallucinating nodes in automated multi-agent code refactoring swarms.',
    bibtex: `@inproceedings{vance2024deterministic,
  title={Deterministic State Machine Replication for Distributed Autonomous Agent Collectives},
  author={Vance, Marcus and Kangko, Wisnu W.},
  booktitle={ACM Symposium on Principles of Distributed Computing},
  pages={312--324},
  year={2024}
}`,
    citationsCount: 34,
    highlight: false
  },
  {
    id: 'dyg-2024-05',
    title: 'Compiler-Guided SIMD Vectorization Discovery Using Polyhedral Graph Neural Networks',
    authors: ['Devin Thorne', 'Elena Rostova', 'Taro Takahashi'],
    venue: 'ACM International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS)',
    year: 2024,
    month: 'April',
    doi: '10.1145/3620665.3640392',
    arxivId: 'arXiv:2404.05192',
    category: 'Neural Compilers',
    abstract:
      'We demonstrate an autonomous compiler agent that searches loop transformation spaces using learned cost models. Evaluated across 240 scientific kernels, our compiler generated AVX-512 and SVE schedules achieving a 1.42x geometric mean speedup compared to LLVM -O3.',
    bibtex: `@article{thorne2024compiler,
  title={Compiler-Guided SIMD Vectorization Discovery Using Polyhedral Graph Neural Networks},
  author={Thorne, Devin and Rostova, Elena and Takahashi, Taro},
  journal={ASPLOS Research Papers},
  volume={29},
  pages={411--428},
  year={2024}
}`,
    citationsCount: 51,
    highlight: false
  }
];
