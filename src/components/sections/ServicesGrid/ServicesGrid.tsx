import { Container } from "@/components/Container/Container";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard/ServiceCard";
import { SERVICES } from "@/data/services";
import styles from "./ServicesGrid.module.css";

export function ServicesGrid() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle uppercase>Lo que ofrecemos</SectionTitle>
        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </Container>
    </section>
  );
}
