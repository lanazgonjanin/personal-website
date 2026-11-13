export const education = [
  {
    institution: "University of Toronto",
    degree: "MSc Applied Computing",
    dates: "September 2026 – December 2027 (Expected)",
    coursework: [
      "Introduction to Machine Learning",
      "Neural Networks and Deep Learning",
      "Computational Imaging",
    ],
  },
  {
    institution: "McMaster University",
    degree: "BSc Honours Mathematics and Computer Science",
    dates: "September 2021 – April 2026",
    gpa: "3.9/4.0",
    awards: [
      {
        name: "Dr. John Potter Scholarship",
        description: "Awarded to five students enrolled in a Physics or Mathematics program who attain a high fall and winter average.",
      },
      {
        name: "James Stewart Research Award",
        description: "Awarded to work under Dr. Kathryn Murphy as a data analyst and student researcher.",
      },
      {
        name: "Golden Key International Honour Society",
        description: "Membership in the society awarded to students in the top 15% of their program.",
      },
      {
        name: "Dean's Honour List",
        description: "Awarded to students who achieve a minimum average of 3.5/4.0 across 30.0 units.",
      },
      {
        name: "Faculty of Science Achievement Award",
        description: "Awarded to students entering their first year in the Faculty of Science with a secondary school average above 95%.",
      },
    ],
    coursework: [
      "Data Structures and Algorithms",
      "Operating Systems",
      "Databases",
      "Software Design",
      "Reinforcement Learning",
      "Mathematical Modelling",
      "Multivariable Calculus",
      "Linear Algebra",
      "Probability and Statistics",
    ],
  },
];

export const technologyGroups = [
  { label: "Languages", technologies: ["Python", "C/C++", "Java", "JavaScript/TypeScript", "SQL", "R", "Bash"] },
  { label: "ML & Scientific Computing", technologies: ["PyTorch", "scikit-learn", "OpenCV", "NumPy", "Pandas", "SciPy"] },
  { label: "Web Development", technologies: ["React", "Next.js", "Node.js"] },
  { label: "Databases & Systems", technologies: ["SQLite", "Linux/Unix"] },
  { label: "Developer Tools", technologies: ["Git", "pytest"] },
];

export const experience = [
  {
    role: "Teaching Assistant",
    organization: "McMaster University",
    dates: "January–April 2026",
    location: "Hamilton, ON",
    details: [
      "Led weekly tutorials for 30–50 students in COMPSCI 2DB3 (Databases), teaching SQL, relational schema design, normalization, and query optimization.",
      "Evaluated 100+ assignments and supported students through office hours and online platforms.",
    ],
  },
  {
    role: "Data Analyst",
    organization: "Visual Neuroscience Lab",
    dates: "May–August 2025",
    location: "Hamilton, ON",
    details: [
      "Optimized Fréchet distance computations across protein-expression trajectories, distributing workloads across six CPU workers and achieving a 75% runtime reduction through parallelization and batching.",
      "Restored functionality of the bMIND Bayesian deconvolution model by addressing covariance matrix incompatibilities through modified prior inputs and parameter tuning, enabling cell-type-specific gene expression estimation.",
      "Validated bMIND gene expression estimates using DABEST bootstrap analysis, achieving a near-zero median difference between reconstructed pseudobulk and observed bulk data.",
      "Developed a relational SQLite database to resolve inefficient access to Allen Institute neuroscience datasets, streamlining data retrieval and creating tutorials for non-technical researchers.",
    ],
  },
];

export const publications = [
  {
    type: "University research feature",
    title: "Advancing Computational Methods for Brain Transcriptomics and Data Analysis",
    venue: "McMaster University Department of Mathematics and Statistics",
    date: "August 2025",
    href: "https://math.mcmaster.ca/undergraduate/useful-links/stewart-fund-award-winners/",
  },
  {
    type: "Journal publication",
    title: "Treatment of Alzheimer's Disease using Axitinib",
    venue: "McMaster Brain Research Society Journal, Volume 4",
    date: "April 2024",
    href: "https://journals.mcmaster.ca/macbrs/issue/view/215",
  },
];
