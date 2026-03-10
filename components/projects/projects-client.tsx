"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project, ProjectCategory } from "@/lib/types";
import { getProjectCategories } from "@/lib/adapters/projects";
import { ProjectFilters } from "./project-filters";

interface ProjectsClientProps {
  projects: Project[];
}

export function ProjectsClient({ projects }: ProjectsClientProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">(
    "All"
  );
  const categories = getProjectCategories();

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  return (
    <>
      <ProjectFilters
        categories={categories}
        activeCategory={activeCategory}
        onFilterChange={setActiveCategory}
        projectCount={filteredProjects.length}
      />

      <div
        key={activeCategory}
        className="animate-fade-in-stagger grid gap-8"
        id="projects-grid"
        role="tabpanel"
      >
        {filteredProjects.map((project, index) => (
          <article
            key={project.slug}
            className="group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50"
            style={
              {
                "--animation-delay": `${index * 50}ms`,
              } as React.CSSProperties
            }
          >
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Left: Meta */}
              <div>
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {project.categories.map((category) => (
                    <span
                      key={category}
                      className="rounded bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <div className="mb-4">
                  {project.logo ? (
                    <Image
                      src={project.logo}
                      alt={project.title}
                      width={160}
                      height={64}
                      className="h-16 object-contain object-left"
                    />
                  ) : (
                    <h2 className="text-2xl font-semibold">{project.title}</h2>
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
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-secondary px-2 py-1 font-mono text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Impact */}
              <div className="lg:border-l lg:border-border lg:pl-8">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
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
