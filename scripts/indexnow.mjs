/**
 * Canlı sitemap.xml'i okur ve tüm URL'leri IndexNow'a bildirir (Bing, Yandex vb.).
 * Kullanım: node scripts/indexnow.mjs
 */
const HOST = "corumustabul.com";
const KEY = "e29f2fd740fc4830932ee3a1eed2dbf0";
const SITEMAP = `https://${HOST}/sitemap.xml`;

async function main() {
  const res = await fetch(SITEMAP);
  if (!res.ok) throw new Error(`sitemap alınamadı: ${res.status}`);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (urls.length === 0) throw new Error("sitemap boş");

  console.log(`${urls.length} URL bildiriliyor...`);

  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  };

  const r = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  console.log(`IndexNow yanıtı: ${r.status} ${r.statusText}`);
  if (r.status >= 400) {
    console.log(await r.text());
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
