import Footer from "@/components/footer";
import Header from "@/components/header";
import "../globals.css";
import Gtm from "@/components/scripts/gtm";
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
      <Gtm />
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=52SHZXL" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
