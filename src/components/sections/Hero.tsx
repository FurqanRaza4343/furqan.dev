"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Download, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";
import ProfileCard from "@/components/ui/ProfileCard";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-black px-6 pb-32 pt-28 sm:pt-36">
      <HeroScene />

      {!loaded && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-zinc-950/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-3">
            <Loader2 size={32} className="animate-spin text-violet-400" />
            <span className="text-sm text-zinc-400">Loading...</span>
          </div>
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            style={{ y, opacity }}
            className="max-w-2xl text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-700/50 bg-zinc-800/50 px-4 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-sm"
            >
              <Sparkles size={14} className="text-violet-400" />
              AI/LLM Engineer at NeuralHub
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Furqan Raza
              <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                Building AI Agents for the Future
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mx-auto mt-6 max-w-xl text-lg text-zinc-400 lg:mx-0"
            >
              AI Engineer specialized in Generative AI, Conversational AI, AI Agents,
              and Intelligent Automation. I design production-ready AI solutions using
              LLMs, SLMs, RAG, and modern backend technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <Button href="/projects" variant="primary" size="lg">
                View My Work
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button href="/contact" variant="secondary" size="lg" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                Get in Touch
              </Button>
              <a href="/resume" className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-6 py-3 text-sm font-medium text-violet-300 transition-all hover:bg-violet-500/20 hover:border-violet-500/50">
                <Download size={16} />
                Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-8 flex items-center justify-center gap-6 text-sm text-zinc-500 lg:justify-start"
            >
              <a href="https://linkedin.com/in/furqanraza-879504351" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">LinkedIn</a>
              <span className="text-zinc-700">·</span>
              <a href="https://github.com/FurqanRaza4343" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">GitHub</a>
              <span className="text-zinc-700">·</span>
              <a href="https://www.instagram.com/furqanraza4343/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">Instagram</a>
              <span className="text-zinc-700">·</span>
              <span>Karachi, Pakistan</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]"
          >
            <ProfileCard
              avatarUrl="/images/furqanpic.jpg"
              name="Furqan Raza"
              title="AI Engineer"
              handle="furqanraza"
              status="Building the Future"
              contactText="Hire Me"
              enableTilt={true}
              enableMobileTilt={false}
              showUserInfo={true}
              onContactClick={() => window.location.href = "/contact"}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
