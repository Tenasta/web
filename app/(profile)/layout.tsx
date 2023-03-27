import Gtm from "@/components/scripts/gtm";
import "../globals.css";
import "../profile.css";
import "../print.css";

export default function ProfileLayout({
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
        {children}
      </body>
    </html>
  );
}
