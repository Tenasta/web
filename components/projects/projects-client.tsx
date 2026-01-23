"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProjectExtended } from "@/lib/types";
import { getUniqueCategories } from "@/lib/adapters/projects";
import { ProjectFilters } from "./project-filters";

interface ProjectsClientProps {
  projects: ProjectExtended[];
}

export function ProjectsClient({ projects }: ProjectsClientProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = getUniqueCategories(projects);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <ProjectFilters
        categories={categories}
        activeCategory={activeCategory}
        onFilterChange={setActiveCategory}
      />

      <div className="grid gap-8" id="projects-grid" role="tabpanel">
        {filteredProjects.map((project, index) => (
          <article
            key={index}
            className="group p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
          >
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left: Meta */}
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-primary mb-2">
                  {project.category}
                </p>
                <div className="mb-4">
                  {project.logo ? (
                    <Image
                      src={project.logo}
                      alt={project.title}
                      width={160}
                      height={64}
                      className="object-contain object-left h-16"
                    />
                  ) : (
                    <h2 className="text-2xl font-semibold">
                      {project.title}
                    </h2>
                  )}
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <span className="text-foreground">Client:</span>{" "}
                    {project.client}
                  </p>
                  <p>
                    <span className="text-foreground">Duration:</span>{" "}
                    {project.duration}
                  </p>
                </div>
              </div>

              {/* Middle: Description */}
              <div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono bg-secondary rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Impact */}
              <div className="lg:border-l lg:border-border lg:pl-8">
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                  Impact
                </h3>
                <ul className="space-y-2">
                  {project.impact.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
