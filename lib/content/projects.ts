import type { ProjectExtended } from "@/lib/types";

export const projects: ProjectExtended[] = [
  {
    slug: "glaciera",
    title: "Glaciera",
    category: "Product Development",
    description:
      "3D model design marketplace for jewelry businesses with quotation builder, design calculator, and client collection tools. Led technical delivery from offshore team turnaround through MVP launch and subsequent infrastructure modernisation.",
    client: "Tech Lead",
    duration: "2.5 years",
    impact: [
      "Delivered MVP SaaS within budget",
      "Modernized infrastructure with Pulumi IaC",
      "Turned around underperforming offshore team",
    ],
    tags: ["AWS", "Stripe", "Pulumi", "CI/CD", "Laravel"],
    logo: "/images/glaciera-logo.svg",
    featured: true,
  },
  {
    slug: "fantasybet",
    title: "FantasyBet",
    category: "Technical Leadership",
    description:
      "Award-winning daily, weekly, and season-long fantasy football platform with premium UI/UX, real-time scoring, and gamification. Built as solo engineer alongside a co-founding team. We grew the user base with innovative features and strong community engagement. We conducted successful fundraising rounds and ultimately exited via acquisition.",
    client: "CTO & Co-Founder",
    duration: "7 years",
    impact: [
      "Best Fantasy Product 2015",
      "High retention, low CAC",
      "Real-time sports data infrastructure",
      "Acquired by Rush Partners in 2017",
    ],
    tags: ["Daily Fantasy", "Real-time data", "Scaling", "Mobile"],
    logo: "/images/fantasybet-logo.svg",
    featured: true,
  },
  {
    slug: "fantech",
    title: "FanTech",
    category: "Product Development",
    description:
      "Plug-and-play B2B acquisition and engagement platform for i-gaming and sports media companies. Built fantasy and free-to-play games as embeddable widgets. Ensured full compliance and skill-game based licensing. Re-engaged users with gamified experiences and cross-selling into pre-filled betslips.",
    client: "Co-Founder & CTO",
    duration: "2 years",
    impact: [
      "Launched as external B2B product",
      "Built PnP JS widget for major brands",
      "Reduced acquisition costs with gamified engagement",
    ],
    tags: ["React", "Lambda", "B2B", "Gamification"],
    logo: "/images/fantech-logo.svg",
  },
  {
    slug: "footium",
    title: "Footium",
    category: "Technical Leadership",
    description:
      "Venture-backed sports gaming startup. Moved from seed prototype to viable product by establishing engineering foundations, building real-time backend services at scale, and creating data-driven decision-making infrastructure.",
    client: "Principal Engineer",
    duration: "Ongoing",
    impact: [
      "Engineering execution and momentum",
      "Revenue & user growth with strong retention",
      "Blockchain integration and development",
      "Event-based product telemetry",
    ],
    tags: [
      "Data-streaming",
      "TypeScript",
      "IaC",
      "CI/CD",
      "Analytics",
      "Python",
    ],
    logo: "/images/footium-logo.png",
  },
  {
    slug: "betting-exchange-advisory",
    title: "Sports Trading",
    category: "Advisory & Team Building",
    description:
      "High-frequency trading platform for pre-match and in-play betting markets on high-liquidity exchanges. Provided strategic advisory on team composition, recruited specialist data engineering and algorithmic trading experts, and established technical foundations for market analysis and exposure strategies.",
    client: "Proprietary trading fund (sports)",
    duration: "8 months",
    impact: [
      "Ensured operational and reliable trading platform",
      "Built a specialised engineering function across data, execution, and research",
      "Implemented real-time data pipelines for prices, order books, and trades",
      "Improved execution quality and value capture",
    ],
    tags: [
      "Node.js",
      "Python",
      "Data Engineering",
      "Team Building",
      "ML",
      "Trading",
    ],
    featured: true,
  },
  {
    slug: "logistics-automation",
    title: "Logistics Automation",
    category: "MVP & Prototyping",
    description:
      "Logistics company with a underperforming technical partner seeking to improve their B2C product and automate invoice processing from global courier firms. Identified key improvements and prioritised tasks for development, prepared an MVP prototype specification for automated invoice extraction, validation, and subsequent business logic actions.",
    client: "MVP Developer",
    duration: "3 months",
    impact: [
      "Prioritised key product improvements",
      "Delivered MVP prototype specification for invoice processing",
      "Data extraction and validation automation",
    ],
    tags: ["Technical Leadership", "Document Processing", "MVP Development"],
  },
  {
    slug: "platform-security-audit",
    title: "Platform Security Audit",
    category: "Due Diligence & Audit",
    description:
      "B2B software company facing delayed deliveries and system reliability issues with their technology provider. Conducted comprehensive security assessment revealing negligent security practices and critical infrastructure vulnerabilities. Provided remediation recommendations and ultimately the client achieved a successful legal settlement.",
    client: "B2B Software Provider",
    duration: "1-2 weeks",
    impact: [
      "Identified critical security vulnerabilities",
      "Prevented potential data exposure",
      "Facilitated informed settlement with significant payout",
    ],
    tags: ["Security Audit", "Compliance", "Risk Assessment", "Infrastructure"],
    featured: true,
  },
  {
    slug: "sportsbook-platform-evaluation",
    title: "Sportsbook Platform Evaluation",
    category: "Due Diligence & Audit",
    description:
      "B2B sportsbook platform evaluation for white-label implementation. Conducted technical due diligence on potential platform providers, assessed architecture scalability, regulatory compliance, payment integration complexity, and licensing requirements. Recommendations led to optimal provider selection.",
    client: "Sports Betting Brand",
    duration: "2-3 months",
    impact: [
      "Evaluated multiple white-label platform providers",
      "Identified optimal cost-performance-compliance solution",
      "Ensured senior management confidence in technical decision-making",
    ],
    tags: [
      "Due Diligence",
      "Platform Evaluation",
      "Sportsbook",
      "Compliance",
      "B2B",
    ],
  },
];
