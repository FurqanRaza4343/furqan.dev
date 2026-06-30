"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const reasonOptions = [
  "Want to discuss a project",
  "Need AI consultation",
  "Collaboration opportunity",
  "Want to hire me",
  "General inquiry",
  "Other",
];

export default function BookingForm() {
  const [form, setForm] = useState({
    clientName: "",
    clientEmail: "",
    phone: "",
    whatsapp: "",
    reasonForMeeting: "",
    whatToDiscuss: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.clientName || !form.clientEmail || !form.whatsapp || !form.reasonForMeeting || !form.whatToDiscuss) return;

    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setForm({ clientName: "", clientEmail: "", phone: "", whatsapp: "", reasonForMeeting: "", whatToDiscuss: "" });
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch {
      setError("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
          <CheckCircle size={32} />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-white">Booking Submitted!</h3>
        <p className="mb-6 max-w-sm text-sm text-zinc-600 dark:text-zinc-400">
          Thank you! Your appointment request has been received. Check your email for confirmation details including Furqan's contact number. He will reach out to you on WhatsApp within 24–48 hours.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="rounded-xl bg-violet-500 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-600"
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-900/30 dark:text-red-400">
          {error}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="clientName"
            value={form.clientName}
            onChange={handleChange}
            required
            placeholder="Furqan Raza"
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-violet-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:border-violet-500"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="clientEmail"
            value={form.clientEmail}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-violet-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:border-violet-500"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Phone <span className="text-zinc-400">(optional)</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+92 300 1234567"
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-violet-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:border-violet-500"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            WhatsApp Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            required
            placeholder="+92 300 1234567"
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-violet-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:border-violet-500"
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Reason for Meeting <span className="text-red-500">*</span>
        </label>
        <select
          name="reasonForMeeting"
          value={form.reasonForMeeting}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-violet-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:border-violet-500"
        >
          <option value="">Why do you want to meet?</option>
          {reasonOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          What to Discuss <span className="text-red-500">*</span>
        </label>
        <textarea
          name="whatToDiscuss"
          value={form.whatToDiscuss}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell me what you'd like to talk about — your idea, project details, questions, or anything else you want to discuss..."
          className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-violet-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:border-violet-500"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-6 py-3 text-sm font-medium text-white transition-all hover:from-violet-600 hover:to-purple-700 disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Submitting...
          </>
        ) : (
          <>
            <Send size={16} /> Submit Appointment Request
          </>
        )}
      </button>

      <p className="text-center text-xs text-zinc-400">
        By submitting, you agree to be contacted about your project. Your data is stored securely.
      </p>
    </form>
  );
}
