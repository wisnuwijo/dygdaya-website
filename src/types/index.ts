export interface ResearchDomain {
  id: string;
  title: string;
  code: string;
  tagline: string;
  abstract: string;
  keyContributions: string[];
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  activeInitiatives: {
    name: string;
    stage: 'Foundational' | 'Empirical Validation' | 'Production Verification';
    lead: string;
  }[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  month: string;
  doi?: string;
  arxivId?: string;
  category: 'Neural Compilers' | 'Reasoning & Verification' | 'Quantization' | 'Distributed Systems';
  abstract: string;
  bibtex: string;
  pdfUrl?: string;
  citationsCount: number;
  highlight?: boolean;
}

export interface BenchmarkData {
  model: string;
  precision: string;
  hardware: string;
  contextLength: number;
  throughputTokensPerSec: number;
  timeToFirstTokenMs: number;
  memoryFootprintGb: number;
  speedupVsBaseline: number;
  tensorParallelism: number;
}

export interface SoftwareSystem {
  id: string;
  name: string;
  badge: string;
  description: string;
  architecture: string;
  language: string;
  version: string;
  githubUrl: string;
  docsUrl: string;
  installCommand: string;
  codeSnippet: string;
  features: string[];
  license: string;
}

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
  priorAffiliations: string[];
  scholarUrl?: string;
  githubUrl?: string;
}

export interface CalculatorState {
  modelSizeBillion: number;
  precisionBits: number; // 4, 8, 16
  contextLengthTokens: number;
  batchSize: number;
  tensorParallelism: number;
  gpuVramGb: number; // 80 (H100), 24 (4090), 192 (B200), etc.
}

export interface CalculatorResults {
  weightsMemoryGb: number;
  kvCacheMemoryGb: number;
  activationMemoryGb: number;
  totalVramRequiredGb: number;
  minGpusNeeded: number;
  memoryUtilizationPercent: number;
  estimatedThroughputTokensPerSec: number;
  arithmeticIntensityFlopsPerByte: number;
  boundType: 'Memory Bandwidth Bound' | 'Compute Bound';
}
