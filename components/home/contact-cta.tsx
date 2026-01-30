import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ObfuscatedEmail } from "@/components/shared/obfuscated-email";
import { siteConstants } from "@/lib/content";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-card py-20">
      {/* Grid background */}
      <div className="bg-grid absolute inset-0 opacity-30" />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-wider text-primary">
          Let&apos;s talk
        </p>
        <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
          Ready to unblock your team?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
          Start with a 30-minute call. Tell me what&apos;s blocking you, and
          I&apos;ll share honest thoughts on whether I can help.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/contact">
              <Calendar className="mr-2 h-5 w-5" />
              {siteConstants.cta.bookACall}
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/ways-to-work-together">
              See Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Or email directly: <ObfuscatedEmail />
        </p>
      </div>
    </section>
  );
}
