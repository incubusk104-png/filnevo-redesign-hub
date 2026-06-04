import { NextResponse, type NextRequest } from "next/server";
import {
  isPaymongoWebhookConfigured,
  parseWebhookEvent,
  verifyWebhookSignature,
} from "@/lib/billing/paymongo";
import { createAdminClient } from "@/lib/supabase/admin";
import { isDemoMode } from "@/lib/mode";
import { defaultQuotaForTier, isSubscriptionTier } from "@/lib/tiers";

// Required by @cloudflare/next-on-pages: every non-static route runs on Edge.
export const runtime = "edge";

/** Add one calendar month to a date (UTC). */
function addOneMonth(from: Date): Date {
  const d = new Date(from);
  d.setUTCMonth(d.getUTCMonth() + 1);
  return d;
}

// POST /api/billing/webhook
// PayMongo delivers events here. We verify the `Paymongo-Signature` HMAC, and on
// `payment.paid` upgrade the buyer: set subscription_tier, monthly_scan_quota
// (tier default), subscription_status=active and the new billing period.
export async function POST(req: NextRequest) {
  const rawBody = await req.text();

  // 1. Verify signature (skipped only in demo when no secret is configured).
  if (isPaymongoWebhookConfigured()) {
    const secret = process.env.PAYMONGO_WEBHOOK_SECRET as string;
    const signature = req.headers.get("paymongo-signature");
    const valid = await verifyWebhookSignature(rawBody, signature, secret);
    if (!valid) {
      return NextResponse.json(
        { ok: false, error: "invalid_signature" },
        { status: 401 },
      );
    }
  }

  // 2. Parse the event.
  let payload: unknown;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }
  const event = parseWebhookEvent(payload);

  // We only act on successful payments. Acknowledge everything else (200) so
  // PayMongo does not retry unrelated events.
  if (event.type !== "payment.paid") {
    return NextResponse.json({ ok: true, ignored: event.type || "unknown" });
  }

  const { user_id: userId, tier } = event.metadata;
  if (!userId || !isSubscriptionTier(tier) || tier === "free") {
    return NextResponse.json(
      { ok: false, error: "invalid_metadata" },
      { status: 400 },
    );
  }

  // Demo mode (no Supabase): acknowledge without DB writes so the path is
  // exercisable without a backend.
  if (isDemoMode()) {
    return NextResponse.json({ ok: true, demo: true, tier, user_id: userId });
  }

  const now = new Date();
  const periodEnd = addOneMonth(now);
  const providerRef = event.checkoutSessionId ?? event.paymentId ?? `evt_${now.getTime()}`;
  const amount = typeof event.amount === "number" ? event.amount / 100 : undefined;

  const admin = createAdminClient();

  // 3. Upgrade the user: tier, quota (tier default), active status, new period.
  const { error: profileError } = await admin
    .from("user_profiles")
    .update({
      subscription_tier: tier,
      monthly_scan_quota: defaultQuotaForTier(tier),
      subscription_status: "active",
      scans_used_this_period: 0,
      period_started_at: now.toISOString(),
      current_period_end: periodEnd.toISOString(),
    })
    .eq("id", userId);

  if (profileError) {
    console.error("webhook_profile_update_failed:", profileError.message);
    return NextResponse.json(
      { ok: false, error: "profile_update_failed" },
      { status: 500 },
    );
  }

  // 4. Record/settle the payment in the ledger (idempotent on provider_ref).
  const { error: ledgerError } = await admin.from("payments").upsert(
    {
      user_id: userId,
      provider: "paymongo",
      provider_ref: providerRef,
      ...(amount !== undefined ? { amount } : {}),
      currency: "PHP",
      status: "paid",
      tier,
      period_start: now.toISOString(),
      period_end: periodEnd.toISOString(),
    },
    { onConflict: "provider,provider_ref" },
  );

  if (ledgerError) {
    console.error("webhook_ledger_upsert_failed:", ledgerError.message);
  }

  return NextResponse.json({ ok: true, tier, current_period_end: periodEnd.toISOString() });
}
