import Image from "next/image";
import styles from "./IndustryCard.module.css";

type Props = {
  src: string;
  alt: string;
  label?: string;
};

export function IndustryCard({ src, alt, label }: Props) {
  return (
    <div className={styles.card}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className={styles.img}
      />
      {label && (
        <div className={styles.overlay}>
          <span>{label}</span>
        </div>
      )}
    </div>
  );
}
