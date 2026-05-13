import Image from "next/image";
import styles from "./IndustryCard.module.css";

type Props = {
  src: string;
  alt: string;
  label?: string;
};

export function IndustryCard({ src, alt, label }: Props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 700px) 100vw, 25vw"
          className={styles.img}
        />
        {label && (
          <div className={styles.overlay}>
            <span>{label}</span>
          </div>
        )}
      </div>
      {label && <p className={styles.mobileLabel}>{label}</p>}
    </div>
  );
}
