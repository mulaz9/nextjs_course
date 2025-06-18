// app/blog/data.ts
export interface Post {
  slug: string;
  title: string;
  excerpt: string;
}

export const blogPosts: Post[] = [
  {
    slug: "primo-post",
    title: "Il mio primo Post",
    excerpt:
      "Questo è il mio primo post sul blog. Sono entusiasta di condividere le mie idee e pensieri con voi!",
  },
  {
    slug: "secondo-post",
    title: "Il mio secondo Post",
    excerpt:
      "Questo è il mio secondo post sul blog. Continuo a esplorare e condividere le mie esperienze.",
  },
  {
    slug: "terzo-post",
    title: "Il mio terzo Post",
    excerpt:
      "Questo è il mio terzo post sul blog. Grazie per seguire il mio viaggio!",
  },
];
