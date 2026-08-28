import Link from "next/link";
import { Icon } from "@/components/Icon";
import { ContactButtons } from "@/components/ContactButtons";
import { getCategory, getDistrict } from "@/lib/data";
import { site } from "@/lib/site";
import type { Pro } from "@/lib/types";

export function ProCard({ pro }: { pro: Pro }) {
  const cats = pro.categories
    .map((s) => getCategory(s)?.shortName)
    .filter(Boolean)
    .slice(0, 4);
  const dists = pro.districts
    .map((s) => getDistrict(s)?.name)
    .filter(Boolean);

  return (
    <article className="enamel flex flex-col gap-3 rounded-2xl border border-border bg-surface p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-display text-lg font-semibold text-ink">
            <Link href={`/usta/${pro.slug}`} className="hover:text-orange">
              {pro.businessName}
            </Link>
          </h3>
          <p className="mt-0.5 text-sm text-muted">{cats.join(" · ")}</p>
        </div>
        {pro.featured && (
          <span className="shrink-0 rounded-full bg-bordo/10 px-2 py-0.5 text-xs font-semibold text-bordo">
            Vitrin
          </span>
        )}
      </div>

      {pro.rating != null && (
        <div className="flex items-center gap-1.5 text-sm">
          <Icon name="Star" className="h-4 w-4 fill-orange text-orange" />
          <span className="font-semibold text-ink">
            {pro.rating.toFixed(1)}
          </span>
          {pro.reviewCount != null && (
            <span className="text-muted">({pro.reviewCount} değerlendirme)</span>
          )}
        </div>
      )}

      <p className="line-clamp-2 text-sm text-ink-soft">{pro.about[0]}</p>

      <div className="flex flex-col gap-1 text-sm text-muted">
        <span className="flex items-center gap-1.5">
          <Icon name="MapPin" className="h-3.5 w-3.5 text-ink" />
          {dists.slice(0, 4).join(", ")}
          {dists.length > 4 ? " …" : ""}
        </span>
        <span className="flex items-center gap-1.5">
          <Icon name="Clock" className="h-3.5 w-3.5 text-ink" />
          {pro.workingHours}
        </span>
      </div>

      <div className="mt-1 border-t border-border pt-3">
        <ContactButtons
          phone={pro.phone}
          phoneDisplay={pro.phoneDisplay}
          whatsapp={pro.whatsapp}
          website={pro.website}
          size="sm"
          message={`Merhaba, ${pro.businessName} - corumustabul.com üzerinden ulaşıyorum.`}
        />
      </div>
    </article>
  );
}

export function ProList({
  pros,
  emptyLabel,
}: {
  pros: Pro[];
  emptyLabel?: string;
}) {
  if (pros.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border-strong bg-wash p-6">
        <p className="font-display font-semibold text-ink">
          {emptyLabel ?? "Bu iş kolunda henüz kayıtlı usta yok."}
        </p>
        <p className="mt-1.5 text-sm text-ink-soft">
          Usta ya da hizmet firmasıysanız, bu listede{" "}
          <span className="font-medium text-ink">ilk siz</span> yer alabilirsiniz.
          Bir usta tanıyorsanız da bize önerin.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/isletme-ekle"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-fg"
          >
            İşletme ekle
          </Link>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border-strong px-4 py-2 text-sm font-semibold text-ink hover:border-orange hover:text-orange"
          >
            WhatsApp'tan yaz
          </a>
        </div>
      </div>
    );
  }
  const vitrin = pros.filter((p) => p.featured);
  const digerleri = pros.filter((p) => !p.featured);

  if (vitrin.length > 0 && digerleri.length > 0) {
    return (
      <div className="space-y-6">
        <Grid pros={vitrin} />
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
            Diğer ustalar
          </p>
          <Grid pros={digerleri} />
        </div>
      </div>
    );
  }
  return <Grid pros={pros} />;
}

function Grid({ pros }: { pros: Pro[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {pros.map((p) => (
        <ProCard key={p.slug} pro={p} />
      ))}
    </div>
  );
}
