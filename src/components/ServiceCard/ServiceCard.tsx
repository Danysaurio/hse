import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./ServiceCard.module.css";

type Props = {
  icon: IconProp;
  title: string;
  description: string;
};

export function ServiceCard({ icon, title, description }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrap}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </article>
  );
}
