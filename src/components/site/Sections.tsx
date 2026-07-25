import {
  Stethoscope,
  Microscope,
  HeartHandshake,
  MapPin,
  Flame,
  Activity,
  Wind,
  Repeat,
  AlertTriangle,
  Droplets,
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Instagram,
  Facebook,
} from "lucide-react";
import { useState } from "react";
import ecoImg from "@/assets/ecoendoscopia.jpg";
const aboutImg = "/angeles-campana-real.png";
import { whatsappHref, whatsappEcoHref } from "./WhatsAppFloat";

/* ---------- Shared bits ---------- */
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-teal">
    <span className="h-px w-8 bg-teal/50" />
    {children}
  </span>
);

const SectionHead = ({
  eyebrow,
  title,
  subtitle,
  center,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) => (
  <div
    data-reveal="up"
    className={`mb-10 max-w-3xl md:mb-16 ${center ? "mx-auto text-center" : ""}`}
  >
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2 className="mt-5 text-3xl leading-[1.08] text-navy-deep sm:text-4xl md:mt-6 md:text-6xl md:leading-[1.05]">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink/60 md:mt-6 md:text-lg">
        {subtitle}
      </p>
    )}
  </div>
);

/* ============================================================
   HERO
   ============================================================ */
export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-white pt-20 pb-0 md:pt-28"
      style={{ perspective: "1800px" }}
    >
      {/* 3D ambient orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="float-slower absolute -top-24 -right-24 h-[320px] w-[320px] rounded-full bg-gradient-to-br from-teal/25 via-teal/10 to-transparent blur-3xl md:h-[520px] md:w-[520px]" />
        <div className="drift-slow absolute top-1/3 -left-40 h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-navy/20 via-navy/5 to-transparent blur-3xl md:h-[460px] md:w-[460px]" />
        <div className="float-slow absolute bottom-0 right-1/3 h-[240px] w-[240px] rounded-full bg-gradient-to-tl from-teal-soft/40 via-transparent to-transparent blur-3xl md:h-[380px] md:w-[380px]" />
      </div>
      {/* top meta strip — editorial magazine feel */}
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div
          data-reveal="fade"
          className="flex items-center justify-between border-b border-navy-deep/15 pb-4 text-[9px] uppercase tracking-[0.24em] text-navy-deep/60 md:pb-5 md:text-[10px] md:tracking-[0.28em]"
        >
          <span>Gastro · Endoscopia · Ecoendoscopia</span>
          <span className="hidden md:inline">Quito · Cumbayá · Ecuador</span>
          <span className="hidden md:inline">MMXXV</span>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 pt-10 pb-14 md:pt-16 md:pb-28 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* LEFT — headline column (wider, editorial) */}
          <div className="lg:col-span-7 lg:pr-6">
            <div
              data-reveal="up"
              className="inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em] text-teal"
            >
              <span className="h-px w-10 bg-teal" />
              DRA. MARÍA DE LOS ÁNGELES CAMPAÑA
            </div>

            <h1
              data-reveal="up"
              style={{ transitionDelay: "80ms" }}
              className="mt-6 font-serif text-[2.5rem] leading-[1] tracking-[-0.02em] text-navy-deep sm:text-6xl md:mt-8 md:text-[5rem] md:leading-[0.96] lg:text-[6rem]"
            >
              Medicina
              <br />
              digestiva
              <br />
              <span className="italic text-teal">con criterio</span>
              <br />
              <span className="italic text-navy-deep/85">y con calma.</span>
            </h1>

            <div
              data-reveal="up"
              style={{ transitionDelay: "160ms" }}
              className="mt-8 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-[auto_1fr] sm:gap-10 md:mt-10"
            >
              <div className="hidden sm:block">
                <div className="h-16 w-px bg-navy-deep/25" />
              </div>
              <p className="text-[15px] leading-[1.7] text-ink/75 md:text-[17px] md:leading-[1.75]">
                Gastroenteróloga endoscopista. Consulta especializada para reflujo, dolor abdominal,
                hinchazón y estudios avanzados de páncreas y vía biliar mediante ecoendoscopia.
              </p>
            </div>

            <div
              data-reveal="up"
              style={{ transitionDelay: "240ms" }}
              className="mt-8 flex flex-wrap items-center gap-4 md:mt-10 md:gap-5"
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-navy-deep px-6 py-3.5 text-[13px] font-medium tracking-[0.02em] text-white transition-all duration-500 hover:bg-teal md:px-7 md:py-4"
              >
                <MessageCircle className="h-4 w-4" />
                Agendar por WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
              <a
                href="#sobre"
                className="group inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.02em] text-navy-deep"
              >
                <span className="link-sweep">Conocer a la doctora</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* RIGHT — portrait + editorial metadata */}
          <div className="relative lg:col-span-5" style={{ perspective: "1600px" }}>
            <div data-reveal="right" className="relative" style={{ transformStyle: "preserve-3d" }}>
              {/* layered 3D accent blocks behind image */}
              <div
                aria-hidden
                className="absolute -left-8 -top-8 hidden h-[85%] w-[85%] rounded-2xl bg-gradient-to-br from-teal/40 to-teal/10 md:block"
                style={{ transform: "translateZ(-80px) rotate(-3deg)" }}
              />
              <div
                aria-hidden
                className="absolute -right-6 -bottom-6 hidden h-[70%] w-[70%] rounded-2xl bg-gradient-to-tl from-navy-deep/15 to-transparent md:block"
                style={{ transform: "translateZ(-40px) rotate(2deg)" }}
              />
              <div
                className="img-zoom relative overflow-hidden rounded-2xl ring-1 ring-navy-deep/5"
                style={{
                  transform: "rotateY(-6deg) rotateX(2deg)",
                  boxShadow:
                    "0 40px 80px -30px rgba(11,30,58,0.35), 0 20px 40px -20px rgba(59,138,143,0.25), 0 2px 0 rgba(255,255,255,0.6) inset",
                }}
              >
                <img
                  src="/hero-angeles-campana.png"
                  alt="Dra. María de los Ángeles Campaña, gastroenteróloga endoscopista en Quito y Cumbayá"
                  width={1080}
                  height={1400}
                  className="aspect-[4/5] h-full w-full object-cover object-top"
                />
                {/* editorial caption on image */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/40 to-transparent px-6 pb-6 pt-16">
                  <p className="text-[9px] uppercase tracking-[0.32em] text-white/80">{"\n"}</p>
                  <p className="mt-1 font-serif text-lg italic text-white md:text-xl">
                    Dra. Ma. Ángeles Campaña
                  </p>
                </div>
              </div>
            </div>

            {/* editorial metadata card — right side */}
            <div
              data-reveal="up"
              style={{ transitionDelay: "200ms" }}
              className="mt-16 hidden lg:mt-24 lg:block"
            >
              <div className="border-l border-navy-deep/20 pl-6">
                <p className="text-[9px] uppercase tracking-[0.32em] text-navy-deep/50">{"\n"}</p>
                <p className="mt-3 font-serif text-[15px] italic leading-relaxed text-navy-deep">
                  "Explicar con claridad es parte del tratamiento."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* bottom stats row — editorial footer of hero */}
        <div
          data-reveal="up"
          style={{ transitionDelay: "320ms" }}
          className="mt-14 grid grid-cols-2 gap-6 border-t border-navy-deep/15 pt-8 md:mt-28 md:grid-cols-4 md:gap-4 md:pt-10"
        >
          {[
            { k: "6", v: "Años de formación como especialista" },
            { k: "2", v: "Sedes en Quito y Cumbayá" },
            { k: "EUS", v: "Ecoendoscopia avanzada" },
            { k: "24/7", v: "Agenda por WhatsApp" },
          ].map((s, i) => (
            <div key={s.v} className="flex items-baseline gap-3 md:gap-4">
              <span className="text-[10px] uppercase tracking-[0.24em] text-teal md:tracking-[0.28em]">
                0{i + 1}
              </span>
              <div className="min-w-0">
                <p className="font-serif text-2xl leading-none text-navy-deep md:text-4xl">{s.k}</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-ink/55 md:text-[11px] md:tracking-[0.16em]">
                  {s.v}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TRUST — Por qué consultar
   ============================================================ */
const trust = [
  {
    icon: Stethoscope,
    title: "Evaluación de especialidad",
    text: "Analizamos tus síntomas digestivos, antecedentes médicos, medicamentos actuales y estudios previos para tener una visión clara de tu condición.",
  },
  {
    icon: Microscope,
    title: "Diagnóstico con precisión",
    text: "El objetivo es orientar el diagnóstico con criterio médico y, cuando sea necesario, solicitar estudios complementarios adecuados.",
  },
  {
    icon: HeartHandshake,
    title: "Comunicación clara",
    text: "Recibirás una explicación sencilla y comprensible sobre lo que puede estar ocurriendo y cuáles son los pasos recomendados.",
  },
  {
    icon: MapPin,
    title: "Atención privada en Quito y Cumbayá",
    text: "Consulta gastroenterológica especializada en espacios médicos profesionales ubicados en Quito y Cumbayá.",
  },
];

export function Trust() {
  return (
    <section className="bg-white py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHead
          eyebrow="Por qué consultar"
          title={
            <>
              Atención digestiva pensada para escuchar, evaluar y{" "}
              <span className="italic text-teal">orientar con precisión</span>
            </>
          }
          subtitle="Una consulta gastroenterológica permite revisar tus síntomas, antecedentes y estudios previos para definir el siguiente paso adecuado para tu caso."
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {trust.map((t, i) => (
            <div
              key={t.title}
              data-reveal="up"
              style={{ transitionDelay: `${i * 90}ms` }}
              className="group card-lift bg-white p-8"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-teal/30 text-teal transition-all duration-500 group-hover:scale-110 group-hover:bg-teal group-hover:text-white group-hover:shadow-[0_8px_24px_-8px_rgba(59,138,143,0.6)]">
                  <t.icon className="h-5 w-5" strokeWidth={1.4} />
                </div>
                <span className="font-serif text-sm italic text-ink/30 transition-colors group-hover:text-teal">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-serif text-2xl italic text-navy-deep">{t.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-navy-deep px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-navy"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar una consulta
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ABOUT
   ============================================================ */
export function About() {
  return (
    <section id="sobre" className="bg-cloud py-16 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-10">
        <div data-reveal="left" className="relative order-2 lg:order-1">
          <div className="img-zoom rounded-[1.5rem]">
            <img
              src={aboutImg}
              alt="Dra. María de los Ángeles Campaña, gastroenteróloga endoscopista"
              width={1280}
              height={1100}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="float-slower absolute -right-4 -top-4 hidden rounded-xl bg-navy-deep px-5 py-4 text-white shadow-soft md:block">
            <p className="font-serif text-xl italic">Quito y Cumbayá</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">Atención privada</p>
          </div>
        </div>

        <div data-reveal="right" className="order-1 lg:order-2">
          <Eyebrow>Sobre la doctora</Eyebrow>
          <h2 className="mt-5 text-3xl leading-[1.08] text-navy-deep sm:text-4xl md:mt-6 md:text-6xl md:leading-[1.05]">
            Dra. María de los <span className="italic text-teal">Ángeles Campaña</span>
          </h2>
          <p className="mt-4 font-serif text-lg italic text-teal">Gastroenteróloga Endoscopista</p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/70 md:text-lg">
            <p>
              La Dra. María Ángeles Campaña realizó sus estudios de especialidad como
              gastroenteróloga en el Hospital Italiano de Buenos Aires. Posterior a esto, culminó su
              formación con la subespecialidad en Terapéutica Avanzada Endoscópica y Ultrasonografía
              Endoscópica.
            </p>
            <p>
              Su consulta está orientada al manejo de pacientes con síntomas digestivos recurrentes,
              así como a la prevención de patologías gastrointestinales, evaluando cuando es
              necesario realizar estudios endoscópicos complementarios. Su objetivo es brindar a sus
              pacientes información confiable, clara y fácil de entender.
            </p>
          </div>

          <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {[
              ["Especialidad", "Gastroenterología"],
              ["Subespecialidad", "Terapéutica Avanzada Endoscópica y Ultrasonografía Endoscópica"],
              ["Ubicación", "Quito y Cumbayá"],
              ["Enfoque", "Diagnóstico claro y humano"],
            ].map(([k, v], i) => (
              <div
                key={k}
                data-reveal="up"
                style={{ transitionDelay: `${i * 80}ms` }}
                className="group bg-white p-6 transition-colors hover:bg-cloud"
              >
                <dt className="text-[10px] font-medium uppercase tracking-[0.2em] text-teal">
                  {k}
                </dt>
                <dd className="mt-2 font-serif text-xl italic text-navy-deep transition-colors group-hover:text-teal">
                  {v}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-3 border-b border-teal/40 pb-2 text-sm font-medium uppercase tracking-[0.18em] text-navy-deep hover:text-teal"
          >
            Agendar consulta
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   REASONS — Cuándo consultar
   ============================================================ */
const reasons = [
  {
    icon: Flame,
    title: "Sensación de reflujo persistente",
    text: "Si sientes quemazón, ardor o molestias en la parte superior de tu abdomen que pueden llegar a confundirse con dolor de pecho, es una indicación para acudir a la consulta.",
  },
  {
    icon: Activity,
    title: "Dolor abdominal",
    text: "El dolor abdominal que se repite varios días a la semana, asociado a molestias después de comer que te lleva al uso frecuente de medicación de venta libre, requiere ser evaluado por un especialista.",
  },
  {
    icon: Wind,
    title: "Hinchazón, gases o distensión",
    text: "Sentir el abdomen inflamado o lleno de gases de forma frecuente puede tener distintas causas y requiere una evaluación adecuada.",
  },
  {
    icon: Repeat,
    title: "Cambios intestinales",
    text: "Cambios persistentes al ir al baño, estreñimiento, diarrea o alteraciones del ritmo evacuatorio pueden requerir valoración médica.",
  },
  {
    icon: AlertTriangle,
    title: "Señales de alarma",
    text: "Sangrado en heces, pérdida de peso sin explicación, vómitos persistentes, anemia o dolor que no permite comer deben evaluarse con prioridad.",
  },
  {
    icon: Droplets,
    title: "Páncreas y vía biliar",
    text: "Algunos síntomas o hallazgos en estudios previos pueden requerir una valoración especializada del páncreas o la vía biliar.",
  },
  {
    icon: Microscope,
    title: "Estudios previos con hallazgos",
    text: "Si tus exámenes o imágenes muestran alteraciones, una evaluación de especialidad ayuda a definir los siguientes pasos.",
  },
];

export function Reasons() {
  return (
    <section id="cuando-consultar" className="bg-white py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHead
          eyebrow="Cuándo acudir"
          title={
            <>
              ¿Cuándo deberías agendar una{" "}
              <span className="italic text-teal">consulta gastroenterológica</span>?
            </>
          }
          subtitle="Si tienes síntomas digestivos frecuentes o molestias que afectan tu rutina, una valoración médica puede ayudarte a entender qué está pasando."
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              data-reveal="up"
              style={{ transitionDelay: `${(i % 4) * 90}ms` }}
              className="group card-lift bg-white p-7 transition-colors hover:bg-cloud"
            >
              <r.icon
                className="mb-6 h-6 w-6 text-teal transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110"
                strokeWidth={1.4}
              />
              <h3 className="font-serif text-xl italic text-navy-deep">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{r.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-navy-deep px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-navy"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar tu evaluación
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ECOENDOSCOPIA
   ============================================================ */
export function Ecoendoscopia() {
  const items = [
    {
      title: "Alteraciones en estudios endoscópicos previos",
      text: "Cuando una endoscopia previa muestra hallazgos que necesitan una evaluación complementaria más detallada.",
    },
    {
      title: "Evaluación del páncreas",
      text: "Permite estudiar con mayor precisión el páncreas y estructuras cercanas cuando existe sospecha o hallazgos que lo ameritan.",
    },
    {
      title: "Hallazgos en vía biliar",
      text: "Puede considerarse ante hallazgos alterados en estudios de imagen previos relacionados con la vía biliar.",
    },
    {
      title: "Diagnóstico especializado",
      text: "Ayuda a integrar criterios clínicos y estudios avanzados que orientan el tratamiento adecuado.",
    },
  ];
  return (
    <section id="ecoendoscopia" className="bg-cloud py-16 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-16 lg:px-10">
        <div data-reveal="left" className="relative order-2 lg:order-1 lg:sticky lg:top-28">
          <div className="img-zoom aspect-[4/5] w-full overflow-hidden rounded-[1.5rem]">
            <img
              src={ecoImg}
              alt="Ecoendoscopia para evaluación del páncreas y la vía biliar en Quito"
              width={1280}
              height={1600}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="float-slow absolute -bottom-6 left-6 right-6 rounded-xl bg-white p-5 shadow-soft md:left-8 md:right-auto md:max-w-[18rem]">
            <p className="font-serif text-base italic leading-snug text-navy-deep md:text-lg">
              Un estudio más detallado permite orientar mejor las decisiones médicas.
            </p>
          </div>
        </div>

        <div data-reveal="right" className="order-1 lg:order-2">
          <Eyebrow>Estudio avanzado</Eyebrow>
          <h2 className="mt-5 text-2xl leading-[1.12] text-navy-deep sm:text-3xl md:mt-6 md:text-4xl md:leading-[1.08] lg:text-[2.75rem]">
            Ecoendoscopia: una herramienta <span className="italic text-teal">avanzada</span> para
            estudiar el sistema digestivo
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/70 md:text-lg">
            La ecoendoscopia combina endoscopia y ultrasonido para evaluar con mayor detalle
            estructuras digestivas y órganos cercanos como el páncreas y la vía biliar.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/60">
            Este estudio puede ser útil en casos específicos, especialmente cuando existen hallazgos
            o alteraciones en estudios previos que requieren una evaluación más precisa. Su
            indicación debe ser definida por la especialista de acuerdo con cada caso clínico.
          </p>

          <h3 className="mt-10 font-serif text-xl italic text-teal">
            ¿Cuándo puede indicarse una ecoendoscopia?
          </h3>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {items.map((i, idx) => (
              <li
                key={i.title}
                data-reveal="up"
                style={{ transitionDelay: `${idx * 90}ms` }}
                className="group card-lift rounded-xl border border-border bg-white p-5"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal transition-transform duration-500 group-hover:scale-125"
                    strokeWidth={1.8}
                  />
                  <div>
                    <p className="font-serif text-base italic text-navy-deep">{i.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/60">{i.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm leading-relaxed text-ink/60">
            En algunos casos, la ecoendoscopia también permite tomar muestras de tejido mediante
            punción biopsia con aguja fina, siempre que esté indicado según el caso clínico.
          </p>

          <a
            href={whatsappEcoHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-navy-deep/20 px-7 py-3.5 text-sm font-medium text-navy-deep transition-colors hover:bg-navy-deep hover:text-white"
          >
            <MessageCircle className="h-4 w-4" />
            Consultar si este estudio aplica para mi caso
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PANCREAS & VÍA BILIAR
   ============================================================ */
export function PancreasBiliar() {
  const blocks = [
    {
      title: "Páncreas",
      text: "Antecedentes de cuadros de pancreatitis, hallazgos imagenológicos que reportan alteraciones del parénquima pancreático.",
    },
    {
      title: "Vía biliar",
      text: "Dilatación de vía biliar intra y extrahepática, sospecha de enfermedades inflamatorias o asociadas a patología autoinmune de vía biliar.",
    },
    {
      title: "Diagnóstico especializado",
      text: "Criterios clínicos y estudios avanzados que orientan un tratamiento adecuado a cada caso.",
    },
  ];
  return (
    <section className="bg-white py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHead
          eyebrow="Subespecialidad"
          title={
            <>
              Atención especializada en{" "}
              <span className="italic text-teal">páncreas y vía biliar</span>
            </>
          }
          subtitle="Condiciones que requieren evaluación cuidadosa; contar con una especialista permite abordar estos casos con mayor precisión."
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {blocks.map((b, i) => (
            <div
              key={b.title}
              data-reveal="up"
              style={{ transitionDelay: `${i * 120}ms` }}
              className="group card-lift flex flex-col justify-between bg-white p-8 md:min-h-[280px]"
            >
              <span className="font-serif text-5xl italic text-teal transition-transform duration-500 group-hover:-translate-y-1">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-serif text-2xl italic text-navy-deep">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PROCESS
   ============================================================ */
const steps = [
  {
    n: "01",
    title: "Agenda tu consulta",
    text: "Escríbenos por WhatsApp para coordinar tu cita en Quito o Cumbayá.",
  },
  {
    n: "02",
    title: "Evaluación médica",
    text: "Revisamos tus síntomas, antecedentes, medicamentos actuales y estudios previos.",
  },
  {
    n: "03",
    title: "Diagnóstico y estudios",
    text: "Según tu caso, se define un plan de manejo o se solicitan estudios complementarios si son necesarios.",
  },
  {
    n: "04",
    title: "Tratamiento y seguimiento",
    text: "Recibirás orientación médica y seguimiento según la evolución de tu condición.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="bg-cloud py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHead
          eyebrow="Proceso de atención"
          title={
            <>
              Un proceso claro para cuidar tu{" "}
              <span className="italic text-teal">salud digestiva</span>
            </>
          }
          subtitle="La consulta está diseñada para entender tus síntomas, revisar tus antecedentes y definir los pasos recomendados de forma clara."
        />
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.n}
              data-reveal="up"
              style={{ transitionDelay: `${i * 110}ms` }}
              className="group card-lift rounded-xl border border-border bg-white p-6"
            >
              <span className="font-serif text-4xl italic text-teal transition-transform duration-500 group-hover:scale-110">
                {s.n}
              </span>
              <h3 className="mt-3 font-serif text-xl italic text-navy-deep">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-14 flex justify-center">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-navy-deep px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-navy"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar por WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   LOCATIONS
   ============================================================ */
const locations = [
  {
    name: "Hospital Metropolitano",
    city: "Quito",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Hospital+Metropolitano+Quito",
  },
  {
    name: "SOLCA",
    city: "Quito",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=SOLCA+Quito",
  },
  {
    name: "Centriqo",
    city: "Cumbayá",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Centriqo+Cumbaya",
  },
];

export function Locations() {
  return (
    <section id="ubicaciones" className="bg-white py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHead
          eyebrow="Ubicaciones"
          title={
            <>
              Atención en <span className="italic text-teal">Quito y Cumbayá</span>
            </>
          }
          subtitle="La Dra. María de los Ángeles Campaña atiende en espacios médicos profesionales para brindar una valoración especializada y segura."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {locations.map((p, i) => (
            <div
              key={p.name}
              data-reveal="up"
              style={{ transitionDelay: `${i * 120}ms` }}
              className="group card-lift flex flex-col rounded-2xl border border-border bg-white p-8 transition-colors hover:border-teal/50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-teal/30 text-teal transition-all duration-500 group-hover:scale-110 group-hover:bg-teal group-hover:text-white">
                <MapPin className="h-4 w-4" strokeWidth={1.4} />
              </div>
              <p className="mt-6 font-serif text-2xl italic text-navy-deep">{p.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ink/50">{p.city}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={p.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-navy-deep/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-navy-deep transition-colors hover:bg-navy-deep hover:text-white"
                >
                  Ver ubicación
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-navy-deep px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-teal"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  Agendar
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-ink/50">
          Horarios y disponibilidad pueden confirmarse al agendar por WhatsApp.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   BLOG
   ============================================================ */
import { posts } from "@/data/posts";

export function Blog() {
  return (
    <section id="blog" className="bg-cloud py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHead
          eyebrow="Recursos educativos"
          title={
            <>
              Información para tomar mejores decisiones sobre tu{" "}
              <span className="italic text-teal">salud digestiva</span>
            </>
          }
          subtitle="Artículos educativos sobre síntomas digestivos, prevención, estudios y salud gastrointestinal."
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 6).map((p, i) => (
            <a
              key={p.slug}
              href={`/blog/${p.slug}`}
              data-reveal="up"
              style={{ transitionDelay: `${(i % 3) * 100}ms` }}
              className="group card-lift flex flex-col bg-white p-7"
            >
              <span className="self-start text-[10px] font-medium uppercase tracking-[0.22em] text-teal">
                {p.tag}
              </span>
              <h3 className="mt-5 font-serif text-xl italic text-navy-deep transition-colors group-hover:text-teal">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60">{p.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-teal">
                Leer artículo
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="/blog"
            className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.16em] text-navy-deep hover:text-teal"
          >
            Ver todos los artículos
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ
   ============================================================ */
const faqs = [
  {
    q: "¿Cuándo debo acudir a una gastroenteróloga?",
    a: "Cuando tienes síntomas digestivos frecuentes como reflujo, dolor abdominal, hinchazón, gases, cambios intestinales, náuseas, ardor persistente o molestias que afectan tu rutina. También es importante consultar ante señales de alarma como sangrado en heces, pérdida de peso sin explicación, vómitos persistentes o anemia.",
  },
  {
    q: "¿Qué debo llevar a mi primera consulta?",
    a: "Puedes llevar exámenes anteriores, estudios de imagen, recetas previas y una lista de tus síntomas, medicamentos actuales y antecedentes médicos relevantes.",
  },
  {
    q: "¿Qué es una ecoendoscopia?",
    a: "La ecoendoscopia es un estudio especializado que combina endoscopia y ultrasonido para evaluar con mayor detalle estructuras digestivas, el páncreas, la vía biliar y órganos cercanos. Su indicación depende de cada caso clínico.",
  },
  {
    q: "¿La ecoendoscopia reemplaza una consulta médica?",
    a: "No. La indicación de una ecoendoscopia debe ser evaluada por la especialista según los síntomas, antecedentes y estudios previos de cada paciente.",
  },
  {
    q: "¿La doctora atiende en Quito y Cumbayá?",
    a: "Sí. La Dra. María de los Ángeles Campaña atiende en Quito y Cumbayá, en Hospital Metropolitano, SOLCA y Centriqo.",
  },
  {
    q: "¿Puedo agendar por WhatsApp?",
    a: "Sí. Puedes escribir por WhatsApp para coordinar tu consulta en el horario y ubicación disponible.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-white py-16 md:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHead
          eyebrow="Preguntas frecuentes"
          title={
            <>
              Preguntas <span className="italic text-teal">frecuentes</span>
            </>
          }
          center
        />
        <div
          data-reveal="up"
          className="divide-y divide-border overflow-hidden rounded-2xl border border-border"
        >
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`transition-colors duration-500 ${isOpen ? "bg-cloud" : "bg-white"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-center justify-between gap-4 px-7 py-6 text-left"
                >
                  <span className="font-serif text-lg italic text-navy-deep transition-colors group-hover:text-teal">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-teal transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <div className="px-7 pb-7 pt-0 text-sm leading-relaxed text-ink/65">{f.a}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-navy-deep px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-navy"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar por WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FINAL CTA
   ============================================================ */
export function FinalCTA() {
  return (
    <section id="agendar" className="bg-white py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div
          data-reveal="zoom"
          className="relative overflow-hidden rounded-[1.25rem] bg-navy-deep p-8 text-center text-white sm:p-12 md:rounded-[1.5rem] md:p-20"
        >
          <div className="drift-slow pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
          <div className="float-slower pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-teal-soft/10 blur-3xl" />
          <Eyebrow>Tu siguiente paso</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl leading-[1.08] text-white sm:text-4xl md:mt-6 md:text-6xl md:leading-[1.05]">
            Tu salud digestiva merece{" "}
            <span className="italic text-teal-soft">respuestas claras</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/70 md:mt-6 md:text-lg">
            Si tienes ardor, reflujo, dolor abdominal, hinchazón, cambios intestinales o molestias
            digestivas frecuentes, agenda una consulta para evaluar tu caso con una especialista.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-medium text-navy-deep transition-colors hover:bg-teal-soft"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar consulta por WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#ubicaciones"
              className="inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Ver ubicaciones
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 lg:px-10">
        <div className="md:col-span-2">
          <p className="font-serif text-3xl italic text-navy-deep">
            Dra. María de los Ángeles Campaña
          </p>
          <p className="mt-3 text-sm text-ink/60">
            Gastroenteróloga Endoscopista
            <br />
            Quito y Cumbayá, Ecuador
            <br />
            <a href="https://gastroenquito.com" className="hover:text-teal">
              gastroenquito.com
            </a>
          </p>
          <div className="mt-6 flex gap-2">
            {[
              {
                icon: Instagram,
                href: "https://www.instagram.com/dra_angelescampana",
                label: "Instagram",
              },
              {
                icon: Facebook,
                href: "https://www.facebook.com/share/19FPSUo1ad/",
                label: "Facebook",
              },
              { icon: MessageCircle, href: whatsappHref, label: "WhatsApp" },
            ].map((s) => (
              <a
                key={s.label}
                aria-label={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-navy-deep transition-colors hover:border-teal hover:text-teal"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.24em] text-teal">
            Navegación
          </p>
          <ul className="space-y-3 text-sm text-ink/70">
            {[
              ["#inicio", "Inicio"],
              ["#cuando-consultar", "Cuándo consultar"],
              ["#ecoendoscopia", "Ecoendoscopia"],
              ["#proceso", "Proceso"],
              ["#ubicaciones", "Ubicaciones"],
              ["#faq", "Preguntas frecuentes"],
            ].map(([h, l]) => (
              <li key={h}>
                <a href={h} className="transition-colors hover:text-teal">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.24em] text-teal">
            Contacto
          </p>
          <ul className="space-y-3 text-sm text-ink/70">
            <li>
              WhatsApp:{" "}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal"
              >
                +593 95 872 6028
              </a>
            </li>
            <li>Quito y Cumbayá, Ecuador</li>
            <li>Hospital Metropolitano · SOLCA · Centriqo</li>
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-navy-deep px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-teal"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Agendar consulta
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-ink/50 lg:px-10">
          <p>
            Esta página tiene fines informativos y no reemplaza una consulta médica. Ante síntomas
            graves, acudir a emergencia.
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Dra. María de los Ángeles Campaña · gastroenquito.com ·
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
