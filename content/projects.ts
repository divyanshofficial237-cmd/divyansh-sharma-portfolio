export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  screenshot: string;
  role: string;
  year: string;
  status: "live" | "in-development" | "completed";
  features: string[];
  problem?: string;
  solution?: string;
  architecture?: string[];
  challenges?: string[];
  lessons?: string[];
  gallery?: string[];
}

export const projects: Project[] = [
  {
    slug: "fraudlens",
    title: "FraudLens — Fraud Intelligence System",
    description: "A real-time fraud intelligence platform that analyzes transaction patterns to detect and flag suspicious activity. 🏆 Best Presentation Award.",
    longDescription: "FraudLens is a fraud intelligence system built to identify suspicious financial transactions in real time. It combines machine learning models with a visual analytics dashboard to surface anomalies, risk scores, and behavioral patterns. The project was recognized with the Best Presentation Award for its clear architecture and impactful demo.",
    tags: ["TypeScript", "Tailwind CSS", "FastAPI", "Node.js", "Python", "Gemini API", "Groq API", "Twilio API"],
    githubUrl: "",
    liveUrl: "https://fraudlens-seven.vercel.app/",
    screenshot: "/fraudlens.png",
    role: "Frontend & AI Integration Engineer",
    year: "2026",
    status: "live",
    features: [
      "Real-time Risk Scoring: Evaluates each transaction against behavioral baselines instantly.",
      "Interactive Analytics Dashboard: Visual breakdown of anomalies, trends, and fraud probability indices.",
      "ML-Powered Detection: Custom classification models trained on transactional metadata patterns."
    ],
    problem: "Financial platforms lack real-time visibility into transaction risk without slowing down the checkout flow.",
    solution: "Built a high-performance fraud detection pipeline with sub-50ms evaluation and a rich visual dashboard.",
    architecture: ["FastAPI ML backend", "Next.js dashboard", "scikit-learn classifiers", "Real-time anomaly scoring"],
    challenges: ["Achieving low-latency scoring at scale", "Minimizing false positives without missing real fraud"],
    lessons: ["ML models need continuous retraining to adapt to evolving fraud patterns", "Clear data visualization is key to stakeholder trust"],
    gallery: []
  },
  {
    slug: "nextcareer-ai",
    title: "NextCareer AI",
    description: "An AI-powered platform that helps job seekers build ATS-ready portfolios and resumes with instant scoring, personalized career paths, and smart templates.",
    longDescription: "NextCareer AI is a full-stack career platform built for modern job seekers. It combines ATS-ready resume templates, an AI scoring engine, and a career index that tracks skill gaps, offer progress, and role fit — giving users data-driven guidance instead of guesswork. The platform is designed around a 2-minute setup and covers the full job-search workflow from resume building to ATS analysis.",
    tags: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "FastAPI"],
    githubUrl: "",
    liveUrl: "https://nextcareer-ai-one.vercel.app/",
    screenshot: "/nextcareer-ai.png",
    role: "Founder & Full Stack AI Engineer",
    year: "2026",
    status: "live",
    features: [
      "ATS Scoring: Instantly scores resumes against job descriptions with actionable improvement suggestions.",
      "Resume Builder: ATS-ready templates with real-time formatting guidance.",
      "Career Index: Tracks skill gaps, offer progress, and role fit signals in one dashboard.",
      "Personalized Career Paths: AI-generated role recommendations aligned to the user's background and goals."
    ],
    problem: "Job seekers build resumes without knowing if they'll pass ATS filters or how they compare to target role requirements.",
    solution: "Built an AI platform that scores, templates, and tracks the full job-search workflow — from resume to offer.",
    architecture: ["Next.js frontend", "FastAPI backend", "OpenAI API for scoring & recommendations", "Tailwind CSS UI"],
    challenges: ["Keeping ATS scoring accurate across diverse resume formats", "Designing a career index that surfaces actionable signals without overwhelming users"],
    lessons: ["Grounding matters: LLMs are far more useful when constrained to user-supplied context", "Career tools need to feel personal, not automated"],
    gallery: []
  },
  {
    slug: "production-rag",
    title: "Production-RAG",
    description: "An open-source RAG framework that retrieves from your document corpus, cites answers to the exact page, and abstains when evidence is thin. 209 deterministic tests, zero paid APIs in CI.",
    longDescription: "Production-RAG is a typed, testable retrieval-augmented generation pipeline built to behave like infrastructure rather than a demo. Every answer comes with page-level citations showing the file, page, and cosine similarity score. When the top retrieved passage doesn't clear a confidence threshold, the LLM is never called — abstention is a first-class design decision. The pipeline runs on embedded Qdrant locally and a Dockerized Qdrant server in production, with providers (embeddings, LLM, vector store) swappable via environment variables.",
    tags: ["Python", "FastAPI", "LangChain", "Docker", "OpenAI API"],
    githubUrl: "https://github.com/1divyanshdev/production-rag",
    liveUrl: "https://prod-rag-phi.vercel.app/",
    screenshot: "/production-rag.png",
    role: "Author & AI Engineer",
    year: "2026",
    status: "live",
    features: [
      "Page-level citations: Every answer carries a [n] marker resolving to file, page, and cosine score.",
      "Abstention by design: If top-retrieved score doesn't clear the threshold, the LLM is never called.",
      "Idempotent indexing: SHA-256 content hashes prevent duplicates — re-uploading is a no-op.",
      "Provider portability: Swap embeddings, LLM, or vector store with an env var — no code changes.",
      "209 offline tests: Deterministic suites with mocked HTTP transports; nothing in CI touches a paid API."
    ],
    problem: "Most RAG demos answer from memory and hope you don't check — no citations, no confidence thresholds, no production topology.",
    solution: "Built a fully typed pipeline where every claim has a receipt, abstention is designed behavior, and the architecture is portable from local to production.",
    architecture: ["FastAPI backend", "Qdrant (embedded & server mode)", "LangChain orchestration", "SHA-256 content deduplication", "Docker Compose production topology"],
    challenges: ["Designing reliable abstention thresholds without discarding valid answers", "Making the pipeline portable across embedding and LLM providers"],
    lessons: ["Abstention is a feature, not a failure — systems that say 'I don't know' are more trustworthy", "Deterministic tests require careful transport mocking to avoid paid API calls in CI"],
    gallery: []
  },
  {
    slug: "llm-reliability-engine",
    title: "LLM Reliability Engine",
    description: "A benchmarking and evaluation framework that measures the reliability, consistency, and factual accuracy of large language model outputs.",
    longDescription: "The LLM Reliability Engine is a testing and evaluation platform designed to stress-test LLM responses across multiple dimensions — consistency, hallucination rate, prompt sensitivity, and output stability. It provides structured reports and scoring to help developers understand model behavior before shipping AI features to production.",
    tags: ["Python", "TypeScript", "OpenAI API"],
    githubUrl: "https://github.com/1divyanshdev/llm-reliability-engine",
    liveUrl: "https://llm-reliability-engine.vercel.app/",
    screenshot: "/llm-reliability.png",
    role: "Founder & AI Engineer",
    year: "2026",
    status: "live",
    features: [
      "Consistency Testing: Runs identical prompts multiple times to measure output variance.",
      "Hallucination Detection: Flags factually inconsistent responses against a reference dataset.",
      "Structured Reports: Generates per-model reliability scores with detailed breakdowns."
    ],
    problem: "Developers shipping LLM-powered features have no standardized way to measure model reliability before production.",
    solution: "Built an automated evaluation framework that benchmarks LLMs across consistency, accuracy, and stability metrics.",
    architecture: ["FastAPI evaluation backend", "LangChain orchestration", "Next.js reporting dashboard", "OpenAI & open-source model support"],
    challenges: ["Defining reliable metrics for subjective LLM outputs", "Handling prompt sensitivity across model versions"],
    lessons: ["Evaluation is as important as training in AI systems", "Structured benchmarks build confidence in AI-powered products"],
    gallery: []
  }
];
