import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { whatsappHref } from "./WhatsAppFloat";

const links = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#cuando-consultar", label: "Cuándo consultar" },
  { href: "/#ecoendoscopia", label: "Ecoendoscopia" },
  { href: "/#ubicaciones", label: "Ubicaciones" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        scrolled ? "border-b border-border bg-white/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-4 lg:px-10">
        <a
          href="#inicio"
          aria-label="Dra. María de los Ángeles Campaña"
          className="flex min-w-0 shrink-0 items-center gap-3"
        >
          <img
            src="/logo-angeles-campana-transparente.png"
            alt="Dra. María de los Ángeles Campaña"
            className="h-11 w-auto shrink-0 md:h-12"
          />
          <span className="hidden truncate font-serif text-base italic leading-tight text-navy-deep xl:inline">
            Dra. Ma. Ángeles Campaña
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.14em] text-ink/70 transition-colors hover:text-teal"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-teal transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto hidden shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-navy-deep px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-navy lg:ml-0 lg:inline-flex"
        >
          <MessageCircle className="h-4 w-4" />
          Agendar
        </a>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto shrink-0 rounded-full p-2 text-navy-deep lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white/95 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm uppercase tracking-[0.14em] text-ink/80 hover:bg-cloud hover:text-teal"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy-deep px-5 py-3 text-sm font-medium uppercase tracking-[0.14em] text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
