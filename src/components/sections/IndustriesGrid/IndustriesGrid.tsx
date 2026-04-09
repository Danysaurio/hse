import { Container } from "@/components/Container/Container";
import { IndustryCard } from "@/components/IndustryCard/IndustryCard";
import { INDUSTRIES } from "@/data/industries";
import styles from "./IndustriesGrid.module.css";

export function IndustriesGrid() {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>Industrias que servimos</h2>
        <div className={styles.grid}>
          {INDUSTRIES.map((i) => (
            <IndustryCard key={i.alt} {...i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
