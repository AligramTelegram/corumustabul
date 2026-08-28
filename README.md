# Çorum Usta Bul

Çorum ve 13 ilçesinde usta ve hizmet firması dizini. Ziyaretçi iş koluna ve
ilçeye göre usta bulur, doğrudan telefon/WhatsApp ile ulaşır.

## Teknoloji

- Next.js 16 (App Router) + TypeScript + Tailwind CSS 4
- Statik üretim (SSG) — ~360 sayfa
- Hosting: Vercel

## Geliştirme

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # statik derleme
```

## İçerik / veri

| Dosya | İçerik |
|---|---|
| `data/categories.ts` | 20 iş kolu (metin, anahtar kelime, FAQ) |
| `data/districts.ts` | Çorum merkez + 13 ilçe |
| `data/pros.ts` | Kayıtlı ustalar (`status`/`paidUntil` ile yayın kontrolü) |
| `data/rehber.ts` | Blog yazıları |

Usta eklemek: `data/pros.ts` içine yeni kayıt, `git push` → Vercel otomatik deploy.
Ödemesi biten ustayı gizlemek: `status: "passive"`.

## Ortam değişkenleri

| Değişken | Açıklama |
|---|---|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 ölçüm kimliği (G-XXXXXXX). Boşsa analytics yüklenmez. |

## Rota yapısı

- `/` ana sayfa
- `/[kategori]` iş kolu hub (ör. `/cilingir`)
- `/[kategori]/[ilce]` ilçe + iş kolu landing (ör. `/cilingir/iskilip`)
- `/ilce/[ilce]` ilçedeki tüm iş kolları
- `/usta/[slug]` usta profili
- `/rehber`, `/rehber/[slug]` blog
- `/kategoriler`, `/hakkinda`, `/iletisim`, `/isletme-ekle`, `/cerez-politikasi`
