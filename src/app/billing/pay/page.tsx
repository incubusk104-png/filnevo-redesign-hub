import Link from "next/link";
import { QrPayment } from "./QrPayment";
import { Logo } from "@/components/shared/Logo";
import { TIERS, isSubscriptionTier } from "@/lib/tiers";

// Required by @cloudflare/next-on-pages: dynamic (non-static) routes must run on
// the Edge Runtime. This page reads searchParams, so it is server-rendered.
export const runtime = "edge";

// QR Ph payment page. Reached from the pricing/upgrade buttons with `?tier=`.
// Renders a PayMongo-generated QR code the customer pays from GCash / Maya.
export default async function PayPage({
  searchParams,
}: {
  searchParams: Promise<{ tier?: string }>;
}) {
  const { tier } = await searchParams;
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
