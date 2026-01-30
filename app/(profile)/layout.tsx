import { GoogleTagManager } from "@next/third-parties/google";
import "../profile.css";
import "../print.css";

export const metadata = {
  title: "Nick MK - Profile",
  description: "Nick MK - Profile and resume",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
        {children}
      </body>
    </html>
  );
}
