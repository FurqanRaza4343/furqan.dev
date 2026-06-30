"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ExternalLink, Code2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import SpotlightCard from "@/components/ui/SpotlightCard";

interface Project {
  id: string; title: string; description: string; image: string; tags: string[]; live_url: string; repo_url: string; sort_order: number;
}

const fallbackProjects: Project[] = [
  {
    id: "3", title: "DentaCare AI Clinic",
    description: "A dental care clinic website with an AI chatbot for appointment booking, patient queries, and service information. Built and sold to a real client.",
    image: "/images/project-3.jpg", tags: ["Healthcare", "Dental Clinic", "AI Chatbot", "Client Project", "Next.js"],
    live_url: "https://denta-care-ai-clinic.vercel.app/", repo_url: "#", sort_order: 0,
  },
  {
    id: "4", title: "Zyncut AI - Background Remover",
    description: "A free AI-powered background removal tool that lets users instantly remove and replace image backgrounds with no cost. Fast, accurate, and easy to use.",
    image: "/images/project-4.jpg", tags: ["AI", "Background Removal", "Image Processing", "Next.js", "ML"],
    live_url: "https://zyncut-ai.vercel.app/", repo_url: "#", sort_order: 1,
  },
  {
    id: "5", title: "MadadGar AI — Agent for Pakistan's Informal Economy",
    description: "Built for the AI Seekhao × Google Antigravity Hackathon 2026. Disqualified for being under 18, but built it anyway in one weekend. An AI agent handling WhatsApp-based booking for plumbers, AC techs, and electricians.",
    image: "/images/project-5.jpg", tags: ["AI Agent", "Clerk", "Supabase", "Resend", "Google Maps", "Google Antigravity", "WhatsApp AI"],
    live_url: "https://www.linkedin.com/posts/furqan-raza-879504351_ai-pakistan-madadgarai-activity-7467182335277293568-81l1", repo_url: "#", sort_order: 2,
  },
  {
    id: "6", title: "AI Dental Assistant Agent",
    description: "An AI-powered dental assistant that answers dental and oral health questions, provides service info, pricing, and packages, books appointments via email, calendar, WhatsApp, or SMS.",
    image: "/images/project-6.jpg", tags: ["AI Agent", "Healthcare", "Dental AI", "WhatsApp", "Email", "Automation"],
    live_url: "https://www.linkedin.com/posts/furqan-raza-879504351_dentalai-healthcareautomation-aiforbusiness-activity-7434986321758179328-uX67", repo_url: "#", sort_order: 3,
  },
  {
    id: "1", title: "Inventory Pro System",
    description: "A comprehensive inventory management system with an integrated chatbot for seamless stock tracking, order management, and real-time inventory insights.",
    image: "/images/project-1.jpg", tags: ["Next.js", "Inventory Management", "Chatbot", "AI", "Full-Stack"],
    live_url: "https://inventory-pro-system.vercel.app/", repo_url: "#", sort_order: 4,
  },
  {
    id: "2", title: "Customer Support AI Agent",
    description: "AI-powered customer support website with Kommunicate WhatsApp integration for automated query handling, live chat, and seamless customer engagement.",
    image: "/images/project-2.jpg", tags: ["Customer Support", "Kommunicate", "WhatsApp", "AI Chatbot", "Next.js"],
    live_url: "https://customer-supprt-agent.vercel.app/", repo_url: "#", sort_order: 5,
  },
];

const projectGradients = [
  "from-amber-500 to-red-600", "from-cyan-500 to-sky-600", "from-emerald-500 to-teal-600",
  "from-blue-500 to-indigo-600", "from-cyan-500 to-blue-600", "from-violet-500 to-purple-600",
];

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((d) => {
        if (d.projects && d.projects.length > 0) setProjects(d.projects);
      })
      .catch(() => {});
  }, []);

  return (
    <AnimatedSection className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Featured Projects" subtitle="A selection of projects I've worked on recently." />
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, i) => (
            <SpotlightCard key={project.id} delay={i * 0.1}>
              <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="mb-4 block overflow-hidden rounded-xl transition-transform hover:scale-[1.02]">
                {project.image ? (
                  <div className="relative aspect-video">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                  </div>
                ) : (
                  <div className={`flex aspect-video items-center justify-center bg-gradient-to-br ${projectGradients[i % projectGradients.length]}`}>
                    <span className="text-4xl font-bold text-white/60">{i + 1}</span>
                  </div>
                )}
              </a>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">{project.title}</h3>
              <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">{tag}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={project.repo_url !== "#" ? project.repo_url : undefined}
                  className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${project.repo_url !== "#" ? "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" : "pointer-events-none text-zinc-400 dark:text-zinc-600"}`}>
                  <Code2 size={14} /> Code
                </a>
                <a href={project.live_url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
              </SpotlightCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
