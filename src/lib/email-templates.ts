interface EmailData {
  clientName: string;
  clientEmail: string;
  phone?: string;
  whatsapp?: string;
  reasonForMeeting: string;
  whatToDiscuss: string;
  dateStr: string;
  isOwner: boolean;
}

export function insforgeEmailHtml(data: EmailData): string {
  const {
    clientName,
    clientEmail,
    phone,
    whatsapp,
    reasonForMeeting,
    whatToDiscuss,
    dateStr,
    isOwner,
  } = data;

  if (isOwner) {
    return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:'Segoe UI',sans-serif;background:#f5f5f5;margin:0;padding:24px;">
<div style="max-width:600px;margin:0 auto;background:white;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.08);">
<div style="background:#7c3aed;padding:24px;text-align:center;">
<h1 style="color:white;margin:0;font-size:20px;">New Appointment Request</h1>
</div>
<div style="padding:24px;">
<p style="color:#374151;margin:0 0 16px;font-size:14px;">A new appointment request has been submitted on <strong>furqan.dev</strong>.</p>
<table style="width:100%;border-collapse:collapse;font-size:13px;">
<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#6b7280;width:120px;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111827;font-weight:600;">${clientName}</td></tr>
<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#6b7280;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111827;"><a href="mailto:${clientEmail}" style="color:#7c3aed;">${clientEmail}</a></td></tr>
${phone ? `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#6b7280;">Phone</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111827;">${phone}</td></tr>` : ""}
<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#6b7280;">WhatsApp</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111827;font-weight:600;">${whatsapp}</td></tr>
<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#6b7280;">Reason for Meeting</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111827;">${reasonForMeeting}</td></tr>
<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#6b7280;">Submitted At</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111827;">${dateStr}</td></tr>
</table>
<div style="margin-top:16px;background:#f9fafb;border-radius:8px;padding:16px;">
<p style="margin:0 0 8px;color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;">What They Want to Discuss</p>
<p style="margin:0;color:#374151;font-size:14px;line-height:1.6;white-space:pre-wrap;">${whatToDiscuss}</p>
</div>
<p style="margin-top:20px;font-size:12px;color:#9ca3af;text-align:center;">Contact ${clientName} via WhatsApp at <strong>${whatsapp}</strong> or reply to <a href="mailto:${clientEmail}" style="color:#7c3aed;">${clientEmail}</a></p>
</div></div></body></html>`;
  }

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:'Segoe UI',sans-serif;background:#f5f5f5;margin:0;padding:24px;">
<div style="max-width:600px;margin:0 auto;background:white;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.08);">
<div style="background:#7c3aed;padding:24px;text-align:center;">
<h1 style="color:white;margin:0;font-size:20px;">Appointment Confirmed!</h1>
</div>
<div style="padding:24px;">
<p style="color:#374151;font-size:14px;">Hi <strong>${clientName}</strong>,</p>
<p style="color:#374151;font-size:14px;line-height:1.6;">Thank you for reaching out! Your appointment request has been received successfully.</p>
<table style="width:100%;border-collapse:collapse;font-size:13px;margin:16px 0;">
<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#6b7280;width:120px;">Reason</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111827;font-weight:600;">${reasonForMeeting}</td></tr>
<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#6b7280;">WhatsApp</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111827;">${whatsapp}</td></tr>
<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#6b7280;">Submitted</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111827;">${dateStr}</td></tr>
</table>

<div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:16px;margin:16px 0;">
<p style="margin:0 0 8px;color:#166534;font-size:13px;font-weight:600;">Furqan's Contact Number</p>
<p style="margin:0 0 4px;color:#166534;font-size:16px;font-weight:700;">+92 318 4315298</p>
<p style="margin:0;color:#166534;font-size:12px;">Available on WhatsApp & calls</p>
</div>

<p style="color:#374151;font-size:14px;line-height:1.6;">Furqan will personally reach out to you on WhatsApp at <strong>${whatsapp}</strong> within <strong>24–48 hours</strong> to discuss everything.</p>
<p style="color:#374151;font-size:14px;">In the meantime, feel free to explore more projects at <a href="https://furqan.dev/projects" style="color:#7c3aed;">furqan.dev/projects</a>.</p>
<hr style="border:none;border-top:1px solid #eee;margin:24px 0;">
<p style="color:#9ca3af;font-size:12px;text-align:center;">Furqan Raza — AI Engineer & GenAI Developer</p>
</div></div></body></html>`;
}
