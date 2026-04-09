export type Industry = {
  src: string;
  alt: string;
  label?: string;
};

export const INDUSTRIES: Industry[] = [
  { src: "/oil-gas.jpg", alt: "Oil & Gas", label: "Oil & Gas" },
  { src: "/quimica.jpg", alt: "Industria química", label: "Química" },
  { src: "/alimentos.jpg", alt: "Industria alimentos", label: "Alimentos" },
  { src: "/traslado-valores.jpg", alt: "Traslado de valores", label: "Traslado de valores" },
];
