export const AUTH_COOKIE = "cub_admin";

const SECRET = process.env.ADMIN_PASSWORD || "";

async function sha256Hex(input: string): Promise<string> {
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(input),
  );
  return [...new Uint8Array(buf)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function adminEnabled(): boolean {
  return SECRET.length > 0;
}

export async function makeToken(): Promise<string> {
  return sha256Hex("corumustabul-admin:" + SECRET);
}

export async function checkPassword(pw: string): Promise<boolean> {
  return adminEnabled() && pw === SECRET;
}

export async function verifyToken(token?: string): Promise<boolean> {
  if (!token || !adminEnabled()) return false;
  return token === (await makeToken());
}
