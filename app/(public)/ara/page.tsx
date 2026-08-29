import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/categories";
import { districts } from "@/data/districts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMeta } from "@/lib/seo";
import { AraClient } from "./AraClient";

export const metadata: Metadata = pageMeta({
  title: "Çorum'da Usta Ara - İş Kolu ve İlçeye Göre | Çorum Usta Bul",
  description:
    "Çorum'da aradığınız ustayı iş koluna ve ilçeye göre bulun. Çilingir, elektrikçi, tesisatçı, çekici, boyacı ve 20 iş kolu; Çorum merkez ve 13 ilçe.",
  path: "/ara",
});

export default function AraPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Arama", path: "/ara" },
        ]}
      />
      <h1 className="font-display text-3xl font-semibold text-ink">
        Çorum'da usta ara
      </h1>
      <p className="mt-2 text-muted">
        İş kolu veya ilçe adı yazın; ilgili sayfaya gidin.
      </p>
      <AraClient />

      <section className="mt-10">
        <h2 className="font-display text-lg font-semibold text-ink">
          İş kolları
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="rounded-full border border-border-strong bg-white px-3 py-1.5 text-sm text-ink-soft hover:border-orange hover:text-orange"
            >
              Çorum {c.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-lg font-semibold text-ink">İlçeler</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {districts.map((d) => (
            <Link
              key={d.slug}
              href={`/ilce/${d.slug}`}
              className="rounded-full border border-border-strong bg-white px-3 py-1.5 text-sm text-ink-soft hover:border-orange hover:text-orange"
            >
              {d.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
