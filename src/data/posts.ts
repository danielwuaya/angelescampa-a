export type Post = {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  readingTime: string;
  publishedAt: string;
  content: { heading?: string; body: string }[];
};

export const posts: Post[] = [
  {
    slug: "reflujo-frecuente-cuando-consultar",
    tag: "Reflujo",
    title: "Reflujo frecuente: cuándo consultar a un gastroenterólogo",
    excerpt:
      "La acidez ocasional es común, pero cuando aparece varias veces por semana puede ser señal de enfermedad por reflujo. Te explicamos cuándo consultar.",
    readingTime: "5 min",
    publishedAt: "2026-06-10",
    content: [
      {
        body: "El reflujo gastroesofágico ocurre cuando el contenido del estómago sube hacia el esófago, produciendo ardor detrás del pecho, regurgitación o sensación de acidez en la garganta. Sentirlo de manera puntual no es motivo de alarma; el problema aparece cuando los síntomas son frecuentes o afectan tu descanso y alimentación.",
      },
      {
        heading: "Señales de que es momento de consultar",
        body: "Recomendamos una valoración cuando la acidez aparece más de dos veces por semana, cuando aparece dolor al tragar, tos crónica, ronquera matinal, sensación de nudo en la garganta o cuando ya tomas antiácidos de forma habitual sin mejoría clara.",
      },
      {
        heading: "Qué evaluamos en consulta",
        body: "Revisamos tus síntomas, antecedentes, medicamentos y hábitos. Según el caso puede indicarse una endoscopia digestiva alta para observar el esófago y estómago, descartar esofagitis, hernia hiatal u otras causas, y definir un tratamiento adecuado.",
      },
      {
        heading: "Hábitos que ayudan",
        body: "Evitar comidas muy abundantes, no acostarse inmediatamente después de comer, reducir alimentos irritantes, mantener un peso saludable y controlar el estrés son medidas que suelen recomendarse junto al tratamiento indicado por la especialista.",
      },
    ],
  },
  {
    slug: "dolor-abdominal-despues-de-comer",
    tag: "Dolor abdominal",
    title: "Dolor abdominal después de comer: posibles causas",
    excerpt:
      "El dolor abdominal recurrente después de las comidas puede tener múltiples orígenes. Aquí te contamos cuáles son los más frecuentes y cuándo consultar.",
    readingTime: "6 min",
    publishedAt: "2026-05-22",
    content: [
      {
        body: "El dolor abdominal que aparece después de comer es un motivo de consulta muy frecuente. Puede sentirse como ardor, presión, cólico o pesadez, y su ubicación e intensidad ofrecen pistas importantes para orientar el diagnóstico.",
      },
      {
        heading: "Causas más comunes",
        body: "Gastritis, dispepsia funcional, reflujo, intolerancias alimentarias, cálculos en la vesícula, síndrome de intestino irritable o infección por Helicobacter pylori son algunas de las causas frecuentes. Cada una requiere un enfoque distinto.",
      },
      {
        heading: "Cuándo acudir a la especialista",
        body: "Si el dolor es persistente, empeora con el tiempo, se acompaña de pérdida de peso, vómitos, sangrado o cambios en las evacuaciones, es necesario una evaluación oportuna. En muchos casos se solicitan estudios complementarios para orientar el diagnóstico.",
      },
    ],
  },
  {
    slug: "hinchazon-y-gases-posibles-causas",
    tag: "Distensión",
    title: "Hinchazón y gases: posibles causas de la inflamación abdominal",
    excerpt:
      "La distensión abdominal puede deberse a la dieta, al microbioma, a intolerancias o a trastornos funcionales digestivos. Aprende a identificarlos.",
    readingTime: "5 min",
    publishedAt: "2026-05-05",
    content: [
      {
        body: "Muchas personas describen una sensación de barriga inflada, gases o pesadez que aparece a lo largo del día, especialmente después de comer. Es una molestia habitual y, en la mayoría de casos, tiene un origen tratable.",
      },
      {
        heading: "Factores frecuentes",
        body: "Dietas ricas en fermentables (FODMAPs), intolerancia a la lactosa o al gluten, sobrecrecimiento bacteriano, tránsito intestinal lento, estrés y trastornos funcionales digestivos como el síndrome de intestino irritable.",
      },
      {
        heading: "Qué se puede hacer",
        body: "El primer paso es identificar patrones: qué alimentos, momentos del día o situaciones agravan los síntomas. En consulta orientamos el diagnóstico y, cuando corresponde, ajustamos la dieta, indicamos pruebas específicas o tratamientos dirigidos.",
      },
    ],
  },
  {
    slug: "colonoscopia-cuando-puede-indicarse",
    tag: "Colonoscopia",
    title: "Colonoscopia: cuándo puede indicarse este estudio",
    excerpt:
      "La colonoscopia es una herramienta clave para prevenir y detectar enfermedades del colon. Descubre en qué situaciones se recomienda.",
    readingTime: "4 min",
    publishedAt: "2026-04-18",
    content: [
      {
        body: "La colonoscopia permite observar directamente el interior del colon y recto, tomar biopsias y remover pólipos en un mismo procedimiento. Es una herramienta fundamental en la prevención del cáncer colorrectal.",
      },
      {
        heading: "Indicaciones frecuentes",
        body: "Tamizaje a partir de los 45 años (o antes con antecedentes familiares), sangrado digestivo bajo, cambios persistentes del hábito intestinal, anemia sin causa clara, dolor abdominal recurrente o seguimiento de pólipos previos.",
      },
      {
        heading: "Cómo prepararse",
        body: "La preparación es tan importante como el estudio mismo. Se indica un esquema de dieta y solución evacuante que la doctora te explicará según tu caso. Un colon bien preparado permite una evaluación completa y segura.",
      },
    ],
  },
  {
    slug: "ecoendoscopia-que-es-y-para-que-sirve",
    tag: "Ecoendoscopia",
    title: "Ecoendoscopia: qué es y para qué sirve",
    excerpt:
      "La ecoendoscopia combina endoscopia y ultrasonido para evaluar con detalle páncreas, vía biliar y otras estructuras digestivas.",
    readingTime: "6 min",
    publishedAt: "2026-04-02",
    content: [
      {
        body: "La ecoendoscopia (EUS) es un procedimiento avanzado que combina un endoscopio con una sonda de ultrasonido en su extremo. Permite obtener imágenes muy detalladas de estructuras que están dentro y alrededor del tubo digestivo.",
      },
      {
        heading: "Para qué se utiliza",
        body: "Evaluación de lesiones del páncreas, quistes pancreáticos, cálculos en la vía biliar, estudio de tumores digestivos, ganglios y engrosamientos de la pared del tubo digestivo. Además, permite realizar biopsias guiadas con gran precisión.",
      },
      {
        heading: "Cuándo se indica",
        body: "La ecoendoscopia se indica cuando se necesita mayor detalle que el que ofrecen otros estudios de imagen, o cuando se requiere una biopsia dirigida. La decisión siempre se toma en conjunto con la evaluación clínica.",
      },
    ],
  },
  {
    slug: "sintomas-digestivos-que-no-deberias-ignorar",
    tag: "Alarma",
    title: "Síntomas digestivos que no deberías ignorar",
    excerpt:
      "Hay señales digestivas que ameritan una valoración prioritaria. Conoce cuáles son y por qué es importante no postergar la consulta.",
    readingTime: "4 min",
    publishedAt: "2026-03-14",
    content: [
      {
        body: "Muchas molestias digestivas son leves y transitorias, pero hay signos que ameritan una evaluación oportuna con una gastroenteróloga. Detectarlos a tiempo puede marcar una diferencia importante.",
      },
      {
        heading: "Señales de alarma",
        body: "Sangrado en heces, vómitos con sangre, pérdida de peso sin explicación, anemia, dificultad progresiva para tragar, dolor abdominal intenso o nocturno que despierta, cambios sostenidos en el hábito intestinal y antecedentes familiares de cáncer digestivo.",
      },
      {
        heading: "Por qué no postergar",
        body: "Una valoración temprana permite orientar rápido el diagnóstico y, cuando corresponde, iniciar tratamiento oportuno. Escuchar al cuerpo y consultar a tiempo es siempre la mejor decisión.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
