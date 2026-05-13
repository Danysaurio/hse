import Image from "next/image";
import { Container } from "@/components/Container/Container";
import { Button } from "@/components/Button/Button";
import styles from "./CtaBanner.module.css";

type Props = {
  title: React.ReactNode;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  variant?: "navy" | "light";
  bgImage?: string;
  bgPosition?: string;
};

export function CtaBanner({
  title,
  description,
  ctaLabel,
  ctaHref,
  variant = "light",
  bgImage,
  bgPosition = "center",
}: Props) {
  return (
    <section className={`${styles.banner} ${styles[variant]} ${bgImage ? styles.withBg : ""}`}>
      {bgImage && (
        <Image
          src={bgImage}
          alt=""
          fill
          sizes="100vw"
          className={styles.bgImg}
          style={{ objectPosition: bgPosition }}
          aria-hidden
        />
      )}
      <Container>
        <div className={styles.inner}>
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.desc}>{description}</p>}
          <Button href={ctaHref} size="md">
            {ctaLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
