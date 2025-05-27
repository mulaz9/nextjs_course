// app/blog/page.tsx
import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
}

const blogPosts: Post[] = [
  {
    slug: "primo-post",
    title: "Il mio primo Post",
    excerpt:
      "Questo è il mio primo post sul blog. Sono entusiasta di condividere le mie idee e pensieri con voi!",
  },
  {
    slug: "secondo-post",
    title: "Il mio secondo Post",
    excerpt:
      "Questo è il mio secondo post sul blog. Continuo a esplorare e condividere le mie esperienze.",
  },
  {
    slug: "terzo-post",
    title: "Il mio terzo Post",
    excerpt:
      "Questo è il mio terzo post sul blog. Grazie per seguire il mio viaggio!",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article key={post.slug} className="p-6 bg-zinc-800 rounded-lg">
            <h2 className="text-xl font-bold mb-2">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-zinc-300 transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-zinc-400">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
