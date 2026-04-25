"use client";

import { useState } from "react";
import styles from "./AcercaTabs.module.css";
import { Container } from "@/components/Container/Container";

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type Props = {
  tabs: Tab[];
  initial?: string;
};

export function AcercaTabs({ tabs, initial }: Props) {
  const [active, setActive] = useState(initial ?? tabs[0]?.id);

  return (
    <div className={styles.wrap}>
      <Container>
      <div className={styles.tablist} role="tablist" aria-label="Acerca de">
        {tabs.map((tab) => {
          const selected = tab.id === active;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              className={`${styles.tab} ${selected ? styles.active : ""}`}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </Container>

      <div className={styles.panel} role="tabpanel">
        {tabs.find((tab) => tab.id === active)?.content}
      </div>
    </div>
  );
}
