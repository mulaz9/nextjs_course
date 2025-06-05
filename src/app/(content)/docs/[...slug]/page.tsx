interface DocPage {
  path: string[];
  title: string;
  content: string;
}

const docs: DocPage[] = [
  {
    path: ["intro"],
    title: "Introduzione",
    content: "Benvenuto nella documentazione...",
  },
  {
    path: ["intro", "getting-started"],
    title: "Getting Started",
    content: "Ecco come iniziare...",
  },
  {
    path: ["advanced", "configuration"],
    title: "Configurazione Avanzata",
    content: "Configurazioni dettagliate...",
  },
];

export default function DocPage({ params }: { params: { slug: string[] } }) {
  const currentPath = params.slug;
  console.log("Current Path:", currentPath);

  const doc = docs.find((doc) => doc.path.join("/") === currentPath.join("/"));

  if (!doc) {
    return <div>Documento non trovato</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{doc.title}</h1>
      <p>{doc.content}</p>
      <div className="mt-4 text-sm text-gray-500">
        Path: /{currentPath.join("/")}
      </div>
    </div>
  );
}
