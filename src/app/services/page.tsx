import type { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  title: "Services",
  description: "AI services including Generative AI, AI Agents, Conversational AI, RAG, LLM Integration, Workflow Automation, LangChain, Healthcare AI, and Backend/API development.",
  openGraph: {
    title: "Services | Furqan.dev",
    description: "AI services including Generative AI, AI Agents, Conversational AI, RAG, LLM Integration, Workflow Automation, LangChain, Healthcare AI, and Backend/API development.",
    url: "https://furqan.dev/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-8">
      <ServicesSection />
    </div>
  );
}
