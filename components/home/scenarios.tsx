import { ArrowRight } from "lucide-react";
import { scenarios } from "@/lib/content";

export function Scenarios() {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-primary">
            When to reach out
          </p>
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Recognize any of these?
          </h2>
          <p className="text-muted-foreground">
            These are the moments when a technical co-pilot pays for itself. I
            understand your context fast, unblock your team, and make your
            product work—without the overhead of a full-time hire.
          </p>
        </div>

        {/* Scenarios Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className="group rounded-lg border border-border bg-background p-6 transition-all duration-300 hover:border-primary/50"
            >
              <scenario.icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">{scenario.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                {scenario.description}
              </p>
              <p className="flex items-start gap-2 text-sm font-medium text-foreground">
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {scenario.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
