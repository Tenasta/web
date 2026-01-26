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
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");
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
        className="grid gap-8 animate-fade-in-stagger"
        id="projects-grid"
        role="tabpanel"
      >
        {filteredProjects.map((project, index) => (
          <article
            key={project.slug}
            className="group p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
            style={
              {
                "--animation-delay": `${index * 50}ms`,
              } as React.CSSProperties
            }
          >
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left: Meta */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.categories.map((category) => (
                    <span
                      key={category}
                      className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-primary/10 text-primary rounded"
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
