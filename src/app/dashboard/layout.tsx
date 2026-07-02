import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { TIERS } from "@/lib/tiers";
import type { SubscriptionTier } from "@/lib/ai/providers";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

export const runtime = "edge";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login?mode=signin&next=/dashboard");

  const { data: profile } = await supabase
    .from("user_profiles")
    .select("subscription_tier, monthly_scan_quota, scans_used_this_period, display_name")
    .eq("id", user.id)
    .maybeSingle();

  const tier: SubscriptionTier =
    (profile?.subscription_tier as SubscriptionTier) ?? "free";
  const meta = TIERS[tier];

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <DashboardSidebar
        email={user.email ?? "you@filnevo.com"}
        displayName={profile?.display_name ?? null}
        tierLabel={meta.label}
        tier={tier}
        scansUsed={profile?.scans_used_this_period ?? 0}
        scansLimit={profile?.monthly_scan_quota ?? meta.monthlyScanQuota}
      />
      <main className="flex-1 min-w-0 px-6 py-8 md:px-10 lg:px-14">
        {children}
      </main>
    </div>
  );
}
