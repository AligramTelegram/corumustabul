import type { Metadata } from "next";
import { categories } from "@/data/categories";
import { CategoryGrid } from "@/components/CategoryCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Çorum İş Kolları - 20 Hizmet İçin Usta Bul | Çorum Usta Bul",
  description:
    "Çilingirden elektrikçiye, boyacıdan nakliyata Çorum'da hizmet veren 20 iş kolu. İhtiyacınız olan iş kolunu seçin, ilçenize göre ustaya ulaşın.",
  path: "/kategoriler",
});

export default function KategorilerPage() {
  const groups: { key: string; label: string }[] = [
    { key: "acil", label: "Acil ihtiyaçlar" },
    { key: "tadilat", label: "Tadilat ve onarım" },
    { key: "diger", label: "Diğer hizmetler" },
  ];
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Breadcrumbs
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "İş Kolları", path: "/kategoriler" },
        ]}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "İş Kolları", path: "/kategoriler" },
        ])}
      />
      <h1 className="text-2xl font-bold">Çorum'da iş kolları</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Aşağıdaki iş kollarından birini seçin; ardından Çorum merkez veya
        ilçenizde çalışan ustaları görün.
      </p>

      {groups.map((g) => (
        <section key={g.key} className="mt-8">
          <h2 className="mb-3 text-lg font-bold">{g.label}</h2>
          <CategoryGrid
            categories={categories.filter((c) => c.group === g.key)}
          />
        </section>
      ))}
    </div>
  );
}
