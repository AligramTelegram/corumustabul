import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Çerez Politikası | Çorum Usta Bul",
  description:
    "Çorum Usta Bul çerez politikası: sitede hangi çerezlerin kullanıldığı ve nasıl yönetebileceğiniz.",
  path: "/cerez-politikasi",
});

export default function CerezPolitikasiPage() {
  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Çerez Politikası", path: "/cerez-politikasi" },
  ];
  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <Breadcrumbs items={crumbs} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <h1 className="font-display text-3xl font-semibold text-ink">
        Çerez Politikası
      </h1>
      <div className="prose-tr mt-4 max-w-none">
        <p>
          {site.name} ({site.domain}), siteyi kullanışlı tutmak ve ziyaretçi
          davranışını anlamak için sınırlı sayıda çerez kullanır.
        </p>
        <p>
          <strong>Zorunlu çerezler:</strong> Sitenin çalışması için gereken temel
          çerezlerdir. Bunlar olmadan sayfalar düzgün görüntülenmez.
        </p>
        <p>
          <strong>Analitik çerezler:</strong> Hangi sayfaların ziyaret edildiğini
          toplu ve kimliksiz şekilde ölçmek için kullanılır. Bu veriler tek tek
          kişileri tanımlamaz.
        </p>
        <p>
          Tarayıcınızın ayarlarından çerezleri silebilir veya engelleyebilirsiniz.
          Çerezleri engellerseniz sitenin bazı bölümleri beklendiği gibi
          çalışmayabilir.
        </p>
        <p>
          Sorularınız için{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> adresine
          yazabilirsiniz.
        </p>
      </div>
    </div>
  );
}
