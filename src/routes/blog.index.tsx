import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog de salud digestiva | Dra. María de los Ángeles Campaña" },
      {
        name: "description",
        content:
          "Artículos educativos sobre reflujo, dolor abdominal, hinchazón, endoscopia y ecoendoscopia, escritos por la Dra. María de los Ángeles Campaña, gastroenteróloga en Quito y Cumbayá.",
      },
      { property: "og:title", content: "Blog de salud digestiva | Dra. Ángeles Campaña" },
      {
        property: "og:description",
        content:
          "Guías sobre síntomas digestivos, prevención y estudios especializados por una gastroenteróloga en Quito.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://gastroenquito.com/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://gastroenquito.com/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div data-reveal="up" className="max-w-3xl">
          <span className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-teal">
            <span className="h-px w-8 bg-teal/50" />
            Blog · Salud digestiva
          </span>
          <h1 className="mt-5 font-serif text-4xl leading-[1.05] text-navy-deep md:mt-6 md:text-6xl">
            Artículos para entender mejor tu{" "}
            <span className="italic text-teal">salud digestiva</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink/65 md:text-lg">
            Información clara y confiable sobre síntomas digestivos, estudios especializados y
            cuidados preventivos, escrita por la Dra. María de los Ángeles Campaña.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              data-reveal="up"
              style={{ transitionDelay: `${(i % 3) * 100}ms` }}
              className="group card-lift flex flex-col bg-white p-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-teal">
                  {p.tag}
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-ink/40">
                  {p.readingTime}
                </span>
              </div>
              <h2 className="mt-5 font-serif text-xl italic text-navy-deep transition-colors group-hover:text-teal">
                {p.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60">{p.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-teal">
                Leer artículo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
