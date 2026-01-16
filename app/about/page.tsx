import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Github } from "lucide-react";
import { siteConstants } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Technical co-pilot for early-stage founders. 20+ years hands-on leadership across startup and scale-up environments.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo placeholder */}
            <div className="order-2 lg:order-1">
              <div className="aspect-square rounded-2xl bg-secondary border border-border overflow-hidden relative">
                <div className="absolute inset-0 bg-grid-subtle" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-mono text-primary">NM</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Your photo here</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <p className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
                About Me
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold mb-6">
                Technical co-pilot for early-stage founders
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                I&apos;m Nick Martin—{siteConstants.credentials.yearsExperience}{" "}
                shipping products across {siteConstants.credentials.background},
                leading teams hands-on, and helping founders turn technical
                challenges into successful launches.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/contact">
                    Work with Me
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="#" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="#" aria-label="GitHub">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">The short version</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I&apos;ve spent my career at the intersection of technology and
                business. I&apos;ve been a founding engineer, a technical lead, a VP
                of Engineering, and an advisor. I&apos;ve raised money, hired teams,
                shipped products, and learned—often the hard way—what makes
                early-stage companies succeed or fail.
              </p>
              <p>
                Today, I help founders who need technical leadership without the
                overhead of a full-time hire. I understand context fast, identify
                blockers, and quietly make things work. Whether that means
                embedding with your team for a sprint, auditing your codebase
                before a raise, or helping you ship a critical launch—I bring the
                experience of someone who&apos;s been in the seat.
              </p>
              <p>
                I&apos;m not an agency. I&apos;m not a generic consultant. I&apos;m a
                technologist who cares about craft and outcomes, available to help
                when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Bring - NEW SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8">What I bring</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="font-semibold mb-2">
                  Hands-on technical leadership
                </h3>
                <p className="text-sm text-muted-foreground">
                  Full-stack capabilities across frontend (React, Next, Vue),
                  backend (Node.js, PHP, Python), and infrastructure (AWS, Docker,
                  CI/CD). I write code, debug production issues, and pair with
                  teams—not just advise from the sidelines.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="font-semibold mb-2">Strategic execution</h3>
                <p className="text-sm text-muted-foreground">
                  20+ years shipping products means I&apos;ve seen the patterns. I
                  identify what matters, cut through complexity, and focus teams on
                  outcomes. From seed-stage MVPs to scaling production systems—I
                  adapt to what your situation needs.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="font-semibold mb-2">Rapid impact</h3>
                <p className="text-sm text-muted-foreground">
                  Drop-in and contribute immediately. I ramp up fast, establish
                  foundations (CI/CD, observability, processes), and unblock teams
                  to ship with confidence. Whether it&apos;s a sprint, a critical
                  launch, or building sustainable delivery—you get momentum quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8">Background</h2>
            <div className="space-y-8">
              <div className="grid md:grid-cols-3 gap-4 p-6 rounded-lg border border-border bg-background">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    2015–Present
                  </p>
                  <h3 className="font-semibold">Technical Advisor</h3>
                </div>
                <div className="md:col-span-2">
                  <p className="text-muted-foreground">
                    Advisory work across fintech, healthcare, e-commerce, and B2B
                    SaaS. Focus on technical strategy, team building, and launch
                    readiness.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 p-6 rounded-lg border border-border bg-background">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    2012–2015
                  </p>
                  <h3 className="font-semibold">VP Engineering, [Company]</h3>
                </div>
                <div className="md:col-span-2">
                  <p className="text-muted-foreground">
                    Scaled engineering team from 5 to 45. Led architecture overhaul
                    that enabled 100x traffic growth. Company acquired for $XXM.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 p-6 rounded-lg border border-border bg-background">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    2008–2012
                  </p>
                  <h3 className="font-semibold">Founding Engineer, [Startup]</h3>
                </div>
                <div className="md:col-span-2">
                  <p className="text-muted-foreground">
                    First technical hire. Built core platform from scratch. Series A
                    to Series C, exit to public company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8">How I work</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Pragmatic over perfect",
                  description:
                    "I optimize for shipping and learning, not theoretical elegance. The right solution is the one that works now and can evolve later.",
                },
                {
                  title: "Context first",
                  description:
                    "Every startup is different. I invest time understanding your specific situation before making recommendations.",
                },
                {
                  title: "Hands-on when needed",
                  description:
                    "I can advise from the sidelines, but I'm also comfortable writing code, debugging production issues, and pairing with your team.",
                },
                {
                  title: "Honest feedback",
                  description:
                    "I'll tell you what I actually think, even when it's not what you want to hear. Sugar-coating doesn't help anyone.",
                },
              ].map((value, index) => (
                <div key={index} className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Let&apos;s talk about your challenges
            </h2>
            <p className="text-muted-foreground mb-8">
              30 minutes, no commitment. Tell me what&apos;s blocking you.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Book a Call
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
