import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OrganizationSchema } from "@/components/shared/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Tenasta Ltd - Technical Co-pilot for Early-Stage Founders",
    template: "%s | Tenasta Ltd",
  },
  description:
    "Drop-in technical co-pilot for early-stage founders. Nick Martin helps startups understand context fast, unblock teams, and ship products—without full-time hire overhead.",
  keywords: [
    "technical consulting",
    "startup advisor",
    "CTO as a service",
    "technical co-pilot",
    "MVP development",
    "technical due diligence",
    "engineering leadership",
  ],
  authors: [{ name: "Nick Martin" }],
  creator: "Nick Martin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tenasta.com",
    title: "Tenasta Ltd - Technical Co-pilot for Early-Stage Founders",
    description:
      "Drop-in technical co-pilot for early-stage founders. Unblock your team and ship products without full-time hire overhead.",
    siteName: "Tenasta Ltd",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tenasta Ltd - Technical Co-pilot for Early-Stage Founders",
    description:
      "Drop-in technical co-pilot for early-stage founders. Unblock your team and ship products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <OrganizationSchema />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
