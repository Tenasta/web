import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects as fullProjects } from "@/lib/content";
import { toProjectsPreview } from "@/lib/adapters/projects";

const projects = toProjectsPreview(fullProjects);

export function PortfolioPreview() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
              Selected work
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Problems solved, products shipped
            </h2>
            <p className="text-muted-foreground">
              A sample of engagements where I helped early-stage teams break
              through technical barriers and ship.
            </p>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View all projects
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              href="/projects"
              className="group p-6 rounded-lg border border-border bg-background hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono bg-secondary rounded"
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
