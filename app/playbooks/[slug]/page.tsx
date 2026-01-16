import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, BookOpen, ArrowRight } from "lucide-react";
import { playbooks, playbooksContent } from "@/lib/content";

interface PlaybookPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return playbooks.map((playbook) => ({
    slug: playbook.slug,
  }));
}

export async function generateMetadata({
  params,
}: PlaybookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const playbook = playbooksContent[slug];

  if (!playbook) {
    return {
      title: "Playbook Not Found",
    };
  }

  return {
    title: playbook.title,
    description: playbook.introduction,
  };
}

export default async function PlaybookPage({ params }: PlaybookPageProps) {
  const { slug } = await params;
  const playbook = playbooksContent[slug];

  if (!playbook) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <section className="py-20 bg-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <Link
            href="/playbooks"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Playbooks
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-secondary">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              {playbook.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            {playbook.title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {playbook.readTime}
            </div>
            <span>Updated {playbook.lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              {playbook.introduction}
            </p>

            {playbook.sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </article>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Want personalized guidance?
            </p>
            <Button asChild>
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to audit your MVP?
          </h2>
          <p className="text-muted-foreground mb-8">
            Get a professional readiness audit with prioritized recommendations.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Request a Readiness Audit
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
