import { ImageResponse } from "next/og";
import { categories, getCategory } from "@/data/categories";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return categories.map((c) => ({ kategori: c.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ kategori: string }>;
}) {
  const { kategori } = await params;
  const c = getCategory(kategori);
  const title = c ? `Çorum ${c.name}` : "Çorum Usta Bul";
  const sub = c ? c.tagline : "Çorum'da güvenilir usta";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#c24a12",
            }}
          />
          <div style={{ fontSize: 30, fontWeight: 700, color: "#161618" }}>
            Çorum Usta Bul
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              color: "#161618",
              lineHeight: 1.05,
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 34, color: "#6c7075" }}>{sub}</div>
        </div>

        <div style={{ fontSize: 26, color: "#c24a12", fontWeight: 600 }}>
          corumustabul.com · Çorum merkez + 13 ilçe
        </div>
      </div>
    ),
    { ...size },
  );
}
