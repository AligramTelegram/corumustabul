import Link from "next/link";
import { getAllPros } from "@/lib/pros";
import { getCategory } from "@/data/categories";
import { supabaseConfigured } from "@/lib/supabase";
import { RowActions } from "./RowActions";

export const dynamic = "force-dynamic";

export default async function AdminHome() {
  if (!supabaseConfigured) {
    return (
      <p className="text-sm text-bordo">
        Supabase ortam değişkenleri tanımlı değil. Vercel &rarr; Settings &rarr;
        Environment Variables&apos;a ekleyin.
      </p>
    );
  }

  const pros = await getAllPros();
  const today = new Date().toISOString().slice(0, 10);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-semibold text-ink">
          Ustalar <span className="text-muted">({pros.length})</span>
        </h1>
        <Link
          href="/admin/usta/yeni"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-fg"
        >
          + Yeni usta
        </Link>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-border-strong bg-white">
        {pros.length === 0 && (
          <p className="p-5 text-sm text-muted">
            Henüz usta yok. &quot;Yeni usta&quot; ile ekleyin.
          </p>
        )}
        {pros.map((p) => {
          const expired = p.paidUntil.slice(0, 10) < today;
          const cats = p.categories
            .map((s) => getCategory(s)?.shortName)
            .filter(Boolean)
            .join(", ");
          return (
            <div
              key={p.id}
              className="flex flex-wrap items-center gap-3 border-b border-border px-4 py-3 last:border-0"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <Link
                    href={`/admin/usta/${p.id}`}
                    className="font-medium text-ink hover:text-orange"
                  >
                    {p.businessName}
                  </Link>
                  {p.featured && (
                    <span className="rounded-full bg-bordo/10 px-1.5 text-xs font-semibold text-bordo">
                      vitrin
                    </span>
                  )}
                  {p.status === "passive" && (
                    <span className="rounded-full bg-muted/15 px-1.5 text-xs font-semibold text-muted">
                      pasif
                    </span>
                  )}
                  {expired && p.status === "active" && (
                    <span className="rounded-full bg-orange/15 px-1.5 text-xs font-semibold text-orange-deep">
                      süresi geçmiş
                    </span>
                  )}
                </div>
                <p className="truncate text-xs text-muted">
                  {cats} · {p.phoneDisplay}
                  {p.rating != null && ` · ${p.rating.toFixed(1)}★`}
                </p>
              </div>
              <RowActions id={p.id} slug={p.slug} status={p.status} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
