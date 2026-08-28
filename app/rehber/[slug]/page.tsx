import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { posts, getPost, postsSorted } from "@/data/rehber";
import { getCategory } from "@/data/categories";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SunHeading } from "@/components/SunHeading";
import { Faq } from "@/components/Faq";
import { LinkChips } from "@/components/InternalLinks";
import { JsonLd } from "@/components/JsonLd";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  pageMeta,
} from "@/lib/seo";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return pageMeta({
    title: `${p.title} | Çorum Usta Bul`,
    description: p.description,
    path: `/rehber/${p.slug}`,
  });
}

function fmt(d: string) {
  return new Date(d).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function RehberPostPage({ params }: Props) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  const cats = p.categorySlugs
    .map((s) => getCategory(s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));
  const others = postsSorted()
    .filter((x) => x.slug !== p.slug)
    .slice(0, 3);

  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Rehber", path: "/rehber" },
    { name: p.title, path: `/rehber/${p.slug}` },
  ];

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs items={crumbs} />
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          articleJsonLd({
            title: p.title,
            description: p.description,
            path: `/rehber/${p.slug}`,
            date: p.date,
            updated: p.updated,
          }),
          ...(p.faq ? [faqJsonLd(p.faq)] : []),
        ]}
      />

      <p className="text-xs text-muted">
        {fmt(p.date)} · {p.readingMin} dk okuma
      </p>
      <h1 className="mt-1.5 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
        {p.title}
      </h1>

      <div className="prose-tr mt-6 max-w-none">
        {p.intro.map((t, i) => (
          <p key={i}>{t}</p>
        ))}
      </div>

      {cats.length > 0 && (
        <div className="mt-6 rounded-xl border border-border-strong bg-wash p-4 text-sm">
          <span className="text-muted">İlgili sayfalar: </span>
          {cats.map((c, i) => (
            <span key={c.slug}>
              {i > 0 && ", "}
              <Link href={`/${c.slug}`} className="font-medium text-orange hover:underline">
                Çorum {c.name}
              </Link>
            </span>
          ))}
        </div>
      )}

      {p.sections.map((s) => (
        <section key={s.heading} className="mt-9">
          <SunHeading as="h2">{s.heading}</SunHeading>
          <div className="space-y-2.5">
            {s.paragraphs.map((t, i) => (
              <p key={i} className="text-[0.95rem] leading-7 text-ink-soft">
                {t}
              </p>
            ))}
          </div>
        </section>
      ))}

      {p.faq && p.faq.length > 0 && (
        <section className="mt-10">
          <SunHeading as="h2">Sık sorulan sorular</SunHeading>
          <Faq items={p.faq} />
        </section>
      )}

      <LinkChips
        title="Başka rehberler"
        links={others.map((o) => ({
          label: o.title,
          href: `/rehber/${o.slug}`,
        }))}
      />
    </article>
  );
}
