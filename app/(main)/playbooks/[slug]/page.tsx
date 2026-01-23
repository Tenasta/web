import { redirect } from "next/navigation";

interface PlaybookPageProps {
  params: Promise<{ slug: string }>;
}

// Redirect all individual playbook pages to the main playbooks page
export default async function PlaybookPage({ params }: PlaybookPageProps) {
  redirect("/playbooks");
}
