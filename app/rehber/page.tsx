import Link from "next/link";
import type { Metadata } from "next";
import { postsSorted } from "@/data/rehber";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Rehber - Çorum Usta, Tadilat ve Bakım Yazıları | Çorum Usta Bul",
  description:
    "Çorum'da elektrikçi fiyatları, kombi bakımı, tadilat sıralaması, su kaçağı tespiti ve daha fazlası. İş yaptırmadan önce okunması gereken pratik rehberler.",
  path: "/rehber",
});

function fmt(d: string) {
  return new Date(d).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function RehberPage() {
  const list = postsSorted();
  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Rehber", path: "/rehber" },
  ];
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs items={crumbs} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
        Rehber
      </h1>
      <p className="mt-2 max-w-xl text-muted">
        İş yaptırmadan önce işinize yarayacak pratik yazılar: fiyatların neye
        göre değiştiği, doğru sıralama ve nelere dikkat edilmesi gerektiği.
      </p>

      <div className="mt-8 divide-y divide-border">
        {list.map((p) => (
          <article key={p.slug} className="py-5">
            <p className="text-xs text-muted">
              {fmt(p.date)} · {p.readingMin} dk okuma
            </p>
            <h2 className="mt-1 font-display text-xl font-semibold text-ink">
              <Link href={`/rehber/${p.slug}`} className="hover:text-orange">
                {p.title}
              </Link>
            </h2>
            <p className="mt-1.5 text-sm text-ink-soft">{p.description}</p>
            <Link
              href={`/rehber/${p.slug}`}
              className="mt-2 inline-block text-sm font-semibold text-orange hover:underline"
            >
              Devamını oku →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
