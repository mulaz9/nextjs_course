export default async function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const categories = await fetch("api/categories").then((r) => r.json());

  return (
    <div className="max-w-4xl mx-auto">
      <p className="bg-violet-700 text-white w-full text-center py-2">
        Sono del layout content
      </p>

      <aside className="w-64">
        <ul>
          {/* {categories.map((cat) => (
            <li key={cat.id}>{cat.name}</li>
          ))} */}
        </ul>
      </aside>

      <main className="flex-1">{children}</main>
    </div>
  );
}
