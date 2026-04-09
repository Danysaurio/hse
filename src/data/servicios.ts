import {
  faChalkboardUser,
  faUsersGear,
  faMagnifyingGlassChart,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type DetailedService = {
  icon: IconDefinition;
  title: string;
  lead: string;
  body: string;
  itemsLabel: string;
  items: string[];
};

export const DETAILED_SERVICES: DetailedService[] = [
  {
    icon: faChalkboardUser,
    title: "Capacitación\nTécnica y Normativa",
    lead: "Domina la normativa, impulsa la excelencia.",
    body:
      "Formamos equipos sólidos y competentes en NOM, estándares internacionales y metodologías aplicadas, asegurando cumplimiento regulatorio y cultura preventiva. La capacitación se convierte en una ventaja competitiva que eleva la seguridad y la sustentabilidad de tu organización. Transforma el conocimiento en resultados medibles.",
    itemsLabel: "Ofrecemos capacitación en:",
    items: [
      "NOM (Normas Oficiales Mexicanas)",
      "Estándares Internacionales",
      "Metodologías aplicadas",
    ],
  },
  {
    icon: faUsersGear,
    title: "Consultoría\nEspecializada",
    lead: "Soluciones a la medida de tu organización.",
    body:
      "Diseñamos, implementamos y mejoramos Sistemas de Gestión Integrados o específicos, desarrollando programas de seguridad y cumplimiento legal con indicadores estratégicos. Nuestra consultoría convierte la gestión de riesgos en un motor de competitividad y confianza institucional. Tu estrategia, fortalecida con experiencia y visión global.",
    itemsLabel: "Lo que ofrecemos:",
    items: [
      "NOM (Normas Oficiales Mexicanas)",
      "Estándares Internacionales",
      "Metodologías aplicadas",
    ],
  },
  {
    icon: faMagnifyingGlassChart,
    title: "Auditoría\nTécnica y Normativa",
    lead: "Rigor que genera confianza.",
    body:
      "Validamos la efectividad de tus sistemas en seguridad laboral, salud ocupacional, medio ambiente y sustentabilidad, con auditorías y peritajes especializados. Nuestros diagnósticos precisos permiten corregir desviaciones y proyectar responsabilidad frente a clientes, autoridades y sociedad. Auditorías que aseguran credibilidad y cumplimiento real.",
    itemsLabel: "Ofrecemos auditoría en temas de:",
    items: [
      "NOM (Normas Oficiales Mexicanas)",
      "Estándares Internacionales",
      "Metodologías aplicadas",
    ],
  },
];

export const POLICY_BENEFITS = [
  {
    title: "Cobertura total en un solo contrato:",
    desc: "Integramos consultoría, capacitación y auditoría en un paquete único.",
  },
  {
    title: "Enfoque preventivo:",
    desc: "Anticipamos riesgos para transformarlos en ventajas competitivas y operaciones sustentables.",
  },
  {
    title: "Recursos visuales y editables:",
    desc: "protocolos y matices claros que facilitan la adopción y transferencia de conocimiento en su equipo.",
  },
  {
    title: "Indicadores medibles (KPIs):",
    desc: "Traducimos cada acción en métricas verificables que respaldan resultados.",
  },
  {
    title: "Sello de confianza institucional:",
    desc: "el distintivo HSE Solutions Certified avala su cumplimiento.",
  },
  {
    title: "Aliado estratégico:",
    desc: "más que proveedores, brindamos un acompañamiento permanente.",
  },
];
