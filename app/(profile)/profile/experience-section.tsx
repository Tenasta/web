const items = [
  {
    title: "Principal Engineer",
    date: "April 23 - Present",
    company: "Footium",
    location: "Remote",
    stack: ["TypeScript", "Node.js", "AWS", "Terraform IaC", "PostgreSQL", "Next.js", "Python"],
    focus: ["Technical Leadership", "System Architecture", "Product Delivery & Scaling", "Analytics, Data & telemetry"],
    highlights: [
      "Converted a credible seed prototype into a shipped & viable product supporting revenue and user growth.",
      "Re-established engineering momentum with pragmatic IaC, CI/CD, observability, and clear operational ownership.",
      "Led real-time backend services, revenue-driving features, and V2 migrations of critical systems.",
      "Owned data & analytics foundations, building event-based product telemetry and revenue measurement tooling.",
    ],
    description: [
      "Ventured-backed startup role focused on turning high ambition and accumulated complexity into repeatable execution and measurable outcomes across revenue, user growth, and retention.",
      "Partnered closely with founders to balance launch velocity with production stability in a sustained ship/test/iterate loop.",
    ],
  },
  {
    title: "Tech Lead",
    date: "Feb 23 - April 23",
    company: "Glaciera",
    location: "Remote, Contract",
    stack: ["Pulumi IaC", "AWS", "CloudWatch", "GitHub Actions", "CI/CD"],
    highlights: [
      "Modernised and stabilised existing infrastructure and CI/CD pipelines within a short engagement.",
      "Implemented Pulumi-based IaC for AWS and integrated CloudWatch monitoring with Slack alerts.",
      "Standardised GitHub Actions workflows to simplify deployments and source-control processes.",
      "Reduced costs while increasing delivery velocity and system observability."
    ],
    description: [
      "Short-term modernisation project focused on infrastructure, observability, and deployment workflows for an existing AWS setup.",
    ],
  },
  {
    title: "Lead Software Engineer",
    date: "Jul 22 - Jan 23",
    company: "Let's Do This",
    location: "London, Contract",
    stack: ["Next.js", "GraphQL", "gRPC", "Node.js", "MongoDB"],
    focus: ["Growth experimentation", "Product delivery", "Technical Leadership"],
    highlights: [
      "Technical lead in a growth team running data-led experiments to drive booking metrics.",
      "Collaborated across teams to rapidly deliver core product functionality against a tight Q1 deadline.",
      "Enabled key B2B sales and improved organiser satisfaction through timely delivery of platform features.",
    ],
    description: [
      "Hands-on tech lead role spanning end-to-end delivery from user-facing experiments to platform epics across multiple services.",
    ],
  },
  {
    title: "Interim Tech Lead",
    date: "Oct 20 - Feb 22",
    company: "Glaciera",
    location: "London/Remote, Contract",
    stack: ["PHP", "Vue", "AWS", "Stripe", "SPA"],
    focus: ["SEO", "Analytics"],
    highlights: [
      "Turned around an underperforming offshore team working on a PHP/Vue/AWS codebase.",
      "Refocused delivery on a core feature set to reduce costs and hit timelines.",
      "Brought development in-house and successfully delivered an MVP SaaS product within budget for the jewellery sector.",
      "Launched a subscription-based SaaS using Stripe, bespoke SPA & API, and analytics/SEO foundations.",
    ],
    description: [
      "Interim hands-on leadership role aligning roadmap, delivery focus, and team structure to recover a struggling project. I worked very closely with the founders to enable them to achieve their product vision while ensuring delivery of a viable product.",
    ],
  },
  {
    title: "Contract/Consulting",
    date: "From Jun 20",
    company: "Tenasta Ltd",
    location: "London/Remote",
    stack: ["TypeScript", "Next.js", "Node.js", "AWS", "AI LLM"],
    focus: ["Technical Consulting", "Interim Leadership", "Hands-on Engineering", "System Design & Architecture"],
    highlights: [
      "Working closely with founders and business/technology leaders to quickly understand context and unblock teams/products.",
      "Provided technology consulting, contract engineering, and interim leadership across multiple client codebases.",
      "Delivered full-stack work primarily with React/Node/TypeScript in AWS environments.",
    ],
    description: [
      "Ongoing consulting practice focused on web product delivery, technical strategy, and hands-on engineering.",
    ],
  },
  {
    title: "Head of Engineering",
    date: "Sept 17 - Apr 20",
    company: "Rush Partners Ltd",
    location: "London/Oslo/Malta",
    stack: ["React", "Node.js", "Laravel", "AWS", "Docker", "CI/CD"],
    focus: ["Technical Leadership", "Team Building", "Recruitment", "Process Design"],
    highlights: [
      "Built and led a 20+ person team across Engineering, Product, and Data after a merger.",
      "Established recruitment processes, cross-functional teams, and professional development frameworks.",
      "Developed a strong remote/hybrid engineering and product culture across multiple brands and projects.",
    ],
    description: [
      "Senior leadership role reporting to CEO/CTO in iGaming group, responsible for building and scaling a multi-brand product and technology organisation. The centralised technology team delivered solutions across multiple business units, brands and projects within the group.",
      "In addition to leading the technology function I also contributed across several large initiatives including licensing applications, B2B services evaluation, acquisition and integration analysis and innovative new product development."
    ],
  },
  {
    title: "Co-Founder & CTO",
    date: "Sept 17 - Apr 20",
    company: "FanTech",
    location: "London/Oslo/Malta",
    stack: ["React", "Storybook", "Symfony", "AWS Fargate", "AWS Lambda", "Codeship"],
    highlights: [
      "Founded and built a B2B acquisition and engagement platform for the i-gaming/sports sector within the Rush group.",
      "Delivered fantasy and free-to-play games as a plug-and-play JS widget for internal brands and external B2B clients.",
      "Coordinated product development, compliance, and licensing to bring the platform to market.",
    ],
    description: [
      "Co-founder role combining technical leadership, product strategy, and go-to-market responsibilities for a B2B platform.",
    ],
  },
  {
    title: "Co-Founder & CTO",
    date: "Sept 13 - Sept 17",
    company: "FantasyBet",
    location: "Tromsø/Bristol/London",
    stack: ["Laravel", "Vue", "AWS"],
    focus: ["Co-founder", "Technical Leadership", "Product development"],
    highlights: [
      "Technical co-founder of an award-winning Fantasy Football platform (Best Fantasy Product 2015, Betting on Football Awards).",
      "Built and evolved the product from early concept to a beloved platform with high user engagement.",
      "Platform acquired by Rush Partners in 2017.",
    ],
    description: [
      "Co-founder role focused on building and scaling an innovative fantasy football experience across multiple formats.",
    ],
  },
  {
    title: "Software Engineer",
    date: "Sept 13 - Apr 14",
    company: "Eagle Eye Solutions",
    location: "Guildford",
    stack: ["PHP", "JavaScript"],
    focus: ["Retail voucher platforms"],
    highlights: [
      "Contributed to AIR and Core services platforms in a fast-paced agile environment.",
      "Supported rapid business growth from ~15 to 50+ employees, through IPO and acquisition stages.",
    ],
    description: [
      "Early-career engineering role building a unique product in the retail voucher, coupon, and loyalty space.",
    ],
  },
  {
    title: "Web Developer",
    date: "Sept 10 - Apr 13",
    company: "Sound in Theory",
    location: "Exeter",
    stack: [".NET", "PHP", "JavaScript"],
    focus: ["SEO"],
    highlights: [
      "Worked across web design, development, SEO, and identity in a creative digital agency.",
      "Owned phases of the SDLC and delivered solutions for varied business and project demands.",
    ],
    description: [
      "Agency role providing broad exposure to web technologies, client-facing delivery, and end-to-end project work.",
    ],
  },
];
export default function ExperienceSection() {
  return (
    <section className="pb-4 md:pt-6 md:pb-6 border-b-2 border-gray-300">
      <h3 className="uppercase font-bold text-xl mb-4">Experience</h3>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-6 last:border-0"
          >
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <div>
                <h4 className="text-base font-bold text-gray-900">
                  {item.title} | {item.company}
                </h4>
              </div>
              <p className="mt-1 text-sm text-gray-600 md:mt-0">
                {item.date}
              </p>
            </div>
            {(item.stack?.length || 0) + (item.focus?.length || 0) > 0 && (
              <div className="mt-2 flex flex-col gap-1 text-sm text-gray-600 md:flex-row md:flex-wrap md:gap-x-4">
                {item.stack && item.stack.length > 0 && (
                  <p>
                    <span className="font-semibold">Tech:</span>{" "}
                    {item.stack.join(" · ")}
                  </p>
                )}
                {item.focus && item.focus.length > 0 && (
                  <p>
                    <span className="font-semibold">Focus:</span>{" "}
                    {item.focus.join(" · ")}
                  </p>
                )}
              </div>
            )}
            {item.highlights && item.highlights.length > 0 && (
              <ul className="mt-3 list-disc pl-5 leading-7 space-y-1 text-gray-600">
                {item.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            )}
            {item.description.map((desc, i) => (
              <p className="mt-4 leading-7 text-gray-600" key={i}>
                {desc}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
