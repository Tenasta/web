import { Hero } from "@/components/home/hero";
import { Scenarios } from "@/components/home/scenarios";
import { ServicesPreview } from "@/components/home/services-preview";
import { PortfolioPreview } from "@/components/home/portfolio-preview";
import { PlaybooksTeaser } from "@/components/home/playbooks-teaser";
import { ContactCTA } from "@/components/home/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Scenarios />
      <ServicesPreview />
      <PortfolioPreview />
      <PlaybooksTeaser />
      <ContactCTA />
    </>
  );
}
