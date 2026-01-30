import type { Project, ProjectPreview, ProjectCategory } from "@/lib/types";
import { PROJECT_CATEGORIES } from "@/lib/content/categories";

/**
 * Transforms full project data into preview format for home page
 * Filters by featured flag and transforms to preview format
 */
export function toProjectsPreview(
  projects: Project[]
): ProjectPreview[] {
  return projects
    .filter((p) => p.featured === true)
    .map((project) => ({
      slug: project.slug,
      title: project.title,
      description: project.description,
      categories: project.categories,
      impact: project.impact[0],
      tags: project.tags,
      logo: project.logo,
    }));
}

/**
 * Returns all available project categories in consistent order
 * Categories are defined in constants/categories.ts as single source of truth
 */
export function getProjectCategories(): readonly ProjectCategory[] {
  return PROJECT_CATEGORIES;
}
