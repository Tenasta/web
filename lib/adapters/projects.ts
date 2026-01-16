import type { ProjectExtended, ProjectPreview } from "@/lib/types";

/**
 * Transforms full project data into preview format for home page
 * Takes first 4 projects, first impact item, and all tags
 */
export function toProjectsPreview(
  projects: ProjectExtended[]
): ProjectPreview[] {
  return projects.slice(0, 4).map((project) => ({
    slug: project.slug,
    title: project.title,
    description: project.description,
    category: project.category,
    impact: project.impact[0],
    tags: project.tags,
  }));
}
