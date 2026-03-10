interface PageHeroProps {
  badge?: string;
  title: string;
  description: string;
}

export function PageHero({ badge, title, description }: PageHeroProps) {
  return (
    <section className="bg-grid relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl">
          {badge && (
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-primary">
              {badge}
            </p>
          )}
          <h1 className="mb-6 text-4xl font-semibold md:text-5xl">{title}</h1>
          <p className="text-xl text-muted-foreground">{description}</p>
        </div>
      </div>
    </section>
  );
}
