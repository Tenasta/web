import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects as fullProjects, siteConstants } from "@/lib/content";
import { toProjectsPreview } from "@/lib/adapters/projects";

const projects = toProjectsPreview(fullProjects);

export function PortfolioPreview() {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-primary">
              {siteConstants.portfolio.badge}
            </p>
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              {siteConstants.portfolio.title}
            </h2>
            <p className="text-muted-foreground">
              {siteConstants.portfolio.description}
            </p>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              key={index}
              href="/projects"
              className="group rounded-lg border border-border bg-background p-6 transition-all duration-300 hover:border-primary/50"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap gap-1">
                    {project.categories.map((category) => (
                      <span
                        key={category}
                        className="px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-primary/10 text-primary rounded"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  {project.logo ? (
                    <Image
                      src={project.logo}
                      alt={project.title}
                      width={120}
                      height={48}
                      className="h-12 object-contain object-left"
                    />
                  ) : (
                    <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                  )}
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>

              <p className="mb-4 text-muted-foreground">
                {project.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-secondary px-2 py-1 font-mono text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-medium text-primary">
                  {project.impact}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
