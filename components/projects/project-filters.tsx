"use client";

import { Button } from "@/components/ui/button";
import type { ProjectCategory } from "@/lib/types";
import { CATEGORY_DESCRIPTIONS } from "@/lib/content/categories";

interface ProjectFiltersProps {
  categories: readonly ProjectCategory[];
  activeCategory: ProjectCategory | "All";
  onFilterChange: (category: ProjectCategory | "All") => void;
  projectCount: number;
}

export function ProjectFilters({
  categories,
  activeCategory,
  onFilterChange,
  projectCount,
}: ProjectFiltersProps) {
  const description = CATEGORY_DESCRIPTIONS[activeCategory];

  return (
    <div className="mb-12">
      {/* Filter chips */}
      <div className="mb-6 flex justify-center">
        <div
          className="flex flex-wrap justify-center gap-2 px-4"
          role="tablist"
          aria-label="Project category filters"
        >
          <Button
            variant={activeCategory === "All" ? "default" : "mono"}
            size="sm"
            onClick={() => onFilterChange("All")}
            role="tab"
            aria-selected={activeCategory === "All"}
            aria-controls="projects-grid"
            className="font-mono text-xs uppercase tracking-wider"
          >
            All
          </Button>
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <Button
                key={category}
                variant={isActive ? "default" : "mono"}
                size="sm"
                onClick={() => onFilterChange(category)}
                role="tab"
                aria-selected={isActive}
                aria-controls="projects-grid"
                className="whitespace-nowrap font-mono text-xs uppercase tracking-wider"
              >
                {category}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Description + count */}
      <div
        key={activeCategory}
        className="animate-fade-slide-in mx-auto max-w-3xl px-4 text-center"
      >
        <p className="mb-2 leading-relaxed text-muted-foreground">
          {description}
        </p>
        <p className="font-mono text-sm text-primary">
          Showing {projectCount} {projectCount === 1 ? "project" : "projects"}
        </p>
      </div>
    </div>
  );
}
