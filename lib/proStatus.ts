import type { ProWithId } from "@/lib/pros";

export type Bucket = "expired" | "expiring" | "active" | "passive";

export function daysLeft(paidUntil: string): number {
  const end = new Date(paidUntil + "T00:00:00");
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return Math.round((end.getTime() - now.getTime()) / 86400000);
}

export function bucketOf(p: Pick<ProWithId, "status" | "paidUntil">): Bucket {
  if (p.status === "passive") return "passive";
  const d = daysLeft(p.paidUntil);
  if (d < 0) return "expired";
  if (d <= 14) return "expiring";
  return "active";
}

export const bucketLabel: Record<Bucket, string> = {
  expired: "Süresi geçmiş",
  expiring: "Süresi yaklaşan",
  active: "Aktif",
  passive: "Pasif",
};

export const bucketClass: Record<Bucket, string> = {
  expired: "bg-bordo/10 text-bordo",
  expiring: "bg-orange/15 text-orange-deep",
  active: "bg-emerald-500/12 text-emerald-700",
  passive: "bg-muted/15 text-muted",
};
