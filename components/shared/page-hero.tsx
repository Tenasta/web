interface PageHeroProps {
  badge?: string;
  title: string;
  description: string;
}

export function PageHero({ badge, title, description }: PageHeroProps) {
  return (
    <section className="py-20 bg-grid relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {badge && (
            <p className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
              {badge}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">{title}</h1>
          <p className="text-xl text-muted-foreground">{description}</p>
        </div>
      </div>
    </section>
  );
}
