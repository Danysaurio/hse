import { Container } from "@/components/Container/Container";
import styles from "./PageHero.module.css";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className={styles.hero}>
      <Container>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </Container>
    </section>
  );
}
