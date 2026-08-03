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
    slug: "llm-reliability-engine",
    title: "LLM Reliability Engine",
    description: "A benchmarking and evaluation framework that measures the reliability, consistency, and factual accuracy of large language model outputs.",
    longDescription: "The LLM Reliability Engine is a testing and evaluation platform designed to stress-test LLM responses across multiple dimensions — consistency, hallucination rate, prompt sensitivity, and output stability. It provides structured reports and scoring to help developers understand model behavior before shipping AI features to production.",
    tags: ["Python", "TypeScript", "OpenAI API"],
    githubUrl: "",
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
