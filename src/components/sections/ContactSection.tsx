"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: data.get("name"),
        email: data.get("email"),
        subject: data.get("subject"),
        message: data.get("message"),
      }),
      headers: { "Content-Type": "application/json" },
    });

    setSubmitted(true);
    form.reset();
  }

  return (
    <AnimatedSection className="bg-zinc-50 px-6 py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Get in Touch"
          subtitle="Have a project in mind? Let's work together."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/50">
                <Mail size={18} className="text-violet-600 dark:text-violet-300" />
              </div>
              <div>
                <h3 className="font-medium text-zinc-900 dark:text-white">Email</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">furqanraza978@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/50">
                <MapPin size={18} className="text-violet-600 dark:text-violet-300" />
              </div>
              <div>
                <h3 className="font-medium text-zinc-900 dark:text-white">Location</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Karachi, Pakistan</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/50">
                <Phone size={18} className="text-violet-600 dark:text-violet-300" />
              </div>
              <div>
                <h3 className="font-medium text-zinc-900 dark:text-white">Phone</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">+92 313 2194343</p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">Available on WhatsApp</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-12 text-center dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-4 text-4xl">🎉</div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                  Message Sent!
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Thank you! I&apos;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-zinc-700 dark:text-zinc-300">
                      Name
                    </label>
                    <input
                      name="name"
                      required
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-violet-500 focus:ring-1 focus:ring-violet-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-zinc-700 dark:text-zinc-300">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-violet-500 focus:ring-1 focus:ring-violet-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-zinc-700 dark:text-zinc-300">
                    Subject
                  </label>
                  <input
                    name="subject"
                    required
                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-violet-500 focus:ring-1 focus:ring-violet-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-500"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-zinc-700 dark:text-zinc-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-violet-500 focus:ring-1 focus:ring-violet-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-500"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                >
                  <Send size={14} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
