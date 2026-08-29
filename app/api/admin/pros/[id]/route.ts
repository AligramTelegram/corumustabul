import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase";
import { toRow } from "@/lib/pros";
import type { Pro } from "@/lib/types";

type Ctx = { params: Promise<{ id: string }> };

export async function PATCH(req: Request, { params }: Ctx) {
  const { id } = await params;
  const sb = supabaseAdmin();
  if (!sb) return NextResponse.json({ error: "Supabase yok" }, { status: 500 });

  const body = (await req.json()) as Partial<Pro>;
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
