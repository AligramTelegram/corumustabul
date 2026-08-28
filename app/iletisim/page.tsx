import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "İletişim - Çorum Usta Bul",
  description:
    "Çorum Usta Bul ile iletişime geçin. İşletme kaydı, güncelleme ve öneriler için bize ulaşın.",
  path: "/iletisim",
});

export default function IletisimPage() {
  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "İletişim", path: "/iletisim" },
  ];
  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <Breadcrumbs items={crumbs} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <h1 className="text-2xl font-bold sm:text-3xl">İletişim</h1>
      <p className="mt-2 text-muted">
        İşletme kaydı, bilgi güncelleme veya görüşleriniz için bize ulaşın.
      </p>

      <div className="mt-6 space-y-3 text-sm">
        <a
          href={`tel:${site.phone}`}
          className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4"
        >
          <Icon name="Phone" className="h-5 w-5 text-accent" />
          <span>{site.phoneDisplay}</span>
        </a>
        <a
          href={`https://wa.me/${site.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4"
        >
          <Icon name="MessageCircle" className="h-5 w-5 text-accent" />
          <span>WhatsApp</span>
        </a>
        <a
          href={`mailto:${site.email}`}
          className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4"
        >
          <Icon name="ChevronRight" className="h-5 w-5 text-accent" />
          <span>{site.email}</span>
        </a>
        <div className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4">
          <Icon name="MapPin" className="h-5 w-5 text-accent" />
          <span>{site.address.locality}, Türkiye</span>
        </div>
      </div>
    </div>
  );
}
