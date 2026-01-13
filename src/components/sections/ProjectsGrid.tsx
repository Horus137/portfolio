import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="mb-12 text-3xl font-bold text-foreground">
        Projects
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="
              rounded-xl border
              border-neutral-200 dark:border-neutral-800
              p-6
            "
          >
            {/* TÍTULO */}
            <Link
              href={`/projects/${project.slug}`}
              className="
                mb-2 inline-block text-xl font-semibold
                text-foreground
                hover:underline
              "
            >
              {project.title}
            </Link>

            {/* DESCRIÇÃO */}
            <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
              {project.description}
            </p>

            {/* TAGS */}
            <div className="mb-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-md bg-neutral-100 dark:bg-neutral-900
                    px-2 py-1 text-xs
                    text-neutral-700 dark:text-neutral-300
                  "
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* BOTÃO */}
            <Link
              href={`/projects/${project.slug}`}
              className="
                inline-flex items-center gap-1
                text-sm font-medium
                text-neutral-700 dark:text-neutral-300
                hover:text-foreground
                transition
              "
            >
              View details
              <span aria-hidden>→</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
