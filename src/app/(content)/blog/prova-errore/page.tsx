// app/blog/prova-errore/page.tsx

async function getData() {
  const res = await fetch("https://baubva.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ProvaErrorePage() {
  const data = await getData();

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Questa pagina darà errore</h1>
      <div>{data.title}</div>
    </div>
  );
}
