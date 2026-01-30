"use client";

import { useState, useEffect } from "react";

interface ObfuscatedEmailProps {
  className?: string;
  showIcon?: boolean;
}

export function ObfuscatedEmail({
  className = "text-primary hover:underline",
  showIcon = false,
}: ObfuscatedEmailProps) {
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    // Decode on client side - most bots don't execute JS
    const parts = ["nick", "tenasta", "com"];
    setEmail(`${parts[0]}@${parts[1]}.${parts[2]}`);
  }, []);

  if (!email) {
    return <span className="text-muted-foreground">Loading...</span>;
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  );
}
