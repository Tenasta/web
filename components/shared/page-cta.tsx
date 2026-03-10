import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PageCTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
  variant?: "default" | "outline";
}

export function PageCTA({
  title,
  description,
  buttonText,
  buttonHref = "/contact",
  variant = "default",
}: PageCTAProps) {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl">{title}</h2>
          <p className="mb-8 text-muted-foreground">{description}</p>
          <Button variant={variant} size="lg" asChild>
            <Link href={buttonHref}>
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
