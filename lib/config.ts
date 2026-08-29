/** Bir usta vitrine alındığında kaç gün öne çıkar. */
export const VITRIN_GUN = 15;

export function vitrinBitis(from: Date = new Date()): string {
  const d = new Date(from);
  d.setDate(d.getDate() + VITRIN_GUN);
  return d.toISOString();
}
