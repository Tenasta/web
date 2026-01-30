import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/lib/content";
import { PageHero } from "@/components/shared/page-hero";
import { PageCTA } from "@/components/shared/page-cta";

export const metadata: Metadata = {
  title: "Ways to work together",
  description:
    "Clear scope, predictable outcomes. Suggestions of ways to work together for early-stage founders.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Ways to work together"
        title="Clear scope. Predictable outcomes."
        description="Three bundles of suggested ways to work together. Pick what fits your situation, or let's design something custom based on your needs."
      />

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid items-start gap-12 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="mb-6 flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    {service.featured && (
                      <span className="rounded-full bg-primary px-3 py-1 font-mono text-xs uppercase tracking-wider text-primary-foreground">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <h2 className="mb-2 text-3xl font-semibold">
                    {service.title}
                  </h2>
                  <p className="mb-4 text-lg text-muted-foreground">
                    {service.subtitle}
                  </p>

                  <div className="mb-6 flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">
                      {service.duration}
                    </span>
                    <span className="text-muted-foreground">·</span>
                    <span className="font-mono text-foreground">
                      {service.price}
                    </span>
                  </div>

                  <p className="mb-8 leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <Button
                    variant={service.featured ? "default" : "default"}
                    size="lg"
                    asChild
                  >
                    <Link href="/contact">
                      {service.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Details Card */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="rounded-xl border border-border bg-card p-6">
                    <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      What you get
                    </h3>
                    <ul className="space-y-3">
                      {service.whatYouGet.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-border bg-card p-6">
                    <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      Ideal for
                    </h3>
                    <ul className="space-y-3">
                      {service.idealFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Need something different?"
        description="These packages work for most situations, but every startup is unique. Let's talk about what you actually need."
        buttonText="Discuss Custom Engagement"
        variant="outline"
      />
    </>
  );
}
