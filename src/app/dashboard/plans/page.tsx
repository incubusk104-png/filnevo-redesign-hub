import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { TIERS } from "@/lib/tiers";
import { UpgradeButton } from "@/components/landing/UpgradeButton";
import type { SubscriptionTier } from "@/lib/ai/providers";

export const runtime = "edge";

export const metadata = {
  title: "Plans & Upgrade — Filnevo",
};

interface PlanRow {
  tier: SubscriptionTier;
  name: string;
  tagline: string;
  features: string[];
  highlight?: boolean;
}

const PLANS: PlanRow[] = [
  {
    tier: "free",
    name: "Free",
    tagline: "Try Filnevo, no card required.",
    features: ["Mobile doc capture", "BIR deadline widget", "AI document extraction"],
  },
  {
    tier: "starter",
    name: "Starter",
    tagline: "For solo operators automating BIR filings.",
    features: ["Auto-fill BIR view", "Digest email", "Accountant link", "Referral engine"],
  },
  {
    tier: "business_pro",
    name: "Business Pro",
    tagline: "Where most Filipino businesses land.",
    features: ["WhatsApp receipt bot", "Ad-spend predictor", "Anti-fraud flag", "Vault links"],
    highlight: true,
  },
  {
    tier: "agency_core",
    name: "Agency Core",
    tagline: "Multi-workspace + team approvals for agencies.",
    features: ["All Pro features", "Multi-workspace", "Team approvals", "BIR ZIP export + webhooks"],
  },
];

export default async function PlansPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("user_profiles")
    .select("subscription_tier")
    .eq("id", user!.id)
    .maybeSingle();

  const currentTier: SubscriptionTier =
    (profile?.subscription_tier as SubscriptionTier) ?? "free";

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <header className="space-y-2">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Plans & Upgrade
        </h1>
        <p className="text-white/60">
          Your current plan is{" "}
          <span className="font-semibold text-primary">
            {TIERS[currentTier].label}
          </span>
          . Pick the tier that matches how you file.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {PLANS.map((plan) => {
          const meta = TIERS[plan.tier];
          const isCurrent = plan.tier === currentTier;
          return (
            <div
              key={plan.tier}
              className={[
                "flex flex-col rounded-2xl border p-6 transition",
                plan.highlight
                  ? "border-primary/60 bg-primary/[0.08]"
                  : "border-white/10 bg-white/[0.02]",
                isCurrent && "ring-2 ring-primary",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-lg font-bold text-white">{plan.name}</h3>
                {isCurrent && (
                  <span className="rounded-md bg-primary/20 px-2 py-0.5 text-[11px] font-semibold uppercase text-primary">
                    Current
                  </span>
                )}
              </div>
              <p className="mt-1 text-xs text-white/60">{plan.tagline}</p>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-heading text-3xl font-bold text-white">
                  ₱{meta.pricePhp.toLocaleString("en-PH")}
                </span>
                <span className="text-xs text-white/50">/mo</span>
              </div>
              <div className="mt-1 text-xs text-white/50">
                {meta.monthlyScanQuota.toLocaleString("en-PH")} scans / mo
              </div>

              <ul className="mt-4 flex-1 space-y-2 text-sm text-white/80">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                {isCurrent ? (
                  <button
                    type="button"
                    disabled
                    className="w-full cursor-not-allowed rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/50"
                  >
                    Your plan
                  </button>
                ) : plan.tier === "free" ? (
                  <Link
                    href="/dashboard"
                    className="block w-full rounded-lg border border-white/15 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-white/5"
                  >
                    Stay on Free
                  </Link>
                ) : (
                  <UpgradeButton
                    tier={plan.tier}
                    variant={plan.highlight ? "primary" : "outline"}
                    className="w-full"
                  >
                    Upgrade to {plan.name}
                  </UpgradeButton>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-center text-xs text-white/40">
        Prices in PHP. Cancel or switch plans anytime from this page.
      </p>
    </div>
  );
}
