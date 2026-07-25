import { useState } from "react";
import { z } from "zod";
import { MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { WHATSAPP_NUMBER } from "./WhatsAppFloat";

const schema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre completo").max(80, "Máximo 80 caracteres"),
  phone: z
    .string()
    .trim()
    .min(7, "Ingresa un teléfono válido")
    .max(20, "Máximo 20 caracteres")
    .regex(/^[+0-9\s\-()]+$/, "Solo números y símbolos telefónicos"),
  email: z
    .string()
    .trim()
    .max(120, "Máximo 120 caracteres")
    .email("Correo inválido")
    .optional()
    .or(z.literal("")),
  reason: z.enum([
    "Consulta general",
    "Reflujo / acidez",
    "Dolor abdominal",
    "Endoscopia",
    "Ecoendoscopia",
    "Otro",
  ]),
  message: z
    .string()
    .trim()
    .min(10, "Cuéntanos brevemente tu motivo (mínimo 10 caracteres)")
    .max(800, "Máximo 800 caracteres"),
});

type FormValues = z.infer<typeof schema>;

const initial: FormValues = {
  name: "",
  phone: "",
  email: "",
  reason: "Consulta general",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [sent, setSent] = useState(false);

  const update = <K extends keyof FormValues>(k: K, v: FormValues[K]) => {
    setValues((prev) => ({ ...prev, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<keyof FormValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormValues;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    const d = parsed.data;
    const lines = [
      "Hola Dra. Ángeles, escribo desde gastroenquito.com:",
      `• Nombre: ${d.name}`,
      `• Teléfono: ${d.phone}`,
      d.email ? `• Correo: ${d.email}` : null,
      `• Motivo: ${d.reason}`,
      "",
      d.message,
    ].filter(Boolean) as string[];
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacto" className="bg-cloud py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div data-reveal="left">
            <span className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-teal">
              <span className="h-px w-8 bg-teal/50" />
              Escríbenos
            </span>
            <h2 className="mt-5 text-3xl leading-[1.08] text-navy-deep sm:text-4xl md:mt-6 md:text-5xl md:leading-[1.05]">
              Cuéntanos tu caso y <span className="italic text-teal">te contactamos</span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/65 md:text-base">
              Completa el formulario y coordinaremos tu consulta por WhatsApp en el horario y
              ubicación que prefieras. Respondemos personalmente en el menor tiempo posible.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-ink/70">
              {[
                "Atención en Quito y Cumbayá",
                "Hospital Metropolitano · SOLCA · Centriqo",
                "Respuesta directa por WhatsApp",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <form
            data-reveal="right"
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border border-border bg-white p-6 shadow-sm md:p-10"
          >
            <div className="grid gap-5">
              <Field label="Nombre completo" error={errors.name}>
                <input
                  type="text"
                  value={values.name}
                  onChange={(e) => update("name", e.target.value)}
                  maxLength={80}
                  autoComplete="name"
                  className={input(errors.name)}
                  placeholder="Ej. María Pérez"
                />
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Teléfono / WhatsApp" error={errors.phone}>
                  <input
                    type="tel"
                    value={values.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    maxLength={20}
                    autoComplete="tel"
                    className={input(errors.phone)}
                    placeholder="+593 …"
                  />
                </Field>
                <Field label="Correo (opcional)" error={errors.email}>
                  <input
                    type="email"
                    value={values.email}
                    onChange={(e) => update("email", e.target.value)}
                    maxLength={120}
                    autoComplete="email"
                    className={input(errors.email)}
                    placeholder="tu@correo.com"
                  />
                </Field>
              </div>

              <Field label="Motivo de consulta" error={errors.reason}>
                <select
                  value={values.reason}
                  onChange={(e) => update("reason", e.target.value as FormValues["reason"])}
                  className={input(errors.reason)}
                >
                  {schema.shape.reason.options.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Cuéntanos brevemente tus síntomas" error={errors.message}>
                <textarea
                  rows={5}
                  value={values.message}
                  onChange={(e) => update("message", e.target.value)}
                  maxLength={800}
                  className={`${input(errors.message)} resize-none`}
                  placeholder="Describe tus molestias, desde cuándo, estudios previos, etc."
                />
                <div className="mt-1 text-right text-[11px] text-ink/40">
                  {values.message.length}/800
                </div>
              </Field>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-navy-deep px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-teal"
              >
                <MessageCircle className="h-4 w-4" />
                Enviar por WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              {sent && (
                <p className="rounded-lg bg-teal-soft/40 px-4 py-3 text-sm text-navy-deep">
                  Abrimos WhatsApp con tu mensaje listo para enviar. Si no se abrió, revisa que tu
                  navegador permita ventanas emergentes.
                </p>
              )}

              <p className="text-[11px] leading-relaxed text-ink/45">
                Al enviar aceptas que utilicemos tus datos únicamente para coordinar tu consulta
                médica. No compartimos tu información con terceros.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.18em] text-navy-deep/70">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}

function input(err?: string) {
  return `w-full rounded-lg border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-teal focus:ring-2 focus:ring-teal/20 ${
    err ? "border-red-400" : "border-border"
  }`;
}
