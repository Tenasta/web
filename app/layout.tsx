import Header from "@/components/header";
import "./globals.css";

export const metadata = {
  title: "Tenasta Ltd.",
  description: "Tenasta Ltd. - Shaping better digital products &amp; teams",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
