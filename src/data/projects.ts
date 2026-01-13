export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github?: string;
};

export const projects: Project[] = [
  {
    slug: "daa-algorithms",
    title: "Algorithm Analysis Project",
    description:
      "Implementation and analysis of algorithms with performance comparison.",
    longDescription:
      "This project focuses on the implementation and analysis of algorithms to solve optimization problems. Different approaches were compared in terms of time complexity, efficiency, and trade-offs, with an emphasis on correctness and performance evaluation.",
    tags: ["Algorithms", "Python", "Complexity Analysis", "Optimization"],
    github: "https://github.com/horus137/daa",
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    description:
      "Data engineering project demonstrating an ELT pipeline using MongoDB.",
    longDescription:
      "A data-oriented project focused on ingesting, transforming and analyzing expense data using Python and MongoDB, following an ELT-style workflow.",
    tags: ["Python", "MongoDB", "Data Engineering"],
    github: "https://github.com/horus137/expense-tracker",
  },
];
