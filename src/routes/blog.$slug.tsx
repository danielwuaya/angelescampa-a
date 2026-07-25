import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { getPost, posts, type Post } from "@/data/posts";
import { whatsappHref } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }): Post => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Artículo no encontrado | Dra. Ángeles Campaña" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const url = `https://gastroenquito.com/blog/${params.slug}`;
    return {
      meta: [
        { title: `${loaderData.title} | Dra. Ángeles Campaña` },
        { name: "description", content: loaderData.excerpt },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "article:published_time", content: loaderData.publishedAt },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.title,
            description: loaderData.excerpt,
            datePublished: loaderData.publishedAt,
            author: {
              "@type": "Person",
              name: "Dra. María de los Ángeles Campaña",
            },
            mainEntityOfPage: url,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="font-serif text-3xl text-navy-deep">Artículo no encontrado</h1>
      <p className="mt-4 text-ink/60">Es posible que el enlace haya cambiado.</p>
      <Link to="/blog" className="mt-8 inline-block text-teal underline">
        Volver al blog
      </Link>
    </section>
  ),
  errorComponent: ({ reset }) => (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="font-serif text-3xl text-navy-deep">No pudimos cargar el artículo</h1>
      <button onClick={reset} className="mt-6 text-teal underline">
        Reintentar
      </button>
    </section>
  ),
  component: PostPage,
});

function PostPage() {
  const post = Route.useLoaderData() as Post;
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="bg-white pb-16 md:pb-24">
      <div className="mx-auto max-w-3xl px-6 pt-8 lg:px-10">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-teal hover:text-navy-deep"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al blog
        </Link>

        <header className="mt-8">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-ink/50">
            <span className="text-teal">{post.tag}</span>
            <span>·</span>
            <span>{post.readingTime} de lectura</span>
          </div>
          <h1 className="mt-5 font-serif text-4xl leading-[1.08] text-navy-deep md:text-5xl md:leading-[1.05]">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">{post.excerpt}</p>
        </header>

        <div className="mt-12 space-y-8 text-[16px] leading-[1.8] text-ink/80">
          {post.content.map((block, i) => (
            <div key={i}>
              {block.heading && (
                <h2 className="mt-10 mb-4 font-serif text-2xl italic text-navy-deep">
                  {block.heading}
                </h2>
              )}
              <p>{block.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-cloud p-7 md:p-10">
          <p className="font-serif text-xl italic text-navy-deep md:text-2xl">
            ¿Tienes síntomas parecidos?
          </p>
          <p className="mt-3 text-sm text-ink/65 md:text-base">
            Coordina una consulta con la Dra. María de los Ángeles Campaña por WhatsApp y evalúa tu
            caso con una especialista.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-navy-deep px-6 py-3.5 text-[13px] font-medium tracking-[0.02em] text-white transition-colors hover:bg-teal"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar consulta
          </a>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mx-auto mt-20 max-w-6xl px-6 lg:px-10">
          <h2 className="font-serif text-2xl italic text-navy-deep md:text-3xl">Sigue leyendo</h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col bg-white p-6 transition-colors hover:bg-cloud"
              >
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-teal">
                  {p.tag}
                </span>
                <h3 className="mt-3 font-serif text-lg italic text-navy-deep group-hover:text-teal">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
