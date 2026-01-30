"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConstants } from "@/lib/content";

const navLinks = [
  { href: "/", label: "I'm Nick, a Fractional Technical Leader" },
  { href: "/ways-to-work-together", label: "Ways to work with me" },
  { href: "/projects", label: "My Projects" },
  { href: "/playbooks", label: "Playbooks", disabled: true },
  { href: "/about", label: "About Me" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container-wide">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/tenasta-monogram.svg"
              alt="Tenasta Ltd"
              width={120}
              height={32}
              className="h-8 w-auto"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks
              .filter((link) => !link.disabled)
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "animated-underline px-4 py-2 text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
          </div>

          {/* CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Button variant="mono" size="sm" asChild>
              <Link href="/contact">{siteConstants.cta.bookACall}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="animate-slide-in-right border-t border-border/50 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 border-t border-border/50 px-4 pt-4">
                <Button variant="hero" className="w-full" asChild>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    {siteConstants.cta.bookACall}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
