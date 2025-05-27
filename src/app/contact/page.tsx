import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export default function Contact() {
  return (
    <>
      <Link href="/about">Go to About</Link>
      <Image
        src="/next.svg"
        width={500}
        height={300}
        alt="baubau"
        sizes="(max-width: 768px) 100vw, 50vw"
      ></Image>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <h1 className="text-3xl font-bold">Contact</h1>
          <p className="text-lg">This is the contact page.</p>
        </main>
      </div>
    </>
  );
}
