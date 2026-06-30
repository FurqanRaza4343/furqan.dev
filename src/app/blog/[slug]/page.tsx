import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import BlogComments from "@/components/BlogComments";
import type { Metadata } from "next";
import JsonLdBlogPost from "@/components/JsonLdBlogPost";
import { calculateReadingTime } from "@/lib/reading-time";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `https://furqan.dev/blog/${post.slug}`,
      images: [{ url: `https://furqan.dev/og?title=${encodeURIComponent(post.title)}&desc=${encodeURIComponent(post.excerpt)}`, width: 1200, height: 630, alt: post.title }],
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const readingTime = calculateReadingTime(post.content);

  return (
    <>
      <JsonLdBlogPost post={post} />
      <div className="mx-auto max-w-3xl px-6 pt-24">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        <ArrowLeft size={14} /> Back to Blog
      </Link>
      </div>

      <div className="mb-10 w-full bg-zinc-100 dark:bg-zinc-900">
        <div className="mx-auto max-w-5xl px-6">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={675}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 pb-24">
      <article>
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} />{readingTime} min read
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="prose prose-zinc mx-auto max-w-none dark:prose-invert prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-a:text-blue-600 dark:prose-headings:text-white dark:prose-p:text-zinc-400 prose-headings:font-semibold prose-headings:tracking-tight">
          {post.content.split("\n").map((line, i) => {
            if (line.startsWith("## ")) {
              return (
                <h2 key={i} className="mt-10 mb-4 text-2xl">
                  {line.replace("## ", "")}
                </h2>
              );
            }
            if (line.startsWith("### ")) {
              return (
                <h3 key={i} className="mt-8 mb-3 text-xl">
                  {line.replace("### ", "")}
                </h3>
              );
            }
            if (line.startsWith("**") && line.endsWith("**")) {
              return (
                <p key={i} className="mb-6 text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  {line.replace(/\*\*/g, "")}
                </p>
              );
            }
            if (line.startsWith("- **")) {
              const match = line.match(/- \*\*(.+?)\*\*(.*)/);
              if (match) {
                return (
                  <li key={i} className="ml-6 mb-2 text-zinc-600 dark:text-zinc-400">
                    <strong className="text-zinc-900 dark:text-white">{match[1]}</strong>{match[2]}
                  </li>
                );
              }
            }
            if (line.startsWith("- ")) {
              return (
                <li key={i} className="ml-6 mb-2 text-zinc-600 dark:text-zinc-400">
                  {line.replace("- ", "")}
                </li>
              );
            }
            if (line.startsWith("1. ") || line.match(/^\d+\. /)) {
              return (
                <li key={i} className="ml-6 mb-2 text-zinc-600 dark:text-zinc-400 list-decimal">
                  {line.replace(/^\d+\. /, "")}
                </li>
              );
            }
            if (line.startsWith("| ") && line.endsWith(" |")) {
              return null;
            }
            if (line.startsWith("|---")) {
              return null;
            }
            if (line.startsWith("---")) {
              return <hr key={i} className="my-10 border-zinc-200 dark:border-zinc-800" />;
            }
            if (line.trim() === "") {
              return <div key={i} className="h-2" />;
            }
            return (
              <p key={i} className="mb-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {line}
              </p>
            );
          })}
        </div>
      </article>

      <BlogComments slug={slug} />
    </div>
    </>
  );
}
