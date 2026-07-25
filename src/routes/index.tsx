import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import {
  Hero,
  Trust,
  About,
  Reasons,
  Ecoendoscopia,
  PancreasBiliar,
  Process,
  Locations,
  Blog,
  FAQ,
  FinalCTA,
  Footer,
} from "@/components/site/Sections";
import { ContactForm } from "@/components/site/ContactForm";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { RevealObserver } from "@/components/site/RevealObserver";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. María de los Ángeles Campaña | Gastroenteróloga en Quito y Cumbayá" },
      {
        name: "description",
        content:
          "Consulta gastroenterológica en Quito y Cumbayá con la Dra. María de los Ángeles Campaña. Atención para reflujo, dolor abdominal, hinchazón, salud digestiva, endoscopia y ecoendoscopia. Agenda por WhatsApp.",
      },
      {
        name: "keywords",
        content:
          "gastroenteróloga en Quito, gastroenteróloga en Cumbayá, gastro en Quito, consulta gastroenterológica Quito, endoscopia Quito, ecoendoscopia Quito, reflujo Quito, dolor abdominal Quito, salud digestiva Quito, gastroenteróloga endoscopista Quito",
      },
      {
        property: "og:title",
        content: "Dra. María de los Ángeles Campaña | Gastroenteróloga en Quito y Cumbayá",
      },
      {
        property: "og:description",
        content:
          "Consulta gastroenterológica en Quito y Cumbayá con la Dra. María de los Ángeles Campaña. Atención para reflujo, dolor abdominal, hinchazón, salud digestiva, endoscopia y ecoendoscopia. Agenda por WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://gastroenquito.com/" },
      {
        property: "og:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/d97dec97-cb3c-4a4c-b5fb-3fa0e14a5aa3",
      },
      {
        name: "twitter:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/d97dec97-cb3c-4a4c-b5fb-3fa0e14a5aa3",
      },
    ],
    links: [
      { rel: "canonical", href: "https://gastroenquito.com/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physician",
          name: "Dra. María de los Ángeles Campaña",
          medicalSpecialty: ["Gastroenterology"],
          url: "https://gastroenquito.com",
          telephone: "+593958726028",
          areaServed: ["Quito", "Cumbayá", "Ecuador"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Quito",
            addressRegion: "Pichincha",
            addressCountry: "EC",
          },
          description:
            "Gastroenteróloga endoscopista en Quito y Cumbayá. Atención en salud digestiva, endoscopia y ecoendoscopia.",
          availableService: [
            { "@type": "MedicalProcedure", name: "Consulta gastroenterológica" },
            { "@type": "MedicalProcedure", name: "Endoscopia digestiva" },
            { "@type": "MedicalProcedure", name: "Ecoendoscopia" },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Trust />
        <About />
        <Reasons />
        <Ecoendoscopia />
        <PancreasBiliar />
        <Process />
        <Locations />
        <Blog />
        <FAQ />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <RevealObserver />
    </div>
  );
}
