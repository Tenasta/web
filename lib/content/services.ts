import { Search, Wrench, Rocket } from "lucide-react";
import type { ServiceExtended } from "@/lib/types";

export const services: ServiceExtended[] = [
  {
    id: "audit",
    icon: Search,
    title: "Readiness Audit",
    subtitle: "Know where you stand",
    duration: "1-2 weeks",
    price: "Price on request",
    description:
      "A comprehensive technical health check that gives you clarity on your product, codebase, and team processes. Perfect before raising, launching, or hiring.",
    whatYouGet: [
      "Deep-dive codebase and architecture review",
      "Team velocity and process assessment",
      "Risk identification and prioritisation",
      "Technical debt inventory",
      "Prioritised action roadmap",
      "60-minute strategy session to discuss findings",
    ],
    idealFor: [
      "Pre-fundraise due diligence prep",
      "Pre-launch risk assessment",
      "New CTO onboarding",
      "Technical founder validation",
    ],
    cta: "Request an Audit",
  },
  {
    id: "sprint",
    icon: Wrench,
    title: "Embedded Sprint",
    subtitle: "Hands-on problem solving",
    duration: "2-8 weeks",
    price: "Price on request",
    description:
      "I join your team as a drop-in technical lead. I understand context fast, unblock your developers, ship features, and establish better processes—without the overhead of a full-time hire.",
    whatYouGet: [
      "Full-time embedded support (async + sync)",
      "Hands-on coding and architecture decisions",
      "Developer mentorship and pairing",
      "Process improvements and tooling setup",
      "Weekly progress reports and check-ins",
      "Knowledge transfer to your team",
    ],
    idealFor: [
      "MVP stuck in development cycles",
      "Team missing senior technical leadership",
      "Critical features that need to ship now",
      "Technical debt that's crushing velocity",
    ],
    cta: "Start a Sprint",
    featured: true,
  },
  {
    id: "launch",
    icon: Rocket,
    title: "Launch Support",
    subtitle: "Ship with confidence",
    duration: "2-4 weeks",
    price: "Price on request",
    description:
      "End-to-end launch preparation and support. I ensure your product is production-ready, create your launch runbook, and provide on-call support when you go live.",
    whatYouGet: [
      "Production readiness review",
      "Performance testing and optimization",
      "Monitoring and alerting setup",
      "Incident response procedures",
      "Detailed launch runbook",
      "On-call support during launch window",
    ],
    idealFor: [
      "First major product launch",
      "Big marketing push incoming",
      "VIP customer going live",
      "Regulatory compliance deadline",
    ],
    cta: "Plan Your Launch",
  },
];
