import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import { districts } from "@/data/districts";
import { postsSorted } from "@/data/rehber";
import { CategoryGrid } from "@/components/CategoryCard";
import { Finder } from "@/components/Finder";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Çorum Usta Bul - Çilingir, Elektrikçi, Tesisatçı ve 20 İş Kolunda Usta" },
  description:
    "Çorum merkez ve 13 ilçede çilingir, elektrikçi, su tesisatçısı, çekici, boyacı, kombi servisi ve daha fazlası. İş kolunu ve ilçeni seç, ustaya doğrudan telefonla ulaş. Komisyon yok.",
  alternates: { canonical: canonical("/") },
};

export default function Home() {
  const acil = categories.filter((c) => c.group === "acil");
  const diger = categories.filter((c) => c.group !== "acil");

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border-strong">
        <Image
          src="/emblem.png"
          alt=""
          aria-hidden
          width={520}
          height={520}
          className="pointer-events-none absolute -right-28 -top-24 h-88 w-88 opacity-[0.06] sm:h-120 sm:w-120 sm:opacity-[0.08]"
        />
        <div className="mx-auto max-w-5xl px-4 py-14 sm:py-20">
          <h1 className="rise max-w-2xl font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl md:text-6xl">
            Çorum&apos;da işini bilen ustayı{" "}
            <span className="text-orange">bir telefonla</span> bulun
          </h1>
          <p className="rise mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            Çilingir, elektrikçi, su tesisatçısı, boyacı, kombi servisi ve daha
            fazlası. Bölgenizde çalışan ustaları iş koluna ve ilçeye göre
            listeledik. Arada komisyon yok.
          </p>

          <div className="rise mt-7 max-w-2xl">
            <Finder />
          </div>

          <ol className="rise mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
            {["İş kolunu seç", "İlçeni seç", "Ustayı doğrudan ara"].map(
              (t, i) => (
                <li key={t} className="flex items-center gap-2">
                  {i > 0 && <span className="text-border-strong">·</span>}
                  <span className="font-semibold text-orange">{i + 1}</span>
                  {t}
                </li>
              ),
            )}
            <li className="flex items-center gap-2">
              <span className="text-border-strong">·</span>
              <span className="text-ink-soft">komisyon yok</span>
            </li>
          </ol>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4">
        {/* İŞ KOLLARI */}
        <section className="py-12">
          <SectionHead title="İş kolları" />

          <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-muted">
            Acil ihtiyaçlar
          </h3>
          <CategoryGrid categories={acil} />

          <h3 className="mb-4 mt-10 text-center text-sm font-semibold uppercase tracking-wider text-muted">
            Tadilat ve diğer
          </h3>
          <CategoryGrid categories={diger} />

          <div className="mt-8 text-center">
            <Link
              href="/kategoriler"
              className="text-sm font-semibold text-orange hover:underline"
            >
              Tüm iş kolları →
            </Link>
          </div>
        </section>

        {/* İLÇELER */}
        <section className="border-t border-border py-12">
          <SectionHead
            title="İlçelere göre"
            subtitle="Bölgenizdeki tüm iş kolları"
          />
          <div className="flex flex-wrap justify-center gap-2">
            {districts.map((d) => (
              <Link
                key={d.slug}
                href={`/ilce/${d.slug}`}
                className="rounded-full border border-border-strong bg-white px-3.5 py-1.5 text-sm text-ink-soft transition-colors hover:border-orange hover:text-orange"
              >
                {d.name}
              </Link>
            ))}
          </div>
        </section>

        {/* REHBER */}
        <section className="border-t border-border py-12">
          <SectionHead title="Rehber" subtitle="İş yaptırmadan önce oku" />
          <div className="grid gap-4 sm:grid-cols-3">
            {postsSorted()
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/rehber/${p.slug}`}
                  className="rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-orange"
                >
                  <p className="text-xs text-muted">{p.readingMin} dk okuma</p>
                  <p className="mt-1.5 font-display font-semibold text-ink">
                    {p.title}
                  </p>
                  <p className="mt-1.5 line-clamp-3 text-sm text-ink-soft">
                    {p.description}
                  </p>
                </Link>
              ))}
          </div>
        </section>

        {/* İŞLETME CTA */}
        <section className="mb-16 mt-10 overflow-hidden rounded-3xl bg-primary text-primary-fg">
          <div className="relative p-8 sm:p-12">
            <Image
              src="/emblem.png"
              alt=""
              aria-hidden
              width={320}
              height={320}
              className="pointer-events-none absolute -bottom-20 -right-12 h-72 w-72 opacity-[0.12] mix-blend-luminosity"
            />
            <p className="text-sm font-semibold uppercase tracking-wider text-orange">
              Ustaysanız
            </p>
            <h2 className="mt-2 max-w-lg font-display text-2xl font-semibold sm:text-3xl">
              Çorum&apos;da iş kolunuzda ve ilçenizde listelenin
            </h2>
            <p className="mt-3 max-w-xl text-primary-fg/75">
              Müşteriler size doğrudan telefon ve WhatsApp&apos;tan ulaşsın,
              arada komisyon olmasın. Katılmak için bize WhatsApp&apos;tan yazın.
            </p>
            <Link
              href="/isletme-ekle"
              className="enamel mt-6 inline-block rounded-full bg-accent px-5 py-3 font-semibold text-accent-fg transition-transform hover:-translate-y-0.5"
            >
              İşletmenizi ekleyin
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function SectionHead({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6 text-center">
      <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1.5 text-sm text-muted">{subtitle}</p>
      )}
    </div>
  );
}
