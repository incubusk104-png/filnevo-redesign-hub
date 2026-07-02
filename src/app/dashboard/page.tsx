import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { TIERS } from "@/lib/tiers";
import type { SubscriptionTier } from "@/lib/ai/providers";

export const runtime = "edge";

export const metadata = {
  title: "Dashboard — Filnevo",
};

export default async function DashboardHome() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("user_profiles")
    .select("subscription_tier, monthly_scan_quota, scans_used_this_period, display_name")
    .eq("id", user!.id)
    .maybeSingle();

  const tier: SubscriptionTier =
    (profile?.subscription_tier as SubscriptionTier) ?? "free";
  const meta = TIERS[tier];
  const isFree = tier === "free";
  const greetingName = profile?.display_name || user?.email?.split("@")[0] || "there";

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <header className="space-y-2">
        <p className="text-sm text-white/50">Welcome back</p>
        <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Hey {greetingName} 👋
        </h1>
        <p className="text-white/60">
          You're signed in on the{" "}
          <span className="font-semibold text-primary">{meta.label}</span> plan.
        </p>
      </header>

      {isFree && (
        <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-heading text-xl font-bold text-white">
                Choose a plan to unlock Filnevo
              </h2>
              <p className="mt-1 text-sm text-white/70">
                You haven't picked a paid plan yet. Compare features and upgrade
                anytime — cancel whenever.
              </p>
            </div>
            <Link
              href="/dashboard/plans"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary/90"
            >
              See plans →
            </Link>
          </div>
        </div>
      )}

      <section className="grid gap-4 sm:grid-cols-3">
        <Stat
          label="Current plan"
          value={meta.label}
          hint={`₱${meta.pricePhp.toLocaleString("en-PH")}/mo`}
        />
        <Stat
          label="Scans this month"
          value={`${profile?.scans_used_this_period ?? 0}`}
          hint={`of ${profile?.monthly_scan_quota ?? meta.monthlyScanQuota}`}
        />
        <Stat
          label="Team seats"
          value={`${meta.baseSeats}`}
          hint={meta.seatsExpandable ? "Expandable" : "Fixed"}
        />
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <h3 className="font-heading text-lg font-semibold text-white">
          What's included on {meta.label}
        </h3>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {featuresFor(tier).map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-white/80">
              <span className="mt-0.5 text-primary">✓</span>
              {f}
            </li>
          ))}
        </ul>
        {!isFree && (
          <Link
            href="/dashboard/plans"
            className="mt-6 inline-flex text-sm font-semibold text-primary hover:underline"
          >
            Compare or change plan →
          </Link>
        )}
      </section>
    </div>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <div className="text-xs uppercase tracking-wide text-white/50">{label}</div>
      <div className="mt-2 font-heading text-2xl font-bold text-white">{value}</div>
      {hint && <div className="mt-1 text-xs text-white/50">{hint}</div>}
    </div>
  );
}

function featuresFor(tier: SubscriptionTier): string[] {
  const base = ["Mobile doc capture", "BIR deadline widget", "AI document extraction"];
  if (tier === "free") return base;
  if (tier === "starter")
    return [...base, "Auto-fill BIR view", "Digest email", "Accountant link"];
  if (tier === "business_pro")
    return [...base, "WhatsApp receipt bot", "Ad-spend predictor", "Anti-fraud flag", "Vault links"];
  return [...base, "All Pro features", "Multi-workspace", "Team approvals", "BIR ZIP export + webhooks"];
}
