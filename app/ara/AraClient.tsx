"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { categories } from "@/data/categories";
import { districts } from "@/data/districts";

function norm(s: string) {
  return s
    .toLocaleLowerCase("tr")
    .replaceAll("ı", "i")
    .replaceAll("ş", "s")
    .replaceAll("ğ", "g")
    .replaceAll("ç", "c")
    .replaceAll("ö", "o")
    .replaceAll("ü", "u");
}

export function AraClient() {
  const [q, setQ] = useState("");
  const nq = norm(q.trim());

  const results = useMemo(() => {
    if (nq.length < 2) return [];
    const out: { label: string; href: string }[] = [];
    for (const c of categories) {
      const hay = norm([c.name, c.primaryKeyword, ...c.keywords].join(" "));
      if (hay.includes(nq)) out.push({ label: `Çorum ${c.name}`, href: `/${c.slug}` });
    }
    for (const d of districts) {
      if (norm(d.name).includes(nq))
        out.push({ label: `${d.name} Ustaları`, href: `/ilce/${d.slug}` });
    }
    // kategori + ilçe kombinasyonu
    for (const c of categories) {
      for (const d of districts) {
        if (norm(`${d.name} ${c.name}`).includes(nq))
          out.push({
            label: `${d.name} ${c.name}`,
            href: `/${c.slug}/${d.slug}`,
          });
      }
    }
    return out.slice(0, 30);
  }, [nq]);

  return (
    <div className="mt-4">
      <input
        autoFocus
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Örn: iskilip elektrikçi, çilingir, kombi"
        className="w-full rounded-lg border border-border bg-surface px-4 py-2.5"
      />
      <ul className="mt-4 divide-y divide-border rounded-xl border border-border bg-surface">
        {results.map((r) => (
          <li key={r.href}>
            <Link href={r.href} className="block p-3 text-sm hover:text-accent">
              {r.label}
            </Link>
          </li>
        ))}
        {nq.length >= 2 && results.length === 0 && (
          <li className="p-3 text-sm text-muted">Sonuç bulunamadı.</li>
        )}
      </ul>
    </div>
  );
}
