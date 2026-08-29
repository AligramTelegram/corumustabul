import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase";
import { toRow } from "@/lib/pros";
import { slugify } from "@/lib/slug";
import type { Pro } from "@/lib/types";

export async function POST(req: Request) {
  const sb = supabaseAdmin();
  if (!sb)
    return NextResponse.json({ error: "Supabase yok" }, { status: 500 });

  const body = (await req.json()) as Partial<Pro>;
  if (!body.businessName || !body.phone) {
    return NextResponse.json(
      { error: "İşletme adı ve telefon zorunlu" },
      { status: 400 },
    );
  }

  const slug = body.slug?.trim() || slugify(body.businessName);
  const paidUntil =
    body.paidUntil ||
    new Date(Date.now() + 365 * 864e5).toISOString().slice(0, 10);

  const row = toRow({
    ...body,
    slug,
    paidUntil,
    name: body.name || body.businessName,
    status: body.status || "active",
    phoneDisplay: body.phoneDisplay || body.phone,
    whatsapp: (body.whatsapp || body.phone || "").replace(/\D/g, ""),
    workingHours: body.workingHours || "",
  });

  const { data, error } = await sb
    .from("pros")
    .insert(row)
    .select("id, slug")
    .single();

  if (error)
    return NextResponse.json({ error: error.message }, { status: 400 });

  revalidatePath("/", "layout");
  return NextResponse.json({ ok: true, id: data.id, slug: data.slug });
}
