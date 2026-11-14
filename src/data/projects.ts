export type Project = {
  slug: string;
  title: string;
  field: string;
  category: "Computer Vision" | "Machine Learning" | "Algorithms" | "Systems";
  subtitle: string;
  summary: string;
  topics: string[];
  highlights: string[];
  status: "featured" | "project";
};

export const projects: Project[] = [
  {
    slug: "polyglot",
    title: "Polyglot",
    field: "Artificial intelligence",
    category: "Machine Learning",
    subtitle: "Real-time AI language tutor",
    summary: "A real-time AI language tutor project, with implementation details and interaction design to be documented in a future case study.",
    topics: ["AI", "Language learning", "Real-time interaction"],
    highlights: ["Multilingual AI application", "Real-time language-learning interaction"],
    status: "project",
  },
  {
    slug: "parallax",
    title: "Parallax",
    field: "Computer vision",
    category: "Computer Vision",
    subtitle: "Monocular visual odometry",
    summary: "Built a monocular visual odometry system to estimate a vehicle's trajectory using a single camera, then improved its accuracy through temporal rotation correction to reduce accumulated drift.",
    topics: ["Python", "OpenCV", "NumPy", "Matplotlib", "pytest"],
    highlights: ["Monocular visual odometry", "Temporal rotation correction"],
    status: "featured",
  },
  {
    slug: "ekgram",
    title: "EKGram",
    field: "Signal processing",
    category: "Computer Vision",
    subtitle: "ECG digitization",
    summary: "Investigating the path from paper electrocardiograms to structured digital signals that can be studied computationally.",
    topics: ["Signals", "Digitization", "Computer vision"],
    highlights: ["ECG image-to-signal digitization", "Structured digital signal extraction"],
    status: "featured",
  },
  {
    slug: "multi-armed-bandits",
    title: "Multi-Armed Bandits",
    field: "Reinforcement learning",
    category: "Machine Learning",
    subtitle: "Learning under uncertainty",
    summary: "Studying the tension between exploring unfamiliar choices and exploiting what a learning agent already believes to be useful.",
    topics: ["Python", "ETC", "UCB", "Regret analysis"],
    highlights: ["Explore-Then-Commit and UCB", "Seeded cumulative-regret comparison"],
    status: "project",
  },
  {
    slug: "shortest-path-algorithms",
    title: "Shortest-Path Algorithms and Heuristic Search",
    field: "Algorithms",
    category: "Algorithms",
    subtitle: "Paths through weighted graphs",
    summary: "An exploration of shortest-path problems and the algorithms used to navigate weighted graph structures.",
    topics: ["Graphs", "Algorithms", "Pathfinding"],
    highlights: ["Dijkstra, Bellman-Ford, and Floyd-Warshall", "A* heuristic search"],
    status: "project",
  },
  {
    slug: "virtual-memory-simulator",
    title: "Virtual Memory Simulator",
    field: "Systems",
    category: "Systems",
    subtitle: "Address translation and memory",
    summary: "A systems project focused on modelling virtual memory concepts and the relationship between logical and physical address spaces.",
    topics: ["Systems", "Memory", "Simulation"],
    highlights: ["Paging and address translation", "TLB and FIFO page replacement"],
    status: "project",
  },
];
