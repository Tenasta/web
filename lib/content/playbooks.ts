import type { Playbook } from "@/lib/types";

// Playbooks list - empty, ready for content
export const playbooks: Playbook[] = [];

// Detailed playbook content - empty, ready for content
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
> = {};
