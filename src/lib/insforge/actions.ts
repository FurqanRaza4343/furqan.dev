"use server";

import { cookies } from "next/headers";
import { createAuthActions } from "@insforge/sdk/ssr";

export async function signInWithEmail(formData: FormData) {
  const auth = createAuthActions({ cookies: await cookies() });
  const { data, error } = await auth.signInWithPassword({
    email: String(formData.get("email")),
    password: String(formData.get("password")),
  });
  return { user: data?.user ?? null, error: error?.message ?? null };
}

export async function signInWithGoogle() {
  const cookieStore = await cookies();
  const auth = createAuthActions({ cookies: cookieStore });
  const { data, error } = await auth.signInWithOAuth("google", {
    redirectTo: new URL(
      "/api/auth/callback",
      process.env.NEXT_PUBLIC_APP_URL
    ).toString(),
    skipBrowserRedirect: true,
  });

  if (error || !data?.url || !data?.codeVerifier) {
    throw new Error(error?.message ?? "OAuth init failed");
  }

  cookieStore.set("insforge_code_verifier", data.codeVerifier, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 600,
  });

  return data.url;
}

export async function signOut() {
  const auth = createAuthActions({ cookies: await cookies() });
  await auth.signOut();
}

export async function signOutAction(formData: FormData) {
  const auth = createAuthActions({ cookies: await cookies() });
  await auth.signOut();
}
