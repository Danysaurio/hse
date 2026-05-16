"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ServiceModal } from "@/components/ServiceModal/ServiceModal";
import { Button } from "@/components/Button/Button";
import type { Showcase } from "@/data/showcase";
import styles from "./page.module.css";

type Props = {
  showcase: Showcase;
  className?: string;
  label?: string;
};

export function FichaTecnicaBtn({ showcase, className, label = "Consulta Ficha Técnica" }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span className={`${styles.fichaBtn}${className ? ` ${className}` : ""}`}>
        <Button variant="muted" size="sm" onClick={() => setOpen(true)}>
          {label}
        </Button>
      </span>
      <AnimatePresence>
        {open && (
          <ServiceModal
            key={showcase.title}
            data={showcase}
            onClose={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
