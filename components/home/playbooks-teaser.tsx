import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { playbooks as allPlaybooks } from "@/lib/content";

const playbooks = allPlaybooks.slice(0, 3);

export function PlaybooksTeaser() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
              Free resources
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Playbooks for founders
            </h2>
            <p className="text-muted-foreground mb-8">
              Distilled lessons from 15+ years and 40+ startups. Tactical guides
              you can apply today—no fluff, no gating.
            </p>
            <Button asChild>
              <Link href="/playbooks">
                Browse All Playbooks
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Right: Playbook Cards */}
          <div className="space-y-4">
            {playbooks.map((playbook, index) => (
              <Link
                key={index}
                href="/playbooks"
                className="group flex items-start gap-4 p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-secondary">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold group-hover:text-primary transition-colors mb-1">
                    {playbook.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {playbook.description}
                  </p>
                </div>
                <div className="text-xs text-muted-foreground font-mono shrink-0">
                  {playbook.readTime}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
