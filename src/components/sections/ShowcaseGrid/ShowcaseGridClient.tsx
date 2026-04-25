"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ServiceShowcaseCardClient } from "@/components/ServiceShowcaseCard/ServiceShowcaseCardClient";
import { ServiceModal } from "@/components/ServiceModal/ServiceModal";
import type { Showcase } from "@/data/showcase";
import styles from "./ShowcaseGrid.module.css";

type Props = {
  items: Showcase[];
};

export function ShowcaseGridClient({ items }: Props) {
  const [activeService, setActiveService] = useState<Showcase | null>(null);

  return (
    <>
      <div className={styles.grid}>
        {items.map((s) => (
          <ServiceShowcaseCardClient
            key={s.alt}
            {...s}
            onOpen={() => setActiveService(s)}
          />
        ))}
      </div>
      <AnimatePresence>
        {activeService && (
          <ServiceModal
            key={activeService.title}
            data={activeService}
            onClose={() => setActiveService(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
