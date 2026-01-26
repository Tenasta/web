import { Rocket, Users, Cpu, AlertTriangle, Code2, Target } from "lucide-react";
import type { Scenario } from "@/lib/types";

export const scenarios: Scenario[] = [
  {
    icon: AlertTriangle,
    title: "Working hard, not moving forward",
    description:
      "Your team is busy, but progress isn't compounding. Priorities shift, deadlines slip, and confidence starts to wobble.",
    solution:
      "I embed with your team, identify blockers and help translate effort into momentum.",
  },
  {
    icon: Rocket,
    title: "Will it hold up at launch?",
    description:
      "Launch is coming but you're not sure the product is ready. Features and scope are drifting. Saying no feels harder than it should. Will everything hold up?",
    solution:
      "Comprehensive readiness audit + launch runbook. Ship with confidence.",
  },
  {
    icon: Users,
    title: "You need technical judgement - now.",
    description:
      "Hiring is slow. You can't wait 3 months to fill the role. You need someone who can step in, make confident calls, and unblock delivery while you hire properly.",
    solution: "Bridge the gap with a technical co-pilot while you hire right.",
  },
  {
    icon: Cpu,
    title: "Unsure where AI helps?",
    description:
      "Everyone says you need AI. You're not sure what's real vs. hype for your use case. You don't want a demo feature  -  you want measurable value.",
    solution: "Pragmatic AI assessment - discover what will create value.",
  },
  {
    icon: Code2,
    title: "Progress feels fragile",
    description:
      "Every new feature takes 3x longer than it should. The codebase has become a liability. Technical debt is slowing you down. You need to move fast without digging a hole.",
    solution:
      "Strategic refactoring plan. Ship faster within weeks, not months.",
  },
  {
    icon: Target,
    title: "Not sure what's worth building?",
    description:
      "You're building features but not sure which ones move the needle. Teams work best when everyone is aligned on what's important",
    solution:
      "Instrument, measure, and iterate. Build what users actually need. ",
  },
];
