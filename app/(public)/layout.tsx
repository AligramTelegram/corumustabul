import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { ClickTracking } from "@/components/ClickTracking";
import { CookieBanner } from "@/components/CookieBanner";
import { orgJsonLd, webSiteJsonLd } from "@/lib/seo";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={[orgJsonLd(), webSiteJsonLd()]} />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieBanner />
      <ClickTracking />
    </>
  );
}
