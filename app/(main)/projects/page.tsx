import type { Metadata } from "next";
import { projects, siteConstants } from "@/lib/content";
import { PageHero } from "@/components/shared/page-hero";
import { PageCTA } from "@/components/shared/page-cta";
import { ProjectsClient } from "@/components/projects/projects-client";

export const metadata: Metadata = {
  title: siteConstants.portfolio.metaTitle,
  description: siteConstants.portfolio.metaDescription,
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        badge={siteConstants.portfolio.badge}
        title={siteConstants.portfolio.title}
        description={siteConstants.portfolio.description}
      />

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ProjectsClient projects={projects} />
        </div>
      </section>

      <PageCTA
        title="Have a similar challenge?"
        description="Let's discuss how I can help unblock your team."
        buttonText="Start a Conversation"
      />
    </>
  );
}
