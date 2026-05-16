import { Container } from "@/components/Container/Container";
import { IndustryCard } from "@/components/IndustryCard/IndustryCard";
import { INDUSTRIES } from "@/data/industries";
import styles from "./IndustriesGrid.module.css";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";

export function IndustriesGrid() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle align="left" as="h2">Industrias que servimos</SectionTitle>
        <div className={styles.grid}>
          {INDUSTRIES.map((i) => (
            <IndustryCard key={i.alt} {...i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
