"use client";

import { useState } from "react";
import { Button } from "@/components/shared/Button";
import type { SubscriptionTier } from "@/lib/ai/providers";

interface UpgradeButtonProps {
  tier: SubscriptionTier;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "secondary";
}

// Starts a PayMongo checkout for `tier` and redirects to the hosted page.
// Unauthenticated callers (401) are sent to /login to sign in first.
export function UpgradeButton({ tier, children, variant = "primary" }: UpgradeButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function startCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/billing/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier }),
      });

      if (res.status === 401) {
        window.location.href = "/login";
        return;
      }

      const data = (await res.json()) as { ok?: boolean; checkout_url?: string };
      if (data.ok && data.checkout_url) {
        window.location.href = data.checkout_url;
        return;
      }
      setError("Could not start checkout. Please try again.");
    } catch {
      setError("Could not start checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Button variant={variant} onClick={startCheckout} disabled={loading}>
        {loading ? "Redirecting…" : children}
      </Button>
      {error && <p className="mt-2 text-xs text-warning-amber">{error}</p>}
    </div>
  );
}
