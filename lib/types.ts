import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  content?: string;
}

export interface ServiceExtended {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  description: string;
  whatYouGet: string[];
  idealFor: string[];
  cta: string;
  featured?: boolean;
}

export interface ServicePreview {
  id: string;
  icon: LucideIcon;
  title: string;
  duration: string;
  price: string;
  description: string;
  deliverables: string[];
  cta: string;
  featured?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  image?: string;
  link?: string;
  github?: string;
  featured?: boolean;
  content?: string;
}

export interface ProjectExtended {
  slug: string;
  title: string;
  description: string;
  category: string;
  client: string;
  duration: string;
  impact: string[];
  tags: string[];
  featured?: boolean;
}

export interface ProjectPreview {
  slug: string;
  title: string;
  description: string;
  category: string;
  impact: string;
  tags: string[];
  featured?: boolean;
}

export interface Playbook {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  published: string;
  updated?: string;
  tags: string[];
  content?: string;
}

export interface Scenario {
  title: string;
  description: string;
  icon: string;
}

export interface ScenarioExtended {
  title: string;
  description: string;
  solution: string;
  icon: LucideIcon;
}

export interface SiteConstants {
  credentials: {
    heroLine1: string;
    heroLine2: string;
    heroLine3: string;
    yearsExperience: string;
    background: string;
  };
  contact: {
    email: string;
  };
  cta: {
    bookACall: string;
    discuss: string;
  };
}
