-- Phase 2 — Billing (PayMongo: GCash / Maya / cards).
--
-- Adds the billing period marker on user_profiles and a `payments` ledger that
-- records every PayMongo checkout/payment. The webhook (`/api/billing/webhook`)
-- upserts into this ledger on `payment.paid` and upgrades the owning user.
--
-- Every statement is idempotent (ADD COLUMN IF NOT EXISTS / CREATE ... IF NOT
-- EXISTS / CREATE OR REPLACE), so re-applying on an already-provisioned
-- database is a safe no-op. Timestamped AFTER 20260603000005 so user_profiles
-- already exists when this runs.

-- ---------------------------------------------------------------------------
-- user_profiles: when the current paid period ends (renew-by-checkout model).
-- NULL for free-tier / never-subscribed users.
-- ---------------------------------------------------------------------------
ALTER TABLE user_profiles
    ADD COLUMN IF NOT EXISTS current_period_end TIMESTAMPTZ;

-- ---------------------------------------------------------------------------
-- payments: append-only ledger of PayMongo checkout sessions / payments.
-- One row per checkout session; the webhook flips `status` to 'paid' and stamps
-- the granted period. (provider, provider_ref) is unique so a webhook delivered
-- more than once is naturally idempotent.
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS payments (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id       UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
    provider      TEXT NOT NULL DEFAULT 'paymongo',
    -- PayMongo Checkout Session id (cs_...) or payment id; the webhook
    -- correlates events back to the originating checkout via this ref.
    provider_ref  TEXT NOT NULL,
    amount        NUMERIC(14, 2) NOT NULL DEFAULT 0,
    currency      TEXT NOT NULL DEFAULT 'PHP',
    status        TEXT NOT NULL DEFAULT 'pending'
                      CHECK (status IN ('pending', 'paid', 'failed', 'refunded')),
    tier          TEXT NOT NULL
                      CHECK (tier IN ('free', 'starter', 'business_pro', 'agency_core')),
    period_start  TIMESTAMPTZ,
    period_end    TIMESTAMPTZ,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Idempotency / lookup: a provider ref maps to exactly one ledger row.
CREATE UNIQUE INDEX IF NOT EXISTS idx_payments_provider_ref
    ON payments(provider, provider_ref);

-- FK / "my payments" lookups (Postgres does not auto-index FK columns).
CREATE INDEX IF NOT EXISTS idx_payments_user ON payments(user_id);

-- updated_at maintenance (helper defined in base_schema / 20260603000000).
DROP TRIGGER IF EXISTS update_payments_updated_at ON payments;
CREATE TRIGGER update_payments_updated_at
    BEFORE UPDATE ON payments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ---------------------------------------------------------------------------
-- LOCK 3 (RLS): a user may read their own payment history. All writes happen
-- server-side via the service-role key (webhook + checkout), which bypasses
-- RLS, so there is intentionally no INSERT/UPDATE policy for `authenticated`.
-- ---------------------------------------------------------------------------
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS payments_select_own ON payments;
CREATE POLICY payments_select_own ON payments
    FOR SELECT TO authenticated
    USING (user_id = (SELECT auth.uid()));
