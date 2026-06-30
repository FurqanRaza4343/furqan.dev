import type { Metadata } from "next";
import Link from "next/link";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Furqan Raza for AI consulting, freelance projects, and collaboration opportunities.",
  openGraph: {
    title: "Contact | Furqan.dev",
    description: "Get in touch with Furqan Raza for AI consulting, freelance projects, and collaboration opportunities.",
    url: "https://furqan.dev/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-8">
      <div className="mx-auto mb-8 max-w-2xl rounded-2xl border border-violet-200 bg-violet-50 p-6 text-center dark:border-violet-900/50 dark:bg-violet-900/20">
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          Want to book a project? Use the{" "}
          <Link href="/booking" className="font-semibold text-violet-600 underline underline-offset-2 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300">
            Booking System
          </Link>{" "}
          for a structured request. For general inquiries, use the form below.
        </p>
      </div>
      <ContactSection />
    </div>
  );
}
