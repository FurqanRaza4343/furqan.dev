import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download or view the resume of Furqan Raza, an AI/LLM Engineer specializing in Generative AI, Conversational AI, AI Agents, and Intelligent Automation.",
  openGraph: {
    title: "Resume | Furqan Raza — AI/LLM Engineer",
    description: "Download or view the resume of Furqan Raza, an AI/LLM Engineer specializing in Generative AI, Conversational AI, AI Agents, and Intelligent Automation.",
    url: "https://furqan.dev/resume",
    images: [{ url: "/og", width: 1200, height: 630, alt: "Furqan Raza - Resume" }],
  },
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>
        <a
          href="/resume/Furqan_Raza_AI_Engineer_Profile.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-600"
        >
          <Download size={16} /> Download PDF
        </a>
      </div>

      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <iframe
          src="/resume/Furqan_Raza_AI_Engineer_Profile.pdf"
          className="h-[85vh] w-full"
          title="Furqan Raza - AI Engineer Resume"
        />
      </div>
    </div>
  );
}
