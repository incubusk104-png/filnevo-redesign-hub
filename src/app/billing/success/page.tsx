import Link from "next/link";
import { Button } from "@/components/shared/Button";
import { TIERS, isSubscriptionTier } from "@/lib/tiers";

// Required by @cloudflare/next-on-pages: dynamic (non-static) routes must run on
// the Edge Runtime. This page reads searchParams, so it is server-rendered.
export const runtime = "edge";

// Landing page after a successful (or demo) PayMongo checkout. PayMongo
// redirects here via the session's success_url with `?tier=<tier>`. The actual
// upgrade is applied server-side by the webhook; this page just confirms it.
export default async function BillingSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ tier?: string; demo?: string }>;
}) {
  const { tier, demo } = await searchParams;
  const meta = isSubscriptionTier(tier) ? TIERS[tier] : null;

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="data-card max-w-md w-full p-10 text-center border border-efficiency-green/30">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-efficiency-green/10">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 13l4 4L19 7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="font-heading text-2xl font-bold text-foreground mb-3">
          {meta ? `Welcome to ${meta.label}` : "Payment received"}
        </h1>
        <p className="text-text-muted mb-2">
          {meta
            ? `Your ${meta.label} subscription is being activated — ${meta.monthlyScanQuota.toLocaleString()} document scans/month.`
            : "Thanks! Your subscription is being activated."}
        </p>
        {demo === "1" && (
          <p className="text-xs text-warning-amber mb-6">
            Demo mode: no real payment was charged.
          </p>
        )}
        <div className="mt-6">
          <Button variant="primary" href="/">
            Go to dashboard
          </Button>
        </div>
        <p className="mt-4 text-xs text-text-muted">
          Questions? <Link href="/#pricing" className="underline">View plans</Link>
        </p>
      </div>
    </main>
  );
}
