import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getCategory, getDistrict, getPro } from "@/lib/data";
import { getActivePros } from "@/lib/pros";
import { ContactButtons } from "@/components/ContactButtons";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LinkChips } from "@/components/InternalLinks";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMeta, proJsonLd } from "@/lib/seo";

export async function generateStaticParams() {
  return (await getActivePros()).map((p) => ({ slug: p.slug }));
}

export const dynamicParams = true;
export const revalidate = 600;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = await getPro(slug);
  if (!p) return {};
  const cats = p.categories.map((s) => getCategory(s)?.shortName).filter(Boolean);
  return pageMeta({
    title: `${p.businessName} - Çorum ${cats[0] ?? "Usta"} | Çorum Usta Bul`,
    description: `${p.businessName}: ${cats.join(", ")}. ${p.about[0]} İletişim ve çalışma saatleri.`,
    path: `/usta/${p.slug}`,
  });
}

export default async function ProPage({ params }: Props) {
  const { slug } = await params;
  const p = await getPro(slug);
  if (!p) notFound();

  const cats = p.categories
    .map((s) => getCategory(s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));
  const dists = p.districts
    .map((s) => getDistrict(s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: `Çorum ${cats[0]?.name ?? "Usta"}`, path: `/${cats[0]?.slug ?? ""}` },
    { name: p.businessName, path: `/usta/${p.slug}` },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs items={crumbs} />
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          proJsonLd(
            p,
            dists.map((d) => d.name),
          ),
        ]}
      />

      <article className="enamel overflow-hidden rounded-3xl border border-border-strong bg-white">
        <div className="border-b border-border bg-wash p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              {p.logo ? (
                <Image
                  src={p.logo}
                  alt={p.businessName}
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 rounded-2xl object-contain ring-1 ring-border"
                />
              ) : (
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-ink ring-1 ring-border">
                  <Icon name={cats[0]?.icon ?? "Wrench"} className="h-7 w-7" />
                </span>
              )}
              <div>
                <h1 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {p.businessName}
                </h1>
                <p className="mt-1 text-sm text-muted">
                  {cats.map((c) => c.name).join(" · ")}
                </p>
                {p.rating != null && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-sm">
                    <Icon
                      name="Star"
                      className="h-4 w-4 fill-orange text-orange"
                    />
                    <span className="font-semibold text-ink">
                      {p.rating.toFixed(1)}
                    </span>
                    {p.reviewCount != null && (
                      <span className="text-muted">
                        · {p.reviewCount} değerlendirme
                      </span>
                    )}
                  </p>
                )}
              </div>
            </div>
            {p.featured && (
              <span className="shrink-0 rounded-full bg-bordo/10 px-2.5 py-1 text-xs font-semibold text-bordo">
                Öne çıkan
              </span>
            )}
          </div>

          <div className="mt-5">
            <ContactButtons
              phone={p.phone}
              phoneDisplay={p.phoneDisplay}
              whatsapp={p.whatsapp}
              website={p.website}
              message={`Merhaba, ${p.businessName} - corumustabul.com üzerinden ulaşıyorum.`}
            />
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="prose-tr max-w-none">
            {p.about.map((t, i) => (
              <p key={i}>{t}</p>
            ))}
          </div>

          {p.photos && p.photos.length > 0 && (
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {p.photos.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`${p.businessName} iş fotoğrafı ${i + 1}`}
                  width={320}
                  height={240}
                  className="aspect-[4/3] w-full rounded-xl object-cover ring-1 ring-border"
                />
              ))}
            </div>
          )}

          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-white p-4">
              <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
                <Icon name="MapPin" className="h-3.5 w-3.5" /> Hizmet bölgeleri
              </dt>
              <dd className="mt-1.5 text-sm text-ink-soft">
                {dists.map((d) => d.name).join(", ")}
              </dd>
            </div>
            <div className="rounded-xl border border-border bg-white p-4">
              <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
                <Icon name="Clock" className="h-3.5 w-3.5" /> Çalışma saatleri
              </dt>
              <dd className="mt-1.5 text-sm text-ink-soft">{p.workingHours}</dd>
            </div>
          </dl>
        </div>
      </article>

      <LinkChips
        title="Hizmet verdiği iş kolları"
        links={cats.map((c) => ({ label: `Çorum ${c.name}`, href: `/${c.slug}` }))}
      />
      <LinkChips
        title="Hizmet bölgeleri"
        links={dists.map((d) => ({
          label: `${d.name} Ustaları`,
          href: `/ilce/${d.slug}`,
        }))}
      />

      <p className="mt-8 text-sm text-muted">
        Bu bilgiler {p.businessName} tarafından paylaşılmıştır.{" "}
        <Link href="/iletisim" className="text-orange underline">
          Düzeltme bildir
        </Link>
        .
      </p>
    </div>
  );
}
