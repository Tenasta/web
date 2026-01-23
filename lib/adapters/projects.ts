import type { ProjectExtended, ProjectPreview } from "@/lib/types";

/**
 * Transforms full project data into preview format for home page
 * Filters by featured flag and transforms to preview format
 */
export function toProjectsPreview(
  projects: ProjectExtended[]
): ProjectPreview[] {
  return projects
    .filter((p) => p.featured === true)
    .map((project) => ({
      slug: project.slug,
      title: project.title,
      description: project.description,
      category: project.category,
      impact: project.impact[0],
      tags: project.tags,
      logo: project.logo,
    }));
}

/**
 * Extracts unique categories from projects array
 * Used for generating filter options
 */
export function getUniqueCategories(projects: ProjectExtended[]): string[] {
  const categories = projects.map((p) => p.category);
  return Array.from(new Set(categories));
}
