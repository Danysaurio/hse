import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./ValueCard.module.css";

type Props = {
  title: string;
  items: string[];
};

export function ValueCard({ title, items }: Props) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h3>{title}</h3>
      </header>
      <ul className={styles.list}>
        {items.map((it) => (
          <li key={it}>
            <FontAwesomeIcon icon={faChevronRight} className={styles.chev} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
