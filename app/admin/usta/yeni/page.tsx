import { ProForm } from "@/components/admin/ProForm";

export const dynamic = "force-dynamic";

export default function YeniUsta() {
  return (
    <div>
      <h1 className="mb-6 font-display text-2xl font-semibold text-ink">
        Yeni usta
      </h1>
      <ProForm />
    </div>
  );
}
