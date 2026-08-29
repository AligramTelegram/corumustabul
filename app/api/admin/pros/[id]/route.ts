import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase";
import { toRow } from "@/lib/pros";
import { VITRIN_GUN } from "@/lib/config";
import type { Pro } from "@/lib/types";

type Ctx = { params: Promise<{ id: string }> };
type Body = Partial<Pro> & {
  featuredUntil?: string | null;
  /** "add" = bugünden 15 gün, "extend" = mevcut/bugün + 15 gün, "remove" = kaldır */
  vitrin?: "add" | "extend" | "remove";
};

export async function PATCH(req: Request, { params }: Ctx) {
  const { id } = await params;
  const sb = supabaseAdmin();
  if (!sb) return NextResponse.json({ error: "Supabase yok" }, { status: 500 });

  const body = (await req.json()) as Body;

  if (body.vitrin) {
    if (body.vitrin === "remove") {
      body.featuredUntil = null;
    } else {
      let base = Date.now();
      if (body.vitrin === "extend") {
        const { data } = await sb
          .from("pros")
          .select("featured_until")
          .eq("id", id)
          .single();
        const cur = data?.featured_until
          ? Date.parse(data.featured_until)
          : 0;
        if (cur > base) base = cur;
      }
      body.featuredUntil = new Date(
        base + VITRIN_GUN * 864e5,
      ).toISOString();
    }
    delete body.vitrin;
  }

  const row = toRow(body);
  row.updated_at = new Date().toISOString();

  const { error } = await sb.from("pros").update(row).eq("id", id);
  if (error)
    return NextResponse.json({ error: error.message }, { status: 400 });

  revalidatePath("/", "layout");
  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: Request, { params }: Ctx) {
  const { id } = await params;
  const sb = supabaseAdmin();
  if (!sb) return NextResponse.json({ error: "Supabase yok" }, { status: 500 });

  const { error } = await sb.from("pros").delete().eq("id", id);
  if (error)
    return NextResponse.json({ error: error.message }, { status: 400 });

  revalidatePath("/", "layout");
  return NextResponse.json({ ok: true });
}
