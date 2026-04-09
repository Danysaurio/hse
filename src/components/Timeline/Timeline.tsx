import styles from "./Timeline.module.css";

export type TimelineItem = {
  year: string;
  company: string;
  role: string;
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className={styles.timeline}>
      {items.map((it) => (
        <li key={it.year} className={styles.item}>
          <span className={styles.year}>{it.year}</span>
          <span className={styles.dot} aria-hidden />
          <div className={styles.body}>
            <p className={styles.company}>{it.company}</p>
            <p className={styles.role}>{it.role}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
