import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type ShowcaseModalData = {
  objetivo: string;
  modalidad: string;
  componentes: string[];
  beneficios: string[];
};

export type Showcase = {
  src?: string;
  alt: string;
  label?: string;
  icon?: IconDefinition;
  title: string;
  tagline: string;
  modal: ShowcaseModalData;
};

export const SHOWCASE: Showcase[] = [
  {
    src: "/capacitacion.jpg",
    alt: "Capacitación corporativa",
    label: "Capacitación",
    title: "CAPACITACIÓN TÉCNICA Y NORMATIVA",
    tagline: "Transforma el conocimiento en resultados medibles.",
    modal: {
      objetivo:
        "Formar equipos sólidos y competentes en normas nacionales (NOM), estándares internacionales y metodologías aplicadas, asegurando cumplimiento regulatorio y fortaleciendo la cultura preventiva.",
      modalidad: "Presencial, virtual o híbrida.",
      componentes: [
        "Programas de capacitación en NOM y estándares internacionales",
        "Talleres prácticos y simulaciones adaptadas a cada sector",
        "Materiales didácticos y recursos visuales editables",
        "Evaluaciones de competencias y retroalimentación personalizada",
        "Certificados internos de participación y aprovechamiento",
      ],
      beneficios: [
        "Cumplimiento normativo garantizado",
        "Equipos más competentes y resilientes",
        "Cultura preventiva como ventaja competitiva",
        "Transferencia de conocimiento con resultados medibles",
      ],
    },
  },
  {
    src: "/consultoria.jpg",
    alt: "Consultoría especializada",
    label: "Consultoría",
    title: "CONSULTORÍA ESPECIALIZADA",
    tagline: "Tu estrategia, fortalecida con experiencia y visión global.",
    modal: {
      objetivo:
        "Diseñar, implementar y mejorar Sistemas de Gestión Integrados o específicos, desarrollando programas de seguridad y cumplimiento legal con indicadores estratégicos.",
      modalidad: "Presencial, virtual o híbrida.",
      componentes: [
        "Diagnóstico organizacional y normativo",
        "Diseño de programas de seguridad y cumplimiento legal",
        "Implementación de Sistemas de Gestión Integrados (SGI)",
        "Desarrollo de indicadores estratégicos de desempeño",
        "Acompañamiento técnico y estratégico continuo",
      ],
      beneficios: [
        "Soluciones adaptadas a la medida de la organización",
        "Fortalecimiento de la estrategia institucional",
        "Mayor competitividad y confianza frente a clientes y autoridades",
        "Visión global aplicada a contextos locales",
      ],
    },
  },
  {
    src: "/auditoria.jpg",
    alt: "Auditoría técnica",
    label: "Auditoría",
    title: "AUDITORÍA TÉCNICA Y NORMATIVA",
    tagline: "Auditorías que aseguran credibilidad y cumplimiento real.",
    modal: {
      objetivo:
        "Validar la efectividad de los sistemas de gestión mediante auditorías y peritajes especializados, asegurando credibilidad y cumplimiento real.",
      modalidad:
        "Auditorías presenciales o híbridas, adaptadas al sector y alcance requerido.",
      componentes: [
        "Auditorías técnicas en seguridad laboral, salud ocupacional, medio ambiente y sustentabilidad",
        "Peritajes especializados con rigor metodológico",
        "Diagnósticos precisos con hallazgos y recomendaciones",
        "Reportes ejecutivos para la alta dirección",
        "Planes de acción correctivos y preventivos",
      ],
      beneficios: [
        "Credibilidad frente a clientes, autoridades y sociedad",
        "Corrección de desviaciones con base en diagnósticos precisos",
        "Proyección de responsabilidad institucional",
        "Cumplimiento real y verificable",
      ],
    },
  },
  {
    src: "/poliza-hse.jpg",
    alt: "Póliza HSE",
    label: "Póliza HSE",
    title: "PÓLIZA HSE SOLUTIONS",
    tagline:
      "Un servicio integral que garantiza resiliencia, cumplimiento y sustentabilidad.",
    modal: {
      objetivo:
        "Acompañar a la organización en la implementación, evaluación y mejora continua de sus sistemas de gestión en seguridad, salud, medio ambiente y sustentabilidad, garantizando cumplimiento normativo y resiliencia operativa.",
      modalidad:
        'Presencial, virtual o híbrida, según necesidades del cliente. Certificación Interna: Sello "HSE Solutions Certified" como distintivo de cumplimiento y mejora continua.',
      componentes: [
        "Diagnóstico inicial técnico y normativo",
        "Auditorías especializadas (seguridad, salud, medio ambiente, sustentabilidad)",
        "Reportes ejecutivos con hallazgos, riesgos y oportunidades",
        "Planes de acción estratégicos con indicadores de desempeño",
        "Documentación clave: protocolos, matrices, fichas y formatos editables",
        "Capacitación especializada y entrenamiento técnico",
        "Acompañamiento en implementación de sistemas de gestión (SGI o específicos)",
        "Planes de acción correctivos y preventivos",
      ],
      beneficios: [
        "Cumplimiento regulatorio y reducción de riesgos críticos",
        "Fortalecimiento de la cultura preventiva y la sustentabilidad",
        "Credibilidad ante clientes, autoridades y sociedad",
        "Acceso a recursos visuales, técnicos y formativos",
        "Flexibilidad y confidencialidad en la atención",
      ],
    },
  },
];
