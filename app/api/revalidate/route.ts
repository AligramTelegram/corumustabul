import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

/**
 * Günlük tazeleme. GitHub Action her gece çağırır.
 * Süresi biten abonelik/vitrin kesin olarak siteden düşer.
 * Koruma: ADMIN_PASSWORD ile ?key=...
 */
export async function GET(req: Request) {
  const key = new URL(req.url).searchParams.get("key");
  if (!process.env.ADMIN_PASSWORD || key !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  }
  revalidatePath("/", "layout");
  return NextResponse.json({ ok: true, at: new Date().toISOString() });
}
