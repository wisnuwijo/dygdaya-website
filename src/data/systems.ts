import { SoftwareSystem } from '@/types';

export const softwareSystems: SoftwareSystem[] = [
  {
    id: 'dyg-tensor',
    name: 'dyg-tensor',
    badge: 'v0.9.4 • C++20 / Triton',
    description: 'High-performance JIT neural compiler and distributed inference runtime engine with sub-microsecond launch overhead and zero-copy tensor IPC.',
    architecture: 'Polyhedral Graph Compiler + Custom Async Stream Scheduler',
    language: 'C++ / CUDA / Python',
    version: '0.9.4',
    githubUrl: 'https://github.com/dygdaya/dyg-tensor',
    docsUrl: '/systems#dyg-tensor',
    installCommand: 'pip install dyg-tensor --extra-index-url https://dist.dygdaya.ai/wheels/cuda12',
    codeSnippet: `import torch
import dyg_tensor as dt

# Load model with automatic JIT fusion and 4-bit register kernel synthesis
engine = dt.InferenceEngine.from_pretrained(
    "dygdaya/reasoner-70b-fp4",
    tensor_parallel_size=2,
    enable_polyhedral_fusion=True,
    kv_cache_dtype=dt.float4_e2m1
)

# Zero-overhead streaming generation with formal constraint checking
prompt = "Prove convergence bounds for stochastic gradient flow under non-convexity:"
for token in engine.generate_stream(prompt, max_new_tokens=1024, temperature=0.2):
    print(token.text, end="", flush=True)`,
    features: [
      'Sub-3µs launch latency across multi-stream NVLink clusters',
      'Unified register dequantization for FP4, INT4, and INT3 codebooks',
      'Dynamic continuous batching with zero memory fragmentation',
      'Automated CUDA kernel fusion for attention and MLP blocks'
    ],
    license: 'Apache-2.0'
  },
  {
    id: 'dyg-reason',
    name: 'dyg-reason',
    badge: 'v0.4.1 • Rust / Python',
    description: 'Neuro-symbolic verification engine that hooks into autoregressive decoding to guarantee first-order logic constraints and mathematical proofs.',
    architecture: 'SMT-Guided Logit Projector & Invariant Prover',
    language: 'Rust / Python / Lean4',
    version: '0.4.1',
    githubUrl: 'https://github.com/dygdaya/dyg-reason',
    docsUrl: '/systems#dyg-reason',
    installCommand: 'cargo add dyg-reason --features cuda,smt-z3',
    codeSnippet: `use dyg_reason::{ProverContext, ConstraintTree, SmtVerifier};

let ctx = ProverContext::new_with_smt_solver("z3")?;
let constraints = ConstraintTree::from_json_schema(r#"{
    "type": "object",
    "required": ["lemma", "step_proof", "q_e_d"],
    "properties": { "q_e_d": { "type": "boolean", "const": true } }
}"#)?;

// Intercepts logit distributions and masks invalid transitions before sample
let safe_logits = ctx.project_constrained_logits(&raw_logits, &constraints)?;`,
    features: [
      'Real-time projection of token logits onto first-order logic manifolds',
      'Integration with Z3, CVC5, and Lean4 proof environments',
      'Sub-2ms verification latency per reasoning step',
      'Prevents structural hallucination in autonomous software agents'
    ],
    license: 'MIT'
  },
  {
    id: 'dyg-distributed',
    name: 'dyg-distributed',
    badge: 'v1.1.0 • C++ / RDMA',
    description: 'Ultra-low latency collective communication runtime optimized for heterogeneous GPU clusters with InfiniBand and RoCE v2.',
    architecture: 'Kernel-Bypass Memory Ring with Asynchronous Overlap',
    language: 'C++ / RDMA Verbs',
    version: '1.1.0',
    githubUrl: 'https://github.com/dygdaya/dyg-distributed',
    docsUrl: '/systems#dyg-distributed',
    installCommand: 'git clone https://github.com/dygdaya/dyg-distributed && cd dyg-distributed && make install',
    codeSnippet: `#include <dyg/distributed.hpp>

int main() {
    auto comm = dyg::Communicator::init_topology_aware();
    dyg::TensorBuffer buffer = comm.allocate_pinned_gpu_memory(1024 * 1024 * 128);

    // Asynchronously overlap tensor computation with ring-allreduce
    auto compute_stream = dyg::Stream::create();
    auto comm_stream = dyg::Stream::create();

    comm.async_allreduce(buffer, comm_stream);
    dyg::dispatch_fused_gemm(buffer, compute_stream);
    comm.sync_all();
}`,
    features: [
      'Direct GPU-to-GPU GPUDirect RDMA with kernel bypass',
      'Topology-aware hierarchical ring reduction across nodes',
      'Zero CPU intervention for collective communications',
      'Near-linear scaling up to 1,024 accelerator nodes'
    ],
    license: 'Apache-2.0'
  }
];
