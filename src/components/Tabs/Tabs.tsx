"use client";

import { useState } from "react";
import styles from "./Tabs.module.css";

export type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

export function Tabs({ tabs, initial }: { tabs: Tab[]; initial?: string }) {
  const [active, setActive] = useState(initial ?? tabs[0]?.id);

  return (
    <div className={styles.wrap}>
      <div className={styles.tablist} role="tablist">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={active === t.id}
            className={`${styles.tab} ${active === t.id ? styles.active : ""}`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className={styles.panel} role="tabpanel">
        {tabs.find((t) => t.id === active)?.content}
      </div>
    </div>
  );
}
