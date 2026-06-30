"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Search, ArrowLeft } from "lucide-react";
import { blogPosts as fullBlogData } from "@/lib/blog-data";
import SpotlightCard from "@/components/ui/SpotlightCard";

interface BlogPost {
  id: string; title: string; slug: string; excerpt: string; image: string; tags: string[]; date: string; content?: string;
}

function readingTime(content?: string): string {
  if (!content) return "8 min read";
  const words = content.replace(/\*\*/g, "").replace(/`{1,3}[^`]*`{1,3}/g, "").split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

const allTags = Array.from(new Set(fullBlogData.flatMap((p) => p.tags))).sort();

export default function BlogListing() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    fetch("/api/blog")
      .then((r) => r.json())
      .then((d) => {
        if (d.posts && d.posts.length > 0) setPosts(d.posts);
        else setPosts(fullBlogData);
      })
      .catch(() => setPosts(fullBlogData));
  }, []);

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch = !search ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesTag = !selectedTag || post.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [posts, search, selectedTag]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        <ArrowLeft size={14} /> Back to Home
      </Link>

      <div className="mb-6">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          Blog
        </h1>
        <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
          Thoughts, tutorials, and insights on AI engineering, LLMs, and intelligent automation.
        </p>
      </div>

      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search posts..."
            className="w-full rounded-xl border border-zinc-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-violet-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:focus:border-violet-500"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag("")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
              !selectedTag
                ? "bg-violet-500 text-white"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? "" : tag)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                selectedTag === tag
                  ? "bg-violet-500 text-white"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-zinc-500 dark:text-zinc-400">No posts found matching your search.</p>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
              <SpotlightCard className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />{readingTime(fullBlogData.find((p) => p.slug === post.slug)?.content)}
                    </span>
                  </div>
                  <h2 className="mb-2 font-semibold text-zinc-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400">
                    {post.title}
                  </h2>
                  <p className="mb-4 text-sm text-zinc-600 line-clamp-2 dark:text-zinc-400">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
