import { createClient } from "@/lib/supabase/server";

export const runtime = "edge";

export const metadata = { title: "Settings — Filnevo" };

export default async function SettingsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <h1 className="font-heading text-3xl font-bold text-white">Settings</h1>
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <div className="text-xs uppercase tracking-wide text-white/50">Email</div>
        <div className="mt-1 text-white">{user?.email}</div>
      </div>
      <p className="text-sm text-white/50">
        More account controls are coming soon.
      </p>
    </div>
  );
}
