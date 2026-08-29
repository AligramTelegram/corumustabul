import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { categories, getCategory } from "@/data/categories";
import { districts } from "@/data/districts";
import { prosByCategory, relatedCategories } from "@/lib/data";
import { postsForCategory } from "@/data/rehber";
import { ProList } from "@/components/ProCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LinkChips } from "@/components/InternalLinks";
import { SunHeading } from "@/components/SunHeading";
import { Faq } from "@/components/Faq";
import { Icon } from "@/components/Icon";
import { Finder } from "@/components/Finder";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  itemListJsonLd,
  pageMeta,
  serviceJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return categories.map((c) => ({ kategori: c.slug }));
}

export const dynamicParams = false;
export const revalidate = 600;

type Props = { params: Promise<{ kategori: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategori } = await params;
  const c = getCategory(kategori);
  if (!c) return {};
  return pageMeta({
    title: `Çorum ${c.name} - Usta, Fiyat ve İletişim | Çorum Usta Bul`,
    description: `Çorum ve ilçelerinde ${c.name.toLowerCase()} hizmeti. ${c.searchIntent} İlçenize göre ustayı seçin, telefonla ulaşın.`,
    path: `/${c.slug}`,
  });
}

export default async function CategoryHub({ params }: Props) {
  const { kategori } = await params;
  const c = getCategory(kategori);
  if (!c) notFound();

  const pros = await prosByCategory(c.slug);
  const related = relatedCategories(c.slug);
  const rehberler = postsForCategory(c.slug);
  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "İş Kolları", path: "/kategoriler" },
    { name: c.name, path: `/${c.slug}` },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Breadcrumbs items={crumbs} />
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          serviceJsonLd(c),
          itemListJsonLd(pros),
          faqJsonLd(c.faq),
        ]}
      />

      <header className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f3f3f4] text-ink">
          <Icon name={c.icon} className="h-6 w-6" />
        </span>
        <div>
          <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Çorum {c.name}
          </h1>
          <p className="mt-1.5 text-muted">{c.heroText}</p>
        </div>
      </header>

      <div className="prose-tr mt-6 max-w-2xl">
        {c.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <section className="mt-8">
        <SunHeading as="h2">
          {c.name} hizmetini hangi bölgede arıyorsunuz?
        </SunHeading>
        <Finder defaultCategory={c.slug} />
        <div className="mt-4 flex flex-wrap gap-2">
          {districts.map((d) => (
            <Link
              key={d.slug}
              href={`/${c.slug}/${d.slug}`}
              className="rounded-full border border-border-strong bg-white px-3 py-1.5 text-sm text-ink-soft transition-colors hover:border-orange hover:text-orange"
            >
              {d.name} {c.shortName}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SunHeading as="h2">
          Çorum geneli {c.name.toLowerCase()} ustaları
        </SunHeading>
        <ProList
          pros={pros}
          emptyLabel={`Çorum'da ${c.name.toLowerCase()} iş kolunda henüz kayıtlı usta yok.`}
        />
      </section>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <section className="rounded-2xl border border-border-strong bg-white p-5">
          <h2 className="font-display text-lg font-semibold text-ink">
            Nelere dikkat etmeli?
          </h2>
          <ul className="mt-3 space-y-2">
            {c.notes.map((n, i) => (
              <li key={i} className="flex gap-2 text-sm text-ink-soft">
                <Icon
                  name="CheckCircle2"
                  className="mt-0.5 h-4 w-4 shrink-0 text-ink"
                />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl border border-border-strong bg-wash p-5">
          <h2 className="font-display text-lg font-semibold text-ink">
            Fiyatlar hakkında
          </h2>
          <p className="mt-3 text-sm leading-7 text-ink-soft">{c.priceInfo}</p>
        </section>
      </div>

      <section className="mt-10">
        <SunHeading as="h2">Sık sorulan sorular</SunHeading>
        <Faq items={c.faq} />
      </section>

      <LinkChips
        title="İlgili iş kolları"
        links={related.map((r) => ({
          label: `Çorum ${r.name}`,
          href: `/${r.slug}`,
        }))}
      />

      <LinkChips
        title="Rehber yazıları"
        links={rehberler.map((r) => ({
          label: r.title,
          href: `/rehber/${r.slug}`,
        }))}
      />
    </div>
  );
}
