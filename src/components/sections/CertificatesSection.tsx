"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink, GraduationCap, Briefcase, Award, X } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import SpotlightCard from "@/components/ui/SpotlightCard";
import type { Certificate } from "@/types";

const certIcons = [GraduationCap, Briefcase, Award];
const certGradients = [
  "from-purple-500 to-pink-600",
  "from-green-500 to-emerald-600",
  "from-blue-500 to-cyan-600",
];

const certImages: Record<string, boolean> = {
  "1": true,
  "2": true,
  "3": true,
};

function hasImage(id: string): boolean {
  return certImages[id] ?? false;
}

const certificates: Certificate[] = [
  {
    id: "1",
    title: "The Agentic Revolution Workshop",
    issuer: "GDG DSU — Build With AI Series",
    date: "2026",
    image: "/images/cert-1.jpg",
    credentialUrl: "https://www.linkedin.com/posts/furqan-raza-879504351_futureoftech-aiworkshop-gdgdsu-activity-7453743419467784192-8MoR",
  },
  {
    id: "2",
    title: "Frontend Development Internship",
    issuer: "Internee.pk",
    date: "2026",
    image: "/images/cert-2.jpg",
    credentialUrl: "https://www.linkedin.com/posts/furqan-raza-879504351_frontenddevelopment-internship-webdevelopment-activity-7436486677478453248-hTGH",
  },
  {
    id: "3",
    title: "Generative AI & Chatbot Development",
    issuer: "Saylani Mass IT Training Program (SMIT) — Batch 7",
    date: "2026",
    image: "/images/cert-3.jpg",
    credentialUrl: "https://www.linkedin.com/posts/furqan-raza-879504351_ai-generativeai-aiagents-share-7473051851073118208-KDIg",
  },
];

export default function CertificatesSection() {
  const [viewingCert, setViewingCert] = useState<string | null>(null);

  return (
    <AnimatedSection className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Certifications"
          subtitle="Professional certifications and achievements."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {certificates.map((cert, i) => {
            const Icon = certIcons[i];
            const showImage = hasImage(cert.id);
            return (
              <SpotlightCard key={cert.id} delay={i * 0.1} disableHover className="h-full">
                <button onClick={() => setViewingCert(cert.image)} className="w-full text-left">
                  {showImage ? (
                    <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-xl">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className={`mb-4 flex aspect-[4/3] items-center justify-center rounded-xl bg-gradient-to-br ${certGradients[i]}`}>
                      <Icon size={52} className="text-white/80" />
                    </div>
                  )}
                </button>
                <h3 className="mb-1 text-lg font-semibold text-zinc-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="mb-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {cert.issuer}
                </p>
                <p className="mb-4 text-xs text-zinc-400 dark:text-zinc-500">
                  {cert.date}
                </p>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setViewingCert(cert.image)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  >
                    <ExternalLink size={14} /> View Certificate
                  </button>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> View from LinkedIn
                  </a>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>

      {viewingCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setViewingCert(null)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setViewingCert(null)}
              className="absolute -top-10 right-0 text-white/80 hover:text-white"
            >
              <X size={24} />
            </button>
            <Image
              src={viewingCert}
              alt="Certificate"
              width={1200}
              height={900}
              className="h-auto max-h-[85vh] w-auto rounded-2xl object-contain"
            />
          </div>
        </div>
      )}
    </AnimatedSection>
  );
}
