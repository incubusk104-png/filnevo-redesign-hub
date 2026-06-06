"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { QrPayment } from "./QrPayment";
import { Logo } from "@/components/shared/Logo";
import { TIERS, isSubscriptionTier } from "@/lib/tiers";

// Reads `?tier=` client-side so the page stays static (no Edge function),
// keeping the Cloudflare Pages Worker bundle small. The QR itself is created by
// the `/api/billing/qrph` Edge route invoked from `QrPayment`.
export function PayContent() {
  const params = useSearchParams();
  const tier = params.get("tier") ?? undefined;
  const valid = isSubscriptionTier(tier) && tier !== "free";

  return (
    <main className="min-h-screen px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-lg">
        <div className="mb-8 flex justify-center">
          <Link href="/" aria-label="Filnevo home">
            <Logo />
          </Link>
        </div>

        {valid ? (
          <QrPayment tier={tier} label={TIERS[tier].label} />
        ) : (
          <div className="data-card border border-hairline p-8 text-center">
            <h1 className="font-heading text-xl font-bold text-foreground">
              Choose a plan first
            </h1>
            <p className="mt-2 text-sm text-text-muted">
              We couldn&apos;t tell which plan you want to pay for.
            </p>
            <Link
              href="/#pricing"
              className="mt-6 inline-block rounded-md bg-velocity-blue px-4 py-2 text-sm font-medium text-neutral-50 hover:bg-velocity-blue/90"
            >
              View plans
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
