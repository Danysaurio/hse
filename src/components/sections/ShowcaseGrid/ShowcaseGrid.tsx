import { Container } from "@/components/Container/Container";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { ServiceShowcaseCard } from "@/components/ServiceShowcaseCard/ServiceShowcaseCard";
import { SHOWCASE } from "@/data/showcase";
import styles from "./ShowcaseGrid.module.css";

export function ShowcaseGrid() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle uppercase>Nuestros Servicios</SectionTitle>
        <div className={styles.grid}>
          {SHOWCASE.map((s) => (
            <ServiceShowcaseCard key={s.alt} {...s} />
          ))}
        </div>
      </Container>
    </section>
  );
}
