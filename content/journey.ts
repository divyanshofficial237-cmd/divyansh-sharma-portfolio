export interface JourneyItem {
  title: string;
  description: string;
  date: string;
}

export const journey: JourneyItem[] = [
  {
    title: "Started Learning Web Development",
    description: "Learned the core fundamentals of HTML, CSS, JavaScript, and React. Built simple static sites and interactive web apps.",
    date: "2023"
  },
  {
    title: "Built First AI Application",
    description: "Integrated OpenAI APIs to create a contextual chat assistant and semantic search engine, understanding API integrations and streaming responses.",
    date: "Early 2024"
  },
  {
    title: "Participated in Hackathons",
    description: "Collaborated with multi-disciplinary teams under tight deadlines. Designed and built functional prototypes, winning honorable mentions.",
    date: "Late 2024"
  },
  {
    title: "Built Production-Ready Projects",
    description: "Built and deployed real-world tools, focusing on clean database architectures, user authentication, and optimized performance.",
    date: "2025"
  },
  {
    title: "Exploring AI Agents",
    description: "Currently researching and building autonomous agent workflows, advanced prompt engineering, and context-aware systems.",
    date: "Present"
  }
];
