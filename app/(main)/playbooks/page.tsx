import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { siteConstants } from "@/lib/content";

export const metadata: Metadata = {
  title: "Playbooks",
  description:
    "Tactical guides for founders. Distilled lessons from years of building products.",
};

export default function PlaybooksPage() {
  return (
    <>
      <PageHero
        badge="Playbooks"
        title="Tactical guides for founders"
        description="Distilled lessons from years of building products. Practical frameworks you can apply to your startup."
      />

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>

            <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
              Coming Soon
            </h2>

            <p className="mb-8 text-lg text-muted-foreground">
              I&apos;m currently working on a collection of tactical playbooks
              covering topics like technical debt management, hiring your first
              engineer, and launching under pressure. In the meantime,
              let&apos;s talk about your specific challenges.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  {siteConstants.cta.discuss}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/ways-to-work-together">Ways to Work Together</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
