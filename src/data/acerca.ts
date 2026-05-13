import {
  faGraduationCap,
  faAward,
  faShieldHalved,
  faScaleBalanced,
  faFileCircleCheck,
  faHelmetSafety,
  faTowerBroadcast,
  faCertificate,
  faScaleBalanced as faBalance,
  faMedal,
  faCube,
  faPuzzlePiece,
  faCircleCheck,
  faRegistered,
} from "@fortawesome/free-solid-svg-icons";
import type { TimelineItem } from "@/components/Timeline/Timeline";

export const ROLES: TimelineItem[] = [
  { year: "1993", company: "Grupo Primex", role: "Superintendente de Medio Ambiente, Seguridad e Higiene" },
  { year: "2005", company: "MASISA", role: "Gerente de Logística Nacional" },
  { year: "2008", company: "QUALTIA", role: "Gerente de Operaciones Occidente" },
  { year: "2014", company: "PMV", role: "Gerente HSE" },
  { year: "2019", company: "VESTOLIT / ORBIA", role: "Gerente HSE México" },
];

export const COMPANY_PILLARS = {
  mission:
    "Acompañar a empresas e instituciones en la prevención y gestión de riesgos mediante consultoría especializada, capacitación y recursos estratégicos de alto impacto. Integramos rigor técnico, creatividad y comunicación visual para garantizar seguridad, continuidad operativa y sustentabilidad.",
  vision:
    "Ser la consultoría líder en gestión integral de riesgos, seguridad industrial, protección civil y sustentabilidad en Latinoamérica, reconocida por transformar la complejidad normativa y técnica en soluciones claras, viables e innovadoras que fortalecen la resiliencia de organizaciones y comunidades.",
  methodology:
    "En HSE Solutions® abordamos cada desafío con una metodología integral que combina diagnóstico técnico, análisis de contexto y co-creación estratégica. Integramos normativa, experiencia operativa y recursos visuales adaptables para diseñar soluciones precisas, sustentables y alineadas con los objetivos institucionales de cada cliente.",
};

export const COMPANY_VALUES = [
  {
    title: "Integridad",
    icon: faBalance,
    description:
      "Actuamos con transparencia y ética, asegurando confianza en cada decisión y servicio.",
  },
  {
    title: "Excelencia",
    icon: faMedal,
    description:
      "Llevamos los estándares técnicos y visuales para entregar resultados medibles.",
  },
  {
    title: "Innovación",
    icon: faCube,
    description:
      "Transformamos retos en oportunidades con soluciones creativas, útiles y adaptables.",
  },
  {
    title: "Resiliencia",
    icon: faCircleCheck,
    description:
      "Fortalecemos la capacidad de respuesta institucional frente a riesgos y cambios.",
  },
  {
    title: "Colaboración",
    icon: faPuzzlePiece,
    description:
      "Co-creamos soluciones con nuestros clientes integrando conocimiento y experiencia.",
  },
];

export const COMPANY_CREDENTIALS = [
  {
    title: "Marca Registrada",
    icon: faCertificate,
    description:
      "HSE Solutions® es una marca registrada ante el Instituto Mexicano de la Propiedad Industrial.",
  },
  {
    title: "Cumplimiento Fiscal y Legal",
    icon: faRegistered,
    description:
      "Entidad registrada ante el SAT como Persona Física con Actividades Empresariales y Profesionales.",
  },
];

export const SPECIALTIES = [
  {
    title: "Estrategia y Cumplimiento",
    items: [
      "Diseño e implementación de Sistemas de Gestión Integrados.",
      "Auditoría técnica y documental en materia de HSE.",
      "Capacitación normativa y técnica especializada por sector.",
    ],
  },
  {
    title: "Prevención y Respuesta Crítica",
    items: [
      "Especialista en Análisis de Riesgos y Evaluación de Impacto Ambiental.",
      "Investigación pericial de accidentes.",
      "Coordinación de soluciones integrales y manejo de crisis.",
    ],
  },
  {
    title: "Operaciones y Sectores Clave",
    items: [
      "Liderazgo en Seguridad, Medio Ambiente y Salud Ocupacional.",
      "Visión integral: Producción, Ingeniería y Cadena de Suministro.",
      "Industrias: Química, Petroquímica, Oil & Gas, Maderera, Alimentos y Traslado de Valores.",
    ],
  },
];

export const CREDENTIALS = [
  {
    icon: faGraduationCap,
    logo: "/Credenciales/UDLA1.png",
    logoWidth: 140,
    logoHeight: 40,
    description:
      "Ingeniero Químico Industrial, egresado de la UDLA, Puebla, cédula 1319129.",
  },
  {
    icon: faAward,
    logo: "/Credenciales/ITESM.png",
    logoWidth: 70,
    logoHeight: 70,
    description:
      "Maestro en Sistemas Ambientales, egresado del ITESM, cédula 3777378.",
  },
  {
    icon: faShieldHalved,
    logo: "/Credenciales/colegio-peritos1.png",
    logoWidth: 170,
    logoHeight: 150,
    description:
      "Perito en Seguridad Laboral 0031, certificado por el Colegio Nacional de Peritos en Seguridad Laboral y Protección Civil.",
  },
  {
    icon: faScaleBalanced,
    logoWidth: 120,
    logoHeight: 120,
    description:
      "Perito Ambiental P.0172-2022, considerado en la \"Lista de personas que pueden fungir como peritas o peritos ante los órganos del poder judicial de la federación\" desde 2022.",
  },
  {
    icon: faFileCircleCheck,
    logo: "/Credenciales/cqi-irca.png",
    logoWidth: 220,
    logoHeight: 44,
    description:
      "Auditor Líder certificado por CQI / IRCA en Sistemas de Gestión de Calidad basado en ISO9001:2015, número de certificado 57329223-146912508.",
  },
  {
    icon: faFileCircleCheck,
    description:
      "Experto técnico en Sistemas de Gestión Ambiental ET-SGA-016-OC y en Sistemas de Gestión de la Calidad ET-SGC-018-OC, aprobado por la EMA.",
  },
  {
    icon: faHelmetSafety,
    description:
      "Capacitador externo con registro ante la STPS: COCM641103D50-0005.",
  },
  {
    icon: faTowerBroadcast,
    description:
      "Técnico Básico en Gestión Integral de Riesgos con folio 22164HO7235, CENAPRED.",
  },
  {
    icon: faFileCircleCheck,
    description:
      "Experto técnico en Normas Oficiales Mexicanas de la STPS, ETSH-117-UI, aprobado por la EMA.",
  },
];

export const AFFILIATIONS = [
  {
    label: "CANACO",
    logo: "/Credenciales/canaco-1.png",
    description: "CANACO (Cámara Nacional de Comercio, Servicios y Turismo)",
  },
  {
    label: "Colegio Nacional",
    logo: "/Credenciales/colegio-peritos1.png",
    description:
      "Colegio Nacional de Peritos en Seguridad Laboral y Protección Civil",
  },
];
