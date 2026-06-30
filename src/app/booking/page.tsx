import type { Metadata } from "next";
import { Calendar, User, Mail, Phone, MessageSquare, Sparkles, Video } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Book a free consultation with Furqan Raza — AI Engineer & GenAI Developer. Discuss your project, ideas, or collaboration opportunities.",
  openGraph: {
    title: "Book an Appointment | Furqan.dev",
    description: "Book a free consultation with Furqan Raza — AI Engineer & GenAI Developer. Discuss your project, ideas, or collaboration opportunities.",
    url: "https://furqan.dev/booking",
  },
};

const features = [
  {
    icon: <Sparkles size={20} />,
    title: "Free Consultation",
    desc: "Discuss your ideas, project, or questions — no commitment needed",
  },
  {
    icon: <MessageSquare size={20} />,
    title: "WhatsApp Connect",
    desc: "Furqan will reach out to you on WhatsApp within 24–48 hours",
  },
  {
    icon: <Video size={20} />,
    title: "Online Meeting",
    desc: "Have a one-on-one call to discuss your needs in detail",
  },
  {
    icon: <Calendar size={20} />,
    title: "Flexible Timing",
    desc: "We'll find a time that works best for you",
  },
];

export default function BookingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-white sm:text-5xl">
          Book an Appointment
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Want to connect? Fill out the form below and Furqan will reach out to you on
          WhatsApp within <strong>24–48 hours</strong>.
        </p>
      </div>

      <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((type) => (
          <div
            key={type.title}
            className="rounded-2xl border border-zinc-200 bg-white p-5 transition-colors hover:border-violet-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-violet-600"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-900/50 dark:text-violet-400">
              {type.icon}
            </div>
            <h3 className="mb-1 font-semibold text-zinc-900 dark:text-white">{type.title}</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{type.desc}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
          <BookingForm />
        </div>
      </div>
    </main>
  );
}
