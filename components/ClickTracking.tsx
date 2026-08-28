"use client";

import { useEffect } from "react";

/**
 * Telefon ve WhatsApp tıklamalarını GA4'e olay olarak gönderir.
 * Tek bir delege dinleyici; her butona ayrı kod gerekmez.
 * GA4'te "phone_click" ve "whatsapp_click" olaylarını anahtar olay
 * (dönüşüm) olarak işaretleyin.
 */
export function ClickTracking() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement)?.closest?.("a");
      if (!el) return;
      const href = el.getAttribute("href") || "";

      let event: string | null = null;
      if (href.startsWith("tel:")) event = "phone_click";
      else if (href.includes("wa.me") || href.includes("api.whatsapp.com"))
        event = "whatsapp_click";
      if (!event) return;

      const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void })
        .gtag;
      if (typeof gtag === "function") {
        gtag("event", event, {
          link_url: href,
          page_path: window.location.pathname,
        });
      }
    }

    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
