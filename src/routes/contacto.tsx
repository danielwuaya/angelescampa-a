import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Sections";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { RevealObserver } from "@/components/site/RevealObserver";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Dra. María de los Ángeles Campaña - Gastroenteróloga en Quito" },
      {
        name: "description",
        content:
          "Agenda tu consulta gastroenterológica en Quito y Cumbayá con la Dra. María de los Ángeles Campaña. Completa el formulario o escríbenos directamente por WhatsApp.",
      },
      { property: "og:title", content: "Contacto | Dra. Ángeles Campaña" },
      {
        property: "og:description",
        content:
          "Agenda tu consulta por WhatsApp o formulario. Atención en Hospital Metropolitano, SOLCA y Centriqo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://gastroenquito.com/contacto" },
    ],
    links: [{ rel: "canonical", href: "https://gastroenquito.com/contacto" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24">
        <div className="mx-auto max-w-4xl px-6 py-10 text-center lg:px-10">
          <h1 className="font-serif text-4xl leading-[1.05] text-navy-deep md:text-6xl">
            Agenda tu <span className="italic text-teal">consulta</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-ink/65 md:text-lg">
            Escríbenos y coordinaremos tu cita en Quito o Cumbayá según tu disponibilidad.
            Respondemos personalmente por WhatsApp.
          </p>
        </div>
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloat />
      <RevealObserver />
    </div>
  );
}
