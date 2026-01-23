"use client";

import { Button } from "@/components/ui/button";

interface ProjectFiltersProps {
  categories: string[];
  activeCategory: string;
  onFilterChange: (category: string) => void;
}

export function ProjectFilters({
  categories,
  activeCategory,
  onFilterChange,
}: ProjectFiltersProps) {
  return (
    <div className="flex justify-center mb-12">
      <div
        className="flex gap-2 overflow-x-auto pb-2 px-4"
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
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "mono"}
            size="sm"
            onClick={() => onFilterChange(category)}
            role="tab"
            aria-selected={activeCategory === category}
            aria-controls="projects-grid"
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}
