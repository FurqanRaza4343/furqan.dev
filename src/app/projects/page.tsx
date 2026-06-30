import type { Metadata } from "next";
import ProjectsSection from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse through my portfolio of AI and web development projects including Generative AI, AI Agents, Healthcare AI, and full-stack applications.",
  openGraph: {
    title: "Projects | Furqan.dev",
    description: "Browse through my portfolio of AI and web development projects including Generative AI, AI Agents, Healthcare AI, and full-stack applications.",
    url: "https://furqan.dev/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="pt-8">
      <ProjectsSection />
    </div>
  );
}
