import { ArrowRight } from "lucide-react";
import { scenarios } from "@/lib/content";

export function Scenarios() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
            When to reach out
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Recognize any of these?
          </h2>
          <p className="text-muted-foreground">
            These are the moments when a technical co-pilot pays for itself. I&apos;ve
            seen each pattern dozens of times—and know how to break through.
          </p>
        </div>

        {/* Scenarios Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-border bg-background hover:border-primary/50 transition-all duration-300"
            >
              <scenario.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{scenario.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {scenario.description}
              </p>
              <p className="text-sm text-foreground font-medium flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                {scenario.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
