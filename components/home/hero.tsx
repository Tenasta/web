import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { siteConstants } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      {/* Subtle background with minimal grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95" />
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Glow effect */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="container-wide relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr,auto]">
          <div className="max-w-3xl">
            {/* Status badge */}
            <div className="fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Available for Q1 engagements
              </span>
            </div>

            {/* Headline */}
            <h1
              className="fade-in-up mb-6 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl"
              style={{ animationDelay: "0.1s" }}
            >
              Your technical blind spots,
              <span className="text-primary"> quietly fixed.</span>
            </h1>

            {/* Subhead */}
            <p
              className="fade-in-up mb-4 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
              style={{ animationDelay: "0.2s" }}
            >
              I help founders ship and evolve real products when it counts -
              while retaining control and building momentum.
            </p>

            {/* Proof line */}
            <p
              className="fade-in-up mb-10 flex gap-2 text-sm text-muted-foreground"
              style={{ animationDelay: "0.3s" }}
            >
              <span className="font-mono text-primary">
                {siteConstants.credentials.heroLine1}
              </span>
              {" · "}
              <span className="font-mono text-primary">
                {siteConstants.credentials.heroLine2}
              </span>
              {" · "}
              <span className="font-mono text-primary">
                {siteConstants.credentials.heroLine3}
              </span>
            </p>

            {/* CTAs */}
            <div
              className="fade-in-up flex flex-col gap-4 sm:flex-row"
              style={{ animationDelay: "0.4s" }}
            >
              <Button variant="hero" size="xl" asChild>
                <Link href="/contact">
                  {siteConstants.cta.discuss}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link href="/ways-to-work-together">Ways to Work Together</Link>
              </Button>
            </div>
          </div>

          {/* Decorative terminal */}
          <div className="hidden lg:block">
            <div className="relative w-72 xl:w-80">
              {/* Terminal-like decoration */}
              <div className="overflow-hidden rounded-lg border border-border/50 bg-card/50 p-4 backdrop-blur">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-destructive/50" />
                  <div className="h-3 w-3 rounded-full bg-accent/50" />
                  <div className="h-3 w-3 rounded-full bg-primary/50" />
                </div>
                <div className="space-y-2 font-mono text-xs text-muted-foreground">
                  <p>
                    <span className="text-primary">→</span> audit.init()
                  </p>
                  <p className="text-muted-foreground/60">
                    analyzing codebase...
                  </p>
                  <p className="text-muted-foreground/60">
                    checking architecture...
                  </p>
                  <p className="text-muted-foreground/60">
                    reviewing team velocity...
                  </p>
                  <p>
                    <span className="text-primary">✓</span> 12 opportunities
                    found
                  </p>
                  <p>
                    <span className="text-primary">✓</span> roadmap.generated
                  </p>
                </div>
              </div>

              {/* Floating nodes */}
              <div
                className="node-dot absolute -left-8 top-1/4"
                style={{ animation: "float 6s ease-in-out infinite" }}
              />
              <div
                className="node-dot absolute -right-4 bottom-1/3"
                style={{
                  animation: "float 6s ease-in-out infinite",
                  animationDelay: "1s",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
