import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Mail } from "lucide-react";
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
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Coming Soon
            </h2>

            <p className="text-muted-foreground mb-8 text-lg">
              I'm currently working on a collection of tactical playbooks covering topics like technical debt management, hiring your first engineer, and launching under pressure. Sign up below to be notified when they're ready.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href={`mailto:${siteConstants.contact.email}?subject=Playbooks Interest`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Get Notified
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/ways-to-work-together">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
