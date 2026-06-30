"use client";

import {
  Brain, Bot, MessageSquare, Database, Cpu, Workflow,
  Code2, GitBranch, Shield, Cloud, Route, Blocks,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import SpotlightCard from "@/components/ui/SpotlightCard";

const services = [
  {
    icon: Brain,
    title: "Generative AI Solutions",
    description: "Custom GenAI applications using LLMs and SLMs for content generation, data analysis, and intelligent automation.",
  },
  {
    icon: Bot,
    title: "AI Agent Development",
    description: "Autonomous AI agents and agentic AI systems that automate complex workflows and decision-making processes.",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI & Chatbots",
    description: "Intelligent chatbots using Dialogflow, GPT-based assistants, and Kommunicate for customer support and engagement.",
  },
  {
    icon: Database,
    title: "RAG & Vector Search",
    description: "Retrieval-Augmented Generation systems with Qdrant vector databases for accurate, context-aware AI responses.",
  },
  {
    icon: Code2,
    title: "LLM/SLM Integration & APIs",
    description: "Integration of OpenAI, Claude, and open-source LLMs/SLMs into production systems with FastAPI backend services.",
  },
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    description: "End-to-end automation with n8n, Make.com, and Flowise to reduce manual work and streamline business processes.",
  },
  {
    icon: Route,
    title: "LangChain & AI Frameworks",
    description: "Building complex AI pipelines using LangChain, AI Agent Frameworks, and custom orchestration systems.",
  },
  {
    icon: Shield,
    title: "Healthcare AI Solutions",
    description: "AI-powered healthcare systems for patient intake, clinical workflows, and medical data management.",
  },
  {
    icon: Cloud,
    title: "Backend & API Engineering",
    description: "Production-ready backend systems with Python, FastAPI, PostgreSQL, MongoDB, and RESTful API design.",
  },
];

export default function ServicesSection() {
  return (
    <AnimatedSection className="bg-zinc-50 px-6 py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Services"
          subtitle="AI-powered solutions to automate workflows, improve customer interactions, and streamline operations."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <SpotlightCard key={service.title} delay={i * 0.1}>
                <Icon className="mb-4 text-violet-500" size={28} />
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
