import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
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
    default: "Nick Martin-Kruck Technical Co-pilot for Early-Stage Founders",
    template:
      "%s | Nick Martin-Kruck Technical Co-pilot for Early-Stage Founders",
  },
  description:
    "Drop-in technical co-pilot for early-stage founders. Nick Martin helps startups understand context fast, unblock teams, and ship products - without full-time hire overhead.",
  keywords: [
    "fractional CTO",
    "fractional technical leader",
    "technical consulting",
    "startup advisor",
    "CTO as a service",
    "technical co-pilot",
    "MVP development",
    "technical due diligence",
    "engineering leadership",
  ],
  authors: [{ name: "Nick Martin-Kruck" }],
  creator: "Nick Martin-Kruck",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tenasta.com",
    title: "Nick Martin-Kruck - Technical Co-pilot for Early-Stage Founders",
    description:
      "Drop-in technical co-pilot for early-stage founders. Unblock your team and ship products without full-time hire overhead.",
    siteName: "Nick Martin-Kruck - Tenasta Ltd",
    images: [
      {
        url: "https://tenasta.com/images/social-image.png",
        width: 1210,
        height: 720,
        alt: "Tenasta - Technical Co-pilot for Early-Stage Founders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nick Martin-Kruck - Technical Co-pilot for Early-Stage Founders",
    description:
      "Drop-in technical co-pilot for early-stage founders. Unblock your team and ship products.",
    images: ["https://tenasta.com/images/social-image.png"],
  },
  metadataBase: new URL("https://tenasta.com"),
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
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
