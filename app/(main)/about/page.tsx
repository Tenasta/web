import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { aboutContent, siteConstants } from "@/lib/content";

export const metadata: Metadata = {
  title: aboutContent.meta.title,
  description: aboutContent.meta.description,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-grid relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center gap-8 text-center md:flex-row md:gap-12 md:text-left">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg md:h-48 md:w-48">
                  <Image
                    src={aboutContent.hero.avatar}
                    alt="Nick Martin-Kruck"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="mb-4 font-mono text-xs uppercase tracking-wider text-primary">
                  {aboutContent.hero.badge}
                </p>
                <h1 className="mb-6 text-4xl font-semibold md:text-5xl">
                  {aboutContent.hero.title}
                </h1>

                {aboutContent.hero.description.map((para, index) => (
                  <p
                    key={index}
                    className="mb-8 text-lg text-muted-foreground md:text-xl"
                  >
                    {para}
                  </p>
                ))}

                <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                  <Button asChild>
                    <Link href="/contact">
                      Work with Me
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href={`mailto:${siteConstants.contact.email}`}
                      className="flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4" />
                      Email
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      {aboutContent.capabilities.enabled && (
        <section className="bg-card py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-2xl font-semibold">
                {aboutContent.capabilities.title}
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {aboutContent.capabilities.items.map((capability, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-border bg-background p-6"
                  >
                    <h3 className="mb-3 font-semibold">{capability.title}</h3>
                    <p className="mb-2 text-sm text-muted-foreground">
                      {capability.skills}
                    </p>
                    {capability.experience && (
                      <p className="text-xs text-muted-foreground/70">
                        {capability.experience}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How I Work */}
      {aboutContent.workingStyle.enabled && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-2xl font-semibold">
                {aboutContent.workingStyle.title}
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {aboutContent.workingStyle.items.map((value, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-border bg-background p-6"
                  >
                    <h3 className="mb-2 font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Experience Highlights */}
      {aboutContent.experience.enabled && (
        <section className="bg-card py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-2xl font-semibold">
                {aboutContent.experience.title}
              </h2>
              <div className="space-y-8">
                {aboutContent.experience.items.map((exp, index) => (
                  <div
                    key={index}
                    className="grid gap-4 rounded-lg border border-border bg-background p-6 md:grid-cols-3"
                  >
                    <div>
                      <p className="mb-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        {exp.period}
                      </p>
                      <h3 className="font-semibold">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground">
                        {exp.company}
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-semibold">
              {aboutContent.cta.title}
            </h2>
            <p className="mb-8 text-muted-foreground">
              {aboutContent.cta.description}
            </p>
            <Button size="lg" asChild>
              <Link href={aboutContent.cta.buttonHref}>
                {aboutContent.cta.buttonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
