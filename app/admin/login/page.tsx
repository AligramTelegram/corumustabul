"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pw }),
    });
    setBusy(false);
    if (res.ok) {
      router.replace("/admin");
      router.refresh();
    } else {
      const j = await res.json().catch(() => ({}));
      setErr(j.error || "Giriş başarısız");
    }
  }

  return (
    <div className="mx-auto max-w-sm px-4 py-20">
      <h1 className="font-display text-2xl font-semibold text-ink">
        Yönetim Girişi
      </h1>
      <form onSubmit={submit} className="mt-6 space-y-3">
        <input
          type="password"
          autoFocus
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="Şifre"
          className="w-full rounded-lg border border-border-strong bg-white px-4 py-2.5 outline-none focus:border-orange"
        />
        {err && <p className="text-sm text-bordo">{err}</p>}
        <button
          disabled={busy || !pw}
          className="w-full rounded-lg bg-primary px-4 py-2.5 font-semibold text-primary-fg disabled:opacity-50"
        >
          {busy ? "..." : "Giriş"}
        </button>
      </form>
    </div>
  );
}
