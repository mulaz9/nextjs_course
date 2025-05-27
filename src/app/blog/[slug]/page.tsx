interface Post {
  slug: string;
  title: string;
  content: string;
}

const blogPosts: Post[] = [
  {
    slug: "primo-post",
    title: "Il mio primo Post",
    content:
      "Questo è il mio primo post sul blog. Sono entusiasta di condividere le mie idee e pensieri con voi!",
  },
  {
    slug: "secondo-post",
    title: "Il mio secondo Post",
    content:
      "Questo è il mio secondo post sul blog. Continuo a esplorare e condividere le mie esperienze.",
  },
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return <div>Post non trovato</div>;
  }

  return (
    <article className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
