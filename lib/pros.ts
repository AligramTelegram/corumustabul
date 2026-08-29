import type { Pro } from "@/lib/types";
import { supabasePublic, supabaseAdmin } from "@/lib/supabase";

/** DB satırı (snake_case) -> Pro (camelCase) */
type Row = {
  id: string;
  slug: string;
  name: string;
  business_name: string;
  categories: string[];
  districts: string[];
  phone: string;
  phone_display: string;
  whatsapp: string;
  website: string | null;
  logo: string | null;
  photos: string[] | null;
  about: string[];
  working_hours: string;
  featured: boolean;
  rating: number | null;
  review_count: number | null;
  status: "active" | "passive";
  paid_until: string;
  sort_order: number;
};

export type ProWithId = Pro & { id: string; sortOrder: number };

function toPro(r: Row): ProWithId {
  return {
    id: r.id,
    slug: r.slug,
    name: r.name,
    businessName: r.business_name,
    categories: r.categories ?? [],
    districts: r.districts ?? [],
    phone: r.phone,
    phoneDisplay: r.phone_display,
    whatsapp: r.whatsapp,
    website: r.website ?? undefined,
    logo: r.logo ?? undefined,
    photos: r.photos ?? undefined,
    about: r.about ?? [],
    workingHours: r.working_hours ?? "",
    featured: r.featured,
    rating: r.rating ?? undefined,
    reviewCount: r.review_count ?? undefined,
    status: r.status,
    paidUntil: r.paid_until,
    sortOrder: r.sort_order ?? 0,
  };
}

export function toRow(p: Partial<Pro> & { sortOrder?: number }) {
  const row: Record<string, unknown> = {};
  if (p.slug !== undefined) row.slug = p.slug;
  if (p.name !== undefined) row.name = p.name;
  if (p.businessName !== undefined) row.business_name = p.businessName;
  if (p.categories !== undefined) row.categories = p.categories;
  if (p.districts !== undefined) row.districts = p.districts;
  if (p.phone !== undefined) row.phone = p.phone;
  if (p.phoneDisplay !== undefined) row.phone_display = p.phoneDisplay;
  if (p.whatsapp !== undefined) row.whatsapp = p.whatsapp;
  if (p.website !== undefined) row.website = p.website || null;
  if (p.logo !== undefined) row.logo = p.logo || null;
  if (p.photos !== undefined) row.photos = p.photos ?? [];
  if (p.about !== undefined) row.about = p.about;
  if (p.workingHours !== undefined) row.working_hours = p.workingHours;
  if (p.featured !== undefined) row.featured = p.featured;
  if (p.rating !== undefined) row.rating = p.rating ?? null;
  if (p.reviewCount !== undefined) row.review_count = p.reviewCount ?? null;
  if (p.status !== undefined) row.status = p.status;
  if (p.paidUntil !== undefined) row.paid_until = p.paidUntil;
  if (p.sortOrder !== undefined) row.sort_order = p.sortOrder;
  return row;
}

const today = () => new Date().toISOString().slice(0, 10);

/** Yayındaki (aktif + ödemesi geçerli) ustalar. Statik sayfalarda kullanılır. */
export async function getActivePros(): Promise<Pro[]> {
  const sb = supabasePublic();
  if (!sb) return [];
  const { data, error } = await sb
    .from("pros")
    .select("*")
    .eq("status", "active")
    .gte("paid_until", today());
  if (error || !data) return [];
  return (data as Row[]).map(toPro);
}

/** Yönetim: tüm ustalar (pasif dahil). */
export async function getAllPros(): Promise<ProWithId[]> {
  const sb = supabaseAdmin();
  if (!sb) return [];
  const { data, error } = await sb
    .from("pros")
    .select("*")
    .order("featured", { ascending: false })
    .order("sort_order", { ascending: true })
    .order("business_name", { ascending: true });
  if (error || !data) return [];
  return (data as Row[]).map(toPro);
}

export async function getProById(id: string): Promise<ProWithId | null> {
  const sb = supabaseAdmin();
  if (!sb) return null;
  const { data } = await sb.from("pros").select("*").eq("id", id).single();
  return data ? toPro(data as Row) : null;
}
