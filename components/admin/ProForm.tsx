"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { categories } from "@/data/categories";
import { districts } from "@/data/districts";
import type { Pro } from "@/lib/types";

type FormPro = Partial<Pro> & { id?: string };

const input =
  "w-full rounded-lg border border-border-strong bg-white px-3 py-2 text-sm outline-none focus:border-orange";
const label = "block text-xs font-semibold uppercase tracking-wide text-muted";

export function ProForm({ initial }: { initial?: FormPro }) {
  const router = useRouter();
  const editing = Boolean(initial?.id);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  const [f, setF] = useState<FormPro>({
    businessName: "",
    name: "",
    slug: "",
    categories: [],
    districts: [],
    phone: "",
    phoneDisplay: "",
    whatsapp: "",
    website: "",
    logo: "",
    photos: [],
    about: [],
    workingHours: "",
    featured: false,
    status: "active",
    rating: undefined,
    reviewCount: undefined,
    paidUntil: "",
    ...initial,
  });

  const set = <K extends keyof FormPro>(k: K, v: FormPro[K]) =>
    setF((s) => ({ ...s, [k]: v }));

  const toggle = (k: "categories" | "districts", slug: string) =>
    setF((s) => {
      const cur = new Set(s[k] ?? []);
      cur.has(slug) ? cur.delete(slug) : cur.add(slug);
      return { ...s, [k]: [...cur] };
    });

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr("");

    const payload: FormPro = {
      ...f,
      phoneDisplay: f.phoneDisplay || f.phone || "",
      whatsapp: (f.whatsapp || f.phone || "").replace(/\D/g, ""),
      name: f.name || f.businessName,
      rating: f.rating ? Number(f.rating) : undefined,
      reviewCount: f.reviewCount ? Number(f.reviewCount) : undefined,
    };

    const res = await fetch(
      editing ? `/api/admin/pros/${initial!.id}` : "/api/admin/pros",
      {
        method: editing ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );
    setBusy(false);
    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      const j = await res.json().catch(() => ({}));
      setErr(j.error || "Kaydedilemedi");
    }
  }

  return (
    <form onSubmit={save} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label}>İşletme adı *</label>
          <input
            className={input}
            value={f.businessName ?? ""}
            onChange={(e) => set("businessName", e.target.value)}
            required
          />
        </div>
        <div>
          <label className={label}>Slug (boşsa otomatik)</label>
          <input
            className={input}
            value={f.slug ?? ""}
            onChange={(e) => set("slug", e.target.value)}
            placeholder="ornek-firma"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className={label}>Telefon *</label>
          <input
            className={input}
            value={f.phone ?? ""}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="+905551112233"
            required
          />
        </div>
        <div>
          <label className={label}>Görünen telefon</label>
          <input
            className={input}
            value={f.phoneDisplay ?? ""}
            onChange={(e) => set("phoneDisplay", e.target.value)}
            placeholder="0555 111 22 33"
          />
        </div>
        <div>
          <label className={label}>WhatsApp (boşsa telefon)</label>
          <input
            className={input}
            value={f.whatsapp ?? ""}
            onChange={(e) => set("whatsapp", e.target.value)}
            placeholder="905551112233"
          />
        </div>
      </div>

      <div>
        <label className={label}>İş kolları</label>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {categories.map((c) => {
            const on = (f.categories ?? []).includes(c.slug);
            return (
              <button
                key={c.slug}
                type="button"
                onClick={() => toggle("categories", c.slug)}
                className={`rounded-full border px-2.5 py-1 text-xs ${
                  on
                    ? "border-orange bg-orange text-white"
                    : "border-border-strong bg-white text-ink-soft"
                }`}
              >
                {c.name}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className={label}>Hizmet verdiği ilçeler</label>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {districts.map((d) => {
            const on = (f.districts ?? []).includes(d.slug);
            return (
              <button
                key={d.slug}
                type="button"
                onClick={() => toggle("districts", d.slug)}
                className={`rounded-full border px-2.5 py-1 text-xs ${
                  on
                    ? "border-orange bg-orange text-white"
                    : "border-border-strong bg-white text-ink-soft"
                }`}
              >
                {d.name}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className={label}>Tanıtım (her paragraf yeni satır)</label>
        <textarea
          className={input}
          rows={4}
          value={(f.about ?? []).join("\n")}
          onChange={(e) =>
            set(
              "about",
              e.target.value.split("\n").map((l) => l.trim()).filter(Boolean),
            )
          }
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label}>Web sitesi</label>
          <input
            className={input}
            value={f.website ?? ""}
            onChange={(e) => set("website", e.target.value)}
            placeholder="https://..."
          />
        </div>
        <div>
          <label className={label}>Çalışma saatleri</label>
          <input
            className={input}
            value={f.workingHours ?? ""}
            onChange={(e) => set("workingHours", e.target.value)}
            placeholder="7/24 veya Hafta içi 09:00-18:00"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label}>Logo URL (opsiyonel)</label>
          <input
            className={input}
            value={f.logo ?? ""}
            onChange={(e) => set("logo", e.target.value)}
          />
        </div>
        <div>
          <label className={label}>Foto URL&apos;leri (her satır bir)</label>
          <textarea
            className={input}
            rows={2}
            value={(f.photos ?? []).join("\n")}
            onChange={(e) =>
              set(
                "photos",
                e.target.value.split("\n").map((l) => l.trim()).filter(Boolean),
              )
            }
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-4">
        <div>
          <label className={label}>Puan</label>
          <input
            className={input}
            type="number"
            step="0.1"
            min="1"
            max="5"
            value={f.rating ?? ""}
            onChange={(e) =>
              set("rating", e.target.value ? Number(e.target.value) : undefined)
            }
          />
        </div>
        <div>
          <label className={label}>Yorum sayısı</label>
          <input
            className={input}
            type="number"
            min="0"
            value={f.reviewCount ?? ""}
            onChange={(e) =>
              set(
                "reviewCount",
                e.target.value ? Number(e.target.value) : undefined,
              )
            }
          />
        </div>
        <div>
          <label className={label}>Durum</label>
          <select
            className={input}
            value={f.status}
            onChange={(e) =>
              set("status", e.target.value as "active" | "passive")
            }
          >
            <option value="active">Aktif</option>
            <option value="passive">Pasif</option>
          </select>
        </div>
        <div>
          <label className={label}>Ödeme bitiş</label>
          <input
            className={input}
            type="date"
            value={f.paidUntil ?? ""}
            onChange={(e) => set("paidUntil", e.target.value)}
          />
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={Boolean(f.featured)}
          onChange={(e) => set("featured", e.target.checked)}
        />
        Vitrin (listede en üstte göster)
      </label>

      {err && <p className="text-sm text-bordo">{err}</p>}

      <div className="flex gap-2">
        <button
          disabled={busy}
          className="rounded-lg bg-primary px-5 py-2.5 font-semibold text-primary-fg disabled:opacity-50"
        >
          {busy ? "Kaydediliyor..." : editing ? "Güncelle" : "Ekle"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin")}
          className="rounded-lg border border-border-strong px-5 py-2.5 font-semibold text-ink"
        >
          Vazgeç
        </button>
      </div>
    </form>
  );
}
