import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { districts, getDistrict } from "@/data/districts";
import { categories } from "@/data/categories";
import { prosByDistrict, neighborDistricts } from "@/lib/data";
import { ProList } from "@/components/ProCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LinkChips } from "@/components/InternalLinks";
import { SunHeading } from "@/components/SunHeading";
import { Finder } from "@/components/Finder";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, itemListJsonLd, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return districts.map((d) => ({ ilce: d.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ ilce: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ilce } = await params;
  const d = getDistrict(ilce);
  if (!d) return {};
  return pageMeta({
    title: `${d.name} Ustaları - Elektrikçi, Tesisatçı, Boyacı | Çorum Usta Bul`,
    description: `${d.name} bölgesinde hizmet veren ustalar ve firmalar. İş koluna göre seçin, telefonla doğrudan ulaşın.`,
    path: `/ilce/${d.slug}`,
  });
}

export default async function DistrictPage({ params }: Props) {
  const { ilce } = await params;
  const d = getDistrict(ilce);
  if (!d) notFound();

  const pros = prosByDistrict(d.slug);
  const neighbors = neighborDistricts(d.slug);
  const acil = categories.filter((c) => c.group === "acil");
  const diger = categories.filter((c) => c.group !== "acil");
  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "İlçeler", path: "/ilce/merkez" },
    { name: d.name, path: `/ilce/${d.slug}` },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Breadcrumbs items={crumbs} />
      <JsonLd data={[breadcrumbJsonLd(crumbs), itemListJsonLd(pros)]} />

      <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
        {d.name} Ustaları
      </h1>
      <p className="mt-2 max-w-2xl text-muted">{d.blurb}</p>

      <div className="mt-6 max-w-2xl">
        <Finder defaultDistrict={d.slug} />
      </div>

      <section className="mt-10">
        <SunHeading as="h2">Acil ihtiyaçlar - {d.name}</SunHeading>
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {acil.map((c) => (
            <IlceKategoriLink key={c.slug} href={`/${c.slug}/${d.slug}`} icon={c.icon}>
              {d.name} {c.name}
            </IlceKategoriLink>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <SunHeading as="h2">Tadilat ve diğer - {d.name}</SunHeading>
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {diger.map((c) => (
            <IlceKategoriLink key={c.slug} href={`/${c.slug}/${d.slug}`} icon={c.icon}>
              {d.name} {c.name}
            </IlceKategoriLink>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SunHeading as="h2">{d.name} bölgesindeki kayıtlı ustalar</SunHeading>
        <ProList
          pros={pros}
          emptyLabel={`${d.name} bölgesinde henüz kayıtlı usta yok.`}
        />
      </section>

      <LinkChips
        title="Yakın ilçeler"
        links={neighbors.map((n) => ({
          label: `${n.name} Ustaları`,
          href: `/ilce/${n.slug}`,
        }))}
      />
    </div>
  );
}

function IlceKategoriLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2.5 rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-ink-soft transition-colors hover:border-orange hover:text-orange"
    >
      <Icon name={icon} className="h-4 w-4 shrink-0 text-ink group-hover:text-orange" />
      {children}
    </Link>
  );
}
