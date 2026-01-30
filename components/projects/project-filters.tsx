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
      <div className="flex justify-center mb-6">
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
                className="font-mono text-xs uppercase tracking-wider whitespace-nowrap"
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
        className="max-w-3xl mx-auto px-4 text-center animate-fade-slide-in"
      >
        <p className="text-muted-foreground leading-relaxed mb-2">
          {description}
        </p>
        <p className="text-sm font-mono text-primary">
          Showing {projectCount} {projectCount === 1 ? "project" : "projects"}
        </p>
      </div>
    </div>
  );
}
