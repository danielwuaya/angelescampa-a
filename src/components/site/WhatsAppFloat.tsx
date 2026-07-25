import { MessageCircle } from "lucide-react";

export const WHATSAPP_NUMBER = "593958726028";
const baseText = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const whatsappHref = baseText(
  "Hola, Dra. María de los Ángeles Campaña. Me gustaría agendar una consulta gastroenterológica.",
);

export const whatsappEcoHref = baseText(
  "Hola, Dra. María de los Ángeles Campaña. Quisiera consultar si una ecoendoscopia aplica para mi caso.",
);

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-navy-deep px-5 py-3 text-white shadow-soft transition-all hover:scale-105 hover:bg-teal"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-xs font-medium uppercase tracking-[0.14em] sm:inline">
        Agendar consulta
      </span>
    </a>
  );
}
