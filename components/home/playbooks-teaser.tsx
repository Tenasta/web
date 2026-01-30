import Link from "next/link";
import { ArrowRight, FileText, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingTopics = [
  {
    icon: FileText,
    title: "Managing Technical Debt",
    description:
      "Strategies for addressing tech debt without stalling feature development",
  },
  {
    icon: Users,
    title: "Hiring Your First Engineer",
    description: "How to evaluate, hire, and onboard when you're non-technical",
  },
  {
    icon: Rocket,
    title: "Launching Under Pressure",
    description:
      "Frameworks for prioritizing and shipping when timelines are tight",
  },
];

export function PlaybooksTeaser() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Content */}
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-primary">
              Coming Soon
            </p>
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              Playbooks for founders
            </h2>
            <p className="mb-8 text-muted-foreground">
              Tactical guides distilled from years of building products.
              Practical frameworks you can apply today - no fluff, no gating.
            </p>
            <Button asChild>
              <Link href="/playbooks">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Right: Upcoming Topics */}
          <div className="space-y-4">
            {upcomingTopics.map((topic, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-lg border border-border bg-card p-4"
              >
                <div className="rounded-lg bg-secondary p-2">
                  <topic.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-1 font-semibold">{topic.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {topic.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
