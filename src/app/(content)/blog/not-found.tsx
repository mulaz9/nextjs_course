// app/blog/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
      <p className="mb-4 text-zinc-400">
        The blog post you are looking for does not exist or has been removed.
      </p>
      <Link
        href="/blog"
        className="bg-zinc-700 px-4 py2 rounded hover:bg-zinc-600"
      >
        Go back to the blog
      </Link>
    </div>
  );
}
