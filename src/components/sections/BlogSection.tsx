"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Button from "@/components/ui/Button";

interface BlogPost {
  id: string; title: string; slug: string; excerpt: string; image: string; tags: string[]; date: string; content?: string;
}

const fallbackPosts: BlogPost[] = [
  { id: "5", title: "How to Build Your First AI Agent: A Step-by-Step Guide for Beginners", slug: "build-your-first-ai-agent-guide", excerpt: "A practical, no-fluff guide to building your first AI agent from scratch. Learn the core components — reasoning loop, tools, memory — with real code examples and production-ready patterns.", image: "/images/blog-5.jpg", tags: ["AI Agents", "Tutorial", "Beginner Guide", "Agent Development"], date: "2026-06-12", content: "" },
  { id: "4", title: "The AI Agent Factory: Building Digital Employees That Never Sleep", slug: "ai-agent-factory-digital-employees", excerpt: "A deep dive into the Agent Factory methodology — what Digital FTEs are, the 10-80-10 rule, spec-driven development, and how to build AI workers that run real businesses while you sleep.", image: "/images/blog-4.jpg", tags: ["AI Agents", "Agent Factory", "Digital FTEs", "Panaversity", "Spec-Driven Dev"], date: "2026-06-17", content: "" },
  { id: "2", title: "RAG Systems: From Theory to Production", slug: "rag-systems-theory-to-production", excerpt: "Learn how to implement Retrieval-Augmented Generation systems using vector databases like Qdrant for accurate and context-aware AI responses.", image: "/images/blog-2.jpg", tags: ["RAG", "Vector Search", "Qdrant", "GenAI"], date: "2026-05-28", content: "" },
  { id: "3", title: "The Future of Healthcare AI: Intelligent Patient Intake Systems", slug: "future-healthcare-ai-patient-intake", excerpt: "Exploring how AI-powered patient intake and receptionist agents are transforming the healthcare industry with intelligent automation.", image: "/images/blog-3.jpg", tags: ["Healthcare AI", "Automation", "Conversational AI", "Patient Intake"], date: "2026-05-15", content: "" },
  { id: "1", title: "Building Production-Ready AI Agents with LLMs", slug: "building-production-ai-agents-llms", excerpt: "A comprehensive guide to designing, building, and deploying autonomous AI agents using Large Language Models in production environments.", image: "/images/blog-1.jpg", tags: ["AI Agents", "LLMs", "Production", "GenAI"], date: "2026-06-10", content: "" },
  { id: "6", title: "10 AI Developer Tools Every Programmer Should Know in 2026", slug: "ai-developer-tools-every-programmer-should-know", excerpt: "A curated list of the most impactful AI coding tools in 2026 — from autonomous agents like Claude Code to no-code platforms like n8n.", image: "/images/blog-6.jpg", tags: ["AI Tools", "Developer Tools", "Claude Code", "Cursor", "n8n"], date: "2026-06-08", content: "" },
];

function readingTime(content?: string): string {
  if (!content) return "8 min read";
  const words = content.replace(/\*\*/g, "").replace(/`{1,3}[^`]*`{1,3}/g, "").split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>(fallbackPosts);

  useEffect(() => {
    fetch("/api/blog")
      .then((r) => r.json())
      .then((d) => {
        if (d.posts && d.posts.length > 0) setPosts(d.posts);
      })
      .catch(() => {});
  }, []);

  return (
    <AnimatedSection className="bg-zinc-50 px-6 py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Latest Blog Posts" subtitle="Thoughts, tutorials, and insights on AI engineering, LLMs, and intelligent automation." />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="block">
              <SpotlightCard delay={i * 0.1}>
                <div className="relative mb-4 aspect-video overflow-hidden rounded-xl">
                  <Image src={post.image} alt={post.title} fill className="object-cover transition-transform hover:scale-105" />
                </div>
                <div className="mb-3 flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1"><Clock size={12} />{readingTime(post.content)}</span>
                </div>
                <h3 className="mb-2 font-semibold text-zinc-900 dark:text-white">{post.title}</h3>
                <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">{tag}</span>
                  ))}
                </div>
              </SpotlightCard>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/blog" variant="secondary">View All Posts <ArrowRight size={14} className="ml-1" /></Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
