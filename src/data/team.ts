import { TeamMember } from '@/types';

export const teamMembers: TeamMember[] = [
  {
    name: 'Wisnu W. Kangko',
    role: 'Head of Research & Systems Architecture',
    focus: 'Heterogeneous accelerator scheduling, JIT neural compilers, distributed memory hierarchies.',
    priorAffiliations: ['High Performance Computing Labs', 'Systems Engineering Foundation'],
    scholarUrl: 'https://scholar.google.com',
    githubUrl: 'https://github.com/wisnuwijo'
  },
  {
    name: 'Dr. Elena Rostova',
    role: 'Principal Research Scientist (Reasoning & Formal Verification)',
    focus: 'Neuro-symbolic architectures, SMT solver integration, provable verification of agentic loops.',
    priorAffiliations: ['Formal Methods Institute', 'Theoretical Machine Learning Lab'],
    scholarUrl: 'https://scholar.google.com'
  },
  {
    name: 'Taro Takahashi',
    role: 'Lead Systems Engineer (Hardware Co-Design & Quantization)',
    focus: 'Low-bit numerical representations (FP4/INT3), custom Triton kernel synthesis, vector register scheduling.',
    priorAffiliations: ['Semiconductor Architecture Group', 'Accelerated Computing Lab'],
    githubUrl: 'https://github.com'
  },
  {
    name: 'Marcus Vance',
    role: 'Senior Research Engineer (Distributed Systems & Consensus)',
    focus: 'Fault-tolerant distributed runtimes, GPUDirect RDMA protocols, non-deterministic agent replication.',
    priorAffiliations: ['Distributed Runtimes Lab', 'Cloud Infrastructure Systems']
  }
];

export const researchPrinciples = [
  {
    code: '01',
    title: 'Zero-Overhead Systems Integrity',
    description: 'We reject software abstraction layers that compromise bare-metal hardware saturation. Every instruction, memory copy, and GPU kernel must earn its latency budget with empirical proof.'
  },
  {
    code: '02',
    title: 'Formal Verification Over Heuristics',
    description: 'Stochastic AI models without formal boundaries are unsuitable for critical infrastructure. We anchor neural generative loops with symbolic logic, SMT solvers, and mathematical verification.'
  },
  {
    code: '03',
    title: 'Open Scientific Rigor & Reproducibility',
    description: 'All theoretical findings are published alongside reproducible benchmarks, hardware specifications, and open-source system implementations for the global research community.'
  },
  {
    code: '04',
    title: 'First-Principles Hardware Co-Design',
    description: 'Software architecture must mirror physical silicon limits: memory bandwidth, register file pressure, interconnect topologies, and thermal constraints.'
  }
];
