// app/blog/error.tsx
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-4xl mx-auto p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">
        Errore nel caricamento dei post
      </h2>
      <button
        onClick={() => reset()}
        className="bg-zinc-600 px-4 py-2 rounded hoveer:bg-zinc-600"
      >
        Riprova
      </button>
    </div>
  );
}
