import type { Playbook } from "@/lib/types";

export const playbooks: Playbook[] = [
  {
    slug: "mvp-health-check",
    title: "The MVP Health Check",
    description:
      "A systematic approach to auditing your MVP before raising your next round. Covers codebase quality, architecture decisions, team velocity, and red flags investors look for.",
    category: "Technical Due Diligence",
    readTime: "12 min read",
    published: "January 2025",
    tags: ["Architecture", "Code Quality", "Investor Readiness"],
  },
  {
    slug: "first-engineer-hire",
    title: "Hiring Your First Engineer",
    description:
      "What early-stage founders get wrong about technical hiring—and how to fix it. From writing the job description to making the offer.",
    category: "Team Building",
    readTime: "8 min read",
    published: "January 2025",
    tags: ["Hiring", "Team", "Process"],
  },
  {
    slug: "ai-integration-checklist",
    title: "AI Integration Checklist",
    description:
      "Practical framework for deciding if AI adds value to your product. Includes evaluation criteria, build vs. buy decision tree, and common pitfalls.",
    category: "Technology Strategy",
    readTime: "10 min read",
    published: "January 2025",
    tags: ["AI", "Strategy", "Build vs Buy"],
  },
  {
    slug: "technical-debt-triage",
    title: "Technical Debt Triage",
    description:
      "Not all debt is created equal. Learn how to categorize, prioritize, and systematically pay down technical debt without stopping feature development.",
    category: "Engineering Excellence",
    readTime: "15 min read",
    published: "January 2025",
    tags: ["Technical Debt", "Refactoring", "Process"],
  },
  {
    slug: "launch-readiness",
    title: "The Launch Readiness Checklist",
    description:
      "Everything you need to verify before launching a product. From infrastructure to monitoring to incident response plans.",
    category: "Launch Preparation",
    readTime: "11 min read",
    published: "January 2025",
    tags: ["Launch", "Operations", "Monitoring"],
  },
  {
    slug: "scaling-team-processes",
    title: "Scaling Team Processes (5→15 engineers)",
    description:
      "The inflection point where informal processes break. How to introduce structure without killing speed.",
    category: "Team Building",
    readTime: "14 min read",
    published: "January 2025",
    tags: ["Process", "Scaling", "Team"],
  },
];

export const playbooksContent: Record<
  string,
  {
    title: string;
    category: string;
    readTime: string;
    lastUpdated: string;
    introduction: string;
    sections: Array<{
      title: string;
      content: string;
    }>;
  }
> = {
  "mvp-health-check": {
    title: "The MVP Health Check",
    category: "Technical Due Diligence",
    readTime: "12 min read",
    lastUpdated: "January 2025",
    introduction:
      "Before you raise your next round, you need to know what investors will find when they dig into your tech. This playbook gives you a systematic approach to auditing your MVP—the same framework I use when conducting readiness audits for Series A-bound startups.",
    sections: [
      {
        title: "Why This Matters",
        content:
          "Technical due diligence is increasingly rigorous. Investors have been burned by companies that raised on impressive demos but couldn't scale. They'll look at your codebase, architecture decisions, team velocity, and processes. Better to find the red flags before they do.",
      },
      {
        title: "The 5-Point Framework",
        content:
          "I evaluate MVPs across five dimensions: Code Quality, Architecture Decisions, Team Velocity, Technical Debt Load, and Security Posture. Each reveals different things about your company's technical maturity and ability to scale.",
      },
      {
        title: "1. Code Quality Assessment",
        content:
          "Start with the basics: Is the code readable? Are there tests? Is there consistent style? Look for: test coverage (aim for >70% on critical paths), linting/formatting automation, clear module boundaries, and meaningful commit messages. Red flags include: no tests, inconsistent patterns, \"magic numbers\" everywhere, and copy-pasted code blocks.",
      },
      {
        title: "2. Architecture Review",
        content:
          "Can this system scale 10x? 100x? Look for: clear separation of concerns, appropriate use of services, sensible database schema, and documented decision rationale. Red flags include: monolithic single points of failure, N+1 query patterns, and no caching strategy.",
      },
      {
        title: "3. Team Velocity Metrics",
        content:
          "How fast are you actually shipping? Track: cycle time (idea to production), deployment frequency, change failure rate, and time to resolve incidents. Compare against your stage—seed startups should deploy daily.",
      },
      {
        title: "The Bottom Line",
        content:
          "A clean technical audit isn't about perfection—it's about demonstrating you understand your own system's strengths and weaknesses. Investors want to see self-awareness and a plan, not a pristine codebase built at the expense of shipping.",
      },
    ],
  },
  "first-engineer-hire": {
    title: "Hiring Your First Engineer",
    category: "Team Building",
    readTime: "8 min read",
    lastUpdated: "January 2025",
    introduction:
      "This playbook is coming soon. Check back later for the full guide on hiring your first engineer.",
    sections: [],
  },
  "ai-integration-checklist": {
    title: "AI Integration Checklist",
    category: "Technology Strategy",
    readTime: "10 min read",
    lastUpdated: "January 2025",
    introduction:
      "This playbook is coming soon. Check back later for the full guide on AI integration.",
    sections: [],
  },
  "technical-debt-triage": {
    title: "Technical Debt Triage",
    category: "Engineering Excellence",
    readTime: "15 min read",
    lastUpdated: "January 2025",
    introduction:
      "This playbook is coming soon. Check back later for the full guide on technical debt triage.",
    sections: [],
  },
  "launch-readiness": {
    title: "The Launch Readiness Checklist",
    category: "Launch Preparation",
    readTime: "11 min read",
    lastUpdated: "January 2025",
    introduction:
      "This playbook is coming soon. Check back later for the full guide on launch readiness.",
    sections: [],
  },
  "scaling-team-processes": {
    title: "Scaling Team Processes (5→15 engineers)",
    category: "Team Building",
    readTime: "14 min read",
    lastUpdated: "January 2025",
    introduction:
      "This playbook is coming soon. Check back later for the full guide on scaling team processes.",
    sections: [],
  },
};
