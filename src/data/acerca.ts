import {
  faGraduationCap,
  faAward,
  faShieldHalved,
  faScaleBalanced,
  faFileCircleCheck,
  faHelmetSafety,
  faTowerBroadcast,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import type { TimelineItem } from "@/components/Timeline/Timeline";

export const ROLES: TimelineItem[] = [
  { year: "1993", company: "Grupo Primex", role: "Superintendente de Medio Ambiente, Seguridad e Higiene" },
  { year: "2005", company: "MASISA", role: "Gerente de Logística Nacional" },
  { year: "2008", company: "QUALTIA", role: "Gerente de Operaciones Occidente" },
  { year: "2014", company: "PMV", role: "Gerente HSE" },
  { year: "2019", company: "VESTOLIT / ORBIA", role: "Gerente HSE México" },
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
    logo: "/Credenciales/UDLA.png",
    description:
      "Ingeniero Químico Industrial, egresado de la UDLA, Puebla, cédula 1319129.",
  },
  {
    icon: faAward,
    logo: "/Credenciales/ITESM.png",
    description:
      "Maestro en Sistemas Ambientales, egresado del ITESM, cédula 3777378.",
  },
  {
    icon: faShieldHalved,
    logo: "/Credenciales/colegio-peritos.png",
    description:
      "Perito en Seguridad Laboral 0031, certificado por el Colegio Nacional de Peritos en Seguridad Laboral y Protección Civil.",
  },
  {
    icon: faScaleBalanced,
    logo: "/Credenciales/colegio-peritos.png",
    description:
      "Perito Ambiental P.0172-2022, considerado en la \"Lista de personas que pueden fungir como peritas o peritos ante los órganos del poder judicial de la federación\" desde 2022.",
  },
  {
    icon: faFileCircleCheck,
    logo: "/Credenciales/cqi-irca.png",
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
    icon: faCertificate,
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
    logo: "/Credenciales/colegio-peritos.png",
    description:
      "Colegio Nacional de Peritos en Seguridad Laboral y Protección Civil",
  },
];
