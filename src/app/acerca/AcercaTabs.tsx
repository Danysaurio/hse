"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
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
  paramKey?: string;
};

function AceracTabsInner({ tabs, initial, paramKey = "tab" }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeFromUrl = searchParams.get(paramKey);
  const active = tabs.find((t) => t.id === activeFromUrl)?.id ?? initial ?? tabs[0]?.id;

  function setActive(id: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(paramKey, id);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

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

      <div className={styles.mobileStack}>
        {tabs.map((tab) => (
          <div key={tab.id}>{tab.content}</div>
        ))}
      </div>
    </div>
  );
}

export function AcercaTabs(props: Props) {
  return (
    <Suspense>
      <AceracTabsInner {...props} />
    </Suspense>
  );
}
