"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { categories } from "@/data/categories";
import { districts } from "@/data/districts";
import { Icon } from "@/components/Icon";

/**
 * İş kolu + ilçe açılır menüsü. Seçime göre en uygun sayfaya yönlendirir:
 *  - ikisi de seçili -> /[kategori]/[ilce]
 *  - sadece iş kolu   -> /[kategori]
 *  - sadece ilçe      -> /ilce/[ilce]
 */
export function Finder({
  defaultCategory,
  defaultDistrict,
}: {
  defaultCategory?: string;
  defaultDistrict?: string;
}) {
  const router = useRouter();
  const [cat, setCat] = useState(defaultCategory ?? "");
  const [dist, setDist] = useState(defaultDistrict ?? "");

  const acil = categories.filter((c) => c.group === "acil");
  const diger = categories.filter((c) => c.group !== "acil");

  const go = () => {
    if (cat && dist) router.push(`/${cat}/${dist}`);
    else if (cat) router.push(`/${cat}`);
    else if (dist) router.push(`/ilce/${dist}`);
  };

  const sel =
    "w-full appearance-none rounded-xl border border-border-strong bg-white px-4 py-3 pr-10 text-ink outline-none focus:border-orange";

  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-border-strong bg-white p-2.5 shadow-[0_18px_40px_-24px_rgba(30,33,38,0.4)] sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <select
          aria-label="İş kolu"
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          className={sel}
        >
          <option value="">İş kolu seçin</option>
          <optgroup label="Acil ihtiyaçlar">
            {acil.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </optgroup>
          <optgroup label="Diğer iş kolları">
            {diger.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </optgroup>
        </select>
        <Icon
          name="ChevronRight"
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-muted"
        />
      </div>

      <div className="relative flex-1">
        <select
          aria-label="İlçe"
          value={dist}
          onChange={(e) => setDist(e.target.value)}
          className={sel}
        >
          <option value="">İlçe seçin</option>
          {districts.map((d) => (
            <option key={d.slug} value={d.slug}>
              {d.name}
            </option>
          ))}
        </select>
        <Icon
          name="ChevronRight"
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-muted"
        />
      </div>

      <button
        type="button"
        onClick={go}
        disabled={!cat && !dist}
        className="enamel inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-fg transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Icon name="Search" className="h-4 w-4" />
        Usta bul
      </button>
    </div>
  );
}
