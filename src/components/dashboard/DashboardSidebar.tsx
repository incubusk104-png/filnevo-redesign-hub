"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { signOut } from "@/app/login/actions";
import type { SubscriptionTier } from "@/lib/ai/providers";

interface Props {
  email: string;
  displayName: string | null;
  tierLabel: string;
  tier: SubscriptionTier;
  scansUsed: number;
  scansLimit: number;
}

const NAV = [
  { href: "/dashboard", label: "Overview", icon: "◉" },
  { href: "/dashboard/plans", label: "Plans & Upgrade", icon: "✦" },
  { href: "/dashboard/settings", label: "Settings", icon: "⚙" },
];

export function DashboardSidebar({
  email,
  displayName,
  tierLabel,
  tier,
  scansUsed,
  scansLimit,
}: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isFree = tier === "free";
  const pct = scansLimit > 0 ? Math.min(100, Math.round((scansUsed / scansLimit) * 100)) : 0;
  const initials = (displayName || email).slice(0, 2).toUpperCase();

  return (
    <>
      {/* Mobile toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed left-3 top-3 z-50 rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-sm text-white backdrop-blur md:hidden"
        aria-label="Toggle sidebar"
      >
        {open ? "✕" : "☰"}
      </button>

      <aside
        className={[
          "fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-white/10 bg-[#0a0a1a] px-4 py-6 transition-transform duration-200 md:static md:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {/* Brand */}
        <Link href="/" className="mb-8 flex items-center gap-2 px-2">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-sm font-extrabold text-white">
            F
          </span>
          <span className="font-heading text-lg font-extrabold uppercase tracking-tight text-white">
            Filnevo<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Account card */}
        <div className="mb-6 rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/20 text-sm font-semibold text-primary">
              {initials}
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium text-white">
                {displayName || email.split("@")[0]}
              </div>
              <div className="truncate text-xs text-white/50">{email}</div>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="rounded-md bg-primary/15 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-primary">
              {tierLabel}
            </span>
            {isFree && (
              <Link
                href="/dashboard/plans"
                className="text-xs font-semibold text-primary hover:underline"
              >
                Upgrade →
              </Link>
            )}
          </div>
          <div className="mt-3">
            <div className="mb-1 flex justify-between text-[11px] text-white/60">
              <span>Scans this month</span>
              <span>
                {scansUsed}/{scansLimit}
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1">
          {NAV.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={[
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition",
                  active
                    ? "bg-primary/15 text-white"
                    : "text-white/70 hover:bg-white/5 hover:text-white",
                ].join(" ")}
              >
                <span className="text-primary">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <form action={signOut} className="pt-4">
          <button
            type="submit"
            className="w-full rounded-lg border border-white/10 px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
          >
            Sign out
          </button>
        </form>
      </aside>
    </>
  );
}
