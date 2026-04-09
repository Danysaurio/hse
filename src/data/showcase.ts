import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type Showcase = {
  src?: string;
  alt: string;
  label?: string;
  icon?: IconDefinition;
};

export const SHOWCASE: Showcase[] = [
  { src: "/capacitacion.jpg", alt: "Capacitación corporativa", label: "Capacitación" },
  { src: "/consultoria.jpg", alt: "Consultoría especializada", label: "Consultoría" },
  { src: "/auditoria.jpg", alt: "Auditoría técnica", label: "Auditoría" },
  { src: "/poliza-hse.jpg", alt: "Póliza HSE", label: "Póliza HSE" },
];
