/**
 * Project categories - single source of truth
 * Each category is defined once with its label and description
 * To rename a category, just change the 'label' field
 */
export const CATEGORIES = [
  {
    label: "Product Delivery",
    description:
      "Turning effort into momentum. Unblocking obstacles, sharpening focus, and helping teams see real progress and velocity that sticks.",
  },
  {
    label: "Technical Leadership",
    description:
      "Technical judgement in the moments that matter: setting direction, making trade-offs explicit, and deciding what happens next.",
  },
  {
    label: "Idea → Product",
    description:
      "Helping ideas become real products — from the first MVP through to a real product: hardening foundations, clarifying priorities and validating what's worth building.",
  },
  {
    label: "Audit & Due Diligence",
    description:
      "Independent technical assessment and due diligence: surfacing risk, testing assumptions, clarifying scope and giving stakeholders a clearer view of reality.",
  },
  {
    label: "Team Growth",
    description:
      "Raising engineering capability through hiring, mentoring, and process & priority clarity - aligning the team around what matters and reducing fragility.",
  },
] as const;

/**
 * Special "All" category for showing all projects
 */
export const ALL_CATEGORY = {
  label: "All",
  description:
    "A selection of work across delivery, leadership, stability, and crucial moments - examples of how I contribute in the moments that count.",
} as const;

/**
 * Type representing a single project category label
 */
export type ProjectCategory = (typeof CATEGORIES)[number]["label"];

/**
 * Returns array of category labels (without "All")
 * Use this for filtering and type checking
 */
export function getCategoryLabels(): readonly ProjectCategory[] {
  return CATEGORIES.map((c) => c.label);
}

/**
 * Returns the description for a given category
 * @param category - The category label or "All"
 */
export function getCategoryDescription(
  category: ProjectCategory | "All"
): string {
  if (category === "All") return ALL_CATEGORY.description;
  const cat = CATEGORIES.find((c) => c.label === category);
  return cat?.description ?? "";
}

/**
 * Legacy exports for backwards compatibility
 * @deprecated Use getCategoryLabels() instead
 */
export const PROJECT_CATEGORIES = getCategoryLabels();

/**
 * Legacy export for backwards compatibility
 * @deprecated Use getCategoryDescription() instead
 */
export const CATEGORY_DESCRIPTIONS: Record<ProjectCategory | "All", string> =
  Object.fromEntries([
    ...CATEGORIES.map((c) => [c.label, c.description]),
    [ALL_CATEGORY.label, ALL_CATEGORY.description],
  ]) as Record<ProjectCategory | "All", string>;
