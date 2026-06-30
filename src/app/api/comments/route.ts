import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@insforge/sdk";

const insforge = createClient({
  baseUrl: process.env.NEXT_PUBLIC_INFORGE_URL || "",
  anonKey: process.env.NEXT_PUBLIC_INFORGE_ANON_KEY || "",
});

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "slug is required" }, { status: 400 });
  }

  const { data, error } = await insforge.database
    .from("blog_comments")
    .select("*")
    .eq("blog_slug", slug)
    .order("created_at", { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ comments: data || [] });
}

export async function POST(request: Request) {
  try {
    const { blogSlug, authorName, authorEmail, content } = await request.json();

    if (!blogSlug || !authorName || !authorEmail || !content) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const { data, error } = await insforge.database
      .from("blog_comments")
      .insert([
        {
          blog_slug: blogSlug,
          author_name: authorName,
          author_email: authorEmail,
          content,
        },
      ])
      .select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ comment: data?.[0] }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
