import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingTopics = [
  {
    icon: FileText,
    title: "Managing Technical Debt",
    description: "Strategies for addressing tech debt without stalling feature development",
  },
  {
    icon: Users,
    title: "Hiring Your First Engineer",
    description: "How to evaluate, hire, and onboard when you're non-technical",
  },
  {
    icon: Rocket,
    title: "Launching Under Pressure",
    description: "Frameworks for prioritizing and shipping when timelines are tight",
  },
];

export function PlaybooksTeaser() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
              Coming Soon
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Playbooks for founders
            </h2>
            <p className="text-muted-foreground mb-8">
              Tactical guides distilled from years of building products. Practical frameworks you can apply today—no fluff, no gating.
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
                className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card"
              >
                <div className="p-2 rounded-lg bg-secondary">
                  <topic.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold mb-1">
                    {topic.title}
                  </h3>
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
