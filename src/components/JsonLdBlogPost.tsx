import type { BlogPost } from "@/types";

export default function JsonLdBlogPost({ post }: { post: BlogPost }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://furqan.dev${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Furqan Raza",
      url: "https://furqan.dev",
    },
    publisher: {
      "@type": "Person",
      name: "Furqan Raza",
    },
    url: `https://furqan.dev/blog/${post.slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
