import { NextResponse } from "next/server";
import { createClient } from "@insforge/sdk";
import { insforgeEmailHtml } from "@/lib/email-templates";

const insforge = createClient({
  baseUrl: process.env.NEXT_PUBLIC_INSFORGE_URL!,
  anonKey: process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY!,
});

export async function POST(req: Request) {
  try {
    const { clientName, clientEmail, phone, whatsapp, reasonForMeeting, whatToDiscuss } =
      await req.json();

    if (!clientName || !clientEmail || !whatsapp || !reasonForMeeting || !whatToDiscuss) {
      return NextResponse.json(
        { error: "name, email, whatsapp, reason for meeting, and what to discuss are required" },
        { status: 400 },
      );
    }

    const { data: booking, error: dbError } = await insforge.database
      .from("client_bookings")
      .insert([
        {
          client_name: clientName,
          client_email: clientEmail,
          phone: phone || null,
          whatsapp,
          reason_for_meeting: reasonForMeeting,
          what_to_discuss: whatToDiscuss,
        },
      ])
      .select()
      .single();

    if (dbError || !booking) {
      return NextResponse.json(
        { error: dbError?.message || "Failed to save booking" },
        { status: 500 },
      );
    }

    const dateStr = new Date(booking.created_at).toLocaleString("en-US", {
      dateStyle: "long",
      timeStyle: "short",
    });

    const { error: emailError } = await insforge.emails.send({
      to: [clientEmail, "furqanraza978@gmail.com"],
      subject: "Appointment Confirmation — Furqan.dev",
      html: insforgeEmailHtml({
        clientName,
        clientEmail,
        phone,
        whatsapp,
        reasonForMeeting,
        whatToDiscuss,
        dateStr,
        isOwner: false,
      }),
    });

    if (emailError) {
      console.warn("Email send failed:", emailError.message);
    }

    try {
      await insforge.emails.send({
        to: ["furqanraza978@gmail.com"],
        subject: `New Appointment — ${clientName} (${reasonForMeeting})`,
        html: insforgeEmailHtml({
          clientName,
          clientEmail,
          phone,
          whatsapp,
          reasonForMeeting,
          whatToDiscuss,
          dateStr,
          isOwner: true,
        }),
      });
    } catch (e) {
      console.warn("Owner notification email failed:", e);
    }

    return NextResponse.json({
      success: true,
      message:
        "Your appointment has been booked! Check your email for confirmation with Furqan's contact number.",
    });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
