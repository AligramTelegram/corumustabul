import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { categories, getCategory } from "@/data/categories";
import { districts, getDistrict } from "@/data/districts";
import {
  prosByCategoryDistrict,
  relatedCategories,
  neighborDistricts,
  categoriesInDistrict,
} from "@/lib/data";
import { comboSections, comboFaq } from "@/lib/content";
import { ProList } from "@/components/ProCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LinkChips } from "@/components/InternalLinks";
import { SunHeading } from "@/components/SunHeading";
import { Faq } from "@/components/Faq";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  itemListJsonLd,
  pageMeta,
  districtCategoryIntro,
} from "@/lib/seo";

export function generateStaticParams() {
  const out: { kategori: string; ilce: string }[] = [];
  for (const c of categories) {
    for (const d of districts) out.push({ kategori: c.slug, ilce: d.slug });
  }
  return out;
}

export const dynamicParams = false;

type Props = { params: Promise<{ kategori: string; ilce: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategori, ilce } = await params;
  const c = getCategory(kategori);
  const d = getDistrict(ilce);
  if (!c || !d) return {};
  const yer = d.isCenter ? "Çorum Merkez" : d.name;
  const suffix =
    c.group === "acil" ? "7/24 Acil Servis" : "Usta ve Fiyatları";
  return pageMeta({
    title: `${yer} ${c.shortName} - ${suffix} | Çorum Usta Bul`,
    description: `${yer} ${c.name.toLowerCase()} hizmeti: bölgede çalışan ustaların iletişim bilgileri, fiyatların neye göre değiştiği ve iş öncesi bilmeniz gerekenler. Ustaya doğrudan telefonla ulaşın.`,
    path: `/${c.slug}/${d.slug}`,
  });
}

export default async function CategoryDistrictPage({ params }: Props) {
  const { kategori, ilce } = await params;
  const c = getCategory(kategori);
  const d = getDistrict(ilce);
  if (!c || !d) notFound();

  const pros = prosByCategoryDistrict(c.slug, d.slug);
  const lead = districtCategoryIntro(c, d).slice(0, 2);
  const sections = comboSections(c, d);
  const extraFaq = comboFaq(c, d);
  const faq = [{ q: extraFaq.q, a: extraFaq.a }, ...c.faq];
  const neighbors = neighborDistricts(d.slug);
  const related = relatedCategories(c.slug);
  const otherCats = categoriesInDistrict(d.slug).filter((x) => x.slug !== c.slug);

  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: `Çorum ${c.name}`, path: `/${c.slug}` },
    { name: d.name, path: `/${c.slug}/${d.slug}` },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Breadcrumbs items={crumbs} />
      <JsonLd
        data={[breadcrumbJsonLd(crumbs), itemListJsonLd(pros), faqJsonLd(faq)]}
      />

      <header className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f3f3f4] text-ink">
          <Icon name={c.icon} className="h-6 w-6" />
        </span>
        <div>
          <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            {d.name} {c.name}
          </h1>
          <p className="mt-1.5 text-muted">
            {d.name} bölgesinde çalışan ustalar, iletişim bilgileri ve fiyat
            rehberi
          </p>
        </div>
      </header>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_18rem]">
        {/* ANA İÇERİK */}
        <div className="min-w-0">
          <div className="prose-tr max-w-none">
            {lead.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <section id="ustalar" className="mt-8 scroll-mt-20">
            <SunHeading>
              {d.name} bölgesindeki {c.shortName.toLowerCase()} ustaları
            </SunHeading>
            <ProList pros={pros} />
            {pros.length === 0 && (
              <p className="mt-4 text-sm text-muted">
                Şu an {d.name} için doğrudan kayıt yok. Çorum geneli liste için{" "}
                <Link href={`/${c.slug}`} className="font-medium text-orange underline">
                  Çorum {c.name}
                </Link>{" "}
                sayfasına bakın.
              </p>
            )}
          </section>

          {sections.map((sec) => (
            <section key={sec.heading} className="mt-10">
              <SunHeading as="h2">{sec.heading}</SunHeading>
              <div className="space-y-2.5">
                {sec.paragraphs.map((p, i) => (
                  <p key={i} className="text-[0.95rem] leading-7 text-ink-soft">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <section className="mt-10">
            <SunHeading as="h2">Sık sorulan sorular</SunHeading>
            <Faq items={faq} />
          </section>
        </div>

        {/* YAN PANEL */}
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <div className="enamel rounded-2xl border border-border-strong bg-white p-5">
            <p className="font-display text-lg font-semibold text-ink">
              {d.name}&apos;de {c.shortName.toLowerCase()} mi lazım?
            </p>
            <p className="mt-1.5 text-sm text-ink-soft">
              {pros.length > 0
                ? `Bu sayfada ${pros.length} usta listeleniyor. Doğrudan arayın, arada komisyon yok.`
                : "Bölgede çalışan ustayı Çorum geneli listeden bulabilirsiniz."}
            </p>
            <a
              href="#ustalar"
              className="enamel mt-4 flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-fg"
            >
              <Icon name="Search" className="h-4 w-4" />
              Ustaları gör
            </a>
            <Link
              href={`/${c.slug}`}
              className="mt-2 flex items-center justify-center gap-1 rounded-full border border-border-strong px-4 py-2.5 text-sm font-semibold text-ink hover:border-orange hover:text-orange"
            >
              Tüm Çorum {c.shortName.toLowerCase()} ustaları
            </Link>
          </div>

          {neighbors.length > 0 && (
            <div className="mt-4 rounded-2xl border border-border bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Yakın ilçeler
              </p>
              <ul className="mt-2 space-y-1.5 text-sm">
                {neighbors.map((n) => (
                  <li key={n.slug}>
                    <Link
                      href={`/${c.slug}/${n.slug}`}
                      className="text-ink-soft hover:text-orange"
                    >
                      {n.name} {c.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      <LinkChips
        title={`${d.name} bölgesinde diğer iş kolları`}
        links={(otherCats.length ? otherCats : related).map((x) => ({
          label: `${d.name} ${x.shortName}`,
          href: `/${x.slug}/${d.slug}`,
        }))}
      />

      <LinkChips
        title="İlgili iş kolları"
        links={related.map((r) => ({
          label: `Çorum ${r.name}`,
          href: `/${r.slug}`,
        }))}
      />
    </div>
  );
}
