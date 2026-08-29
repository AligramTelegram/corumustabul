import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";
import { site, isletmeWhatsappUrl } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "İşletme Ekle - Çorum Usta Bul",
  description:
    "Çorum'da usta veya hizmet firmasıysanız dizine katılmak için WhatsApp'tan bize yazın. İşletme adı, iş kolları ve hizmet verdiğiniz ilçeleri iletin.",
  path: "/isletme-ekle",
});

export default function IsletmeEklePage() {
  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "İşletme Ekle", path: "/isletme-ekle" },
  ];

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <Breadcrumbs items={crumbs} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <h1 className="font-display text-3xl font-semibold text-ink">
        İşletmenizi ekleyin
      </h1>
      <p className="mt-3 text-ink-soft">
        Çorum&apos;da usta veya hizmet firmasıysanız, dizine katılmak için bize
        WhatsApp&apos;tan yazmanız yeterli. Kısa bir görüşmeyle bilgilerinizi
        alır, profilinizi yayına alırız.
      </p>

      <div className="mt-8 rounded-2xl border border-border-strong bg-white p-6 enamel">
        <h2 className="font-display text-lg font-semibold text-ink">
          Mesajınızda şunları yazın
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-ink-soft">
          {[
            "İşletme adı ve yetkili kişi",
            "Telefon numarası",
            "Hangi iş kollarında hizmet veriyorsunuz",
            "Hangi ilçelere gidiyorsunuz",
            "Web siteniz (varsa)",
            "Kısa bir tanıtım (isteğe bağlı)",
          ].map((t) => (
            <li key={t} className="flex gap-2">
              <Icon
                name="CheckCircle2"
                className="mt-0.5 h-4 w-4 shrink-0 text-ink"
              />
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <a
          href={isletmeWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="enamel mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-accent-fg transition-transform hover:-translate-y-0.5"
        >
          <Icon name="MessageCircle" className="h-4 w-4" />
          WhatsApp&apos;tan yazın
        </a>
        <p className="mt-3 text-xs text-muted">
          Dilerseniz {site.email} adresine de yazabilirsiniz.
        </p>
      </div>
    </div>
  );
}
