"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "cub-cerez-onay";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      // localStorage erişilemiyorsa banner'ı gösterme
    }
  }, []);

  const kapat = (v: "kabul" | "ret") => {
    try {
      localStorage.setItem(KEY, v);
    } catch {
      /* yoksay */
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border-strong bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-ink-soft">
          Bu sitede, siteyi kullanışlı tutmak ve ziyaretleri kimliksiz ölçmek
          için çerez kullanıyoruz.{" "}
          <Link
            href="/cerez-politikasi"
            className="font-medium text-orange underline"
          >
            Çerez Politikası
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={() => kapat("ret")}
            className="rounded-full border border-border-strong px-4 py-2 font-semibold text-ink hover:border-orange hover:text-orange"
          >
            Reddet
          </button>
          <button
            onClick={() => kapat("kabul")}
            className="rounded-full bg-primary px-4 py-2 font-semibold text-primary-fg"
          >
            Kabul et
          </button>
        </div>
      </div>
    </div>
  );
}
