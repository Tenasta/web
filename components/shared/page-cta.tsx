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
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h2>
          <p className="text-muted-foreground mb-8">{description}</p>
          <Button variant={variant} size="lg" asChild>
            <Link href={buttonHref}>
              {buttonText}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
