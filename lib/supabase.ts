import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabaseConfigured = Boolean(URL && ANON);

/** Herkese açık okuma (RLS: sadece aktif ustalar). */
export function supabasePublic(): SupabaseClient | null {
  if (!URL || !ANON) return null;
  return createClient(URL, ANON, { auth: { persistSession: false } });
}

/** Sunucu tarafı yönetim istemcisi (RLS'i atlar). Asla client'a sızdırma. */
export function supabaseAdmin(): SupabaseClient | null {
  if (!URL || !SERVICE) return null;
  return createClient(URL, SERVICE, { auth: { persistSession: false } });
}
