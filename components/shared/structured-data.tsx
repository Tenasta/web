export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tenasta",
    url: "https://tenasta.com",
    logo: "https://tenasta.com/logo.png",
    description:
      "Modern cloud infrastructure and DevOps solutions for businesses that demand excellence",
    email: "hello@tenasta.com",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}

export function ArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  author = "Tenasta",
  url,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: {
      "@type": "Organization",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "Tenasta",
      logo: {
        "@type": "ImageObject",
        url: "https://tenasta.com/logo.png",
      },
    },
    datePublished,
    dateModified: dateModified || datePublished,
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
