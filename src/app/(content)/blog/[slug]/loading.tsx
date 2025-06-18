// app/blog/[slug]/loading.tsx
export default function LoadingPost() {
  return (
    <article className="max-w-4xl mx-auto p-8">
      <div className="h-8 w-3/4 bg-zinc-800 rounded animate-pulse mb-8" />
      <div className="space-y-4">
        <div className="h-4 w-full bg-zinc-800 rounded animate-pulse" />
        <div className="h-4 w-full bg-zinc-800 rounded animate-pulse" />
        <div className="h-4 w-2/3 bg-zinc-800 rounded animate-pulse" />
      </div>
    </article>
  );
}
