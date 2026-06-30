import type { Metadata } from "next";
import BlogListing from "@/components/BlogListing";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my latest blog posts about AI Agents, Generative AI, LLMs, RAG systems, and production AI engineering.",
  openGraph: {
    title: "Blog | Furqan.dev",
    description: "Read my latest blog posts about AI Agents, Generative AI, LLMs, RAG systems, and production AI engineering.",
    url: "https://furqan.dev/blog",
  },
};

export default function BlogPage() {
  return <BlogListing />;
}
