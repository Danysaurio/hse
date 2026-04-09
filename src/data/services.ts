import {
  faTriangleExclamation,
  faHelmetSafety,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type Service = {
  icon: IconDefinition;
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    icon: faTriangleExclamation,
    title: "Gestión Integral de Riesgos",
    description:
      "Domina tus riesgos con metodologías probadas que convierten la incertidumbre en decisiones seguras y estratégicas.",
  },
  {
    icon: faHelmetSafety,
    title: "Seguridad Industrial y Protección Civil",
    description:
      "Protege lo esencial fortaleciendo la resiliencia de tu organización con protocolos confiables y adaptados a cada entorno.",
  },
  {
    icon: faHandHoldingHeart,
    title: "Sustentabilidad y Responsabilidad Corporativa",
    description:
      "Impulsa tu sustentabilidad integrando prácticas responsables que elevan tu competitividad y consolidan tu reputación institucional.",
  },
];
