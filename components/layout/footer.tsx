import Link from "next/link";

const footerLinks = {
  services: [
    { label: "Readiness Audit", href: "/services#audit" },
    { label: "Embedded Sprint", href: "/services#sprint" },
    { label: "Launch Support", href: "/services#launch" },
  ],
  resources: [
    { label: "Playbooks", href: "/playbooks" },
    { label: "Projects", href: "/projects" },
    { label: "About Me", href: "/about" },
  ],
  connect: [
    { label: "Contact", href: "/contact" },
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-wide section-padding">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-3">
              <span className="text-xl font-bold text-primary">
                Tenasta Ltd
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Nick Martin — Technical co-pilot for early-stage founders.
              Building products that work, teams that ship.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Resources
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Connect
            </h4>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Tenasta Ltd Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span>Available for new engagements</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
