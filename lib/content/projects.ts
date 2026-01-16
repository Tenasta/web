import type { ProjectExtended } from "@/lib/types";

export const projects: ProjectExtended[] = [
  {
    slug: "fintech-platform-turnaround",
    title: "FinTech Platform Turnaround",
    category: "Embedded Sprint",
    description:
      "Inherited a struggling development team with a 6-month backlog and deployments taking days. Redesigned CI/CD pipeline, mentored developers, and shipped 4 major features.",
    client: "Series A FinTech",
    duration: "8 weeks",
    impact: [
      "Deployment time: 3 days → 15 minutes",
      "12 blocked PRs shipped in week 1",
      "Team velocity increased 3x",
    ],
    tags: ["React", "Node.js", "AWS", "CI/CD", "Team Process"],
  },
  {
    slug: "ai-analytics-platform",
    title: "AI Analytics Platform",
    category: "MVP Development",
    description:
      "Built an AI-powered analytics platform from concept to production. Designed architecture, led development, and prepared the team for their seed raise.",
    client: "Pre-seed AI Startup",
    duration: "12 weeks",
    impact: [
      "Concept to launch: 12 weeks",
      "£1.5M seed round raised",
      "First enterprise customer within 60 days",
    ],
    tags: ["Python", "OpenAI", "PostgreSQL", "Next.js", "Architecture"],
  },
  {
    slug: "healthcare-saas-launch",
    title: "Healthcare SaaS Launch",
    category: "Launch Support",
    description:
      "Conducted production readiness review for HIPAA-compliant platform. Identified 23 issues, set up monitoring, created launch runbook, and provided on-call support.",
    client: "Healthcare Compliance Startup",
    duration: "3 weeks",
    impact: [
      "Zero-downtime launch",
      "23 pre-launch issues resolved",
      "Passed third-party security audit",
    ],
    tags: ["HIPAA", "Kubernetes", "Monitoring", "Security"],
  },
  {
    slug: "ecommerce-performance",
    title: "E-commerce Performance",
    category: "Readiness Audit",
    description:
      "Pre-marketing campaign audit identified critical performance bottlenecks. Implemented caching strategy and database optimizations ahead of major push.",
    client: "DTC E-commerce Brand",
    duration: "2 weeks",
    impact: [
      "Page load time: 8s → 1.2s",
      "Handled 5x normal traffic",
      "£0 in lost revenue during campaign",
    ],
    tags: ["Performance", "CDN", "Database", "Caching"],
  },
  {
    slug: "marketplace-technical-debt",
    title: "Marketplace Technical Debt",
    category: "Embedded Sprint",
    description:
      "Technical debt had accumulated to the point where every feature took 3x expected time. Created refactoring roadmap and executed critical path improvements.",
    client: "Seed-stage Marketplace",
    duration: "6 weeks",
    impact: [
      "Feature velocity: 3x improvement",
      "Bug rate reduced 60%",
      "Developer satisfaction significantly improved",
    ],
    tags: ["Refactoring", "Testing", "Architecture", "Process"],
  },
  {
    slug: "b2b-saas-first-hire",
    title: "B2B SaaS First Hire",
    category: "Advisory",
    description:
      "Helped non-technical founder make their first technical hire. Defined role, sourced candidates, conducted technical interviews, and onboarded the new engineer.",
    client: "Solo Technical Founder",
    duration: "4 weeks",
    impact: [
      "Hired senior engineer in 4 weeks",
      "Engineer still with company 2 years later",
      "Established hiring process for future growth",
    ],
    tags: ["Hiring", "Process", "Mentorship"],
  },
];
