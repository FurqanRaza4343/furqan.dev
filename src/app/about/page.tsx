import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Furqan Raza — an AI/LLM Engineer specializing in Generative AI, Conversational AI, AI Agents, and Intelligent Automation. Based in Karachi, Pakistan.",
  openGraph: {
    title: "About | Furqan.dev",
    description: "Learn more about Furqan Raza — an AI/LLM Engineer specializing in Generative AI, Conversational AI, AI Agents, and Intelligent Automation.",
    url: "https://furqan.dev/about",
    images: [{ url: "/og", width: 1200, height: 630, alt: "About Furqan Raza" }],
  },
};

export default function AboutPage() {
  return (
    <div className="pt-8">
      <AboutSection />
    </div>
  );
}
