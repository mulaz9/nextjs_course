// app/(prove)/fetch-server/page.tsx
export default async function UsersPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 60 }, // Cache for 60 seconds
  });
  const users = await response.json();

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Utenti</h1>
      <div className="grid gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 bg-zinc-800 rouded">
            <h2 className="font-bold">{user.name}</h2>
            <p className="text-zinc-400">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
