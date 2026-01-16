import {
  Rocket,
  Users,
  Cpu,
  AlertTriangle,
  Code2,
  Target,
} from "lucide-react";
import type { ScenarioExtended } from "@/lib/types";

export const scenarios: ScenarioExtended[] = [
  {
    icon: AlertTriangle,
    title: "MVP isn't shipping",
    description:
      "Your dev team is stuck in cycles. Deadlines slip. You need someone who can see the blockers and fix them.",
    solution:
      "I embed with your team, identify bottlenecks, and get you shipping again.",
  },
  {
    icon: Rocket,
    title: "Pre-launch anxiety",
    description:
      "Launch is coming but you're not sure the product is ready. What will break at scale?",
    solution:
      "Comprehensive readiness audit + launch runbook. Ship with confidence.",
  },
  {
    icon: Users,
    title: "Hiring is slow",
    description:
      "You need senior technical talent but can't wait 3 months to fill the role.",
    solution: "Bridge the gap with a technical co-pilot while you hire right.",
  },
  {
    icon: Cpu,
    title: "AI uncertainty",
    description:
      "Everyone says you need AI. You're not sure what's real vs. hype for your use case.",
    solution:
      "Pragmatic AI assessment. Build what creates value, not what creates demos.",
  },
  {
    icon: Code2,
    title: "Technical debt crushing you",
    description:
      "Every new feature takes 3x longer than it should. The codebase has become a liability.",
    solution: "Strategic refactoring plan. Ship faster within weeks, not months.",
  },
  {
    icon: Target,
    title: "Product-market fit unclear",
    description:
      "You're building features but not sure which ones move the needle.",
    solution: "Instrument, measure, and iterate. Build what users actually need.",
  },
];
