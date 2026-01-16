import type { Metadata } from "next";
import { projects } from "@/lib/content";
import { PageHero } from "@/components/shared/page-hero";
import { PageCTA } from "@/components/shared/page-cta";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Real engagements where I helped early-stage teams break through technical barriers.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        badge="Selected Projects"
        title="Products launched, problems solved"
        description="Real engagements where I helped early-stage teams break through technical barriers. Names anonymized to respect client privacy."
      />

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {projects.map((project, index) => (
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
                    <h2 className="text-2xl font-semibold mb-4">
                      {project.title}
                    </h2>
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
        </div>
      </section>

      <PageCTA
        title="Have a similar challenge?"
        description="Let's discuss how I can help unblock your team."
        buttonText="Start a Conversation"
      />
    </>
  );
}
