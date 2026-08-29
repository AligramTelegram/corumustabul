import { NextResponse } from "next/server";
import { AUTH_COOKIE, checkPassword, makeToken, adminEnabled } from "@/lib/auth";

export async function POST(req: Request) {
  if (!adminEnabled()) {
    return NextResponse.json(
      { error: "ADMIN_PASSWORD tanımlı değil" },
      { status: 500 },
    );
  }
  const { password } = await req.json().catch(() => ({ password: "" }));
  if (!(await checkPassword(String(password || "")))) {
    return NextResponse.json({ error: "Şifre hatalı" }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(AUTH_COOKIE, await makeToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}
