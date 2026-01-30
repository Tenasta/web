"use client";

import { useMemo } from "react";

interface ObfuscatedEmailProps {
  className?: string;
}

export function ObfuscatedEmail({
  className = "text-primary hover:underline",
}: ObfuscatedEmailProps) {
  // Decode on client side - most bots don't execute JS
  const email = useMemo(() => {
    const parts = ["nick", "tenasta", "com"];
    return `${parts[0]}@${parts[1]}.${parts[2]}`;
  }, []);

  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  );
}
