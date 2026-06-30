"use client";

import { motion } from "framer-motion";
import { Brain, Bot, Cpu, Rocket, Briefcase, GraduationCap, MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";

const highlights = [
  {
    icon: Brain,
    label: "GenAI & LLMs",
    desc: "Specializing in Large Language Models, SLMs, and Generative AI",
  },
  {
    icon: Bot,
    label: "AI Agents",
    desc: "Building intelligent autonomous AI agent systems & Agentic AI",
  },
  {
    icon: Cpu,
    label: "RAG Systems",
    desc: "Retrieval-Augmented Generation with Qdrant vector databases",
  },
  {
    icon: Rocket,
    label: "Production AI",
    desc: "Deploying scalable AI solutions to production environments",
  },
];

const experience = [
  {
    role: "AI / LLM / SLM Engineer",
    company: "NeuralHub — US-Based (Healthcare Industry)",
    period: "Jun 2026 – Present",
    details: [
      "Developing AI-powered healthcare solutions using LLMs and SLMs",
      "Building intelligent AI agents and automation systems for clinical workflows",
      "Designing conversational AI interfaces and RAG-based retrieval pipelines",
      "Implementing vector database integrations with Qdrant and PostgreSQL",
    ],
  },
  {
    role: "Generative AI & Chatbot Developer",
    company: "Saylani Mass IT Training Program (SMIT) — Karachi",
    period: "Jul 2025 – Apr 2026",
    details: [
      "Chatbot development using Dialogflow and GPT-based assistants",
      "RAG system design and implementation for knowledge-base queries",
      "FAQ and customer-support chatbot development with website integration",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Internee.pk — Karachi",
    period: "Dec 2025 – Feb 2026",
    details: [
      "Frontend development using modern web technologies",
      "Project-based development and delivery workflows",
    ],
  },
];

export default function AboutSection() {
  return (
    <AnimatedSection className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="About Me"
          subtitle="AI Engineer | GenAI & Chatbot Developer | AI Agent Architect | LLM/SLM Engineer"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Hi! I&apos;m <strong>Furqan Raza</strong>, an AI Engineer from
              Karachi, Pakistan specializing in Generative AI, Conversational AI,
              AI Agents, and Intelligent Automation.
            </p>
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Currently working as an <strong>AI/LLM/SLM Engineer</strong> at{" "}
              <strong>NeuralHub</strong> (US-based, Healthcare Industry), I design
              and develop AI-powered solutions that help businesses automate
              workflows, improve customer interactions, and streamline operations.
            </p>
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              My expertise spans Large Language Models (LLMs), Small Language
              Models (SLMs), Retrieval-Augmented Generation (RAG), vector databases
              (Qdrant), Python, FastAPI, and modern backend technologies. I
              transform complex business requirements into intelligent AI systems
              that deliver measurable value.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                <MapPin size={14} className="text-violet-500" />
                Karachi, Pakistan
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                <Mail size={14} className="text-violet-500" />
                furqanraza978@gmail.com
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                <Phone size={14} className="text-violet-500" />
                +92 313 2194343
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50"
                  >
                    <Icon className="mb-3 text-violet-500" size={24} />
                    <div className="text-2xl font-bold text-zinc-900 dark:text-white">
                      {item.label}
                    </div>
                    <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                      {item.desc}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap size={20} className="text-violet-500" />
                <span className="font-semibold text-zinc-900 dark:text-white">Certification</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Saylani Mass Training Programme — Generative AI & Chatbot (Batch-7)
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500">Nov 2025 – Apr 2026</p>
              <a
                href="https://www.linkedin.com/posts/furqan-raza-879504351_ai-generativeai-aiagents-share-7473051851073118208-KDIg"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs text-violet-500 hover:text-violet-600 transition-colors"
              >
                <ExternalLink size={12} /> View Credential
              </a>
            </motion.div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="mb-8 text-2xl font-bold text-zinc-900 dark:text-white">Experience</h3>
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800"
              >
                <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-violet-500" />
                <div className="mb-1 flex items-center gap-2 text-sm text-violet-500">
                  <Briefcase size={14} />
                  <span>{exp.period}</span>
                </div>
                <h4 className="text-lg font-semibold text-zinc-900 dark:text-white">{exp.role}</h4>
                <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">{exp.company}</p>
                <ul className="space-y-1">
                  {exp.details.map((detail, j) => (
                    <li key={j} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
