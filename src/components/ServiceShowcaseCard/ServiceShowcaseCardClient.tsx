"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/components/Button/Button";
import type { Showcase } from "@/data/showcase";
import styles from "./ServiceShowcaseCardClient.module.css";

type Props = Showcase & {
  onOpen: () => void;
};

export function ServiceShowcaseCardClient({
  src,
  alt,
  icon,
  title,
  tagline,
  onOpen,
}: Props) {
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
      <div className={styles.overlay}>
        <h3 className={styles.overlayTitle}>{title}</h3>
        <p className={styles.overlayTagline}>{tagline}</p>
        <Button onClick={onOpen} size="md">
          Ver detalles del servicio
        </Button>
      </div>
    </div>
  );
}
