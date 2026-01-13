import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectDetail from "@/components/sections/ProjectDetail";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

/* 🔹 METADATA DINÂMICA */
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project not found | João Vale",
    };
  }

  return {
    title: `${project.title} | João Vale`,
    description: project.description,
  };
}

/* 🔹 PÁGINA */
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
