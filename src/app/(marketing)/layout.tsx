export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <p className="bg-violet-700 text-white w-full text-center py-2">
        Sono del layout marketing
      </p>
      <main className="w-full max-w-4xl p-4">{children}</main>
    </div>
  );
}
