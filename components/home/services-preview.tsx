import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services as fullServices } from "@/lib/content";
import { toServicesPreview } from "@/lib/adapters/services";

const services = toServicesPreview(fullServices);

export function ServicesPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-primary">
            Retain control and build momentum
          </p>
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Three ways to work together
          </h2>
          <p className="text-muted-foreground">
            Clear scope, predictable outcomes. Pick what fits your situation, or
            let&apos;s chat about your unique sitution.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className={`relative rounded-xl border p-8 transition-all duration-300 ${
                service.featured
                  ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              {service.featured && (
                <div className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 font-mono text-xs uppercase tracking-wider text-primary-foreground">
                  Most Popular
                </div>
              )}

              <service.icon className="mb-6 h-10 w-10 text-primary" />

              <div className="mb-2 flex items-baseline gap-2">
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>

              <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span>{service.duration}</span>
                <span>·</span>
                <span className="font-mono text-foreground">
                  {service.price}
                </span>
              </div>

              <p className="mb-6 text-muted-foreground">
                {service.description}
              </p>

              <ul className="mb-8 space-y-2">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={service.featured ? "default" : "outline"}
                className="w-full"
                asChild
              >
                <Link href="/contact">{service.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
