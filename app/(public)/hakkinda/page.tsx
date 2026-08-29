import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Hakkımızda - Çorum Usta Bul",
  description:
    "Çorum Usta Bul, Çorum ve ilçelerinde usta ile müşteriyi doğrudan buluşturan yerel bir dizindir.",
  path: "/hakkinda",
});

export default function HakkindaPage() {
  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hakkımızda", path: "/hakkinda" },
  ];
  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <Breadcrumbs items={crumbs} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <h1 className="text-2xl font-bold sm:text-3xl">Hakkımızda</h1>
      <div className="prose-tr mt-4 max-w-none">
        <p>
          {site.name}, Çorum merkez ve 13 ilçesinde çalışan ustaları tek bir
          yerde toplayan yerel bir rehberdir. Amacımız basit: bir işiniz
          olduğunda, bölgenizde gerçekten hizmet veren birini fazla uğraşmadan
          bulmanız.
        </p>
        <p>
          Ustalarla müşteriler arasında aracılık yapmıyoruz. Listelediğimiz her
          usta size doğrudan telefon veya WhatsApp'tan ulaşılabilecek şekilde
          yer alır; görüşmeyi, fiyatı ve işi kendi aranızda konuşursunuz.
        </p>
        <p>
          Müşteri başına komisyon almıyoruz. Listede yer almak isteyen ustalar
          bizimle WhatsApp üzerinden iletişime geçer, kısa bir görüşmeyle
          profilleri yayına alınır.
        </p>
        <p>
          Usta veya hizmet firmasıysanız{" "}
          <Link href="/isletme-ekle">işletme ekleme sayfasına</Link> göz atın.
        </p>
      </div>
    </div>
  );
}
