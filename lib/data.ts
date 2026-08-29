import { categories, getCategory } from "@/data/categories";
import { districts, getDistrict } from "@/data/districts";
import { getActivePros } from "@/lib/pros";
import type { Pro } from "@/lib/types";

export { categories, districts, getCategory, getDistrict };

/** Vitrin (featured) önce, sonra puana, sonra yorum sayısına göre */
export function sortPros(list: Pro[]): Pro[] {
  return [...list].sort(
    (a, b) =>
      Number(b.featured) - Number(a.featured) ||
      (b.rating ?? 0) - (a.rating ?? 0) ||
      (b.reviewCount ?? 0) - (a.reviewCount ?? 0) ||
      a.businessName.localeCompare(b.businessName, "tr"),
  );
}

export async function getPro(slug: string): Promise<Pro | undefined> {
  const all = await getActivePros();
  return all.find((p) => p.slug === slug);
}

export async function prosByCategory(categorySlug: string): Promise<Pro[]> {
  const all = await getActivePros();
  return sortPros(all.filter((p) => p.categories.includes(categorySlug)));
}

export async function prosByCategoryDistrict(
  categorySlug: string,
  districtSlug: string,
): Promise<Pro[]> {
  const list = await prosByCategory(categorySlug);
  return list.filter((p) => p.districts.includes(districtSlug));
}

export async function prosByDistrict(districtSlug: string): Promise<Pro[]> {
  const all = await getActivePros();
  return sortPros(all.filter((p) => p.districts.includes(districtSlug)));
}

export async function categoriesInDistrict(districtSlug: string) {
  const set = new Set<string>();
  for (const p of await prosByDistrict(districtSlug)) {
    p.categories.forEach((c) => set.add(c));
  }
  return categories.filter((c) => set.has(c.slug));
}

/** Bir kategorinin ilgili (related) kategori nesneleri */
export function relatedCategories(categorySlug: string) {
  const c = getCategory(categorySlug);
  if (!c) return [];
  return c.relatedSlugs
    .map((s) => getCategory(s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));
}

/** Komşu ilçe önerileri için basit sıralı komşuluk (elle küratörlü) */
const NEIGHBORS: Record<string, string[]> = {
  merkez: ["lacin", "mecitozu", "ortakoy", "sungurlu"],
  alaca: ["ortakoy", "mecitozu", "bogazkale"],
  bayat: ["iskilip", "ugurludag"],
  bogazkale: ["alaca", "sungurlu"],
  dodurga: ["osmancik", "lacin", "kargi"],
  iskilip: ["bayat", "oguzlar", "ugurludag"],
  kargi: ["osmancik", "dodurga"],
  lacin: ["merkez", "dodurga", "osmancik"],
  mecitozu: ["merkez", "alaca", "ortakoy"],
  oguzlar: ["iskilip", "osmancik"],
  ortakoy: ["merkez", "alaca", "mecitozu"],
  osmancik: ["kargi", "dodurga", "oguzlar", "lacin"],
  sungurlu: ["ugurludag", "bogazkale", "merkez"],
  ugurludag: ["sungurlu", "bayat", "iskilip"],
};

export function neighborDistricts(districtSlug: string) {
  const slugs = NEIGHBORS[districtSlug] ?? [];
  return slugs
    .map((s) => getDistrict(s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));
}
