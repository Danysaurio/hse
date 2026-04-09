import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./ServiceShowcaseCard.module.css";

type Props = {
  src?: string;
  alt: string;
  label?: string;
  icon?: IconProp;
};

export function ServiceShowcaseCard({ src, alt, label, icon }: Props) {
  return (
    <div className={styles.card}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.img}
        />
      ) : (
        <div className={styles.placeholder} aria-label={alt}>
          {icon && (
            <span className={styles.placeholderIcon}>
              <FontAwesomeIcon icon={icon} />
            </span>
          )}
        </div>
      )}
      {label && <div className={styles.label}>{label}</div>}
    </div>
  );
}
