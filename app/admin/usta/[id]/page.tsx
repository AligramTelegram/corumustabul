import { notFound } from "next/navigation";
import { getProById } from "@/lib/pros";
import { ProForm } from "@/components/admin/ProForm";

export const dynamic = "force-dynamic";

export default async function DuzenleUsta({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pro = await getProById(id);
  if (!pro) notFound();

  return (
    <div>
      <h1 className="mb-6 font-display text-2xl font-semibold text-ink">
        {pro.businessName}
      </h1>
      <ProForm initial={{ ...pro }} />
    </div>
  );
}
