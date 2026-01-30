import type { Service, ServicePreview } from "@/lib/types";

/**
 * Transforms full service data into preview format for home page
 * Maps whatYouGet → deliverables (first 5 items)
 */
export function toServicesPreview(
  services: Service[]
): ServicePreview[] {
  return services.map((service) => ({
    id: service.id,
    icon: service.icon,
    title: service.title,
    duration: service.duration,
    price: service.price,
    description: service.description,
    deliverables: service.whatYouGet.slice(0, 5),
    cta: service.cta,
    featured: service.featured,
  }));
}
