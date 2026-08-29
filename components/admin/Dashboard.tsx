"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { categories } from "@/data/categories";
import { districts } from "@/data/districts";
import { RowActions } from "@/components/admin/RowActions";
import {
  bucketOf,
  bucketLabel,
  bucketClass,
  daysLeft,
  type Bucket,
} from "@/lib/proStatus";
import type { ProWithId } from "@/lib/pros";

const catName = (slug: string) =>
  categories.find((c) => c.slug === slug)?.shortName ?? slug;
const distName = (slug: string) =>
  districts.find((d) => d.slug === slug)?.name ?? slug;

function fmt(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

const FILTERS: { key: Bucket | "all"; label: string }[] = [
  { key: "all", label: "Tümü" },
  { key: "expired", label: "Süresi geçmiş" },
  { key: "expiring", label: "Süresi yaklaşan" },
  { key: "active", label: "Aktif" },
  { key: "passive", label: "Pasif" },
];

export function Dashboard({ pros }: { pros: ProWithId[] }) {
  const [filter, setFilter] = useState<Bucket | "all">("all");
  const [q, setQ] = useState("");

  const withBucket = useMemo(
    () => pros.map((p) => ({ p, b: bucketOf(p), d: daysLeft(p.paidUntil) })),
    [pros],
  );

  const counts = useMemo(() => {
    const c: Record<Bucket, number> = {
      expired: 0,
      expiring: 0,
      active: 0,
      passive: 0,
    };
    withBucket.forEach(({ b }) => (c[b] += 1));
    return c;
  }, [withBucket]);

  const coverage = useMemo(() => {
    const map = new Map<string, number>();
    pros
      .filter((p) => bucketOf(p) === "active" || bucketOf(p) === "expiring")
      .forEach((p) =>
        p.categories.forEach((s) => map.set(s, (map.get(s) ?? 0) + 1)),
      );
    return categories.map((c) => ({ c, n: map.get(c.slug) ?? 0 }));
  }, [pros]);
  const gaps = coverage.filter((x) => x.n === 0).length;

  const rows = useMemo(() => {
    const nq = q.trim().toLocaleLowerCase("tr");
    return withBucket
      .filter(({ b }) => filter === "all" || b === filter)
      .filter(({ p }) => {
        if (!nq) return true;
        const hay = [
          p.businessName,
          p.name,
          p.phoneDisplay,
          p.phone,
          p.whatsapp,
          p.website ?? "",
          ...p.categories.map(catName),
          ...p.districts.map(distName),
        ]
          .join(" ")
          .toLocaleLowerCase("tr");
        return hay.includes(nq);
      })
      .sort((a, b) => a.d - b.d);
  }, [withBucket, filter, q]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-display text-2xl font-semibold text-ink">
          Ustalar
        </h1>
        <Link
          href="/admin/usta/yeni"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-fg"
        >
          + Yeni usta
        </Link>
      </div>

      {/* İstatistik */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        <Stat label="Toplam" value={pros.length} />
        <Stat
          label="Süresi geçmiş"
          value={counts.expired}
          tone="bordo"
          onClick={() => setFilter("expired")}
        />
        <Stat
          label="Süresi yaklaşan"
          value={counts.expiring}
          tone="orange"
          onClick={() => setFilter("expiring")}
        />
        <Stat label="Aktif" value={counts.active} tone="green" />
        <Stat label="Pasif" value={counts.passive} tone="muted" />
      </div>

      {/* İş kolu kapsamı */}
      <div className="rounded-xl border border-border-strong bg-white p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-ink">
            İş kolu kapsamı
          </h2>
          <span className="text-xs text-muted">
            {gaps} iş kolunda hiç usta yok
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {coverage.map(({ c, n }) => (
            <span
              key={c.slug}
              className={`rounded-md px-2 py-1 text-xs ${
                n === 0
                  ? "bg-bordo/10 text-bordo"
                  : "bg-emerald-500/12 text-emerald-700"
              }`}
              title={`${n} usta`}
            >
              {c.shortName} {n > 0 && <b>{n}</b>}
            </span>
          ))}
        </div>
      </div>

      {/* Arama */}
      <div className="relative">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Usta ara: işletme adı, telefon, iş kolu, ilçe, web sitesi"
          className="w-full rounded-xl border border-border-strong bg-white px-4 py-2.5 pr-16 text-sm outline-none focus:border-orange"
        />
        {q && (
          <button
            onClick={() => setQ("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted hover:text-ink"
          >
            temizle
          </button>
        )}
      </div>

      {/* Filtre */}
      <div className="flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium ${
              filter === f.key
                ? "bg-primary text-primary-fg"
                : "border border-border-strong bg-white text-ink-soft"
            }`}
          >
            {f.label}
          </button>
        ))}
        <span className="ml-auto text-xs text-muted">{rows.length} sonuç</span>
      </div>

      {/* Liste */}
      <div className="overflow-hidden rounded-xl border border-border-strong bg-white">
        {rows.length === 0 && (
          <p className="p-5 text-sm text-muted">Kayıt yok.</p>
        )}
        {rows.map(({ p, b, d }) => (
          <div
            key={p.id}
            className="border-b border-border px-4 py-3 last:border-0"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-1.5">
                  <Link
                    href={`/admin/usta/${p.id}`}
                    className="font-medium text-ink hover:text-orange"
                  >
                    {p.businessName}
                  </Link>
                  <span
                    className={`rounded-full px-1.5 text-xs font-semibold ${bucketClass[b]}`}
                  >
                    {bucketLabel[b]}
                  </span>
                  {p.featured && (
                    <span className="rounded-full bg-bordo/10 px-1.5 text-xs font-semibold text-bordo">
                      ★
                    </span>
                  )}
                </div>
                <p className="mt-0.5 truncate text-xs text-muted">
                  {p.categories.map(catName).join(", ")} · {p.phoneDisplay}
                  {p.rating != null && ` · ${p.rating.toFixed(1)}★`}
                </p>
              </div>
              <div className="shrink-0 text-right text-xs">
                <div className="text-ink-soft">{fmt(p.paidUntil)}</div>
                <div
                  className={
                    d < 0
                      ? "font-semibold text-bordo"
                      : d <= 14
                        ? "font-semibold text-orange-deep"
                        : "text-muted"
                  }
                >
                  {d < 0 ? `${-d} gün geçti` : `${d} gün kaldı`}
                </div>
              </div>
            </div>
            <div className="mt-2 flex justify-end">
              <RowActions
                id={p.id}
                slug={p.slug}
                status={p.status}
                featured={p.featured}
                paidUntil={p.paidUntil}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  tone = "ink",
  onClick,
}: {
  label: string;
  value: number;
  tone?: "ink" | "bordo" | "orange" | "green" | "muted";
  onClick?: () => void;
}) {
  const color = {
    ink: "text-ink",
    bordo: "text-bordo",
    orange: "text-orange-deep",
    green: "text-emerald-700",
    muted: "text-muted",
  }[tone];
  return (
    <button
      onClick={onClick}
      disabled={!onClick}
      className="rounded-xl border border-border-strong bg-white p-3 text-left disabled:cursor-default"
    >
      <div className={`font-display text-2xl font-semibold ${color}`}>
        {value}
      </div>
      <div className="text-xs text-muted">{label}</div>
    </button>
  );
}
