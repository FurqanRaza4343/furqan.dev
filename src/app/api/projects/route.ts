import { NextResponse } from "next/server";
import { createClient } from "@insforge/sdk";

const publicClient = createClient({
  baseUrl: process.env.NEXT_PUBLIC_INFORGE_URL!,
  anonKey: process.env.NEXT_PUBLIC_INFORGE_ANON_KEY!,
});

export async function GET() {
  const { data, error } = await publicClient.database.from("projects").select("*").order("sort_order", { ascending: true });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ projects: data || [] });
}
