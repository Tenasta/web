import { redirect } from "next/navigation";

interface PlaybookPageProps {
  params: Promise<{ slug: string }>;
}

// Redirect all individual playbook pages to the main playbooks page
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function PlaybookPage(props: PlaybookPageProps) {
  redirect("/playbooks");
}
