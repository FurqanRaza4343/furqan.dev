import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@insforge/sdk";

const insforge = createClient({
  baseUrl: process.env.NEXT_PUBLIC_INSFORGE_URL!,
  anonKey: process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY!,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const { error: dbError } = await insforge.database
      .from("contact_messages")
      .insert([{ name, email, subject, message }]);

    if (dbError) {
      console.error("Contact DB error:", dbError);
      return NextResponse.json({ error: "Failed to save message" }, { status: 500 });
    }

    try {
      await insforge.emails.send({
        to: ["furqanraza978@gmail.com"],
        subject: `New Contact Message — ${name} (${subject})`,
        html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:'Segoe UI',sans-serif;background:#f5f5f5;margin:0;padding:24px;">
<div style="max-width:600px;margin:0 auto;background:white;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.08);">
<div style="background:#7c3aed;padding:24px;text-align:center;">
<h1 style="color:white;margin:0;font-size:20px;">New Contact Message</h1>
</div>
<div style="padding:24px;">
<table style="width:100%;border-collapse:collapse;font-size:13px;">
<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#6b7280;width:100px;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111827;font-weight:600;">${name}</td></tr>
<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#6b7280;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111827;"><a href="mailto:${email}" style="color:#7c3aed;">${email}</a></td></tr>
<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#6b7280;">Subject</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111827;">${subject}</td></tr>
</table>
<div style="margin-top:16px;background:#f9fafb;border-radius:8px;padding:16px;">
<p style="margin:0 0 8px;color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;">Message</p>
<p style="margin:0;color:#374151;font-size:14px;line-height:1.6;white-space:pre-wrap;">${message}</p>
</div>
</div></div></body></html>`,
      });
    } catch (e) {
      console.warn("Contact email send failed:", e);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
