// Cookie-first authentication for the billing routes.
//
// The checkout endpoint is called from the browser, so it authenticates the
// caller from their Supabase session cookie (set by @supabase/ssr). A bearer
// `Authorization` header is also accepted as a fallback (useful for testing).
// In demo mode (Supabase unset) it short-circuits to a stable demo user so the
// flow works without a backend.
import { createClient } from "@supabase/supabase-js";
import { NextResponse, type NextRequest } from "next/server";
import { isDemoMode } from "@/lib/mode";

export interface BillingUser {
  /** True when Supabase is not configured (demo mode). */
  demo: boolean;
  /** Authenticated user id. */
  userId: string;
  /** Caller email when known (passed to PayMongo for receipts). */
  email?: string;
}

function getBearerToken(req: NextRequest): string | null {
  const header =
    req.headers.get("authorization") || req.headers.get("Authorization");
  if (!header) return null;
  const [scheme, token] = header.split(" ");
  if (scheme?.toLowerCase() !== "bearer" || !token) return null;
  return token.trim();
}

/**
 * Pull the Supabase access token out of the `sb-<ref>-auth-token` cookie(s).
 * @supabase/ssr stores a JSON array `[access_token, refresh_token, ...]`,
 * optionally `base64-`prefixed and optionally split across `.0`, `.1` chunks.
 */
function getAccessTokenFromCookies(req: NextRequest): string | null {
  const all = req.cookies.getAll();
  const authCookies = all
    .filter((c) => /^sb-.*-auth-token(\.\d+)?$/.test(c.name))
    .sort((a, b) => a.name.localeCompare(b.name));
  if (authCookies.length === 0) return null;

  let raw = authCookies.map((c) => c.value).join("");
  try {
    if (raw.startsWith("base64-")) {
      raw = atob(raw.slice("base64-".length));
    }
    const parsed = JSON.parse(raw) as { access_token?: string } | string[];
    const token = Array.isArray(parsed) ? parsed[0] : parsed.access_token;
    return typeof token === "string" && token.length > 0 ? token : null;
  } catch {
    return null;
  }
}

/**
 * Resolve the authenticated billing user, or a NextResponse to return on
 * failure. Demo mode yields a stable demo user.
 */
export async function resolveBillingUser(
  req: NextRequest,
): Promise<BillingUser | NextResponse> {
  if (isDemoMode()) {
    return { demo: true, userId: "demo-user" };
  }

  const token = getBearerToken(req) ?? getAccessTokenFromCookies(req);
  if (!token) {
    return NextResponse.json(
      { ok: false, error: "unauthenticated" },
      { status: 401 },
    );
  }

  const url = process.env.SUPABASE_URL as string;
  const anonKey = process.env.SUPABASE_ANON_KEY as string;
  const userClient = createClient(url, anonKey, {
    global: { headers: { Authorization: `Bearer ${token}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const {
    data: { user },
    error,
  } = await userClient.auth.getUser();
  if (error || !user) {
    return NextResponse.json(
      { ok: false, error: "unauthenticated" },
      { status: 401 },
    );
  }

  return { demo: false, userId: user.id, email: user.email ?? undefined };
}
