import Link from "next/link";
import { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectDetail({ project }: Props) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      {/* BACK LINK */}
      <Link
        href="/projects"
        className="
          mb-6 inline-block text-sm
          text-neutral-600 dark:text-neutral-400
          hover:text-foreground
          transition
        "
      >
        ← Back to projects
      </Link>

      {/* TÍTULO */}
      <h1 className="mb-4 text-3xl font-bold text-foreground">
        {project.title}
      </h1>

      {/* DESCRIÇÃO LONGA */}
      <p className="mb-8 text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {project.longDescription}
      </p>

      {/* TAGS */}
      <div className="mb-10 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="
              rounded-md bg-neutral-100 dark:bg-neutral-900
              px-3 py-1 text-xs
              text-neutral-700 dark:text-neutral-300
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* WHAT I LEARNED */}
      <div className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          What I learned
        </h2>

        <ul className="list-disc pl-5 space-y-2 text-neutral-600 dark:text-neutral-400">
          <li>How to analyze and compare algorithms using time complexity.</li>
          <li>The trade-offs between different algorithmic approaches.</li>
          <li>How implementation details can significantly impact performance.</li>
          <li>Writing clear, structured, and testable algorithmic code.</li>
        </ul>
      </div>

      {/* LINK GITHUB */}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="
            inline-block rounded-md px-5 py-2 text-sm font-medium
            border border-neutral-300 dark:border-neutral-700
            text-neutral-800 dark:text-neutral-200
            hover:bg-neutral-100 dark:hover:bg-neutral-800
            transition
          "
        >
          View on GitHub
        </a>
      )}
    </section>
  );
}
