// app/blog/loading.tsx
export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="h-8 w-48 bg-zinc-800 rounded animate-pulse mb-8" />
      <div className="space-y-6">
        {[1, 2, 3].map((n) => (
          <div key={n} className="p-6 bg-zinc-800 rounded-lg animate-pulse">
            <div className="h-6 w-3/4 bg-zinc-700 rounded mb-4" />
            <div className="h-4 w-full bg-zinc-700 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
