import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/lib/content";
import { PageHero } from "@/components/shared/page-hero";
import { PageCTA } from "@/components/shared/page-cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Clear scope, predictable outcomes. Three productized consulting services for early-stage founders.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Services"
        title="Clear scope. Predictable outcomes."
        description="Three productised ways to work together. Pick what fits your situation, or let's design something custom based on your needs."
      />

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    {service.featured && (
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-wider rounded-full">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <h2 className="text-3xl font-semibold mb-2">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    {service.subtitle}
                  </p>

                  <div className="flex items-center gap-4 mb-6 text-sm">
                    <span className="text-muted-foreground">
                      {service.duration}
                    </span>
                    <span className="text-muted-foreground">·</span>
                    <span className="font-mono text-foreground">
                      {service.price}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <Button variant={service.featured ? "default" : "default"} size="lg" asChild>
                    <Link href="/contact">
                      {service.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                {/* Details Card */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="p-6 rounded-xl border border-border bg-card">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                      What you get
                    </h3>
                    <ul className="space-y-3">
                      {service.whatYouGet.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl border border-border bg-card">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                      Ideal for
                    </h3>
                    <ul className="space-y-3">
                      {service.idealFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
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
