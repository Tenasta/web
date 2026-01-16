import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { playbooks } from "@/lib/content";
import { PageHero } from "@/components/shared/page-hero";
import { PageCTA } from "@/components/shared/page-cta";

export const metadata: Metadata = {
  title: "Playbooks",
  description:
    "Tactical guides for founders. Distilled lessons from 15+ years and 40+ startups.",
};

export default function PlaybooksPage() {
  return (
    <>
      <PageHero
        badge="Playbooks"
        title="Tactical guides for founders"
        description="Distilled lessons from 15+ years and 40+ startups. No fluff, no email gates—just practical frameworks you can apply today."
      />

      {/* Playbooks Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {playbooks.map((playbook) => (
              <Link
                key={playbook.slug}
                href={`/playbooks/${playbook.slug}`}
                className="group flex flex-col p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-secondary">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    {playbook.category}
                  </span>
                </div>

                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {playbook.title}
                </h2>

                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {playbook.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {playbook.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono bg-secondary rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {playbook.readTime}
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Want personalized guidance?"
        description="These playbooks are starting points. For tailored advice on your specific situation, let's talk."
        buttonText="Book a Call"
      />
    </>
  );
}
