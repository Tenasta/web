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
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
            Productized services
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Three ways to work together
          </h2>
          <p className="text-muted-foreground">
            Clear scope, predictable outcomes. Pick what fits your situation, or
            let&apos;s design something custom.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className={`relative p-8 rounded-xl border transition-all duration-300 ${
                service.featured
                  ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              {service.featured && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-wider rounded-full">
                  Most Popular
                </div>
              )}

              <service.icon className="w-10 h-10 text-primary mb-6" />

              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>

              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                <span>{service.duration}</span>
                <span>·</span>
                <span className="font-mono text-foreground">{service.price}</span>
              </div>

              <p className="text-muted-foreground mb-6">{service.description}</p>

              <ul className="space-y-2 mb-8">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
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
