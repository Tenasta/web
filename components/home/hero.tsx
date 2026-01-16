import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { siteConstants } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Subtle background with minimal grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-[1fr,auto] gap-12 items-center">
          <div className="max-w-3xl">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border mb-8 fade-in-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Available for Q1 engagements
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-6 fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Your technical blind spots,
              <span className="text-primary"> quietly fixed.</span>
            </h1>

            {/* Subhead */}
            <p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-4 fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Drop-in technical co-pilot for early-stage founders. I understand
              your context fast, unblock your team, and make your product
              work—without the overhead of a full-time hire.
            </p>

            {/* Proof line */}
            <p
              className="text-sm text-muted-foreground mb-10 fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <span className="font-mono text-primary">
                {siteConstants.credentials.heroLine1}
              </span>{" · "}
              <span className="font-mono text-primary">
                {siteConstants.credentials.heroLine2}
              </span>{" · "}
              <span className="font-mono text-primary">
                {siteConstants.credentials.heroLine3}
              </span>
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button variant="hero" size="xl" asChild>
                <Link href="/contact">
                  Request a Readiness Audit
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link href="/playbooks">Browse Playbooks</Link>
              </Button>
            </div>
          </div>

          {/* Decorative terminal */}
          <div className="hidden lg:block">
            <div className="relative w-72 xl:w-80">
              {/* Terminal-like decoration */}
              <div className="border border-border/50 rounded-lg bg-card/50 backdrop-blur p-4 overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive/50" />
                  <div className="w-3 h-3 rounded-full bg-accent/50" />
                  <div className="w-3 h-3 rounded-full bg-primary/50" />
                </div>
                <div className="font-mono text-xs space-y-2 text-muted-foreground">
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
                className="absolute -left-8 top-1/4 node-dot"
                style={{ animation: "float 6s ease-in-out infinite" }}
              />
              <div
                className="absolute -right-4 bottom-1/3 node-dot"
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
