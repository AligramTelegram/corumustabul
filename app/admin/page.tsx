import { getAllPros } from "@/lib/pros";
import { supabaseConfigured } from "@/lib/supabase";
import { Dashboard } from "@/components/admin/Dashboard";

export const dynamic = "force-dynamic";

export default async function AdminHome() {
  if (!supabaseConfigured) {
    return (
      <p className="text-sm text-bordo">
        Supabase ortam değişkenleri tanımlı değil. Vercel &rarr; Settings &rarr;
        Environment Variables&apos;a ekleyin ve redeploy edin.
      </p>
    );
  }

  const pros = await getAllPros();
  return <Dashboard pros={pros} />;
}
