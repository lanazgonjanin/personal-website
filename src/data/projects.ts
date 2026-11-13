export type Project = {
  slug: string;
  title: string;
  field: string;
  subtitle: string;
  summary: string;
  topics: string[];
  status: "featured" | "project";
};

export const projects: Project[] = [
  {
    slug: "polyglot",
    title: "Polyglot",
    field: "Artificial intelligence",
    subtitle: "Real-time AI language tutor",
    summary: "A real-time AI language tutor project, with implementation details and interaction design to be documented in a future case study.",
    topics: ["AI", "Language learning", "Real-time interaction"],
    status: "project",
  },
  {
    slug: "parallax",
    title: "Parallax",
    field: "Computer vision",
    subtitle: "Monocular visual odometry",
    summary: "Exploring how a moving camera can estimate its own trajectory from a sequence of images—turning visual change into spatial understanding.",
    topics: ["Geometry", "Motion", "Perception"],
    status: "featured",
  },
  {
    slug: "ekgram",
    title: "EKGram",
    field: "Signal processing",
    subtitle: "ECG digitization",
    summary: "Investigating the path from paper electrocardiograms to structured digital signals that can be studied computationally.",
    topics: ["Signals", "Digitization", "Computer vision"],
    status: "featured",
  },
  {
    slug: "multi-armed-bandits",
    title: "Multi-Armed Bandits",
    field: "Reinforcement learning",
    subtitle: "Learning under uncertainty",
    summary: "Studying the tension between exploring unfamiliar choices and exploiting what a learning agent already believes to be useful.",
    topics: ["Exploration", "Exploitation", "Decision-making"],
    status: "project",
  },
  {
    slug: "shortest-path-algorithms",
    title: "Shortest-Path Algorithms and Heuristic Search",
    field: "Algorithms",
    subtitle: "Paths through weighted graphs",
    summary: "An exploration of shortest-path problems and the algorithms used to navigate weighted graph structures.",
    topics: ["Graphs", "Algorithms", "Pathfinding"],
    status: "project",
  },
  {
    slug: "virtual-memory-simulator",
    title: "Virtual Memory Simulator",
    field: "Systems",
    subtitle: "Address translation and memory",
    summary: "A systems project focused on modelling virtual memory concepts and the relationship between logical and physical address spaces.",
    topics: ["Systems", "Memory", "Simulation"],
    status: "project",
  },
];
