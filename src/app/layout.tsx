import type { Metadata } from "next";
import "./globals.css";
import { InquiryProvider } from "@/lib/inquiry";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import InquiryDrawer from "@/components/InquiryDrawer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.name} — Research Compound Catalog`,
  description:
    "Browse the full catalog of research compounds and current pricing, then email to inquire.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh flex flex-col">
        <InquiryProvider>
          <SiteNav />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <InquiryDrawer />
        </InquiryProvider>
      </body>
    </html>
  );
}
