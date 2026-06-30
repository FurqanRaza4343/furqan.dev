"use client";

import { Star } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import SpotlightCard from "@/components/ui/SpotlightCard";
import type { Testimonial } from "@/types";

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Ahmed Hassan",
    role: "Chief Medical Officer",
    company: "Healthcare AI Solutions",
    avatar: "",
    content: "Furqan's AI patient intake system revolutionized our workflow. The intelligent agent handles patient data collection seamlessly, saving us hours of manual work daily.",
    rating: 5,
  },
  {
    id: "2",
    name: "Sarah Khan",
    role: "VP of Engineering",
    company: "TechFlow Inc.",
    avatar: "",
    content: "Exceptional AI engineering skills. Furqan built a customer support AI agent that reduced our response time by 80%. His understanding of LLMs and conversational AI is outstanding.",
    rating: 5,
  },
  {
    id: "3",
    name: "Usman Malik",
    role: "Founder & CEO",
    company: "DataSync Technologies",
    avatar: "",
    content: "Working with Furqan on our AI workflow automation was a game-changer. He delivered a production-ready system that automated 70% of our manual processes. Highly recommended!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <AnimatedSection className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="What Clients Say"
          subtitle="Feedback from people I've worked with."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <SpotlightCard key={t.id} delay={i * 0.1}>
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-sm font-semibold text-violet-600 dark:bg-violet-900/50 dark:text-violet-300">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-900 dark:text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
