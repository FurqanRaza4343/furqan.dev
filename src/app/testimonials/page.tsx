import type { Metadata } from "next";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What clients say about working with Furqan Raza — AI Engineer specializing in Generative AI, Conversational AI, and AI Agents.",
  openGraph: {
    title: "Testimonials | Furqan.dev",
    description: "What clients say about working with Furqan Raza — AI Engineer specializing in Generative AI, Conversational AI, and AI Agents.",
    url: "https://furqan.dev/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <div className="pt-8">
      <TestimonialsSection />
    </div>
  );
}
